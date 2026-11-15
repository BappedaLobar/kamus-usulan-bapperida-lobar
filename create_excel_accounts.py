import json
import os
import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

def build_excel():
    with open('users_dump.json', 'r', encoding='utf-8') as f:
        users = json.load(f)

    wb = openpyxl.Workbook()
    # remove default sheet
    wb.remove(wb.active)

    # Styles
    font_family = "Segoe UI"
    
    # Colors
    c_navy_dark = "1E3A8A"    # Header Deep Blue
    c_blue_primary = "2563EB" # Primary Accent
    c_blue_light = "DBEAFE"   # Light Blue zebra / header
    c_slate_header = "0F172A" # Very dark slate
    c_slate_sub = "334155"    # Slate
    c_green_dark = "065F46"   # Emerald Dark
    c_green_light = "D1FAE5"  # Emerald Light
    c_red_dark = "991B1B"     # Dark Red
    c_red_light = "FEE2E2"    # Light Red
    c_zebra = "F8FAFC"        # Very light zebra row
    c_border = "CBD5E1"       # Light gray border
    c_gold = "D97706"         # Amber/Gold

    thin_border = Border(
        left=Side(style='thin', color=c_border),
        right=Side(style='thin', color=c_border),
        top=Side(style='thin', color=c_border),
        bottom=Side(style='thin', color=c_border)
    )

    thick_bottom_border = Border(
        left=Side(style='thin', color=c_border),
        right=Side(style='thin', color=c_border),
        top=Side(style='thin', color=c_border),
        bottom=Side(style='medium', color=c_navy_dark)
    )

    # ==========================================
    # SHEET 1: RINGKASAN & SOP KEAMANAN
    # ==========================================
    ws1 = wb.create_sheet(title="Ringkasan & SOP Keamanan")
    ws1.views.sheetView[0].showGridLines = True

    # Title Block
    ws1.merge_cells("A1:G1")
    ws1["A1"] = "PEMERINTAH KABUPATEN LOMBOK BARAT"
    ws1["A1"].font = Font(name=font_family, size=13, bold=True, color="475569")
    ws1["A1"].alignment = Alignment(horizontal="left", vertical="center")

    ws1.merge_cells("A2:G2")
    ws1["A2"] = "BADAN PERENCANAAN PEMBANGUNAN DAERAH (BAPPERIDA)"
    ws1["A2"].font = Font(name=font_family, size=15, bold=True, color=c_navy_dark)
    ws1["A2"].alignment = Alignment(horizontal="left", vertical="center")

    ws1.merge_cells("A3:G3")
    ws1["A3"] = "DAFTAR DISTRIBUSI AKUN RESMI & HAK AKSES PENGGUNA APLIKASI PRE-SIPD"
    ws1["A3"].font = Font(name=font_family, size=11, bold=True, color="64748B")
    ws1["A3"].alignment = Alignment(horizontal="left", vertical="center")

    # Document Meta Box
    meta_rows = [
        ("Status Dokumen", "RAHASIA / INTERNAL RESMI KABUPATEN LOMBOK BARAT", c_red_dark, True),
        ("Total Akun Pengguna", "143 Akun Resmi Terdaftar & Siap Pakai", c_navy_dark, True),
        ("Sistem Otentikasi", "Role-Based Access Control (RBAC) + 2FA Google Authenticator Standar BSSN", c_slate_sub, False),
        ("Tahun Perencanaan", "RKPD 2027 (17 OPD Aktif) & RKPD 2028 (20 OPD Aktif)", c_slate_sub, False),
        ("Basis Data Wilayah", "10 Kecamatan, 119 Desa, dan 3 Kelurahan (Total 122 Wilayah)", c_slate_sub, False),
        ("Tanggal Penerbitan", "15 November 2026", c_slate_sub, False),
    ]

    curr_row = 5
    for label, val, color, is_bold in meta_rows:
        ws1[f"A{curr_row}"] = label
        ws1[f"A{curr_row}"].font = Font(name=font_family, size=10, bold=True, color="334155")
        ws1[f"A{curr_row}"].fill = PatternFill(start_color="F1F5F9", end_color="F1F5F9", fill_type="solid")
        ws1[f"A{curr_row}"].border = thin_border
        
        ws1.merge_cells(f"B{curr_row}:G{curr_row}")
        ws1[f"B{curr_row}"] = val
        ws1[f"B{curr_row}"].font = Font(name=font_family, size=10, bold=is_bold, color=color)
        ws1[f"B{curr_row}"].fill = PatternFill(start_color="FFFFFF", end_color="FFFFFF", fill_type="solid")
        for col in ["B", "C", "D", "E", "F", "G"]:
            ws1[f"{col}{curr_row}"].border = thin_border
        curr_row += 1

    curr_row += 1
    # Section: Pembagian Peran & Rekapitulasi Akun
    ws1.merge_cells(f"A{curr_row}:G{curr_row}")
    ws1[f"A{curr_row}"] = "REKAPITULASI JUMLAH AKUN BERDASARKAN HAK AKSES (ROLE)"
    ws1[f"A{curr_row}"].font = Font(name=font_family, size=11, bold=True, color="FFFFFF")
    ws1[f"A{curr_row}"].fill = PatternFill(start_color=c_navy_dark, end_color=c_navy_dark, fill_type="solid")
    ws1[f"A{curr_row}"].alignment = Alignment(horizontal="left", vertical="center", indent=1)
    curr_row += 1

    headers_role = ["No", "Peran (Role)", "Jumlah Akun", "Cakupan Hak Akses & Kewenangan", "Format Username", "Format NIP / ID", "Pola Password Awal"]
    for col_idx, h in enumerate(headers_role, 1):
        cell = ws1.cell(row=curr_row, column=col_idx, value=h)
        cell.font = Font(name=font_family, size=9, bold=True, color="FFFFFF")
        cell.fill = PatternFill(start_color=c_blue_primary, end_color=c_blue_primary, fill_type="solid")
        cell.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
        cell.border = thin_border
    curr_row += 1

    role_summary_data = [
        ("1", "Super Admin", "1 Akun", "Akses penuh konfigurasi sistem, kelola 143 akun, reset password, aktivasi 2FA, master kamus, dan ekspor RKPD", "admin.bapperida", "197903152005011008", "Bapperida#Lobar2027!"),
        ("2", "Verifikator", "20 Akun", "Verifikasi usulan teknis OPD pengampu, pemberian rekomendasi (Diterima / Ditolak), validasi ketersediaan belanja", "verif.<singkatan_opd>", "1982xx152010011xxx", "Verif#Lobar2027!"),
        ("3", "Operator Desa", "122 Akun", "Input usulan prioritas desa, cetak Kertas Kerja Pre-SIPD, kuota otomatis, akses data terisolasi desa sendiri", "op.<namadesa>", "Kode Wilayah Kemendagri", "Desa#Lobar2027!"),
        ("TOTAL", "Seluruh Pengguna", "143 Akun", "Sistem Terintegrasi Perencanaan Aspirasi 122 Desa/Kelurahan se-Kabupaten Lombok Barat", "-", "-", "-")
    ]

    for row_idx, r_data in enumerate(role_summary_data):
        is_total = (r_data[0] == "TOTAL")
        bg_col = "FEF3C7" if is_total else ("F8FAFC" if row_idx % 2 == 1 else "FFFFFF")
        font_c = c_navy_dark if is_total else "1E293B"
        bold_flag = is_total or (row_idx < 3)

        for col_idx, val in enumerate(r_data, 1):
            cell = ws1.cell(row=curr_row, column=col_idx, value=val)
            cell.font = Font(name=font_family, size=9, bold=bold_flag, color=font_c)
            cell.fill = PatternFill(start_color=bg_col, end_color=bg_col, fill_type="solid")
            cell.border = thin_border
            align_h = "center" if col_idx in [1, 3, 5, 6, 7] else "left"
            cell.alignment = Alignment(horizontal=align_h, vertical="center", wrap_text=True)
        curr_row += 1

    curr_row += 1
    # Section: Petunjuk Keamanan Siber & SOP Login
    ws1.merge_cells(f"A{curr_row}:G{curr_row}")
    ws1[f"A{curr_row}"] = "PETUNJUK KEAMANAN SIBER & STANDAR OPERASIONAL PROSEDUR (SOP) LOGIN"
    ws1[f"A{curr_row}"].font = Font(name=font_family, size=11, bold=True, color="FFFFFF")
    ws1[f"A{curr_row}"].fill = PatternFill(start_color=c_green_dark, end_color=c_green_dark, fill_type="solid")
    ws1[f"A{curr_row}"].alignment = Alignment(horizontal="left", vertical="center", indent=1)
    curr_row += 1

    sop_points = [
        ("1. Keamanan Siber & Sandi Awal", "Seluruh password awal telah dirancang memenuhi standar keamanan BSSN & OWASP (minimal 15 karakter, kombinasi huruf kapital, huruf kecil, angka, dan karakter khusus #/!). Jangan membagikan password kepada pihak yang tidak berhak."),
        ("2. Wajib Ganti Password Perdana", "Setiap pengguna (Operator Desa & Verifikator OPD) sangat disarankan melakukan pembaruan password pada saat pertama kali berhasil login demi menjaga integritas data usulan desa."),
        ("3. Isolasi Data Desa (Village Isolation)", "Operator Desa yang berhasil masuk hanya akan melihat usulan, riwayat verifikasi, serta kuota pagu milik desa/kelurahan yang bersangkutan. Data desa lain tidak dapat diakses atau diubah."),
        ("4. Validasi Tahun RKPD Verifikator OPD", "Verifikator OPD hanya diizinkan login pada tahun perencanaan RKPD di mana OPD tersebut memiliki peran pengampu usulan (17 OPD pada tahun 2027 dan 20 OPD pada tahun 2028)."),
        ("5. Otentikasi Ganda (2FA Google Authenticator)", "Untuk meningkatkan keamanan akun dari ancaman pengambilalihan akun (account takeover), Super Admin dan pengguna dapat mengaktifkan 2FA melalui menu 'Keamanan & Kelola User'."),
        ("6. Layanan Bantuan & Reset Akun", "Apabila akun terkunci, terjadi kelupaan password, atau mutasi operator desa, hubungi Tim Administrator Sistem Bapperida Kabupaten Lombok Barat untuk verifikasi identitas dan reset kredensial.")
    ]

    for title, desc in sop_points:
        ws1.merge_cells(f"A{curr_row}:B{curr_row}")
        ws1[f"A{curr_row}"] = title
        ws1[f"A{curr_row}"].font = Font(name=font_family, size=9.5, bold=True, color="0F172A")
        ws1[f"A{curr_row}"].fill = PatternFill(start_color="F1F5F9", end_color="F1F5F9", fill_type="solid")
        ws1[f"A{curr_row}"].border = thin_border
        ws1[f"B{curr_row}"].border = thin_border
        
        ws1.merge_cells(f"C{curr_row}:G{curr_row}")
        ws1[f"C{curr_row}"] = desc
        ws1[f"C{curr_row}"].font = Font(name=font_family, size=9, bold=False, color="334155")
        ws1[f"C{curr_row}"].fill = PatternFill(start_color="FFFFFF", end_color="FFFFFF", fill_type="solid")
        ws1[f"C{curr_row}"].alignment = Alignment(horizontal="left", vertical="center", wrap_text=True)
        for col in ["C", "D", "E", "F", "G"]:
            ws1[f"{col}{curr_row}"].border = thin_border
        curr_row += 1

    # Widths for Sheet 1
    col_widths_s1 = {"A": 6, "B": 22, "C": 14, "D": 45, "E": 24, "F": 24, "G": 24}
    for col_letter, width in col_widths_s1.items():
        ws1.column_dimensions[col_letter].width = width

    # ==========================================
    # SHEET 2: SUPER ADMIN & VERIFIKATOR OPD
    # ==========================================
    ws2 = wb.create_sheet(title="🔴 Admin & 🔵 Verifikator")
    ws2.views.sheetView[0].showGridLines = True

    # Title
    ws2.merge_cells("A1:K1")
    ws2["A1"] = "DAFTAR AKUN SUPER ADMIN & VERIFIKATOR PERANGKAT DAERAH (OPD)"
    ws2["A1"].font = Font(name=font_family, size=14, bold=True, color=c_navy_dark)
    ws2["A1"].alignment = Alignment(horizontal="left", vertical="center")

    ws2.merge_cells("A2:K2")
    ws2["A2"] = "Aplikasi Pre-SIPD RI Bapperida Kabupaten Lombok Barat | Standar Keamanan Cyber BSSN"
    ws2["A2"].font = Font(name=font_family, size=10, italic=True, color="64748B")
    ws2["A2"].alignment = Alignment(horizontal="left", vertical="center")

    curr_row = 4
    headers_s2 = [
        "No", "ID Akun", "Nama Pengguna / Jabatan", "Username Login", "NIP / Nomor Identitas", 
        "Password Awal", "Role / Hak Akses", "Instansi / Perangkat Daerah (OPD)", 
        "Tahun RKPD Aktif", "2FA Google Auth", "Status Akun"
    ]

    for col_idx, h in enumerate(headers_s2, 1):
        cell = ws2.cell(row=curr_row, column=col_idx, value=h)
        cell.font = Font(name=font_family, size=9.5, bold=True, color="FFFFFF")
        cell.fill = PatternFill(start_color=c_navy_dark, end_color=c_navy_dark, fill_type="solid")
        cell.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
        cell.border = thin_border
    ws2.row_dimensions[curr_row].height = 28
    curr_row += 1

    # Filter admin & verifikator from users
    admin_and_verif = [u for u in users if u["role"] in ["Super Admin", "Verifikator"]]

    for idx, u in enumerate(admin_and_verif, 1):
        is_admin = (u["role"] == "Super Admin")
        bg_col = "FFF1F2" if is_admin else ("F8FAFC" if idx % 2 == 1 else "FFFFFF")
        
        # Format Tahun Aktif
        thn_str = ", ".join(u.get("tahunAktif", [])) if u.get("tahunAktif") else ("Semua Tahun (Full Access)" if is_admin else "-")
        role_label = u["role"]
        
        row_vals = [
            idx,
            u["id"],
            u["nama"],
            u["username"],
            u["nip"],
            u["password"],
            role_label,
            u["instansi"],
            thn_str,
            "Tersedia (Siap Aktivasi)" if not u.get("googleAuthEnabled") else "Aktif",
            u["status"]
        ]

        for col_idx, val in enumerate(row_vals, 1):
            cell = ws2.cell(row=curr_row, column=col_idx, value=val)
            cell.font = Font(name=font_family, size=9, bold=(col_idx in [1, 4, 6, 7] or is_admin), 
                             color=(c_red_dark if (col_idx == 7 and is_admin) else (c_blue_primary if (col_idx == 7) else ("0F172A"))))
            cell.fill = PatternFill(start_color=bg_col, end_color=bg_col, fill_type="solid")
            cell.border = thin_border
            
            # Alignments
            if col_idx in [1, 2, 4, 5, 6, 7, 9, 10, 11]:
                cell.alignment = Alignment(horizontal="center", vertical="center")
            else:
                cell.alignment = Alignment(horizontal="left", vertical="center")
        
        ws2.row_dimensions[curr_row].height = 22
        curr_row += 1

    # Widths for Sheet 2
    col_widths_s2 = {
        "A": 5, "B": 22, "C": 48, "D": 22, "E": 24, "F": 22, 
        "G": 16, "H": 48, "I": 24, "J": 22, "K": 14
    }
    for col_letter, width in col_widths_s2.items():
        ws2.column_dimensions[col_letter].width = width

    # ==========================================
    # SHEET 3: OPERATOR DESA & KELURAHAN (122)
    # ==========================================
    ws3 = wb.create_sheet(title="🟢 Operator Desa (122 Wilayah)")
    ws3.views.sheetView[0].showGridLines = True

    # Title
    ws3.merge_cells("A1:K1")
    ws3["A1"] = "DAFTAR AKUN OPERATOR DESA & KELURAHAN SE-KABUPATEN LOMBOK BARAT"
    ws3["A1"].font = Font(name=font_family, size=14, bold=True, color=c_green_dark)
    ws3["A1"].alignment = Alignment(horizontal="left", vertical="center")

    ws3.merge_cells("A2:K2")
    ws3["A2"] = "119 Desa & 3 Kelurahan di 10 Kecamatan | Fitur Isolasi Data Desa Otomatis | Pre-SIPD Bapperida Lombok Barat"
    ws3["A2"].font = Font(name=font_family, size=10, italic=True, color="64748B")
    ws3["A2"].alignment = Alignment(horizontal="left", vertical="center")

    curr_row = 4
    headers_s3 = [
        "No", "ID Akun", "Kecamatan", "Tipe Wilayah", "Nama Desa / Kelurahan", 
        "Username Login", "Kode Wilayah (NIP)", "Password Awal", "Role / Hak Akses", 
        "Cakupan Data Terisolasi", "Status Akun"
    ]

    for col_idx, h in enumerate(headers_s3, 1):
        cell = ws3.cell(row=curr_row, column=col_idx, value=h)
        cell.font = Font(name=font_family, size=9.5, bold=True, color="FFFFFF")
        cell.fill = PatternFill(start_color=c_green_dark, end_color=c_green_dark, fill_type="solid")
        cell.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
        cell.border = thin_border
    ws3.row_dimensions[curr_row].height = 28
    curr_row += 1

    desas = [u for u in users if u["role"] == "Operator Desa"]
    # Sort by kecamatan then desa
    desas.sort(key=lambda x: (x.get("kecamatan", ""), x.get("desa", "")))

    last_kec = None
    kec_counter = 0

    for idx, u in enumerate(desas, 1):
        kec = u.get("kecamatan", "")
        # Add visual separator when kecamatan changes
        if kec != last_kec:
            last_kec = kec
            kec_counter += 1
            ws3.merge_cells(f"A{curr_row}:K{curr_row}")
            sec_cell = ws3[f"A{curr_row}"]
            sec_cell.value = f"WILAYAH KECAMATAN: {kec.upper()} (Kabupaten Lombok Barat)"
            sec_cell.font = Font(name=font_family, size=9.5, bold=True, color=c_green_dark)
            sec_cell.fill = PatternFill(start_color=c_green_light, end_color=c_green_light, fill_type="solid")
            sec_cell.alignment = Alignment(horizontal="left", vertical="center", indent=1)
            for c_letter in ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"]:
                ws3[f"{c_letter}{curr_row}"].border = thin_border
            ws3.row_dimensions[curr_row].height = 20
            curr_row += 1

        bg_col = "F8FAFC" if idx % 2 == 1 else "FFFFFF"
        tipe = u.get("tipe", "Desa")
        if tipe == "Kelurahan":
            bg_col = "FEF3C7" # subtle amber for kelurahan

        row_vals = [
            idx,
            u["id"],
            kec,
            tipe,
            u.get("desa", ""),
            u["username"],
            u.get("kodeWilayah", u.get("nip", "")),
            u["password"],
            u["role"],
            f"Hanya Data {tipe} {u.get('desa', '')}",
            u["status"]
        ]

        for col_idx, val in enumerate(row_vals, 1):
            cell = ws3.cell(row=curr_row, column=col_idx, value=val)
            cell.font = Font(name=font_family, size=9, bold=(col_idx in [1, 5, 6, 8]), 
                             color=(c_green_dark if col_idx == 9 else ("0F172A")))
            cell.fill = PatternFill(start_color=bg_col, end_color=bg_col, fill_type="solid")
            cell.border = thin_border
            
            if col_idx in [1, 2, 4, 6, 7, 8, 9, 11]:
                cell.alignment = Alignment(horizontal="center", vertical="center")
            else:
                cell.alignment = Alignment(horizontal="left", vertical="center")

        ws3.row_dimensions[curr_row].height = 21
        curr_row += 1

    # Widths for Sheet 3
    col_widths_s3 = {
        "A": 5, "B": 24, "C": 18, "D": 14, "E": 26, "F": 22, 
        "G": 18, "H": 22, "I": 16, "J": 32, "K": 14
    }
    for col_letter, width in col_widths_s3.items():
        ws3.column_dimensions[col_letter].width = width

    # ==========================================
    # SHEET 4: REKAP KESELURUHAN (143 AKUN)
    # ==========================================
    ws4 = wb.create_sheet(title="📋 Rekap Lengkap (143 Akun)")
    ws4.views.sheetView[0].showGridLines = True

    # Title
    ws4.merge_cells("A1:K1")
    ws4["A1"] = "REKAPITULASI KESELURUHAN AKUN PENGGUNA RESMI SISTEM PRE-SIPD (143 AKUN)"
    ws4["A1"].font = Font(name=font_family, size=14, bold=True, color=c_navy_dark)
    ws4["A1"].alignment = Alignment(horizontal="left", vertical="center")

    ws4.merge_cells("A2:K2")
    ws4["A2"] = "Master Sheet untuk Audit, Filter Data, Verifikasi Kredensial, dan Dokumentasi Bapperida"
    ws4["A2"].font = Font(name=font_family, size=10, italic=True, color="64748B")
    ws4["A2"].alignment = Alignment(horizontal="left", vertical="center")

    curr_row = 4
    headers_s4 = [
        "No", "ID Akun", "Peran (Role)", "Nama Pengguna / Akun", "Username Login", 
        "NIP / Kode Wilayah", "Password Awal", "Instansi / Wilayah Penugasan", 
        "Kecamatan", "Cakupan Hak Akses / Validasi", "Status Akun"
    ]

    for col_idx, h in enumerate(headers_s4, 1):
        cell = ws4.cell(row=curr_row, column=col_idx, value=h)
        cell.font = Font(name=font_family, size=9.5, bold=True, color="FFFFFF")
        cell.fill = PatternFill(start_color=c_slate_header, end_color=c_slate_header, fill_type="solid")
        cell.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
        cell.border = thin_border
    ws4.row_dimensions[curr_row].height = 28
    curr_row += 1

    for idx, u in enumerate(users, 1):
        role = u["role"]
        bg_col = "F8FAFC" if idx % 2 == 1 else "FFFFFF"
        if role == "Super Admin":
            bg_col = "FFE4E6"
        elif role == "Verifikator":
            bg_col = "EFF6FF"

        kec = u.get("kecamatan", "-")
        cakupan = ""
        if role == "Super Admin":
            cakupan = "Akses Penuh Seluruh Sistem & Konfigurasi"
        elif role == "Verifikator":
            thn = ", ".join(u.get("tahunAktif", []))
            cakupan = f"Verifikasi OPD (Tahun Aktif: {thn})"
        else:
            cakupan = f"Isolasi Usulan {u.get('tipe', 'Desa')} {u.get('desa', '')}"

        row_vals = [
            idx,
            u["id"],
            role,
            u["nama"],
            u["username"],
            u.get("kodeWilayah", u.get("nip", "")),
            u["password"],
            u["instansi"],
            kec,
            cakupan,
            u["status"]
        ]

        for col_idx, val in enumerate(row_vals, 1):
            cell = ws4.cell(row=curr_row, column=col_idx, value=val)
            cell.font = Font(name=font_family, size=9, bold=(col_idx in [1, 3, 5, 7]), 
                             color=(c_red_dark if (col_idx == 3 and role == "Super Admin") else 
                                   (c_blue_primary if (col_idx == 3 and role == "Verifikator") else 
                                   (c_green_dark if (col_idx == 3 and role == "Operator Desa") else "0F172A"))))
            cell.fill = PatternFill(start_color=bg_col, end_color=bg_col, fill_type="solid")
            cell.border = thin_border
            
            if col_idx in [1, 2, 3, 5, 6, 7, 9, 11]:
                cell.alignment = Alignment(horizontal="center", vertical="center")
            else:
                cell.alignment = Alignment(horizontal="left", vertical="center")

        ws4.row_dimensions[curr_row].height = 21
        curr_row += 1

    # Widths for Sheet 4
    col_widths_s4 = {
        "A": 5, "B": 22, "C": 16, "D": 42, "E": 22, "F": 22, 
        "G": 22, "H": 48, "I": 18, "J": 38, "K": 14
    }
    for col_letter, width in col_widths_s4.items():
        ws4.column_dimensions[col_letter].width = width

    # Save to Downloads folder
    download_dir = r"C:\Users\Ewin Widiyan\Downloads"
    download_file = os.path.join(download_dir, "Daftar_Akun_Pengguna_Pre_SIPD_Lombok_Barat.xlsx")
    wb.save(download_file)
    print(f"Saved to Downloads: {download_file}")

    # Also save backup in public folder of project
    public_file = os.path.join(os.getcwd(), "public", "Daftar_Akun_Pengguna_Pre_SIPD_Lombok_Barat.xlsx")
    wb.save(public_file)
    print(f"Saved backup in public: {public_file}")

if __name__ == "__main__":
    build_excel()
