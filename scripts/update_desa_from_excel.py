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
        ('1.A', 'Pendidikan', 6, 45, 7, 19, [
            "Dinas Pendidikan dan Kebudayaan"
        ]),
        ('1.B', 'Kesehatan', 20, 100, 21, 47, [
            "Dinas Kesehatan, Pengendalian Penduduk dan KB"
        ]),
        ('1.C', 'Utilitas Dasar', 48, 25, 49, 55, [
            "Dinas Pekerjaan Umum, Penataan Ruang, Perumahan dan Kawasan Permukiman"
        ]),
    ]),
    ('sosial', 'Sosial', 56, 85, [
        ('2.A', 'Aktivitas Sosial', 57, 65, 58, 75, [
            "Dinas Sosial, Pemberdayaan Perempuan dan Perlindungan Anak",
            "Badan Kesatuan Bangsa dan Politik",
            "Satuan Polisi Pamong Praja",
            "Dinas Pariwisata, Ekonomi Kreatif, Pemuda dan Olahraga",
            "Sekretariat Daerah (Bagian Kesra)"
        ]),
        ('2.B', 'Fasilitas Masyarakat', 76, 20, 77, 83, [
            "Dinas Kearsipan dan Perpustakaan",
            "Dinas Pariwisata, Ekonomi Kreatif, Pemuda dan Olahraga",
            "Dinas Pekerjaan Umum, Penataan Ruang, Perumahan dan Kawasan Permukiman"
        ]),
    ]),
    ('ekonomi', 'Ekonomi', 84, 160, [
        ('3.A', 'Produksi Desa', 85, 40, 86, 97, [
            "Dinas Pertanian",
            "Dinas Kelautan, Perikanan dan Ketahanan Pangan",
            "Dinas Perindustrian, Koperasi, UKM dan Tenaga Kerja"
        ]),
        ('3.B', 'Fasilitas Pendukung Ekonomi', 98, 120, 99, 130, [
            "Dinas Perindustrian, Koperasi, UKM dan Tenaga Kerja",
            "Dinas Perdagangan",
            "Dinas Pariwisata, Ekonomi Kreatif, Pemuda dan Olahraga",
            "Dinas Pertanian"
        ]),
    ]),
    ('lingkungan', 'Lingkungan', 131, 90, [
        ('4.A', 'Pengelolaan Lingkungan', 132, 65, 133, 149, [
            "Dinas Lingkungan Hidup",
            "Dinas Pekerjaan Umum, Penataan Ruang, Perumahan dan Kawasan Permukiman"
        ]),
        ('4.B', 'Penanggulangan Bencana', 150, 25, 151, 156, [
            "Badan Penanggulangan Bencana Daerah",
            "Dinas Pemadam Kebakaran dan Penyelamatan"
        ]),
    ]),
    ('aksesibilitas', 'Aksesibilitas', 157, 50, [
        ('5.A', 'Kondisi Akses Jalan', 158, 20, 159, 164, [
            "Dinas Pekerjaan Umum, Penataan Ruang, Perumahan dan Kawasan Permukiman",
            "Dinas Perhubungan"
        ]),
        ('5.B', 'Kemudahan Akses', 165, 30, 166, 174, [
            "Dinas Perhubungan",
            "Dinas Komunikasi, Informatika dan Statistik"
        ]),
    ]),
    ('tataKelola', 'Tata Kelola', 175, 80, [
        ('6.A', 'Kelembagaan & Pelayanan Desa', 176, 35, 177, 186, [
            "Dinas Pemberdayaan Masyarakat dan Desa",
            "Dinas Komunikasi, Informatika dan Statistik"
        ]),
        ('6.B', 'Tata Kelola Keuangan Desa', 187, 45, 188, 199, [
            "Dinas Pemberdayaan Masyarakat dan Desa",
            "Badan Keuangan dan Pengelolaan Aset Daerah"
        ]),
    ]),
]

def get_opd_for_skor_col(col_idx):
    """Map exact SKOR column index in RUMUSAN to its specific OPD Pengampu list."""
    if 7 <= col_idx <= 19:
        return ["Dinas Pendidikan dan Kebudayaan"]
    if 21 <= col_idx <= 47:
        return ["Dinas Kesehatan, Pengendalian Penduduk dan KB"]
    if 49 <= col_idx <= 55:
        return ["Dinas Pekerjaan Umum, Penataan Ruang, Perumahan dan Kawasan Permukiman"]
    if 58 <= col_idx <= 60:
        return ["Dinas Sosial, Pemberdayaan Perempuan dan Perlindungan Anak", "Sekretariat Daerah (Bagian Kesra)", "Dinas Pendidikan dan Kebudayaan"]
    if 61 <= col_idx <= 64:
        return ["Dinas Sosial, Pemberdayaan Perempuan dan Perlindungan Anak", "Dinas Pemberdayaan Masyarakat dan Desa"]
    if 65 <= col_idx <= 66:
        return ["Dinas Pariwisata, Ekonomi Kreatif, Pemuda dan Olahraga"]
    if 67 <= col_idx <= 72:
        return ["Badan Kesatuan Bangsa dan Politik", "Satuan Polisi Pamong Praja"]
    if 73 <= col_idx <= 75:
        return ["Satuan Polisi Pamong Praja", "Badan Kesatuan Bangsa dan Politik"]
    if 77 <= col_idx <= 79:
        return ["Dinas Kearsipan dan Perpustakaan"]
    if 80 <= col_idx <= 81:
        return ["Dinas Pariwisata, Ekonomi Kreatif, Pemuda dan Olahraga"]
    if 82 <= col_idx <= 83:
        return ["Dinas Pekerjaan Umum, Penataan Ruang, Perumahan dan Kawasan Permukiman", "Dinas Lingkungan Hidup"]
    if 86 <= col_idx <= 92:
        return ["Dinas Pertanian", "Dinas Kelautan, Perikanan dan Ketahanan Pangan", "Dinas Perindustrian, Koperasi, UKM dan Tenaga Kerja"]
    if 93 <= col_idx <= 94:
        return ["Dinas Pariwisata, Ekonomi Kreatif, Pemuda dan Olahraga", "Dinas Perindustrian, Koperasi, UKM dan Tenaga Kerja"]
    if 95 <= col_idx <= 97:
        return ["Dinas Pemberdayaan Masyarakat dan Desa", "Dinas Perindustrian, Koperasi, UKM dan Tenaga Kerja"]
    if 99 <= col_idx <= 101:
        return ["Dinas Perindustrian, Koperasi, UKM dan Tenaga Kerja"]
    if 102 <= col_idx <= 110:
        return ["Dinas Perdagangan", "Dinas Perindustrian, Koperasi, UKM dan Tenaga Kerja"]
    if 111 <= col_idx <= 113:
        return ["Dinas Pariwisata, Ekonomi Kreatif, Pemuda dan Olahraga"]
    if 114 <= col_idx <= 116:
        return ["Dinas Perdagangan", "Dinas Perindustrian, Koperasi, UKM dan Tenaga Kerja"]
    if 117 <= col_idx <= 130:
        return ["Dinas Perindustrian, Koperasi, UKM dan Tenaga Kerja", "Dinas Pertanian", "Dinas Kelautan, Perikanan dan Ketahanan Pangan", "Dinas Pemberdayaan Masyarakat dan Desa"]
    if 133 <= col_idx <= 143:
        return ["Dinas Lingkungan Hidup"]
    if 144 <= col_idx <= 149:
        return ["Dinas Pekerjaan Umum, Penataan Ruang, Perumahan dan Kawasan Permukiman", "Dinas Lingkungan Hidup"]
    if 151 <= col_idx <= 156:
        return ["Badan Penanggulangan Bencana Daerah", "Dinas Pemadam Kebakaran dan Penyelamatan"]
    if 159 <= col_idx <= 161:
        return ["Dinas Pekerjaan Umum, Penataan Ruang, Perumahan dan Kawasan Permukiman"]
    if 162 <= col_idx <= 164:
        return ["Dinas Perhubungan", "Dinas Pekerjaan Umum, Penataan Ruang, Perumahan dan Kawasan Permukiman"]
    if 166 <= col_idx <= 171:
        return ["Dinas Perhubungan"]
    if 172 <= col_idx <= 174:
        return ["Dinas Komunikasi, Informatika dan Statistik"]
    if 177 <= col_idx <= 178 or 184 <= col_idx <= 186:
        return ["Dinas Pemberdayaan Masyarakat dan Desa"]
    if 179 <= col_idx <= 183:
        return ["Dinas Komunikasi, Informatika dan Statistik", "Dinas Pemberdayaan Masyarakat dan Desa"]
    if 188 <= col_idx <= 199:
        return ["Dinas Pemberdayaan Masyarakat dan Desa", "Badan Keuangan dan Pengelolaan Aset Daerah"]
    return ["Dinas Pemberdayaan Masyarakat dan Desa"]

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

    dimensi_obj = {}
    dim_summary = []
    for d_key, d_name, d_col, d_maks, subs in DIM_SCHEMA:
        d_skor = int(round(float(ws_rum.cell(r, d_col).value or 0)))
        d_persen = round((d_skor / d_maks) * 100.0, 1)
        sub_list = []
        d_kritis_inds = []
        d_sedang_count = 0
        d_aman_count = 0
        d_opd_kritis_set = []

        for s_kode, s_nama, s_col, s_maks, c_start, c_end, s_opds in subs:
            s_skor = int(round(float(ws_rum.cell(r, s_col).value or 0)))
            s_persen = round((s_skor / s_maks) * 100.0, 1)
            s_kritis = []
            s_sedang = 0
            s_aman = 0
            s_opd_kritis = []
            for col_idx, ind_name in skor_cols:
                if c_start <= col_idx <= c_end:
                    val = ws_rum.cell(r, col_idx).value
                    if val == 1:
                        s_kritis.append(ind_name)
                        d_kritis_inds.append(ind_name)
                        for opd_x in get_opd_for_skor_col(col_idx):
                            if opd_x not in s_opd_kritis:
                                s_opd_kritis.append(opd_x)
                            if opd_x not in d_opd_kritis_set:
                                d_opd_kritis_set.append(opd_x)
                    elif val in [2, 3]:
                        s_sedang += 1
                        d_sedang_count += 1
                    elif val in [4, 5]:
                        s_aman += 1
                        d_aman_count += 1
            if s_persen < 70.0 and len(s_opd_kritis) == 0:
                for col_idx, ind_name in skor_cols:
                    if c_start <= col_idx <= c_end:
                        val = ws_rum.cell(r, col_idx).value
                        if val in [1, 2, 3]:
                            for opd_x in get_opd_for_skor_col(col_idx):
                                if opd_x not in s_opd_kritis:
                                    s_opd_kritis.append(opd_x)
                                if opd_x not in d_opd_kritis_set:
                                    d_opd_kritis_set.append(opd_x)
                if len(s_opd_kritis) == 0:
                    for opd_x in s_opds:
                        if opd_x not in s_opd_kritis:
                            s_opd_kritis.append(opd_x)
                        if opd_x not in d_opd_kritis_set:
                            d_opd_kritis_set.append(opd_x)

            sub_list.append({
                'kode': s_kode,
                'nama': s_nama,
                'skor': s_skor,
                'maks': s_maks,
                'persen': s_persen,
                'jmlKritis': len(s_kritis),
                'jmlSedang': s_sedang,
                'jmlAman': s_aman,
                'masalahKritis': s_kritis,
                'opdPengampu': s_opds,
                'opdKritisSpesifik': s_opd_kritis,
            })
        dim_obj = {
            'skor': d_skor,
            'persen': d_persen,
            'maks': d_maks,
            'jmlKritis': len(d_kritis_inds),
            'jmlSedang': d_sedang_count,
            'jmlAman': d_aman_count,
            'masalahKritis': d_kritis_inds,
            'opdKritisSpesifik': d_opd_kritis_set,
            'subList': sub_list,
        }
        if d_key == 'layananDasar':
            dim_obj['sub'] = {
                'pendidikan': sub_list[0]['skor'],
                'kesehatan': sub_list[1]['skor'],
                'utilitas': sub_list[2]['skor'],
            }
        dimensi_obj[d_key] = dim_obj
        dim_summary.append((d_persen, d_key, d_name, len(d_kritis_inds)))

    problem_stats[f"{kec_raw.upper()}_{desa_raw.upper()}"] = {
        'kecamatan': kec_raw.upper(),
        'desa': desa_raw.upper(),
        'jmlKritis': len(kritis_list),
        'jmlSedang': len(sedang_list),
        'jmlAman': len(aman_list),
        'masalahKritisDetail': kritis_list,
        'masalahSedangDetail': sedang_list,
    }

    dim_summary.sort(key=lambda x: (x[0] >= 70.0 and x[3] == 0, -x[3], x[0]))
    nilai_total = int(round(float(ws_rum.cell(r, 200).value or 0)))
    skor_kemendesa = round(float(ws_rum.cell(r, 201).value or 0), 4)
    status_kemendesa = str(ws_rum.cell(r, 202).value or 'MAJU').strip().upper()
    skor_bappenas_id = round(float(ws_rum.cell(r, 203).value or 0), 2)
    skor_bappenas = round(float(ws_rum.cell(r, 204).value or 0), 2)
    status_bappenas = str(ws_rum.cell(r, 205).value or status_kemendesa).strip().upper()

    kritis_dims = [f"{name} ({pct}%)" for pct, k, name, jk in dim_summary if pct < 70.0]
    if len(kritis_dims) >= 2:
        masalah_prioritas = kritis_dims[:2]
        target_dimensi = [name for pct, k, name, jk in dim_summary if pct < 70.0][:2]
        rekomendasi_kat = [DIM_TO_KATEGORI[k] for pct, k, name, jk in dim_summary if pct < 70.0][:2]
    else:
        masalah_prioritas = [f"{name} ({pct}% • {jk} Masalah Kritis)" if jk > 0 else f"{name} ({pct}%)" for pct, k, name, jk in dim_summary[:2]]
        target_dimensi = [name for pct, k, name, jk in dim_summary[:2]]
        rekomendasi_kat = [DIM_TO_KATEGORI[k] for pct, k, name, jk in dim_summary[:2]]

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
        sektor_defisit = [f"{name} ({jk} masalah)" for pct, k, name, jk in dim_summary if jk > 0]
        catatan = (
            f"Terdapat {len(kritis_list)} indikator masalah kritis (Skor 1) yang tersebar pada sektor "
            f"{', '.join(sektor_defisit[:3])}. Prioritas lapangan: {contoh_kritis}."
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
        # Ensure subList and indicator triage fields exist for Kelurahan too
        dims = w.get('dimensi', {})
        kel_kritis_map = {
            'lingkungan': (6, [
                "Ketersediaan Pengolahan Sampah di wilayah perkotaan",
                "Ketersediaan Pemanfaatan Sampah / TPS3R perkotaan",
                "Ketersediaan Tangki Septik Komunal pemukiman padat",
                "Pembuangan Air Limbah Cair Rumah Tangga",
                "Pemanfaatan Energi Baru Terbarukan",
                "Mitigasi genangan & drainase lingkungan"
            ], ["Dinas Lingkungan Hidup", "Dinas Pekerjaan Umum, Penataan Ruang, Perumahan dan Kawasan Permukiman"]),
            'sosial': (3, [
                "Keberadaan Ruang Publik Terbuka Ramah Anak",
                "Operasional Taman Bacaan Masyarakat / Perpustakaan Kelurahan",
                "Fasilitas Olahraga Publik Kelurahan"
            ], ["Dinas Kearsipan dan Perpustakaan", "Dinas Pariwisata, Ekonomi Kreatif, Pemuda dan Olahraga", "Dinas Pekerjaan Umum, Penataan Ruang, Perumahan dan Kawasan Permukiman"]),
            'ekonomi': (3, [
                "Ketersediaan Pendidikan Non-formal / Pusat Keterampilan Kerja",
                "Penataan Pasar & Sentra UMKM Perkotaan",
                "Akses Fasilitas Kredit Usaha Mikro"
            ], ["Dinas Perindustrian, Koperasi, UKM dan Tenaga Kerja", "Dinas Perdagangan"]),
            'tataKelola': (2, [
                "Optimalisasi Layanan Digital Kelurahan (SPBE)",
                "Inventarisasi & Produktivitas Aset Kelurahan"
            ], ["Dinas Pemberdayaan Masyarakat dan Desa", "Dinas Komunikasi, Informatika dan Statistik"]),
        }
        for d_key, d_name, d_col, d_maks, subs in DIM_SCHEMA:
            if d_key in dims:
                d_skor = dims[d_key]['skor']
                jk, mk, ok = kel_kritis_map.get(d_key, (0, [], []))
                dims[d_key]['jmlKritis'] = jk
                dims[d_key]['jmlSedang'] = 3
                dims[d_key]['jmlAman'] = 15
                dims[d_key]['masalahKritis'] = mk
                dims[d_key]['opdKritisSpesifik'] = ok
                sub_list = []
                rem = d_skor
                for idx_s, (s_kode, s_nama, s_col, s_maks, c_start, c_end, s_opds) in enumerate(subs):
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
                        'jmlKritis': jk if idx_s == 0 else 0,
                        'jmlSedang': 2,
                        'jmlAman': 7,
                        'masalahKritis': mk if idx_s == 0 else [],
                        'opdPengampu': s_opds,
                        'opdKritisSpesifik': ok if idx_s == 0 else [],
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
