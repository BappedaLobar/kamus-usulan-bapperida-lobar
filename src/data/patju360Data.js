// ============================================================================
// DATASET RESMI AGREGAT KEMISKINAN EKSTREM PATJU 360 LOMBOK BARAT
// Terintegrasi dengan Aplikasi Kamus Usulan RKPD Kabupaten Lombok Barat
// Sumber: Sistem PATJU 360 Bapperida Lombok Barat (PDP & Inpres No. 4/2022 Compliant)
// Total Cakupan: 122 Wilayah (119 Desa + 3 Kelurahan) se-Kabupaten Lombok Barat
// ============================================================================

export const PATJU_STATISTIK_KABUPATEN = {
  "totalKK": 265708,
  "totalIndividu": 805070,
  "totalDesil1": 36130,
  "totalDesil2": 32096,
  "totalSasaranP3KE": 119367,
  "totalRtlh": 9849,
  "totalTanpaJamban": 30639,
  "totalAirTakTerlindung": 11108,
  "totalTanpaListrik": 23351,
  "totalTanpaAset": 52503,
  "totalPbi": 170017
};

export const PATJU_TREATMENT_CATALOG = [
  {
    "id": "rtlh-swadaya",
    "namaProgram": "Bantuan Pemugaran Rumah Tidak Layak Huni (RTLH Swadaya / BSPS DAK & APBD)",
    "kategori": "Infrastruktur & Permukiman Layak",
    "opdCode": "DISPERKIM",
    "opdNama": "Dinas Pekerjaan Umum, Penataan Ruang, Perumahan dan Kawasan Permukiman",
    "targetOpdKamus": "Dinas Pekerjaan Umum, Penataan Ruang, Perumahan dan Kawasan Permukiman",
    "badgePrioritas": "Prioritas Kantong Kemiskinan",
    "estimasiAnggaran": "Rp 20.000.000 – Rp 35.000.000 / unit rumah",
    "strategiNasional": "Penurunan Kantong Kemiskinan",
    "iconType": "rtlh",
    "deskripsiPaket": "Rehabilitasi atap, lantai, dan dinding rumah bagi keluarga sasaran Desil 1–2 guna memenuhi standar rumah layak huni dan kesehatan lingkungan.",
    "indikatorTerkait": "rtlhCount",
    "rekomendasiVolumeKey": "rtlhCount"
  },
  {
    "id": "jamban-sehat",
    "namaProgram": "Pembangunan Jamban Sehat Keluarga (Tangki Septik Kedap Biotank & Sanitasi Dasar)",
    "kategori": "Sanitasi & Kesehatan Lingkungan",
    "opdCode": "PUPR",
    "opdNama": "Dinas Pekerjaan Umum, Penataan Ruang, Perumahan dan Kawasan Permukiman",
    "targetOpdKamus": "Dinas Pekerjaan Umum, Penataan Ruang, Perumahan dan Kawasan Permukiman",
    "badgePrioritas": "Prioritas Sanitasi & ODF",
    "estimasiAnggaran": "Rp 4.500.000 – Rp 7.000.000 / unit jamban",
    "strategiNasional": "Penurunan Kantong Kemiskinan",
    "iconType": "sanitasi",
    "deskripsiPaket": "Penyediaan sarana MCK sehat dan jamban biofilter individual atau komunal di lokus kantong kemiskinan dan stunting tinggi.",
    "indikatorTerkait": "tanpaJambanCount",
    "rekomendasiVolumeKey": "tanpaJambanCount"
  },
  {
    "id": "gerobak-dagang",
    "namaProgram": "Bantuan Pemberian Gerobak Usaha / Etalase Dagang & Sarana Usaha Mikro (Pemberdayaan UMKM)",
    "kategori": "Pemberdayaan Ekonomi & UMKM",
    "opdCode": "DISKOP",
    "opdNama": "Dinas Perindustrian, Koperasi, UKM dan Tenaga Kerja",
    "targetOpdKamus": "Dinas Perindustrian, Koperasi, UKM dan Tenaga Kerja",
    "badgePrioritas": "Prioritas Peningkatan Pendapatan",
    "estimasiAnggaran": "Rp 3.500.000 – Rp 5.000.000 / unit gerobak",
    "strategiNasional": "Peningkatan Pendapatan",
    "iconType": "gerobak",
    "deskripsiPaket": "Bantuan sarana fisik etalase/gerobak usaha lengkap dan modal awal untuk mendorong kemandirian ekonomi keluarga Desil 1–2.",
    "indikatorTerkait": "tanpaAsetCount",
    "rekomendasiVolumeKey": "tanpaAsetCount"
  },
  {
    "id": "sarpras-perikanan",
    "namaProgram": "Bantuan Sarana & Prasarana Perikanan Tangkap & Budidaya (Mesin Tempel, Cool Box, Jaring & Benih Ikan)",
    "kategori": "Ekonomi Pesisir & Perikanan",
    "opdCode": "DISLUTKAN",
    "opdNama": "Dinas Kelautan, Perikanan dan Ketahanan Pangan",
    "targetOpdKamus": "Dinas Kelautan, Perikanan dan Ketahanan Pangan",
    "badgePrioritas": "Prioritas Nelayan Miskin Ekstrem",
    "estimasiAnggaran": "Rp 5.000.000 – Rp 15.000.000 / paket bantuan",
    "strategiNasional": "Peningkatan Pendapatan",
    "iconType": "perikanan",
    "deskripsiPaket": "Paket sarana melaut dan budidaya ikan air tawar/payau bagi nelayan tradisional dan pembudidaya kecil di lokus pesisir Lombok Barat.",
    "indikatorTerkait": "tanpaAsetCount",
    "rekomendasiVolumeKey": "tanpaAsetCount"
  },
  {
    "id": "bibit-ternak-tani",
    "namaProgram": "Bantuan Bibit Tanaman Pangan, Hortikultura & Ternak Produktif (Kambing/Unggas)",
    "kategori": "Ketahanan Pangan & Pertanian",
    "opdCode": "DISTAN",
    "opdNama": "Dinas Pertanian",
    "targetOpdKamus": "Dinas Pertanian",
    "badgePrioritas": "Prioritas Petani & Peternak Gurem",
    "estimasiAnggaran": "Rp 3.000.000 – Rp 8.000.000 / kelompok / paket",
    "strategiNasional": "Peningkatan Pendapatan",
    "iconType": "ternak",
    "deskripsiPaket": "Distribusi bibit unggul hortikultura, sarana produksi pertanian, dan bibit ternak produktif untuk keluarga petani gurem.",
    "indikatorTerkait": "tanpaAsetCount",
    "rekomendasiVolumeKey": "kkDesil1"
  },
  {
    "id": "kis-pbi-daerah",
    "namaProgram": "Integrasi Jaminan Kesehatan Nasional KIS PBI-JK Daerah (APBD Lombok Barat)",
    "kategori": "Jaminan Kesehatan",
    "opdCode": "DINKES",
    "opdNama": "Dinas Kesehatan, Pengendalian Penduduk dan KB",
    "targetOpdKamus": "Dinas Kesehatan, Pengendalian Penduduk dan KB",
    "badgePrioritas": "Universal Health Coverage (UHC)",
    "estimasiAnggaran": "Rp 42.000 / jiwa / bulan (Iuran APBD)",
    "strategiNasional": "Pengurangan Beban Pengeluaran",
    "iconType": "kesehatan",
    "deskripsiPaket": "Subsidi iuran BPJS Kesehatan PBI Daerah bagi seluruh anggota keluarga Desil 1–2 yang belum tercover BPJS PBI Pusat.",
    "indikatorTerkait": "nonPbiCount",
    "rekomendasiVolumeKey": "nonPbiCount"
  },
  {
    "id": "jamsostek-bpjstk",
    "namaProgram": "Perlindungan Jaminan Sosial Ketenagakerjaan (BPJS TK) bagi Pekerja Rentan & Petani Miskin",
    "kategori": "Perlindungan Sosial Ketenagakerjaan",
    "opdCode": "BPJSTK",
    "opdNama": "Dinas Perindustrian, Koperasi, UKM dan Tenaga Kerja",
    "targetOpdKamus": "Dinas Perindustrian, Koperasi, UKM dan Tenaga Kerja",
    "badgePrioritas": "Jaminan Kecelakaan & Kematian (JKK/JKM)",
    "estimasiAnggaran": "Rp 16.800 / tenaga kerja / bulan",
    "strategiNasional": "Pengurangan Beban Pengeluaran",
    "iconType": "disabilitas",
    "deskripsiPaket": "Perlindungan jaminan kecelakaan kerja dan kematian bagi petani, nelayan, buruh harian lepas, dan pekerja rentan miskin ekstrem.",
    "indikatorTerkait": "kkDesil1",
    "rekomendasiVolumeKey": "kkDesil1"
  },
  {
    "id": "beasiswa-ats",
    "namaProgram": "Beasiswa Siswa Kurang Mampu (Kartu Lobar Pintar) & Pendidikan Kesetaraan Paket A/B/C bagi ATS",
    "kategori": "Pendidikan & Pengentasan ATS",
    "opdCode": "DIKBUD",
    "opdNama": "Dinas Pendidikan dan Kebudayaan",
    "targetOpdKamus": "Dinas Pendidikan dan Kebudayaan",
    "badgePrioritas": "Penanganan Anak Tidak Sekolah (ATS)",
    "estimasiAnggaran": "Rp 1.000.000 – Rp 2.500.000 / siswa / tahun",
    "strategiNasional": "Pengurangan Beban Pengeluaran",
    "iconType": "pendidikan",
    "deskripsiPaket": "Bantuan operasional pendidikan, seragam, dan perlengkapan sekolah bagi siswa miskin dan reintegrasi ATS ke sekolah kesetaraan.",
    "indikatorTerkait": "kkDesil1",
    "rekomendasiVolumeKey": "kkDesil1"
  },
  {
    "id": "atensi-disabilitas",
    "namaProgram": "Bantuan Asistensi Rehabilitasi Sosial (ATENSI) & Alat Bantu Fisik Disabilitas / Lansia Terlantar",
    "kategori": "Perlindungan Sosial Khusus",
    "opdCode": "DINSOS",
    "opdNama": "Dinas Sosial, Pemberdayaan Perempuan dan Perlindungan Anak",
    "targetOpdKamus": "Dinas Sosial, Pemberdayaan Perempuan dan Perlindungan Anak",
    "badgePrioritas": "Kelompok Rentan & Inklusi",
    "estimasiAnggaran": "Rp 2.000.000 – Rp 5.000.000 / penerima manfaat",
    "strategiNasional": "Pengurangan Beban Pengeluaran",
    "iconType": "disabilitas",
    "deskripsiPaket": "Penyaluran kursi roda, tongkat adaptif, hearing aid, serta bantuan nutrisi dan perawatan bagi lansia tunggal dan penyandang disabilitas berat.",
    "indikatorTerkait": "kkDesil1",
    "rekomendasiVolumeKey": "kkDesil1"
  },
  {
    "id": "bpbl-listrik",
    "namaProgram": "Bantuan Pasang Baru Listrik (BPBL) Gratis 450 VA / 900 VA (Elektrifikasi Rumah Tangga)",
    "kategori": "Utilitas & Energi Kerakyatan",
    "opdCode": "PUPR",
    "opdNama": "Dinas Pekerjaan Umum, Penataan Ruang, Perumahan dan Kawasan Permukiman",
    "targetOpdKamus": "Dinas Pekerjaan Umum, Penataan Ruang, Perumahan dan Kawasan Permukiman",
    "badgePrioritas": "Pemberantasan Gelap Gulita",
    "estimasiAnggaran": "Rp 1.500.000 – Rp 2.500.000 / sambungan rumah",
    "strategiNasional": "Penurunan Kantong Kemiskinan",
    "iconType": "listrik",
    "deskripsiPaket": "Instalasi instalasi kabel rumah, MCB, 3 titik lampu, 1 stop kontak, dan biaya penyambungan PLN gratis bagi rumah tangga menyalur/tanpa meteran.",
    "indikatorTerkait": "tanpaListrikCount",
    "rekomendasiVolumeKey": "tanpaListrikCount"
  },
  {
    "id": "pelatihan-blk",
    "namaProgram": "Pelatihan Vokasi & Sertifikasi Kompetensi Kerja Berbasis Industri (UPTD BLK Lombok Barat)",
    "kategori": "Ketenagakerjaan & Keahlian",
    "opdCode": "DISNAKER",
    "opdNama": "Dinas Perindustrian, Koperasi, UKM dan Tenaga Kerja",
    "targetOpdKamus": "Dinas Perindustrian, Koperasi, UKM dan Tenaga Kerja",
    "badgePrioritas": "Kemandirian Angkatan Kerja Muda",
    "estimasiAnggaran": "Rp 4.000.000 / peserta pelatihan (Boarding/Non-Boarding)",
    "strategiNasional": "Peningkatan Pendapatan",
    "iconType": "gerobak",
    "deskripsiPaket": "Pelatihan kejuruan teknik las, otomotif sepeda motor, tata boga, menjahit busana, dan barcode/IT untuk anak muda keluarga Desil 1–2.",
    "indikatorTerkait": "totalSasaranP3KE",
    "rekomendasiVolumeKey": "totalSasaranP3KE"
  },
  {
    "id": "baznas-mustahik",
    "namaProgram": "Program Penanggulangan Kemiskinan Berbasis ZIS BAZNAS Lombok Barat (Mustahik Desil 1)",
    "kategori": "Sinergi Non-APBD & Kolaborasi",
    "opdCode": "BAZNAS",
    "opdNama": "Sekretariat Daerah (Bagian Kesra)",
    "targetOpdKamus": "Sekretariat Daerah (Bagian Kesra)",
    "badgePrioritas": "Bantalan Sosial Cepat Tanggap",
    "estimasiAnggaran": "Rp 1.500.000 – Rp 3.000.000 / paket santunan",
    "strategiNasional": "Pengurangan Beban Pengeluaran",
    "iconType": "disabilitas",
    "deskripsiPaket": "Penyaluran dana ZIS BAZNAS untuk penebusan ijazah, bedah rumah dhuafa darurat, santunan lansia dhuafa, dan modal usaha ultra mikro tanpa bunga.",
    "indikatorTerkait": "kkDesil1",
    "rekomendasiVolumeKey": "kkDesil1"
  }
];

export const PATJU_DESA_LIST = [
  {
    "id": "desa-kebon-ayu-gerung",
    "kodeWilayah": "5201012002",
    "kodeDesa": "52.01.01.2002",
    "namaDesa": "Kebon Ayu",
    "kecamatan": "Gerung",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.8079,
    "totalKK": 2975,
    "totalIndividu": 7754,
    "kkDesil0": 199,
    "kkDesil1": 378,
    "kkDesil2": 377,
    "kkDesil3": 373,
    "kkDesil4": 288,
    "totalSasaranP3KE": 1416,
    "persenMiskinEkstrem": 12.7,
    "rtlhCount": 36,
    "tanpaJambanCount": 188,
    "airTakTerlindungCount": 108,
    "tanpaListrikCount": 77,
    "tanpaAsetCount": 547,
    "pbiCount": 2229,
    "nonPbiCount": 746,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 36,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 188,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 108,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 547,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 77,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 378,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-gapuk-gerung",
    "kodeWilayah": "5201012003",
    "kodeDesa": "52.01.01.2003",
    "namaDesa": "Gapuk",
    "kecamatan": "Gerung",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7827,
    "totalKK": 1676,
    "totalIndividu": 4730,
    "kkDesil0": 84,
    "kkDesil1": 285,
    "kkDesil2": 260,
    "kkDesil3": 243,
    "kkDesil4": 156,
    "totalSasaranP3KE": 944,
    "persenMiskinEkstrem": 17,
    "rtlhCount": 21,
    "tanpaJambanCount": 37,
    "airTakTerlindungCount": 6,
    "tanpaListrikCount": 147,
    "tanpaAsetCount": 266,
    "pbiCount": 1361,
    "nonPbiCount": 315,
    "prioritasIntervensi": [
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 266,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 147,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 285,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-suka-makmur-gerung",
    "kodeWilayah": "5201012005",
    "kodeDesa": "52.01.01.2005",
    "namaDesa": "Suka Makmur",
    "kecamatan": "Gerung",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.6961,
    "totalKK": 2089,
    "totalIndividu": 5923,
    "kkDesil0": 147,
    "kkDesil1": 214,
    "kkDesil2": 196,
    "kkDesil3": 217,
    "kkDesil4": 180,
    "totalSasaranP3KE": 807,
    "persenMiskinEkstrem": 10.2,
    "rtlhCount": 82,
    "tanpaJambanCount": 124,
    "airTakTerlindungCount": 55,
    "tanpaListrikCount": 89,
    "tanpaAsetCount": 426,
    "pbiCount": 1511,
    "nonPbiCount": 578,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 82,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 124,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 55,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 426,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 89,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 214,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-banyu-urip-gerung",
    "kodeWilayah": "5201012006",
    "kodeDesa": "52.01.01.2006",
    "namaDesa": "Banyu Urip",
    "kecamatan": "Gerung",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.778,
    "totalKK": 3085,
    "totalIndividu": 9051,
    "kkDesil0": 249,
    "kkDesil1": 382,
    "kkDesil2": 435,
    "kkDesil3": 360,
    "kkDesil4": 291,
    "totalSasaranP3KE": 1468,
    "persenMiskinEkstrem": 12.4,
    "rtlhCount": 36,
    "tanpaJambanCount": 224,
    "airTakTerlindungCount": 50,
    "tanpaListrikCount": 310,
    "tanpaAsetCount": 677,
    "pbiCount": 2215,
    "nonPbiCount": 870,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 36,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 224,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 50,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 677,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 310,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 382,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-babussalam-gerung",
    "kodeWilayah": "5201012007",
    "kodeDesa": "52.01.01.2007",
    "namaDesa": "Babussalam",
    "kecamatan": "Gerung",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7764,
    "totalKK": 3374,
    "totalIndividu": 10362,
    "kkDesil0": 198,
    "kkDesil1": 548,
    "kkDesil2": 498,
    "kkDesil3": 436,
    "kkDesil4": 383,
    "totalSasaranP3KE": 1865,
    "persenMiskinEkstrem": 16.2,
    "rtlhCount": 58,
    "tanpaJambanCount": 372,
    "airTakTerlindungCount": 14,
    "tanpaListrikCount": 412,
    "tanpaAsetCount": 627,
    "pbiCount": 2510,
    "nonPbiCount": 864,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 58,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 372,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 627,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 412,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 548,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-dasan-tapen-gerung",
    "kodeWilayah": "5201012008",
    "kodeDesa": "52.01.01.2008",
    "namaDesa": "Dasan Tapen",
    "kecamatan": "Gerung",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.8063,
    "totalKK": 2243,
    "totalIndividu": 7200,
    "kkDesil0": 102,
    "kkDesil1": 237,
    "kkDesil2": 249,
    "kkDesil3": 157,
    "kkDesil4": 131,
    "totalSasaranP3KE": 774,
    "persenMiskinEkstrem": 10.6,
    "rtlhCount": 43,
    "tanpaJambanCount": 89,
    "airTakTerlindungCount": 10,
    "tanpaListrikCount": 70,
    "tanpaAsetCount": 301,
    "pbiCount": 1318,
    "nonPbiCount": 925,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 43,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 89,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 301,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 70,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 237,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-beleka-gerung",
    "kodeWilayah": "5201012009",
    "kodeDesa": "52.01.01.2009",
    "namaDesa": "Beleka",
    "kecamatan": "Gerung",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.8756,
    "totalKK": 2669,
    "totalIndividu": 8803,
    "kkDesil0": 109,
    "kkDesil1": 393,
    "kkDesil2": 396,
    "kkDesil3": 339,
    "kkDesil4": 266,
    "totalSasaranP3KE": 1394,
    "persenMiskinEkstrem": 14.7,
    "rtlhCount": 31,
    "tanpaJambanCount": 185,
    "airTakTerlindungCount": 67,
    "tanpaListrikCount": 274,
    "tanpaAsetCount": 365,
    "pbiCount": 1974,
    "nonPbiCount": 695,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 31,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 185,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 67,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 365,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 274,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 393,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-tempos-gerung",
    "kodeWilayah": "5201012010",
    "kodeDesa": "52.01.01.2010",
    "namaDesa": "Tempos",
    "kecamatan": "Gerung",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7795,
    "totalKK": 2074,
    "totalIndividu": 6095,
    "kkDesil0": 109,
    "kkDesil1": 527,
    "kkDesil2": 383,
    "kkDesil3": 269,
    "kkDesil4": 161,
    "totalSasaranP3KE": 1340,
    "persenMiskinEkstrem": 25.4,
    "rtlhCount": 30,
    "tanpaJambanCount": 233,
    "airTakTerlindungCount": 68,
    "tanpaListrikCount": 227,
    "tanpaAsetCount": 345,
    "pbiCount": 1578,
    "nonPbiCount": 496,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 30,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 233,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 68,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 345,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 227,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 527,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-mesanggok-gerung",
    "kodeWilayah": "5201012012",
    "kodeDesa": "52.01.01.2012",
    "namaDesa": "Mesanggok",
    "kecamatan": "Gerung",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.8142,
    "totalKK": 1684,
    "totalIndividu": 5216,
    "kkDesil0": 102,
    "kkDesil1": 225,
    "kkDesil2": 245,
    "kkDesil3": 227,
    "kkDesil4": 173,
    "totalSasaranP3KE": 870,
    "persenMiskinEkstrem": 13.4,
    "rtlhCount": 41,
    "tanpaJambanCount": 134,
    "airTakTerlindungCount": 3,
    "tanpaListrikCount": 102,
    "tanpaAsetCount": 289,
    "pbiCount": 1212,
    "nonPbiCount": 472,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 41,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 134,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 289,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 102,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 225,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-taman-ayu-gerung",
    "kodeWilayah": "5201012013",
    "kodeDesa": "52.01.01.2013",
    "namaDesa": "Taman Ayu",
    "kecamatan": "Gerung",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.8126,
    "totalKK": 2752,
    "totalIndividu": 7393,
    "kkDesil0": 180,
    "kkDesil1": 543,
    "kkDesil2": 380,
    "kkDesil3": 343,
    "kkDesil4": 267,
    "totalSasaranP3KE": 1533,
    "persenMiskinEkstrem": 19.7,
    "rtlhCount": 186,
    "tanpaJambanCount": 536,
    "airTakTerlindungCount": 104,
    "tanpaListrikCount": 277,
    "tanpaAsetCount": 524,
    "pbiCount": 1942,
    "nonPbiCount": 810,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 186,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 536,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 104,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 524,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 277,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 543,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-giri-tembesi-gerung",
    "kodeWilayah": "5201012014",
    "kodeDesa": "52.01.01.2014",
    "namaDesa": "Giri Tembesi",
    "kecamatan": "Gerung",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7575,
    "totalKK": 1324,
    "totalIndividu": 3826,
    "kkDesil0": 131,
    "kkDesil1": 158,
    "kkDesil2": 168,
    "kkDesil3": 161,
    "kkDesil4": 103,
    "totalSasaranP3KE": 590,
    "persenMiskinEkstrem": 11.9,
    "rtlhCount": 13,
    "tanpaJambanCount": 80,
    "airTakTerlindungCount": 6,
    "tanpaListrikCount": 124,
    "tanpaAsetCount": 289,
    "pbiCount": 833,
    "nonPbiCount": 491,
    "prioritasIntervensi": [
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 80,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 289,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 124,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 158,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-kediri-kediri",
    "kodeWilayah": "5201022001",
    "kodeDesa": "52.01.02.2001",
    "namaDesa": "Kediri",
    "kecamatan": "Kediri",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.8583,
    "totalKK": 3248,
    "totalIndividu": 10623,
    "kkDesil0": 270,
    "kkDesil1": 298,
    "kkDesil2": 273,
    "kkDesil3": 398,
    "kkDesil4": 383,
    "totalSasaranP3KE": 1352,
    "persenMiskinEkstrem": 9.2,
    "rtlhCount": 77,
    "tanpaJambanCount": 75,
    "airTakTerlindungCount": 58,
    "tanpaListrikCount": 354,
    "tanpaAsetCount": 703,
    "pbiCount": 2039,
    "nonPbiCount": 1209,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 77,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 75,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 58,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 703,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 354,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 298,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-montong-are-kediri",
    "kodeWilayah": "5201022002",
    "kodeDesa": "52.01.02.2002",
    "namaDesa": "Montong Are",
    "kecamatan": "Kediri",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.8047,
    "totalKK": 2116,
    "totalIndividu": 6472,
    "kkDesil0": 116,
    "kkDesil1": 321,
    "kkDesil2": 357,
    "kkDesil3": 203,
    "kkDesil4": 184,
    "totalSasaranP3KE": 1065,
    "persenMiskinEkstrem": 15.2,
    "rtlhCount": 23,
    "tanpaJambanCount": 283,
    "airTakTerlindungCount": 18,
    "tanpaListrikCount": 270,
    "tanpaAsetCount": 377,
    "pbiCount": 1463,
    "nonPbiCount": 653,
    "prioritasIntervensi": [
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 283,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 377,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 270,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 321,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-jagaraga-indah-kediri",
    "kodeWilayah": "5201022003",
    "kodeDesa": "52.01.02.2003",
    "namaDesa": "Jagaraga Indah",
    "kecamatan": "Kediri",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7575,
    "totalKK": 1998,
    "totalIndividu": 6383,
    "kkDesil0": 97,
    "kkDesil1": 245,
    "kkDesil2": 357,
    "kkDesil3": 233,
    "kkDesil4": 213,
    "totalSasaranP3KE": 1048,
    "persenMiskinEkstrem": 12.3,
    "rtlhCount": 70,
    "tanpaJambanCount": 211,
    "airTakTerlindungCount": 86,
    "tanpaListrikCount": 305,
    "tanpaAsetCount": 303,
    "pbiCount": 1473,
    "nonPbiCount": 525,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 70,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 211,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 86,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 303,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 305,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 245,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-gelogor-kediri",
    "kodeWilayah": "5201022004",
    "kodeDesa": "52.01.02.2004",
    "namaDesa": "Gelogor",
    "kecamatan": "Kediri",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.874,
    "totalKK": 2636,
    "totalIndividu": 8143,
    "kkDesil0": 170,
    "kkDesil1": 333,
    "kkDesil2": 488,
    "kkDesil3": 330,
    "kkDesil4": 273,
    "totalSasaranP3KE": 1424,
    "persenMiskinEkstrem": 12.6,
    "rtlhCount": 24,
    "tanpaJambanCount": 39,
    "airTakTerlindungCount": 25,
    "tanpaListrikCount": 193,
    "tanpaAsetCount": 535,
    "pbiCount": 1887,
    "nonPbiCount": 749,
    "prioritasIntervensi": [
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 535,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 193,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 333,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-rumak-kediri",
    "kodeWilayah": "5201022005",
    "kodeDesa": "52.01.02.2005",
    "namaDesa": "Rumak",
    "kecamatan": "Kediri",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.874,
    "totalKK": 2035,
    "totalIndividu": 6436,
    "kkDesil0": 99,
    "kkDesil1": 161,
    "kkDesil2": 196,
    "kkDesil3": 213,
    "kkDesil4": 264,
    "totalSasaranP3KE": 834,
    "persenMiskinEkstrem": 7.9,
    "rtlhCount": 147,
    "tanpaJambanCount": 30,
    "airTakTerlindungCount": 54,
    "tanpaListrikCount": 331,
    "tanpaAsetCount": 318,
    "pbiCount": 1230,
    "nonPbiCount": 805,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 147,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 54,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 318,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 331,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 161,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-banyumulek-kediri",
    "kodeWilayah": "5201022006",
    "kodeDesa": "52.01.02.2006",
    "namaDesa": "Banyumulek",
    "kecamatan": "Kediri",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.7984,
    "totalKK": 3231,
    "totalIndividu": 9679,
    "kkDesil0": 149,
    "kkDesil1": 282,
    "kkDesil2": 397,
    "kkDesil3": 246,
    "kkDesil4": 271,
    "totalSasaranP3KE": 1196,
    "persenMiskinEkstrem": 8.7,
    "rtlhCount": 77,
    "tanpaJambanCount": 96,
    "airTakTerlindungCount": 30,
    "tanpaListrikCount": 391,
    "tanpaAsetCount": 558,
    "pbiCount": 2423,
    "nonPbiCount": 808,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 77,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 96,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 558,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 391,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 282,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-ombe-baru-kediri",
    "kodeWilayah": "5201022007",
    "kodeDesa": "52.01.02.2007",
    "namaDesa": "Ombe Baru",
    "kecamatan": "Kediri",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7858,
    "totalKK": 1833,
    "totalIndividu": 5799,
    "kkDesil0": 85,
    "kkDesil1": 269,
    "kkDesil2": 344,
    "kkDesil3": 277,
    "kkDesil4": 184,
    "totalSasaranP3KE": 1074,
    "persenMiskinEkstrem": 14.7,
    "rtlhCount": 9,
    "tanpaJambanCount": 78,
    "airTakTerlindungCount": 24,
    "tanpaListrikCount": 190,
    "tanpaAsetCount": 313,
    "pbiCount": 1390,
    "nonPbiCount": 443,
    "prioritasIntervensi": [
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 78,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 313,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 190,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 269,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-dasan-baru-kediri",
    "kodeWilayah": "5201022008",
    "kodeDesa": "52.01.02.2008",
    "namaDesa": "Dasan Baru",
    "kecamatan": "Kediri",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.8063,
    "totalKK": 1515,
    "totalIndividu": 4747,
    "kkDesil0": 64,
    "kkDesil1": 200,
    "kkDesil2": 288,
    "kkDesil3": 155,
    "kkDesil4": 162,
    "totalSasaranP3KE": 805,
    "persenMiskinEkstrem": 13.2,
    "rtlhCount": 15,
    "tanpaJambanCount": 241,
    "airTakTerlindungCount": 9,
    "tanpaListrikCount": 161,
    "tanpaAsetCount": 237,
    "pbiCount": 1115,
    "nonPbiCount": 400,
    "prioritasIntervensi": [
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 241,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 237,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 161,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 200,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-kediri-selatan-kediri",
    "kodeWilayah": "5201022009",
    "kodeDesa": "52.01.02.2009",
    "namaDesa": "Kediri Selatan",
    "kecamatan": "Kediri",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.8063,
    "totalKK": 2387,
    "totalIndividu": 7645,
    "kkDesil0": 150,
    "kkDesil1": 231,
    "kkDesil2": 268,
    "kkDesil3": 259,
    "kkDesil4": 239,
    "totalSasaranP3KE": 997,
    "persenMiskinEkstrem": 9.7,
    "rtlhCount": 8,
    "tanpaJambanCount": 94,
    "airTakTerlindungCount": 14,
    "tanpaListrikCount": 177,
    "tanpaAsetCount": 563,
    "pbiCount": 1478,
    "nonPbiCount": 909,
    "prioritasIntervensi": [
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 94,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 563,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 177,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 231,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-lelede-kediri",
    "kodeWilayah": "5201022010",
    "kodeDesa": "52.01.02.2010",
    "namaDesa": "Lelede",
    "kecamatan": "Kediri",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7953,
    "totalKK": 1333,
    "totalIndividu": 4043,
    "kkDesil0": 54,
    "kkDesil1": 137,
    "kkDesil2": 227,
    "kkDesil3": 145,
    "kkDesil4": 138,
    "totalSasaranP3KE": 647,
    "persenMiskinEkstrem": 10.3,
    "rtlhCount": 15,
    "tanpaJambanCount": 113,
    "airTakTerlindungCount": 3,
    "tanpaListrikCount": 221,
    "tanpaAsetCount": 193,
    "pbiCount": 1015,
    "nonPbiCount": 318,
    "prioritasIntervensi": [
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 113,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 193,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 221,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 137,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-lembuak-narmada",
    "kodeWilayah": "5201032001",
    "kodeDesa": "52.01.03.2001",
    "namaDesa": "Lembuak",
    "kecamatan": "Narmada",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.8646,
    "totalKK": 1948,
    "totalIndividu": 5782,
    "kkDesil0": 157,
    "kkDesil1": 153,
    "kkDesil2": 138,
    "kkDesil3": 140,
    "kkDesil4": 146,
    "totalSasaranP3KE": 577,
    "persenMiskinEkstrem": 7.9,
    "rtlhCount": 111,
    "tanpaJambanCount": 174,
    "airTakTerlindungCount": 123,
    "tanpaListrikCount": 97,
    "tanpaAsetCount": 445,
    "pbiCount": 959,
    "nonPbiCount": 989,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 111,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 174,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 123,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 445,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 97,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 153,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-nyur-lembang-narmada",
    "kodeWilayah": "5201032002",
    "kodeDesa": "52.01.03.2002",
    "namaDesa": "Nyur Lembang",
    "kecamatan": "Narmada",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.8094,
    "totalKK": 1327,
    "totalIndividu": 3813,
    "kkDesil0": 95,
    "kkDesil1": 70,
    "kkDesil2": 78,
    "kkDesil3": 79,
    "kkDesil4": 89,
    "totalSasaranP3KE": 316,
    "persenMiskinEkstrem": 5.3,
    "rtlhCount": 117,
    "tanpaJambanCount": 254,
    "airTakTerlindungCount": 19,
    "tanpaListrikCount": 61,
    "tanpaAsetCount": 247,
    "pbiCount": 749,
    "nonPbiCount": 578,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 117,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 254,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 247,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 61,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      }
    ]
  },
  {
    "id": "desa-peresak-narmada",
    "kodeWilayah": "5201032003",
    "kodeDesa": "52.01.03.2003",
    "namaDesa": "Peresak",
    "kecamatan": "Narmada",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.7969,
    "totalKK": 2734,
    "totalIndividu": 8068,
    "kkDesil0": 195,
    "kkDesil1": 253,
    "kkDesil2": 282,
    "kkDesil3": 306,
    "kkDesil4": 276,
    "totalSasaranP3KE": 1117,
    "persenMiskinEkstrem": 9.3,
    "rtlhCount": 55,
    "tanpaJambanCount": 273,
    "airTakTerlindungCount": 248,
    "tanpaListrikCount": 91,
    "tanpaAsetCount": 543,
    "pbiCount": 1521,
    "nonPbiCount": 1213,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 55,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 273,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 248,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 543,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 91,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 253,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-keru-narmada",
    "kodeWilayah": "5201032004",
    "kodeDesa": "52.01.03.2004",
    "namaDesa": "Keru",
    "kecamatan": "Narmada",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.811,
    "totalKK": 2083,
    "totalIndividu": 6234,
    "kkDesil0": 128,
    "kkDesil1": 317,
    "kkDesil2": 265,
    "kkDesil3": 223,
    "kkDesil4": 206,
    "totalSasaranP3KE": 1011,
    "persenMiskinEkstrem": 15.2,
    "rtlhCount": 132,
    "tanpaJambanCount": 186,
    "airTakTerlindungCount": 31,
    "tanpaListrikCount": 190,
    "tanpaAsetCount": 337,
    "pbiCount": 1341,
    "nonPbiCount": 742,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 132,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 186,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 337,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 190,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 317,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-batu-kuta-narmada",
    "kodeWilayah": "5201032005",
    "kodeDesa": "52.01.03.2005",
    "namaDesa": "Batu Kuta",
    "kecamatan": "Narmada",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.8362,
    "totalKK": 1325,
    "totalIndividu": 3966,
    "kkDesil0": 49,
    "kkDesil1": 124,
    "kkDesil2": 151,
    "kkDesil3": 198,
    "kkDesil4": 170,
    "totalSasaranP3KE": 643,
    "persenMiskinEkstrem": 9.4,
    "rtlhCount": 67,
    "tanpaJambanCount": 310,
    "airTakTerlindungCount": 25,
    "tanpaListrikCount": 153,
    "tanpaAsetCount": 167,
    "pbiCount": 906,
    "nonPbiCount": 419,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 67,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 310,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 167,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 153,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 124,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-tanak-beak-narmada",
    "kodeWilayah": "5201032006",
    "kodeDesa": "52.01.03.2006",
    "namaDesa": "Tanak Beak",
    "kecamatan": "Narmada",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7496,
    "totalKK": 2030,
    "totalIndividu": 5956,
    "kkDesil0": 178,
    "kkDesil1": 220,
    "kkDesil2": 182,
    "kkDesil3": 173,
    "kkDesil4": 156,
    "totalSasaranP3KE": 731,
    "persenMiskinEkstrem": 10.8,
    "rtlhCount": 30,
    "tanpaJambanCount": 160,
    "airTakTerlindungCount": 47,
    "tanpaListrikCount": 133,
    "tanpaAsetCount": 464,
    "pbiCount": 1257,
    "nonPbiCount": 773,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 30,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 160,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 464,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 133,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 220,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-sedau-narmada",
    "kodeWilayah": "5201032007",
    "kodeDesa": "52.01.03.2007",
    "namaDesa": "Sedau",
    "kecamatan": "Narmada",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.789,
    "totalKK": 2001,
    "totalIndividu": 5498,
    "kkDesil0": 253,
    "kkDesil1": 311,
    "kkDesil2": 199,
    "kkDesil3": 221,
    "kkDesil4": 195,
    "totalSasaranP3KE": 926,
    "persenMiskinEkstrem": 15.5,
    "rtlhCount": 152,
    "tanpaJambanCount": 229,
    "airTakTerlindungCount": 180,
    "tanpaListrikCount": 268,
    "tanpaAsetCount": 625,
    "pbiCount": 1218,
    "nonPbiCount": 783,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 152,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 229,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 180,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 625,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 268,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 311,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-suranadi-narmada",
    "kodeWilayah": "5201032008",
    "kodeDesa": "52.01.03.2008",
    "namaDesa": "Suranadi",
    "kecamatan": "Narmada",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.7969,
    "totalKK": 2371,
    "totalIndividu": 7323,
    "kkDesil0": 164,
    "kkDesil1": 370,
    "kkDesil2": 264,
    "kkDesil3": 213,
    "kkDesil4": 181,
    "totalSasaranP3KE": 1028,
    "persenMiskinEkstrem": 15.6,
    "rtlhCount": 91,
    "tanpaJambanCount": 124,
    "airTakTerlindungCount": 136,
    "tanpaListrikCount": 274,
    "tanpaAsetCount": 500,
    "pbiCount": 1492,
    "nonPbiCount": 879,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 91,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 124,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 136,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 500,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 274,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 370,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-selat-narmada",
    "kodeWilayah": "5201032009",
    "kodeDesa": "52.01.03.2009",
    "namaDesa": "Selat",
    "kecamatan": "Narmada",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7953,
    "totalKK": 2496,
    "totalIndividu": 7222,
    "kkDesil0": 149,
    "kkDesil1": 246,
    "kkDesil2": 265,
    "kkDesil3": 261,
    "kkDesil4": 206,
    "totalSasaranP3KE": 978,
    "persenMiskinEkstrem": 9.9,
    "rtlhCount": 161,
    "tanpaJambanCount": 407,
    "airTakTerlindungCount": 288,
    "tanpaListrikCount": 74,
    "tanpaAsetCount": 476,
    "pbiCount": 1340,
    "nonPbiCount": 1156,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 161,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 407,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 288,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 476,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 74,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 246,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-lebah-sempage-narmada",
    "kodeWilayah": "5201032010",
    "kodeDesa": "52.01.03.2010",
    "namaDesa": "Lebah Sempage",
    "kecamatan": "Narmada",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7008,
    "totalKK": 1774,
    "totalIndividu": 5239,
    "kkDesil0": 144,
    "kkDesil1": 285,
    "kkDesil2": 242,
    "kkDesil3": 213,
    "kkDesil4": 182,
    "totalSasaranP3KE": 922,
    "persenMiskinEkstrem": 16.1,
    "rtlhCount": 72,
    "tanpaJambanCount": 117,
    "airTakTerlindungCount": 69,
    "tanpaListrikCount": 226,
    "tanpaAsetCount": 367,
    "pbiCount": 1234,
    "nonPbiCount": 540,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 72,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 117,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 69,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 367,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 226,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 285,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-sesaot-narmada",
    "kodeWilayah": "5201032011",
    "kodeDesa": "52.01.03.2011",
    "namaDesa": "Sesaot",
    "kecamatan": "Narmada",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.8362,
    "totalKK": 2201,
    "totalIndividu": 6589,
    "kkDesil0": 137,
    "kkDesil1": 204,
    "kkDesil2": 211,
    "kkDesil3": 176,
    "kkDesil4": 157,
    "totalSasaranP3KE": 748,
    "persenMiskinEkstrem": 9.3,
    "rtlhCount": 29,
    "tanpaJambanCount": 193,
    "airTakTerlindungCount": 61,
    "tanpaListrikCount": 268,
    "tanpaAsetCount": 464,
    "pbiCount": 1465,
    "nonPbiCount": 736,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 29,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 193,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 61,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 464,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 268,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 204,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-dasan-tereng-narmada",
    "kodeWilayah": "5201032012",
    "kodeDesa": "52.01.03.2012",
    "namaDesa": "Dasan Tereng",
    "kecamatan": "Narmada",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.8315,
    "totalKK": 1775,
    "totalIndividu": 5270,
    "kkDesil0": 119,
    "kkDesil1": 206,
    "kkDesil2": 193,
    "kkDesil3": 171,
    "kkDesil4": 156,
    "totalSasaranP3KE": 726,
    "persenMiskinEkstrem": 11.6,
    "rtlhCount": 96,
    "tanpaJambanCount": 168,
    "airTakTerlindungCount": 34,
    "tanpaListrikCount": 74,
    "tanpaAsetCount": 379,
    "pbiCount": 1102,
    "nonPbiCount": 673,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 96,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 168,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 379,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 74,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 206,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-badrain-narmada",
    "kodeWilayah": "5201032013",
    "kodeDesa": "52.01.03.2013",
    "namaDesa": "Badrain",
    "kecamatan": "Narmada",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.8157,
    "totalKK": 1585,
    "totalIndividu": 4933,
    "kkDesil0": 86,
    "kkDesil1": 199,
    "kkDesil2": 227,
    "kkDesil3": 194,
    "kkDesil4": 168,
    "totalSasaranP3KE": 788,
    "persenMiskinEkstrem": 12.6,
    "rtlhCount": 109,
    "tanpaJambanCount": 273,
    "airTakTerlindungCount": 28,
    "tanpaListrikCount": 149,
    "tanpaAsetCount": 297,
    "pbiCount": 1155,
    "nonPbiCount": 430,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 109,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 273,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 297,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 149,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 199,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-sembung-narmada",
    "kodeWilayah": "5201032014",
    "kodeDesa": "52.01.03.2014",
    "namaDesa": "Sembung",
    "kecamatan": "Narmada",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7575,
    "totalKK": 1505,
    "totalIndividu": 4583,
    "kkDesil0": 85,
    "kkDesil1": 208,
    "kkDesil2": 237,
    "kkDesil3": 201,
    "kkDesil4": 161,
    "totalSasaranP3KE": 807,
    "persenMiskinEkstrem": 13.8,
    "rtlhCount": 95,
    "tanpaJambanCount": 179,
    "airTakTerlindungCount": 75,
    "tanpaListrikCount": 123,
    "tanpaAsetCount": 277,
    "pbiCount": 1063,
    "nonPbiCount": 442,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 95,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 179,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 75,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 277,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 123,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 208,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-krama-jaya-narmada",
    "kodeWilayah": "5201032015",
    "kodeDesa": "52.01.03.2015",
    "namaDesa": "Krama Jaya",
    "kecamatan": "Narmada",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7339,
    "totalKK": 1827,
    "totalIndividu": 5544,
    "kkDesil0": 90,
    "kkDesil1": 244,
    "kkDesil2": 251,
    "kkDesil3": 287,
    "kkDesil4": 232,
    "totalSasaranP3KE": 1014,
    "persenMiskinEkstrem": 13.4,
    "rtlhCount": 143,
    "tanpaJambanCount": 135,
    "airTakTerlindungCount": 38,
    "tanpaListrikCount": 150,
    "tanpaAsetCount": 304,
    "pbiCount": 1354,
    "nonPbiCount": 473,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 143,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 135,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 304,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 150,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 244,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-gerimax-indah-narmada",
    "kodeWilayah": "5201032016",
    "kodeDesa": "52.01.03.2016",
    "namaDesa": "Gerimax Indah",
    "kecamatan": "Narmada",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7465,
    "totalKK": 1686,
    "totalIndividu": 5221,
    "kkDesil0": 80,
    "kkDesil1": 233,
    "kkDesil2": 236,
    "kkDesil3": 203,
    "kkDesil4": 149,
    "totalSasaranP3KE": 821,
    "persenMiskinEkstrem": 13.8,
    "rtlhCount": 87,
    "tanpaJambanCount": 318,
    "airTakTerlindungCount": 100,
    "tanpaListrikCount": 68,
    "tanpaAsetCount": 302,
    "pbiCount": 1060,
    "nonPbiCount": 626,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 87,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 318,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 100,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 302,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 68,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 233,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-pakuan-narmada",
    "kodeWilayah": "5201032017",
    "kodeDesa": "52.01.03.2017",
    "namaDesa": "Pakuan",
    "kecamatan": "Narmada",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7874,
    "totalKK": 1171,
    "totalIndividu": 3423,
    "kkDesil0": 69,
    "kkDesil1": 217,
    "kkDesil2": 170,
    "kkDesil3": 153,
    "kkDesil4": 76,
    "totalSasaranP3KE": 616,
    "persenMiskinEkstrem": 18.5,
    "rtlhCount": 83,
    "tanpaJambanCount": 34,
    "airTakTerlindungCount": 13,
    "tanpaListrikCount": 56,
    "tanpaAsetCount": 222,
    "pbiCount": 793,
    "nonPbiCount": 378,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 83,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 222,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 56,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 217,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-golong-narmada",
    "kodeWilayah": "5201032018",
    "kodeDesa": "52.01.03.2018",
    "namaDesa": "Golong",
    "kecamatan": "Narmada",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.8331,
    "totalKK": 2270,
    "totalIndividu": 6889,
    "kkDesil0": 119,
    "kkDesil1": 272,
    "kkDesil2": 226,
    "kkDesil3": 200,
    "kkDesil4": 174,
    "totalSasaranP3KE": 872,
    "persenMiskinEkstrem": 12,
    "rtlhCount": 109,
    "tanpaJambanCount": 90,
    "airTakTerlindungCount": 67,
    "tanpaListrikCount": 263,
    "tanpaAsetCount": 350,
    "pbiCount": 1298,
    "nonPbiCount": 972,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 109,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 90,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 67,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 350,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 263,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 272,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-mekarsari-narmada",
    "kodeWilayah": "5201032019",
    "kodeDesa": "52.01.03.2019",
    "namaDesa": "Mekarsari",
    "kecamatan": "Narmada",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.8299,
    "totalKK": 752,
    "totalIndividu": 2309,
    "kkDesil0": 25,
    "kkDesil1": 127,
    "kkDesil2": 120,
    "kkDesil3": 105,
    "kkDesil4": 60,
    "totalSasaranP3KE": 412,
    "persenMiskinEkstrem": 16.9,
    "rtlhCount": 92,
    "tanpaJambanCount": 127,
    "airTakTerlindungCount": 28,
    "tanpaListrikCount": 90,
    "tanpaAsetCount": 104,
    "pbiCount": 591,
    "nonPbiCount": 161,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 92,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 127,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 104,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 90,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 127,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-buwun-sejati-narmada",
    "kodeWilayah": "5201032020",
    "kodeDesa": "52.01.03.2020",
    "namaDesa": "Buwun Sejati",
    "kecamatan": "Narmada",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7024,
    "totalKK": 1582,
    "totalIndividu": 4831,
    "kkDesil0": 79,
    "kkDesil1": 315,
    "kkDesil2": 257,
    "kkDesil3": 186,
    "kkDesil4": 163,
    "totalSasaranP3KE": 921,
    "persenMiskinEkstrem": 19.9,
    "rtlhCount": 29,
    "tanpaJambanCount": 397,
    "airTakTerlindungCount": 122,
    "tanpaListrikCount": 210,
    "tanpaAsetCount": 258,
    "pbiCount": 1191,
    "nonPbiCount": 391,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 29,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 397,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 122,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 258,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 210,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 315,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-narmada-narmada",
    "kodeWilayah": "5201032021",
    "kodeDesa": "52.01.03.2021",
    "namaDesa": "Narmada",
    "kecamatan": "Narmada",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.8126,
    "totalKK": 1585,
    "totalIndividu": 4748,
    "kkDesil0": 93,
    "kkDesil1": 134,
    "kkDesil2": 119,
    "kkDesil3": 96,
    "kkDesil4": 112,
    "totalSasaranP3KE": 461,
    "persenMiskinEkstrem": 8.5,
    "rtlhCount": 104,
    "tanpaJambanCount": 129,
    "airTakTerlindungCount": 41,
    "tanpaListrikCount": 131,
    "tanpaAsetCount": 266,
    "pbiCount": 826,
    "nonPbiCount": 759,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 104,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 129,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 266,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 131,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 134,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-sekotong-tengah-sekotong",
    "kodeWilayah": "5201072001",
    "kodeDesa": "52.01.07.2001",
    "namaDesa": "Sekotong Tengah",
    "kecamatan": "Sekotong",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.9055,
    "totalKK": 3100,
    "totalIndividu": 8943,
    "kkDesil0": 330,
    "kkDesil1": 729,
    "kkDesil2": 425,
    "kkDesil3": 320,
    "kkDesil4": 241,
    "totalSasaranP3KE": 1715,
    "persenMiskinEkstrem": 23.5,
    "rtlhCount": 307,
    "tanpaJambanCount": 729,
    "airTakTerlindungCount": 257,
    "tanpaListrikCount": 371,
    "tanpaAsetCount": 866,
    "pbiCount": 2005,
    "nonPbiCount": 1095,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 307,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 729,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 257,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 866,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 371,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 729,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-sekotong-barat-sekotong",
    "kodeWilayah": "5201072002",
    "kodeDesa": "52.01.07.2002",
    "namaDesa": "Sekotong Barat",
    "kecamatan": "Sekotong",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.8346,
    "totalKK": 3560,
    "totalIndividu": 10858,
    "kkDesil0": 252,
    "kkDesil1": 772,
    "kkDesil2": 504,
    "kkDesil3": 396,
    "kkDesil4": 338,
    "totalSasaranP3KE": 2010,
    "persenMiskinEkstrem": 21.7,
    "rtlhCount": 191,
    "tanpaJambanCount": 717,
    "airTakTerlindungCount": 79,
    "tanpaListrikCount": 105,
    "tanpaAsetCount": 815,
    "pbiCount": 2274,
    "nonPbiCount": 1286,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 191,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 717,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 79,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 815,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 105,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 772,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-pelangan-sekotong",
    "kodeWilayah": "5201072003",
    "kodeDesa": "52.01.07.2003",
    "namaDesa": "Pelangan",
    "kecamatan": "Sekotong",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.8157,
    "totalKK": 3079,
    "totalIndividu": 9564,
    "kkDesil0": 209,
    "kkDesil1": 722,
    "kkDesil2": 393,
    "kkDesil3": 306,
    "kkDesil4": 303,
    "totalSasaranP3KE": 1724,
    "persenMiskinEkstrem": 23.4,
    "rtlhCount": 140,
    "tanpaJambanCount": 706,
    "airTakTerlindungCount": 36,
    "tanpaListrikCount": 363,
    "tanpaAsetCount": 609,
    "pbiCount": 2221,
    "nonPbiCount": 858,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 140,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 706,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 609,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 363,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 722,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-buwun-mas-sekotong",
    "kodeWilayah": "5201072004",
    "kodeDesa": "52.01.07.2004",
    "namaDesa": "Buwun Mas",
    "kecamatan": "Sekotong",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.8283,
    "totalKK": 5179,
    "totalIndividu": 15938,
    "kkDesil0": 707,
    "kkDesil1": 1521,
    "kkDesil2": 735,
    "kkDesil3": 472,
    "kkDesil4": 399,
    "totalSasaranP3KE": 3127,
    "persenMiskinEkstrem": 29.4,
    "rtlhCount": 518,
    "tanpaJambanCount": 1905,
    "airTakTerlindungCount": 627,
    "tanpaListrikCount": 202,
    "tanpaAsetCount": 2094,
    "pbiCount": 3143,
    "nonPbiCount": 2036,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 518,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 1905,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 627,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 2094,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 202,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 1521,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-kedaro-sekotong",
    "kodeWilayah": "5201072005",
    "kodeDesa": "52.01.07.2005",
    "namaDesa": "Kedaro",
    "kecamatan": "Sekotong",
    "tipe": "Desa",
    "statusIndeks": "BERKEMBANG",
    "skorIndeks": 0.6898,
    "totalKK": 2148,
    "totalIndividu": 6633,
    "kkDesil0": 181,
    "kkDesil1": 542,
    "kkDesil2": 380,
    "kkDesil3": 225,
    "kkDesil4": 193,
    "totalSasaranP3KE": 1340,
    "persenMiskinEkstrem": 25.2,
    "rtlhCount": 147,
    "tanpaJambanCount": 687,
    "airTakTerlindungCount": 480,
    "tanpaListrikCount": 311,
    "tanpaAsetCount": 463,
    "pbiCount": 1366,
    "nonPbiCount": 782,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 147,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 687,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 480,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 463,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 311,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 542,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-batu-putih-sekotong",
    "kodeWilayah": "5201072006",
    "kodeDesa": "52.01.07.2006",
    "namaDesa": "Batu Putih",
    "kecamatan": "Sekotong",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.778,
    "totalKK": 2701,
    "totalIndividu": 8539,
    "kkDesil0": 194,
    "kkDesil1": 884,
    "kkDesil2": 354,
    "kkDesil3": 272,
    "kkDesil4": 260,
    "totalSasaranP3KE": 1770,
    "persenMiskinEkstrem": 32.7,
    "rtlhCount": 237,
    "tanpaJambanCount": 709,
    "airTakTerlindungCount": 115,
    "tanpaListrikCount": 421,
    "tanpaAsetCount": 538,
    "pbiCount": 1887,
    "nonPbiCount": 814,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 237,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 709,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 115,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 538,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 421,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 884,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-gili-gede-indah-sekotong",
    "kodeWilayah": "5201072007",
    "kodeDesa": "52.01.07.2007",
    "namaDesa": "Gili Gede Indah",
    "kecamatan": "Sekotong",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7307,
    "totalKK": 506,
    "totalIndividu": 1526,
    "kkDesil0": 37,
    "kkDesil1": 55,
    "kkDesil2": 50,
    "kkDesil3": 56,
    "kkDesil4": 48,
    "totalSasaranP3KE": 209,
    "persenMiskinEkstrem": 10.9,
    "rtlhCount": 41,
    "tanpaJambanCount": 113,
    "airTakTerlindungCount": 6,
    "tanpaListrikCount": 22,
    "tanpaAsetCount": 84,
    "pbiCount": 346,
    "nonPbiCount": 160,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 41,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 113,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 84,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 22,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      }
    ]
  },
  {
    "id": "desa-cendi-manik-sekotong",
    "kodeWilayah": "5201072008",
    "kodeDesa": "52.01.07.2008",
    "namaDesa": "Cendi Manik",
    "kecamatan": "Sekotong",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7953,
    "totalKK": 2137,
    "totalIndividu": 6581,
    "kkDesil0": 144,
    "kkDesil1": 464,
    "kkDesil2": 360,
    "kkDesil3": 207,
    "kkDesil4": 170,
    "totalSasaranP3KE": 1201,
    "persenMiskinEkstrem": 21.7,
    "rtlhCount": 158,
    "tanpaJambanCount": 391,
    "airTakTerlindungCount": 80,
    "tanpaListrikCount": 102,
    "tanpaAsetCount": 496,
    "pbiCount": 1499,
    "nonPbiCount": 638,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 158,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 391,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 80,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 496,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 102,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 464,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-taman-baru-sekotong",
    "kodeWilayah": "5201072009",
    "kodeDesa": "52.01.07.2009",
    "namaDesa": "Taman Baru",
    "kecamatan": "Sekotong",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7638,
    "totalKK": 1479,
    "totalIndividu": 4541,
    "kkDesil0": 78,
    "kkDesil1": 395,
    "kkDesil2": 264,
    "kkDesil3": 160,
    "kkDesil4": 160,
    "totalSasaranP3KE": 979,
    "persenMiskinEkstrem": 26.7,
    "rtlhCount": 137,
    "tanpaJambanCount": 322,
    "airTakTerlindungCount": 75,
    "tanpaListrikCount": 153,
    "tanpaAsetCount": 343,
    "pbiCount": 1160,
    "nonPbiCount": 319,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 137,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 322,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 75,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 343,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 153,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 395,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-bengkel-labuapi",
    "kodeWilayah": "5201082001",
    "kodeDesa": "52.01.08.2001",
    "namaDesa": "Bengkel",
    "kecamatan": "Labuapi",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.8504,
    "totalKK": 3137,
    "totalIndividu": 9727,
    "kkDesil0": 210,
    "kkDesil1": 285,
    "kkDesil2": 436,
    "kkDesil3": 266,
    "kkDesil4": 279,
    "totalSasaranP3KE": 1266,
    "persenMiskinEkstrem": 9.1,
    "rtlhCount": 33,
    "tanpaJambanCount": 309,
    "airTakTerlindungCount": 85,
    "tanpaListrikCount": 437,
    "tanpaAsetCount": 562,
    "pbiCount": 1878,
    "nonPbiCount": 1259,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 33,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 309,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 85,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 562,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 437,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 285,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-merembu-labuapi",
    "kodeWilayah": "5201082002",
    "kodeDesa": "52.01.08.2002",
    "namaDesa": "Merembu",
    "kecamatan": "Labuapi",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7386,
    "totalKK": 2489,
    "totalIndividu": 8078,
    "kkDesil0": 101,
    "kkDesil1": 247,
    "kkDesil2": 294,
    "kkDesil3": 294,
    "kkDesil4": 268,
    "totalSasaranP3KE": 1103,
    "persenMiskinEkstrem": 9.9,
    "rtlhCount": 12,
    "tanpaJambanCount": 608,
    "airTakTerlindungCount": 43,
    "tanpaListrikCount": 66,
    "tanpaAsetCount": 363,
    "pbiCount": 1605,
    "nonPbiCount": 884,
    "prioritasIntervensi": [
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 608,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 363,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 66,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 247,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-bagik-polak-labuapi",
    "kodeWilayah": "5201082003",
    "kodeDesa": "52.01.08.2003",
    "namaDesa": "Bagik Polak",
    "kecamatan": "Labuapi",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7575,
    "totalKK": 1815,
    "totalIndividu": 5437,
    "kkDesil0": 126,
    "kkDesil1": 166,
    "kkDesil2": 203,
    "kkDesil3": 220,
    "kkDesil4": 190,
    "totalSasaranP3KE": 779,
    "persenMiskinEkstrem": 9.1,
    "rtlhCount": 12,
    "tanpaJambanCount": 101,
    "airTakTerlindungCount": 18,
    "tanpaListrikCount": 143,
    "tanpaAsetCount": 381,
    "pbiCount": 1100,
    "nonPbiCount": 715,
    "prioritasIntervensi": [
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 101,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 381,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 143,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 166,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-telagawaru-labuapi",
    "kodeWilayah": "5201082004",
    "kodeDesa": "52.01.08.2004",
    "namaDesa": "Telagawaru",
    "kecamatan": "Labuapi",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.8646,
    "totalKK": 2416,
    "totalIndividu": 7438,
    "kkDesil0": 121,
    "kkDesil1": 244,
    "kkDesil2": 168,
    "kkDesil3": 243,
    "kkDesil4": 226,
    "totalSasaranP3KE": 881,
    "persenMiskinEkstrem": 10.1,
    "rtlhCount": 15,
    "tanpaJambanCount": 62,
    "airTakTerlindungCount": 8,
    "tanpaListrikCount": 124,
    "tanpaAsetCount": 401,
    "pbiCount": 1350,
    "nonPbiCount": 1066,
    "prioritasIntervensi": [
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 62,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 401,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 124,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 244,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-perampuan-labuapi",
    "kodeWilayah": "5201082005",
    "kodeDesa": "52.01.08.2005",
    "namaDesa": "Perampuan",
    "kecamatan": "Labuapi",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.8173,
    "totalKK": 2416,
    "totalIndividu": 7220,
    "kkDesil0": 132,
    "kkDesil1": 246,
    "kkDesil2": 271,
    "kkDesil3": 297,
    "kkDesil4": 264,
    "totalSasaranP3KE": 1078,
    "persenMiskinEkstrem": 10.2,
    "rtlhCount": 33,
    "tanpaJambanCount": 220,
    "airTakTerlindungCount": 27,
    "tanpaListrikCount": 172,
    "tanpaAsetCount": 450,
    "pbiCount": 1454,
    "nonPbiCount": 962,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 33,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 220,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 450,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 172,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 246,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-bajur-labuapi",
    "kodeWilayah": "5201082006",
    "kodeDesa": "52.01.08.2006",
    "namaDesa": "Bajur",
    "kecamatan": "Labuapi",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.874,
    "totalKK": 3944,
    "totalIndividu": 12974,
    "kkDesil0": 174,
    "kkDesil1": 326,
    "kkDesil2": 347,
    "kkDesil3": 274,
    "kkDesil4": 258,
    "totalSasaranP3KE": 1205,
    "persenMiskinEkstrem": 8.3,
    "rtlhCount": 95,
    "tanpaJambanCount": 755,
    "airTakTerlindungCount": 112,
    "tanpaListrikCount": 99,
    "tanpaAsetCount": 569,
    "pbiCount": 2177,
    "nonPbiCount": 1767,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 95,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 755,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 112,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 569,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 99,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 326,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-terong-tawah-labuapi",
    "kodeWilayah": "5201082007",
    "kodeDesa": "52.01.08.2007",
    "namaDesa": "Terong Tawah",
    "kecamatan": "Labuapi",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7213,
    "totalKK": 3919,
    "totalIndividu": 12976,
    "kkDesil0": 189,
    "kkDesil1": 504,
    "kkDesil2": 330,
    "kkDesil3": 281,
    "kkDesil4": 247,
    "totalSasaranP3KE": 1362,
    "persenMiskinEkstrem": 12.9,
    "rtlhCount": 43,
    "tanpaJambanCount": 268,
    "airTakTerlindungCount": 121,
    "tanpaListrikCount": 153,
    "tanpaAsetCount": 619,
    "pbiCount": 1793,
    "nonPbiCount": 2126,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 43,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 268,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 121,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 619,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 153,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 504,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-kuranji-labuapi",
    "kodeWilayah": "5201082008",
    "kodeDesa": "52.01.08.2008",
    "namaDesa": "Kuranji",
    "kecamatan": "Labuapi",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.8079,
    "totalKK": 905,
    "totalIndividu": 2578,
    "kkDesil0": 37,
    "kkDesil1": 226,
    "kkDesil2": 134,
    "kkDesil3": 91,
    "kkDesil4": 79,
    "totalSasaranP3KE": 530,
    "persenMiskinEkstrem": 25,
    "rtlhCount": 22,
    "tanpaJambanCount": 185,
    "airTakTerlindungCount": 3,
    "tanpaListrikCount": 126,
    "tanpaAsetCount": 159,
    "pbiCount": 668,
    "nonPbiCount": 237,
    "prioritasIntervensi": [
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 185,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 159,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 126,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 226,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-karang-bongkot-labuapi",
    "kodeWilayah": "5201082009",
    "kodeDesa": "52.01.08.2009",
    "namaDesa": "Karang Bongkot",
    "kecamatan": "Labuapi",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7811,
    "totalKK": 3215,
    "totalIndividu": 10436,
    "kkDesil0": 176,
    "kkDesil1": 163,
    "kkDesil2": 168,
    "kkDesil3": 179,
    "kkDesil4": 192,
    "totalSasaranP3KE": 702,
    "persenMiskinEkstrem": 5.1,
    "rtlhCount": 24,
    "tanpaJambanCount": 177,
    "airTakTerlindungCount": 171,
    "tanpaListrikCount": 55,
    "tanpaAsetCount": 765,
    "pbiCount": 1456,
    "nonPbiCount": 1759,
    "prioritasIntervensi": [
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 177,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 171,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 765,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 55,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 163,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-labuapi-labuapi",
    "kodeWilayah": "5201082010",
    "kodeDesa": "52.01.08.2010",
    "namaDesa": "Labuapi",
    "kecamatan": "Labuapi",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.8693,
    "totalKK": 2054,
    "totalIndividu": 6616,
    "kkDesil0": 83,
    "kkDesil1": 155,
    "kkDesil2": 148,
    "kkDesil3": 169,
    "kkDesil4": 180,
    "totalSasaranP3KE": 652,
    "persenMiskinEkstrem": 7.5,
    "rtlhCount": 38,
    "tanpaJambanCount": 125,
    "airTakTerlindungCount": 45,
    "tanpaListrikCount": 100,
    "tanpaAsetCount": 274,
    "pbiCount": 966,
    "nonPbiCount": 1088,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 38,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 125,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 274,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 100,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 155,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-bagik-polak-barat-labuapi",
    "kodeWilayah": "5201082011",
    "kodeDesa": "52.01.08.2011",
    "namaDesa": "Bagik Polak Barat",
    "kecamatan": "Labuapi",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7843,
    "totalKK": 1696,
    "totalIndividu": 5228,
    "kkDesil0": 117,
    "kkDesil1": 104,
    "kkDesil2": 125,
    "kkDesil3": 172,
    "kkDesil4": 199,
    "totalSasaranP3KE": 600,
    "persenMiskinEkstrem": 6.1,
    "rtlhCount": 8,
    "tanpaJambanCount": 135,
    "airTakTerlindungCount": 155,
    "tanpaListrikCount": 126,
    "tanpaAsetCount": 321,
    "pbiCount": 1031,
    "nonPbiCount": 665,
    "prioritasIntervensi": [
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 135,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 155,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 321,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 126,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 104,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-kuranji-dalang-labuapi",
    "kodeWilayah": "5201082012",
    "kodeDesa": "52.01.08.2012",
    "namaDesa": "Kuranji Dalang",
    "kecamatan": "Labuapi",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7748,
    "totalKK": 1142,
    "totalIndividu": 3261,
    "kkDesil0": 70,
    "kkDesil1": 138,
    "kkDesil2": 166,
    "kkDesil3": 96,
    "kkDesil4": 122,
    "totalSasaranP3KE": 522,
    "persenMiskinEkstrem": 12.1,
    "rtlhCount": 15,
    "tanpaJambanCount": 95,
    "airTakTerlindungCount": 9,
    "tanpaListrikCount": 88,
    "tanpaAsetCount": 210,
    "pbiCount": 763,
    "nonPbiCount": 379,
    "prioritasIntervensi": [
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 95,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 210,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 88,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 138,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-gunungsari-gunungsari",
    "kodeWilayah": "5201092001",
    "kodeDesa": "52.01.09.2001",
    "namaDesa": "Gunungsari",
    "kecamatan": "Gunungsari",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.9039,
    "totalKK": 3373,
    "totalIndividu": 10489,
    "kkDesil0": 297,
    "kkDesil1": 321,
    "kkDesil2": 253,
    "kkDesil3": 243,
    "kkDesil4": 276,
    "totalSasaranP3KE": 1093,
    "persenMiskinEkstrem": 9.5,
    "rtlhCount": 269,
    "tanpaJambanCount": 108,
    "airTakTerlindungCount": 27,
    "tanpaListrikCount": 422,
    "tanpaAsetCount": 792,
    "pbiCount": 1926,
    "nonPbiCount": 1447,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 269,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 108,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 792,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 422,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 321,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-midang-gunungsari",
    "kodeWilayah": "5201092002",
    "kodeDesa": "52.01.09.2002",
    "namaDesa": "Midang",
    "kecamatan": "Gunungsari",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.9024,
    "totalKK": 3132,
    "totalIndividu": 10332,
    "kkDesil0": 152,
    "kkDesil1": 149,
    "kkDesil2": 177,
    "kkDesil3": 168,
    "kkDesil4": 209,
    "totalSasaranP3KE": 703,
    "persenMiskinEkstrem": 4.8,
    "rtlhCount": 36,
    "tanpaJambanCount": 70,
    "airTakTerlindungCount": 32,
    "tanpaListrikCount": 110,
    "tanpaAsetCount": 564,
    "pbiCount": 1679,
    "nonPbiCount": 1453,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 36,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 70,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 564,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 110,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 149,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-sesela-gunungsari",
    "kodeWilayah": "5201092003",
    "kodeDesa": "52.01.09.2003",
    "namaDesa": "Sesela",
    "kecamatan": "Gunungsari",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.9291,
    "totalKK": 4933,
    "totalIndividu": 15976,
    "kkDesil0": 278,
    "kkDesil1": 568,
    "kkDesil2": 589,
    "kkDesil3": 506,
    "kkDesil4": 421,
    "totalSasaranP3KE": 2084,
    "persenMiskinEkstrem": 11.5,
    "rtlhCount": 69,
    "tanpaJambanCount": 153,
    "airTakTerlindungCount": 45,
    "tanpaListrikCount": 339,
    "tanpaAsetCount": 1062,
    "pbiCount": 3323,
    "nonPbiCount": 1610,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 69,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 153,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 1062,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 339,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 568,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-kekait-gunungsari",
    "kodeWilayah": "5201092004",
    "kodeDesa": "52.01.09.2004",
    "namaDesa": "Kekait",
    "kecamatan": "Gunungsari",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7622,
    "totalKK": 2977,
    "totalIndividu": 8802,
    "kkDesil0": 191,
    "kkDesil1": 260,
    "kkDesil2": 246,
    "kkDesil3": 233,
    "kkDesil4": 242,
    "totalSasaranP3KE": 981,
    "persenMiskinEkstrem": 8.7,
    "rtlhCount": 165,
    "tanpaJambanCount": 87,
    "airTakTerlindungCount": 51,
    "tanpaListrikCount": 222,
    "tanpaAsetCount": 549,
    "pbiCount": 1667,
    "nonPbiCount": 1310,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 165,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 87,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 51,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 549,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 222,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 260,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-kekeri-gunungsari",
    "kodeWilayah": "5201092005",
    "kodeDesa": "52.01.09.2005",
    "namaDesa": "Kekeri",
    "kecamatan": "Gunungsari",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.715,
    "totalKK": 2296,
    "totalIndividu": 7359,
    "kkDesil0": 167,
    "kkDesil1": 202,
    "kkDesil2": 233,
    "kkDesil3": 175,
    "kkDesil4": 146,
    "totalSasaranP3KE": 756,
    "persenMiskinEkstrem": 8.8,
    "rtlhCount": 15,
    "tanpaJambanCount": 77,
    "airTakTerlindungCount": 48,
    "tanpaListrikCount": 171,
    "tanpaAsetCount": 437,
    "pbiCount": 1159,
    "nonPbiCount": 1137,
    "prioritasIntervensi": [
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 77,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 437,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 171,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 202,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-mambalan-gunungsari",
    "kodeWilayah": "5201092006",
    "kodeDesa": "52.01.09.2006",
    "namaDesa": "Mambalan",
    "kecamatan": "Gunungsari",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7354,
    "totalKK": 1369,
    "totalIndividu": 4134,
    "kkDesil0": 83,
    "kkDesil1": 242,
    "kkDesil2": 205,
    "kkDesil3": 138,
    "kkDesil4": 114,
    "totalSasaranP3KE": 699,
    "persenMiskinEkstrem": 17.7,
    "rtlhCount": 46,
    "tanpaJambanCount": 194,
    "airTakTerlindungCount": 103,
    "tanpaListrikCount": 222,
    "tanpaAsetCount": 239,
    "pbiCount": 839,
    "nonPbiCount": 530,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 46,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 194,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 103,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 239,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 222,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 242,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-dopang-gunungsari",
    "kodeWilayah": "5201092007",
    "kodeDesa": "52.01.09.2007",
    "namaDesa": "Dopang",
    "kecamatan": "Gunungsari",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7244,
    "totalKK": 1169,
    "totalIndividu": 3471,
    "kkDesil0": 54,
    "kkDesil1": 168,
    "kkDesil2": 189,
    "kkDesil3": 128,
    "kkDesil4": 121,
    "totalSasaranP3KE": 606,
    "persenMiskinEkstrem": 14.4,
    "rtlhCount": 36,
    "tanpaJambanCount": 48,
    "airTakTerlindungCount": 13,
    "tanpaListrikCount": 151,
    "tanpaAsetCount": 170,
    "pbiCount": 797,
    "nonPbiCount": 372,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 36,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 170,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 151,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 168,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-penimbung-gunungsari",
    "kodeWilayah": "5201092008",
    "kodeDesa": "52.01.09.2008",
    "namaDesa": "Penimbung",
    "kecamatan": "Gunungsari",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7937,
    "totalKK": 1513,
    "totalIndividu": 4522,
    "kkDesil0": 58,
    "kkDesil1": 253,
    "kkDesil2": 233,
    "kkDesil3": 202,
    "kkDesil4": 129,
    "totalSasaranP3KE": 817,
    "persenMiskinEkstrem": 16.7,
    "rtlhCount": 26,
    "tanpaJambanCount": 366,
    "airTakTerlindungCount": 480,
    "tanpaListrikCount": 203,
    "tanpaAsetCount": 214,
    "pbiCount": 1139,
    "nonPbiCount": 374,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 26,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 366,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 480,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 214,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 203,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 253,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-taman-sari-gunungsari",
    "kodeWilayah": "5201092009",
    "kodeDesa": "52.01.09.2009",
    "namaDesa": "Taman Sari",
    "kecamatan": "Gunungsari",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7591,
    "totalKK": 4132,
    "totalIndividu": 12734,
    "kkDesil0": 220,
    "kkDesil1": 495,
    "kkDesil2": 494,
    "kkDesil3": 422,
    "kkDesil4": 397,
    "totalSasaranP3KE": 1808,
    "persenMiskinEkstrem": 12,
    "rtlhCount": 215,
    "tanpaJambanCount": 250,
    "airTakTerlindungCount": 538,
    "tanpaListrikCount": 367,
    "tanpaAsetCount": 804,
    "pbiCount": 2577,
    "nonPbiCount": 1555,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 215,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 250,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 538,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 804,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 367,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 495,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-jatisela-gunungsari",
    "kodeWilayah": "5201092010",
    "kodeDesa": "52.01.09.2010",
    "namaDesa": "Jatisela",
    "kecamatan": "Gunungsari",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.8315,
    "totalKK": 2869,
    "totalIndividu": 9218,
    "kkDesil0": 234,
    "kkDesil1": 220,
    "kkDesil2": 198,
    "kkDesil3": 242,
    "kkDesil4": 264,
    "totalSasaranP3KE": 924,
    "persenMiskinEkstrem": 7.7,
    "rtlhCount": 41,
    "tanpaJambanCount": 30,
    "airTakTerlindungCount": 24,
    "tanpaListrikCount": 136,
    "tanpaAsetCount": 655,
    "pbiCount": 1625,
    "nonPbiCount": 1244,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 41,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 655,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 136,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 220,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-guntur-macan-gunungsari",
    "kodeWilayah": "5201092011",
    "kodeDesa": "52.01.09.2011",
    "namaDesa": "Guntur Macan",
    "kecamatan": "Gunungsari",
    "tipe": "Desa",
    "statusIndeks": "BERKEMBANG",
    "skorIndeks": 0.663,
    "totalKK": 1066,
    "totalIndividu": 3065,
    "kkDesil0": 51,
    "kkDesil1": 176,
    "kkDesil2": 164,
    "kkDesil3": 145,
    "kkDesil4": 102,
    "totalSasaranP3KE": 587,
    "persenMiskinEkstrem": 16.5,
    "rtlhCount": 38,
    "tanpaJambanCount": 115,
    "airTakTerlindungCount": 72,
    "tanpaListrikCount": 120,
    "tanpaAsetCount": 200,
    "pbiCount": 832,
    "nonPbiCount": 234,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 38,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 115,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 72,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 200,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 120,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 176,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-mekar-sari-gunungsari",
    "kodeWilayah": "5201092012",
    "kodeDesa": "52.01.09.2012",
    "namaDesa": "Mekar Sari",
    "kecamatan": "Gunungsari",
    "tipe": "Desa",
    "statusIndeks": "BERKEMBANG",
    "skorIndeks": 0.6425,
    "totalKK": 1722,
    "totalIndividu": 4986,
    "kkDesil0": 122,
    "kkDesil1": 390,
    "kkDesil2": 268,
    "kkDesil3": 204,
    "kkDesil4": 193,
    "totalSasaranP3KE": 1055,
    "persenMiskinEkstrem": 22.6,
    "rtlhCount": 135,
    "tanpaJambanCount": 413,
    "airTakTerlindungCount": 73,
    "tanpaListrikCount": 224,
    "tanpaAsetCount": 327,
    "pbiCount": 1239,
    "nonPbiCount": 483,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 135,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 413,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 73,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 327,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 224,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 390,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-ranjok-gunungsari",
    "kodeWilayah": "5201092013",
    "kodeDesa": "52.01.09.2013",
    "namaDesa": "Ranjok",
    "kecamatan": "Gunungsari",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7953,
    "totalKK": 965,
    "totalIndividu": 3013,
    "kkDesil0": 48,
    "kkDesil1": 64,
    "kkDesil2": 56,
    "kkDesil3": 55,
    "kkDesil4": 64,
    "totalSasaranP3KE": 239,
    "persenMiskinEkstrem": 6.6,
    "rtlhCount": 15,
    "tanpaJambanCount": 37,
    "airTakTerlindungCount": 11,
    "tanpaListrikCount": 86,
    "tanpaAsetCount": 182,
    "pbiCount": 370,
    "nonPbiCount": 595,
    "prioritasIntervensi": [
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 182,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 86,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      }
    ]
  },
  {
    "id": "desa-gelangsar-gunungsari",
    "kodeWilayah": "5201092014",
    "kodeDesa": "52.01.09.2014",
    "namaDesa": "Gelangsar",
    "kecamatan": "Gunungsari",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7102,
    "totalKK": 1005,
    "totalIndividu": 2920,
    "kkDesil0": 35,
    "kkDesil1": 279,
    "kkDesil2": 207,
    "kkDesil3": 141,
    "kkDesil4": 102,
    "totalSasaranP3KE": 729,
    "persenMiskinEkstrem": 27.8,
    "rtlhCount": 61,
    "tanpaJambanCount": 193,
    "airTakTerlindungCount": 254,
    "tanpaListrikCount": 154,
    "tanpaAsetCount": 149,
    "pbiCount": 820,
    "nonPbiCount": 185,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 61,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 193,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 254,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 149,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 154,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 279,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-jeringo-gunungsari",
    "kodeWilayah": "5201092015",
    "kodeDesa": "52.01.09.2015",
    "namaDesa": "Jeringo",
    "kecamatan": "Gunungsari",
    "tipe": "Desa",
    "statusIndeks": "BERKEMBANG",
    "skorIndeks": 0.6315,
    "totalKK": 1047,
    "totalIndividu": 2975,
    "kkDesil0": 20,
    "kkDesil1": 239,
    "kkDesil2": 210,
    "kkDesil3": 175,
    "kkDesil4": 100,
    "totalSasaranP3KE": 724,
    "persenMiskinEkstrem": 22.8,
    "rtlhCount": 34,
    "tanpaJambanCount": 224,
    "airTakTerlindungCount": 29,
    "tanpaListrikCount": 211,
    "tanpaAsetCount": 94,
    "pbiCount": 839,
    "nonPbiCount": 208,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 34,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 224,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 94,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 211,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 239,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-bukittinggi-gunungsari",
    "kodeWilayah": "5201092016",
    "kodeDesa": "52.01.09.2016",
    "namaDesa": "Bukittinggi",
    "kecamatan": "Gunungsari",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7906,
    "totalKK": 994,
    "totalIndividu": 2792,
    "kkDesil0": 69,
    "kkDesil1": 171,
    "kkDesil2": 129,
    "kkDesil3": 103,
    "kkDesil4": 109,
    "totalSasaranP3KE": 512,
    "persenMiskinEkstrem": 17.2,
    "rtlhCount": 32,
    "tanpaJambanCount": 104,
    "airTakTerlindungCount": 68,
    "tanpaListrikCount": 145,
    "tanpaAsetCount": 214,
    "pbiCount": 641,
    "nonPbiCount": 353,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 32,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 104,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 68,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 214,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 145,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 171,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-lingsar-lingsar",
    "kodeWilayah": "5201122001",
    "kodeDesa": "52.01.12.2001",
    "namaDesa": "Lingsar",
    "kecamatan": "Lingsar",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.937,
    "totalKK": 1821,
    "totalIndividu": 5356,
    "kkDesil0": 78,
    "kkDesil1": 156,
    "kkDesil2": 224,
    "kkDesil3": 160,
    "kkDesil4": 129,
    "totalSasaranP3KE": 669,
    "persenMiskinEkstrem": 8.6,
    "rtlhCount": 26,
    "tanpaJambanCount": 200,
    "airTakTerlindungCount": 30,
    "tanpaListrikCount": 244,
    "tanpaAsetCount": 287,
    "pbiCount": 1131,
    "nonPbiCount": 690,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 26,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 200,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 287,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 244,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 156,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-batu-kumbung-lingsar",
    "kodeWilayah": "5201122002",
    "kodeDesa": "52.01.12.2002",
    "namaDesa": "Batu Kumbung",
    "kecamatan": "Lingsar",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.9307,
    "totalKK": 2822,
    "totalIndividu": 8303,
    "kkDesil0": 142,
    "kkDesil1": 276,
    "kkDesil2": 372,
    "kkDesil3": 202,
    "kkDesil4": 198,
    "totalSasaranP3KE": 1048,
    "persenMiskinEkstrem": 9.8,
    "rtlhCount": 74,
    "tanpaJambanCount": 480,
    "airTakTerlindungCount": 54,
    "tanpaListrikCount": 327,
    "tanpaAsetCount": 407,
    "pbiCount": 1723,
    "nonPbiCount": 1099,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 74,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 480,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 54,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 407,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 327,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 276,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-sigerongan-lingsar",
    "kodeWilayah": "5201122003",
    "kodeDesa": "52.01.12.2003",
    "namaDesa": "Sigerongan",
    "kecamatan": "Lingsar",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.8598,
    "totalKK": 2316,
    "totalIndividu": 6880,
    "kkDesil0": 84,
    "kkDesil1": 187,
    "kkDesil2": 191,
    "kkDesil3": 229,
    "kkDesil4": 214,
    "totalSasaranP3KE": 821,
    "persenMiskinEkstrem": 8.1,
    "rtlhCount": 169,
    "tanpaJambanCount": 603,
    "airTakTerlindungCount": 263,
    "tanpaListrikCount": 99,
    "tanpaAsetCount": 367,
    "pbiCount": 1576,
    "nonPbiCount": 740,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 169,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 603,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 263,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 367,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 99,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 187,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-duman-lingsar",
    "kodeWilayah": "5201122004",
    "kodeDesa": "52.01.12.2004",
    "namaDesa": "Duman",
    "kecamatan": "Lingsar",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.8252,
    "totalKK": 1939,
    "totalIndividu": 5560,
    "kkDesil0": 124,
    "kkDesil1": 208,
    "kkDesil2": 147,
    "kkDesil3": 150,
    "kkDesil4": 132,
    "totalSasaranP3KE": 637,
    "persenMiskinEkstrem": 10.7,
    "rtlhCount": 57,
    "tanpaJambanCount": 124,
    "airTakTerlindungCount": 38,
    "tanpaListrikCount": 291,
    "tanpaAsetCount": 349,
    "pbiCount": 1087,
    "nonPbiCount": 852,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 57,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 124,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 349,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 291,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 208,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-karang-bayan-lingsar",
    "kodeWilayah": "5201122005",
    "kodeDesa": "52.01.12.2005",
    "namaDesa": "Karang Bayan",
    "kecamatan": "Lingsar",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7827,
    "totalKK": 2122,
    "totalIndividu": 6042,
    "kkDesil0": 165,
    "kkDesil1": 335,
    "kkDesil2": 201,
    "kkDesil3": 218,
    "kkDesil4": 202,
    "totalSasaranP3KE": 956,
    "persenMiskinEkstrem": 15.8,
    "rtlhCount": 170,
    "tanpaJambanCount": 339,
    "airTakTerlindungCount": 72,
    "tanpaListrikCount": 179,
    "tanpaAsetCount": 464,
    "pbiCount": 1188,
    "nonPbiCount": 934,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 170,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 339,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 72,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 464,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 179,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 335,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-langko-lingsar",
    "kodeWilayah": "5201122006",
    "kodeDesa": "52.01.12.2006",
    "namaDesa": "Langko",
    "kecamatan": "Lingsar",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.885,
    "totalKK": 2691,
    "totalIndividu": 7921,
    "kkDesil0": 159,
    "kkDesil1": 399,
    "kkDesil2": 300,
    "kkDesil3": 230,
    "kkDesil4": 214,
    "totalSasaranP3KE": 1143,
    "persenMiskinEkstrem": 14.8,
    "rtlhCount": 110,
    "tanpaJambanCount": 302,
    "airTakTerlindungCount": 380,
    "tanpaListrikCount": 261,
    "tanpaAsetCount": 630,
    "pbiCount": 1839,
    "nonPbiCount": 852,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 110,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 302,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 380,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 630,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 261,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 399,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-dasan-geria-lingsar",
    "kodeWilayah": "5201122007",
    "kodeDesa": "52.01.12.2007",
    "namaDesa": "Dasan Geria",
    "kecamatan": "Lingsar",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.8819,
    "totalKK": 2201,
    "totalIndividu": 6775,
    "kkDesil0": 139,
    "kkDesil1": 240,
    "kkDesil2": 328,
    "kkDesil3": 208,
    "kkDesil4": 185,
    "totalSasaranP3KE": 961,
    "persenMiskinEkstrem": 10.9,
    "rtlhCount": 43,
    "tanpaJambanCount": 349,
    "airTakTerlindungCount": 623,
    "tanpaListrikCount": 264,
    "tanpaAsetCount": 373,
    "pbiCount": 1261,
    "nonPbiCount": 940,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 43,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 349,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 623,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 373,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 264,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 240,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-peteluan-indah-lingsar",
    "kodeWilayah": "5201122008",
    "kodeDesa": "52.01.12.2008",
    "namaDesa": "Peteluan Indah",
    "kecamatan": "Lingsar",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.8646,
    "totalKK": 1441,
    "totalIndividu": 4259,
    "kkDesil0": 79,
    "kkDesil1": 135,
    "kkDesil2": 128,
    "kkDesil3": 149,
    "kkDesil4": 115,
    "totalSasaranP3KE": 527,
    "persenMiskinEkstrem": 9.4,
    "rtlhCount": 65,
    "tanpaJambanCount": 320,
    "airTakTerlindungCount": 34,
    "tanpaListrikCount": 56,
    "tanpaAsetCount": 252,
    "pbiCount": 1003,
    "nonPbiCount": 438,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 65,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 320,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 252,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 56,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 135,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-gegerung-lingsar",
    "kodeWilayah": "5201122009",
    "kodeDesa": "52.01.12.2009",
    "namaDesa": "Gegerung",
    "kecamatan": "Lingsar",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7827,
    "totalKK": 1734,
    "totalIndividu": 5274,
    "kkDesil0": 119,
    "kkDesil1": 310,
    "kkDesil2": 289,
    "kkDesil3": 222,
    "kkDesil4": 204,
    "totalSasaranP3KE": 1025,
    "persenMiskinEkstrem": 17.9,
    "rtlhCount": 51,
    "tanpaJambanCount": 216,
    "airTakTerlindungCount": 223,
    "tanpaListrikCount": 192,
    "tanpaAsetCount": 358,
    "pbiCount": 1297,
    "nonPbiCount": 437,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 51,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 216,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 223,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 358,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 192,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 310,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-batu-mekar-lingsar",
    "kodeWilayah": "5201122010",
    "kodeDesa": "52.01.12.2010",
    "namaDesa": "Batu Mekar",
    "kecamatan": "Lingsar",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.885,
    "totalKK": 3791,
    "totalIndividu": 11011,
    "kkDesil0": 242,
    "kkDesil1": 598,
    "kkDesil2": 375,
    "kkDesil3": 377,
    "kkDesil4": 393,
    "totalSasaranP3KE": 1743,
    "persenMiskinEkstrem": 15.8,
    "rtlhCount": 82,
    "tanpaJambanCount": 671,
    "airTakTerlindungCount": 252,
    "tanpaListrikCount": 465,
    "tanpaAsetCount": 643,
    "pbiCount": 2363,
    "nonPbiCount": 1428,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 82,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 671,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 252,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 643,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 465,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 598,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-giri-madia-lingsar",
    "kodeWilayah": "5201122011",
    "kodeDesa": "52.01.12.2011",
    "namaDesa": "Giri Madia",
    "kecamatan": "Lingsar",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7354,
    "totalKK": 1050,
    "totalIndividu": 3059,
    "kkDesil0": 45,
    "kkDesil1": 125,
    "kkDesil2": 153,
    "kkDesil3": 97,
    "kkDesil4": 88,
    "totalSasaranP3KE": 463,
    "persenMiskinEkstrem": 11.9,
    "rtlhCount": 50,
    "tanpaJambanCount": 96,
    "airTakTerlindungCount": 69,
    "tanpaListrikCount": 125,
    "tanpaAsetCount": 158,
    "pbiCount": 739,
    "nonPbiCount": 311,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 50,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 96,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 69,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 158,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 125,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 125,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-bug-bug-lingsar",
    "kodeWilayah": "5201122012",
    "kodeDesa": "52.01.12.2012",
    "namaDesa": "Bug-Bug",
    "kecamatan": "Lingsar",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.8598,
    "totalKK": 1451,
    "totalIndividu": 4413,
    "kkDesil0": 91,
    "kkDesil1": 268,
    "kkDesil2": 174,
    "kkDesil3": 128,
    "kkDesil4": 120,
    "totalSasaranP3KE": 690,
    "persenMiskinEkstrem": 18.5,
    "rtlhCount": 128,
    "tanpaJambanCount": 225,
    "airTakTerlindungCount": 44,
    "tanpaListrikCount": 127,
    "tanpaAsetCount": 308,
    "pbiCount": 855,
    "nonPbiCount": 596,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 128,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 225,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 308,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 127,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 268,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-gegelang-lingsar",
    "kodeWilayah": "5201122013",
    "kodeDesa": "52.01.12.2013",
    "namaDesa": "Gegelang",
    "kecamatan": "Lingsar",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.8472,
    "totalKK": 1457,
    "totalIndividu": 4209,
    "kkDesil0": 53,
    "kkDesil1": 163,
    "kkDesil2": 146,
    "kkDesil3": 119,
    "kkDesil4": 103,
    "totalSasaranP3KE": 531,
    "persenMiskinEkstrem": 11.2,
    "rtlhCount": 93,
    "tanpaJambanCount": 458,
    "airTakTerlindungCount": 89,
    "tanpaListrikCount": 45,
    "tanpaAsetCount": 246,
    "pbiCount": 940,
    "nonPbiCount": 517,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 93,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 458,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 89,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 246,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 45,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 163,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-saribaye-lingsar",
    "kodeWilayah": "5201122014",
    "kodeDesa": "52.01.12.2014",
    "namaDesa": "Saribaye",
    "kecamatan": "Lingsar",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.9008,
    "totalKK": 866,
    "totalIndividu": 2438,
    "kkDesil0": 52,
    "kkDesil1": 80,
    "kkDesil2": 164,
    "kkDesil3": 87,
    "kkDesil4": 85,
    "totalSasaranP3KE": 416,
    "persenMiskinEkstrem": 9.2,
    "rtlhCount": 7,
    "tanpaJambanCount": 202,
    "airTakTerlindungCount": 16,
    "tanpaListrikCount": 113,
    "tanpaAsetCount": 124,
    "pbiCount": 623,
    "nonPbiCount": 243,
    "prioritasIntervensi": [
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 202,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 124,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 113,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      }
    ]
  },
  {
    "id": "desa-gontoran-lingsar",
    "kodeWilayah": "5201122015",
    "kodeDesa": "52.01.12.2015",
    "namaDesa": "Gontoran",
    "kecamatan": "Lingsar",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.8724,
    "totalKK": 696,
    "totalIndividu": 1982,
    "kkDesil0": 42,
    "kkDesil1": 101,
    "kkDesil2": 86,
    "kkDesil3": 63,
    "kkDesil4": 33,
    "totalSasaranP3KE": 283,
    "persenMiskinEkstrem": 14.5,
    "rtlhCount": 6,
    "tanpaJambanCount": 92,
    "airTakTerlindungCount": 10,
    "tanpaListrikCount": 59,
    "tanpaAsetCount": 129,
    "pbiCount": 428,
    "nonPbiCount": 268,
    "prioritasIntervensi": [
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 92,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 129,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 59,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 101,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-lembar-lembar",
    "kodeWilayah": "5201132001",
    "kodeDesa": "52.01.13.2001",
    "namaDesa": "Lembar",
    "kecamatan": "Lembar",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7039,
    "totalKK": 2252,
    "totalIndividu": 5970,
    "kkDesil0": 139,
    "kkDesil1": 433,
    "kkDesil2": 338,
    "kkDesil3": 277,
    "kkDesil4": 205,
    "totalSasaranP3KE": 1253,
    "persenMiskinEkstrem": 19.2,
    "rtlhCount": 87,
    "tanpaJambanCount": 251,
    "airTakTerlindungCount": 10,
    "tanpaListrikCount": 275,
    "tanpaAsetCount": 377,
    "pbiCount": 1772,
    "nonPbiCount": 480,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 87,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 251,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 377,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 275,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 433,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-jembatan-kembar-lembar",
    "kodeWilayah": "5201132002",
    "kodeDesa": "52.01.13.2002",
    "namaDesa": "Jembatan Kembar",
    "kecamatan": "Lembar",
    "tipe": "Desa",
    "statusIndeks": "BERKEMBANG",
    "skorIndeks": 0.6898,
    "totalKK": 1703,
    "totalIndividu": 4848,
    "kkDesil0": 134,
    "kkDesil1": 366,
    "kkDesil2": 262,
    "kkDesil3": 203,
    "kkDesil4": 140,
    "totalSasaranP3KE": 971,
    "persenMiskinEkstrem": 21.5,
    "rtlhCount": 26,
    "tanpaJambanCount": 55,
    "airTakTerlindungCount": 10,
    "tanpaListrikCount": 156,
    "tanpaAsetCount": 354,
    "pbiCount": 1241,
    "nonPbiCount": 462,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 26,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 55,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 354,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 156,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 366,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-mareje-lembar",
    "kodeWilayah": "5201132003",
    "kodeDesa": "52.01.13.2003",
    "namaDesa": "Mareje",
    "kecamatan": "Lembar",
    "tipe": "Desa",
    "statusIndeks": "BERKEMBANG",
    "skorIndeks": 0.652,
    "totalKK": 1790,
    "totalIndividu": 4980,
    "kkDesil0": 201,
    "kkDesil1": 425,
    "kkDesil2": 253,
    "kkDesil3": 197,
    "kkDesil4": 161,
    "totalSasaranP3KE": 1036,
    "persenMiskinEkstrem": 23.7,
    "rtlhCount": 194,
    "tanpaJambanCount": 713,
    "airTakTerlindungCount": 109,
    "tanpaListrikCount": 254,
    "tanpaAsetCount": 555,
    "pbiCount": 1237,
    "nonPbiCount": 553,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 194,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 713,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 109,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 555,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 254,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 425,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-sekotong-timur-lembar",
    "kodeWilayah": "5201132004",
    "kodeDesa": "52.01.13.2004",
    "namaDesa": "Sekotong Timur",
    "kecamatan": "Lembar",
    "tipe": "Desa",
    "statusIndeks": "BERKEMBANG",
    "skorIndeks": 0.6063,
    "totalKK": 1765,
    "totalIndividu": 5094,
    "kkDesil0": 130,
    "kkDesil1": 529,
    "kkDesil2": 306,
    "kkDesil3": 226,
    "kkDesil4": 159,
    "totalSasaranP3KE": 1220,
    "persenMiskinEkstrem": 30,
    "rtlhCount": 86,
    "tanpaJambanCount": 525,
    "airTakTerlindungCount": 204,
    "tanpaListrikCount": 235,
    "tanpaAsetCount": 388,
    "pbiCount": 1351,
    "nonPbiCount": 414,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 86,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 525,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 204,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 388,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 235,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 529,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-labuan-tereng-lembar",
    "kodeWilayah": "5201132005",
    "kodeDesa": "52.01.13.2005",
    "namaDesa": "Labuan Tereng",
    "kecamatan": "Lembar",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7732,
    "totalKK": 2396,
    "totalIndividu": 7176,
    "kkDesil0": 103,
    "kkDesil1": 456,
    "kkDesil2": 540,
    "kkDesil3": 298,
    "kkDesil4": 252,
    "totalSasaranP3KE": 1546,
    "persenMiskinEkstrem": 19,
    "rtlhCount": 149,
    "tanpaJambanCount": 449,
    "airTakTerlindungCount": 36,
    "tanpaListrikCount": 273,
    "tanpaAsetCount": 395,
    "pbiCount": 1818,
    "nonPbiCount": 578,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 149,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 449,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 395,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 273,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 456,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-jembatan-gantung-lembar",
    "kodeWilayah": "5201132006",
    "kodeDesa": "52.01.13.2006",
    "namaDesa": "Jembatan Gantung",
    "kecamatan": "Lembar",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7638,
    "totalKK": 2384,
    "totalIndividu": 7144,
    "kkDesil0": 105,
    "kkDesil1": 459,
    "kkDesil2": 332,
    "kkDesil3": 237,
    "kkDesil4": 213,
    "totalSasaranP3KE": 1241,
    "persenMiskinEkstrem": 19.3,
    "rtlhCount": 66,
    "tanpaJambanCount": 167,
    "airTakTerlindungCount": 23,
    "tanpaListrikCount": 166,
    "tanpaAsetCount": 378,
    "pbiCount": 1633,
    "nonPbiCount": 751,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 66,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 167,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 378,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 166,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 459,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-lembar-selatan-lembar",
    "kodeWilayah": "5201132007",
    "kodeDesa": "52.01.13.2007",
    "namaDesa": "Lembar Selatan",
    "kecamatan": "Lembar",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.863,
    "totalKK": 4087,
    "totalIndividu": 12748,
    "kkDesil0": 196,
    "kkDesil1": 508,
    "kkDesil2": 580,
    "kkDesil3": 421,
    "kkDesil4": 388,
    "totalSasaranP3KE": 1897,
    "persenMiskinEkstrem": 12.4,
    "rtlhCount": 109,
    "tanpaJambanCount": 209,
    "airTakTerlindungCount": 10,
    "tanpaListrikCount": 304,
    "tanpaAsetCount": 815,
    "pbiCount": 2502,
    "nonPbiCount": 1585,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 109,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 209,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 815,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 304,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 508,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-mareje-timur-lembar",
    "kodeWilayah": "5201132008",
    "kodeDesa": "52.01.13.2008",
    "namaDesa": "Mareje Timur",
    "kecamatan": "Lembar",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7937,
    "totalKK": 1319,
    "totalIndividu": 3779,
    "kkDesil0": 94,
    "kkDesil1": 249,
    "kkDesil2": 176,
    "kkDesil3": 195,
    "kkDesil4": 189,
    "totalSasaranP3KE": 809,
    "persenMiskinEkstrem": 18.9,
    "rtlhCount": 138,
    "tanpaJambanCount": 385,
    "airTakTerlindungCount": 79,
    "tanpaListrikCount": 221,
    "tanpaAsetCount": 305,
    "pbiCount": 873,
    "nonPbiCount": 446,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 138,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 385,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 79,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 305,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 221,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 249,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-jembatan-kembar-timur-lembar",
    "kodeWilayah": "5201132009",
    "kodeDesa": "52.01.13.2009",
    "namaDesa": "Jembatan Kembar Timur",
    "kecamatan": "Lembar",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7906,
    "totalKK": 1718,
    "totalIndividu": 5115,
    "kkDesil0": 56,
    "kkDesil1": 266,
    "kkDesil2": 315,
    "kkDesil3": 193,
    "kkDesil4": 153,
    "totalSasaranP3KE": 927,
    "persenMiskinEkstrem": 15.5,
    "rtlhCount": 33,
    "tanpaJambanCount": 63,
    "airTakTerlindungCount": 10,
    "tanpaListrikCount": 152,
    "tanpaAsetCount": 252,
    "pbiCount": 1177,
    "nonPbiCount": 541,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 33,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 63,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 252,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 152,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 266,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-eyat-mayang-lembar",
    "kodeWilayah": "5201132010",
    "kodeDesa": "52.01.13.2010",
    "namaDesa": "Eyat Mayang",
    "kecamatan": "Lembar",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7213,
    "totalKK": 1150,
    "totalIndividu": 3449,
    "kkDesil0": 49,
    "kkDesil1": 263,
    "kkDesil2": 213,
    "kkDesil3": 189,
    "kkDesil4": 131,
    "totalSasaranP3KE": 796,
    "persenMiskinEkstrem": 22.9,
    "rtlhCount": 34,
    "tanpaJambanCount": 207,
    "airTakTerlindungCount": 16,
    "tanpaListrikCount": 111,
    "tanpaAsetCount": 198,
    "pbiCount": 939,
    "nonPbiCount": 211,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 34,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 207,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 198,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 111,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 263,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-batulayar-batu-layar",
    "kodeWilayah": "5201142001",
    "kodeDesa": "52.01.14.2001",
    "namaDesa": "Batulayar",
    "kecamatan": "Batu Layar",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.8268,
    "totalKK": 2725,
    "totalIndividu": 7926,
    "kkDesil0": 234,
    "kkDesil1": 317,
    "kkDesil2": 270,
    "kkDesil3": 240,
    "kkDesil4": 236,
    "totalSasaranP3KE": 1063,
    "persenMiskinEkstrem": 11.6,
    "rtlhCount": 82,
    "tanpaJambanCount": 169,
    "airTakTerlindungCount": 443,
    "tanpaListrikCount": 175,
    "tanpaAsetCount": 584,
    "pbiCount": 1713,
    "nonPbiCount": 1012,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 82,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 169,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 443,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 584,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 175,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 317,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-meninting-batu-layar",
    "kodeWilayah": "5201142002",
    "kodeDesa": "52.01.14.2002",
    "namaDesa": "Meninting",
    "kecamatan": "Batu Layar",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.8709,
    "totalKK": 2602,
    "totalIndividu": 7895,
    "kkDesil0": 246,
    "kkDesil1": 212,
    "kkDesil2": 191,
    "kkDesil3": 242,
    "kkDesil4": 278,
    "totalSasaranP3KE": 923,
    "persenMiskinEkstrem": 8.1,
    "rtlhCount": 17,
    "tanpaJambanCount": 18,
    "airTakTerlindungCount": 24,
    "tanpaListrikCount": 134,
    "tanpaAsetCount": 682,
    "pbiCount": 1402,
    "nonPbiCount": 1200,
    "prioritasIntervensi": [
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 682,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 134,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 212,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-sandik-batu-layar",
    "kodeWilayah": "5201142003",
    "kodeDesa": "52.01.14.2003",
    "namaDesa": "Sandik",
    "kecamatan": "Batu Layar",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.8614,
    "totalKK": 5457,
    "totalIndividu": 17293,
    "kkDesil0": 402,
    "kkDesil1": 259,
    "kkDesil2": 250,
    "kkDesil3": 279,
    "kkDesil4": 393,
    "totalSasaranP3KE": 1181,
    "persenMiskinEkstrem": 4.7,
    "rtlhCount": 112,
    "tanpaJambanCount": 223,
    "airTakTerlindungCount": 40,
    "tanpaListrikCount": 103,
    "tanpaAsetCount": 1111,
    "pbiCount": 2628,
    "nonPbiCount": 2829,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 112,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 223,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 1111,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 103,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 259,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-lembah-sari-batu-layar",
    "kodeWilayah": "5201142004",
    "kodeDesa": "52.01.14.2004",
    "namaDesa": "Lembah Sari",
    "kecamatan": "Batu Layar",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.737,
    "totalKK": 1287,
    "totalIndividu": 3626,
    "kkDesil0": 111,
    "kkDesil1": 122,
    "kkDesil2": 139,
    "kkDesil3": 155,
    "kkDesil4": 152,
    "totalSasaranP3KE": 568,
    "persenMiskinEkstrem": 9.5,
    "rtlhCount": 41,
    "tanpaJambanCount": 63,
    "airTakTerlindungCount": 42,
    "tanpaListrikCount": 113,
    "tanpaAsetCount": 270,
    "pbiCount": 840,
    "nonPbiCount": 447,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 41,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 63,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 270,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 113,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 122,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-senteluk-batu-layar",
    "kodeWilayah": "5201142005",
    "kodeDesa": "52.01.14.2005",
    "namaDesa": "Senteluk",
    "kecamatan": "Batu Layar",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.8425,
    "totalKK": 1846,
    "totalIndividu": 5500,
    "kkDesil0": 161,
    "kkDesil1": 112,
    "kkDesil2": 114,
    "kkDesil3": 162,
    "kkDesil4": 162,
    "totalSasaranP3KE": 550,
    "persenMiskinEkstrem": 6.1,
    "rtlhCount": 42,
    "tanpaJambanCount": 33,
    "airTakTerlindungCount": 7,
    "tanpaListrikCount": 156,
    "tanpaAsetCount": 449,
    "pbiCount": 1015,
    "nonPbiCount": 831,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 42,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 449,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 156,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 112,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-senggigi-batu-layar",
    "kodeWilayah": "5201142006",
    "kodeDesa": "52.01.14.2006",
    "namaDesa": "Senggigi",
    "kecamatan": "Batu Layar",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.8283,
    "totalKK": 1672,
    "totalIndividu": 5060,
    "kkDesil0": 137,
    "kkDesil1": 111,
    "kkDesil2": 133,
    "kkDesil3": 104,
    "kkDesil4": 121,
    "totalSasaranP3KE": 469,
    "persenMiskinEkstrem": 6.6,
    "rtlhCount": 64,
    "tanpaJambanCount": 25,
    "airTakTerlindungCount": 38,
    "tanpaListrikCount": 198,
    "tanpaAsetCount": 329,
    "pbiCount": 797,
    "nonPbiCount": 875,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 64,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 329,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 198,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 111,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-bengkaung-batu-layar",
    "kodeWilayah": "5201142007",
    "kodeDesa": "52.01.14.2007",
    "namaDesa": "Bengkaung",
    "kecamatan": "Batu Layar",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7732,
    "totalKK": 1518,
    "totalIndividu": 4474,
    "kkDesil0": 94,
    "kkDesil1": 193,
    "kkDesil2": 163,
    "kkDesil3": 173,
    "kkDesil4": 142,
    "totalSasaranP3KE": 671,
    "persenMiskinEkstrem": 12.7,
    "rtlhCount": 48,
    "tanpaJambanCount": 138,
    "airTakTerlindungCount": 179,
    "tanpaListrikCount": 62,
    "tanpaAsetCount": 273,
    "pbiCount": 1048,
    "nonPbiCount": 470,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 48,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 138,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 179,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 273,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 62,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 193,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-pusuk-lestari-batu-layar",
    "kodeWilayah": "5201142008",
    "kodeDesa": "52.01.14.2008",
    "namaDesa": "Pusuk Lestari",
    "kecamatan": "Batu Layar",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7386,
    "totalKK": 521,
    "totalIndividu": 1531,
    "kkDesil0": 31,
    "kkDesil1": 46,
    "kkDesil2": 58,
    "kkDesil3": 57,
    "kkDesil4": 69,
    "totalSasaranP3KE": 230,
    "persenMiskinEkstrem": 8.8,
    "rtlhCount": 25,
    "tanpaJambanCount": 81,
    "airTakTerlindungCount": 24,
    "tanpaListrikCount": 45,
    "tanpaAsetCount": 88,
    "pbiCount": 360,
    "nonPbiCount": 161,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 25,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 81,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 88,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 45,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      }
    ]
  },
  {
    "id": "desa-batu-layar-barat-batu-layar",
    "kodeWilayah": "5201142009",
    "kodeDesa": "52.01.14.2009",
    "namaDesa": "Batu Layar Barat",
    "kecamatan": "Batu Layar",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7858,
    "totalKK": 2027,
    "totalIndividu": 6155,
    "kkDesil0": 211,
    "kkDesil1": 209,
    "kkDesil2": 192,
    "kkDesil3": 206,
    "kkDesil4": 166,
    "totalSasaranP3KE": 773,
    "persenMiskinEkstrem": 10.3,
    "rtlhCount": 116,
    "tanpaJambanCount": 139,
    "airTakTerlindungCount": 232,
    "tanpaListrikCount": 172,
    "tanpaAsetCount": 547,
    "pbiCount": 1183,
    "nonPbiCount": 844,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 116,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 139,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 232,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 547,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 172,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 209,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-kuripan-kuripan",
    "kodeWilayah": "5201152001",
    "kodeDesa": "52.01.15.2001",
    "namaDesa": "Kuripan",
    "kecamatan": "Kuripan",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.9528,
    "totalKK": 3570,
    "totalIndividu": 10772,
    "kkDesil0": 247,
    "kkDesil1": 511,
    "kkDesil2": 479,
    "kkDesil3": 389,
    "kkDesil4": 409,
    "totalSasaranP3KE": 1788,
    "persenMiskinEkstrem": 14.3,
    "rtlhCount": 71,
    "tanpaJambanCount": 366,
    "airTakTerlindungCount": 111,
    "tanpaListrikCount": 370,
    "tanpaAsetCount": 866,
    "pbiCount": 2419,
    "nonPbiCount": 1151,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 71,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 366,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 111,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 866,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 370,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 511,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-jagaraga-kuripan",
    "kodeWilayah": "5201152002",
    "kodeDesa": "52.01.15.2002",
    "namaDesa": "Jagaraga",
    "kecamatan": "Kuripan",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.9291,
    "totalKK": 3480,
    "totalIndividu": 10689,
    "kkDesil0": 185,
    "kkDesil1": 529,
    "kkDesil2": 571,
    "kkDesil3": 433,
    "kkDesil4": 362,
    "totalSasaranP3KE": 1895,
    "persenMiskinEkstrem": 15.2,
    "rtlhCount": 239,
    "tanpaJambanCount": 604,
    "airTakTerlindungCount": 48,
    "tanpaListrikCount": 536,
    "tanpaAsetCount": 607,
    "pbiCount": 2406,
    "nonPbiCount": 1074,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 239,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 604,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 607,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 536,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 529,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-kuripan-utara-kuripan",
    "kodeWilayah": "5201152003",
    "kodeDesa": "52.01.15.2003",
    "namaDesa": "Kuripan Utara",
    "kecamatan": "Kuripan",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.885,
    "totalKK": 3436,
    "totalIndividu": 10364,
    "kkDesil0": 228,
    "kkDesil1": 535,
    "kkDesil2": 453,
    "kkDesil3": 482,
    "kkDesil4": 450,
    "totalSasaranP3KE": 1920,
    "persenMiskinEkstrem": 15.6,
    "rtlhCount": 78,
    "tanpaJambanCount": 771,
    "airTakTerlindungCount": 91,
    "tanpaListrikCount": 375,
    "tanpaAsetCount": 742,
    "pbiCount": 2368,
    "nonPbiCount": 1068,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 78,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 771,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Air Minum Bersih",
        "volume": 91,
        "satuan": "KK Rentan Air",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 742,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 375,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 535,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-kuripan-selatan-kuripan",
    "kodeWilayah": "5201152004",
    "kodeDesa": "52.01.15.2004",
    "namaDesa": "Kuripan Selatan",
    "kecamatan": "Kuripan",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7591,
    "totalKK": 1954,
    "totalIndividu": 5767,
    "kkDesil0": 143,
    "kkDesil1": 261,
    "kkDesil2": 233,
    "kkDesil3": 241,
    "kkDesil4": 221,
    "totalSasaranP3KE": 956,
    "persenMiskinEkstrem": 13.4,
    "rtlhCount": 58,
    "tanpaJambanCount": 265,
    "airTakTerlindungCount": 45,
    "tanpaListrikCount": 189,
    "tanpaAsetCount": 422,
    "pbiCount": 1397,
    "nonPbiCount": 557,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 58,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 265,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 422,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 189,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 261,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-kuripan-timur-kuripan",
    "kodeWilayah": "5201152005",
    "kodeDesa": "52.01.15.2005",
    "namaDesa": "Kuripan Timur",
    "kecamatan": "Kuripan",
    "tipe": "Desa",
    "statusIndeks": "MAJU",
    "skorIndeks": 0.7543,
    "totalKK": 1113,
    "totalIndividu": 3423,
    "kkDesil0": 64,
    "kkDesil1": 165,
    "kkDesil2": 136,
    "kkDesil3": 166,
    "kkDesil4": 162,
    "totalSasaranP3KE": 629,
    "persenMiskinEkstrem": 14.8,
    "rtlhCount": 30,
    "tanpaJambanCount": 166,
    "airTakTerlindungCount": 23,
    "tanpaListrikCount": 180,
    "tanpaAsetCount": 217,
    "pbiCount": 792,
    "nonPbiCount": 321,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 30,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 166,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 217,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 180,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 165,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "desa-giri-sasak-kuripan",
    "kodeWilayah": "5201152006",
    "kodeDesa": "52.01.15.2006",
    "namaDesa": "Giri Sasak",
    "kecamatan": "Kuripan",
    "tipe": "Desa",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.8551,
    "totalKK": 1591,
    "totalIndividu": 4697,
    "kkDesil0": 92,
    "kkDesil1": 310,
    "kkDesil2": 334,
    "kkDesil3": 192,
    "kkDesil4": 134,
    "totalSasaranP3KE": 970,
    "persenMiskinEkstrem": 19.5,
    "rtlhCount": 27,
    "tanpaJambanCount": 159,
    "airTakTerlindungCount": 13,
    "tanpaListrikCount": 210,
    "tanpaAsetCount": 331,
    "pbiCount": 1202,
    "nonPbiCount": 389,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 27,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 159,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 331,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 210,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 310,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "kelurahan-dasan-geres-gerung",
    "kodeWilayah": "5201011001",
    "kodeDesa": "52.01.01.1001",
    "namaDesa": "Dasan Geres",
    "kecamatan": "Gerung",
    "tipe": "Kelurahan",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.885,
    "totalKK": 2406,
    "totalIndividu": 7249,
    "kkDesil0": 200,
    "kkDesil1": 147,
    "kkDesil2": 150,
    "kkDesil3": 151,
    "kkDesil4": 147,
    "totalSasaranP3KE": 595,
    "persenMiskinEkstrem": 6.1,
    "rtlhCount": 131,
    "tanpaJambanCount": 33,
    "airTakTerlindungCount": 11,
    "tanpaListrikCount": 145,
    "tanpaAsetCount": 538,
    "pbiCount": 1129,
    "nonPbiCount": 1277,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 131,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 538,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 145,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 147,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "kelurahan-gerung-selatan-gerung",
    "kodeWilayah": "5201011002",
    "kodeDesa": "52.01.01.1002",
    "namaDesa": "Gerung Selatan",
    "kecamatan": "Gerung",
    "tipe": "Kelurahan",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.862,
    "totalKK": 3231,
    "totalIndividu": 9971,
    "kkDesil0": 183,
    "kkDesil1": 249,
    "kkDesil2": 286,
    "kkDesil3": 250,
    "kkDesil4": 247,
    "totalSasaranP3KE": 1032,
    "persenMiskinEkstrem": 7.7,
    "rtlhCount": 19,
    "tanpaJambanCount": 125,
    "airTakTerlindungCount": 17,
    "tanpaListrikCount": 176,
    "tanpaAsetCount": 613,
    "pbiCount": 1868,
    "nonPbiCount": 1363,
    "prioritasIntervensi": [
      {
        "sektor": "Sanitasi (Biotank)",
        "volume": 125,
        "satuan": "KK Tanpa Jamban",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 613,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 176,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 249,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  },
  {
    "id": "kelurahan-gerung-utara-gerung",
    "kodeWilayah": "5201011003",
    "kodeDesa": "52.01.01.1003",
    "namaDesa": "Gerung Utara",
    "kecamatan": "Gerung",
    "tipe": "Kelurahan",
    "statusIndeks": "MANDIRI",
    "skorIndeks": 0.871,
    "totalKK": 2406,
    "totalIndividu": 7249,
    "kkDesil0": 200,
    "kkDesil1": 147,
    "kkDesil2": 150,
    "kkDesil3": 151,
    "kkDesil4": 147,
    "totalSasaranP3KE": 595,
    "persenMiskinEkstrem": 6.1,
    "rtlhCount": 131,
    "tanpaJambanCount": 33,
    "airTakTerlindungCount": 11,
    "tanpaListrikCount": 145,
    "tanpaAsetCount": 538,
    "pbiCount": 1129,
    "nonPbiCount": 1277,
    "prioritasIntervensi": [
      {
        "sektor": "Perumahan (RTLH)",
        "volume": 131,
        "satuan": "Unit RTLH",
        "opd": "Dinas Perumahan dan Permukiman",
        "strategi": "Penurunan Kantong Kemiskinan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Pemberdayaan Ekonomi / UMKM",
        "volume": 538,
        "satuan": "KK Tanpa Aset",
        "opd": "Dinas Koperasi dan Usaha Kecil Menengah",
        "strategi": "Peningkatan Pendapatan",
        "urgensi": "Tinggi"
      },
      {
        "sektor": "Elektrifikasi (BPBL Listrik)",
        "volume": 145,
        "satuan": "KK Tanpa Listrik",
        "opd": "Dinas Pekerjaan Umum dan Penataan Ruang",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Sedang"
      },
      {
        "sektor": "Bansos & Jaminan Sosial (PBI / PKH)",
        "volume": 147,
        "satuan": "KK Miskin Ekstrem",
        "opd": "Dinas Sosial",
        "strategi": "Pengurangan Beban Pengeluaran",
        "urgensi": "Tinggi"
      }
    ]
  }
];

// Map cepat berdasarkan kode wilayah 10 digit (misal: "5201012002")
export const PATJU_DESA_BY_KODE = {};
// Map cepat berdasarkan nama desa lowercase
export const PATJU_DESA_BY_NAMA = {};

PATJU_DESA_LIST.forEach(d => {
  if (d.kodeWilayah) PATJU_DESA_BY_KODE[d.kodeWilayah] = d;
  if (d.kodeDesa) PATJU_DESA_BY_KODE[d.kodeDesa.replace(/\./g, '')] = d;
  if (d.namaDesa) {
    const key = `${d.kecamatan.toLowerCase()}_${d.namaDesa.toLowerCase()}`;
    PATJU_DESA_BY_NAMA[key] = d;
    PATJU_DESA_BY_NAMA[d.namaDesa.toLowerCase()] = d;
  }
});

/**
 * Mencari data sasaran agregat PATJU 360 untuk desa tertentu
 */
export function getPatjuDesa(kodeWilayah, namaDesa, kecamatan) {
  if (kodeWilayah) {
    const cleanKode = String(kodeWilayah).replace(/\./g, '');
    if (PATJU_DESA_BY_KODE[cleanKode]) return PATJU_DESA_BY_KODE[cleanKode];
  }
  if (kecamatan && namaDesa) {
    const key = `${String(kecamatan).toLowerCase()}_${String(namaDesa).toLowerCase()}`;
    if (PATJU_DESA_BY_NAMA[key]) return PATJU_DESA_BY_NAMA[key];
  }
  if (namaDesa) {
    const cleanName = String(namaDesa).toLowerCase().replace(/^(desa|kelurahan)\s+/i, '').trim();
    if (PATJU_DESA_BY_NAMA[cleanName]) return PATJU_DESA_BY_NAMA[cleanName];
  }
  return null;
}

/**
 * Menghasilkan teks data dukung formal berbasis data sasaran PATJU 360
 * Siap ditempel ke proposal Musrenbang / SIPD Desa
 */
export function generateDataDukungPatju(desaPatju, treatmentNama) {
  if (!desaPatju) return "";
  
  const header = `[DATA SASARAN PATJU 360 - BAPPERIDA LOBAR]\nWilayah: ${desaPatju.tipe} ${desaPatju.namaDesa}, Kec. ${desaPatju.kecamatan} (Kode: ${desaPatju.kodeWilayah})\n`;
  const sasaran = `- Keluarga Sasaran Desil 1 (Kemiskinan Ekstrem): ${desaPatju.kkDesil1.toLocaleString('id-ID')} KK (${desaPatju.persenMiskinEkstrem}% dari total ${desaPatju.totalKK.toLocaleString('id-ID')} KK)\n- Keluarga Sasaran Desil 2: ${desaPatju.kkDesil2.toLocaleString('id-ID')} KK\n- Total Sasaran P3KE (Desil 1-4): ${desaPatju.totalSasaranP3KE.toLocaleString('id-ID')} KK\n`;
  const lokus = `- Rumah Tidak Layak Huni (RTLH): ${desaPatju.rtlhCount.toLocaleString('id-ID')} Unit\n- Rumah Tangga Tanpa Jamban Sehat: ${desaPatju.tanpaJambanCount.toLocaleString('id-ID')} KK\n- Rumah Tangga Akses Air Minum Rentan: ${desaPatju.airTakTerlindungCount.toLocaleString('id-ID')} KK\n- Rumah Tangga Belum Berlistrik Mandiri: ${desaPatju.tanpaListrikCount.toLocaleString('id-ID')} KK\n- Rumah Tangga Tanpa Aset Produktif: ${desaPatju.tanpaAsetCount.toLocaleString('id-ID')} KK\n`;
  const kesimpulan = `Usulan ${treatmentNama ? `program "${treatmentNama}"` : 'ini'} mendesak diprioritaskan dalam RKPD Lombok Barat / Dana Desa Satu Miliar guna menurunkan kantong kemiskinan dan meningkatkan pendapatan keluarga sasaran desil terendah.`;
  
  return `${header}${sasaran}${lokus}${kesimpulan}`;
}
