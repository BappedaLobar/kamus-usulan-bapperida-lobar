import openpyxl
import json

wb = openpyxl.load_workbook('LBA-raw_data-indeks_desa-2026.xlsx', data_only=True)
ws = wb['RUMUSAN']
headers4 = [cell.value for cell in ws[4]]

skor_cols = []
for c in range(1, 200):
    h4 = str(headers4[c-1] or '')
    if h4.startswith('SKOR') or 'SKOR ' in h4:
        clean_name = h4.replace('SKOR ', '').replace('SKOR', '').strip()
        skor_cols.append((c, clean_name))

print('Total Skor Cols:', len(skor_cols))

results = {}
for r in range(5, ws.max_row + 1):
    kec = ws.cell(row=r, column=3).value
    desa = ws.cell(row=r, column=4).value
    if not desa or str(desa).strip() == '':
        continue
    
    kritis = []
    sedang = []
    aman = []
    for col_idx, name in skor_cols:
        val = ws.cell(row=r, column=col_idx).value
        if val == 1:
            kritis.append(name)
        elif val in [2, 3]:
            sedang.append(name)
        elif val in [4, 5]:
            aman.append(name)
    
    key = f"{str(kec).strip().upper()}_{str(desa).strip().upper()}"
    results[key] = {
        'kecamatan': str(kec).strip(),
        'desa': str(desa).strip(),
        'jmlKritis': len(kritis),
        'jmlSedang': len(sedang),
        'jmlAman': len(aman),
        'masalahKritisDetail': kritis
    }

print(f'Total desa dihitung: {len(results)}')

# Cari Terong Tawah
for k, v in results.items():
    if 'TERONG' in k:
        print('TERONG TAWAH:', v['desa'], v['kecamatan'], 'Kritis:', v['jmlKritis'], 'Sedang:', v['jmlSedang'], 'Aman:', v['jmlAman'])

with open('src/data/desaProblemStats.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, ensure_ascii=False, indent=2)

print('Berhasil disimpan ke src/data/desaProblemStats.json')
