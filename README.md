# Kamus Usulan Bapperida Lombok Barat

Aplikasi Web Interaktif Pedoman Musrenbang RKPD & Pengawalan Program Daerah Kabupaten Lombok Barat (Tahun Perencanaan 2027–2028).

---

## 🏛️ Latar Belakang & Gambaran Umum
Aplikasi ini dikembangkan untuk memudahkan pemangku kepentingan perencana daerah di tingkat Bapperida, Perangkat Daerah (OPD), Kecamatan, hingga 119 Desa dan 3 Kelurahan di Kabupaten Lombok Barat dalam menelaah, memfilter, dan menyusun usulan kegiatan yang selaras dengan:
* **Kamus Usulan RKPD Tahun 2027** (Berdasarkan dokumen teknis verifikasi Bapperida Lombok Barat - Format Tabel Eksekutif 11 Kolom).
* **Kamus Usulan RKPD Tahun 2028** (Rekap 308 usulan dari 20 OPD pengampu).
* **9 Aksi Prioritas & 56 Intervensi Daerah** (Lombok Barat Mantap).
* **Indeks Permasalahan Desa** (Infrastruktur, Pertanian/Pangan, Pendidikan, Kesehatan/Stunting, UMKM/Ekonomi, dan Lingkungan).

---

## 🚀 Fitur Unggulan
1. **Mode Tabel Eksekutif (Kamus Usulan 2027)**:
   * 11 kolom data komprehensif: No, OPD & Bidang, Program, Kegiatan, Sub Kegiatan, Usulan Kegiatan Riil, Usulan Masalah & Data Dasar, Syarat/Penerima Sasaran, Kesesuaian 9 Aksi Prioritas, 56 Intervensi Prioritas, dan Tombol Tindakan.
   * Dilengkapi *horizontal scroll* rapi tanpa tumpang-tindih teks dan paginasi (10, 25, 50, 100 data per halaman).
2. **Kamus Usulan Tahun 2028**:
   * Menampung 308 usulan teknis lintas 20 dinas/badan dengan uraian permasalahan riil.
3. **Peta Indeks Permasalahan 122 Wilayah Desa & Kelurahan**:
   * Evaluasi bobot indeks komposit dan status prioritas (Tinggi, Sedang, Rendah) untuk 10 Kecamatan di Kabupaten Lombok Barat.
4. **Keranjang UsulanKu (Pilihan Usulan Desa)**:
   * Pencatatan usulan prioritas desa dengan penyimpanan lokal aman (*offline-first*).
   * Fitur ekspor rekap ke format CSV/Excel untuk lampiran berita acara Musrenbang.
5. **Keamanan Siber (*Client-side Security*)**:
   * Sanitasi anti-XSS untuk seluruh masukan teks.
   * Verifikasi integritas data LocalStorage dengan tanda tangan *hash* SHA-256.
   * Pencatatan log audit keamanan (*tamper detection*).

---

## 🛠️ Teknologi yang Digunakan
* **Framework**: React 18 + Vite
* **Komponen & Ikon**: Lucide React
* **Desain & Gaya**: CSS Native (Executive Government Portal Theme - Navy & Gold *Patut Patuh Patju*)
* **Penyimpanan Data**: Secure LocalStorage with SHA-256 Integrity Verification

---

## 💻 Panduan Menjalankan Aplikasi Secara Lokal

### Prasyarat
* [Node.js](https://nodejs.org/) versi 18 atau lebih baru.
* Git & npm.

### Langkah Instalasi
```bash
# Clone repositori
git clone https://github.com/BappedaLobar/kamus-usulan-bapperida-lobar.git
cd kamus-usulan-bapperida-lobar

# Instal dependensi
npm install

# Jalankan server pengembangan
npm run dev

# Bangun versi produksi
npm run build
```

---

## 📄 Lisensi
Hak Cipta © 2026 Pemerintah Kabupaten Lombok Barat. Dikelola oleh Badan Perencanaan Pembangunan, Riset dan Inovasi Daerah (Bapperida) Kabupaten Lombok Barat.
