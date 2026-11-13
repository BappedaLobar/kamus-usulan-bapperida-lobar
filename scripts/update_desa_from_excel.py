import openpyxl
import json
import re

wb = openpyxl.load_workbook('LBA-raw_data-indeks_desa-2026.xlsx', data_only=True)
ws_rum = wb['RUMUSAN']
ws_raw = wb['Raw Data']

# 1. Extract all 127 SKOR columns from RUMUSAN row 4
headers4 = [ws_rum.cell(4, c).value for c in range(1, 200)]
skor_cols = []
for c in range(1, 200):
    h4 = str(headers4[c - 1] or '')
    if h4.startswith('SKOR') or 'SKOR ' in h4:
        clean_name = h4.replace('SKOR ', '').replace('SKOR', '').strip()
        skor_cols.append((c, clean_name))

print(f"Total SKOR columns in RUMUSAN: {len(skor_cols)}")

# 2. Extract Raw Data by (KECAMATAN, DESA)
raw_by_key = {}
for r in range(6, ws_raw.max_row + 1):
    kec = str(ws_raw.cell(r, 4).value or '').strip().upper()
    desa = str(ws_raw.cell(r, 5).value or '').strip().upper()
    if not desa:
        continue

    def clean_str(val):
        if val is None:
            return ''
        s = str(val).strip()
        if s in ['0', '-', 'None', 'null']:
            return ''
        return s

    kode_desa = clean_str(ws_raw.cell(r, 1).value) or clean_str(ws_raw.cell(r, 27).value)
    koordinat = clean_str(ws_raw.cell(r, 29).value)
    alamat = clean_str(ws_raw.cell(r, 30).value)
    nama_kades = clean_str(ws_raw.cell(r, 33).value)
    status_kades = clean_str(ws_raw.cell(r, 34).value)
    email_desa = clean_str(ws_raw.cell(r, 38).value)
    web_desa = clean_str(ws_raw.cell(r, 43).value)
    masa_jabatan = clean_str(ws_raw.cell(r, 45).value)
    periode_kades = clean_str(ws_raw.cell(r, 46).value)

    raw_by_key[(kec, desa)] = {
        'kodeWilayah': kode_desa,
        'koordinatDesa': koordinat,
        'alamatDesa': alamat,
        'namaKepalaDesa': nama_kades,
        'statusKepalaDesa': status_kades,
        'emailDesa': email_desa,
        'webDesa': web_desa,
        'masaJabatanKades': masa_jabatan,
        'periodeKades': periode_kades,
    }

print(f"Total Raw Data rows extracted: {len(raw_by_key)}")

# 3. Extract RUMUSAN by (KECAMATAN, DESA)
DIM_SCHEMA = [
    ('layananDasar', 'Layanan Dasar', 5, 170, [
        ('1.A', 'Pendidikan', 6, 45),
        ('1.B', 'Kesehatan', 20, 100),
        ('1.C', 'Utilitas Dasar', 48, 25),
    ]),
    ('sosial', 'Sosial', 56, 85, [
        ('2.A', 'Aktivitas Sosial', 57, 65),
        ('2.B', 'Fasilitas Masyarakat', 76, 20),
    ]),
    ('ekonomi', 'Ekonomi', 84, 160, [
        ('3.A', 'Produksi Desa', 85, 40),
        ('3.B', 'Fasilitas Pendukung Ekonomi', 98, 120),
    ]),
    ('lingkungan', 'Lingkungan', 131, 90, [
        ('4.A', 'Pengelolaan Lingkungan', 132, 65),
        ('4.B', 'Penanggulangan Bencana', 150, 25),
    ]),
    ('aksesibilitas', 'Aksesibilitas', 157, 50, [
        ('5.A', 'Kondisi Akses Jalan', 158, 20),
        ('5.B', 'Kemudahan Akses', 165, 30),
    ]),
    ('tataKelola', 'Tata Kelola', 175, 80, [
        ('6.A', 'Kelembagaan & Pelayanan Desa', 176, 35),
        ('6.B', 'Tata Kelola Keuangan Desa', 187, 45),
    ]),
]

DIM_TO_KATEGORI = {
    'layananDasar': 'Pendidikan & Sekolah',
    'sosial': 'Keagamaan, Sosial & Budaya',
    'ekonomi': 'Pertanian, Peternakan & Pangan',
    'lingkungan': 'Sampah, Lingkungan & Kebencanaan',
    'aksesibilitas': 'Jalan, Jembatan & Infrastruktur',
    'tataKelola': 'Pemerintahan Desa & Digitalisasi',
}

rum_by_key = {}
problem_stats = {}

for r in range(6, ws_rum.max_row + 1):
    kec_raw = str(ws_rum.cell(r, 3).value or '').strip()
    desa_raw = str(ws_rum.cell(r, 4).value or '').strip()
    if not desa_raw:
        continue
    key = (kec_raw.upper(), desa_raw.upper())

    kritis_list = []
    sedang_list = []
    aman_list = []
    for col_idx, ind_name in skor_cols:
        val = ws_rum.cell(r, col_idx).value
        if val == 1:
            kritis_list.append(ind_name)
        elif val in [2, 3]:
            sedang_list.append(ind_name)
        elif val in [4, 5]:
            aman_list.append(ind_name)

    problem_stats[f"{kec_raw.upper()}_{desa_raw.upper()}"] = {
        'kecamatan': kec_raw.upper(),
        'desa': desa_raw.upper(),
        'jmlKritis': len(kritis_list),
        'jmlSedang': len(sedang_list),
        'jmlAman': len(aman_list),
        'masalahKritisDetail': kritis_list,
        'masalahSedangDetail': sedang_list,
    }

    dimensi_obj = {}
    dim_summary = []
    for d_key, d_name, d_col, d_maks, subs in DIM_SCHEMA:
        d_skor = int(round(float(ws_rum.cell(r, d_col).value or 0)))
        d_persen = round((d_skor / d_maks) * 100.0, 1)
        sub_list = []
        for s_kode, s_nama, s_col, s_maks in subs:
            s_skor = int(round(float(ws_rum.cell(r, s_col).value or 0)))
            s_persen = round((s_skor / s_maks) * 100.0, 1)
            sub_list.append({
                'kode': s_kode,
                'nama': s_nama,
                'skor': s_skor,
                'maks': s_maks,
                'persen': s_persen,
            })
        dim_obj = {
            'skor': d_skor,
            'persen': d_persen,
            'maks': d_maks,
            'subList': sub_list,
        }
        if d_key == 'layananDasar':
            dim_obj['sub'] = {
                'pendidikan': sub_list[0]['skor'],
                'kesehatan': sub_list[1]['skor'],
                'utilitas': sub_list[2]['skor'],
            }
        dimensi_obj[d_key] = dim_obj
        dim_summary.append((d_persen, d_key, d_name))

    dim_summary.sort(key=lambda x: x[0])
    nilai_total = int(round(float(ws_rum.cell(r, 200).value or 0)))
    skor_kemendesa = round(float(ws_rum.cell(r, 201).value or 0), 4)
    status_kemendesa = str(ws_rum.cell(r, 202).value or 'MAJU').strip().upper()
    skor_bappenas_id = round(float(ws_rum.cell(r, 203).value or 0), 2)
    skor_bappenas = round(float(ws_rum.cell(r, 204).value or 0), 2)
    status_bappenas = str(ws_rum.cell(r, 205).value or status_kemendesa).strip().upper()

    kritis_dims = [f"{name} ({pct}%)" for pct, k, name in dim_summary if pct < 70.0]
    if len(kritis_dims) >= 2:
        masalah_prioritas = kritis_dims[:2]
        target_dimensi = [name for pct, k, name in dim_summary if pct < 70.0][:2]
        rekomendasi_kat = [DIM_TO_KATEGORI[k] for pct, k, name in dim_summary if pct < 70.0][:2]
    else:
        masalah_prioritas = [f"{name} ({pct}%)" for pct, k, name in dim_summary[:2]]
        target_dimensi = [name for pct, k, name in dim_summary[:2]]
        rekomendasi_kat = [DIM_TO_KATEGORI[k] for pct, k, name in dim_summary[:2]]

    if status_kemendesa == 'MANDIRI':
        status_prioritas = 'Prioritas Mandiri'
    elif status_kemendesa == 'MAJU':
        status_prioritas = 'Prioritas Tinggi'
    else:
        status_prioritas = 'Prioritas Mendesak'

    if kritis_dims:
        contoh_kritis = '; '.join(kritis_list[:2])
        catatan = (
            f"Terdapat {len(kritis_list)} indikator defisit (Skor 1) dengan sektor kritis: "
            f"{', '.join(kritis_dims)}. Prioritas lapangan: {contoh_kritis}."
        )
    elif len(kritis_list) > 0:
        contoh_kritis = '; '.join(kritis_list[:2])
        catatan = (
            f"Seluruh 6 dimensi ≥70%, namun masih terdapat {len(kritis_list)} indikator berskor 1 "
            f"({contoh_kritis}) yang perlu diintervensi."
        )
    else:
        catatan = "Kondisi seluruh dimensi dan indikator telah memenuhi standar baik/mandiri; fokus pemeliharaan."

    rum_by_key[key] = {
        'nilaiTotal': nilai_total,
        'skorKemendesa': skor_kemendesa,
        'statusKemendesa': status_kemendesa,
        'skorBappenasId': skor_bappenas_id,
        'skorBappenas': skor_bappenas,
        'statusBappenas': status_bappenas,
        'indeksKomposit': round(100.0 - skor_bappenas, 1),
        'statusPrioritas': status_prioritas,
        'dimensi': dimensi_obj,
        'masalahPrioritas': masalah_prioritas,
        'targetDimensi': target_dimensi,
        'catatanMusrenbang': catatan,
        'rekomendasiKategori': rekomendasi_kat,
    }

print(f"Total RUMUSAN rows extracted: {len(rum_by_key)}")

# Save updated problem stats JSON & JS
with open('src/data/desaProblemStats.json', 'w', encoding='utf-8') as f:
    json.dump(problem_stats, f, ensure_ascii=False, indent=2)

with open('src/data/desaProblemStats.js', 'w', encoding='utf-8') as f:
    f.write("// Database Jumlah Masalah 127 Indikator Sheet RUMUSAN Indeks Desa 2026 Kemendesa & Bappenas\n")
    f.write("export default ")
    json.dump(problem_stats, f, ensure_ascii=False, indent=2)
    f.write(";\n")

# 4. Read existing src/data/desaLobarData.js and merge seamlessly
with open('src/data/desaLobarData.js', 'r', encoding='utf-8') as f:
    js_text = f.read()

start_marker = "export const WILAYAH_LOBAR = ["
end_marker = "];\n\n// Fungsi Helper"
if end_marker not in js_text:
    end_marker = "];\r\n\r\n// Fungsi Helper"

idx_start = js_text.index(start_marker) + len("export const WILAYAH_LOBAR = ")
idx_end = js_text.index(end_marker) + 1

existing_wilayah = json.loads(js_text[idx_start:idx_end])
print(f"Existing WILAYAH_LOBAR count: {len(existing_wilayah)}")

KELURAHAN_RAW_INFO = {
    'DASAN GERES': {
        'namaKepalaDesa': 'Lurah Dasan Geres (Wilayah Perkotaan)',
        'statusKepalaDesa': 'Lurah (ASN)',
        'koordinatDesa': '-8.6685, 116.1225',
        'alamatDesa': 'Kantor Lurah Dasan Geres, Kec. Gerung, Kab. Lombok Barat',
        'emailDesa': '',
        'webDesa': '',
        'masaJabatanKades': '-',
        'periodeKades': '-',
    },
    'GERUNG SELATAN': {
        'namaKepalaDesa': 'Lurah Gerung Selatan (Wilayah Perkotaan)',
        'statusKepalaDesa': 'Lurah (ASN)',
        'koordinatDesa': '-8.6852, 116.1248',
        'alamatDesa': 'Kantor Lurah Gerung Selatan, Jl. Soekarno-Hatta, Kec. Gerung, Kab. Lombok Barat',
        'emailDesa': '',
        'webDesa': '',
        'masaJabatanKades': '-',
        'periodeKades': '-',
    },
    'GERUNG UTARA': {
        'namaKepalaDesa': 'Lurah Gerung Utara (Wilayah Perkotaan)',
        'statusKepalaDesa': 'Lurah (ASN)',
        'koordinatDesa': '-8.6745, 116.1235',
        'alamatDesa': 'Kantor Lurah Gerung Utara, Jl. Gatot Subroto, Kec. Gerung, Kab. Lombok Barat',
        'emailDesa': '',
        'webDesa': '',
        'masaJabatanKades': '-',
        'periodeKades': '-',
    },
}

updated_wilayah = []
matched_count = 0
for w in existing_wilayah:
    kec_u = w['kecamatan'].strip().upper()
    nama_u = w['nama'].strip().upper()
    key = (kec_u, nama_u)

    if w['tipe'] == 'Kelurahan':
        kel_info = KELURAHAN_RAW_INFO.get(nama_u, {})
        w.update(kel_info)
        # Ensure subList exists for Kelurahan too
        dims = w.get('dimensi', {})
        for d_key, d_name, d_col, d_maks, subs in DIM_SCHEMA:
            if d_key in dims and 'subList' not in dims[d_key]:
                d_skor = dims[d_key]['skor']
                sub_list = []
                rem = d_skor
                for idx_s, (s_kode, s_nama, s_col, s_maks) in enumerate(subs):
                    if idx_s == len(subs) - 1:
                        s_skor = max(0, min(s_maks, rem))
                    else:
                        s_skor = min(s_maks, round(d_skor * (s_maks / d_maks)))
                        rem -= s_skor
                    sub_list.append({
                        'kode': s_kode,
                        'nama': s_nama,
                        'skor': s_skor,
                        'maks': s_maks,
                        'persen': round((s_skor / s_maks) * 100.0, 1),
                    })
                dims[d_key]['subList'] = sub_list
        updated_wilayah.append(w)
        continue

    if key in rum_by_key and key in raw_by_key:
        matched_count += 1
        rum_data = rum_by_key[key]
        raw_data = raw_by_key[key]
        merged = {**w}
        merged['kodeWilayah'] = raw_data['kodeWilayah'] or w.get('kodeWilayah', '')
        merged['namaKepalaDesa'] = raw_data['namaKepalaDesa']
        merged['statusKepalaDesa'] = raw_data['statusKepalaDesa']
        merged['koordinatDesa'] = raw_data['koordinatDesa']
        merged['alamatDesa'] = raw_data['alamatDesa']
        merged['emailDesa'] = raw_data['emailDesa']
        merged['webDesa'] = raw_data['webDesa']
        merged['masaJabatanKades'] = raw_data['masaJabatanKades']
        merged['periodeKades'] = raw_data['periodeKades']

        merged.update(rum_data)
        updated_wilayah.append(merged)
    else:
        print(f"WARNING: Key not found in Excel for {key}")
        updated_wilayah.append(w)

print(f"Successfully matched and updated {matched_count} Desa from Sheet RUMUSAN & Raw Data.")

new_wilayah_json = json.dumps(updated_wilayah, ensure_ascii=False, indent=2)
new_js_text = js_text[:idx_start] + new_wilayah_json + js_text[idx_end:]

# Update file header comment if needed
with open('src/data/desaLobarData.js', 'w', encoding='utf-8') as f:
    f.write(new_js_text)

print("Updated src/data/desaLobarData.js successfully!")
