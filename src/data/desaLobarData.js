// Database Resmi 10 Kecamatan, 119 Desa, dan 3 Kelurahan Kabupaten Lombok Barat
// Sumber Data Valid: Sheet RUMUSAN (Indeks Desa 2026 - Kemendesa & Bappenas)
// Terhubung langsung ke Kamus Usulan RKPD Tahun 2027

export const DIMENSI_CONFIG = {
  layananDasar: {
    nama: "Layanan Dasar",
    bobotBappenas: 26.77,
    skorMaks: 170,
    subBidang: ["Pendidikan", "Kesehatan", "Utilitas Dasar (Air Bersih & RTLH)"],
    opdPengampu: [
      "Dinas Pendidikan dan Kebudayaan",
      "Dinas Kesehatan, Pengendalian Penduduk dan KB",
      "Dinas Pekerjaan Umum, Penataan Ruang, Perumahan dan Kawasan Permukiman"
    ]
  },
  sosial: {
    nama: "Sosial",
    bobotBappenas: 13.39,
    skorMaks: 85,
    subBidang: ["Olahraga & Pemuda", "Mitigasi Konflik", "Satkamling / Ronda", "Lembaga Adat & Budaya", "Keterlibatan Perempuan", "Perpustakaan"],
    opdPengampu: [
      "Dinas Pariwisata, Ekonomi Kreatif, Pemuda dan Olahraga",
      "Badan Kesatuan Bangsa dan Politik",
      "Satuan Polisi Pamong Praja",
      "Dinas Sosial, Pemberdayaan Perempuan dan Perlindungan Anak",
      "Dinas Kearsipan dan Perpustakaan"
    ]
  },
  ekonomi: {
    nama: "Ekonomi",
    bobotBappenas: 25.20,
    skorMaks: 160,
    subBidang: ["Pertanian & Pangan", "Peternakan", "Perikanan & Kelautan", "UMKM & Koperasi", "Pasar Desa"],
    opdPengampu: [
      "Dinas Pertanian",
      "Dinas Kelautan, Perikanan dan Ketahanan Pangan",
      "Dinas Perindustrian, Koperasi, UKM dan Tenaga Kerja",
      "Dinas Perdagangan"
    ]
  },
  lingkungan: {
    nama: "Lingkungan",
    bobotBappenas: 14.17,
    skorMaks: 90,
    subBidang: ["Pengelolaan Sampah", "Sanitasi & Air Limbah", "Penanggulangan Bencana"],
    opdPengampu: [
      "Dinas Lingkungan Hidup",
      "Badan Penanggulangan Bencana Daerah"
    ]
  },
  aksesibilitas: {
    nama: "Aksesibilitas",
    bobotBappenas: 7.87,
    skorMaks: 50,
    subBidang: ["Jalan Poros Desa", "Jembatan", "Penerangan Jalan Umum (PJU)", "Transportasi"],
    opdPengampu: [
      "Dinas Pekerjaan Umum, Penataan Ruang, Perumahan dan Kawasan Permukiman",
      "Dinas Perhubungan"
    ]
  },
  tataKelola: {
    nama: "Tata Kelola",
    bobotBappenas: 12.60,
    skorMaks: 80,
    subBidang: ["Administrasi Desa", "BUMDes", "SPBE / Digitalisasi Desa"],
    opdPengampu: [
      "Dinas Pemberdayaan Masyarakat dan Desa"
    ]
  }
};

export const DAFTAR_KECAMATAN = [
  {
    "nama": "Gerung",
    "kode": "52.01.01",
    "jumlahDesa": 11,
    "jumlahKelurahan": 3,
    "totalWilayah": 14
  },
  {
    "nama": "Kediri",
    "kode": "52.01.02",
    "jumlahDesa": 10,
    "jumlahKelurahan": 0,
    "totalWilayah": 10
  },
  {
    "nama": "Narmada",
    "kode": "52.01.03",
    "jumlahDesa": 21,
    "jumlahKelurahan": 0,
    "totalWilayah": 21
  },
  {
    "nama": "Sekotong",
    "kode": "52.01.07",
    "jumlahDesa": 9,
    "jumlahKelurahan": 0,
    "totalWilayah": 9
  },
  {
    "nama": "Labuapi",
    "kode": "52.01.08",
    "jumlahDesa": 12,
    "jumlahKelurahan": 0,
    "totalWilayah": 12
  },
  {
    "nama": "Gunungsari",
    "kode": "52.01.09",
    "jumlahDesa": 16,
    "jumlahKelurahan": 0,
    "totalWilayah": 16
  },
  {
    "nama": "Lingsar",
    "kode": "52.01.12",
    "jumlahDesa": 15,
    "jumlahKelurahan": 0,
    "totalWilayah": 15
  },
  {
    "nama": "Lembar",
    "kode": "52.01.13",
    "jumlahDesa": 10,
    "jumlahKelurahan": 0,
    "totalWilayah": 10
  },
  {
    "nama": "Batu Layar",
    "kode": "52.01.14",
    "jumlahDesa": 9,
    "jumlahKelurahan": 0,
    "totalWilayah": 9
  },
  {
    "nama": "Kuripan",
    "kode": "52.01.15",
    "jumlahDesa": 6,
    "jumlahKelurahan": 0,
    "totalWilayah": 6
  }
];

export const WILAYAH_LOBAR = [
  {
    "id": "desa-kebon-ayu-gerung",
    "nama": "Kebon Ayu",
    "tipe": "Desa",
    "kecamatan": "Gerung",
    "kodeWilayah": "5201012002",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.8079,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 80.71,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 513,
    "indeksKomposit": 19.3,
    "indikator": {
      "infrastruktur": 4.0,
      "pertanianPangan": 15.0,
      "pendidikanSDM": 24.0,
      "kesehatanStunting": 17.8,
      "ekonomiUMKM": 15.0,
      "lingkunganSampah": 17.8
    },
    "dimensi": {
      "layananDasar": {
        "skor": 133,
        "persen": 78.2,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 38,
            "maks": 45,
            "persen": 84.4
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 74,
            "maks": 100,
            "persen": 74.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 21,
            "maks": 25,
            "persen": 84.0
          }
        ],
        "sub": {
          "pendidikan": 38,
          "kesehatan": 74,
          "utilitas": 21
        }
      },
      "sosial": {
        "skor": 69,
        "persen": 81.2,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 63,
            "maks": 65,
            "persen": 96.9
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 6,
            "maks": 20,
            "persen": 30.0
          }
        ]
      },
      "ekonomi": {
        "skor": 136,
        "persen": 85.0,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 32,
            "maks": 40,
            "persen": 80.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 104,
            "maks": 120,
            "persen": 86.7
          }
        ]
      },
      "lingkungan": {
        "skor": 74,
        "persen": 82.2,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 51,
            "maks": 65,
            "persen": 78.5
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 48,
        "persen": 96.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 19,
            "maks": 20,
            "persen": 95.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 53,
        "persen": 66.2,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 31,
            "maks": 35,
            "persen": 88.6
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 22,
            "maks": 45,
            "persen": 48.9
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Tata Kelola (66.2%)",
      "Layanan Dasar (78.2%)"
    ],
    "targetDimensi": [
      "Tata Kelola",
      "Layanan Dasar"
    ],
    "catatanMusrenbang": "Terdapat 20 indikator defisit (Skor 1) dengan sektor kritis: Tata Kelola (66.2%). Prioritas lapangan: Ketersediaan layanan dokter di desa; Operasional ketersediaan layanan dokter di desa.",
    "rekomendasiKategori": [
      "Pemerintahan Desa & Digitalisasi",
      "Pendidikan & Sekolah"
    ],
    "namaKepalaDesa": "KASIM, S.S",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "-8.686347, 116.094876",
    "alamatDesa": "Jln. Slamet A Penarukan Kebon Ayu",
    "emailDesa": "kebonayu19@gmail.com",
    "webDesa": "kebonayu.desa.id / desa.kebonayu.tekadesa.com",
    "masaJabatanKades": "6 Tahun 3 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 100.06
  },
  {
    "id": "desa-gapuk-gerung",
    "nama": "Gapuk",
    "tipe": "Desa",
    "kecamatan": "Gerung",
    "kodeWilayah": "5201012003",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7827,
    "statusKemendesa": "MAJU",
    "skorBappenas": 79.35,
    "statusBappenas": "MAJU",
    "nilaiTotal": 497,
    "indeksKomposit": 20.7,
    "indikator": {
      "infrastruktur": 8.0,
      "pertanianPangan": 17.5,
      "pendidikanSDM": 12.0,
      "kesehatanStunting": 13.3,
      "ekonomiUMKM": 17.5,
      "lingkunganSampah": 40.0
    },
    "dimensi": {
      "layananDasar": {
        "skor": 141,
        "persen": 82.9,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 44,
            "maks": 45,
            "persen": 97.8
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 78,
            "maks": 100,
            "persen": 78.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 19,
            "maks": 25,
            "persen": 76.0
          }
        ],
        "sub": {
          "pendidikan": 44,
          "kesehatan": 78,
          "utilitas": 19
        }
      },
      "sosial": {
        "skor": 60,
        "persen": 70.6,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 56,
            "maks": 65,
            "persen": 86.2
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 4,
            "maks": 20,
            "persen": 20.0
          }
        ]
      },
      "ekonomi": {
        "skor": 132,
        "persen": 82.5,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 36,
            "maks": 40,
            "persen": 90.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 96,
            "maks": 120,
            "persen": 80.0
          }
        ]
      },
      "lingkungan": {
        "skor": 54,
        "persen": 60.0,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 49,
            "maks": 65,
            "persen": 75.4
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 5,
            "maks": 25,
            "persen": 20.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 46,
        "persen": 92.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 19,
            "maks": 20,
            "persen": 95.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 27,
            "maks": 30,
            "persen": 90.0
          }
        ]
      },
      "tataKelola": {
        "skor": 64,
        "persen": 80.0,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 27,
            "maks": 35,
            "persen": 77.1
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 37,
            "maks": 45,
            "persen": 82.2
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (60.0%)",
      "Sosial (70.6%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Sosial"
    ],
    "catatanMusrenbang": "Terdapat 27 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (60.0%). Prioritas lapangan: Ketersediaan layanan dokter di desa; Operasional ketersediaan layanan dokter di desa.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Keagamaan, Sosial & Budaya"
    ],
    "namaKepalaDesa": "NURDIN S.Pd I",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "-840160,11667,200,0ft",
    "alamatDesa": "Jln.TGH.Moh.Saleh",
    "emailDesa": "gapukdesa3t@gmail.com",
    "webDesa": "gapuk.desa.id",
    "masaJabatanKades": "7 Tahun 7 Bulan",
    "periodeKades": "Periode ke-2",
    "skorBappenasId": 98.38
  },
  {
    "id": "desa-suka-makmur-gerung",
    "nama": "Suka Makmur",
    "tipe": "Desa",
    "kecamatan": "Gerung",
    "kodeWilayah": "5201012005",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.6961,
    "statusKemendesa": "MAJU",
    "skorBappenas": 71.31,
    "statusBappenas": "MAJU",
    "nilaiTotal": 442,
    "indeksKomposit": 28.7,
    "indikator": {
      "infrastruktur": 24.0,
      "pertanianPangan": 31.2,
      "pendidikanSDM": 14.0,
      "kesehatanStunting": 21.1,
      "ekonomiUMKM": 31.2,
      "lingkunganSampah": 38.9
    },
    "dimensi": {
      "layananDasar": {
        "skor": 137,
        "persen": 80.6,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 43,
            "maks": 45,
            "persen": 95.6
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 71,
            "maks": 100,
            "persen": 71.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ],
        "sub": {
          "pendidikan": 43,
          "kesehatan": 71,
          "utilitas": 23
        }
      },
      "sosial": {
        "skor": 47,
        "persen": 55.3,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 41,
            "maks": 65,
            "persen": 63.1
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 6,
            "maks": 20,
            "persen": 30.0
          }
        ]
      },
      "ekonomi": {
        "skor": 110,
        "persen": 68.8,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 28,
            "maks": 40,
            "persen": 70.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 82,
            "maks": 120,
            "persen": 68.3
          }
        ]
      },
      "lingkungan": {
        "skor": 55,
        "persen": 61.1,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 34,
            "maks": 65,
            "persen": 52.3
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 21,
            "maks": 25,
            "persen": 84.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 38,
        "persen": 76.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 19,
            "maks": 20,
            "persen": 95.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 19,
            "maks": 30,
            "persen": 63.3
          }
        ]
      },
      "tataKelola": {
        "skor": 55,
        "persen": 68.8,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 32,
            "maks": 35,
            "persen": 91.4
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 23,
            "maks": 45,
            "persen": 51.1
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Sosial (55.3%)",
      "Lingkungan (61.1%)"
    ],
    "targetDimensi": [
      "Sosial",
      "Lingkungan"
    ],
    "catatanMusrenbang": "Terdapat 38 indikator defisit (Skor 1) dengan sektor kritis: Sosial (55.3%), Lingkungan (61.1%), Ekonomi (68.8%), Tata Kelola (68.8%). Prioritas lapangan: Ketersediaan layanan dokter di desa; Operasional ketersediaan layanan dokter di desa.",
    "rekomendasiKategori": [
      "Keagamaan, Sosial & Budaya",
      "Sampah, Lingkungan & Kebencanaan"
    ],
    "namaKepalaDesa": "H.SELAMET",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8.3924656S116547871E",
    "alamatDesa": "Desa Suka Makmur, Kecamatan Gerung",
    "emailDesa": "",
    "webDesa": "",
    "masaJabatanKades": "6 Tahun 5 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 88.4
  },
  {
    "id": "desa-banyu-urip-gerung",
    "nama": "Banyu Urip",
    "tipe": "Desa",
    "kecamatan": "Gerung",
    "kodeWilayah": "5201012006",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.778,
    "statusKemendesa": "MAJU",
    "skorBappenas": 77.66,
    "statusBappenas": "MAJU",
    "nilaiTotal": 494,
    "indeksKomposit": 22.3,
    "indikator": {
      "infrastruktur": 2.0,
      "pertanianPangan": 24.4,
      "pendidikanSDM": 10.0,
      "kesehatanStunting": 18.9,
      "ekonomiUMKM": 24.4,
      "lingkunganSampah": 35.6
    },
    "dimensi": {
      "layananDasar": {
        "skor": 139,
        "persen": 81.8,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 45,
            "maks": 45,
            "persen": 100.0
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 73,
            "maks": 100,
            "persen": 73.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 21,
            "maks": 25,
            "persen": 84.0
          }
        ],
        "sub": {
          "pendidikan": 45,
          "kesehatan": 73,
          "utilitas": 21
        }
      },
      "sosial": {
        "skor": 64,
        "persen": 75.3,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 58,
            "maks": 65,
            "persen": 89.2
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 6,
            "maks": 20,
            "persen": 30.0
          }
        ]
      },
      "ekonomi": {
        "skor": 121,
        "persen": 75.6,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 28,
            "maks": 40,
            "persen": 70.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 93,
            "maks": 120,
            "persen": 77.5
          }
        ]
      },
      "lingkungan": {
        "skor": 58,
        "persen": 64.4,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 41,
            "maks": 65,
            "persen": 63.1
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 17,
            "maks": 25,
            "persen": 68.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 19,
            "maks": 20,
            "persen": 95.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 30,
            "maks": 30,
            "persen": 100.0
          }
        ]
      },
      "tataKelola": {
        "skor": 63,
        "persen": 78.8,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 31,
            "maks": 35,
            "persen": 88.6
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 32,
            "maks": 45,
            "persen": 71.1
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (64.4%)",
      "Sosial (75.3%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Sosial"
    ],
    "catatanMusrenbang": "Terdapat 27 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (64.4%). Prioritas lapangan: Ketersediaan layanan dokter di desa; Operasional ketersediaan layanan dokter di desa.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Keagamaan, Sosial & Budaya"
    ],
    "namaKepalaDesa": "H. SELAMAT RIADI",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8.7088675 116.1460981",
    "alamatDesa": "Jln. Raya Desa Banyu Urip. Kec. Gerung Kab. Lombok Barat",
    "emailDesa": "banyuurip14@gmail.com",
    "webDesa": "",
    "masaJabatanKades": "5 Tahun 10 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 96.28
  },
  {
    "id": "desa-babussalam-gerung",
    "nama": "Babussalam",
    "tipe": "Desa",
    "kecamatan": "Gerung",
    "kodeWilayah": "5201012007",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7764,
    "statusKemendesa": "MAJU",
    "skorBappenas": 76.66,
    "statusBappenas": "MAJU",
    "nilaiTotal": 493,
    "indeksKomposit": 23.3,
    "indikator": {
      "infrastruktur": 8.0,
      "pertanianPangan": 33.8,
      "pendidikanSDM": 18.0,
      "kesehatanStunting": 14.4,
      "ekonomiUMKM": 33.8,
      "lingkunganSampah": 32.2
    },
    "dimensi": {
      "layananDasar": {
        "skor": 143,
        "persen": 84.1,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 41,
            "maks": 45,
            "persen": 91.1
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 77,
            "maks": 100,
            "persen": 77.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ],
        "sub": {
          "pendidikan": 41,
          "kesehatan": 77,
          "utilitas": 25
        }
      },
      "sosial": {
        "skor": 66,
        "persen": 77.6,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 60,
            "maks": 65,
            "persen": 92.3
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 6,
            "maks": 20,
            "persen": 30.0
          }
        ]
      },
      "ekonomi": {
        "skor": 106,
        "persen": 66.2,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 18,
            "maks": 40,
            "persen": 45.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 88,
            "maks": 120,
            "persen": 73.3
          }
        ]
      },
      "lingkungan": {
        "skor": 61,
        "persen": 67.8,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 45,
            "maks": 65,
            "persen": 69.2
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 16,
            "maks": 25,
            "persen": 64.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 46,
        "persen": 92.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 19,
            "maks": 20,
            "persen": 95.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 27,
            "maks": 30,
            "persen": 90.0
          }
        ]
      },
      "tataKelola": {
        "skor": 71,
        "persen": 88.8,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 33,
            "maks": 35,
            "persen": 94.3
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 38,
            "maks": 45,
            "persen": 84.4
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Ekonomi (66.2%)",
      "Lingkungan (67.8%)"
    ],
    "targetDimensi": [
      "Ekonomi",
      "Lingkungan"
    ],
    "catatanMusrenbang": "Terdapat 25 indikator defisit (Skor 1) dengan sektor kritis: Ekonomi (66.2%), Lingkungan (67.8%). Prioritas lapangan: Operasional ketersediaan layanan dokter di desa; Operasional ketersediaan layanan Bidan di desa.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ],
    "namaKepalaDesa": "H. RAMLI AHMAD",
    "statusKepalaDesa": "Penjabat",
    "koordinatDesa": "8.67260475S.116.15032267E",
    "alamatDesa": "JALAN-SOEKARNO HATTA BABUSSALAM KEC. GERUNG KAB. LOMBOK BARAT",
    "emailDesa": "babussalam3@gmail.com",
    "webDesa": "",
    "masaJabatanKades": "4 Tahun 9 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 95.04
  },
  {
    "id": "desa-dasan-tapen-gerung",
    "nama": "Dasan Tapen",
    "tipe": "Desa",
    "kecamatan": "Gerung",
    "kodeWilayah": "5201012008",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.8063,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 81.64,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 512,
    "indeksKomposit": 18.4,
    "indikator": {
      "infrastruktur": 2.0,
      "pertanianPangan": 21.2,
      "pendidikanSDM": 28.0,
      "kesehatanStunting": -5.6,
      "ekonomiUMKM": 21.2,
      "lingkunganSampah": 42.2
    },
    "dimensi": {
      "layananDasar": {
        "skor": 154,
        "persen": 90.6,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 36,
            "maks": 45,
            "persen": 80.0
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 95,
            "maks": 100,
            "persen": 95.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ],
        "sub": {
          "pendidikan": 36,
          "kesehatan": 95,
          "utilitas": 23
        }
      },
      "sosial": {
        "skor": 64,
        "persen": 75.3,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 50,
            "maks": 65,
            "persen": 76.9
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 14,
            "maks": 20,
            "persen": 70.0
          }
        ]
      },
      "ekonomi": {
        "skor": 126,
        "persen": 78.8,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 32,
            "maks": 40,
            "persen": 80.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 94,
            "maks": 120,
            "persen": 78.3
          }
        ]
      },
      "lingkungan": {
        "skor": 52,
        "persen": 57.8,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 41,
            "maks": 65,
            "persen": 63.1
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 11,
            "maks": 25,
            "persen": 44.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 67,
        "persen": 83.8,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 35,
            "maks": 35,
            "persen": 100.0
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 32,
            "maks": 45,
            "persen": 71.1
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (57.8%)",
      "Sosial (75.3%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Sosial"
    ],
    "catatanMusrenbang": "Terdapat 22 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (57.8%). Prioritas lapangan: Operasional ketersediaan layanan Bidan di desa; Keberadaan kearifan budaya/sosial/keagamaan yang ada/menjadi ciri khas desa.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Keagamaan, Sosial & Budaya"
    ],
    "namaKepalaDesa": "H NASRULLAH HASBI, BA",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8.6601912S 116.14371518E",
    "alamatDesa": "Jln Abdul Azis No 1 Dasan Tapen",
    "emailDesa": "kantordesadasantapengerung@gmail.com",
    "webDesa": "Jln Abdul Azis No 1 Dasan Tapen",
    "masaJabatanKades": "6 Tahun 3 Bulan",
    "periodeKades": "Periode ke-2",
    "skorBappenasId": 101.21
  },
  {
    "id": "desa-beleka-gerung",
    "nama": "Beleka",
    "tipe": "Desa",
    "kecamatan": "Gerung",
    "kodeWilayah": "5201012009",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.8756,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 88.39,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 556,
    "indeksKomposit": 11.6,
    "indikator": {
      "infrastruktur": 0.0,
      "pertanianPangan": 15.0,
      "pendidikanSDM": 10.0,
      "kesehatanStunting": -6.7,
      "ekonomiUMKM": 15.0,
      "lingkunganSampah": 35.6
    },
    "dimensi": {
      "layananDasar": {
        "skor": 164,
        "persen": 96.5,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 45,
            "maks": 45,
            "persen": 100.0
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 96,
            "maks": 100,
            "persen": 96.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ],
        "sub": {
          "pendidikan": 45,
          "kesehatan": 96,
          "utilitas": 23
        }
      },
      "sosial": {
        "skor": 76,
        "persen": 89.4,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 61,
            "maks": 65,
            "persen": 93.8
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 15,
            "maks": 20,
            "persen": 75.0
          }
        ]
      },
      "ekonomi": {
        "skor": 136,
        "persen": 85.0,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 36,
            "maks": 40,
            "persen": 90.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 100,
            "maks": 120,
            "persen": 83.3
          }
        ]
      },
      "lingkungan": {
        "skor": 58,
        "persen": 64.4,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 45,
            "maks": 65,
            "persen": 69.2
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 13,
            "maks": 25,
            "persen": 52.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 50,
        "persen": 100.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 30,
            "maks": 30,
            "persen": 100.0
          }
        ]
      },
      "tataKelola": {
        "skor": 72,
        "persen": 90.0,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 35,
            "maks": 35,
            "persen": 100.0
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 37,
            "maks": 45,
            "persen": 82.2
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (64.4%)",
      "Ekonomi (85.0%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Ekonomi"
    ],
    "catatanMusrenbang": "Terdapat 15 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (64.4%). Prioritas lapangan: Keberadaan Kearifan lokal atau kebudayaan lokal yang di jadikan sebagai kegiatan ekonomi dalam menunjang penghidupan masyarakat di desa; Ketersediaan Pendidikan Non-formal/Pusat Keterampilan/Kursus.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Pertanian, Peternakan & Pangan"
    ],
    "namaKepalaDesa": "ISLAHUDIN, S.IP.",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8.39'29,116.7,51\".56,8m,12.",
    "alamatDesa": "Jln. Dr. Sutomo No.12 Beleke-Gerung",
    "emailDesa": "belekemantap@gmail.com",
    "webDesa": "beleke.desa.id",
    "masaJabatanKades": "3 Tahun 8  Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 109.58
  },
  {
    "id": "desa-tempos-gerung",
    "nama": "Tempos",
    "tipe": "Desa",
    "kecamatan": "Gerung",
    "kodeWilayah": "5201012010",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7795,
    "statusKemendesa": "MAJU",
    "skorBappenas": 77.58,
    "statusBappenas": "MAJU",
    "nilaiTotal": 495,
    "indeksKomposit": 22.4,
    "indikator": {
      "infrastruktur": 2.0,
      "pertanianPangan": 32.5,
      "pendidikanSDM": 10.0,
      "kesehatanStunting": 12.2,
      "ekonomiUMKM": 32.5,
      "lingkunganSampah": 44.4
    },
    "dimensi": {
      "layananDasar": {
        "skor": 149,
        "persen": 87.6,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 45,
            "maks": 45,
            "persen": 100.0
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 79,
            "maks": 100,
            "persen": 79.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ],
        "sub": {
          "pendidikan": 45,
          "kesehatan": 79,
          "utilitas": 25
        }
      },
      "sosial": {
        "skor": 78,
        "persen": 91.8,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 63,
            "maks": 65,
            "persen": 96.9
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 15,
            "maks": 20,
            "persen": 75.0
          }
        ]
      },
      "ekonomi": {
        "skor": 108,
        "persen": 67.5,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 20,
            "maks": 40,
            "persen": 50.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 88,
            "maks": 120,
            "persen": 73.3
          }
        ]
      },
      "lingkungan": {
        "skor": 50,
        "persen": 55.6,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 37,
            "maks": 65,
            "persen": 56.9
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 13,
            "maks": 25,
            "persen": 52.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 19,
            "maks": 20,
            "persen": 95.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 30,
            "maks": 30,
            "persen": 100.0
          }
        ]
      },
      "tataKelola": {
        "skor": 61,
        "persen": 76.2,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 34,
            "maks": 35,
            "persen": 97.1
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 27,
            "maks": 45,
            "persen": 60.0
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (55.6%)",
      "Ekonomi (67.5%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Ekonomi"
    ],
    "catatanMusrenbang": "Terdapat 29 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (55.6%), Ekonomi (67.5%). Prioritas lapangan: Ketersediaan layanan dokter di desa; Operasional ketersediaan layanan dokter di desa.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Pertanian, Peternakan & Pangan"
    ],
    "namaKepalaDesa": "SUDIRMAN, SH.,MM",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8,7019' S, 116,14528' T",
    "alamatDesa": "JL GUNUNG SASAK NO.1 DESA TEMPOS KODE POS 83363",
    "emailDesa": "desatempos@gmail.com",
    "webDesa": "temposdesa.id",
    "masaJabatanKades": "4 Tahun 7 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 96.17
  },
  {
    "id": "desa-mesanggok-gerung",
    "nama": "Mesanggok",
    "tipe": "Desa",
    "kecamatan": "Gerung",
    "kodeWilayah": "5201012012",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.8142,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 81.3,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 517,
    "indeksKomposit": 18.7,
    "indikator": {
      "infrastruktur": 2.0,
      "pertanianPangan": 30.0,
      "pendidikanSDM": 14.0,
      "kesehatanStunting": 1.1,
      "ekonomiUMKM": 30.0,
      "lingkunganSampah": 24.4
    },
    "dimensi": {
      "layananDasar": {
        "skor": 157,
        "persen": 92.4,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 43,
            "maks": 45,
            "persen": 95.6
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 89,
            "maks": 100,
            "persen": 89.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ],
        "sub": {
          "pendidikan": 43,
          "kesehatan": 89,
          "utilitas": 25
        }
      },
      "sosial": {
        "skor": 69,
        "persen": 81.2,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 56,
            "maks": 65,
            "persen": 86.2
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 13,
            "maks": 20,
            "persen": 65.0
          }
        ]
      },
      "ekonomi": {
        "skor": 112,
        "persen": 70.0,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 24,
            "maks": 40,
            "persen": 60.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 88,
            "maks": 120,
            "persen": 73.3
          }
        ]
      },
      "lingkungan": {
        "skor": 68,
        "persen": 75.6,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 51,
            "maks": 65,
            "persen": 78.5
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 17,
            "maks": 25,
            "persen": 68.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 19,
            "maks": 20,
            "persen": 95.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 30,
            "maks": 30,
            "persen": 100.0
          }
        ]
      },
      "tataKelola": {
        "skor": 62,
        "persen": 77.5,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 34,
            "maks": 35,
            "persen": 97.1
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 28,
            "maks": 45,
            "persen": 62.2
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Ekonomi (70.0%)",
      "Lingkungan (75.6%)"
    ],
    "targetDimensi": [
      "Ekonomi",
      "Lingkungan"
    ],
    "catatanMusrenbang": "Seluruh 6 dimensi ≥70%, namun masih terdapat 21 indikator berskor 1 (Operasional ketersediaan layanan Tenaga Kesehatan di desa; Keberadaan ruang publik terbuka/keadaan sebagian besar Fasilitas Ruang Publik Terbuka di Desa) yang perlu diintervensi.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ],
    "namaKepalaDesa": "H. SAHBANDI",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "-8.6773787,116.1138445,650m",
    "alamatDesa": "Jln. Tgh. Arief Mesanggok",
    "emailDesa": "desamesanggok01@gmail.com",
    "webDesa": "desamesanggok01@gmail.com",
    "masaJabatanKades": "7 Tahun 7 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 100.8
  },
  {
    "id": "desa-taman-ayu-gerung",
    "nama": "Taman Ayu",
    "tipe": "Desa",
    "kecamatan": "Gerung",
    "kodeWilayah": "5201012013",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.8126,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 81.0,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 516,
    "indeksKomposit": 19.0,
    "indikator": {
      "infrastruktur": 4.0,
      "pertanianPangan": 24.4,
      "pendidikanSDM": 12.0,
      "kesehatanStunting": 8.9,
      "ekonomiUMKM": 24.4,
      "lingkunganSampah": 22.2
    },
    "dimensi": {
      "layananDasar": {
        "skor": 147,
        "persen": 86.5,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 44,
            "maks": 45,
            "persen": 97.8
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 82,
            "maks": 100,
            "persen": 82.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 21,
            "maks": 25,
            "persen": 84.0
          }
        ],
        "sub": {
          "pendidikan": 44,
          "kesehatan": 82,
          "utilitas": 21
        }
      },
      "sosial": {
        "skor": 64,
        "persen": 75.3,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 58,
            "maks": 65,
            "persen": 89.2
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 6,
            "maks": 20,
            "persen": 30.0
          }
        ]
      },
      "ekonomi": {
        "skor": 121,
        "persen": 75.6,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 36,
            "maks": 40,
            "persen": 90.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 85,
            "maks": 120,
            "persen": 70.8
          }
        ]
      },
      "lingkungan": {
        "skor": 70,
        "persen": 77.8,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 45,
            "maks": 65,
            "persen": 69.2
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 48,
        "persen": 96.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 19,
            "maks": 20,
            "persen": 95.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 66,
        "persen": 82.5,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 34,
            "maks": 35,
            "persen": 97.1
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 32,
            "maks": 45,
            "persen": 71.1
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Sosial (75.3%)",
      "Ekonomi (75.6%)"
    ],
    "targetDimensi": [
      "Sosial",
      "Ekonomi"
    ],
    "catatanMusrenbang": "Seluruh 6 dimensi ≥70%, namun masih terdapat 22 indikator berskor 1 (Ketersediaan layanan dokter di desa; Operasional ketersediaan layanan dokter di desa) yang perlu diintervensi.",
    "rekomendasiKategori": [
      "Keagamaan, Sosial & Budaya",
      "Pertanian, Peternakan & Pangan"
    ],
    "namaKepalaDesa": "M. TAJUDIN, S. SosI",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8.65696427S 116.08647383E",
    "alamatDesa": "JL. Raya PLTU Jeranjang",
    "emailDesa": "desatamanayu@yahoo.com",
    "webDesa": "",
    "masaJabatanKades": "8 Tahun",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 100.43
  },
  {
    "id": "desa-giri-tembesi-gerung",
    "nama": "Giri Tembesi",
    "tipe": "Desa",
    "kecamatan": "Gerung",
    "kodeWilayah": "5201012014",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7575,
    "statusKemendesa": "MAJU",
    "skorBappenas": 76.25,
    "statusBappenas": "MAJU",
    "nilaiTotal": 481,
    "indeksKomposit": 23.8,
    "indikator": {
      "infrastruktur": 6.0,
      "pertanianPangan": 26.2,
      "pendidikanSDM": 14.0,
      "kesehatanStunting": 17.8,
      "ekonomiUMKM": 26.2,
      "lingkunganSampah": 26.7
    },
    "dimensi": {
      "layananDasar": {
        "skor": 140,
        "persen": 82.4,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 43,
            "maks": 45,
            "persen": 95.6
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 74,
            "maks": 100,
            "persen": 74.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ],
        "sub": {
          "pendidikan": 43,
          "kesehatan": 74,
          "utilitas": 23
        }
      },
      "sosial": {
        "skor": 52,
        "persen": 61.2,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 45,
            "maks": 65,
            "persen": 69.2
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 7,
            "maks": 20,
            "persen": 35.0
          }
        ]
      },
      "ekonomi": {
        "skor": 118,
        "persen": 73.8,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 32,
            "maks": 40,
            "persen": 80.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 86,
            "maks": 120,
            "persen": 71.7
          }
        ]
      },
      "lingkungan": {
        "skor": 66,
        "persen": 73.3,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 49,
            "maks": 65,
            "persen": 75.4
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 17,
            "maks": 25,
            "persen": 68.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 47,
        "persen": 94.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 18,
            "maks": 20,
            "persen": 90.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 58,
        "persen": 72.5,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 31,
            "maks": 35,
            "persen": 88.6
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 27,
            "maks": 45,
            "persen": 60.0
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Sosial (61.2%)",
      "Tata Kelola (72.5%)"
    ],
    "targetDimensi": [
      "Sosial",
      "Tata Kelola"
    ],
    "catatanMusrenbang": "Terdapat 31 indikator defisit (Skor 1) dengan sektor kritis: Sosial (61.2%). Prioritas lapangan: Ketersediaan layanan dokter di desa; Operasional ketersediaan layanan dokter di desa.",
    "rekomendasiKategori": [
      "Keagamaan, Sosial & Budaya",
      "Pemerintahan Desa & Digitalisasi"
    ],
    "namaKepalaDesa": "NAHARUDIN",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8,69505 S,116,12194 E",
    "alamatDesa": "JALAN GIRI TEMBESI,DESA GIRI TEMBESI",
    "emailDesa": "tembesigiri@gmail.com",
    "webDesa": "",
    "masaJabatanKades": "5 tahun 7 bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 94.54
  },
  {
    "id": "desa-kediri-kediri",
    "nama": "Kediri",
    "tipe": "Desa",
    "kecamatan": "Kediri",
    "kodeWilayah": "5201022001",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.8583,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 86.65,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 545,
    "indeksKomposit": 13.3,
    "indikator": {
      "infrastruktur": 2.0,
      "pertanianPangan": 16.2,
      "pendidikanSDM": 12.0,
      "kesehatanStunting": -1.1,
      "ekonomiUMKM": 16.2,
      "lingkunganSampah": 31.1
    },
    "dimensi": {
      "layananDasar": {
        "skor": 160,
        "persen": 94.1,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 44,
            "maks": 45,
            "persen": 97.8
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 91,
            "maks": 100,
            "persen": 91.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ],
        "sub": {
          "pendidikan": 44,
          "kesehatan": 91,
          "utilitas": 25
        }
      },
      "sosial": {
        "skor": 69,
        "persen": 81.2,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 55,
            "maks": 65,
            "persen": 84.6
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 14,
            "maks": 20,
            "persen": 70.0
          }
        ]
      },
      "ekonomi": {
        "skor": 134,
        "persen": 83.8,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 32,
            "maks": 40,
            "persen": 80.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 102,
            "maks": 120,
            "persen": 85.0
          }
        ]
      },
      "lingkungan": {
        "skor": 62,
        "persen": 68.9,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 53,
            "maks": 65,
            "persen": 81.5
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 9,
            "maks": 25,
            "persen": 36.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 71,
        "persen": 88.8,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 35,
            "maks": 35,
            "persen": 100.0
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 36,
            "maks": 45,
            "persen": 80.0
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (68.9%)",
      "Sosial (81.2%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Sosial"
    ],
    "catatanMusrenbang": "Terdapat 17 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (68.9%). Prioritas lapangan: Keberadaan Satuan Keamanan Lingkungan (Satkamling) di Desa; Aktivitas Satuan Keamanan Lingkungan (Satkamling) di Desa.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Keagamaan, Sosial & Budaya"
    ],
    "namaKepalaDesa": "Fadholy Ibrahim",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "Lat -8.645923  Long 116.128412",
    "alamatDesa": "JALAN KALI BABAK DESA KEDIRI KECAMATAN KEDIRI",
    "emailDesa": "",
    "webDesa": "kediri-lombokbarat.desa.id",
    "masaJabatanKades": "45762",
    "periodeKades": "Periode ke-3",
    "skorBappenasId": 107.43
  },
  {
    "id": "desa-montong-are-kediri",
    "nama": "Montong Are",
    "tipe": "Desa",
    "kecamatan": "Kediri",
    "kodeWilayah": "5201022002",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.8047,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 80.12,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 511,
    "indeksKomposit": 19.9,
    "indikator": {
      "infrastruktur": 2.0,
      "pertanianPangan": 33.1,
      "pendidikanSDM": 10.0,
      "kesehatanStunting": -1.1,
      "ekonomiUMKM": 33.1,
      "lingkunganSampah": 35.6
    },
    "dimensi": {
      "layananDasar": {
        "skor": 157,
        "persen": 92.4,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 45,
            "maks": 45,
            "persen": 100.0
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 91,
            "maks": 100,
            "persen": 91.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 21,
            "maks": 25,
            "persen": 84.0
          }
        ],
        "sub": {
          "pendidikan": 45,
          "kesehatan": 91,
          "utilitas": 21
        }
      },
      "sosial": {
        "skor": 78,
        "persen": 91.8,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 63,
            "maks": 65,
            "persen": 96.9
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 15,
            "maks": 20,
            "persen": 75.0
          }
        ]
      },
      "ekonomi": {
        "skor": 107,
        "persen": 66.9,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 24,
            "maks": 40,
            "persen": 60.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 83,
            "maks": 120,
            "persen": 69.2
          }
        ]
      },
      "lingkungan": {
        "skor": 58,
        "persen": 64.4,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 45,
            "maks": 65,
            "persen": 69.2
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 13,
            "maks": 25,
            "persen": 52.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 62,
        "persen": 77.5,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 35,
            "maks": 35,
            "persen": 100.0
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 27,
            "maks": 45,
            "persen": 60.0
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (64.4%)",
      "Ekonomi (66.9%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Ekonomi"
    ],
    "catatanMusrenbang": "Terdapat 24 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (64.4%), Ekonomi (66.9%). Prioritas lapangan: Operasional ketersediaan layanan dokter di desa; Operasional ketersediaan layanan Bidan di desa.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Pertanian, Peternakan & Pangan"
    ],
    "namaKepalaDesa": "MUJTAHID, SH",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8.638487-116.08256",
    "alamatDesa": "JLN. TGH.MUSTAFA AL-KHOLIDI",
    "emailDesa": "montongareare@gmai.com",
    "webDesa": "montongare.desa.id",
    "masaJabatanKades": "20 TAHUNN",
    "periodeKades": "Periode ke-3",
    "skorBappenasId": 99.32
  },
  {
    "id": "desa-jagaraga-indah-kediri",
    "nama": "Jagaraga Indah",
    "tipe": "Desa",
    "kecamatan": "Kediri",
    "kodeWilayah": "5201022003",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7575,
    "statusKemendesa": "MAJU",
    "skorBappenas": 76.63,
    "statusBappenas": "MAJU",
    "nilaiTotal": 481,
    "indeksKomposit": 23.4,
    "indikator": {
      "infrastruktur": 0.0,
      "pertanianPangan": 25.0,
      "pendidikanSDM": 20.0,
      "kesehatanStunting": 11.1,
      "ekonomiUMKM": 25.0,
      "lingkunganSampah": 35.6
    },
    "dimensi": {
      "layananDasar": {
        "skor": 143,
        "persen": 84.1,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 40,
            "maks": 45,
            "persen": 88.9
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 80,
            "maks": 100,
            "persen": 80.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ],
        "sub": {
          "pendidikan": 40,
          "kesehatan": 80,
          "utilitas": 23
        }
      },
      "sosial": {
        "skor": 59,
        "persen": 69.4,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 52,
            "maks": 65,
            "persen": 80.0
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 7,
            "maks": 20,
            "persen": 35.0
          }
        ]
      },
      "ekonomi": {
        "skor": 120,
        "persen": 75.0,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 26,
            "maks": 40,
            "persen": 65.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 94,
            "maks": 120,
            "persen": 78.3
          }
        ]
      },
      "lingkungan": {
        "skor": 58,
        "persen": 64.4,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 49,
            "maks": 65,
            "persen": 75.4
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 9,
            "maks": 25,
            "persen": 36.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 50,
        "persen": 100.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 30,
            "maks": 30,
            "persen": 100.0
          }
        ]
      },
      "tataKelola": {
        "skor": 51,
        "persen": 63.7,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 32,
            "maks": 35,
            "persen": 91.4
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 19,
            "maks": 45,
            "persen": 42.2
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Tata Kelola (63.7%)",
      "Lingkungan (64.4%)"
    ],
    "targetDimensi": [
      "Tata Kelola",
      "Lingkungan"
    ],
    "catatanMusrenbang": "Terdapat 28 indikator defisit (Skor 1) dengan sektor kritis: Tata Kelola (63.7%), Lingkungan (64.4%), Sosial (69.4%). Prioritas lapangan: Ketersediaan layanan dokter di desa; Operasional ketersediaan layanan dokter di desa.",
    "rekomendasiKategori": [
      "Pemerintahan Desa & Digitalisasi",
      "Sampah, Lingkungan & Kebencanaan"
    ],
    "namaKepalaDesa": "AHMAD KARIAWAN",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "Lat -8.651471  Long 116.156906",
    "alamatDesa": "JLN TGH ABDUL HAFIZ DESA JAGARAGA INDAH",
    "emailDesa": "desajagaragaindah@gmail.com",
    "webDesa": "",
    "masaJabatanKades": "5 Tahun 3 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 95.0
  },
  {
    "id": "desa-gelogor-kediri",
    "nama": "Gelogor",
    "tipe": "Desa",
    "kecamatan": "Kediri",
    "kodeWilayah": "5201022004",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.874,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 87.25,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 555,
    "indeksKomposit": 12.8,
    "indikator": {
      "infrastruktur": 4.0,
      "pertanianPangan": 10.6,
      "pendidikanSDM": 16.0,
      "kesehatanStunting": 8.9,
      "ekonomiUMKM": 10.6,
      "lingkunganSampah": 25.6
    },
    "dimensi": {
      "layananDasar": {
        "skor": 147,
        "persen": 86.5,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 42,
            "maks": 45,
            "persen": 93.3
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 82,
            "maks": 100,
            "persen": 82.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ],
        "sub": {
          "pendidikan": 42,
          "kesehatan": 82,
          "utilitas": 23
        }
      },
      "sosial": {
        "skor": 78,
        "persen": 91.8,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 61,
            "maks": 65,
            "persen": 93.8
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 17,
            "maks": 20,
            "persen": 85.0
          }
        ]
      },
      "ekonomi": {
        "skor": 143,
        "persen": 89.4,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 40,
            "maks": 40,
            "persen": 100.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 103,
            "maks": 120,
            "persen": 85.8
          }
        ]
      },
      "lingkungan": {
        "skor": 67,
        "persen": 74.4,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 45,
            "maks": 65,
            "persen": 69.2
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 22,
            "maks": 25,
            "persen": 88.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 48,
        "persen": 96.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 19,
            "maks": 20,
            "persen": 95.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 72,
        "persen": 90.0,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 35,
            "maks": 35,
            "persen": 100.0
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 37,
            "maks": 45,
            "persen": 82.2
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (74.4%)",
      "Layanan Dasar (86.5%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Layanan Dasar"
    ],
    "catatanMusrenbang": "Seluruh 6 dimensi ≥70%, namun masih terdapat 11 indikator berskor 1 (Operasional ketersediaan layanan dokter di desa; Operasional ketersediaan layanan Bidan di desa) yang perlu diintervensi.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Pendidikan & Sekolah"
    ],
    "namaKepalaDesa": "ACHMAD ARMAN ISWARA, SH",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8.649004 116.134512",
    "alamatDesa": "JALAN TGH ABDUL KARIM RT. 06 DUSUN GELOGOR SELATAN DESA GELOGOR",
    "emailDesa": "Desagelogor749@gmail.com",
    "webDesa": "www.gelogor.desa.id",
    "masaJabatanKades": "5 tahun 6 bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 108.18
  },
  {
    "id": "desa-rumak-kediri",
    "nama": "Rumak",
    "tipe": "Desa",
    "kecamatan": "Kediri",
    "kodeWilayah": "5201022005",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.874,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 88.61,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 555,
    "indeksKomposit": 11.4,
    "indikator": {
      "infrastruktur": 4.0,
      "pertanianPangan": 11.9,
      "pendidikanSDM": 12.0,
      "kesehatanStunting": -5.6,
      "ekonomiUMKM": 11.9,
      "lingkunganSampah": 36.7
    },
    "dimensi": {
      "layananDasar": {
        "skor": 162,
        "persen": 95.3,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 44,
            "maks": 45,
            "persen": 97.8
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 95,
            "maks": 100,
            "persen": 95.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ],
        "sub": {
          "pendidikan": 44,
          "kesehatan": 95,
          "utilitas": 23
        }
      },
      "sosial": {
        "skor": 73,
        "persen": 85.9,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 56,
            "maks": 65,
            "persen": 86.2
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 17,
            "maks": 20,
            "persen": 85.0
          }
        ]
      },
      "ekonomi": {
        "skor": 141,
        "persen": 88.1,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 32,
            "maks": 40,
            "persen": 80.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 109,
            "maks": 120,
            "persen": 90.8
          }
        ]
      },
      "lingkungan": {
        "skor": 57,
        "persen": 63.3,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 45,
            "maks": 65,
            "persen": 69.2
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 12,
            "maks": 25,
            "persen": 48.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 48,
        "persen": 96.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 19,
            "maks": 20,
            "persen": 95.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 74,
        "persen": 92.5,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 32,
            "maks": 35,
            "persen": 91.4
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 42,
            "maks": 45,
            "persen": 93.3
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (63.3%)",
      "Sosial (85.9%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Sosial"
    ],
    "catatanMusrenbang": "Terdapat 13 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (63.3%). Prioritas lapangan: Aktivitas Satuan Keamanan Lingkungan (Satkamling) di Desa; Kerjasama desa dengan desa lainnya.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Keagamaan, Sosial & Budaya"
    ],
    "namaKepalaDesa": "Mukarram",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8'38'44,97 S 116'7'42,27 E",
    "alamatDesa": "Jln. TGH. Abd. Karim Desa Rumak Kecamatan Kediri Kabupaten Lombok Barat NTB",
    "emailDesa": "",
    "webDesa": "desa",
    "masaJabatanKades": "7 Tahun 5 bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 109.85
  },
  {
    "id": "desa-banyumulek-kediri",
    "nama": "Banyumulek",
    "tipe": "Desa",
    "kecamatan": "Kediri",
    "kodeWilayah": "5201022006",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.7984,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 81.21,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 507,
    "indeksKomposit": 18.8,
    "indikator": {
      "infrastruktur": 2.0,
      "pertanianPangan": 23.1,
      "pendidikanSDM": 14.0,
      "kesehatanStunting": -2.2,
      "ekonomiUMKM": 23.1,
      "lingkunganSampah": 47.8
    },
    "dimensi": {
      "layananDasar": {
        "skor": 158,
        "persen": 92.9,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 43,
            "maks": 45,
            "persen": 95.6
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 92,
            "maks": 100,
            "persen": 92.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ],
        "sub": {
          "pendidikan": 43,
          "kesehatan": 92,
          "utilitas": 23
        }
      },
      "sosial": {
        "skor": 63,
        "persen": 74.1,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 55,
            "maks": 65,
            "persen": 84.6
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 8,
            "maks": 20,
            "persen": 40.0
          }
        ]
      },
      "ekonomi": {
        "skor": 123,
        "persen": 76.9,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 30,
            "maks": 40,
            "persen": 75.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 93,
            "maks": 120,
            "persen": 77.5
          }
        ]
      },
      "lingkungan": {
        "skor": 47,
        "persen": 52.2,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 38,
            "maks": 65,
            "persen": 58.5
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 9,
            "maks": 25,
            "persen": 36.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 67,
        "persen": 83.8,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 32,
            "maks": 35,
            "persen": 91.4
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 35,
            "maks": 45,
            "persen": 77.8
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (52.2%)",
      "Sosial (74.1%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Sosial"
    ],
    "catatanMusrenbang": "Terdapat 21 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (52.2%). Prioritas lapangan: Keberadaan Taman Bacaan Masyarakat/ Perpustakaan Desa; Operasional Taman Bacaan Masyarakat/ Perpustakaan Desa.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Keagamaan, Sosial & Budaya"
    ],
    "namaKepalaDesa": "H.JAMILUDIN,S.IP",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8.648836-long 116.114394",
    "alamatDesa": "JLN WISATA DESA BANYUMULEK",
    "emailDesa": "banyumulek111@gmail.com",
    "webDesa": "3",
    "masaJabatanKades": "6 Tahun 3 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 100.69
  },
  {
    "id": "desa-ombe-baru-kediri",
    "nama": "Ombe Baru",
    "tipe": "Desa",
    "kecamatan": "Kediri",
    "kodeWilayah": "5201022007",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7858,
    "statusKemendesa": "MAJU",
    "skorBappenas": 77.38,
    "statusBappenas": "MAJU",
    "nilaiTotal": 499,
    "indeksKomposit": 22.6,
    "indikator": {
      "infrastruktur": 8.0,
      "pertanianPangan": 33.8,
      "pendidikanSDM": 24.0,
      "kesehatanStunting": 7.8,
      "ekonomiUMKM": 33.8,
      "lingkunganSampah": 37.8
    },
    "dimensi": {
      "layananDasar": {
        "skor": 144,
        "persen": 84.7,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 38,
            "maks": 45,
            "persen": 84.4
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 83,
            "maks": 100,
            "persen": 83.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ],
        "sub": {
          "pendidikan": 38,
          "kesehatan": 83,
          "utilitas": 23
        }
      },
      "sosial": {
        "skor": 75,
        "persen": 88.2,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 60,
            "maks": 65,
            "persen": 92.3
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 15,
            "maks": 20,
            "persen": 75.0
          }
        ]
      },
      "ekonomi": {
        "skor": 106,
        "persen": 66.2,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 24,
            "maks": 40,
            "persen": 60.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 82,
            "maks": 120,
            "persen": 68.3
          }
        ]
      },
      "lingkungan": {
        "skor": 56,
        "persen": 62.2,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 41,
            "maks": 65,
            "persen": 63.1
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 15,
            "maks": 25,
            "persen": 60.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 46,
        "persen": 92.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 17,
            "maks": 20,
            "persen": 85.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 72,
        "persen": 90.0,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 35,
            "maks": 35,
            "persen": 100.0
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 37,
            "maks": 45,
            "persen": 82.2
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (62.2%)",
      "Ekonomi (66.2%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Ekonomi"
    ],
    "catatanMusrenbang": "Terdapat 23 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (62.2%), Ekonomi (66.2%). Prioritas lapangan: Operasional ketersediaan layanan dokter di desa; Operasional ketersediaan layanan Bidan di desa.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Pertanian, Peternakan & Pangan"
    ],
    "namaKepalaDesa": "Muslihuddin,S.Sos",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8,6521S116,138223E",
    "alamatDesa": "Jln. Taruna Ombe Baru",
    "emailDesa": "barudesaombe@gmail.com",
    "webDesa": "www.ombe baru.com",
    "masaJabatanKades": "8 tahun",
    "periodeKades": "Periode ke-3",
    "skorBappenasId": 95.93
  },
  {
    "id": "desa-dasan-baru-kediri",
    "nama": "Dasan Baru",
    "tipe": "Desa",
    "kecamatan": "Kediri",
    "kodeWilayah": "5201022008",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.8063,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 80.51,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 512,
    "indeksKomposit": 19.5,
    "indikator": {
      "infrastruktur": 2.0,
      "pertanianPangan": 25.6,
      "pendidikanSDM": 12.0,
      "kesehatanStunting": 10.0,
      "ekonomiUMKM": 25.6,
      "lingkunganSampah": 42.2
    },
    "dimensi": {
      "layananDasar": {
        "skor": 150,
        "persen": 88.2,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 44,
            "maks": 45,
            "persen": 97.8
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 81,
            "maks": 100,
            "persen": 81.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ],
        "sub": {
          "pendidikan": 44,
          "kesehatan": 81,
          "utilitas": 25
        }
      },
      "sosial": {
        "skor": 70,
        "persen": 82.4,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 56,
            "maks": 65,
            "persen": 86.2
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 14,
            "maks": 20,
            "persen": 70.0
          }
        ]
      },
      "ekonomi": {
        "skor": 119,
        "persen": 74.4,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 20,
            "maks": 40,
            "persen": 50.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 99,
            "maks": 120,
            "persen": 82.5
          }
        ]
      },
      "lingkungan": {
        "skor": 52,
        "persen": 57.8,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 41,
            "maks": 65,
            "persen": 63.1
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 11,
            "maks": 25,
            "persen": 44.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 72,
        "persen": 90.0,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 32,
            "maks": 35,
            "persen": 91.4
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 40,
            "maks": 45,
            "persen": 88.9
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (57.8%)",
      "Ekonomi (74.4%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Ekonomi"
    ],
    "catatanMusrenbang": "Terdapat 25 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (57.8%). Prioritas lapangan: Ketersediaan layanan dokter di desa; Operasional ketersediaan layanan dokter di desa.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Pertanian, Peternakan & Pangan"
    ],
    "namaKepalaDesa": "Ada",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8.6591677s116.1175987E",
    "alamatDesa": "JLN RAYA DASAN BARU",
    "emailDesa": "dasanbaru75@gmail.com",
    "webDesa": "",
    "masaJabatanKades": "5 Tahun 3 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 99.81
  },
  {
    "id": "desa-kediri-selatan-kediri",
    "nama": "Kediri Selatan",
    "tipe": "Desa",
    "kecamatan": "Kediri",
    "kodeWilayah": "5201022009",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.8063,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 80.78,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 512,
    "indeksKomposit": 19.2,
    "indikator": {
      "infrastruktur": 2.0,
      "pertanianPangan": 28.8,
      "pendidikanSDM": 12.0,
      "kesehatanStunting": 4.4,
      "ekonomiUMKM": 28.8,
      "lingkunganSampah": 25.6
    },
    "dimensi": {
      "layananDasar": {
        "skor": 155,
        "persen": 91.2,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 44,
            "maks": 45,
            "persen": 97.8
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 86,
            "maks": 100,
            "persen": 86.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ],
        "sub": {
          "pendidikan": 44,
          "kesehatan": 86,
          "utilitas": 25
        }
      },
      "sosial": {
        "skor": 72,
        "persen": 84.7,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 61,
            "maks": 65,
            "persen": 93.8
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 11,
            "maks": 20,
            "persen": 55.0
          }
        ]
      },
      "ekonomi": {
        "skor": 114,
        "persen": 71.2,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 32,
            "maks": 40,
            "persen": 80.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 82,
            "maks": 120,
            "persen": 68.3
          }
        ]
      },
      "lingkungan": {
        "skor": 67,
        "persen": 74.4,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 45,
            "maks": 65,
            "persen": 69.2
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 22,
            "maks": 25,
            "persen": 88.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 55,
        "persen": 68.8,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 31,
            "maks": 35,
            "persen": 88.6
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 24,
            "maks": 45,
            "persen": 53.3
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Tata Kelola (68.8%)",
      "Ekonomi (71.2%)"
    ],
    "targetDimensi": [
      "Tata Kelola",
      "Ekonomi"
    ],
    "catatanMusrenbang": "Terdapat 21 indikator defisit (Skor 1) dengan sektor kritis: Tata Kelola (68.8%). Prioritas lapangan: Operasional ketersediaan layanan Tenaga Kesehatan di desa; Keberadaan kegiatan sosialisasi dan/atau advokasi terkait program jaminan kesehatan nasional di desa.",
    "rekomendasiKategori": [
      "Pemerintahan Desa & Digitalisasi",
      "Pertanian, Peternakan & Pangan"
    ],
    "namaKepalaDesa": "Edi Erwinsyah, S.H",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "Lat -8.3825  Long 116.85477",
    "alamatDesa": "Jl. Taruna Kediri - Ombe Baru, Kecamatan Kediri Kabupaten Lombok Barat",
    "emailDesa": "kediriselatanindah.09@gmail.com",
    "webDesa": "",
    "masaJabatanKades": "6 Tahun 7 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 100.14
  },
  {
    "id": "desa-lelede-kediri",
    "nama": "Lelede",
    "tipe": "Desa",
    "kecamatan": "Kediri",
    "kodeWilayah": "5201022010",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7953,
    "statusKemendesa": "MAJU",
    "skorBappenas": 79.35,
    "statusBappenas": "MAJU",
    "nilaiTotal": 505,
    "indeksKomposit": 20.7,
    "indikator": {
      "infrastruktur": 6.0,
      "pertanianPangan": 23.8,
      "pendidikanSDM": 14.0,
      "kesehatanStunting": 16.7,
      "ekonomiUMKM": 23.8,
      "lingkunganSampah": 24.4
    },
    "dimensi": {
      "layananDasar": {
        "skor": 141,
        "persen": 82.9,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 43,
            "maks": 45,
            "persen": 95.6
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 75,
            "maks": 100,
            "persen": 75.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ],
        "sub": {
          "pendidikan": 43,
          "kesehatan": 75,
          "utilitas": 23
        }
      },
      "sosial": {
        "skor": 69,
        "persen": 81.2,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 57,
            "maks": 65,
            "persen": 87.7
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 12,
            "maks": 20,
            "persen": 60.0
          }
        ]
      },
      "ekonomi": {
        "skor": 122,
        "persen": 76.2,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 32,
            "maks": 40,
            "persen": 80.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 90,
            "maks": 120,
            "persen": 75.0
          }
        ]
      },
      "lingkungan": {
        "skor": 68,
        "persen": 75.6,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 57,
            "maks": 65,
            "persen": 87.7
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 11,
            "maks": 25,
            "persen": 44.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 47,
        "persen": 94.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 17,
            "maks": 20,
            "persen": 85.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 30,
            "maks": 30,
            "persen": 100.0
          }
        ]
      },
      "tataKelola": {
        "skor": 58,
        "persen": 72.5,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 31,
            "maks": 35,
            "persen": 88.6
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 27,
            "maks": 45,
            "persen": 60.0
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Tata Kelola (72.5%)",
      "Lingkungan (75.6%)"
    ],
    "targetDimensi": [
      "Tata Kelola",
      "Lingkungan"
    ],
    "catatanMusrenbang": "Seluruh 6 dimensi ≥70%, namun masih terdapat 25 indikator berskor 1 (Operasional ketersediaan layanan dokter di desa; Operasional ketersediaan layanan Bidan di desa) yang perlu diintervensi.",
    "rekomendasiKategori": [
      "Pemerintahan Desa & Digitalisasi",
      "Sampah, Lingkungan & Kebencanaan"
    ],
    "namaKepalaDesa": "Zubaidi Jumadil., SH.",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8.38079472S 116.64763196E",
    "alamatDesa": "Dsn Selaparang, Desa Lelede, Kec. Kediri, Kabupaten Lombok Barat, Nusa Tenggara Barat",
    "emailDesa": "kantordesalelede@gmail.com",
    "webDesa": "desalelede.co.id",
    "masaJabatanKades": "8 Tahun 0 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 98.37
  },
  {
    "id": "desa-lembuak-narmada",
    "nama": "Lembuak",
    "tipe": "Desa",
    "kecamatan": "Narmada",
    "kodeWilayah": "5201032001",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.8646,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 87.97,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 549,
    "indeksKomposit": 12.0,
    "indikator": {
      "infrastruktur": 2.0,
      "pertanianPangan": 12.5,
      "pendidikanSDM": 20.0,
      "kesehatanStunting": -8.9,
      "ekonomiUMKM": 12.5,
      "lingkunganSampah": 33.3
    },
    "dimensi": {
      "layananDasar": {
        "skor": 163,
        "persen": 95.9,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 40,
            "maks": 45,
            "persen": 88.9
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 98,
            "maks": 100,
            "persen": 98.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ],
        "sub": {
          "pendidikan": 40,
          "kesehatan": 98,
          "utilitas": 25
        }
      },
      "sosial": {
        "skor": 67,
        "persen": 78.8,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 61,
            "maks": 65,
            "persen": 93.8
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 6,
            "maks": 20,
            "persen": 30.0
          }
        ]
      },
      "ekonomi": {
        "skor": 140,
        "persen": 87.5,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 36,
            "maks": 40,
            "persen": 90.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 104,
            "maks": 120,
            "persen": 86.7
          }
        ]
      },
      "lingkungan": {
        "skor": 60,
        "persen": 66.7,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 45,
            "maks": 65,
            "persen": 69.2
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 15,
            "maks": 25,
            "persen": 60.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 70,
        "persen": 87.5,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 35,
            "maks": 35,
            "persen": 100.0
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 35,
            "maks": 45,
            "persen": 77.8
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (66.7%)",
      "Sosial (78.8%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Sosial"
    ],
    "catatanMusrenbang": "Terdapat 16 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (66.7%). Prioritas lapangan: Keberadaan Taman Bacaan Masyarakat/ Perpustakaan Desa; Operasional Taman Bacaan Masyarakat/ Perpustakaan Desa.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Keagamaan, Sosial & Budaya"
    ],
    "namaKepalaDesa": "SYAMSIR KADARISMAN",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8.598901S 116.185552E",
    "alamatDesa": "Jl. Suranadi No. 48 Narmada Lombok Barat",
    "emailDesa": "desalembuak@gmail.com",
    "webDesa": "lembuak.desa.id",
    "masaJabatanKades": "4 Tahun 4 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 109.06
  },
  {
    "id": "desa-nyur-lembang-narmada",
    "nama": "Nyur Lembang",
    "tipe": "Desa",
    "kecamatan": "Narmada",
    "kodeWilayah": "5201032002",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.8094,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 82.28,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 514,
    "indeksKomposit": 17.7,
    "indikator": {
      "infrastruktur": 4.0,
      "pertanianPangan": 13.8,
      "pendidikanSDM": 18.0,
      "kesehatanStunting": 8.9,
      "ekonomiUMKM": 13.8,
      "lingkunganSampah": 40.0
    },
    "dimensi": {
      "layananDasar": {
        "skor": 146,
        "persen": 85.9,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 41,
            "maks": 45,
            "persen": 91.1
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 82,
            "maks": 100,
            "persen": 82.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ],
        "sub": {
          "pendidikan": 41,
          "kesehatan": 82,
          "utilitas": 23
        }
      },
      "sosial": {
        "skor": 74,
        "persen": 87.1,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 59,
            "maks": 65,
            "persen": 90.8
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 15,
            "maks": 20,
            "persen": 75.0
          }
        ]
      },
      "ekonomi": {
        "skor": 138,
        "persen": 86.2,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 32,
            "maks": 40,
            "persen": 80.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 106,
            "maks": 120,
            "persen": 88.3
          }
        ]
      },
      "lingkungan": {
        "skor": 54,
        "persen": 60.0,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 37,
            "maks": 65,
            "persen": 56.9
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 17,
            "maks": 25,
            "persen": 68.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 48,
        "persen": 96.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 19,
            "maks": 20,
            "persen": 95.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 54,
        "persen": 67.5,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 32,
            "maks": 35,
            "persen": 91.4
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 22,
            "maks": 45,
            "persen": 48.9
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (60.0%)",
      "Tata Kelola (67.5%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Tata Kelola"
    ],
    "catatanMusrenbang": "Terdapat 21 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (60.0%), Tata Kelola (67.5%). Prioritas lapangan: Keberadaan Penyedia Transportasi penunjang menuju layanan Dokter; Operasional ketersediaan layanan Bidan di desa.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Pemerintahan Desa & Digitalisasi"
    ],
    "namaKepalaDesa": "LUKMAN NUL HAKIM",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8.590087S 116.190305E",
    "alamatDesa": "Jln. Kirab Remaja, Nyurlembang, Narmada Kabupaten Lombok Barat Nusa Tenggara Barat. 83371",
    "emailDesa": "desanyurlembang@gmail.com",
    "webDesa": "http://www.desanyurlembang.co.id",
    "masaJabatanKades": "1 tahun 11 bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 102.0
  },
  {
    "id": "desa-peresak-narmada",
    "nama": "Peresak",
    "tipe": "Desa",
    "kecamatan": "Narmada",
    "kodeWilayah": "5201032003",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.7969,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 80.92,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 506,
    "indeksKomposit": 19.1,
    "indikator": {
      "infrastruktur": 2.0,
      "pertanianPangan": 25.0,
      "pendidikanSDM": 22.0,
      "kesehatanStunting": -6.7,
      "ekonomiUMKM": 25.0,
      "lingkunganSampah": 28.9
    },
    "dimensi": {
      "layananDasar": {
        "skor": 158,
        "persen": 92.9,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 39,
            "maks": 45,
            "persen": 86.7
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 96,
            "maks": 100,
            "persen": 96.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ],
        "sub": {
          "pendidikan": 39,
          "kesehatan": 96,
          "utilitas": 23
        }
      },
      "sosial": {
        "skor": 47,
        "persen": 55.3,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 38,
            "maks": 65,
            "persen": 58.5
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 9,
            "maks": 20,
            "persen": 45.0
          }
        ]
      },
      "ekonomi": {
        "skor": 120,
        "persen": 75.0,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 40,
            "maks": 40,
            "persen": 100.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 80,
            "maks": 120,
            "persen": 66.7
          }
        ]
      },
      "lingkungan": {
        "skor": 64,
        "persen": 71.1,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 43,
            "maks": 65,
            "persen": 66.2
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 21,
            "maks": 25,
            "persen": 84.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 68,
        "persen": 85.0,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 33,
            "maks": 35,
            "persen": 94.3
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 35,
            "maks": 45,
            "persen": 77.8
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Sosial (55.3%)",
      "Lingkungan (71.1%)"
    ],
    "targetDimensi": [
      "Sosial",
      "Lingkungan"
    ],
    "catatanMusrenbang": "Terdapat 24 indikator defisit (Skor 1) dengan sektor kritis: Sosial (55.3%). Prioritas lapangan: Operasional ketersediaan layanan Tenaga Kesehatan di desa; Penyelesaian Konflik secara damai.",
    "rekomendasiKategori": [
      "Keagamaan, Sosial & Budaya",
      "Sampah, Lingkungan & Kebencanaan"
    ],
    "namaKepalaDesa": "BAHRI, S. IP",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8.594503 116.213913",
    "alamatDesa": "Jln. Ahmad yani No. 99X Kode Pos 83371",
    "emailDesa": "desaperesak@gmail.com",
    "webDesa": "peresak-narmada.desa.id",
    "masaJabatanKades": "5 Tahun 2 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 100.32
  },
  {
    "id": "desa-keru-narmada",
    "nama": "Keru",
    "tipe": "Desa",
    "kecamatan": "Narmada",
    "kodeWilayah": "5201032004",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.811,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 82.79,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 515,
    "indeksKomposit": 17.2,
    "indikator": {
      "infrastruktur": 4.0,
      "pertanianPangan": 17.5,
      "pendidikanSDM": 22.0,
      "kesehatanStunting": -4.4,
      "ekonomiUMKM": 17.5,
      "lingkunganSampah": 37.8
    },
    "dimensi": {
      "layananDasar": {
        "skor": 156,
        "persen": 91.8,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 39,
            "maks": 45,
            "persen": 86.7
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 94,
            "maks": 100,
            "persen": 94.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ],
        "sub": {
          "pendidikan": 39,
          "kesehatan": 94,
          "utilitas": 23
        }
      },
      "sosial": {
        "skor": 51,
        "persen": 60.0,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 38,
            "maks": 65,
            "persen": 58.5
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 13,
            "maks": 20,
            "persen": 65.0
          }
        ]
      },
      "ekonomi": {
        "skor": 132,
        "persen": 82.5,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 38,
            "maks": 40,
            "persen": 95.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 94,
            "maks": 120,
            "persen": 78.3
          }
        ]
      },
      "lingkungan": {
        "skor": 56,
        "persen": 62.2,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 45,
            "maks": 65,
            "persen": 69.2
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 11,
            "maks": 25,
            "persen": 44.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 48,
        "persen": 96.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 19,
            "maks": 20,
            "persen": 95.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 72,
        "persen": 90.0,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 32,
            "maks": 35,
            "persen": 91.4
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 40,
            "maks": 45,
            "persen": 88.9
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Sosial (60.0%)",
      "Lingkungan (62.2%)"
    ],
    "targetDimensi": [
      "Sosial",
      "Lingkungan"
    ],
    "catatanMusrenbang": "Terdapat 18 indikator defisit (Skor 1) dengan sektor kritis: Sosial (60.0%), Lingkungan (62.2%). Prioritas lapangan: Penyelesaian Konflik secara damai; Peranan aparat keamanan menjadi mediator / penengah dalam penyelesaian Konflik.",
    "rekomendasiKategori": [
      "Keagamaan, Sosial & Budaya",
      "Sampah, Lingkungan & Kebencanaan"
    ],
    "namaKepalaDesa": "RAWIDA",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8.585862 116.250821",
    "alamatDesa": "Jln. Jurusan Keru-Sesaot Narmada Kode Pos 83371",
    "emailDesa": "desakeru2000@gmail.com",
    "webDesa": "keru.desa.id",
    "masaJabatanKades": "14 Tahun 3 Bulan",
    "periodeKades": "Periode ke-2",
    "skorBappenasId": 102.64
  },
  {
    "id": "desa-batu-kuta-narmada",
    "nama": "Batu Kuta",
    "tipe": "Desa",
    "kecamatan": "Narmada",
    "kodeWilayah": "5201032005",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.8362,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 84.12,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 531,
    "indeksKomposit": 15.9,
    "indikator": {
      "infrastruktur": 10.0,
      "pertanianPangan": 15.6,
      "pendidikanSDM": 16.0,
      "kesehatanStunting": 6.7,
      "ekonomiUMKM": 15.6,
      "lingkunganSampah": 44.4
    },
    "dimensi": {
      "layananDasar": {
        "skor": 149,
        "persen": 87.6,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 42,
            "maks": 45,
            "persen": 93.3
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 84,
            "maks": 100,
            "persen": 84.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ],
        "sub": {
          "pendidikan": 42,
          "kesehatan": 84,
          "utilitas": 23
        }
      },
      "sosial": {
        "skor": 76,
        "persen": 89.4,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 62,
            "maks": 65,
            "persen": 95.4
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 14,
            "maks": 20,
            "persen": 70.0
          }
        ]
      },
      "ekonomi": {
        "skor": 135,
        "persen": 84.4,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 32,
            "maks": 40,
            "persen": 80.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 103,
            "maks": 120,
            "persen": 85.8
          }
        ]
      },
      "lingkungan": {
        "skor": 50,
        "persen": 55.6,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 35,
            "maks": 65,
            "persen": 53.8
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 15,
            "maks": 25,
            "persen": 60.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 45,
        "persen": 90.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 16,
            "maks": 20,
            "persen": 80.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 76,
        "persen": 95.0,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 35,
            "maks": 35,
            "persen": 100.0
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 41,
            "maks": 45,
            "persen": 91.1
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (55.6%)",
      "Ekonomi (84.4%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Ekonomi"
    ],
    "catatanMusrenbang": "Terdapat 18 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (55.6%). Prioritas lapangan: Operasional ketersediaan layanan dokter di desa; Operasional ketersediaan layanan Tenaga Kesehatan di desa.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Pertanian, Peternakan & Pangan"
    ],
    "namaKepalaDesa": "Edy Ansori, SE",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "-8.602253772155297, 116.20019483329189",
    "alamatDesa": "Jln. Resani No.01 Desa Batu Kuta Kecamatan Narmada Kab. Lombok Barat NTB",
    "emailDesa": "selewakce@gmail.com",
    "webDesa": "www.batukuta.desa.id",
    "masaJabatanKades": "7 Tahun 6 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 104.29
  },
  {
    "id": "desa-tanak-beak-narmada",
    "nama": "Tanak Beak",
    "tipe": "Desa",
    "kecamatan": "Narmada",
    "kodeWilayah": "5201032006",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7496,
    "statusKemendesa": "MAJU",
    "skorBappenas": 75.76,
    "statusBappenas": "MAJU",
    "nilaiTotal": 476,
    "indeksKomposit": 24.2,
    "indikator": {
      "infrastruktur": 10.0,
      "pertanianPangan": 26.2,
      "pendidikanSDM": 24.0,
      "kesehatanStunting": 8.9,
      "ekonomiUMKM": 26.2,
      "lingkunganSampah": 48.9
    },
    "dimensi": {
      "layananDasar": {
        "skor": 141,
        "persen": 82.9,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 38,
            "maks": 45,
            "persen": 84.4
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 82,
            "maks": 100,
            "persen": 82.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 21,
            "maks": 25,
            "persen": 84.0
          }
        ],
        "sub": {
          "pendidikan": 38,
          "kesehatan": 82,
          "utilitas": 21
        }
      },
      "sosial": {
        "skor": 64,
        "persen": 75.3,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 50,
            "maks": 65,
            "persen": 76.9
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 14,
            "maks": 20,
            "persen": 70.0
          }
        ]
      },
      "ekonomi": {
        "skor": 118,
        "persen": 73.8,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 36,
            "maks": 40,
            "persen": 90.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 82,
            "maks": 120,
            "persen": 68.3
          }
        ]
      },
      "lingkungan": {
        "skor": 46,
        "persen": 51.1,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 41,
            "maks": 65,
            "persen": 63.1
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 5,
            "maks": 25,
            "persen": 20.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 45,
        "persen": 90.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 19,
            "maks": 20,
            "persen": 95.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 26,
            "maks": 30,
            "persen": 86.7
          }
        ]
      },
      "tataKelola": {
        "skor": 62,
        "persen": 77.5,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 33,
            "maks": 35,
            "persen": 94.3
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 29,
            "maks": 45,
            "persen": 64.4
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (51.1%)",
      "Ekonomi (73.8%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Ekonomi"
    ],
    "catatanMusrenbang": "Terdapat 26 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (51.1%). Prioritas lapangan: Operasional ketersediaan layanan dokter di desa; Operasional ketersediaan layanan Tenaga Kesehatan di desa.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Pertanian, Peternakan & Pangan"
    ],
    "namaKepalaDesa": "BUDIMAN",
    "statusKepalaDesa": "Penjabat",
    "koordinatDesa": "-8,606096, Long116,202530",
    "alamatDesa": "JL Resani Gebong Desa Tanak Beak Kecamatan Narmada",
    "emailDesa": "Pemdestanakbeak@gmail.com",
    "webDesa": "tanak beak.desa.id",
    "masaJabatanKades": "9 Tahun 6 Bulan",
    "periodeKades": "Periode ke-2",
    "skorBappenasId": 93.92
  },
  {
    "id": "desa-sedau-narmada",
    "nama": "Sedau",
    "tipe": "Desa",
    "kecamatan": "Narmada",
    "kodeWilayah": "5201032007",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.789,
    "statusKemendesa": "MAJU",
    "skorBappenas": 79.66,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 501,
    "indeksKomposit": 20.3,
    "indikator": {
      "infrastruktur": 2.0,
      "pertanianPangan": 25.0,
      "pendidikanSDM": 12.0,
      "kesehatanStunting": 6.7,
      "ekonomiUMKM": 25.0,
      "lingkunganSampah": 28.9
    },
    "dimensi": {
      "layananDasar": {
        "skor": 151,
        "persen": 88.8,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 44,
            "maks": 45,
            "persen": 97.8
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 84,
            "maks": 100,
            "persen": 84.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ],
        "sub": {
          "pendidikan": 44,
          "kesehatan": 84,
          "utilitas": 23
        }
      },
      "sosial": {
        "skor": 54,
        "persen": 63.5,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 44,
            "maks": 65,
            "persen": 67.7
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 10,
            "maks": 20,
            "persen": 50.0
          }
        ]
      },
      "ekonomi": {
        "skor": 120,
        "persen": 75.0,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 36,
            "maks": 40,
            "persen": 90.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 84,
            "maks": 120,
            "persen": 70.0
          }
        ]
      },
      "lingkungan": {
        "skor": 64,
        "persen": 71.1,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 49,
            "maks": 65,
            "persen": 75.4
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 15,
            "maks": 25,
            "persen": 60.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 63,
        "persen": 78.8,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 32,
            "maks": 35,
            "persen": 91.4
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 31,
            "maks": 45,
            "persen": 68.9
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Sosial (63.5%)",
      "Lingkungan (71.1%)"
    ],
    "targetDimensi": [
      "Sosial",
      "Lingkungan"
    ],
    "catatanMusrenbang": "Terdapat 24 indikator defisit (Skor 1) dengan sektor kritis: Sosial (63.5%). Prioritas lapangan: Keberadaan kegiatan sosialisasi dan/atau advokasi terkait program jaminan kesehatan nasional di desa; Peranan aparat pemerintah menjadi mediator / penengah dalam penyelesaian Konflik.",
    "rekomendasiKategori": [
      "Keagamaan, Sosial & Budaya",
      "Sampah, Lingkungan & Kebencanaan"
    ],
    "namaKepalaDesa": "AMIR SYARIPUDIN, M. Pd",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8.568454 116.258529",
    "alamatDesa": "Jln. Keri-Sesaot Kode Pos 83371",
    "emailDesa": "pemdes.sedau@gmail.com",
    "webDesa": "sedau.desa.id",
    "masaJabatanKades": "6 TAHUN 4 BULAN",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 98.76
  },
  {
    "id": "desa-suranadi-narmada",
    "nama": "Suranadi",
    "tipe": "Desa",
    "kecamatan": "Narmada",
    "kodeWilayah": "5201032008",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.7969,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 80.5,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 506,
    "indeksKomposit": 19.5,
    "indikator": {
      "infrastruktur": 2.0,
      "pertanianPangan": 28.1,
      "pendidikanSDM": 14.0,
      "kesehatanStunting": 0.0,
      "ekonomiUMKM": 28.1,
      "lingkunganSampah": 28.9
    },
    "dimensi": {
      "layananDasar": {
        "skor": 158,
        "persen": 92.9,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 43,
            "maks": 45,
            "persen": 95.6
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 90,
            "maks": 100,
            "persen": 90.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ],
        "sub": {
          "pendidikan": 43,
          "kesehatan": 90,
          "utilitas": 25
        }
      },
      "sosial": {
        "skor": 61,
        "persen": 71.8,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 55,
            "maks": 65,
            "persen": 84.6
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 6,
            "maks": 20,
            "persen": 30.0
          }
        ]
      },
      "ekonomi": {
        "skor": 115,
        "persen": 71.9,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 36,
            "maks": 40,
            "persen": 90.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 79,
            "maks": 120,
            "persen": 65.8
          }
        ]
      },
      "lingkungan": {
        "skor": 64,
        "persen": 71.1,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 49,
            "maks": 65,
            "persen": 75.4
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 15,
            "maks": 25,
            "persen": 60.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 59,
        "persen": 73.8,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 35,
            "maks": 35,
            "persen": 100.0
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 24,
            "maks": 45,
            "persen": 53.3
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (71.1%)",
      "Sosial (71.8%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Sosial"
    ],
    "catatanMusrenbang": "Seluruh 6 dimensi ≥70%, namun masih terdapat 23 indikator berskor 1 (Operasional ketersediaan layanan Bidan di desa; Operasional ketersediaan layanan Tenaga Kesehatan di desa) yang perlu diintervensi.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Keagamaan, Sosial & Budaya"
    ],
    "namaKepalaDesa": "I NYOMAN ADWISANA,S.Fil",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "S 8Â° 34' 5.941\" E 116Â° 13' 49.336â€",
    "alamatDesa": "Jln. Suranadi Sesaot, Kec. Narmada, Kab. Lombok Barat NTB",
    "emailDesa": "desasuranadinarmada@gmail.com",
    "webDesa": "http://suranadi.desa.id/",
    "masaJabatanKades": "6 Tahun 3 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 99.8
  },
  {
    "id": "desa-selat-narmada",
    "nama": "Selat",
    "tipe": "Desa",
    "kecamatan": "Narmada",
    "kodeWilayah": "5201032009",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7953,
    "statusKemendesa": "MAJU",
    "skorBappenas": 79.56,
    "statusBappenas": "MAJU",
    "nilaiTotal": 505,
    "indeksKomposit": 20.4,
    "indikator": {
      "infrastruktur": 4.0,
      "pertanianPangan": 30.6,
      "pendidikanSDM": 18.0,
      "kesehatanStunting": 2.2,
      "ekonomiUMKM": 30.6,
      "lingkunganSampah": 33.3
    },
    "dimensi": {
      "layananDasar": {
        "skor": 154,
        "persen": 90.6,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 41,
            "maks": 45,
            "persen": 91.1
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 88,
            "maks": 100,
            "persen": 88.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ],
        "sub": {
          "pendidikan": 41,
          "kesehatan": 88,
          "utilitas": 25
        }
      },
      "sosial": {
        "skor": 66,
        "persen": 77.6,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 59,
            "maks": 65,
            "persen": 90.8
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 7,
            "maks": 20,
            "persen": 35.0
          }
        ]
      },
      "ekonomi": {
        "skor": 111,
        "persen": 69.4,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 32,
            "maks": 40,
            "persen": 80.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 79,
            "maks": 120,
            "persen": 65.8
          }
        ]
      },
      "lingkungan": {
        "skor": 60,
        "persen": 66.7,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 47,
            "maks": 65,
            "persen": 72.3
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 13,
            "maks": 25,
            "persen": 52.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 48,
        "persen": 96.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 19,
            "maks": 20,
            "persen": 95.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 66,
        "persen": 82.5,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 31,
            "maks": 35,
            "persen": 88.6
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 35,
            "maks": 45,
            "persen": 77.8
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (66.7%)",
      "Ekonomi (69.4%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Ekonomi"
    ],
    "catatanMusrenbang": "Terdapat 25 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (66.7%), Ekonomi (69.4%). Prioritas lapangan: Operasional ketersediaan layanan Bidan di desa; Operasional ketersediaan layanan Tenaga Kesehatan di desa.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Pertanian, Peternakan & Pangan"
    ],
    "namaKepalaDesa": "Sabudi, S. Sos. I",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8.582218 116.207919",
    "alamatDesa": "Jln. Suranadi 2 Selat Barat Desa Selat Kec. Narmada",
    "emailDesa": "selatdesaku@gmail.com",
    "webDesa": "http//:5201032009.website.desa.id",
    "masaJabatanKades": "5 Tahun 5 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 98.63
  },
  {
    "id": "desa-lebah-sempage-narmada",
    "nama": "Lebah Sempage",
    "tipe": "Desa",
    "kecamatan": "Narmada",
    "kodeWilayah": "5201032010",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7008,
    "statusKemendesa": "MAJU",
    "skorBappenas": 70.83,
    "statusBappenas": "MAJU",
    "nilaiTotal": 445,
    "indeksKomposit": 29.2,
    "indikator": {
      "infrastruktur": 18.0,
      "pertanianPangan": 24.4,
      "pendidikanSDM": 20.0,
      "kesehatanStunting": 35.6,
      "ekonomiUMKM": 24.4,
      "lingkunganSampah": 35.6
    },
    "dimensi": {
      "layananDasar": {
        "skor": 121,
        "persen": 71.2,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 40,
            "maks": 45,
            "persen": 88.9
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 58,
            "maks": 100,
            "persen": 58.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ],
        "sub": {
          "pendidikan": 40,
          "kesehatan": 58,
          "utilitas": 23
        }
      },
      "sosial": {
        "skor": 48,
        "persen": 56.5,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 42,
            "maks": 65,
            "persen": 64.6
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 6,
            "maks": 20,
            "persen": 30.0
          }
        ]
      },
      "ekonomi": {
        "skor": 121,
        "persen": 75.6,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 28,
            "maks": 40,
            "persen": 70.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 93,
            "maks": 120,
            "persen": 77.5
          }
        ]
      },
      "lingkungan": {
        "skor": 58,
        "persen": 64.4,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 35,
            "maks": 65,
            "persen": 53.8
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 41,
        "persen": 82.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 19,
            "maks": 20,
            "persen": 95.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 22,
            "maks": 30,
            "persen": 73.3
          }
        ]
      },
      "tataKelola": {
        "skor": 56,
        "persen": 70.0,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 33,
            "maks": 35,
            "persen": 94.3
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 23,
            "maks": 45,
            "persen": 51.1
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Sosial (56.5%)",
      "Lingkungan (64.4%)"
    ],
    "targetDimensi": [
      "Sosial",
      "Lingkungan"
    ],
    "catatanMusrenbang": "Terdapat 37 indikator defisit (Skor 1) dengan sektor kritis: Sosial (56.5%), Lingkungan (64.4%). Prioritas lapangan: Ketersediaan layanan dokter di desa; Operasional ketersediaan layanan dokter di desa.",
    "rekomendasiKategori": [
      "Keagamaan, Sosial & Budaya",
      "Sampah, Lingkungan & Kebencanaan"
    ],
    "namaKepalaDesa": "Mohamad Adi",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "-8.546056 116.268912",
    "alamatDesa": "Jl. Air Langga Rt 2 Dusun Lebah Sempage Selatan",
    "emailDesa": "lebahsempage@gmail.com",
    "webDesa": "https://lebahsempage.desa.id/",
    "masaJabatanKades": "6 tahun 4 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 87.81
  },
  {
    "id": "desa-sesaot-narmada",
    "nama": "Sesaot",
    "tipe": "Desa",
    "kecamatan": "Narmada",
    "kodeWilayah": "5201032011",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.8362,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 81.42,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 531,
    "indeksKomposit": 18.6,
    "indikator": {
      "infrastruktur": 2.0,
      "pertanianPangan": 31.2,
      "pendidikanSDM": 10.0,
      "kesehatanStunting": 14.4,
      "ekonomiUMKM": 31.2,
      "lingkunganSampah": 4.4
    },
    "dimensi": {
      "layananDasar": {
        "skor": 145,
        "persen": 85.3,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 45,
            "maks": 45,
            "persen": 100.0
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 77,
            "maks": 100,
            "persen": 77.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ],
        "sub": {
          "pendidikan": 45,
          "kesehatan": 77,
          "utilitas": 23
        }
      },
      "sosial": {
        "skor": 75,
        "persen": 88.2,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 61,
            "maks": 65,
            "persen": 93.8
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 14,
            "maks": 20,
            "persen": 70.0
          }
        ]
      },
      "ekonomi": {
        "skor": 110,
        "persen": 68.8,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 40,
            "maks": 40,
            "persen": 100.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 70,
            "maks": 120,
            "persen": 58.3
          }
        ]
      },
      "lingkungan": {
        "skor": 86,
        "persen": 95.6,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 61,
            "maks": 65,
            "persen": 93.8
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 66,
        "persen": 82.5,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 35,
            "maks": 35,
            "persen": 100.0
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 31,
            "maks": 45,
            "persen": 68.9
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Ekonomi (68.8%)",
      "Tata Kelola (82.5%)"
    ],
    "targetDimensi": [
      "Ekonomi",
      "Tata Kelola"
    ],
    "catatanMusrenbang": "Terdapat 20 indikator defisit (Skor 1) dengan sektor kritis: Ekonomi (68.8%). Prioritas lapangan: Ketersediaan layanan Tenaga Kesehatan di Desa; Operasional ketersediaan layanan Tenaga Kesehatan di desa.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Pemerintahan Desa & Digitalisasi"
    ],
    "namaKepalaDesa": "Muliadi, S.IP",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "-8.5415993 116.2442908",
    "alamatDesa": "Jln. Suranadi II Desa Sesaot Kecamatan Narmada Kab. Lombok Barat - NTB",
    "emailDesa": "desasesaot.id@gmail.com",
    "webDesa": "https://sesaot.desa.id",
    "masaJabatanKades": "1 Tahun 5 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 100.94
  },
  {
    "id": "desa-dasan-tereng-narmada",
    "nama": "Dasan Tereng",
    "tipe": "Desa",
    "kecamatan": "Narmada",
    "kodeWilayah": "5201032012",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.8315,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 82.22,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 528,
    "indeksKomposit": 17.8,
    "indikator": {
      "infrastruktur": 4.0,
      "pertanianPangan": 20.6,
      "pendidikanSDM": 16.0,
      "kesehatanStunting": 17.8,
      "ekonomiUMKM": 20.6,
      "lingkunganSampah": 20.0
    },
    "dimensi": {
      "layananDasar": {
        "skor": 141,
        "persen": 82.9,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 42,
            "maks": 45,
            "persen": 93.3
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 74,
            "maks": 100,
            "persen": 74.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ],
        "sub": {
          "pendidikan": 42,
          "kesehatan": 74,
          "utilitas": 25
        }
      },
      "sosial": {
        "skor": 72,
        "persen": 84.7,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 61,
            "maks": 65,
            "persen": 93.8
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 11,
            "maks": 20,
            "persen": 55.0
          }
        ]
      },
      "ekonomi": {
        "skor": 127,
        "persen": 79.4,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 36,
            "maks": 40,
            "persen": 90.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 91,
            "maks": 120,
            "persen": 75.8
          }
        ]
      },
      "lingkungan": {
        "skor": 72,
        "persen": 80.0,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 53,
            "maks": 65,
            "persen": 81.5
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 19,
            "maks": 25,
            "persen": 76.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 48,
        "persen": 96.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 19,
            "maks": 20,
            "persen": 95.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 68,
        "persen": 85.0,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 33,
            "maks": 35,
            "persen": 94.3
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 35,
            "maks": 45,
            "persen": 77.8
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Ekonomi (79.4%)",
      "Lingkungan (80.0%)"
    ],
    "targetDimensi": [
      "Ekonomi",
      "Lingkungan"
    ],
    "catatanMusrenbang": "Seluruh 6 dimensi ≥70%, namun masih terdapat 19 indikator berskor 1 (Operasional ketersediaan layanan dokter di desa; Operasional ketersediaan layanan Bidan di desa) yang perlu diintervensi.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ],
    "namaKepalaDesa": "PURWANTO, SP",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "-8.599135 116.185755",
    "alamatDesa": "Jln ahmad yani Dasan Tereng Narmada",
    "emailDesa": "desadasantereng25@gmail.com",
    "webDesa": "webadmin-5201032012",
    "masaJabatanKades": "8 Tahun",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 101.94
  },
  {
    "id": "desa-badrain-narmada",
    "nama": "Badrain",
    "tipe": "Desa",
    "kecamatan": "Narmada",
    "kodeWilayah": "5201032013",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.8157,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 80.8,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 518,
    "indeksKomposit": 19.2,
    "indikator": {
      "infrastruktur": 4.0,
      "pertanianPangan": 25.0,
      "pendidikanSDM": 32.0,
      "kesehatanStunting": 5.6,
      "ekonomiUMKM": 25.0,
      "lingkunganSampah": 26.7
    },
    "dimensi": {
      "layananDasar": {
        "skor": 144,
        "persen": 84.7,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 34,
            "maks": 45,
            "persen": 75.6
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 85,
            "maks": 100,
            "persen": 85.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ],
        "sub": {
          "pendidikan": 34,
          "kesehatan": 85,
          "utilitas": 25
        }
      },
      "sosial": {
        "skor": 77,
        "persen": 90.6,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 63,
            "maks": 65,
            "persen": 96.9
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 14,
            "maks": 20,
            "persen": 70.0
          }
        ]
      },
      "ekonomi": {
        "skor": 120,
        "persen": 75.0,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 36,
            "maks": 40,
            "persen": 90.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 84,
            "maks": 120,
            "persen": 70.0
          }
        ]
      },
      "lingkungan": {
        "skor": 66,
        "persen": 73.3,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 45,
            "maks": 65,
            "persen": 69.2
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 21,
            "maks": 25,
            "persen": 84.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 48,
        "persen": 96.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 19,
            "maks": 20,
            "persen": 95.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 63,
        "persen": 78.8,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 32,
            "maks": 35,
            "persen": 91.4
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 31,
            "maks": 45,
            "persen": 68.9
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (73.3%)",
      "Ekonomi (75.0%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Ekonomi"
    ],
    "catatanMusrenbang": "Seluruh 6 dimensi ≥70%, namun masih terdapat 21 indikator berskor 1 (Kemudahan Akses menuju PAUD/TK/Sederajat terdekat di Desa; Kemudahan Akses menuju SD/MI/Sederajat terdekat di Desa) yang perlu diintervensi.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Pertanian, Peternakan & Pangan"
    ],
    "namaKepalaDesa": "H. ROMI PURWANDI, S. Pd.",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "-8.614829 116.172867",
    "alamatDesa": "Jalan Tgh. M. Adnan  badrain narmada",
    "emailDesa": "desabadrain@yahoo.co.id",
    "webDesa": "WWW. BADRAIN . CO.ID",
    "masaJabatanKades": "13 TAHUN 7 BULAN",
    "periodeKades": "Periode ke-2",
    "skorBappenasId": 100.17
  },
  {
    "id": "desa-sembung-narmada",
    "nama": "Sembung",
    "tipe": "Desa",
    "kecamatan": "Narmada",
    "kodeWilayah": "5201032014",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7575,
    "statusKemendesa": "MAJU",
    "skorBappenas": 74.94,
    "statusBappenas": "MAJU",
    "nilaiTotal": 481,
    "indeksKomposit": 25.1,
    "indikator": {
      "infrastruktur": 2.0,
      "pertanianPangan": 31.2,
      "pendidikanSDM": 28.0,
      "kesehatanStunting": 12.2,
      "ekonomiUMKM": 31.2,
      "lingkunganSampah": 28.9
    },
    "dimensi": {
      "layananDasar": {
        "skor": 136,
        "persen": 80.0,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 36,
            "maks": 45,
            "persen": 80.0
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 79,
            "maks": 100,
            "persen": 79.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 21,
            "maks": 25,
            "persen": 84.0
          }
        ],
        "sub": {
          "pendidikan": 36,
          "kesehatan": 79,
          "utilitas": 21
        }
      },
      "sosial": {
        "skor": 61,
        "persen": 71.8,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 46,
            "maks": 65,
            "persen": 70.8
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 15,
            "maks": 20,
            "persen": 75.0
          }
        ]
      },
      "ekonomi": {
        "skor": 110,
        "persen": 68.8,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 32,
            "maks": 40,
            "persen": 80.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 78,
            "maks": 120,
            "persen": 65.0
          }
        ]
      },
      "lingkungan": {
        "skor": 64,
        "persen": 71.1,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 51,
            "maks": 65,
            "persen": 78.5
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 13,
            "maks": 25,
            "persen": 52.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 61,
        "persen": 76.2,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 33,
            "maks": 35,
            "persen": 94.3
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 28,
            "maks": 45,
            "persen": 62.2
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Ekonomi (68.8%)",
      "Lingkungan (71.1%)"
    ],
    "targetDimensi": [
      "Ekonomi",
      "Lingkungan"
    ],
    "catatanMusrenbang": "Terdapat 29 indikator defisit (Skor 1) dengan sektor kritis: Ekonomi (68.8%). Prioritas lapangan: Operasional ketersediaan layanan dokter di desa; Keberadaan Penyedia Transportasi penunjang menuju layanan Dokter.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ],
    "namaKepalaDesa": "H. ALI ABDUL SYAHID,S.Adm.",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "-8.611261394950171, 116.1661115053052",
    "alamatDesa": "95Q8+8CP, Jalan Pahlawan, Narmada, Sembung, Lombok Barat, Kabupaten Lombok Barat, Nusa Tenggara Bar. 83361",
    "emailDesa": "adm.desasembung@gmail.com",
    "webDesa": "www.desasembungadil.co.id",
    "masaJabatanKades": "3 Tahun 9 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 92.91
  },
  {
    "id": "desa-krama-jaya-narmada",
    "nama": "Krama Jaya",
    "tipe": "Desa",
    "kecamatan": "Narmada",
    "kodeWilayah": "5201032015",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7339,
    "statusKemendesa": "MAJU",
    "skorBappenas": 72.72,
    "statusBappenas": "MAJU",
    "nilaiTotal": 466,
    "indeksKomposit": 27.3,
    "indikator": {
      "infrastruktur": 2.0,
      "pertanianPangan": 24.4,
      "pendidikanSDM": 26.0,
      "kesehatanStunting": 26.7,
      "ekonomiUMKM": 24.4,
      "lingkunganSampah": 53.3
    },
    "dimensi": {
      "layananDasar": {
        "skor": 122,
        "persen": 71.8,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 37,
            "maks": 45,
            "persen": 82.2
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 66,
            "maks": 100,
            "persen": 66.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 19,
            "maks": 25,
            "persen": 76.0
          }
        ],
        "sub": {
          "pendidikan": 37,
          "kesehatan": 66,
          "utilitas": 19
        }
      },
      "sosial": {
        "skor": 72,
        "persen": 84.7,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 57,
            "maks": 65,
            "persen": 87.7
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 15,
            "maks": 20,
            "persen": 75.0
          }
        ]
      },
      "ekonomi": {
        "skor": 121,
        "persen": 75.6,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 36,
            "maks": 40,
            "persen": 90.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 85,
            "maks": 120,
            "persen": 70.8
          }
        ]
      },
      "lingkungan": {
        "skor": 42,
        "persen": 46.7,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 33,
            "maks": 65,
            "persen": 50.8
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 9,
            "maks": 25,
            "persen": 36.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 60,
        "persen": 75.0,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 32,
            "maks": 35,
            "persen": 91.4
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 28,
            "maks": 45,
            "persen": 62.2
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (46.7%)",
      "Layanan Dasar (71.8%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Layanan Dasar"
    ],
    "catatanMusrenbang": "Terdapat 31 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (46.7%). Prioritas lapangan: Ketersediaan layanan dokter di desa; Operasional ketersediaan layanan dokter di desa.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Pendidikan & Sekolah"
    ],
    "namaKepalaDesa": "ABDURAHMAN",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "-8.609134 116.180434",
    "alamatDesa": "KERAMAT LAUK",
    "emailDesa": "kantordesakramajaya@gmail.com",
    "webDesa": "www.kramajaya.com",
    "masaJabatanKades": "2 Tahun 7 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 90.16
  },
  {
    "id": "desa-gerimax-indah-narmada",
    "nama": "Gerimax Indah",
    "tipe": "Desa",
    "kecamatan": "Narmada",
    "kodeWilayah": "5201032016",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7465,
    "statusKemendesa": "MAJU",
    "skorBappenas": 73.22,
    "statusBappenas": "MAJU",
    "nilaiTotal": 474,
    "indeksKomposit": 26.8,
    "indikator": {
      "infrastruktur": 0.0,
      "pertanianPangan": 28.8,
      "pendidikanSDM": 12.0,
      "kesehatanStunting": 35.6,
      "ekonomiUMKM": 28.8,
      "lingkunganSampah": 44.4
    },
    "dimensi": {
      "layananDasar": {
        "skor": 125,
        "persen": 73.5,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 44,
            "maks": 45,
            "persen": 97.8
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 58,
            "maks": 100,
            "persen": 58.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ],
        "sub": {
          "pendidikan": 44,
          "kesehatan": 58,
          "utilitas": 23
        }
      },
      "sosial": {
        "skor": 71,
        "persen": 83.5,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 60,
            "maks": 65,
            "persen": 92.3
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 11,
            "maks": 20,
            "persen": 55.0
          }
        ]
      },
      "ekonomi": {
        "skor": 114,
        "persen": 71.2,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 34,
            "maks": 40,
            "persen": 85.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 80,
            "maks": 120,
            "persen": 66.7
          }
        ]
      },
      "lingkungan": {
        "skor": 50,
        "persen": 55.6,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 39,
            "maks": 65,
            "persen": 60.0
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 11,
            "maks": 25,
            "persen": 44.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 50,
        "persen": 100.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 30,
            "maks": 30,
            "persen": 100.0
          }
        ]
      },
      "tataKelola": {
        "skor": 64,
        "persen": 80.0,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 33,
            "maks": 35,
            "persen": 94.3
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 31,
            "maks": 45,
            "persen": 68.9
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (55.6%)",
      "Ekonomi (71.2%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Ekonomi"
    ],
    "catatanMusrenbang": "Terdapat 34 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (55.6%). Prioritas lapangan: Ketersediaan layanan dokter di desa; Operasional ketersediaan layanan dokter di desa.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Pertanian, Peternakan & Pangan"
    ],
    "namaKepalaDesa": "AMAL SUHARDI",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8.594953S 116.175000E",
    "alamatDesa": "JALAN KIRAB REMAJA DUSUN KEMBANG KUNING",
    "emailDesa": "grimaxindah03@gmail.com",
    "webDesa": "www.grimaxindah,desa.id",
    "masaJabatanKades": "8 TAHUN",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 90.78
  },
  {
    "id": "desa-pakuan-narmada",
    "nama": "Pakuan",
    "tipe": "Desa",
    "kecamatan": "Narmada",
    "kodeWilayah": "5201032017",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7874,
    "statusKemendesa": "MAJU",
    "skorBappenas": 78.69,
    "statusBappenas": "MAJU",
    "nilaiTotal": 500,
    "indeksKomposit": 21.3,
    "indikator": {
      "infrastruktur": 24.0,
      "pertanianPangan": 26.2,
      "pendidikanSDM": 30.0,
      "kesehatanStunting": 11.1,
      "ekonomiUMKM": 26.2,
      "lingkunganSampah": 15.6
    },
    "dimensi": {
      "layananDasar": {
        "skor": 140,
        "persen": 82.4,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 35,
            "maks": 45,
            "persen": 77.8
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 80,
            "maks": 100,
            "persen": 80.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ],
        "sub": {
          "pendidikan": 35,
          "kesehatan": 80,
          "utilitas": 25
        }
      },
      "sosial": {
        "skor": 58,
        "persen": 68.2,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 47,
            "maks": 65,
            "persen": 72.3
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 11,
            "maks": 20,
            "persen": 55.0
          }
        ]
      },
      "ekonomi": {
        "skor": 118,
        "persen": 73.8,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 36,
            "maks": 40,
            "persen": 90.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 82,
            "maks": 120,
            "persen": 68.3
          }
        ]
      },
      "lingkungan": {
        "skor": 76,
        "persen": 84.4,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 53,
            "maks": 65,
            "persen": 81.5
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 38,
        "persen": 76.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 18,
            "maks": 30,
            "persen": 60.0
          }
        ]
      },
      "tataKelola": {
        "skor": 70,
        "persen": 87.5,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 35,
            "maks": 35,
            "persen": 100.0
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 35,
            "maks": 45,
            "persen": 77.8
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Sosial (68.2%)",
      "Ekonomi (73.8%)"
    ],
    "targetDimensi": [
      "Sosial",
      "Ekonomi"
    ],
    "catatanMusrenbang": "Terdapat 25 indikator defisit (Skor 1) dengan sektor kritis: Sosial (68.2%). Prioritas lapangan: Ketersediaan layanan dokter di desa; Operasional ketersediaan layanan dokter di desa.",
    "rekomendasiKategori": [
      "Keagamaan, Sosial & Budaya",
      "Pertanian, Peternakan & Pangan"
    ],
    "namaKepalaDesa": "MARDAN HARIS",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "S 8Â° 32' 7.134\", E 116Â° 16' 3.303\"",
    "alamatDesa": "Jln. Pengkoak KM 13 Jurang Malang Pakuan Narmada Kab. Lombok Barat NTB",
    "emailDesa": "desapakuan72@gmail.com",
    "webDesa": "desapakuan",
    "masaJabatanKades": "10 TAHUN 3 BULAN",
    "periodeKades": "Periode ke-2",
    "skorBappenasId": 97.56
  },
  {
    "id": "desa-golong-narmada",
    "nama": "Golong",
    "tipe": "Desa",
    "kecamatan": "Narmada",
    "kodeWilayah": "5201032018",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.8331,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 83.53,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 529,
    "indeksKomposit": 16.5,
    "indikator": {
      "infrastruktur": 2.0,
      "pertanianPangan": 14.4,
      "pendidikanSDM": 10.0,
      "kesehatanStunting": 16.7,
      "ekonomiUMKM": 14.4,
      "lingkunganSampah": 37.8
    },
    "dimensi": {
      "layananDasar": {
        "skor": 145,
        "persen": 85.3,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 45,
            "maks": 45,
            "persen": 100.0
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 75,
            "maks": 100,
            "persen": 75.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ],
        "sub": {
          "pendidikan": 45,
          "kesehatan": 75,
          "utilitas": 25
        }
      },
      "sosial": {
        "skor": 68,
        "persen": 80.0,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 52,
            "maks": 65,
            "persen": 80.0
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 16,
            "maks": 20,
            "persen": 80.0
          }
        ]
      },
      "ekonomi": {
        "skor": 137,
        "persen": 85.6,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 34,
            "maks": 40,
            "persen": 85.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 103,
            "maks": 120,
            "persen": 85.8
          }
        ]
      },
      "lingkungan": {
        "skor": 56,
        "persen": 62.2,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 37,
            "maks": 65,
            "persen": 56.9
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 19,
            "maks": 25,
            "persen": 76.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 74,
        "persen": 92.5,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 33,
            "maks": 35,
            "persen": 94.3
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 41,
            "maks": 45,
            "persen": 91.1
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (62.2%)",
      "Sosial (80.0%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Sosial"
    ],
    "catatanMusrenbang": "Terdapat 20 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (62.2%). Prioritas lapangan: Ketersediaan layanan dokter di desa; Operasional ketersediaan layanan dokter di desa.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Keagamaan, Sosial & Budaya"
    ],
    "namaKepalaDesa": "H.M. ZAENUDIN,SE.",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8Â°35'34.07\"S 116Â°14'9.15\"E",
    "alamatDesa": "Jl.Raya Mantang No.155, Golong, Kecamatan Narmada, Kabupaten Lombok Barat",
    "emailDesa": "desagolong2019@gmail.com",
    "webDesa": "golong.desa.id",
    "masaJabatanKades": "5 Bulan",
    "periodeKades": "Periode ke-3",
    "skorBappenasId": 103.56
  },
  {
    "id": "desa-mekarsari-narmada",
    "nama": "Mekarsari",
    "tipe": "Desa",
    "kecamatan": "Narmada",
    "kodeWilayah": "5201032019",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.8299,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 81.89,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 527,
    "indeksKomposit": 18.1,
    "indikator": {
      "infrastruktur": 0.0,
      "pertanianPangan": 20.6,
      "pendidikanSDM": 26.0,
      "kesehatanStunting": 11.1,
      "ekonomiUMKM": 20.6,
      "lingkunganSampah": 26.7
    },
    "dimensi": {
      "layananDasar": {
        "skor": 140,
        "persen": 82.4,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 37,
            "maks": 45,
            "persen": 82.2
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 80,
            "maks": 100,
            "persen": 80.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ],
        "sub": {
          "pendidikan": 37,
          "kesehatan": 80,
          "utilitas": 23
        }
      },
      "sosial": {
        "skor": 78,
        "persen": 91.8,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 64,
            "maks": 65,
            "persen": 98.5
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 14,
            "maks": 20,
            "persen": 70.0
          }
        ]
      },
      "ekonomi": {
        "skor": 127,
        "persen": 79.4,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 36,
            "maks": 40,
            "persen": 90.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 91,
            "maks": 120,
            "persen": 75.8
          }
        ]
      },
      "lingkungan": {
        "skor": 66,
        "persen": 73.3,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 51,
            "maks": 65,
            "persen": 78.5
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 15,
            "maks": 25,
            "persen": 60.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 50,
        "persen": 100.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 30,
            "maks": 30,
            "persen": 100.0
          }
        ]
      },
      "tataKelola": {
        "skor": 66,
        "persen": 82.5,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 32,
            "maks": 35,
            "persen": 91.4
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 34,
            "maks": 45,
            "persen": 75.6
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (73.3%)",
      "Ekonomi (79.4%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Ekonomi"
    ],
    "catatanMusrenbang": "Seluruh 6 dimensi ≥70%, namun masih terdapat 17 indikator berskor 1 (Ketersediaan layanan Tenaga Kesehatan di Desa; Operasional ketersediaan layanan Tenaga Kesehatan di desa) yang perlu diintervensi.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Pertanian, Peternakan & Pangan"
    ],
    "namaKepalaDesa": "SAPINAH",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8Â°36'15.43\"S 116Â°10'0.14\"E",
    "alamatDesa": "Jl. Kiayi  Masmirah No. 17",
    "emailDesa": "mekarsari.narmada@gmail.com",
    "webDesa": "mekarsari-narmada.desa.id",
    "masaJabatanKades": "11 Tahun 6 Bulan",
    "periodeKades": "Periode ke-2",
    "skorBappenasId": 101.53
  },
  {
    "id": "desa-buwun-sejati-narmada",
    "nama": "Buwun Sejati",
    "tipe": "Desa",
    "kecamatan": "Narmada",
    "kodeWilayah": "5201032020",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7024,
    "statusKemendesa": "MAJU",
    "skorBappenas": 70.53,
    "statusBappenas": "MAJU",
    "nilaiTotal": 446,
    "indeksKomposit": 29.5,
    "indikator": {
      "infrastruktur": 26.0,
      "pertanianPangan": 28.8,
      "pendidikanSDM": 12.0,
      "kesehatanStunting": 35.6,
      "ekonomiUMKM": 28.8,
      "lingkunganSampah": 46.7
    },
    "dimensi": {
      "layananDasar": {
        "skor": 123,
        "persen": 72.4,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 44,
            "maks": 45,
            "persen": 97.8
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 58,
            "maks": 100,
            "persen": 58.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 21,
            "maks": 25,
            "persen": 84.0
          }
        ],
        "sub": {
          "pendidikan": 44,
          "kesehatan": 58,
          "utilitas": 21
        }
      },
      "sosial": {
        "skor": 57,
        "persen": 67.1,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 52,
            "maks": 65,
            "persen": 80.0
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 5,
            "maks": 20,
            "persen": 25.0
          }
        ]
      },
      "ekonomi": {
        "skor": 114,
        "persen": 71.2,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 34,
            "maks": 40,
            "persen": 85.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 80,
            "maks": 120,
            "persen": 66.7
          }
        ]
      },
      "lingkungan": {
        "skor": 48,
        "persen": 53.3,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 39,
            "maks": 65,
            "persen": 60.0
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 9,
            "maks": 25,
            "persen": 36.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 37,
        "persen": 74.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 18,
            "maks": 20,
            "persen": 90.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 19,
            "maks": 30,
            "persen": 63.3
          }
        ]
      },
      "tataKelola": {
        "skor": 67,
        "persen": 83.8,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 35,
            "maks": 35,
            "persen": 100.0
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 32,
            "maks": 45,
            "persen": 71.1
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (53.3%)",
      "Sosial (67.1%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Sosial"
    ],
    "catatanMusrenbang": "Terdapat 40 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (53.3%), Sosial (67.1%). Prioritas lapangan: Ketersediaan layanan dokter di desa; Operasional ketersediaan layanan dokter di desa.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Keagamaan, Sosial & Budaya"
    ],
    "namaKepalaDesa": "MUHIDIN, S.Ag",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8Â°32'52.10\"S 116Â°13'35.64\"E",
    "alamatDesa": "Jln. Usaha tani Desa Buwun Sejati Kec. Narmada Kab. Lombok Barat NTB",
    "emailDesa": "buwunsejativisit@gmail.com",
    "webDesa": "http://buwunsejati.desa.id/",
    "masaJabatanKades": "5 Tahun 4 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 87.44
  },
  {
    "id": "desa-narmada-narmada",
    "nama": "Narmada",
    "tipe": "Desa",
    "kecamatan": "Narmada",
    "kodeWilayah": "5201032021",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.8126,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 80.51,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 516,
    "indeksKomposit": 19.5,
    "indikator": {
      "infrastruktur": 2.0,
      "pertanianPangan": 35.0,
      "pendidikanSDM": 12.0,
      "kesehatanStunting": 2.2,
      "ekonomiUMKM": 35.0,
      "lingkunganSampah": 15.6
    },
    "dimensi": {
      "layananDasar": {
        "skor": 157,
        "persen": 92.4,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 44,
            "maks": 45,
            "persen": 97.8
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 88,
            "maks": 100,
            "persen": 88.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ],
        "sub": {
          "pendidikan": 44,
          "kesehatan": 88,
          "utilitas": 25
        }
      },
      "sosial": {
        "skor": 72,
        "persen": 84.7,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 64,
            "maks": 65,
            "persen": 98.5
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 8,
            "maks": 20,
            "persen": 40.0
          }
        ]
      },
      "ekonomi": {
        "skor": 104,
        "persen": 65.0,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 16,
            "maks": 40,
            "persen": 40.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 88,
            "maks": 120,
            "persen": 73.3
          }
        ]
      },
      "lingkungan": {
        "skor": 76,
        "persen": 84.4,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 51,
            "maks": 65,
            "persen": 78.5
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 58,
        "persen": 72.5,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 18,
            "maks": 35,
            "persen": 51.4
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 40,
            "maks": 45,
            "persen": 88.9
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Ekonomi (65.0%)",
      "Tata Kelola (72.5%)"
    ],
    "targetDimensi": [
      "Ekonomi",
      "Tata Kelola"
    ],
    "catatanMusrenbang": "Terdapat 25 indikator defisit (Skor 1) dengan sektor kritis: Ekonomi (65.0%). Prioritas lapangan: Operasional ketersediaan layanan Tenaga Kesehatan di desa; Keberadaan Penyedia Transportasi penunjang menuju layanan Nakes.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Pemerintahan Desa & Digitalisasi"
    ],
    "namaKepalaDesa": "Subayanto, S. Pd",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "-8.5936285154566, 116.20487497911857",
    "alamatDesa": "Jl. Ahmad Yani No.65, Lembuak, Kec. Narmada, Kabupaten Lombok Barat, Nusa Tenggara Bar. 83371",
    "emailDesa": "desanarmada@gmil.com",
    "webDesa": "narmadadesa.co.id",
    "masaJabatanKades": "6 tahun 3 bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 99.81
  },
  {
    "id": "desa-sekotong-tengah-sekotong",
    "nama": "Sekotong Tengah",
    "tipe": "Desa",
    "kecamatan": "Sekotong",
    "kodeWilayah": "5201072001",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.9055,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 91.5,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 575,
    "indeksKomposit": 8.5,
    "indikator": {
      "infrastruktur": 6.0,
      "pertanianPangan": 13.8,
      "pendidikanSDM": 10.0,
      "kesehatanStunting": -11.1,
      "ekonomiUMKM": 13.8,
      "lingkunganSampah": 20.0
    },
    "dimensi": {
      "layananDasar": {
        "skor": 170,
        "persen": 100.0,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 45,
            "maks": 45,
            "persen": 100.0
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 100,
            "maks": 100,
            "persen": 100.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ],
        "sub": {
          "pendidikan": 45,
          "kesehatan": 100,
          "utilitas": 25
        }
      },
      "sosial": {
        "skor": 77,
        "persen": 90.6,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 63,
            "maks": 65,
            "persen": 96.9
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 14,
            "maks": 20,
            "persen": 70.0
          }
        ]
      },
      "ekonomi": {
        "skor": 138,
        "persen": 86.2,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 32,
            "maks": 40,
            "persen": 80.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 106,
            "maks": 120,
            "persen": 88.3
          }
        ]
      },
      "lingkungan": {
        "skor": 72,
        "persen": 80.0,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 47,
            "maks": 65,
            "persen": 72.3
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 47,
        "persen": 94.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 19,
            "maks": 20,
            "persen": 95.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 28,
            "maks": 30,
            "persen": 93.3
          }
        ]
      },
      "tataKelola": {
        "skor": 71,
        "persen": 88.8,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 33,
            "maks": 35,
            "persen": 94.3
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 38,
            "maks": 45,
            "persen": 84.4
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (80.0%)",
      "Ekonomi (86.2%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Ekonomi"
    ],
    "catatanMusrenbang": "Seluruh 6 dimensi ≥70%, namun masih terdapat 10 indikator berskor 1 (Cakupan Penjualan Hasil Produk Unggulan Desa; Ketersediaan merek dagang) yang perlu diintervensi.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Pertanian, Peternakan & Pangan"
    ],
    "namaKepalaDesa": "MUHAMMAD BURHAM SH",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "Lat-8.77478702734* Long116.04758922*",
    "alamatDesa": "Jalan raya Ampera No 10 Sekotong",
    "emailDesa": "sekotongtengah004@gmail.com",
    "webDesa": "https://sekotongtengah.desa.id/",
    "masaJabatanKades": "1 Tahun 9 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 113.44
  },
  {
    "id": "desa-sekotong-barat-sekotong",
    "nama": "Sekotong Barat",
    "tipe": "Desa",
    "kecamatan": "Sekotong",
    "kodeWilayah": "5201072002",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.8346,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 83.45,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 530,
    "indeksKomposit": 16.5,
    "indikator": {
      "infrastruktur": 4.0,
      "pertanianPangan": 21.9,
      "pendidikanSDM": 14.0,
      "kesehatanStunting": 4.4,
      "ekonomiUMKM": 21.9,
      "lingkunganSampah": 21.1
    },
    "dimensi": {
      "layananDasar": {
        "skor": 152,
        "persen": 89.4,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 43,
            "maks": 45,
            "persen": 95.6
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 86,
            "maks": 100,
            "persen": 86.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ],
        "sub": {
          "pendidikan": 43,
          "kesehatan": 86,
          "utilitas": 23
        }
      },
      "sosial": {
        "skor": 69,
        "persen": 81.2,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 61,
            "maks": 65,
            "persen": 93.8
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 8,
            "maks": 20,
            "persen": 40.0
          }
        ]
      },
      "ekonomi": {
        "skor": 125,
        "persen": 78.1,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 36,
            "maks": 40,
            "persen": 90.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 89,
            "maks": 120,
            "persen": 74.2
          }
        ]
      },
      "lingkungan": {
        "skor": 71,
        "persen": 78.9,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 53,
            "maks": 65,
            "persen": 81.5
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 18,
            "maks": 25,
            "persen": 72.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 48,
        "persen": 96.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 19,
            "maks": 20,
            "persen": 95.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 65,
        "persen": 81.2,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 31,
            "maks": 35,
            "persen": 88.6
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 34,
            "maks": 45,
            "persen": 75.6
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Ekonomi (78.1%)",
      "Lingkungan (78.9%)"
    ],
    "targetDimensi": [
      "Ekonomi",
      "Lingkungan"
    ],
    "catatanMusrenbang": "Seluruh 6 dimensi ≥70%, namun masih terdapat 17 indikator berskor 1 (Operasional ketersediaan layanan dokter di desa; Operasional ketersediaan layanan Tenaga Kesehatan di desa) yang perlu diintervensi.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ],
    "namaKepalaDesa": "Definitif",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "Jalan Sekotong Indah Dusun Tawun",
    "alamatDesa": "1",
    "emailDesa": "desasekotongbarat@gmail.com",
    "webDesa": "5",
    "masaJabatanKades": "7 Tahun 4 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 103.46
  },
  {
    "id": "desa-pelangan-sekotong",
    "nama": "Pelangan",
    "tipe": "Desa",
    "kecamatan": "Sekotong",
    "kodeWilayah": "5201072003",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.8157,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 83.7,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 518,
    "indeksKomposit": 16.3,
    "indikator": {
      "infrastruktur": 8.0,
      "pertanianPangan": 15.6,
      "pendidikanSDM": 10.0,
      "kesehatanStunting": 0.0,
      "ekonomiUMKM": 15.6,
      "lingkunganSampah": 32.2
    },
    "dimensi": {
      "layananDasar": {
        "skor": 158,
        "persen": 92.9,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 45,
            "maks": 45,
            "persen": 100.0
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 90,
            "maks": 100,
            "persen": 90.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ],
        "sub": {
          "pendidikan": 45,
          "kesehatan": 90,
          "utilitas": 23
        }
      },
      "sosial": {
        "skor": 40,
        "persen": 47.1,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 34,
            "maks": 65,
            "persen": 52.3
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 6,
            "maks": 20,
            "persen": 30.0
          }
        ]
      },
      "ekonomi": {
        "skor": 135,
        "persen": 84.4,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 32,
            "maks": 40,
            "persen": 80.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 103,
            "maks": 120,
            "persen": 85.8
          }
        ]
      },
      "lingkungan": {
        "skor": 61,
        "persen": 67.8,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 44,
            "maks": 65,
            "persen": 67.7
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 17,
            "maks": 25,
            "persen": 68.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 46,
        "persen": 92.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 19,
            "maks": 20,
            "persen": 95.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 27,
            "maks": 30,
            "persen": 90.0
          }
        ]
      },
      "tataKelola": {
        "skor": 78,
        "persen": 97.5,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 33,
            "maks": 35,
            "persen": 94.3
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 45,
            "maks": 45,
            "persen": 100.0
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Sosial (47.1%)",
      "Lingkungan (67.8%)"
    ],
    "targetDimensi": [
      "Sosial",
      "Lingkungan"
    ],
    "catatanMusrenbang": "Terdapat 23 indikator defisit (Skor 1) dengan sektor kritis: Sosial (47.1%), Lingkungan (67.8%). Prioritas lapangan: Keberadaan Penyedia Transportasi penunjang menuju layanan Nakes; Keberadaan kegiatan sosialisasi dan/atau advokasi terkait program jaminan kesehatan nasional di desa.",
    "rekomendasiKategori": [
      "Keagamaan, Sosial & Budaya",
      "Sampah, Lingkungan & Kebencanaan"
    ],
    "namaKepalaDesa": "AKHMAD ZAINUL HAFIZ,SH",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "Lat-8.783454* Long115.929156*",
    "alamatDesa": "Jl.RAYA PELANGAN- SEKOTONG 83365",
    "emailDesa": "info@pelangan.desa.id",
    "webDesa": "3",
    "masaJabatanKades": "7 TAHUN 2 BULAN",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 103.76
  },
  {
    "id": "desa-buwun-mas-sekotong",
    "nama": "Buwun Mas",
    "tipe": "Desa",
    "kecamatan": "Sekotong",
    "kodeWilayah": "5201072004",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.8283,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 82.53,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 526,
    "indeksKomposit": 17.5,
    "indikator": {
      "infrastruktur": 10.0,
      "pertanianPangan": 25.0,
      "pendidikanSDM": 10.0,
      "kesehatanStunting": 5.6,
      "ekonomiUMKM": 25.0,
      "lingkunganSampah": 24.4
    },
    "dimensi": {
      "layananDasar": {
        "skor": 151,
        "persen": 88.8,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 45,
            "maks": 45,
            "persen": 100.0
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 85,
            "maks": 100,
            "persen": 85.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 21,
            "maks": 25,
            "persen": 84.0
          }
        ],
        "sub": {
          "pendidikan": 45,
          "kesehatan": 85,
          "utilitas": 21
        }
      },
      "sosial": {
        "skor": 74,
        "persen": 87.1,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 63,
            "maks": 65,
            "persen": 96.9
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 11,
            "maks": 20,
            "persen": 55.0
          }
        ]
      },
      "ekonomi": {
        "skor": 120,
        "persen": 75.0,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 32,
            "maks": 40,
            "persen": 80.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 88,
            "maks": 120,
            "persen": 73.3
          }
        ]
      },
      "lingkungan": {
        "skor": 68,
        "persen": 75.6,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 51,
            "maks": 65,
            "persen": 78.5
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 17,
            "maks": 25,
            "persen": 68.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 45,
        "persen": 90.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 16,
            "maks": 20,
            "persen": 80.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 68,
        "persen": 85.0,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 35,
            "maks": 35,
            "persen": 100.0
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 33,
            "maks": 45,
            "persen": 73.3
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Ekonomi (75.0%)",
      "Lingkungan (75.6%)"
    ],
    "targetDimensi": [
      "Ekonomi",
      "Lingkungan"
    ],
    "catatanMusrenbang": "Seluruh 6 dimensi ≥70%, namun masih terdapat 17 indikator berskor 1 (Operasional ketersediaan layanan dokter di desa; Operasional ketersediaan layanan Tenaga Kesehatan di desa) yang perlu diintervensi.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ],
    "namaKepalaDesa": "ROCHIDI,S.IP",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "-8.799859,116.047510",
    "alamatDesa": "Jalan Raya Tanjung Menangsi dusun Sepi, kode pos 83365",
    "emailDesa": "",
    "webDesa": "",
    "masaJabatanKades": "3 TAHUN 6 Bulan",
    "periodeKades": "Periode ke-2",
    "skorBappenasId": 102.32
  },
  {
    "id": "desa-kedaro-sekotong",
    "nama": "Kedaro",
    "tipe": "Desa",
    "kecamatan": "Sekotong",
    "kodeWilayah": "5201072005",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mendesak",
    "skorKemendesa": 0.6898,
    "statusKemendesa": "BERKEMBANG",
    "skorBappenas": 67.89,
    "statusBappenas": "BERKEMBANG",
    "nilaiTotal": 438,
    "indeksKomposit": 32.1,
    "indikator": {
      "infrastruktur": 10.0,
      "pertanianPangan": 42.5,
      "pendidikanSDM": 38.0,
      "kesehatanStunting": 15.6,
      "ekonomiUMKM": 42.5,
      "lingkunganSampah": 35.6
    },
    "dimensi": {
      "layananDasar": {
        "skor": 128,
        "persen": 75.3,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 31,
            "maks": 45,
            "persen": 68.9
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 76,
            "maks": 100,
            "persen": 76.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 21,
            "maks": 25,
            "persen": 84.0
          }
        ],
        "sub": {
          "pendidikan": 31,
          "kesehatan": 76,
          "utilitas": 21
        }
      },
      "sosial": {
        "skor": 60,
        "persen": 70.6,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 55,
            "maks": 65,
            "persen": 84.6
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 5,
            "maks": 20,
            "persen": 25.0
          }
        ]
      },
      "ekonomi": {
        "skor": 92,
        "persen": 57.5,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 20,
            "maks": 40,
            "persen": 50.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 72,
            "maks": 120,
            "persen": 60.0
          }
        ]
      },
      "lingkungan": {
        "skor": 58,
        "persen": 64.4,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 41,
            "maks": 65,
            "persen": 63.1
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 17,
            "maks": 25,
            "persen": 68.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 45,
        "persen": 90.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 16,
            "maks": 20,
            "persen": 80.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 55,
        "persen": 68.8,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 29,
            "maks": 35,
            "persen": 82.9
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 26,
            "maks": 45,
            "persen": 57.8
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Ekonomi (57.5%)",
      "Lingkungan (64.4%)"
    ],
    "targetDimensi": [
      "Ekonomi",
      "Lingkungan"
    ],
    "catatanMusrenbang": "Terdapat 37 indikator defisit (Skor 1) dengan sektor kritis: Ekonomi (57.5%), Lingkungan (64.4%), Tata Kelola (68.8%). Prioritas lapangan: Kemudahan Akses menuju SMP/MTs/Sederajat terdekat di Desa; Kemudahan Akses menuju SMA/SMK/MA/MAK/Sederajat terdekat di Desa.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ],
    "namaKepalaDesa": "H. MUSTAFA",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "Lat-8.766404* Long116.003097*",
    "alamatDesa": "Jln. Lalu Ahmad Sanusi Desa Kedaro",
    "emailDesa": "operator.kedaro@gmail.com",
    "webDesa": "https://kedaro.desa.id",
    "masaJabatanKades": "3 Tahun 4 bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 84.17
  },
  {
    "id": "desa-batu-putih-sekotong",
    "nama": "Batu Putih",
    "tipe": "Desa",
    "kecamatan": "Sekotong",
    "kodeWilayah": "5201072006",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.778,
    "statusKemendesa": "MAJU",
    "skorBappenas": 76.58,
    "statusBappenas": "MAJU",
    "nilaiTotal": 494,
    "indeksKomposit": 23.4,
    "indikator": {
      "infrastruktur": 12.0,
      "pertanianPangan": 28.8,
      "pendidikanSDM": 16.0,
      "kesehatanStunting": 20.0,
      "ekonomiUMKM": 28.8,
      "lingkunganSampah": 31.1
    },
    "dimensi": {
      "layananDasar": {
        "skor": 133,
        "persen": 78.2,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 42,
            "maks": 45,
            "persen": 93.3
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 72,
            "maks": 100,
            "persen": 72.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 19,
            "maks": 25,
            "persen": 76.0
          }
        ],
        "sub": {
          "pendidikan": 42,
          "kesehatan": 72,
          "utilitas": 19
        }
      },
      "sosial": {
        "skor": 75,
        "persen": 88.2,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 62,
            "maks": 65,
            "persen": 95.4
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 13,
            "maks": 20,
            "persen": 65.0
          }
        ]
      },
      "ekonomi": {
        "skor": 114,
        "persen": 71.2,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 32,
            "maks": 40,
            "persen": 80.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 82,
            "maks": 120,
            "persen": 68.3
          }
        ]
      },
      "lingkungan": {
        "skor": 62,
        "persen": 68.9,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 45,
            "maks": 65,
            "persen": 69.2
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 17,
            "maks": 25,
            "persen": 68.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 44,
        "persen": 88.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 16,
            "maks": 20,
            "persen": 80.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 28,
            "maks": 30,
            "persen": 93.3
          }
        ]
      },
      "tataKelola": {
        "skor": 66,
        "persen": 82.5,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 33,
            "maks": 35,
            "persen": 94.3
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 33,
            "maks": 45,
            "persen": 73.3
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (68.9%)",
      "Ekonomi (71.2%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Ekonomi"
    ],
    "catatanMusrenbang": "Terdapat 25 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (68.9%). Prioritas lapangan: Ketersediaan layanan dokter di desa; Operasional ketersediaan layanan dokter di desa.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Pertanian, Peternakan & Pangan"
    ],
    "namaKepalaDesa": "FAJRIN,S.Pd",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "Lat-8.768303* Long115.882969*",
    "alamatDesa": "Jln Raya Bangko -Bangko \nDusun Ketapang, RT 008 RW 004\nDesa Batu Putih Kecamatan Sekotong Kabupaten LOmbok Barat NTB",
    "emailDesa": "desabatuputih2@gmail.com",
    "webDesa": "",
    "masaJabatanKades": "7 Tahun 6 Bulan",
    "periodeKades": "Periode ke-2",
    "skorBappenasId": 94.94
  },
  {
    "id": "desa-gili-gede-indah-sekotong",
    "nama": "Gili Gede Indah",
    "tipe": "Desa",
    "kecamatan": "Sekotong",
    "kodeWilayah": "5201072007",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7307,
    "statusKemendesa": "MAJU",
    "skorBappenas": 70.78,
    "statusBappenas": "MAJU",
    "nilaiTotal": 464,
    "indeksKomposit": 29.2,
    "indikator": {
      "infrastruktur": 14.0,
      "pertanianPangan": 40.0,
      "pendidikanSDM": 32.0,
      "kesehatanStunting": 17.8,
      "ekonomiUMKM": 40.0,
      "lingkunganSampah": 28.9
    },
    "dimensi": {
      "layananDasar": {
        "skor": 125,
        "persen": 73.5,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 34,
            "maks": 45,
            "persen": 75.6
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 74,
            "maks": 100,
            "persen": 74.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 17,
            "maks": 25,
            "persen": 68.0
          }
        ],
        "sub": {
          "pendidikan": 34,
          "kesehatan": 74,
          "utilitas": 17
        }
      },
      "sosial": {
        "skor": 64,
        "persen": 75.3,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 59,
            "maks": 65,
            "persen": 90.8
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 5,
            "maks": 20,
            "persen": 25.0
          }
        ]
      },
      "ekonomi": {
        "skor": 96,
        "persen": 60.0,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 28,
            "maks": 40,
            "persen": 70.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 68,
            "maks": 120,
            "persen": 56.7
          }
        ]
      },
      "lingkungan": {
        "skor": 64,
        "persen": 71.1,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 45,
            "maks": 65,
            "persen": 69.2
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 19,
            "maks": 25,
            "persen": 76.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 43,
        "persen": 86.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 14,
            "maks": 20,
            "persen": 70.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 72,
        "persen": 90.0,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 35,
            "maks": 35,
            "persen": 100.0
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 37,
            "maks": 45,
            "persen": 82.2
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Ekonomi (60.0%)",
      "Lingkungan (71.1%)"
    ],
    "targetDimensi": [
      "Ekonomi",
      "Lingkungan"
    ],
    "catatanMusrenbang": "Terdapat 32 indikator defisit (Skor 1) dengan sektor kritis: Ekonomi (60.0%). Prioritas lapangan: Kemudahan Akses menuju SMA/SMK/MA/MAK/Sederajat terdekat di Desa; Ketersediaan layanan dokter di desa.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ],
    "namaKepalaDesa": "AWALUDIN",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "Lat-8.786243* Long116.069837*",
    "alamatDesa": "JALAN GUNUNG BENDERA NO 10 GILI GEDE",
    "emailDesa": "desagiligedeindah@gmail.com",
    "webDesa": "",
    "masaJabatanKades": "2 Tahun 6 bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 87.75
  },
  {
    "id": "desa-cendi-manik-sekotong",
    "nama": "Cendi Manik",
    "tipe": "Desa",
    "kecamatan": "Sekotong",
    "kodeWilayah": "5201072008",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7953,
    "statusKemendesa": "MAJU",
    "skorBappenas": 79.66,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 505,
    "indeksKomposit": 20.3,
    "indikator": {
      "infrastruktur": 12.0,
      "pertanianPangan": 26.9,
      "pendidikanSDM": 18.0,
      "kesehatanStunting": 4.4,
      "ekonomiUMKM": 26.9,
      "lingkunganSampah": 31.1
    },
    "dimensi": {
      "layananDasar": {
        "skor": 148,
        "persen": 87.1,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 41,
            "maks": 45,
            "persen": 91.1
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 86,
            "maks": 100,
            "persen": 86.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 21,
            "maks": 25,
            "persen": 84.0
          }
        ],
        "sub": {
          "pendidikan": 41,
          "kesehatan": 86,
          "utilitas": 21
        }
      },
      "sosial": {
        "skor": 66,
        "persen": 77.6,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 60,
            "maks": 65,
            "persen": 92.3
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 6,
            "maks": 20,
            "persen": 30.0
          }
        ]
      },
      "ekonomi": {
        "skor": 117,
        "persen": 73.1,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 32,
            "maks": 40,
            "persen": 80.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 85,
            "maks": 120,
            "persen": 70.8
          }
        ]
      },
      "lingkungan": {
        "skor": 62,
        "persen": 68.9,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 43,
            "maks": 65,
            "persen": 66.2
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 19,
            "maks": 25,
            "persen": 76.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 44,
        "persen": 88.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 16,
            "maks": 20,
            "persen": 80.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 28,
            "maks": 30,
            "persen": 93.3
          }
        ]
      },
      "tataKelola": {
        "skor": 68,
        "persen": 85.0,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 35,
            "maks": 35,
            "persen": 100.0
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 33,
            "maks": 45,
            "persen": 73.3
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (68.9%)",
      "Ekonomi (73.1%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Ekonomi"
    ],
    "catatanMusrenbang": "Terdapat 20 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (68.9%). Prioritas lapangan: Operasional ketersediaan layanan dokter di desa; Keberadaan Penyedia Transportasi penunjang menuju layanan Dokter.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Pertanian, Peternakan & Pangan"
    ],
    "namaKepalaDesa": "H.MAHDI",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "Lat-8.786243* Long116.069837*",
    "alamatDesa": "JALAN RAYA SEKOTONG",
    "emailDesa": "desacendimanik@gmail.com",
    "webDesa": "",
    "masaJabatanKades": "0 Tahun 3 bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 98.76
  },
  {
    "id": "desa-taman-baru-sekotong",
    "nama": "Taman Baru",
    "tipe": "Desa",
    "kecamatan": "Sekotong",
    "kodeWilayah": "5201072009",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7638,
    "statusKemendesa": "MAJU",
    "skorBappenas": 77.62,
    "statusBappenas": "MAJU",
    "nilaiTotal": 485,
    "indeksKomposit": 22.4,
    "indikator": {
      "infrastruktur": 22.0,
      "pertanianPangan": 25.6,
      "pendidikanSDM": 14.0,
      "kesehatanStunting": 8.9,
      "ekonomiUMKM": 25.6,
      "lingkunganSampah": 48.9
    },
    "dimensi": {
      "layananDasar": {
        "skor": 146,
        "persen": 85.9,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 43,
            "maks": 45,
            "persen": 95.6
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 82,
            "maks": 100,
            "persen": 82.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 21,
            "maks": 25,
            "persen": 84.0
          }
        ],
        "sub": {
          "pendidikan": 43,
          "kesehatan": 82,
          "utilitas": 21
        }
      },
      "sosial": {
        "skor": 71,
        "persen": 83.5,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 63,
            "maks": 65,
            "persen": 96.9
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 8,
            "maks": 20,
            "persen": 40.0
          }
        ]
      },
      "ekonomi": {
        "skor": 119,
        "persen": 74.4,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 36,
            "maks": 40,
            "persen": 90.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 83,
            "maks": 120,
            "persen": 69.2
          }
        ]
      },
      "lingkungan": {
        "skor": 46,
        "persen": 51.1,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 35,
            "maks": 65,
            "persen": 53.8
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 11,
            "maks": 25,
            "persen": 44.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 39,
        "persen": 78.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 17,
            "maks": 20,
            "persen": 85.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 22,
            "maks": 30,
            "persen": 73.3
          }
        ]
      },
      "tataKelola": {
        "skor": 64,
        "persen": 80.0,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 32,
            "maks": 35,
            "persen": 91.4
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 32,
            "maks": 45,
            "persen": 71.1
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (51.1%)",
      "Ekonomi (74.4%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Ekonomi"
    ],
    "catatanMusrenbang": "Terdapat 27 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (51.1%). Prioritas lapangan: Ketersediaan layanan dokter di desa; Operasional ketersediaan layanan dokter di desa.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Pertanian, Peternakan & Pangan"
    ],
    "namaKepalaDesa": "HAJI PADILLAH",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "-8.799859,116.047510",
    "alamatDesa": "Jalan Raya Batu Bong No 13 Desa Taman Baru, Kecamatan Sekotong, Kabupaten Lombok Barat",
    "emailDesa": "desatamanbaru@gmail.com",
    "webDesa": "5",
    "masaJabatanKades": "6 TAHUN 0 BULAN",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 96.23
  },
  {
    "id": "desa-bengkel-labuapi",
    "nama": "Bengkel",
    "tipe": "Desa",
    "kecamatan": "Labuapi",
    "kodeWilayah": "5201082001",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.8504,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 84.9,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 540,
    "indeksKomposit": 15.1,
    "indikator": {
      "infrastruktur": 0.0,
      "pertanianPangan": 19.4,
      "pendidikanSDM": 12.0,
      "kesehatanStunting": 6.7,
      "ekonomiUMKM": 19.4,
      "lingkunganSampah": 24.4
    },
    "dimensi": {
      "layananDasar": {
        "skor": 153,
        "persen": 90.0,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 44,
            "maks": 45,
            "persen": 97.8
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 84,
            "maks": 100,
            "persen": 84.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ],
        "sub": {
          "pendidikan": 44,
          "kesehatan": 84,
          "utilitas": 25
        }
      },
      "sosial": {
        "skor": 73,
        "persen": 85.9,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 58,
            "maks": 65,
            "persen": 89.2
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 15,
            "maks": 20,
            "persen": 75.0
          }
        ]
      },
      "ekonomi": {
        "skor": 129,
        "persen": 80.6,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 24,
            "maks": 40,
            "persen": 60.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 105,
            "maks": 120,
            "persen": 87.5
          }
        ]
      },
      "lingkungan": {
        "skor": 68,
        "persen": 75.6,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 43,
            "maks": 65,
            "persen": 66.2
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 50,
        "persen": 100.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 30,
            "maks": 30,
            "persen": 100.0
          }
        ]
      },
      "tataKelola": {
        "skor": 67,
        "persen": 83.8,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 34,
            "maks": 35,
            "persen": 97.1
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 33,
            "maks": 45,
            "persen": 73.3
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (75.6%)",
      "Ekonomi (80.6%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Ekonomi"
    ],
    "catatanMusrenbang": "Seluruh 6 dimensi ≥70%, namun masih terdapat 18 indikator berskor 1 (Ketersediaan layanan dokter di desa; Operasional ketersediaan layanan dokter di desa) yang perlu diintervensi.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Pertanian, Peternakan & Pangan"
    ],
    "namaKepalaDesa": "H. MUHAMAD IDRUS, SP",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8.61642705S 116.114904762E",
    "alamatDesa": "Jln. Tgh. Moh. Saleh Hambali Bengkel, Desa Bengkel, Kec. Labuapi, Kab. Lombok Barat, Nusa Tenggara Barat",
    "emailDesa": "pemerintahdesabengkel@gmail.com",
    "webDesa": "https://pemdesbengkel.com/auth",
    "masaJabatanKades": "6 tahun 5 Bulan",
    "periodeKades": "Periode ke-3",
    "skorBappenasId": 105.25
  },
  {
    "id": "desa-merembu-labuapi",
    "nama": "Merembu",
    "tipe": "Desa",
    "kecamatan": "Labuapi",
    "kodeWilayah": "5201082002",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7386,
    "statusKemendesa": "MAJU",
    "skorBappenas": 74.47,
    "statusBappenas": "MAJU",
    "nilaiTotal": 469,
    "indeksKomposit": 25.5,
    "indikator": {
      "infrastruktur": 20.0,
      "pertanianPangan": 33.8,
      "pendidikanSDM": 22.0,
      "kesehatanStunting": 3.3,
      "ekonomiUMKM": 33.8,
      "lingkunganSampah": 52.2
    },
    "dimensi": {
      "layananDasar": {
        "skor": 145,
        "persen": 85.3,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 39,
            "maks": 45,
            "persen": 86.7
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 87,
            "maks": 100,
            "persen": 87.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 19,
            "maks": 25,
            "persen": 76.0
          }
        ],
        "sub": {
          "pendidikan": 39,
          "kesehatan": 87,
          "utilitas": 19
        }
      },
      "sosial": {
        "skor": 69,
        "persen": 81.2,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 54,
            "maks": 65,
            "persen": 83.1
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 15,
            "maks": 20,
            "persen": 75.0
          }
        ]
      },
      "ekonomi": {
        "skor": 106,
        "persen": 66.2,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 30,
            "maks": 40,
            "persen": 75.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 76,
            "maks": 120,
            "persen": 63.3
          }
        ]
      },
      "lingkungan": {
        "skor": 43,
        "persen": 47.8,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 37,
            "maks": 65,
            "persen": 56.9
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 6,
            "maks": 25,
            "persen": 24.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 40,
        "persen": 80.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 19,
            "maks": 20,
            "persen": 95.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 21,
            "maks": 30,
            "persen": 70.0
          }
        ]
      },
      "tataKelola": {
        "skor": 66,
        "persen": 82.5,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 34,
            "maks": 35,
            "persen": 97.1
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 32,
            "maks": 45,
            "persen": 71.1
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (47.8%)",
      "Ekonomi (66.2%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Ekonomi"
    ],
    "catatanMusrenbang": "Terdapat 30 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (47.8%), Ekonomi (66.2%). Prioritas lapangan: Operasional ketersediaan layanan Tenaga Kesehatan di desa; Ketersediaan Air Minum untuk warga desa.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Pertanian, Peternakan & Pangan"
    ],
    "namaKepalaDesa": "H.Muhazzab",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "-8.617533S 116.157903E",
    "alamatDesa": "Jalan Raya Merembu",
    "emailDesa": "mrb.mhzb@gmail.com",
    "webDesa": "",
    "masaJabatanKades": "1 Tahun 6 Bulan",
    "periodeKades": "Periode ke-3",
    "skorBappenasId": 92.32
  },
  {
    "id": "desa-bagik-polak-labuapi",
    "nama": "Bagik Polak",
    "tipe": "Desa",
    "kecamatan": "Labuapi",
    "kodeWilayah": "5201082003",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7575,
    "statusKemendesa": "MAJU",
    "skorBappenas": 76.25,
    "statusBappenas": "MAJU",
    "nilaiTotal": 481,
    "indeksKomposit": 23.8,
    "indikator": {
      "infrastruktur": 2.0,
      "pertanianPangan": 38.1,
      "pendidikanSDM": 12.0,
      "kesehatanStunting": -1.1,
      "ekonomiUMKM": 38.1,
      "lingkunganSampah": 42.2
    },
    "dimensi": {
      "layananDasar": {
        "skor": 158,
        "persen": 92.9,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 44,
            "maks": 45,
            "persen": 97.8
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 91,
            "maks": 100,
            "persen": 91.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ],
        "sub": {
          "pendidikan": 44,
          "kesehatan": 91,
          "utilitas": 23
        }
      },
      "sosial": {
        "skor": 71,
        "persen": 83.5,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 57,
            "maks": 65,
            "persen": 87.7
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 14,
            "maks": 20,
            "persen": 70.0
          }
        ]
      },
      "ekonomi": {
        "skor": 99,
        "persen": 61.9,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 16,
            "maks": 40,
            "persen": 40.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 83,
            "maks": 120,
            "persen": 69.2
          }
        ]
      },
      "lingkungan": {
        "skor": 52,
        "persen": 57.8,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 45,
            "maks": 65,
            "persen": 69.2
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 7,
            "maks": 25,
            "persen": 28.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 19,
            "maks": 20,
            "persen": 95.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 30,
            "maks": 30,
            "persen": 100.0
          }
        ]
      },
      "tataKelola": {
        "skor": 52,
        "persen": 65.0,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 31,
            "maks": 35,
            "persen": 88.6
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 21,
            "maks": 45,
            "persen": 46.7
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (57.8%)",
      "Ekonomi (61.9%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Ekonomi"
    ],
    "catatanMusrenbang": "Terdapat 28 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (57.8%), Ekonomi (61.9%), Tata Kelola (65.0%). Prioritas lapangan: Operasional ketersediaan layanan Tenaga Kesehatan di desa; Frekuensi Aktivitas Kegiatan Olahraga dilakukan dalam satu bulan.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Pertanian, Peternakan & Pangan"
    ],
    "namaKepalaDesa": "TAHZIB",
    "statusKepalaDesa": "Penjabat",
    "koordinatDesa": "8.62639S 116.13610E",
    "alamatDesa": "JALAN RADEN ABDURRAHMAN DESA BAGIK POLAK KECAMATAN LABUAPI KABUPATEN LOMBOK BARAT NUSA TENGGARA BARAT",
    "emailDesa": "",
    "webDesa": "bagikpolak2024@gmail.com",
    "masaJabatanKades": "10 BULAN",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 94.53
  },
  {
    "id": "desa-telagawaru-labuapi",
    "nama": "Telagawaru",
    "tipe": "Desa",
    "kecamatan": "Labuapi",
    "kodeWilayah": "5201082004",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.8646,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 87.08,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 549,
    "indeksKomposit": 12.9,
    "indikator": {
      "infrastruktur": 0.0,
      "pertanianPangan": 18.1,
      "pendidikanSDM": 10.0,
      "kesehatanStunting": -5.6,
      "ekonomiUMKM": 18.1,
      "lingkunganSampah": 31.1
    },
    "dimensi": {
      "layananDasar": {
        "skor": 163,
        "persen": 95.9,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 45,
            "maks": 45,
            "persen": 100.0
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 95,
            "maks": 100,
            "persen": 95.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ],
        "sub": {
          "pendidikan": 45,
          "kesehatan": 95,
          "utilitas": 23
        }
      },
      "sosial": {
        "skor": 72,
        "persen": 84.7,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 58,
            "maks": 65,
            "persen": 89.2
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 14,
            "maks": 20,
            "persen": 70.0
          }
        ]
      },
      "ekonomi": {
        "skor": 131,
        "persen": 81.9,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 32,
            "maks": 40,
            "persen": 80.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 99,
            "maks": 120,
            "persen": 82.5
          }
        ]
      },
      "lingkungan": {
        "skor": 62,
        "persen": 68.9,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 37,
            "maks": 65,
            "persen": 56.9
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 50,
        "persen": 100.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 30,
            "maks": 30,
            "persen": 100.0
          }
        ]
      },
      "tataKelola": {
        "skor": 71,
        "persen": 88.8,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 34,
            "maks": 35,
            "persen": 97.1
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 37,
            "maks": 45,
            "persen": 82.2
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (68.9%)",
      "Ekonomi (81.9%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Ekonomi"
    ],
    "catatanMusrenbang": "Terdapat 17 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (68.9%). Prioritas lapangan: Keberadaan ruang publik terbuka/keadaan sebagian besar Fasilitas Ruang Publik Terbuka di Desa; Kerjasama desa dengan desa lainnya.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Pertanian, Peternakan & Pangan"
    ],
    "namaKepalaDesa": "H. HOTAMAN",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "-8.63787, 116.11785",
    "alamatDesa": "JLN. GUNUNG PENGSONG DESA TELAGAWARU KEC. LABUAPI KAB. LOMBOK BARAT",
    "emailDesa": "telagawaru@gmail.com",
    "webDesa": "https://telagawaru.desa.id",
    "masaJabatanKades": "7 Tahun 7 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 107.95
  },
  {
    "id": "desa-perampuan-labuapi",
    "nama": "Perampuan",
    "tipe": "Desa",
    "kecamatan": "Labuapi",
    "kodeWilayah": "5201082005",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.8173,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 83.84,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 519,
    "indeksKomposit": 16.2,
    "indikator": {
      "infrastruktur": 6.0,
      "pertanianPangan": 20.6,
      "pendidikanSDM": 10.0,
      "kesehatanStunting": -5.6,
      "ekonomiUMKM": 20.6,
      "lingkunganSampah": 31.1
    },
    "dimensi": {
      "layananDasar": {
        "skor": 165,
        "persen": 97.1,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 45,
            "maks": 45,
            "persen": 100.0
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 95,
            "maks": 100,
            "persen": 95.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ],
        "sub": {
          "pendidikan": 45,
          "kesehatan": 95,
          "utilitas": 25
        }
      },
      "sosial": {
        "skor": 52,
        "persen": 61.2,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 40,
            "maks": 65,
            "persen": 61.5
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 12,
            "maks": 20,
            "persen": 60.0
          }
        ]
      },
      "ekonomi": {
        "skor": 127,
        "persen": 79.4,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 28,
            "maks": 40,
            "persen": 70.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 99,
            "maks": 120,
            "persen": 82.5
          }
        ]
      },
      "lingkungan": {
        "skor": 62,
        "persen": 68.9,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 41,
            "maks": 65,
            "persen": 63.1
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 21,
            "maks": 25,
            "persen": 84.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 47,
        "persen": 94.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 18,
            "maks": 20,
            "persen": 90.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 66,
        "persen": 82.5,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 35,
            "maks": 35,
            "persen": 100.0
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 31,
            "maks": 45,
            "persen": 68.9
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Sosial (61.2%)",
      "Lingkungan (68.9%)"
    ],
    "targetDimensi": [
      "Sosial",
      "Lingkungan"
    ],
    "catatanMusrenbang": "Terdapat 23 indikator defisit (Skor 1) dengan sektor kritis: Sosial (61.2%), Lingkungan (68.9%). Prioritas lapangan: Operasional ketersediaan layanan dokter di desa; Penyelesaian Konflik secara damai.",
    "rekomendasiKategori": [
      "Keagamaan, Sosial & Budaya",
      "Sampah, Lingkungan & Kebencanaan"
    ],
    "namaKepalaDesa": "H. M. ZUBAIDI, S.Ag., M.Pd.I.",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8.539100,116.087110",
    "alamatDesa": "Jln. Raya Pengsong No. 21, Desa Perampuan, Kec. Labuapi, Kab. Lombok Barat",
    "emailDesa": "desaperampuan1@gmail.com",
    "webDesa": "perampuan.desa.id",
    "masaJabatanKades": "5 Tahun 0 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 103.94
  },
  {
    "id": "desa-bajur-labuapi",
    "nama": "Bajur",
    "tipe": "Desa",
    "kecamatan": "Labuapi",
    "kodeWilayah": "5201082006",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.874,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 89.38,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 555,
    "indeksKomposit": 10.6,
    "indikator": {
      "infrastruktur": 0.0,
      "pertanianPangan": 5.6,
      "pendidikanSDM": 18.0,
      "kesehatanStunting": -3.3,
      "ekonomiUMKM": 5.6,
      "lingkunganSampah": 23.3
    },
    "dimensi": {
      "layananDasar": {
        "skor": 159,
        "persen": 93.5,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 41,
            "maks": 45,
            "persen": 91.1
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 93,
            "maks": 100,
            "persen": 93.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ],
        "sub": {
          "pendidikan": 41,
          "kesehatan": 93,
          "utilitas": 25
        }
      },
      "sosial": {
        "skor": 77,
        "persen": 90.6,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 62,
            "maks": 65,
            "persen": 95.4
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 15,
            "maks": 20,
            "persen": 75.0
          }
        ]
      },
      "ekonomi": {
        "skor": 151,
        "persen": 94.4,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 40,
            "maks": 40,
            "persen": 100.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 111,
            "maks": 120,
            "persen": 92.5
          }
        ]
      },
      "lingkungan": {
        "skor": 69,
        "persen": 76.7,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 46,
            "maks": 65,
            "persen": 70.8
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 50,
        "persen": 100.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 30,
            "maks": 30,
            "persen": 100.0
          }
        ]
      },
      "tataKelola": {
        "skor": 49,
        "persen": 61.3,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 31,
            "maks": 35,
            "persen": 88.6
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 18,
            "maks": 45,
            "persen": 40.0
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Tata Kelola (61.3%)",
      "Lingkungan (76.7%)"
    ],
    "targetDimensi": [
      "Tata Kelola",
      "Lingkungan"
    ],
    "catatanMusrenbang": "Terdapat 11 indikator defisit (Skor 1) dengan sektor kritis: Tata Kelola (61.3%). Prioritas lapangan: Ketersediaan Lembaga Ekonomi KUD; Terdapat upaya menjaga/mempertahankan/melestarikan kearifan lingkungan berupa atraksi alam/sumberdaya alam/keindahan alam yang ada di desa.",
    "rekomendasiKategori": [
      "Pemerintahan Desa & Digitalisasi",
      "Sampah, Lingkungan & Kebencanaan"
    ],
    "namaKepalaDesa": "AHMAD HUSNI",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8.620569999999999S 116.10755833333333E",
    "alamatDesa": "Jalan Rengganis Raya Desa Bajur",
    "emailDesa": "kandesbajur@gmail.com",
    "webDesa": "pemerintahdesabajur.com",
    "masaJabatanKades": "14 Tahun 5 Bulan",
    "periodeKades": "Periode ke-2",
    "skorBappenasId": 110.81
  },
  {
    "id": "desa-terong-tawah-labuapi",
    "nama": "Terong Tawah",
    "tipe": "Desa",
    "kecamatan": "Labuapi",
    "kodeWilayah": "5201082007",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7213,
    "statusKemendesa": "MAJU",
    "skorBappenas": 71.71,
    "statusBappenas": "MAJU",
    "nilaiTotal": 458,
    "indeksKomposit": 28.3,
    "indikator": {
      "infrastruktur": 8.0,
      "pertanianPangan": 45.0,
      "pendidikanSDM": 16.0,
      "kesehatanStunting": 4.4,
      "ekonomiUMKM": 45.0,
      "lingkunganSampah": 34.4
    },
    "dimensi": {
      "layananDasar": {
        "skor": 147,
        "persen": 86.5,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 42,
            "maks": 45,
            "persen": 93.3
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 86,
            "maks": 100,
            "persen": 86.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 19,
            "maks": 25,
            "persen": 76.0
          }
        ],
        "sub": {
          "pendidikan": 42,
          "kesehatan": 86,
          "utilitas": 19
        }
      },
      "sosial": {
        "skor": 66,
        "persen": 77.6,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 55,
            "maks": 65,
            "persen": 84.6
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 11,
            "maks": 20,
            "persen": 55.0
          }
        ]
      },
      "ekonomi": {
        "skor": 88,
        "persen": 55.0,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 26,
            "maks": 40,
            "persen": 65.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 62,
            "maks": 120,
            "persen": 51.7
          }
        ]
      },
      "lingkungan": {
        "skor": 59,
        "persen": 65.6,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 46,
            "maks": 65,
            "persen": 70.8
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 13,
            "maks": 25,
            "persen": 52.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 46,
        "persen": 92.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 19,
            "maks": 20,
            "persen": 95.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 27,
            "maks": 30,
            "persen": 90.0
          }
        ]
      },
      "tataKelola": {
        "skor": 52,
        "persen": 65.0,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 31,
            "maks": 35,
            "persen": 88.6
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 21,
            "maks": 45,
            "persen": 46.7
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Ekonomi (55.0%)",
      "Tata Kelola (65.0%)"
    ],
    "targetDimensi": [
      "Ekonomi",
      "Tata Kelola"
    ],
    "catatanMusrenbang": "Terdapat 33 indikator defisit (Skor 1) dengan sektor kritis: Ekonomi (55.0%), Tata Kelola (65.0%), Lingkungan (65.6%). Prioritas lapangan: Operasional ketersediaan layanan dokter di desa; Operasional ketersediaan layanan Bidan di desa.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Pemerintahan Desa & Digitalisasi"
    ],
    "namaKepalaDesa": "MUHAMMAD WARIS ZAINAL, S.Pd",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "-8.62795, 116.10943",
    "alamatDesa": "Jln TGH Mansyur No.     Terong Tawah Kecamatan Labuapi Kabupaten Lombok Barat",
    "emailDesa": "desaterongtawah12@gmail.com",
    "webDesa": "desaterongtawah.id",
    "masaJabatanKades": "8 Tahun",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 88.9
  },
  {
    "id": "desa-kuranji-labuapi",
    "nama": "Kuranji",
    "tipe": "Desa",
    "kecamatan": "Labuapi",
    "kodeWilayah": "5201082008",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.8079,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 78.83,
    "statusBappenas": "MAJU",
    "nilaiTotal": 513,
    "indeksKomposit": 21.2,
    "indikator": {
      "infrastruktur": 0.0,
      "pertanianPangan": 30.6,
      "pendidikanSDM": 24.0,
      "kesehatanStunting": 13.3,
      "ekonomiUMKM": 30.6,
      "lingkunganSampah": 11.1
    },
    "dimensi": {
      "layananDasar": {
        "skor": 139,
        "persen": 81.8,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 38,
            "maks": 45,
            "persen": 84.4
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 78,
            "maks": 100,
            "persen": 78.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ],
        "sub": {
          "pendidikan": 38,
          "kesehatan": 78,
          "utilitas": 23
        }
      },
      "sosial": {
        "skor": 66,
        "persen": 77.6,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 59,
            "maks": 65,
            "persen": 90.8
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 7,
            "maks": 20,
            "persen": 35.0
          }
        ]
      },
      "ekonomi": {
        "skor": 111,
        "persen": 69.4,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 32,
            "maks": 40,
            "persen": 80.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 79,
            "maks": 120,
            "persen": 65.8
          }
        ]
      },
      "lingkungan": {
        "skor": 80,
        "persen": 88.9,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 55,
            "maks": 65,
            "persen": 84.6
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 50,
        "persen": 100.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 30,
            "maks": 30,
            "persen": 100.0
          }
        ]
      },
      "tataKelola": {
        "skor": 67,
        "persen": 83.8,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 34,
            "maks": 35,
            "persen": 97.1
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 33,
            "maks": 45,
            "persen": 73.3
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Ekonomi (69.4%)",
      "Sosial (77.6%)"
    ],
    "targetDimensi": [
      "Ekonomi",
      "Sosial"
    ],
    "catatanMusrenbang": "Terdapat 23 indikator defisit (Skor 1) dengan sektor kritis: Ekonomi (69.4%). Prioritas lapangan: Ketersediaan layanan dokter di desa; Operasional ketersediaan layanan dokter di desa.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Keagamaan, Sosial & Budaya"
    ],
    "namaKepalaDesa": "JUMAWAL",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8.644112 116.085371",
    "alamatDesa": "JL TGH H ISMAIL NO 1",
    "emailDesa": "kuranjidesa89@gmail.com",
    "webDesa": "kuranji.desa.com",
    "masaJabatanKades": "3 Tahun 2 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 97.73
  },
  {
    "id": "desa-karang-bongkot-labuapi",
    "nama": "Karang Bongkot",
    "tipe": "Desa",
    "kecamatan": "Labuapi",
    "kodeWilayah": "5201082009",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7811,
    "statusKemendesa": "MAJU",
    "skorBappenas": 78.28,
    "statusBappenas": "MAJU",
    "nilaiTotal": 496,
    "indeksKomposit": 21.7,
    "indikator": {
      "infrastruktur": 6.0,
      "pertanianPangan": 33.8,
      "pendidikanSDM": 14.0,
      "kesehatanStunting": -6.7,
      "ekonomiUMKM": 33.8,
      "lingkunganSampah": 40.0
    },
    "dimensi": {
      "layananDasar": {
        "skor": 156,
        "persen": 91.8,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 43,
            "maks": 45,
            "persen": 95.6
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 96,
            "maks": 100,
            "persen": 96.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 17,
            "maks": 25,
            "persen": 68.0
          }
        ],
        "sub": {
          "pendidikan": 43,
          "kesehatan": 96,
          "utilitas": 17
        }
      },
      "sosial": {
        "skor": 59,
        "persen": 69.4,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 53,
            "maks": 65,
            "persen": 81.5
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 6,
            "maks": 20,
            "persen": 30.0
          }
        ]
      },
      "ekonomi": {
        "skor": 106,
        "persen": 66.2,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 16,
            "maks": 40,
            "persen": 40.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 90,
            "maks": 120,
            "persen": 75.0
          }
        ]
      },
      "lingkungan": {
        "skor": 54,
        "persen": 60.0,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 45,
            "maks": 65,
            "persen": 69.2
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 9,
            "maks": 25,
            "persen": 36.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 47,
        "persen": 94.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 18,
            "maks": 20,
            "persen": 90.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 74,
        "persen": 92.5,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 34,
            "maks": 35,
            "persen": 97.1
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 40,
            "maks": 45,
            "persen": 88.9
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (60.0%)",
      "Ekonomi (66.2%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Ekonomi"
    ],
    "catatanMusrenbang": "Terdapat 26 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (60.0%), Ekonomi (66.2%), Sosial (69.4%). Prioritas lapangan: Operasional Ketersediaan Air Minum di Desa dalam seminggu; Keberadaan Taman Bacaan Masyarakat/ Perpustakaan Desa.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Pertanian, Peternakan & Pangan"
    ],
    "namaKepalaDesa": "MULDAN, SH",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8Â°38â€²31.200â€³S 116Â°5â€²52.800â€³E",
    "alamatDesa": "Jln Gunug Pengsong No. 1",
    "emailDesa": "karangbongkot16@gmail.com",
    "webDesa": "Karangbongkot.desa.id",
    "masaJabatanKades": "1 Tahun 6 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 97.05
  },
  {
    "id": "desa-labuapi-labuapi",
    "nama": "Labuapi",
    "tipe": "Desa",
    "kecamatan": "Labuapi",
    "kodeWilayah": "5201082010",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.8693,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 86.94,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 552,
    "indeksKomposit": 13.1,
    "indikator": {
      "infrastruktur": 0.0,
      "pertanianPangan": 21.2,
      "pendidikanSDM": 12.0,
      "kesehatanStunting": -4.4,
      "ekonomiUMKM": 21.2,
      "lingkunganSampah": 24.4
    },
    "dimensi": {
      "layananDasar": {
        "skor": 163,
        "persen": 95.9,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 44,
            "maks": 45,
            "persen": 97.8
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 94,
            "maks": 100,
            "persen": 94.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ],
        "sub": {
          "pendidikan": 44,
          "kesehatan": 94,
          "utilitas": 25
        }
      },
      "sosial": {
        "skor": 70,
        "persen": 82.4,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 60,
            "maks": 65,
            "persen": 92.3
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 10,
            "maks": 20,
            "persen": 50.0
          }
        ]
      },
      "ekonomi": {
        "skor": 126,
        "persen": 78.8,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 28,
            "maks": 40,
            "persen": 70.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 98,
            "maks": 120,
            "persen": 81.7
          }
        ]
      },
      "lingkungan": {
        "skor": 68,
        "persen": 75.6,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 43,
            "maks": 65,
            "persen": 66.2
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 50,
        "persen": 100.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 30,
            "maks": 30,
            "persen": 100.0
          }
        ]
      },
      "tataKelola": {
        "skor": 75,
        "persen": 93.8,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 35,
            "maks": 35,
            "persen": 100.0
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 40,
            "maks": 45,
            "persen": 88.9
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (75.6%)",
      "Ekonomi (78.8%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Ekonomi"
    ],
    "catatanMusrenbang": "Seluruh 6 dimensi ≥70%, namun masih terdapat 17 indikator berskor 1 (Keberadaan Fasilitas Puskesmas Pembantu (Pustu) termasuk Poskesdes/Polindes di Desa; Keberadaan Taman Bacaan Masyarakat/ Perpustakaan Desa) yang perlu diintervensi.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Pertanian, Peternakan & Pangan"
    ],
    "namaKepalaDesa": "H. AMANAH, S.H",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8.373621S 116, 72768E",
    "alamatDesa": "Jln Permas Indah Labuapi Utara Desa Labuapi",
    "emailDesa": "pemerintahandesalabuapi@gmail.com",
    "webDesa": "pemdeslabuapi.com",
    "masaJabatanKades": "4 tahun 11 bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 107.78
  },
  {
    "id": "desa-bagik-polak-barat-labuapi",
    "nama": "Bagik Polak Barat",
    "tipe": "Desa",
    "kecamatan": "Labuapi",
    "kodeWilayah": "5201082011",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7843,
    "statusKemendesa": "MAJU",
    "skorBappenas": 80.31,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 498,
    "indeksKomposit": 19.7,
    "indikator": {
      "infrastruktur": 4.0,
      "pertanianPangan": 16.9,
      "pendidikanSDM": 16.0,
      "kesehatanStunting": 8.9,
      "ekonomiUMKM": 16.9,
      "lingkunganSampah": 48.9
    },
    "dimensi": {
      "layananDasar": {
        "skor": 149,
        "persen": 87.6,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 42,
            "maks": 45,
            "persen": 93.3
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 82,
            "maks": 100,
            "persen": 82.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ],
        "sub": {
          "pendidikan": 42,
          "kesehatan": 82,
          "utilitas": 25
        }
      },
      "sosial": {
        "skor": 63,
        "persen": 74.1,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 58,
            "maks": 65,
            "persen": 89.2
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 5,
            "maks": 20,
            "persen": 25.0
          }
        ]
      },
      "ekonomi": {
        "skor": 133,
        "persen": 83.1,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 32,
            "maks": 40,
            "persen": 80.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 101,
            "maks": 120,
            "persen": 84.2
          }
        ]
      },
      "lingkungan": {
        "skor": 46,
        "persen": 51.1,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 37,
            "maks": 65,
            "persen": 56.9
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 9,
            "maks": 25,
            "persen": 36.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 48,
        "persen": 96.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 19,
            "maks": 20,
            "persen": 95.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 59,
        "persen": 73.8,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 32,
            "maks": 35,
            "persen": 91.4
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 27,
            "maks": 45,
            "persen": 60.0
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (51.1%)",
      "Tata Kelola (73.8%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Tata Kelola"
    ],
    "catatanMusrenbang": "Terdapat 23 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (51.1%). Prioritas lapangan: Operasional ketersediaan layanan Tenaga Kesehatan di desa; Keberadaan Taman Bacaan Masyarakat/ Perpustakaan Desa.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Pemerintahan Desa & Digitalisasi"
    ],
    "namaKepalaDesa": "Jauhari Ma'mun, S.Pd.I",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8.6375771S 116.27967E",
    "alamatDesa": "Jl. Nurul Karomah Dusun Jogot Selatan",
    "emailDesa": "desabagikpolakbarat@gmail.com",
    "webDesa": "www.bagikpolakbarat.desa.id",
    "masaJabatanKades": "6 Tahun 3 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 99.57
  },
  {
    "id": "desa-kuranji-dalang-labuapi",
    "nama": "Kuranji Dalang",
    "tipe": "Desa",
    "kecamatan": "Labuapi",
    "kodeWilayah": "5201082012",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7748,
    "statusKemendesa": "MAJU",
    "skorBappenas": 77.84,
    "statusBappenas": "MAJU",
    "nilaiTotal": 492,
    "indeksKomposit": 22.2,
    "indikator": {
      "infrastruktur": 6.0,
      "pertanianPangan": 31.2,
      "pendidikanSDM": 34.0,
      "kesehatanStunting": -5.6,
      "ekonomiUMKM": 31.2,
      "lingkunganSampah": 31.1
    },
    "dimensi": {
      "layananDasar": {
        "skor": 151,
        "persen": 88.8,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 33,
            "maks": 45,
            "persen": 73.3
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 95,
            "maks": 100,
            "persen": 95.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ],
        "sub": {
          "pendidikan": 33,
          "kesehatan": 95,
          "utilitas": 23
        }
      },
      "sosial": {
        "skor": 64,
        "persen": 75.3,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 59,
            "maks": 65,
            "persen": 90.8
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 5,
            "maks": 20,
            "persen": 25.0
          }
        ]
      },
      "ekonomi": {
        "skor": 110,
        "persen": 68.8,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 32,
            "maks": 40,
            "persen": 80.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 78,
            "maks": 120,
            "persen": 65.0
          }
        ]
      },
      "lingkungan": {
        "skor": 62,
        "persen": 68.9,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 41,
            "maks": 65,
            "persen": 63.1
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 21,
            "maks": 25,
            "persen": 84.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 47,
        "persen": 94.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 17,
            "maks": 20,
            "persen": 85.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 30,
            "maks": 30,
            "persen": 100.0
          }
        ]
      },
      "tataKelola": {
        "skor": 58,
        "persen": 72.5,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 32,
            "maks": 35,
            "persen": 91.4
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 26,
            "maks": 45,
            "persen": 57.8
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Ekonomi (68.8%)",
      "Lingkungan (68.9%)"
    ],
    "targetDimensi": [
      "Ekonomi",
      "Lingkungan"
    ],
    "catatanMusrenbang": "Terdapat 25 indikator defisit (Skor 1) dengan sektor kritis: Ekonomi (68.8%), Lingkungan (68.9%). Prioritas lapangan: Keberadaan Taman Bacaan Masyarakat/ Perpustakaan Desa; Operasional Taman Bacaan Masyarakat/ Perpustakaan Desa.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ],
    "namaKepalaDesa": "SIDIK",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8.630720S,116.081697E",
    "alamatDesa": "JLN TGH IHSAN ISMAIL NO 01 KURANJI DALANG",
    "emailDesa": "desakuranjidalang01@gmail.com",
    "webDesa": "DESA KURANJI DALANG",
    "masaJabatanKades": "6 Tahun 11 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 96.5
  },
  {
    "id": "desa-gunungsari-gunungsari",
    "nama": "Gunungsari",
    "tipe": "Desa",
    "kecamatan": "Gunungsari",
    "kodeWilayah": "5201092001",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.9039,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 91.51,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 574,
    "indeksKomposit": 8.5,
    "indikator": {
      "infrastruktur": 0.0,
      "pertanianPangan": 6.2,
      "pendidikanSDM": 10.0,
      "kesehatanStunting": -1.1,
      "ekonomiUMKM": 6.2,
      "lingkunganSampah": 13.3
    },
    "dimensi": {
      "layananDasar": {
        "skor": 161,
        "persen": 94.7,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 45,
            "maks": 45,
            "persen": 100.0
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 91,
            "maks": 100,
            "persen": 91.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ],
        "sub": {
          "pendidikan": 45,
          "kesehatan": 91,
          "utilitas": 25
        }
      },
      "sosial": {
        "skor": 70,
        "persen": 82.4,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 61,
            "maks": 65,
            "persen": 93.8
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 9,
            "maks": 20,
            "persen": 45.0
          }
        ]
      },
      "ekonomi": {
        "skor": 150,
        "persen": 93.8,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 36,
            "maks": 40,
            "persen": 90.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 114,
            "maks": 120,
            "persen": 95.0
          }
        ]
      },
      "lingkungan": {
        "skor": 78,
        "persen": 86.7,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 61,
            "maks": 65,
            "persen": 93.8
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 17,
            "maks": 25,
            "persen": 68.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 50,
        "persen": 100.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 30,
            "maks": 30,
            "persen": 100.0
          }
        ]
      },
      "tataKelola": {
        "skor": 65,
        "persen": 81.2,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 33,
            "maks": 35,
            "persen": 94.3
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 32,
            "maks": 45,
            "persen": 71.1
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Tata Kelola (81.2%)",
      "Sosial (82.4%)"
    ],
    "targetDimensi": [
      "Tata Kelola",
      "Sosial"
    ],
    "catatanMusrenbang": "Seluruh 6 dimensi ≥70%, namun masih terdapat 9 indikator berskor 1 (Keberadaan Taman Bacaan Masyarakat/ Perpustakaan Desa; Operasional Taman Bacaan Masyarakat/ Perpustakaan Desa) yang perlu diintervensi.",
    "rekomendasiKategori": [
      "Pemerintahan Desa & Digitalisasi",
      "Keagamaan, Sosial & Budaya"
    ],
    "namaKepalaDesa": "H. MALIKI, S.Pd. I",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "-.85411Â° 116.101237Â°",
    "alamatDesa": "Jln. Parawisata no 66 kecamatan Gunungsari Kabupaten Lombok Barat kode pos 83351",
    "emailDesa": "gunungsaridesalobar80@gmail.com",
    "webDesa": "gunungsari.pemdeslobar.com",
    "masaJabatanKades": "7 Tahun 5 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 113.45
  },
  {
    "id": "desa-midang-gunungsari",
    "nama": "Midang",
    "tipe": "Desa",
    "kecamatan": "Gunungsari",
    "kodeWilayah": "5201092002",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.9024,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 90.18,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 573,
    "indeksKomposit": 9.8,
    "indikator": {
      "infrastruktur": 2.0,
      "pertanianPangan": 14.4,
      "pendidikanSDM": 10.0,
      "kesehatanStunting": -1.1,
      "ekonomiUMKM": 14.4,
      "lingkunganSampah": 13.3
    },
    "dimensi": {
      "layananDasar": {
        "skor": 161,
        "persen": 94.7,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 45,
            "maks": 45,
            "persen": 100.0
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 91,
            "maks": 100,
            "persen": 91.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ],
        "sub": {
          "pendidikan": 45,
          "kesehatan": 91,
          "utilitas": 25
        }
      },
      "sosial": {
        "skor": 79,
        "persen": 92.9,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 62,
            "maks": 65,
            "persen": 95.4
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 17,
            "maks": 20,
            "persen": 85.0
          }
        ]
      },
      "ekonomi": {
        "skor": 137,
        "persen": 85.6,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 40,
            "maks": 40,
            "persen": 100.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 97,
            "maks": 120,
            "persen": 80.8
          }
        ]
      },
      "lingkungan": {
        "skor": 78,
        "persen": 86.7,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 53,
            "maks": 65,
            "persen": 81.5
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 69,
        "persen": 86.2,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 33,
            "maks": 35,
            "persen": 94.3
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 36,
            "maks": 45,
            "persen": 80.0
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Ekonomi (85.6%)",
      "Tata Kelola (86.2%)"
    ],
    "targetDimensi": [
      "Ekonomi",
      "Tata Kelola"
    ],
    "catatanMusrenbang": "Seluruh 6 dimensi ≥70%, namun masih terdapat 9 indikator berskor 1 (Ketersediaan Pasar di Desa; Ketersediaan Penginapan di Desa) yang perlu diintervensi.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Pemerintahan Desa & Digitalisasi"
    ],
    "namaKepalaDesa": "SAMSUDIN ,S.SOS",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "-8.33100944Â°  116.63923352Â°",
    "alamatDesa": "Jln. Raya Tanjung Gunungsari KM 1 Desa Midang Kecamatan Gunungsari Kab. Lombok Barat Kode Pos 83351",
    "emailDesa": "desamidang25@gmaill.com",
    "webDesa": "midang.desa.id",
    "masaJabatanKades": "7 TAHUN 5 BULAN",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 111.8
  },
  {
    "id": "desa-sesela-gunungsari",
    "nama": "Sesela",
    "tipe": "Desa",
    "kecamatan": "Gunungsari",
    "kodeWilayah": "5201092003",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.9291,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 92.64,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 590,
    "indeksKomposit": 7.4,
    "indikator": {
      "infrastruktur": 2.0,
      "pertanianPangan": 15.0,
      "pendidikanSDM": 10.0,
      "kesehatanStunting": -8.9,
      "ekonomiUMKM": 15.0,
      "lingkunganSampah": 11.1
    },
    "dimensi": {
      "layananDasar": {
        "skor": 168,
        "persen": 98.8,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 45,
            "maks": 45,
            "persen": 100.0
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 98,
            "maks": 100,
            "persen": 98.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ],
        "sub": {
          "pendidikan": 45,
          "kesehatan": 98,
          "utilitas": 25
        }
      },
      "sosial": {
        "skor": 80,
        "persen": 94.1,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 62,
            "maks": 65,
            "persen": 95.4
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 18,
            "maks": 20,
            "persen": 90.0
          }
        ]
      },
      "ekonomi": {
        "skor": 136,
        "persen": 85.0,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 40,
            "maks": 40,
            "persen": 100.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 96,
            "maks": 120,
            "persen": 80.0
          }
        ]
      },
      "lingkungan": {
        "skor": 80,
        "persen": 88.9,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 61,
            "maks": 65,
            "persen": 93.8
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 19,
            "maks": 25,
            "persen": 76.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 77,
        "persen": 96.2,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 32,
            "maks": 35,
            "persen": 91.4
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 45,
            "maks": 45,
            "persen": 100.0
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Ekonomi (85.0%)",
      "Lingkungan (88.9%)"
    ],
    "targetDimensi": [
      "Ekonomi",
      "Lingkungan"
    ],
    "catatanMusrenbang": "Seluruh 6 dimensi ≥70%, namun masih terdapat 7 indikator berskor 1 (Ketersediaan Penginapan di Desa; Ketersediaan Lembaga Ekonomi KUD) yang perlu diintervensi.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ],
    "namaKepalaDesa": "TAUPIK, S.Pd",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8,5540553S116.09837979E",
    "alamatDesa": "Jln. Raya Sesela Dusun Dasan Utama RT 003 Desa Sesela Kec. gunungsari Lobar NTB Kode Pos 83351",
    "emailDesa": "kantordesasesela13@gmail.com",
    "webDesa": "www.seseladesa.org",
    "masaJabatanKades": "1 Tahun 5 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 114.85
  },
  {
    "id": "desa-kekait-gunungsari",
    "nama": "Kekait",
    "tipe": "Desa",
    "kecamatan": "Gunungsari",
    "kodeWilayah": "5201092004",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7622,
    "statusKemendesa": "MAJU",
    "skorBappenas": 75.14,
    "statusBappenas": "MAJU",
    "nilaiTotal": 484,
    "indeksKomposit": 24.9,
    "indikator": {
      "infrastruktur": 20.0,
      "pertanianPangan": 28.8,
      "pendidikanSDM": 22.0,
      "kesehatanStunting": 17.8,
      "ekonomiUMKM": 28.8,
      "lingkunganSampah": 24.4
    },
    "dimensi": {
      "layananDasar": {
        "skor": 128,
        "persen": 75.3,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 39,
            "maks": 45,
            "persen": 86.7
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 74,
            "maks": 100,
            "persen": 74.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 15,
            "maks": 25,
            "persen": 60.0
          }
        ],
        "sub": {
          "pendidikan": 39,
          "kesehatan": 74,
          "utilitas": 15
        }
      },
      "sosial": {
        "skor": 62,
        "persen": 72.9,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 51,
            "maks": 65,
            "persen": 78.5
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 11,
            "maks": 20,
            "persen": 55.0
          }
        ]
      },
      "ekonomi": {
        "skor": 114,
        "persen": 71.2,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 26,
            "maks": 40,
            "persen": 65.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 88,
            "maks": 120,
            "persen": 73.3
          }
        ]
      },
      "lingkungan": {
        "skor": 68,
        "persen": 75.6,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 49,
            "maks": 65,
            "persen": 75.4
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 19,
            "maks": 25,
            "persen": 76.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 40,
        "persen": 80.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 12,
            "maks": 20,
            "persen": 60.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 28,
            "maks": 30,
            "persen": 93.3
          }
        ]
      },
      "tataKelola": {
        "skor": 72,
        "persen": 90.0,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 32,
            "maks": 35,
            "persen": 91.4
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 40,
            "maks": 45,
            "persen": 88.9
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Ekonomi (71.2%)",
      "Sosial (72.9%)"
    ],
    "targetDimensi": [
      "Ekonomi",
      "Sosial"
    ],
    "catatanMusrenbang": "Seluruh 6 dimensi ≥70%, namun masih terdapat 27 indikator berskor 1 (Operasional ketersediaan layanan dokter di desa; Keberadaan Penyedia Transportasi penunjang menuju layanan Dokter) yang perlu diintervensi.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Keagamaan, Sosial & Budaya"
    ],
    "namaKepalaDesa": "MASJUDIN DAHLAN",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8.51906083S 116.10063176E",
    "alamatDesa": "JL. JURUSAN TANJUNG KM.08 DESA KEKAIT",
    "emailDesa": "desakekait2004@gmail.com",
    "webDesa": "http://www.kekaitdesa.id",
    "masaJabatanKades": "8 tahun",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 93.15
  },
  {
    "id": "desa-kekeri-gunungsari",
    "nama": "Kekeri",
    "tipe": "Desa",
    "kecamatan": "Gunungsari",
    "kodeWilayah": "5201092005",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.715,
    "statusKemendesa": "MAJU",
    "skorBappenas": 73.19,
    "statusBappenas": "MAJU",
    "nilaiTotal": 454,
    "indeksKomposit": 26.8,
    "indikator": {
      "infrastruktur": 24.0,
      "pertanianPangan": 30.0,
      "pendidikanSDM": 14.0,
      "kesehatanStunting": 17.8,
      "ekonomiUMKM": 30.0,
      "lingkunganSampah": 22.2
    },
    "dimensi": {
      "layananDasar": {
        "skor": 140,
        "persen": 82.4,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 43,
            "maks": 45,
            "persen": 95.6
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 74,
            "maks": 100,
            "persen": 74.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ],
        "sub": {
          "pendidikan": 43,
          "kesehatan": 74,
          "utilitas": 23
        }
      },
      "sosial": {
        "skor": 36,
        "persen": 42.4,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 31,
            "maks": 65,
            "persen": 47.7
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 5,
            "maks": 20,
            "persen": 25.0
          }
        ]
      },
      "ekonomi": {
        "skor": 112,
        "persen": 70.0,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 36,
            "maks": 40,
            "persen": 90.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 76,
            "maks": 120,
            "persen": 63.3
          }
        ]
      },
      "lingkungan": {
        "skor": 70,
        "persen": 77.8,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 61,
            "maks": 65,
            "persen": 93.8
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 9,
            "maks": 25,
            "persen": 36.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 38,
        "persen": 76.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 16,
            "maks": 20,
            "persen": 80.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 22,
            "maks": 30,
            "persen": 73.3
          }
        ]
      },
      "tataKelola": {
        "skor": 58,
        "persen": 72.5,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 30,
            "maks": 35,
            "persen": 85.7
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 28,
            "maks": 45,
            "persen": 62.2
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Sosial (42.4%)",
      "Ekonomi (70.0%)"
    ],
    "targetDimensi": [
      "Sosial",
      "Ekonomi"
    ],
    "catatanMusrenbang": "Terdapat 37 indikator defisit (Skor 1) dengan sektor kritis: Sosial (42.4%). Prioritas lapangan: Operasional ketersediaan layanan dokter di desa; Operasional ketersediaan layanan Bidan di desa.",
    "rekomendasiKategori": [
      "Keagamaan, Sosial & Budaya",
      "Pertanian, Peternakan & Pangan"
    ],
    "namaKepalaDesa": "SULTHAN,S.Pd.I",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8.5571678 116.1288461",
    "alamatDesa": "JL TGH NURUDDIN NO 14 DESA KEKERI KEC GUNUNGSARI KAB LOBAR",
    "emailDesa": "",
    "webDesa": "www.desa.kekeri.co.id",
    "masaJabatanKades": "2019 s/d 2027",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 90.74
  },
  {
    "id": "desa-mambalan-gunungsari",
    "nama": "Mambalan",
    "tipe": "Desa",
    "kecamatan": "Gunungsari",
    "kodeWilayah": "5201092006",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7354,
    "statusKemendesa": "MAJU",
    "skorBappenas": 72.64,
    "statusBappenas": "MAJU",
    "nilaiTotal": 467,
    "indeksKomposit": 27.4,
    "indikator": {
      "infrastruktur": 20.0,
      "pertanianPangan": 27.5,
      "pendidikanSDM": 20.0,
      "kesehatanStunting": 35.6,
      "ekonomiUMKM": 27.5,
      "lingkunganSampah": 42.2
    },
    "dimensi": {
      "layananDasar": {
        "skor": 121,
        "persen": 71.2,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 40,
            "maks": 45,
            "persen": 88.9
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 58,
            "maks": 100,
            "persen": 58.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ],
        "sub": {
          "pendidikan": 40,
          "kesehatan": 58,
          "utilitas": 23
        }
      },
      "sosial": {
        "skor": 67,
        "persen": 78.8,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 62,
            "maks": 65,
            "persen": 95.4
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 5,
            "maks": 20,
            "persen": 25.0
          }
        ]
      },
      "ekonomi": {
        "skor": 116,
        "persen": 72.5,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 36,
            "maks": 40,
            "persen": 90.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 80,
            "maks": 120,
            "persen": 66.7
          }
        ]
      },
      "lingkungan": {
        "skor": 52,
        "persen": 57.8,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 41,
            "maks": 65,
            "persen": 63.1
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 11,
            "maks": 25,
            "persen": 44.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 40,
        "persen": 80.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 19,
            "maks": 20,
            "persen": 95.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 21,
            "maks": 30,
            "persen": 70.0
          }
        ]
      },
      "tataKelola": {
        "skor": 71,
        "persen": 88.8,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 34,
            "maks": 35,
            "persen": 97.1
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 37,
            "maks": 45,
            "persen": 82.2
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (57.8%)",
      "Layanan Dasar (71.2%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Layanan Dasar"
    ],
    "catatanMusrenbang": "Terdapat 35 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (57.8%). Prioritas lapangan: Operasional ketersediaan layanan dokter di desa; Keberadaan Penyedia Transportasi penunjang menuju layanan Dokter.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Pendidikan & Sekolah"
    ],
    "namaKepalaDesa": "SAYID ABDOLLAH ALKAFF,S.SOS",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "-8.549452427160846, 116.1268365247442",
    "alamatDesa": "Jln. Desa Mambalan",
    "emailDesa": "mambalanjaya@gmail.com",
    "webDesa": "mambalan.desa_gunungsari.id",
    "masaJabatanKades": "4 Tahun",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 90.06
  },
  {
    "id": "desa-dopang-gunungsari",
    "nama": "Dopang",
    "tipe": "Desa",
    "kecamatan": "Gunungsari",
    "kodeWilayah": "5201092007",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7244,
    "statusKemendesa": "MAJU",
    "skorBappenas": 71.08,
    "statusBappenas": "MAJU",
    "nilaiTotal": 460,
    "indeksKomposit": 28.9,
    "indikator": {
      "infrastruktur": 6.0,
      "pertanianPangan": 41.2,
      "pendidikanSDM": 18.0,
      "kesehatanStunting": 22.2,
      "ekonomiUMKM": 41.2,
      "lingkunganSampah": 45.6
    },
    "dimensi": {
      "layananDasar": {
        "skor": 136,
        "persen": 80.0,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 41,
            "maks": 45,
            "persen": 91.1
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 70,
            "maks": 100,
            "persen": 70.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ],
        "sub": {
          "pendidikan": 41,
          "kesehatan": 70,
          "utilitas": 25
        }
      },
      "sosial": {
        "skor": 64,
        "persen": 75.3,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 53,
            "maks": 65,
            "persen": 81.5
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 11,
            "maks": 20,
            "persen": 55.0
          }
        ]
      },
      "ekonomi": {
        "skor": 94,
        "persen": 58.8,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 32,
            "maks": 40,
            "persen": 80.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 62,
            "maks": 120,
            "persen": 51.7
          }
        ]
      },
      "lingkungan": {
        "skor": 49,
        "persen": 54.4,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 43,
            "maks": 65,
            "persen": 66.2
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 6,
            "maks": 25,
            "persen": 24.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 47,
        "persen": 94.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 27,
            "maks": 30,
            "persen": 90.0
          }
        ]
      },
      "tataKelola": {
        "skor": 70,
        "persen": 87.5,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 33,
            "maks": 35,
            "persen": 94.3
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 37,
            "maks": 45,
            "persen": 82.2
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (54.4%)",
      "Ekonomi (58.8%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Ekonomi"
    ],
    "catatanMusrenbang": "Terdapat 35 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (54.4%), Ekonomi (58.8%). Prioritas lapangan: Operasional ketersediaan layanan dokter di desa; Operasional ketersediaan layanan Bidan di desa.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Pertanian, Peternakan & Pangan"
    ],
    "namaKepalaDesa": "HARUN NURASID",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "-8.5443571,116.1181052,677",
    "alamatDesa": "JALAN BATURITI DUSUN RANJOK UTARA DESA DOPANG KECAMATAN GUNUNGSARI LOMBOK BARAT",
    "emailDesa": "desadopang66@gmail.com",
    "webDesa": "dopang.desa.id",
    "masaJabatanKades": "7 Tahun 3 Bulan",
    "periodeKades": "Periode Ke-2",
    "skorBappenasId": 88.13
  },
  {
    "id": "desa-penimbung-gunungsari",
    "nama": "Penimbung",
    "tipe": "Desa",
    "kecamatan": "Gunungsari",
    "kodeWilayah": "5201092008",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7937,
    "statusKemendesa": "MAJU",
    "skorBappenas": 78.22,
    "statusBappenas": "MAJU",
    "nilaiTotal": 504,
    "indeksKomposit": 21.8,
    "indikator": {
      "infrastruktur": 2.0,
      "pertanianPangan": 25.6,
      "pendidikanSDM": 34.0,
      "kesehatanStunting": 10.0,
      "ekonomiUMKM": 25.6,
      "lingkunganSampah": 20.0
    },
    "dimensi": {
      "layananDasar": {
        "skor": 135,
        "persen": 79.4,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 33,
            "maks": 45,
            "persen": 73.3
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 81,
            "maks": 100,
            "persen": 81.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 21,
            "maks": 25,
            "persen": 84.0
          }
        ],
        "sub": {
          "pendidikan": 33,
          "kesehatan": 81,
          "utilitas": 21
        }
      },
      "sosial": {
        "skor": 68,
        "persen": 80.0,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 63,
            "maks": 65,
            "persen": 96.9
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 5,
            "maks": 20,
            "persen": 25.0
          }
        ]
      },
      "ekonomi": {
        "skor": 119,
        "persen": 74.4,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 36,
            "maks": 40,
            "persen": 90.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 83,
            "maks": 120,
            "persen": 69.2
          }
        ]
      },
      "lingkungan": {
        "skor": 72,
        "persen": 80.0,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 49,
            "maks": 65,
            "persen": 75.4
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 61,
        "persen": 76.2,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 33,
            "maks": 35,
            "persen": 94.3
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 28,
            "maks": 45,
            "persen": 62.2
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Ekonomi (74.4%)",
      "Tata Kelola (76.2%)"
    ],
    "targetDimensi": [
      "Ekonomi",
      "Tata Kelola"
    ],
    "catatanMusrenbang": "Seluruh 6 dimensi ≥70%, namun masih terdapat 23 indikator berskor 1 (Operasional ketersediaan layanan dokter di desa; Operasional ketersediaan layanan Bidan di desa) yang perlu diintervensi.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Pemerintahan Desa & Digitalisasi"
    ],
    "namaKepalaDesa": "H.ABDUL HARIS, NL.P",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8.546132S, 116.138983E",
    "alamatDesa": "PENIMBUNG",
    "emailDesa": "pemdespenimbung@gmail.com",
    "webDesa": "penimbung.desa.id",
    "masaJabatanKades": "7 Tahun 7 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 96.98
  },
  {
    "id": "desa-taman-sari-gunungsari",
    "nama": "Taman Sari",
    "tipe": "Desa",
    "kecamatan": "Gunungsari",
    "kodeWilayah": "5201092009",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7591,
    "statusKemendesa": "MAJU",
    "skorBappenas": 75.83,
    "statusBappenas": "MAJU",
    "nilaiTotal": 482,
    "indeksKomposit": 24.2,
    "indikator": {
      "infrastruktur": 10.0,
      "pertanianPangan": 35.6,
      "pendidikanSDM": 14.0,
      "kesehatanStunting": 7.8,
      "ekonomiUMKM": 35.6,
      "lingkunganSampah": 41.1
    },
    "dimensi": {
      "layananDasar": {
        "skor": 149,
        "persen": 87.6,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 43,
            "maks": 45,
            "persen": 95.6
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 83,
            "maks": 100,
            "persen": 83.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ],
        "sub": {
          "pendidikan": 43,
          "kesehatan": 83,
          "utilitas": 23
        }
      },
      "sosial": {
        "skor": 62,
        "persen": 72.9,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 56,
            "maks": 65,
            "persen": 86.2
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 6,
            "maks": 20,
            "persen": 30.0
          }
        ]
      },
      "ekonomi": {
        "skor": 103,
        "persen": 64.4,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 36,
            "maks": 40,
            "persen": 90.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 67,
            "maks": 120,
            "persen": 55.8
          }
        ]
      },
      "lingkungan": {
        "skor": 53,
        "persen": 58.9,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 44,
            "maks": 65,
            "persen": 67.7
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 9,
            "maks": 25,
            "persen": 36.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 45,
        "persen": 90.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 19,
            "maks": 20,
            "persen": 95.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 26,
            "maks": 30,
            "persen": 86.7
          }
        ]
      },
      "tataKelola": {
        "skor": 70,
        "persen": 87.5,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 28,
            "maks": 35,
            "persen": 80.0
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 42,
            "maks": 45,
            "persen": 93.3
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (58.9%)",
      "Ekonomi (64.4%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Ekonomi"
    ],
    "catatanMusrenbang": "Terdapat 29 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (58.9%), Ekonomi (64.4%). Prioritas lapangan: Ketersediaan layanan dokter di desa; Operasional ketersediaan layanan dokter di desa.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Pertanian, Peternakan & Pangan"
    ],
    "namaKepalaDesa": "ZAINI",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8.3018S 116 7 19.2 E",
    "alamatDesa": "Jl. Dusun Montong Sager Desa Taman Sari Kecamatan Gunungsari Kabupaten Lombok Barat",
    "emailDesa": "@taman.sari.bersatu.2024",
    "webDesa": "@taman.sari.bersatu.2024",
    "masaJabatanKades": "5 Tahun 1 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 94.02
  },
  {
    "id": "desa-jatisela-gunungsari",
    "nama": "Jatisela",
    "tipe": "Desa",
    "kecamatan": "Gunungsari",
    "kodeWilayah": "5201092010",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.8315,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 83.13,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 528,
    "indeksKomposit": 16.9,
    "indikator": {
      "infrastruktur": 2.0,
      "pertanianPangan": 26.2,
      "pendidikanSDM": 18.0,
      "kesehatanStunting": -3.3,
      "ekonomiUMKM": 26.2,
      "lingkunganSampah": 38.9
    },
    "dimensi": {
      "layananDasar": {
        "skor": 159,
        "persen": 93.5,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 41,
            "maks": 45,
            "persen": 91.1
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 93,
            "maks": 100,
            "persen": 93.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ],
        "sub": {
          "pendidikan": 41,
          "kesehatan": 93,
          "utilitas": 25
        }
      },
      "sosial": {
        "skor": 75,
        "persen": 88.2,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 60,
            "maks": 65,
            "persen": 92.3
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 15,
            "maks": 20,
            "persen": 75.0
          }
        ]
      },
      "ekonomi": {
        "skor": 118,
        "persen": 73.8,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 28,
            "maks": 40,
            "persen": 70.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 90,
            "maks": 120,
            "persen": 75.0
          }
        ]
      },
      "lingkungan": {
        "skor": 55,
        "persen": 61.1,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 40,
            "maks": 65,
            "persen": 61.5
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 15,
            "maks": 25,
            "persen": 60.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 72,
        "persen": 90.0,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 32,
            "maks": 35,
            "persen": 91.4
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 40,
            "maks": 45,
            "persen": 88.9
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (61.1%)",
      "Ekonomi (73.8%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Ekonomi"
    ],
    "catatanMusrenbang": "Terdapat 19 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (61.1%). Prioritas lapangan: Keberadaan Produk Unggulan Desa; Cakupan Penjualan Hasil Produk Unggulan Desa.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Pertanian, Peternakan & Pangan"
    ],
    "namaKepalaDesa": "Sapiudin",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "-8.552674Â°  116.090237Â°",
    "alamatDesa": "Jln. Raya Pesona Desa Jatisela Kecamatan Gunungsari Kabupten Lombok Barat NTB Kode Pos 83351",
    "emailDesa": "desajatisela@gmail.com",
    "webDesa": "http://jatisela.desa.id/",
    "masaJabatanKades": "2 Tahun 10 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 103.06
  },
  {
    "id": "desa-guntur-macan-gunungsari",
    "nama": "Guntur Macan",
    "tipe": "Desa",
    "kecamatan": "Gunungsari",
    "kodeWilayah": "5201092011",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mendesak",
    "skorKemendesa": 0.663,
    "statusKemendesa": "BERKEMBANG",
    "skorBappenas": 63.63,
    "statusBappenas": "BERKEMBANG",
    "nilaiTotal": 421,
    "indeksKomposit": 36.4,
    "indikator": {
      "infrastruktur": 8.0,
      "pertanianPangan": 37.5,
      "pendidikanSDM": 34.0,
      "kesehatanStunting": 45.6,
      "ekonomiUMKM": 37.5,
      "lingkunganSampah": 37.8
    },
    "dimensi": {
      "layananDasar": {
        "skor": 99,
        "persen": 58.2,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 33,
            "maks": 45,
            "persen": 73.3
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 49,
            "maks": 100,
            "persen": 49.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 17,
            "maks": 25,
            "persen": 68.0
          }
        ],
        "sub": {
          "pendidikan": 33,
          "kesehatan": 49,
          "utilitas": 17
        }
      },
      "sosial": {
        "skor": 64,
        "persen": 75.3,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 59,
            "maks": 65,
            "persen": 90.8
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 5,
            "maks": 20,
            "persen": 25.0
          }
        ]
      },
      "ekonomi": {
        "skor": 100,
        "persen": 62.5,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 30,
            "maks": 40,
            "persen": 75.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 70,
            "maks": 120,
            "persen": 58.3
          }
        ]
      },
      "lingkungan": {
        "skor": 56,
        "persen": 62.2,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 39,
            "maks": 65,
            "persen": 60.0
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 17,
            "maks": 25,
            "persen": 68.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 46,
        "persen": 92.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 19,
            "maks": 20,
            "persen": 95.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 27,
            "maks": 30,
            "persen": 90.0
          }
        ]
      },
      "tataKelola": {
        "skor": 56,
        "persen": 70.0,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 33,
            "maks": 35,
            "persen": 94.3
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 23,
            "maks": 45,
            "persen": 51.1
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Layanan Dasar (58.2%)",
      "Lingkungan (62.2%)"
    ],
    "targetDimensi": [
      "Layanan Dasar",
      "Lingkungan"
    ],
    "catatanMusrenbang": "Terdapat 44 indikator defisit (Skor 1) dengan sektor kritis: Layanan Dasar (58.2%), Lingkungan (62.2%), Ekonomi (62.5%). Prioritas lapangan: Keberadaan Fasilitas Puskesmas Pembantu (Pustu) termasuk Poskesdes/Polindes di Desa; Kemudahan akses menuju Fasilitas Puskesmas Pembantu (Pustu) termasuk Kesehatan Poskesdes/Polindes.",
    "rekomendasiKategori": [
      "Pendidikan & Sekolah",
      "Sampah, Lingkungan & Kebencanaan"
    ],
    "namaKepalaDesa": "NAJAMUDIN",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "-8,53161, 116,12257",
    "alamatDesa": "Jln Rimba Raya 02 Guntur MacanTelp/Hp:087879531706",
    "emailDesa": "pemerintahdesagunturmacan@gmail.com",
    "webDesa": "http://gunturmacan.desa.id",
    "masaJabatanKades": "8 tahun",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 78.88
  },
  {
    "id": "desa-mekar-sari-gunungsari",
    "nama": "Mekar Sari",
    "tipe": "Desa",
    "kecamatan": "Gunungsari",
    "kodeWilayah": "5201092012",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mendesak",
    "skorKemendesa": 0.6425,
    "statusKemendesa": "BERKEMBANG",
    "skorBappenas": 64.86,
    "statusBappenas": "BERKEMBANG",
    "nilaiTotal": 408,
    "indeksKomposit": 35.1,
    "indikator": {
      "infrastruktur": 38.0,
      "pertanianPangan": 41.2,
      "pendidikanSDM": 32.0,
      "kesehatanStunting": 24.4,
      "ekonomiUMKM": 41.2,
      "lingkunganSampah": 41.1
    },
    "dimensi": {
      "layananDasar": {
        "skor": 123,
        "persen": 72.4,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 34,
            "maks": 45,
            "persen": 75.6
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 68,
            "maks": 100,
            "persen": 68.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 21,
            "maks": 25,
            "persen": 84.0
          }
        ],
        "sub": {
          "pendidikan": 34,
          "kesehatan": 68,
          "utilitas": 21
        }
      },
      "sosial": {
        "skor": 46,
        "persen": 54.1,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 42,
            "maks": 65,
            "persen": 64.6
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 4,
            "maks": 20,
            "persen": 20.0
          }
        ]
      },
      "ekonomi": {
        "skor": 94,
        "persen": 58.8,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 24,
            "maks": 40,
            "persen": 60.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 70,
            "maks": 120,
            "persen": 58.3
          }
        ]
      },
      "lingkungan": {
        "skor": 53,
        "persen": 58.9,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 41,
            "maks": 65,
            "persen": 63.1
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 12,
            "maks": 25,
            "persen": 48.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 31,
        "persen": 62.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 4,
            "maks": 20,
            "persen": 20.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 27,
            "maks": 30,
            "persen": 90.0
          }
        ]
      },
      "tataKelola": {
        "skor": 61,
        "persen": 76.2,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 33,
            "maks": 35,
            "persen": 94.3
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 28,
            "maks": 45,
            "persen": 62.2
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Sosial (54.1%)",
      "Ekonomi (58.8%)"
    ],
    "targetDimensi": [
      "Sosial",
      "Ekonomi"
    ],
    "catatanMusrenbang": "Terdapat 49 indikator defisit (Skor 1) dengan sektor kritis: Sosial (54.1%), Ekonomi (58.8%), Lingkungan (58.9%), Aksesibilitas (62.0%). Prioritas lapangan: Kemudahan Akses menuju PAUD/TK/Sederajat terdekat di Desa; Ketersediaan layanan dokter di desa.",
    "rekomendasiKategori": [
      "Keagamaan, Sosial & Budaya",
      "Pertanian, Peternakan & Pangan"
    ],
    "namaKepalaDesa": "FAIZUL BAYANI, S.E.",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8.31'53,304\"S116.8'32,544'E",
    "alamatDesa": "DESA MEKAR SARI KECAMATAN GUNUNGSARI KABUPATEN LOMBOK BARAT PROVINSI NUSA TENGGARA BARAT INDONESIA",
    "emailDesa": "desamekarsari03@gmail.com",
    "webDesa": "http://mekarsari-gunungsari.desa.id/",
    "masaJabatanKades": "2 Tahun 7 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 80.41
  },
  {
    "id": "desa-ranjok-gunungsari",
    "nama": "Ranjok",
    "tipe": "Desa",
    "kecamatan": "Gunungsari",
    "kodeWilayah": "5201092013",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7953,
    "statusKemendesa": "MAJU",
    "skorBappenas": 80.19,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 505,
    "indeksKomposit": 19.8,
    "indikator": {
      "infrastruktur": 2.0,
      "pertanianPangan": 21.9,
      "pendidikanSDM": 20.0,
      "kesehatanStunting": 7.8,
      "ekonomiUMKM": 21.9,
      "lingkunganSampah": 35.6
    },
    "dimensi": {
      "layananDasar": {
        "skor": 148,
        "persen": 87.1,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 40,
            "maks": 45,
            "persen": 88.9
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 83,
            "maks": 100,
            "persen": 83.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ],
        "sub": {
          "pendidikan": 40,
          "kesehatan": 83,
          "utilitas": 25
        }
      },
      "sosial": {
        "skor": 59,
        "persen": 69.4,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 46,
            "maks": 65,
            "persen": 70.8
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 13,
            "maks": 20,
            "persen": 65.0
          }
        ]
      },
      "ekonomi": {
        "skor": 125,
        "persen": 78.1,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 40,
            "maks": 40,
            "persen": 100.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 85,
            "maks": 120,
            "persen": 70.8
          }
        ]
      },
      "lingkungan": {
        "skor": 58,
        "persen": 64.4,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 45,
            "maks": 65,
            "persen": 69.2
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 13,
            "maks": 25,
            "persen": 52.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 19,
            "maks": 20,
            "persen": 95.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 30,
            "maks": 30,
            "persen": 100.0
          }
        ]
      },
      "tataKelola": {
        "skor": 66,
        "persen": 82.5,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 34,
            "maks": 35,
            "persen": 97.1
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 32,
            "maks": 45,
            "persen": 71.1
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (64.4%)",
      "Sosial (69.4%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Sosial"
    ],
    "catatanMusrenbang": "Terdapat 25 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (64.4%), Sosial (69.4%). Prioritas lapangan: Operasional ketersediaan layanan dokter di desa; Operasional ketersediaan layanan Tenaga Kesehatan di desa.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Keagamaan, Sosial & Budaya"
    ],
    "namaKepalaDesa": "KHAIRIL ANWAR",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8.325191S 1167313E",
    "alamatDesa": "Jalan Jagapati No. 11 Ranjok Kecamatan Gunungsar",
    "emailDesa": "ranjokdesa5@gmail.com",
    "webDesa": "r",
    "masaJabatanKades": "5 Tahun 1 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 99.41
  },
  {
    "id": "desa-gelangsar-gunungsari",
    "nama": "Gelangsar",
    "tipe": "Desa",
    "kecamatan": "Gunungsari",
    "kodeWilayah": "5201092014",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7102,
    "statusKemendesa": "MAJU",
    "skorBappenas": 68.47,
    "statusBappenas": "BERKEMBANG",
    "nilaiTotal": 451,
    "indeksKomposit": 31.5,
    "indikator": {
      "infrastruktur": 12.0,
      "pertanianPangan": 36.9,
      "pendidikanSDM": 26.0,
      "kesehatanStunting": 40.0,
      "ekonomiUMKM": 36.9,
      "lingkunganSampah": 25.6
    },
    "dimensi": {
      "layananDasar": {
        "skor": 112,
        "persen": 65.9,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 37,
            "maks": 45,
            "persen": 82.2
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 54,
            "maks": 100,
            "persen": 54.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 21,
            "maks": 25,
            "persen": 84.0
          }
        ],
        "sub": {
          "pendidikan": 37,
          "kesehatan": 54,
          "utilitas": 21
        }
      },
      "sosial": {
        "skor": 63,
        "persen": 74.1,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 58,
            "maks": 65,
            "persen": 89.2
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 5,
            "maks": 20,
            "persen": 25.0
          }
        ]
      },
      "ekonomi": {
        "skor": 101,
        "persen": 63.1,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 38,
            "maks": 40,
            "persen": 95.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 63,
            "maks": 120,
            "persen": 52.5
          }
        ]
      },
      "lingkungan": {
        "skor": 67,
        "persen": 74.4,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 45,
            "maks": 65,
            "persen": 69.2
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 22,
            "maks": 25,
            "persen": 88.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 44,
        "persen": 88.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 18,
            "maks": 20,
            "persen": 90.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 26,
            "maks": 30,
            "persen": 86.7
          }
        ]
      },
      "tataKelola": {
        "skor": 64,
        "persen": 80.0,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 33,
            "maks": 35,
            "persen": 94.3
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 31,
            "maks": 45,
            "persen": 68.9
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Ekonomi (63.1%)",
      "Layanan Dasar (65.9%)"
    ],
    "targetDimensi": [
      "Ekonomi",
      "Layanan Dasar"
    ],
    "catatanMusrenbang": "Terdapat 33 indikator defisit (Skor 1) dengan sektor kritis: Ekonomi (63.1%), Layanan Dasar (65.9%). Prioritas lapangan: Kemudahan Akses menuju SMA/SMK/MA/MAK/Sederajat terdekat di Desa; Ketersediaan layanan dokter di desa.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Pendidikan & Sekolah"
    ],
    "namaKepalaDesa": "Definitif",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "DESA GELANGSAR KECAMATAN GUNUNGSARI LOMBOK BARAT",
    "alamatDesa": "1",
    "emailDesa": "desagelangsar@gmail.com",
    "webDesa": "3",
    "masaJabatanKades": "13 tahun 6 bulan",
    "periodeKades": "Periode ke-2",
    "skorBappenasId": 84.89
  },
  {
    "id": "desa-jeringo-gunungsari",
    "nama": "Jeringo",
    "tipe": "Desa",
    "kecamatan": "Gunungsari",
    "kodeWilayah": "5201092015",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mendesak",
    "skorKemendesa": 0.6315,
    "statusKemendesa": "BERKEMBANG",
    "skorBappenas": 61.87,
    "statusBappenas": "BERKEMBANG",
    "nilaiTotal": 401,
    "indeksKomposit": 38.1,
    "indikator": {
      "infrastruktur": 20.0,
      "pertanianPangan": 48.1,
      "pendidikanSDM": 30.0,
      "kesehatanStunting": 32.2,
      "ekonomiUMKM": 48.1,
      "lingkunganSampah": 57.8
    },
    "dimensi": {
      "layananDasar": {
        "skor": 117,
        "persen": 68.8,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 35,
            "maks": 45,
            "persen": 77.8
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 61,
            "maks": 100,
            "persen": 61.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 21,
            "maks": 25,
            "persen": 84.0
          }
        ],
        "sub": {
          "pendidikan": 35,
          "kesehatan": 61,
          "utilitas": 21
        }
      },
      "sosial": {
        "skor": 55,
        "persen": 64.7,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 50,
            "maks": 65,
            "persen": 76.9
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 5,
            "maks": 20,
            "persen": 25.0
          }
        ]
      },
      "ekonomi": {
        "skor": 83,
        "persen": 51.9,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 24,
            "maks": 40,
            "persen": 60.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 59,
            "maks": 120,
            "persen": 49.2
          }
        ]
      },
      "lingkungan": {
        "skor": 38,
        "persen": 42.2,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 32,
            "maks": 65,
            "persen": 49.2
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 6,
            "maks": 25,
            "persen": 24.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 40,
        "persen": 80.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 11,
            "maks": 20,
            "persen": 55.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 68,
        "persen": 85.0,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 33,
            "maks": 35,
            "persen": 94.3
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 35,
            "maks": 45,
            "persen": 77.8
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (42.2%)",
      "Ekonomi (51.9%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Ekonomi"
    ],
    "catatanMusrenbang": "Terdapat 47 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (42.2%), Ekonomi (51.9%), Sosial (64.7%), Layanan Dasar (68.8%). Prioritas lapangan: Ketersediaan layanan dokter di desa; Operasional ketersediaan layanan dokter di desa.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Pertanian, Peternakan & Pangan"
    ],
    "namaKepalaDesa": "SAHRIL, SH.",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8.536855S116.132468E",
    "alamatDesa": "JALAN JURUSAN LILIR - JERINGO DESA JERINGO KECAMATAN GUNUNGSARI KABUPATEN LOMBOK BARAT KODE POS 83351",
    "emailDesa": "jeringodesa@gmail.com",
    "webDesa": "http://jeringo.desa.id",
    "masaJabatanKades": "12 Tahun 2 Bulan",
    "periodeKades": "Periode ke-2",
    "skorBappenasId": 76.7
  },
  {
    "id": "desa-bukittinggi-gunungsari",
    "nama": "Bukittinggi",
    "tipe": "Desa",
    "kecamatan": "Gunungsari",
    "kodeWilayah": "5201092016",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7906,
    "statusKemendesa": "MAJU",
    "skorBappenas": 78.45,
    "statusBappenas": "MAJU",
    "nilaiTotal": 502,
    "indeksKomposit": 21.5,
    "indikator": {
      "infrastruktur": 4.0,
      "pertanianPangan": 20.6,
      "pendidikanSDM": 14.0,
      "kesehatanStunting": 25.6,
      "ekonomiUMKM": 20.6,
      "lingkunganSampah": 35.6
    },
    "dimensi": {
      "layananDasar": {
        "skor": 133,
        "persen": 78.2,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 43,
            "maks": 45,
            "persen": 95.6
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 67,
            "maks": 100,
            "persen": 67.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ],
        "sub": {
          "pendidikan": 43,
          "kesehatan": 67,
          "utilitas": 23
        }
      },
      "sosial": {
        "skor": 65,
        "persen": 76.5,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 60,
            "maks": 65,
            "persen": 92.3
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 5,
            "maks": 20,
            "persen": 25.0
          }
        ]
      },
      "ekonomi": {
        "skor": 127,
        "persen": 79.4,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 36,
            "maks": 40,
            "persen": 90.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 91,
            "maks": 120,
            "persen": 75.8
          }
        ]
      },
      "lingkungan": {
        "skor": 58,
        "persen": 64.4,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 45,
            "maks": 65,
            "persen": 69.2
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 13,
            "maks": 25,
            "persen": 52.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 48,
        "persen": 96.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 19,
            "maks": 20,
            "persen": 95.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 71,
        "persen": 88.8,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 34,
            "maks": 35,
            "persen": 97.1
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 37,
            "maks": 45,
            "persen": 82.2
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (64.4%)",
      "Sosial (76.5%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Sosial"
    ],
    "catatanMusrenbang": "Terdapat 28 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (64.4%). Prioritas lapangan: Ketersediaan layanan dokter di desa; Operasional ketersediaan layanan dokter di desa.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Keagamaan, Sosial & Budaya"
    ],
    "namaKepalaDesa": "AHMAD MUTTAKIN",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "-8.524787,116.150388",
    "alamatDesa": "JLN RAYA BUKIT TINGGI BENDUNGAN MENINTING",
    "emailDesa": "kantordesabukittinggi@yahoo.com",
    "webDesa": "bukittinggi-lombok",
    "masaJabatanKades": "12 TAHUN 2 BULAN",
    "periodeKades": "Periode ke-2",
    "skorBappenasId": 97.25
  },
  {
    "id": "desa-lingsar-lingsar",
    "nama": "Lingsar",
    "tipe": "Desa",
    "kecamatan": "Lingsar",
    "kodeWilayah": "5201122001",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.937,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 94.11,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 595,
    "indeksKomposit": 5.9,
    "indikator": {
      "infrastruktur": 2.0,
      "pertanianPangan": 8.1,
      "pendidikanSDM": 10.0,
      "kesehatanStunting": -6.7,
      "ekonomiUMKM": 8.1,
      "lingkunganSampah": 4.4
    },
    "dimensi": {
      "layananDasar": {
        "skor": 166,
        "persen": 97.6,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 45,
            "maks": 45,
            "persen": 100.0
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 96,
            "maks": 100,
            "persen": 96.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ],
        "sub": {
          "pendidikan": 45,
          "kesehatan": 96,
          "utilitas": 25
        }
      },
      "sosial": {
        "skor": 80,
        "persen": 94.1,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 63,
            "maks": 65,
            "persen": 96.9
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 17,
            "maks": 20,
            "persen": 85.0
          }
        ]
      },
      "ekonomi": {
        "skor": 147,
        "persen": 91.9,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 36,
            "maks": 40,
            "persen": 90.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 111,
            "maks": 120,
            "persen": 92.5
          }
        ]
      },
      "lingkungan": {
        "skor": 86,
        "persen": 95.6,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 61,
            "maks": 65,
            "persen": 93.8
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 67,
        "persen": 83.8,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 34,
            "maks": 35,
            "persen": 97.1
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 33,
            "maks": 45,
            "persen": 73.3
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Tata Kelola (83.8%)",
      "Ekonomi (91.9%)"
    ],
    "targetDimensi": [
      "Tata Kelola",
      "Ekonomi"
    ],
    "catatanMusrenbang": "Seluruh 6 dimensi ≥70%, namun masih terdapat 5 indikator berskor 1 (Ketersediaan merek dagang; Ketersediaan Pasar di Desa) yang perlu diintervensi.",
    "rekomendasiKategori": [
      "Pemerintahan Desa & Digitalisasi",
      "Pertanian, Peternakan & Pangan"
    ],
    "namaKepalaDesa": "Sahyan",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "-8.573128,116.180838",
    "alamatDesa": "Jalan Gora II Lingsar",
    "emailDesa": "lingsardesa01@gmail.com",
    "webDesa": "lingsar.desa.id",
    "masaJabatanKades": "6 tahun 3 bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 116.68
  },
  {
    "id": "desa-batu-kumbung-lingsar",
    "nama": "Batu Kumbung",
    "tipe": "Desa",
    "kecamatan": "Lingsar",
    "kodeWilayah": "5201122002",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.9307,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 93.49,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 591,
    "indeksKomposit": 6.5,
    "indikator": {
      "infrastruktur": 2.0,
      "pertanianPangan": 5.6,
      "pendidikanSDM": 10.0,
      "kesehatanStunting": -3.3,
      "ekonomiUMKM": 5.6,
      "lingkunganSampah": 8.9
    },
    "dimensi": {
      "layananDasar": {
        "skor": 161,
        "persen": 94.7,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 45,
            "maks": 45,
            "persen": 100.0
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 93,
            "maks": 100,
            "persen": 93.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ],
        "sub": {
          "pendidikan": 45,
          "kesehatan": 93,
          "utilitas": 23
        }
      },
      "sosial": {
        "skor": 79,
        "persen": 92.9,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 63,
            "maks": 65,
            "persen": 96.9
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 16,
            "maks": 20,
            "persen": 80.0
          }
        ]
      },
      "ekonomi": {
        "skor": 151,
        "persen": 94.4,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 40,
            "maks": 40,
            "persen": 100.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 111,
            "maks": 120,
            "persen": 92.5
          }
        ]
      },
      "lingkungan": {
        "skor": 82,
        "persen": 91.1,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 57,
            "maks": 65,
            "persen": 87.7
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 69,
        "persen": 86.2,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 29,
            "maks": 35,
            "persen": 82.9
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 40,
            "maks": 45,
            "persen": 88.9
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Tata Kelola (86.2%)",
      "Lingkungan (91.1%)"
    ],
    "targetDimensi": [
      "Tata Kelola",
      "Lingkungan"
    ],
    "catatanMusrenbang": "Seluruh 6 dimensi ≥70%, namun masih terdapat 4 indikator berskor 1 (Ketersediaan Pasar di Desa; Terdapat pemanfaatan Energi Baru Terbarukan di desa) yang perlu diintervensi.",
    "rekomendasiKategori": [
      "Pemerintahan Desa & Digitalisasi",
      "Sampah, Lingkungan & Kebencanaan"
    ],
    "namaKepalaDesa": "H.WIRYA ADI SAPUTRA",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "L : -8.6879* B: 115.7818*",
    "alamatDesa": "Jalan Gora II Batu Kumbung-Lingsar",
    "emailDesa": "desabatukumbung@gmail.com",
    "webDesa": "www.batukumbung.desa.id",
    "masaJabatanKades": "6 Tahun 2 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 115.9
  },
  {
    "id": "desa-sigerongan-lingsar",
    "nama": "Sigerongan",
    "tipe": "Desa",
    "kecamatan": "Lingsar",
    "kodeWilayah": "5201122003",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.8598,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 86.85,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 546,
    "indeksKomposit": 13.2,
    "indikator": {
      "infrastruktur": 8.0,
      "pertanianPangan": 10.6,
      "pendidikanSDM": 14.0,
      "kesehatanStunting": 2.2,
      "ekonomiUMKM": 10.6,
      "lingkunganSampah": 33.3
    },
    "dimensi": {
      "layananDasar": {
        "skor": 152,
        "persen": 89.4,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 43,
            "maks": 45,
            "persen": 95.6
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 88,
            "maks": 100,
            "persen": 88.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 21,
            "maks": 25,
            "persen": 84.0
          }
        ],
        "sub": {
          "pendidikan": 43,
          "kesehatan": 88,
          "utilitas": 21
        }
      },
      "sosial": {
        "skor": 70,
        "persen": 82.4,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 58,
            "maks": 65,
            "persen": 89.2
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 12,
            "maks": 20,
            "persen": 60.0
          }
        ]
      },
      "ekonomi": {
        "skor": 143,
        "persen": 89.4,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 36,
            "maks": 40,
            "persen": 90.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 107,
            "maks": 120,
            "persen": 89.2
          }
        ]
      },
      "lingkungan": {
        "skor": 60,
        "persen": 66.7,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 43,
            "maks": 65,
            "persen": 66.2
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 17,
            "maks": 25,
            "persen": 68.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 46,
        "persen": 92.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 17,
            "maks": 20,
            "persen": 85.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 75,
        "persen": 93.8,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 34,
            "maks": 35,
            "persen": 97.1
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 41,
            "maks": 45,
            "persen": 91.1
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (66.7%)",
      "Sosial (82.4%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Sosial"
    ],
    "catatanMusrenbang": "Terdapat 14 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (66.7%). Prioritas lapangan: Operasional ketersediaan layanan Tenaga Kesehatan di desa; Keberadaan kegiatan sosialisasi dan/atau advokasi terkait program jaminan kesehatan nasional di desa.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Keagamaan, Sosial & Budaya"
    ],
    "namaKepalaDesa": "Dian Siswadi Halisaswita SH",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "-8.5679839, 116,1560490",
    "alamatDesa": "Jalan Karang Bayan No.8 Desa Sigerongan",
    "emailDesa": "desasigerongan@gmail.com",
    "webDesa": "www.desasigerongan.go.id",
    "masaJabatanKades": "8 Tahun 2 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 107.67
  },
  {
    "id": "desa-duman-lingsar",
    "nama": "Duman",
    "tipe": "Desa",
    "kecamatan": "Lingsar",
    "kodeWilayah": "5201122004",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.8252,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 81.04,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 524,
    "indeksKomposit": 19.0,
    "indikator": {
      "infrastruktur": 10.0,
      "pertanianPangan": 29.4,
      "pendidikanSDM": 14.0,
      "kesehatanStunting": 14.4,
      "ekonomiUMKM": 29.4,
      "lingkunganSampah": 14.4
    },
    "dimensi": {
      "layananDasar": {
        "skor": 145,
        "persen": 85.3,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 43,
            "maks": 45,
            "persen": 95.6
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 77,
            "maks": 100,
            "persen": 77.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ],
        "sub": {
          "pendidikan": 43,
          "kesehatan": 77,
          "utilitas": 25
        }
      },
      "sosial": {
        "skor": 73,
        "persen": 85.9,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 59,
            "maks": 65,
            "persen": 90.8
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 14,
            "maks": 20,
            "persen": 70.0
          }
        ]
      },
      "ekonomi": {
        "skor": 113,
        "persen": 70.6,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 26,
            "maks": 40,
            "persen": 65.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 87,
            "maks": 120,
            "persen": 72.5
          }
        ]
      },
      "lingkungan": {
        "skor": 77,
        "persen": 85.6,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 54,
            "maks": 65,
            "persen": 83.1
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 45,
        "persen": 90.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 16,
            "maks": 20,
            "persen": 80.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 71,
        "persen": 88.8,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 32,
            "maks": 35,
            "persen": 91.4
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 39,
            "maks": 45,
            "persen": 86.7
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Ekonomi (70.6%)",
      "Layanan Dasar (85.3%)"
    ],
    "targetDimensi": [
      "Ekonomi",
      "Layanan Dasar"
    ],
    "catatanMusrenbang": "Seluruh 6 dimensi ≥70%, namun masih terdapat 15 indikator berskor 1 (Operasional ketersediaan layanan dokter di desa; Operasional ketersediaan layanan Bidan di desa) yang perlu diintervensi.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Pendidikan & Sekolah"
    ],
    "namaKepalaDesa": "SUHARDI, SH",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8.3350904S 116.857108E",
    "alamatDesa": "Jl. TGH Musa Abdillah Desa Duman Kecamatan Lingsar Kabupaten Lombok Barat Provinsi Nusa Tenggara Barat",
    "emailDesa": "dumandesa@gmail.com",
    "webDesa": "desaduman.id",
    "masaJabatanKades": "7 Tahun 6 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 100.47
  },
  {
    "id": "desa-karang-bayan-lingsar",
    "nama": "Karang Bayan",
    "tipe": "Desa",
    "kecamatan": "Lingsar",
    "kodeWilayah": "5201122005",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7827,
    "statusKemendesa": "MAJU",
    "skorBappenas": 76.36,
    "statusBappenas": "MAJU",
    "nilaiTotal": 497,
    "indeksKomposit": 23.6,
    "indikator": {
      "infrastruktur": 8.0,
      "pertanianPangan": 28.8,
      "pendidikanSDM": 32.0,
      "kesehatanStunting": 18.9,
      "ekonomiUMKM": 28.8,
      "lingkunganSampah": 13.3
    },
    "dimensi": {
      "layananDasar": {
        "skor": 128,
        "persen": 75.3,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 34,
            "maks": 45,
            "persen": 75.6
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 73,
            "maks": 100,
            "persen": 73.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 21,
            "maks": 25,
            "persen": 84.0
          }
        ],
        "sub": {
          "pendidikan": 34,
          "kesehatan": 73,
          "utilitas": 21
        }
      },
      "sosial": {
        "skor": 63,
        "persen": 74.1,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 59,
            "maks": 65,
            "persen": 90.8
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 4,
            "maks": 20,
            "persen": 20.0
          }
        ]
      },
      "ekonomi": {
        "skor": 114,
        "persen": 71.2,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 36,
            "maks": 40,
            "persen": 90.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 78,
            "maks": 120,
            "persen": 65.0
          }
        ]
      },
      "lingkungan": {
        "skor": 78,
        "persen": 86.7,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 61,
            "maks": 65,
            "persen": 93.8
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 17,
            "maks": 25,
            "persen": 68.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 46,
        "persen": 92.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 17,
            "maks": 20,
            "persen": 85.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 68,
        "persen": 85.0,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 32,
            "maks": 35,
            "persen": 91.4
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 36,
            "maks": 45,
            "persen": 80.0
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Ekonomi (71.2%)",
      "Sosial (74.1%)"
    ],
    "targetDimensi": [
      "Ekonomi",
      "Sosial"
    ],
    "catatanMusrenbang": "Seluruh 6 dimensi ≥70%, namun masih terdapat 24 indikator berskor 1 (Ketersediaan layanan dokter di desa; Operasional ketersediaan layanan dokter di desa) yang perlu diintervensi.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Keagamaan, Sosial & Budaya"
    ],
    "namaKepalaDesa": "SUDIRATI",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "Lat -8560537 Long 116.1787",
    "alamatDesa": "Jl. Karang Bayan Desa Karang Bayan Kecamatan Lingsar",
    "emailDesa": "desakarangbayan@gmail.com",
    "webDesa": "\" - \"",
    "masaJabatanKades": "19 Tahun 5 Bulan",
    "periodeKades": "Periode ke-3",
    "skorBappenasId": 94.67
  },
  {
    "id": "desa-langko-lingsar",
    "nama": "Langko",
    "tipe": "Desa",
    "kecamatan": "Lingsar",
    "kodeWilayah": "5201122006",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.885,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 87.01,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 562,
    "indeksKomposit": 13.0,
    "indikator": {
      "infrastruktur": 2.0,
      "pertanianPangan": 15.0,
      "pendidikanSDM": 16.0,
      "kesehatanStunting": 14.4,
      "ekonomiUMKM": 15.0,
      "lingkunganSampah": 13.3
    },
    "dimensi": {
      "layananDasar": {
        "skor": 144,
        "persen": 84.7,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 42,
            "maks": 45,
            "persen": 93.3
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 77,
            "maks": 100,
            "persen": 77.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ],
        "sub": {
          "pendidikan": 42,
          "kesehatan": 77,
          "utilitas": 25
        }
      },
      "sosial": {
        "skor": 78,
        "persen": 91.8,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 60,
            "maks": 65,
            "persen": 92.3
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 18,
            "maks": 20,
            "persen": 90.0
          }
        ]
      },
      "ekonomi": {
        "skor": 136,
        "persen": 85.0,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 40,
            "maks": 40,
            "persen": 100.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 96,
            "maks": 120,
            "persen": 80.0
          }
        ]
      },
      "lingkungan": {
        "skor": 78,
        "persen": 86.7,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 61,
            "maks": 65,
            "persen": 93.8
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 17,
            "maks": 25,
            "persen": 68.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 77,
        "persen": 96.2,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 35,
            "maks": 35,
            "persen": 100.0
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 42,
            "maks": 45,
            "persen": 93.3
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Layanan Dasar (84.7%)",
      "Ekonomi (85.0%)"
    ],
    "targetDimensi": [
      "Layanan Dasar",
      "Ekonomi"
    ],
    "catatanMusrenbang": "Seluruh 6 dimensi ≥70%, namun masih terdapat 14 indikator berskor 1 (Ketersediaan layanan dokter di desa; Operasional ketersediaan layanan dokter di desa) yang perlu diintervensi.",
    "rekomendasiKategori": [
      "Pendidikan & Sekolah",
      "Pertanian, Peternakan & Pangan"
    ],
    "namaKepalaDesa": "MAWARDI",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "-8.55674663242032,F31",
    "alamatDesa": "Jl. Marga Pati No.01 Desa Langko Kec Lingsar Kab. Lombok Barat 83371",
    "emailDesa": "langkodesapendidikan@gmail.com",
    "webDesa": "www.langko.desa.id",
    "masaJabatanKades": "8 Tahun",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 107.88
  },
  {
    "id": "desa-dasan-geria-lingsar",
    "nama": "Dasan Geria",
    "tipe": "Desa",
    "kecamatan": "Lingsar",
    "kodeWilayah": "5201122007",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.8819,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 86.91,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 560,
    "indeksKomposit": 13.1,
    "indikator": {
      "infrastruktur": 2.0,
      "pertanianPangan": 21.9,
      "pendidikanSDM": 12.0,
      "kesehatanStunting": -1.1,
      "ekonomiUMKM": 21.9,
      "lingkunganSampah": 8.9
    },
    "dimensi": {
      "layananDasar": {
        "skor": 154,
        "persen": 90.6,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 44,
            "maks": 45,
            "persen": 97.8
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 91,
            "maks": 100,
            "persen": 91.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 19,
            "maks": 25,
            "persen": 76.0
          }
        ],
        "sub": {
          "pendidikan": 44,
          "kesehatan": 91,
          "utilitas": 19
        }
      },
      "sosial": {
        "skor": 82,
        "persen": 96.5,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 64,
            "maks": 65,
            "persen": 98.5
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 18,
            "maks": 20,
            "persen": 90.0
          }
        ]
      },
      "ekonomi": {
        "skor": 125,
        "persen": 78.1,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 40,
            "maks": 40,
            "persen": 100.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 85,
            "maks": 120,
            "persen": 70.8
          }
        ]
      },
      "lingkungan": {
        "skor": 82,
        "persen": 91.1,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 57,
            "maks": 65,
            "persen": 87.7
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 68,
        "persen": 85.0,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 35,
            "maks": 35,
            "persen": 100.0
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 33,
            "maks": 45,
            "persen": 73.3
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Ekonomi (78.1%)",
      "Tata Kelola (85.0%)"
    ],
    "targetDimensi": [
      "Ekonomi",
      "Tata Kelola"
    ],
    "catatanMusrenbang": "Seluruh 6 dimensi ≥70%, namun masih terdapat 14 indikator berskor 1 (Operasional ketersediaan layanan Bidan di desa; Operasional Ketersediaan Air Minum di Desa dalam seminggu) yang perlu diintervensi.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Pemerintahan Desa & Digitalisasi"
    ],
    "namaKepalaDesa": "Fahrul Aziz",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "-8556596,116.147186",
    "alamatDesa": "Geria Selatan Desa Dasan Geria",
    "emailDesa": "dasangeria@gmail.com",
    "webDesa": "www.desadasangeria.co.id",
    "masaJabatanKades": "2 Tahun 10 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 107.75
  },
  {
    "id": "desa-peteluan-indah-lingsar",
    "nama": "Peteluan Indah",
    "tipe": "Desa",
    "kecamatan": "Lingsar",
    "kodeWilayah": "5201122008",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.8646,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 87.58,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 549,
    "indeksKomposit": 12.4,
    "indikator": {
      "infrastruktur": 16.0,
      "pertanianPangan": 17.5,
      "pendidikanSDM": 16.0,
      "kesehatanStunting": -5.6,
      "ekonomiUMKM": 17.5,
      "lingkunganSampah": 11.1
    },
    "dimensi": {
      "layananDasar": {
        "skor": 162,
        "persen": 95.3,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 42,
            "maks": 45,
            "persen": 93.3
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 95,
            "maks": 100,
            "persen": 95.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ],
        "sub": {
          "pendidikan": 42,
          "kesehatan": 95,
          "utilitas": 25
        }
      },
      "sosial": {
        "skor": 70,
        "persen": 82.4,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 62,
            "maks": 65,
            "persen": 95.4
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 8,
            "maks": 20,
            "persen": 40.0
          }
        ]
      },
      "ekonomi": {
        "skor": 132,
        "persen": 82.5,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 32,
            "maks": 40,
            "persen": 80.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 100,
            "maks": 120,
            "persen": 83.3
          }
        ]
      },
      "lingkungan": {
        "skor": 80,
        "persen": 88.9,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 55,
            "maks": 65,
            "persen": 84.6
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 42,
        "persen": 84.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 17,
            "maks": 20,
            "persen": 85.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 25,
            "maks": 30,
            "persen": 83.3
          }
        ]
      },
      "tataKelola": {
        "skor": 63,
        "persen": 78.8,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 35,
            "maks": 35,
            "persen": 100.0
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 28,
            "maks": 45,
            "persen": 62.2
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Tata Kelola (78.8%)",
      "Sosial (82.4%)"
    ],
    "targetDimensi": [
      "Tata Kelola",
      "Sosial"
    ],
    "catatanMusrenbang": "Seluruh 6 dimensi ≥70%, namun masih terdapat 13 indikator berskor 1 (Keberadaan Taman Bacaan Masyarakat/ Perpustakaan Desa; Operasional Taman Bacaan Masyarakat/ Perpustakaan Desa) yang perlu diintervensi.",
    "rekomendasiKategori": [
      "Pemerintahan Desa & Digitalisasi",
      "Keagamaan, Sosial & Budaya"
    ],
    "namaKepalaDesa": "NUR RAHMAN, SH.",
    "statusKepalaDesa": "Penjabat",
    "koordinatDesa": "8.573711S 116.160262E",
    "alamatDesa": "Jl. Gora II Dusun Bagik Nunggal Barat Desa Peteluan Indah Kecamatan Lingsar Kabupaten Lombok Barat",
    "emailDesa": "peteluanindah0@gmail.com",
    "webDesa": "http://www.peteluanindah-lombokbarat.desa.id/",
    "masaJabatanKades": "8 Tahun 3 Bulan",
    "periodeKades": "Periode ke-2",
    "skorBappenasId": 108.58
  },
  {
    "id": "desa-gegerung-lingsar",
    "nama": "Gegerung",
    "tipe": "Desa",
    "kecamatan": "Lingsar",
    "kodeWilayah": "5201122009",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7827,
    "statusKemendesa": "MAJU",
    "skorBappenas": 74.93,
    "statusBappenas": "MAJU",
    "nilaiTotal": 497,
    "indeksKomposit": 25.1,
    "indikator": {
      "infrastruktur": 2.0,
      "pertanianPangan": 37.5,
      "pendidikanSDM": 18.0,
      "kesehatanStunting": 22.2,
      "ekonomiUMKM": 37.5,
      "lingkunganSampah": 7.8
    },
    "dimensi": {
      "layananDasar": {
        "skor": 128,
        "persen": 75.3,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 41,
            "maks": 45,
            "persen": 91.1
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 70,
            "maks": 100,
            "persen": 70.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 17,
            "maks": 25,
            "persen": 68.0
          }
        ],
        "sub": {
          "pendidikan": 41,
          "kesehatan": 70,
          "utilitas": 17
        }
      },
      "sosial": {
        "skor": 70,
        "persen": 82.4,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 63,
            "maks": 65,
            "persen": 96.9
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 7,
            "maks": 20,
            "persen": 35.0
          }
        ]
      },
      "ekonomi": {
        "skor": 100,
        "persen": 62.5,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 36,
            "maks": 40,
            "persen": 90.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 64,
            "maks": 120,
            "persen": 53.3
          }
        ]
      },
      "lingkungan": {
        "skor": 83,
        "persen": 92.2,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 58,
            "maks": 65,
            "persen": 89.2
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 67,
        "persen": 83.8,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 34,
            "maks": 35,
            "persen": 97.1
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 33,
            "maks": 45,
            "persen": 73.3
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Ekonomi (62.5%)",
      "Layanan Dasar (75.3%)"
    ],
    "targetDimensi": [
      "Ekonomi",
      "Layanan Dasar"
    ],
    "catatanMusrenbang": "Terdapat 27 indikator defisit (Skor 1) dengan sektor kritis: Ekonomi (62.5%). Prioritas lapangan: Operasional ketersediaan layanan Bidan di desa; Ketersediaan layanan Tenaga Kesehatan di Desa.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Pendidikan & Sekolah"
    ],
    "namaKepalaDesa": "Harun",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "-8.550770,116.147559",
    "alamatDesa": "Desa Gegerung Kecamatan Lingsar kabupaten Lombok Barat",
    "emailDesa": "gegerungdesa.@gmail.com",
    "webDesa": "www.desagegerung.id",
    "masaJabatanKades": "7 Tahun",
    "periodeKades": "Periode ke-2",
    "skorBappenasId": 92.9
  },
  {
    "id": "desa-batu-mekar-lingsar",
    "nama": "Batu Mekar",
    "tipe": "Desa",
    "kecamatan": "Lingsar",
    "kodeWilayah": "5201122010",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.885,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 89.02,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 562,
    "indeksKomposit": 11.0,
    "indikator": {
      "infrastruktur": 4.0,
      "pertanianPangan": 11.2,
      "pendidikanSDM": 20.0,
      "kesehatanStunting": -3.3,
      "ekonomiUMKM": 11.2,
      "lingkunganSampah": 15.6
    },
    "dimensi": {
      "layananDasar": {
        "skor": 156,
        "persen": 91.8,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 40,
            "maks": 45,
            "persen": 88.9
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 93,
            "maks": 100,
            "persen": 93.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ],
        "sub": {
          "pendidikan": 40,
          "kesehatan": 93,
          "utilitas": 23
        }
      },
      "sosial": {
        "skor": 80,
        "persen": 94.1,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 63,
            "maks": 65,
            "persen": 96.9
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 17,
            "maks": 20,
            "persen": 85.0
          }
        ]
      },
      "ekonomi": {
        "skor": 142,
        "persen": 88.8,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 38,
            "maks": 40,
            "persen": 95.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 104,
            "maks": 120,
            "persen": 86.7
          }
        ]
      },
      "lingkungan": {
        "skor": 76,
        "persen": 84.4,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 57,
            "maks": 65,
            "persen": 87.7
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 19,
            "maks": 25,
            "persen": 76.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 48,
        "persen": 96.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 19,
            "maks": 20,
            "persen": 95.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 60,
        "persen": 75.0,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 32,
            "maks": 35,
            "persen": 91.4
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 28,
            "maks": 45,
            "persen": 62.2
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Tata Kelola (75.0%)",
      "Lingkungan (84.4%)"
    ],
    "targetDimensi": [
      "Tata Kelola",
      "Lingkungan"
    ],
    "catatanMusrenbang": "Seluruh 6 dimensi ≥70%, namun masih terdapat 9 indikator berskor 1 (Ketersediaan Penginapan di Desa; Ketersediaan Lembaga Ekonomi KUD) yang perlu diintervensi.",
    "rekomendasiKategori": [
      "Pemerintahan Desa & Digitalisasi",
      "Sampah, Lingkungan & Kebencanaan"
    ],
    "namaKepalaDesa": "NAJAMUDIN",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "-8.554148 116.206991",
    "alamatDesa": "Jalan Taman Sari No. 1 Batu Mekar",
    "emailDesa": "desabatumekar@gmail.com",
    "webDesa": "\"-\"",
    "masaJabatanKades": "1 Tahun ( Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 110.36
  },
  {
    "id": "desa-giri-madia-lingsar",
    "nama": "Giri Madia",
    "tipe": "Desa",
    "kecamatan": "Lingsar",
    "kodeWilayah": "5201122011",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7354,
    "statusKemendesa": "MAJU",
    "skorBappenas": 72.55,
    "statusBappenas": "MAJU",
    "nilaiTotal": 467,
    "indeksKomposit": 27.5,
    "indikator": {
      "infrastruktur": 18.0,
      "pertanianPangan": 23.8,
      "pendidikanSDM": 24.0,
      "kesehatanStunting": 36.7,
      "ekonomiUMKM": 23.8,
      "lingkunganSampah": 26.7
    },
    "dimensi": {
      "layananDasar": {
        "skor": 114,
        "persen": 67.1,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 38,
            "maks": 45,
            "persen": 84.4
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 57,
            "maks": 100,
            "persen": 57.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 19,
            "maks": 25,
            "persen": 76.0
          }
        ],
        "sub": {
          "pendidikan": 38,
          "kesehatan": 57,
          "utilitas": 19
        }
      },
      "sosial": {
        "skor": 60,
        "persen": 70.6,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 50,
            "maks": 65,
            "persen": 76.9
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 10,
            "maks": 20,
            "persen": 50.0
          }
        ]
      },
      "ekonomi": {
        "skor": 122,
        "persen": 76.2,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 36,
            "maks": 40,
            "persen": 90.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 86,
            "maks": 120,
            "persen": 71.7
          }
        ]
      },
      "lingkungan": {
        "skor": 66,
        "persen": 73.3,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 47,
            "maks": 65,
            "persen": 72.3
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 19,
            "maks": 25,
            "persen": 76.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 41,
        "persen": 82.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 19,
            "maks": 20,
            "persen": 95.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 22,
            "maks": 30,
            "persen": 73.3
          }
        ]
      },
      "tataKelola": {
        "skor": 64,
        "persen": 80.0,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 35,
            "maks": 35,
            "persen": 100.0
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 29,
            "maks": 45,
            "persen": 64.4
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Layanan Dasar (67.1%)",
      "Sosial (70.6%)"
    ],
    "targetDimensi": [
      "Layanan Dasar",
      "Sosial"
    ],
    "catatanMusrenbang": "Terdapat 32 indikator defisit (Skor 1) dengan sektor kritis: Layanan Dasar (67.1%). Prioritas lapangan: Kemudahan Akses menuju SD/MI/Sederajat terdekat di Desa; Ketersediaan layanan dokter di desa.",
    "rekomendasiKategori": [
      "Pendidikan & Sekolah",
      "Keagamaan, Sosial & Budaya"
    ],
    "namaKepalaDesa": "SAMIUDIN",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "-8.534348, 116.168025",
    "alamatDesa": "Jln Darma Bakti Desa Giri Madia",
    "emailDesa": "girimadia22@gmail.com",
    "webDesa": "Kantor Desa Giri Madia",
    "masaJabatanKades": "8 tahun",
    "periodeKades": "Periode ke-2",
    "skorBappenasId": 89.94
  },
  {
    "id": "desa-bug-bug-lingsar",
    "nama": "Bug-Bug",
    "tipe": "Desa",
    "kecamatan": "Lingsar",
    "kodeWilayah": "5201122012",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.8598,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 87.21,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 546,
    "indeksKomposit": 12.8,
    "indikator": {
      "infrastruktur": 6.0,
      "pertanianPangan": 18.8,
      "pendidikanSDM": 16.0,
      "kesehatanStunting": -11.1,
      "ekonomiUMKM": 18.8,
      "lingkunganSampah": 35.6
    },
    "dimensi": {
      "layananDasar": {
        "skor": 167,
        "persen": 98.2,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 42,
            "maks": 45,
            "persen": 93.3
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 100,
            "maks": 100,
            "persen": 100.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ],
        "sub": {
          "pendidikan": 42,
          "kesehatan": 100,
          "utilitas": 25
        }
      },
      "sosial": {
        "skor": 75,
        "persen": 88.2,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 63,
            "maks": 65,
            "persen": 96.9
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 12,
            "maks": 20,
            "persen": 60.0
          }
        ]
      },
      "ekonomi": {
        "skor": 130,
        "persen": 81.2,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 32,
            "maks": 40,
            "persen": 80.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 98,
            "maks": 120,
            "persen": 81.7
          }
        ]
      },
      "lingkungan": {
        "skor": 58,
        "persen": 64.4,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 41,
            "maks": 65,
            "persen": 63.1
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 17,
            "maks": 25,
            "persen": 68.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 47,
        "persen": 94.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 27,
            "maks": 30,
            "persen": 90.0
          }
        ]
      },
      "tataKelola": {
        "skor": 69,
        "persen": 86.2,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 32,
            "maks": 35,
            "persen": 91.4
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 37,
            "maks": 45,
            "persen": 82.2
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (64.4%)",
      "Ekonomi (81.2%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Ekonomi"
    ],
    "catatanMusrenbang": "Terdapat 18 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (64.4%). Prioritas lapangan: Ketersediaan Fasilitas dan kondisi/keadaan sebagian besar Fasilitas olahraga di Desa; Keberadaan ruang publik terbuka/keadaan sebagian besar Fasilitas Ruang Publik Terbuka di Desa.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Pertanian, Peternakan & Pangan"
    ],
    "namaKepalaDesa": "H. SUKARDAN ABDY, SP",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "18.11566 BT/16.324 LU",
    "alamatDesa": "JL. GORA 2 DESA BUG-BUG",
    "emailDesa": "desabugbug69@gmail.com",
    "webDesa": "desa bug-bug",
    "masaJabatanKades": "6 Tahun 2 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 108.12
  },
  {
    "id": "desa-gegelang-lingsar",
    "nama": "Gegelang",
    "tipe": "Desa",
    "kecamatan": "Lingsar",
    "kodeWilayah": "5201122013",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.8472,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 85.48,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 538,
    "indeksKomposit": 14.5,
    "indikator": {
      "infrastruktur": 2.0,
      "pertanianPangan": 13.1,
      "pendidikanSDM": 16.0,
      "kesehatanStunting": 2.2,
      "ekonomiUMKM": 13.1,
      "lingkunganSampah": 28.9
    },
    "dimensi": {
      "layananDasar": {
        "skor": 151,
        "persen": 88.8,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 42,
            "maks": 45,
            "persen": 93.3
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 88,
            "maks": 100,
            "persen": 88.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 21,
            "maks": 25,
            "persen": 84.0
          }
        ],
        "sub": {
          "pendidikan": 42,
          "kesehatan": 88,
          "utilitas": 21
        }
      },
      "sosial": {
        "skor": 75,
        "persen": 88.2,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 60,
            "maks": 65,
            "persen": 92.3
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 15,
            "maks": 20,
            "persen": 75.0
          }
        ]
      },
      "ekonomi": {
        "skor": 139,
        "persen": 86.9,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 36,
            "maks": 40,
            "persen": 90.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 103,
            "maks": 120,
            "persen": 85.8
          }
        ]
      },
      "lingkungan": {
        "skor": 64,
        "persen": 71.1,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 45,
            "maks": 65,
            "persen": 69.2
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 19,
            "maks": 25,
            "persen": 76.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 19,
            "maks": 20,
            "persen": 95.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 30,
            "maks": 30,
            "persen": 100.0
          }
        ]
      },
      "tataKelola": {
        "skor": 60,
        "persen": 75.0,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 33,
            "maks": 35,
            "persen": 94.3
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 27,
            "maks": 45,
            "persen": 60.0
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (71.1%)",
      "Tata Kelola (75.0%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Tata Kelola"
    ],
    "catatanMusrenbang": "Seluruh 6 dimensi ≥70%, namun masih terdapat 14 indikator berskor 1 (Keberadaan Penyedia Transportasi penunjang menuju layanan Dokter; Ketersediaan merek dagang) yang perlu diintervensi.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Pemerintahan Desa & Digitalisasi"
    ],
    "namaKepalaDesa": "H. HUSNU MUKTAR",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "-8.587092 116.176325",
    "alamatDesa": "Jl. Kalingga II Desa Gegelang Kecamatan Lingsar Kabupaten Lombok Barat",
    "emailDesa": "desagegelang@gmail.com",
    "webDesa": "gegelang.desa.id",
    "masaJabatanKades": "7 Tahun 6 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 105.98
  },
  {
    "id": "desa-saribaye-lingsar",
    "nama": "Saribaye",
    "tipe": "Desa",
    "kecamatan": "Lingsar",
    "kodeWilayah": "5201122014",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.9008,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 89.44,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 572,
    "indeksKomposit": 10.6,
    "indikator": {
      "infrastruktur": 4.0,
      "pertanianPangan": 11.2,
      "pendidikanSDM": 14.0,
      "kesehatanStunting": 8.9,
      "ekonomiUMKM": 11.2,
      "lingkunganSampah": 6.7
    },
    "dimensi": {
      "layananDasar": {
        "skor": 150,
        "persen": 88.2,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 43,
            "maks": 45,
            "persen": 95.6
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 82,
            "maks": 100,
            "persen": 82.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ],
        "sub": {
          "pendidikan": 43,
          "kesehatan": 82,
          "utilitas": 25
        }
      },
      "sosial": {
        "skor": 78,
        "persen": 91.8,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 63,
            "maks": 65,
            "persen": 96.9
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 15,
            "maks": 20,
            "persen": 75.0
          }
        ]
      },
      "ekonomi": {
        "skor": 142,
        "persen": 88.8,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 40,
            "maks": 40,
            "persen": 100.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 102,
            "maks": 120,
            "persen": 85.0
          }
        ]
      },
      "lingkungan": {
        "skor": 84,
        "persen": 93.3,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 59,
            "maks": 65,
            "persen": 90.8
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 48,
        "persen": 96.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 19,
            "maks": 20,
            "persen": 95.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 70,
        "persen": 87.5,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 33,
            "maks": 35,
            "persen": 94.3
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 37,
            "maks": 45,
            "persen": 82.2
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Tata Kelola (87.5%)",
      "Layanan Dasar (88.2%)"
    ],
    "targetDimensi": [
      "Tata Kelola",
      "Layanan Dasar"
    ],
    "catatanMusrenbang": "Seluruh 6 dimensi ≥70%, namun masih terdapat 9 indikator berskor 1 (Ketersediaan layanan dokter di desa; Operasional ketersediaan layanan dokter di desa) yang perlu diintervensi.",
    "rekomendasiKategori": [
      "Pemerintahan Desa & Digitalisasi",
      "Pendidikan & Sekolah"
    ],
    "namaKepalaDesa": "ABDURRAHMAN, S.S",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8.342238S 116.1045318E",
    "alamatDesa": "Sandongan Timur Desa saribaye Kecamtan Lingsar",
    "emailDesa": "desasaribayesakti@gmail.com",
    "webDesa": "https://desasaribaye.websites.co.in",
    "masaJabatanKades": "6 Tahun 4 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 110.88
  },
  {
    "id": "desa-gontoran-lingsar",
    "nama": "Gontoran",
    "tipe": "Desa",
    "kecamatan": "Lingsar",
    "kodeWilayah": "5201122015",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.8724,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 86.13,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 554,
    "indeksKomposit": 13.9,
    "indikator": {
      "infrastruktur": 2.0,
      "pertanianPangan": 13.8,
      "pendidikanSDM": 18.0,
      "kesehatanStunting": 11.1,
      "ekonomiUMKM": 13.8,
      "lingkunganSampah": 15.6
    },
    "dimensi": {
      "layananDasar": {
        "skor": 142,
        "persen": 83.5,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 41,
            "maks": 45,
            "persen": 91.1
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 80,
            "maks": 100,
            "persen": 80.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 21,
            "maks": 25,
            "persen": 84.0
          }
        ],
        "sub": {
          "pendidikan": 41,
          "kesehatan": 80,
          "utilitas": 21
        }
      },
      "sosial": {
        "skor": 75,
        "persen": 88.2,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 61,
            "maks": 65,
            "persen": 93.8
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 14,
            "maks": 20,
            "persen": 70.0
          }
        ]
      },
      "ekonomi": {
        "skor": 138,
        "persen": 86.2,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 36,
            "maks": 40,
            "persen": 90.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 102,
            "maks": 120,
            "persen": 85.0
          }
        ]
      },
      "lingkungan": {
        "skor": 76,
        "persen": 84.4,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 51,
            "maks": 65,
            "persen": 78.5
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 74,
        "persen": 92.5,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 34,
            "maks": 35,
            "persen": 97.1
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 40,
            "maks": 45,
            "persen": 88.9
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Layanan Dasar (83.5%)",
      "Lingkungan (84.4%)"
    ],
    "targetDimensi": [
      "Layanan Dasar",
      "Lingkungan"
    ],
    "catatanMusrenbang": "Seluruh 6 dimensi ≥70%, namun masih terdapat 12 indikator berskor 1 (Ketersediaan layanan dokter di desa; Operasional ketersediaan layanan dokter di desa) yang perlu diintervensi.",
    "rekomendasiKategori": [
      "Pendidikan & Sekolah",
      "Sampah, Lingkungan & Kebencanaan"
    ],
    "namaKepalaDesa": "SALIHIN",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "C588+RMX,   Lingsar",
    "alamatDesa": "Jln. Baru Mekar, Dusun Gontoran Daye, Gontoran, Lingsar",
    "emailDesa": "desagontoran@gmail.com",
    "webDesa": "gontoran.desa.id",
    "masaJabatanKades": "13 tahun 7 bulan",
    "periodeKades": "Periode ke-2",
    "skorBappenasId": 106.78
  },
  {
    "id": "desa-lembar-lembar",
    "nama": "Lembar",
    "tipe": "Desa",
    "kecamatan": "Lembar",
    "kodeWilayah": "5201132001",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7039,
    "statusKemendesa": "MAJU",
    "skorBappenas": 71.08,
    "statusBappenas": "MAJU",
    "nilaiTotal": 447,
    "indeksKomposit": 28.9,
    "indikator": {
      "infrastruktur": 20.0,
      "pertanianPangan": 21.2,
      "pendidikanSDM": 16.0,
      "kesehatanStunting": 40.0,
      "ekonomiUMKM": 21.2,
      "lingkunganSampah": 45.6
    },
    "dimensi": {
      "layananDasar": {
        "skor": 117,
        "persen": 68.8,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 42,
            "maks": 45,
            "persen": 93.3
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 54,
            "maks": 100,
            "persen": 54.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 21,
            "maks": 25,
            "persen": 84.0
          }
        ],
        "sub": {
          "pendidikan": 42,
          "kesehatan": 54,
          "utilitas": 21
        }
      },
      "sosial": {
        "skor": 59,
        "persen": 69.4,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 52,
            "maks": 65,
            "persen": 80.0
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 7,
            "maks": 20,
            "persen": 35.0
          }
        ]
      },
      "ekonomi": {
        "skor": 126,
        "persen": 78.8,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 30,
            "maks": 40,
            "persen": 75.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 96,
            "maks": 120,
            "persen": 80.0
          }
        ]
      },
      "lingkungan": {
        "skor": 49,
        "persen": 54.4,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 44,
            "maks": 65,
            "persen": 67.7
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 5,
            "maks": 25,
            "persen": 20.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 40,
        "persen": 80.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 18,
            "maks": 20,
            "persen": 90.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 22,
            "maks": 30,
            "persen": 73.3
          }
        ]
      },
      "tataKelola": {
        "skor": 56,
        "persen": 70.0,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 32,
            "maks": 35,
            "persen": 91.4
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 24,
            "maks": 45,
            "persen": 53.3
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (54.4%)",
      "Layanan Dasar (68.8%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Layanan Dasar"
    ],
    "catatanMusrenbang": "Terdapat 37 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (54.4%), Layanan Dasar (68.8%), Sosial (69.4%). Prioritas lapangan: Ketersediaan layanan dokter di desa; Operasional ketersediaan layanan dokter di desa.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Pendidikan & Sekolah"
    ],
    "namaKepalaDesa": "Sainah",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8.699836S 116.072038E",
    "alamatDesa": "Jalan Kemakmuran Kebin Bongor",
    "emailDesa": "desaembar4@gmail.com",
    "webDesa": "website desa lembar",
    "masaJabatanKades": "12 Tahun",
    "periodeKades": "Periode ke-2",
    "skorBappenasId": 88.12
  },
  {
    "id": "desa-jembatan-kembar-lembar",
    "nama": "Jembatan Kembar",
    "tipe": "Desa",
    "kecamatan": "Lembar",
    "kodeWilayah": "5201132002",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mendesak",
    "skorKemendesa": 0.6898,
    "statusKemendesa": "BERKEMBANG",
    "skorBappenas": 70.17,
    "statusBappenas": "MAJU",
    "nilaiTotal": 438,
    "indeksKomposit": 29.8,
    "indikator": {
      "infrastruktur": 2.0,
      "pertanianPangan": 36.9,
      "pendidikanSDM": 16.0,
      "kesehatanStunting": 15.6,
      "ekonomiUMKM": 36.9,
      "lingkunganSampah": 48.9
    },
    "dimensi": {
      "layananDasar": {
        "skor": 143,
        "persen": 84.1,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 42,
            "maks": 45,
            "persen": 93.3
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 76,
            "maks": 100,
            "persen": 76.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ],
        "sub": {
          "pendidikan": 42,
          "kesehatan": 76,
          "utilitas": 25
        }
      },
      "sosial": {
        "skor": 52,
        "persen": 61.2,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 47,
            "maks": 65,
            "persen": 72.3
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 5,
            "maks": 20,
            "persen": 25.0
          }
        ]
      },
      "ekonomi": {
        "skor": 101,
        "persen": 63.1,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 20,
            "maks": 40,
            "persen": 50.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 81,
            "maks": 120,
            "persen": 67.5
          }
        ]
      },
      "lingkungan": {
        "skor": 46,
        "persen": 51.1,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 37,
            "maks": 65,
            "persen": 56.9
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 9,
            "maks": 25,
            "persen": 36.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 47,
        "persen": 58.8,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 23,
            "maks": 35,
            "persen": 65.7
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 24,
            "maks": 45,
            "persen": 53.3
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (51.1%)",
      "Tata Kelola (58.8%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Tata Kelola"
    ],
    "catatanMusrenbang": "Terdapat 40 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (51.1%), Tata Kelola (58.8%), Sosial (61.2%), Ekonomi (63.1%). Prioritas lapangan: Ketersediaan layanan Tenaga Kesehatan di Desa; Operasional ketersediaan layanan Tenaga Kesehatan di desa.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Pemerintahan Desa & Digitalisasi"
    ],
    "namaKepalaDesa": "ZAINUDDIN, S.Si",
    "statusKepalaDesa": "Penjabat",
    "koordinatDesa": "-8.720798 S,116.08227 E",
    "alamatDesa": "Jalan Raya Yos Suudarso Jembatan Kembar-Lembar",
    "emailDesa": "desajakem808@gmail.com",
    "webDesa": "jembatankembar6@gmail.com",
    "masaJabatanKades": "1 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 86.99
  },
  {
    "id": "desa-mareje-lembar",
    "nama": "Mareje",
    "tipe": "Desa",
    "kecamatan": "Lembar",
    "kodeWilayah": "5201132003",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mendesak",
    "skorKemendesa": 0.652,
    "statusKemendesa": "BERKEMBANG",
    "skorBappenas": 65.44,
    "statusBappenas": "BERKEMBANG",
    "nilaiTotal": 414,
    "indeksKomposit": 34.6,
    "indikator": {
      "infrastruktur": 8.0,
      "pertanianPangan": 50.0,
      "pendidikanSDM": 26.0,
      "kesehatanStunting": 5.6,
      "ekonomiUMKM": 50.0,
      "lingkunganSampah": 44.4
    },
    "dimensi": {
      "layananDasar": {
        "skor": 141,
        "persen": 82.9,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 37,
            "maks": 45,
            "persen": 82.2
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 85,
            "maks": 100,
            "persen": 85.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 19,
            "maks": 25,
            "persen": 76.0
          }
        ],
        "sub": {
          "pendidikan": 37,
          "kesehatan": 85,
          "utilitas": 19
        }
      },
      "sosial": {
        "skor": 38,
        "persen": 44.7,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 34,
            "maks": 65,
            "persen": 52.3
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 4,
            "maks": 20,
            "persen": 20.0
          }
        ]
      },
      "ekonomi": {
        "skor": 80,
        "persen": 50.0,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 20,
            "maks": 40,
            "persen": 50.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 60,
            "maks": 120,
            "persen": 50.0
          }
        ]
      },
      "lingkungan": {
        "skor": 50,
        "persen": 55.6,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 41,
            "maks": 65,
            "persen": 63.1
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 9,
            "maks": 25,
            "persen": 36.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 46,
        "persen": 92.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 26,
            "maks": 30,
            "persen": 86.7
          }
        ]
      },
      "tataKelola": {
        "skor": 59,
        "persen": 73.8,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 35,
            "maks": 35,
            "persen": 100.0
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 24,
            "maks": 45,
            "persen": 53.3
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Sosial (44.7%)",
      "Ekonomi (50.0%)"
    ],
    "targetDimensi": [
      "Sosial",
      "Ekonomi"
    ],
    "catatanMusrenbang": "Terdapat 47 indikator defisit (Skor 1) dengan sektor kritis: Sosial (44.7%), Ekonomi (50.0%), Lingkungan (55.6%). Prioritas lapangan: Kemudahan Akses menuju SMA/SMK/MA/MAK/Sederajat terdekat di Desa; Operasional ketersediaan layanan dokter di desa.",
    "rekomendasiKategori": [
      "Keagamaan, Sosial & Budaya",
      "Pertanian, Peternakan & Pangan"
    ],
    "namaKepalaDesa": "H. MUHSIN SALIM",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "-8.4726 S, 116.06113 E",
    "alamatDesa": "jln. Persada Ganjar, Mareje lembar Lombok Barat",
    "emailDesa": "desamareje19@gmail.com",
    "webDesa": "",
    "masaJabatanKades": "4 Tahun 10 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 81.13
  },
  {
    "id": "desa-sekotong-timur-lembar",
    "nama": "Sekotong Timur",
    "tipe": "Desa",
    "kecamatan": "Lembar",
    "kodeWilayah": "5201132004",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mendesak",
    "skorKemendesa": 0.6063,
    "statusKemendesa": "BERKEMBANG",
    "skorBappenas": 59.9,
    "statusBappenas": "BERKEMBANG",
    "nilaiTotal": 385,
    "indeksKomposit": 40.1,
    "indikator": {
      "infrastruktur": 18.0,
      "pertanianPangan": 51.2,
      "pendidikanSDM": 22.0,
      "kesehatanStunting": 32.2,
      "ekonomiUMKM": 51.2,
      "lingkunganSampah": 48.9
    },
    "dimensi": {
      "layananDasar": {
        "skor": 119,
        "persen": 70.0,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 39,
            "maks": 45,
            "persen": 86.7
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 61,
            "maks": 100,
            "persen": 61.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 19,
            "maks": 25,
            "persen": 76.0
          }
        ],
        "sub": {
          "pendidikan": 39,
          "kesehatan": 61,
          "utilitas": 19
        }
      },
      "sosial": {
        "skor": 36,
        "persen": 42.4,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 31,
            "maks": 65,
            "persen": 47.7
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 5,
            "maks": 20,
            "persen": 25.0
          }
        ]
      },
      "ekonomi": {
        "skor": 78,
        "persen": 48.8,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 14,
            "maks": 40,
            "persen": 35.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 64,
            "maks": 120,
            "persen": 53.3
          }
        ]
      },
      "lingkungan": {
        "skor": 46,
        "persen": 51.1,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 41,
            "maks": 65,
            "persen": 63.1
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 5,
            "maks": 25,
            "persen": 20.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 41,
        "persen": 82.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 12,
            "maks": 20,
            "persen": 60.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 65,
        "persen": 81.2,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 31,
            "maks": 35,
            "persen": 88.6
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 34,
            "maks": 45,
            "persen": 75.6
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Sosial (42.4%)",
      "Ekonomi (48.8%)"
    ],
    "targetDimensi": [
      "Sosial",
      "Ekonomi"
    ],
    "catatanMusrenbang": "Terdapat 52 indikator defisit (Skor 1) dengan sektor kritis: Sosial (42.4%), Ekonomi (48.8%), Lingkungan (51.1%). Prioritas lapangan: Ketersediaan layanan dokter di desa; Operasional ketersediaan layanan dokter di desa.",
    "rekomendasiKategori": [
      "Keagamaan, Sosial & Budaya",
      "Pertanian, Peternakan & Pangan"
    ],
    "namaKepalaDesa": "H. MARWAN HAKIM, SH",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "-8.699725 S 116.071956 E",
    "alamatDesa": "Jl. Sekotong Jelateng, jelateng Sedenggang",
    "emailDesa": "sekotongtimur@gmail.com",
    "webDesa": "www.sekotongtimur.com",
    "masaJabatanKades": "2 Tahun 10 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 74.27
  },
  {
    "id": "desa-labuan-tereng-lembar",
    "nama": "Labuan Tereng",
    "tipe": "Desa",
    "kecamatan": "Lembar",
    "kodeWilayah": "5201132005",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7732,
    "statusKemendesa": "MAJU",
    "skorBappenas": 78.06,
    "statusBappenas": "MAJU",
    "nilaiTotal": 491,
    "indeksKomposit": 21.9,
    "indikator": {
      "infrastruktur": 4.0,
      "pertanianPangan": 20.6,
      "pendidikanSDM": 10.0,
      "kesehatanStunting": 17.8,
      "ekonomiUMKM": 20.6,
      "lingkunganSampah": 41.1
    },
    "dimensi": {
      "layananDasar": {
        "skor": 140,
        "persen": 82.4,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 45,
            "maks": 45,
            "persen": 100.0
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 74,
            "maks": 100,
            "persen": 74.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 21,
            "maks": 25,
            "persen": 84.0
          }
        ],
        "sub": {
          "pendidikan": 45,
          "kesehatan": 74,
          "utilitas": 21
        }
      },
      "sosial": {
        "skor": 64,
        "persen": 75.3,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 55,
            "maks": 65,
            "persen": 84.6
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 9,
            "maks": 20,
            "persen": 45.0
          }
        ]
      },
      "ekonomi": {
        "skor": 127,
        "persen": 79.4,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 36,
            "maks": 40,
            "persen": 90.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 91,
            "maks": 120,
            "persen": 75.8
          }
        ]
      },
      "lingkungan": {
        "skor": 53,
        "persen": 58.9,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 37,
            "maks": 65,
            "persen": 56.9
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 16,
            "maks": 25,
            "persen": 64.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 48,
        "persen": 96.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 19,
            "maks": 20,
            "persen": 95.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 59,
        "persen": 73.8,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 34,
            "maks": 35,
            "persen": 97.1
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 25,
            "maks": 45,
            "persen": 55.6
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (58.9%)",
      "Tata Kelola (73.8%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Tata Kelola"
    ],
    "catatanMusrenbang": "Terdapat 25 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (58.9%). Prioritas lapangan: Operasional ketersediaan layanan dokter di desa; Keberadaan Penyedia Transportasi penunjang menuju layanan Dokter.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Pemerintahan Desa & Digitalisasi"
    ],
    "namaKepalaDesa": "HUMAIDI USAI, SH",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "-8.699725 S, 116.071956 E",
    "alamatDesa": "Jln.Datu Kedaro kebon Talo Labuan Tereng Kecamatan Lembar Lombok Barat Kode Post 83364",
    "emailDesa": "humaslabuantereng@gmail.com",
    "webDesa": "labuantereng.desa.id",
    "masaJabatanKades": "8 Tahun",
    "periodeKades": "Periode ke-2",
    "skorBappenasId": 96.77
  },
  {
    "id": "desa-jembatan-gantung-lembar",
    "nama": "Jembatan Gantung",
    "tipe": "Desa",
    "kecamatan": "Lembar",
    "kodeWilayah": "5201132006",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7638,
    "statusKemendesa": "MAJU",
    "skorBappenas": 76.86,
    "statusBappenas": "MAJU",
    "nilaiTotal": 485,
    "indeksKomposit": 23.1,
    "indikator": {
      "infrastruktur": 2.0,
      "pertanianPangan": 21.9,
      "pendidikanSDM": 20.0,
      "kesehatanStunting": 20.0,
      "ekonomiUMKM": 21.9,
      "lingkunganSampah": 44.4
    },
    "dimensi": {
      "layananDasar": {
        "skor": 137,
        "persen": 80.6,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 40,
            "maks": 45,
            "persen": 88.9
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 72,
            "maks": 100,
            "persen": 72.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ],
        "sub": {
          "pendidikan": 40,
          "kesehatan": 72,
          "utilitas": 25
        }
      },
      "sosial": {
        "skor": 70,
        "persen": 82.4,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 64,
            "maks": 65,
            "persen": 98.5
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 6,
            "maks": 20,
            "persen": 30.0
          }
        ]
      },
      "ekonomi": {
        "skor": 125,
        "persen": 78.1,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 32,
            "maks": 40,
            "persen": 80.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 93,
            "maks": 120,
            "persen": 77.5
          }
        ]
      },
      "lingkungan": {
        "skor": 50,
        "persen": 55.6,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 37,
            "maks": 65,
            "persen": 56.9
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 13,
            "maks": 25,
            "persen": 52.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 54,
        "persen": 67.5,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 35,
            "maks": 35,
            "persen": 100.0
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 19,
            "maks": 45,
            "persen": 42.2
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (55.6%)",
      "Tata Kelola (67.5%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Tata Kelola"
    ],
    "catatanMusrenbang": "Terdapat 28 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (55.6%), Tata Kelola (67.5%). Prioritas lapangan: Ketersediaan layanan Tenaga Kesehatan di Desa; Operasional ketersediaan layanan Tenaga Kesehatan di desa.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Pemerintahan Desa & Digitalisasi"
    ],
    "namaKepalaDesa": "SUHAIMI",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "Garis Lintang -8,699699, Garis Bujur 116103973",
    "alamatDesa": "Jalan Raya Lembar Jembatan Gantung Kecamatan Lembar Lomok Barat.\nKode Pos ( 83364 )",
    "emailDesa": "desajantung@gmail.com",
    "webDesa": "",
    "masaJabatanKades": "13 Tahun 2 Bulan",
    "periodeKades": "Periode ke-2",
    "skorBappenasId": 95.29
  },
  {
    "id": "desa-lembar-selatan-lembar",
    "nama": "Lembar Selatan",
    "tipe": "Desa",
    "kecamatan": "Lembar",
    "kodeWilayah": "5201132007",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.863,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 84.9,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 548,
    "indeksKomposit": 15.1,
    "indikator": {
      "infrastruktur": 4.0,
      "pertanianPangan": 13.8,
      "pendidikanSDM": 14.0,
      "kesehatanStunting": 22.2,
      "ekonomiUMKM": 13.8,
      "lingkunganSampah": 14.4
    },
    "dimensi": {
      "layananDasar": {
        "skor": 136,
        "persen": 80.0,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 43,
            "maks": 45,
            "persen": 95.6
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 70,
            "maks": 100,
            "persen": 70.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ],
        "sub": {
          "pendidikan": 43,
          "kesehatan": 70,
          "utilitas": 23
        }
      },
      "sosial": {
        "skor": 78,
        "persen": 91.8,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 61,
            "maks": 65,
            "persen": 93.8
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 17,
            "maks": 20,
            "persen": 85.0
          }
        ]
      },
      "ekonomi": {
        "skor": 138,
        "persen": 86.2,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 36,
            "maks": 40,
            "persen": 90.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 102,
            "maks": 120,
            "persen": 85.0
          }
        ]
      },
      "lingkungan": {
        "skor": 77,
        "persen": 85.6,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 53,
            "maks": 65,
            "persen": 81.5
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 24,
            "maks": 25,
            "persen": 96.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 48,
        "persen": 96.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 19,
            "maks": 20,
            "persen": 95.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 71,
        "persen": 88.8,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 31,
            "maks": 35,
            "persen": 88.6
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 40,
            "maks": 45,
            "persen": 88.9
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Layanan Dasar (80.0%)",
      "Lingkungan (85.6%)"
    ],
    "targetDimensi": [
      "Layanan Dasar",
      "Lingkungan"
    ],
    "catatanMusrenbang": "Seluruh 6 dimensi ≥70%, namun masih terdapat 15 indikator berskor 1 (Operasional ketersediaan layanan dokter di desa; Keberadaan Penyedia Transportasi penunjang menuju layanan Dokter) yang perlu diintervensi.",
    "rekomendasiKategori": [
      "Pendidikan & Sekolah",
      "Sampah, Lingkungan & Kebencanaan"
    ],
    "namaKepalaDesa": "Muhammad Saleh, S.Pd",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "-8719000,116.072846",
    "alamatDesa": "Jalan Pusri Serumbung Lembar No 313",
    "emailDesa": "desalembarselatan@gmail.com",
    "webDesa": "lembarselatan.desa.id",
    "masaJabatanKades": "2 Tahun",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 105.26
  },
  {
    "id": "desa-mareje-timur-lembar",
    "nama": "Mareje Timur",
    "tipe": "Desa",
    "kecamatan": "Lembar",
    "kodeWilayah": "5201132008",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7937,
    "statusKemendesa": "MAJU",
    "skorBappenas": 80.27,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 504,
    "indeksKomposit": 19.7,
    "indikator": {
      "infrastruktur": 4.0,
      "pertanianPangan": 12.5,
      "pendidikanSDM": 10.0,
      "kesehatanStunting": 15.6,
      "ekonomiUMKM": 12.5,
      "lingkunganSampah": 26.7
    },
    "dimensi": {
      "layananDasar": {
        "skor": 136,
        "persen": 80.0,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 45,
            "maks": 45,
            "persen": 100.0
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 76,
            "maks": 100,
            "persen": 76.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 15,
            "maks": 25,
            "persen": 60.0
          }
        ],
        "sub": {
          "pendidikan": 45,
          "kesehatan": 76,
          "utilitas": 15
        }
      },
      "sosial": {
        "skor": 42,
        "persen": 49.4,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 37,
            "maks": 65,
            "persen": 56.9
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 5,
            "maks": 20,
            "persen": 25.0
          }
        ]
      },
      "ekonomi": {
        "skor": 140,
        "persen": 87.5,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 32,
            "maks": 40,
            "persen": 80.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 108,
            "maks": 120,
            "persen": 90.0
          }
        ]
      },
      "lingkungan": {
        "skor": 66,
        "persen": 73.3,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 49,
            "maks": 65,
            "persen": 75.4
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 17,
            "maks": 25,
            "persen": 68.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 48,
        "persen": 96.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 19,
            "maks": 20,
            "persen": 95.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 72,
        "persen": 90.0,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 32,
            "maks": 35,
            "persen": 91.4
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 40,
            "maks": 45,
            "persen": 88.9
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Sosial (49.4%)",
      "Lingkungan (73.3%)"
    ],
    "targetDimensi": [
      "Sosial",
      "Lingkungan"
    ],
    "catatanMusrenbang": "Terdapat 27 indikator defisit (Skor 1) dengan sektor kritis: Sosial (49.4%). Prioritas lapangan: Operasional ketersediaan layanan dokter di desa; Keberadaan Penyedia Transportasi penunjang menuju layanan Dokter.",
    "rekomendasiKategori": [
      "Keagamaan, Sosial & Budaya",
      "Sampah, Lingkungan & Kebencanaan"
    ],
    "namaKepalaDesa": "MUSMULIADI, M.Pd.I.",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8.699752 S, 116.071956 E",
    "alamatDesa": "Jln Lintas Persada Lendang Garuda Desa Mareje Timur",
    "emailDesa": "desamaretim@gmail.com",
    "webDesa": "Tidak Ada",
    "masaJabatanKades": "PERIODE KE 1",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 99.51
  },
  {
    "id": "desa-jembatan-kembar-timur-lembar",
    "nama": "Jembatan Kembar Timur",
    "tipe": "Desa",
    "kecamatan": "Lembar",
    "kodeWilayah": "5201132009",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7906,
    "statusKemendesa": "MAJU",
    "skorBappenas": 79.28,
    "statusBappenas": "MAJU",
    "nilaiTotal": 502,
    "indeksKomposit": 20.7,
    "indikator": {
      "infrastruktur": 2.0,
      "pertanianPangan": 25.0,
      "pendidikanSDM": 12.0,
      "kesehatanStunting": 8.9,
      "ekonomiUMKM": 25.0,
      "lingkunganSampah": 35.6
    },
    "dimensi": {
      "layananDasar": {
        "skor": 147,
        "persen": 86.5,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 44,
            "maks": 45,
            "persen": 97.8
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 82,
            "maks": 100,
            "persen": 82.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 21,
            "maks": 25,
            "persen": 84.0
          }
        ],
        "sub": {
          "pendidikan": 44,
          "kesehatan": 82,
          "utilitas": 21
        }
      },
      "sosial": {
        "skor": 63,
        "persen": 74.1,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 58,
            "maks": 65,
            "persen": 89.2
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 5,
            "maks": 20,
            "persen": 25.0
          }
        ]
      },
      "ekonomi": {
        "skor": 120,
        "persen": 75.0,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 24,
            "maks": 40,
            "persen": 60.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 96,
            "maks": 120,
            "persen": 80.0
          }
        ]
      },
      "lingkungan": {
        "skor": 58,
        "persen": 64.4,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 45,
            "maks": 65,
            "persen": 69.2
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 13,
            "maks": 25,
            "persen": 52.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 65,
        "persen": 81.2,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 23,
            "maks": 35,
            "persen": 65.7
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 42,
            "maks": 45,
            "persen": 93.3
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (64.4%)",
      "Sosial (74.1%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Sosial"
    ],
    "catatanMusrenbang": "Terdapat 25 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (64.4%). Prioritas lapangan: Ketersediaan layanan Tenaga Kesehatan di Desa; Operasional ketersediaan layanan Tenaga Kesehatan di desa.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Keagamaan, Sosial & Budaya"
    ],
    "namaKepalaDesa": "HAJI ISMAIL DARWAN",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "GARIS LINTANG -8,70408 . GARIS BUJUR 116,092599",
    "alamatDesa": "Jln.Raya Lembar Jembatan Kembar Timur,Lembar,Lombok Barat \nKode Post 83364",
    "emailDesa": "Lalusalikin123@gmail.com",
    "webDesa": "",
    "masaJabatanKades": "11 Tahun 3 bulan",
    "periodeKades": "Periode ke-2",
    "skorBappenasId": 98.29
  },
  {
    "id": "desa-eyat-mayang-lembar",
    "nama": "Eyat Mayang",
    "tipe": "Desa",
    "kecamatan": "Lembar",
    "kodeWilayah": "5201132010",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7213,
    "statusKemendesa": "MAJU",
    "skorBappenas": 72.86,
    "statusBappenas": "MAJU",
    "nilaiTotal": 458,
    "indeksKomposit": 27.1,
    "indikator": {
      "infrastruktur": 2.0,
      "pertanianPangan": 28.1,
      "pendidikanSDM": 28.0,
      "kesehatanStunting": 12.2,
      "ekonomiUMKM": 28.1,
      "lingkunganSampah": 48.9
    },
    "dimensi": {
      "layananDasar": {
        "skor": 136,
        "persen": 80.0,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 36,
            "maks": 45,
            "persen": 80.0
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 79,
            "maks": 100,
            "persen": 79.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 21,
            "maks": 25,
            "persen": 84.0
          }
        ],
        "sub": {
          "pendidikan": 36,
          "kesehatan": 79,
          "utilitas": 21
        }
      },
      "sosial": {
        "skor": 57,
        "persen": 67.1,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 51,
            "maks": 65,
            "persen": 78.5
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 6,
            "maks": 20,
            "persen": 30.0
          }
        ]
      },
      "ekonomi": {
        "skor": 115,
        "persen": 71.9,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 22,
            "maks": 40,
            "persen": 55.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 93,
            "maks": 120,
            "persen": 77.5
          }
        ]
      },
      "lingkungan": {
        "skor": 46,
        "persen": 51.1,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 37,
            "maks": 65,
            "persen": 56.9
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 9,
            "maks": 25,
            "persen": 36.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 55,
        "persen": 68.8,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 32,
            "maks": 35,
            "persen": 91.4
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 23,
            "maks": 45,
            "persen": 51.1
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (51.1%)",
      "Sosial (67.1%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Sosial"
    ],
    "catatanMusrenbang": "Terdapat 34 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (51.1%), Sosial (67.1%), Tata Kelola (68.8%). Prioritas lapangan: Kemudahan Akses menuju SD/MI/Sederajat terdekat di Desa; Operasional ketersediaan layanan dokter di desa.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Keagamaan, Sosial & Budaya"
    ],
    "namaKepalaDesa": "MUNAWIR HARIS.,S.Pd",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "-8.765985 S, 116.074535 E",
    "alamatDesa": "JALAN RAYA SEKOTONG BARU-LEMBAR DESA EYAT MAYANG",
    "emailDesa": "kantordesaeyatmayang@gmail.com",
    "webDesa": "eyatmayang.desa.or.id",
    "masaJabatanKades": "4 Tahun 4 bulan",
    "periodeKades": "Periode ke-2",
    "skorBappenasId": 90.32
  },
  {
    "id": "desa-batulayar-batu-layar",
    "nama": "Batulayar",
    "tipe": "Desa",
    "kecamatan": "Batu Layar",
    "kodeWilayah": "5201142001",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.8268,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 83.51,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 525,
    "indeksKomposit": 16.5,
    "indikator": {
      "infrastruktur": 10.0,
      "pertanianPangan": 21.9,
      "pendidikanSDM": 12.0,
      "kesehatanStunting": -4.4,
      "ekonomiUMKM": 21.9,
      "lingkunganSampah": 30.0
    },
    "dimensi": {
      "layananDasar": {
        "skor": 157,
        "persen": 92.4,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 44,
            "maks": 45,
            "persen": 97.8
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 94,
            "maks": 100,
            "persen": 94.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 19,
            "maks": 25,
            "persen": 76.0
          }
        ],
        "sub": {
          "pendidikan": 44,
          "kesehatan": 94,
          "utilitas": 19
        }
      },
      "sosial": {
        "skor": 67,
        "persen": 78.8,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 61,
            "maks": 65,
            "persen": 93.8
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 6,
            "maks": 20,
            "persen": 30.0
          }
        ]
      },
      "ekonomi": {
        "skor": 125,
        "persen": 78.1,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 32,
            "maks": 40,
            "persen": 80.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 93,
            "maks": 120,
            "persen": 77.5
          }
        ]
      },
      "lingkungan": {
        "skor": 63,
        "persen": 70.0,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 49,
            "maks": 65,
            "persen": 75.4
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 14,
            "maks": 25,
            "persen": 56.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 45,
        "persen": 90.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 17,
            "maks": 20,
            "persen": 85.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 28,
            "maks": 30,
            "persen": 93.3
          }
        ]
      },
      "tataKelola": {
        "skor": 68,
        "persen": 85.0,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 33,
            "maks": 35,
            "persen": 94.3
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 35,
            "maks": 45,
            "persen": 77.8
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (70.0%)",
      "Ekonomi (78.1%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Ekonomi"
    ],
    "catatanMusrenbang": "Seluruh 6 dimensi ≥70%, namun masih terdapat 18 indikator berskor 1 (Keberadaan Taman Bacaan Masyarakat/ Perpustakaan Desa; Operasional Taman Bacaan Masyarakat/ Perpustakaan Desa) yang perlu diintervensi.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Pertanian, Peternakan & Pangan"
    ],
    "namaKepalaDesa": "Masnun",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "LU/LS 8,530317 - BB/BT 116,0701",
    "alamatDesa": "Jln. Raya Senggigi Desa Batulayar Kecamatan Batulayar Kabupaten Lombok Barat",
    "emailDesa": "kantordesabatulayar@yahoo.co.id",
    "webDesa": "www.batulayar.desa.id",
    "masaJabatanKades": "3 Tahun 10 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 103.54
  },
  {
    "id": "desa-meninting-batu-layar",
    "nama": "Meninting",
    "tipe": "Desa",
    "kecamatan": "Batu Layar",
    "kodeWilayah": "5201142002",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.8709,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 86.78,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 553,
    "indeksKomposit": 13.2,
    "indikator": {
      "infrastruktur": 4.0,
      "pertanianPangan": 10.6,
      "pendidikanSDM": 10.0,
      "kesehatanStunting": 17.8,
      "ekonomiUMKM": 10.6,
      "lingkunganSampah": 15.6
    },
    "dimensi": {
      "layananDasar": {
        "skor": 144,
        "persen": 84.7,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 45,
            "maks": 45,
            "persen": 100.0
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 74,
            "maks": 100,
            "persen": 74.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ],
        "sub": {
          "pendidikan": 45,
          "kesehatan": 74,
          "utilitas": 25
        }
      },
      "sosial": {
        "skor": 72,
        "persen": 84.7,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 64,
            "maks": 65,
            "persen": 98.5
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 8,
            "maks": 20,
            "persen": 40.0
          }
        ]
      },
      "ekonomi": {
        "skor": 143,
        "persen": 89.4,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 32,
            "maks": 40,
            "persen": 80.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 111,
            "maks": 120,
            "persen": 92.5
          }
        ]
      },
      "lingkungan": {
        "skor": 76,
        "persen": 84.4,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 51,
            "maks": 65,
            "persen": 78.5
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 48,
        "persen": 96.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 28,
            "maks": 30,
            "persen": 93.3
          }
        ]
      },
      "tataKelola": {
        "skor": 70,
        "persen": 87.5,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 35,
            "maks": 35,
            "persen": 100.0
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 35,
            "maks": 45,
            "persen": 77.8
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (84.4%)",
      "Layanan Dasar (84.7%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Layanan Dasar"
    ],
    "catatanMusrenbang": "Seluruh 6 dimensi ≥70%, namun masih terdapat 16 indikator berskor 1 (Keberadaan Fasilitas Puskesmas Pembantu (Pustu) termasuk Poskesdes/Polindes di Desa; Ketersediaan layanan Tenaga Kesehatan di Desa) yang perlu diintervensi.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Pendidikan & Sekolah"
    ],
    "namaKepalaDesa": "MAHNAN HARIYANTO",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "Lat-8.663868 Long 116.173952",
    "alamatDesa": "Dusun Montong Buwuh Jalan Pariwisata Meninting",
    "emailDesa": "desameninting@gmail.com",
    "webDesa": "www.meninting.desa.id",
    "masaJabatanKades": "3 Tahun 5 Bulan",
    "periodeKades": "Periode ke-2",
    "skorBappenasId": 107.59
  },
  {
    "id": "desa-sandik-batu-layar",
    "nama": "Sandik",
    "tipe": "Desa",
    "kecamatan": "Batu Layar",
    "kodeWilayah": "5201142003",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.8614,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 86.61,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 547,
    "indeksKomposit": 13.4,
    "indikator": {
      "infrastruktur": 4.0,
      "pertanianPangan": 11.2,
      "pendidikanSDM": 20.0,
      "kesehatanStunting": 4.4,
      "ekonomiUMKM": 11.2,
      "lingkunganSampah": 17.8
    },
    "dimensi": {
      "layananDasar": {
        "skor": 149,
        "persen": 87.6,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 40,
            "maks": 45,
            "persen": 88.9
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 86,
            "maks": 100,
            "persen": 86.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ],
        "sub": {
          "pendidikan": 40,
          "kesehatan": 86,
          "utilitas": 23
        }
      },
      "sosial": {
        "skor": 71,
        "persen": 83.5,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 54,
            "maks": 65,
            "persen": 83.1
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 17,
            "maks": 20,
            "persen": 85.0
          }
        ]
      },
      "ekonomi": {
        "skor": 142,
        "persen": 88.8,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 40,
            "maks": 40,
            "persen": 100.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 102,
            "maks": 120,
            "persen": 85.0
          }
        ]
      },
      "lingkungan": {
        "skor": 74,
        "persen": 82.2,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 61,
            "maks": 65,
            "persen": 93.8
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 13,
            "maks": 25,
            "persen": 52.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 48,
        "persen": 96.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 19,
            "maks": 20,
            "persen": 95.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 63,
        "persen": 78.8,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 27,
            "maks": 35,
            "persen": 77.1
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 36,
            "maks": 45,
            "persen": 80.0
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Tata Kelola (78.8%)",
      "Lingkungan (82.2%)"
    ],
    "targetDimensi": [
      "Tata Kelola",
      "Lingkungan"
    ],
    "catatanMusrenbang": "Seluruh 6 dimensi ≥70%, namun masih terdapat 11 indikator berskor 1 (Peranan aparat keamanan menjadi mediator / penengah dalam penyelesaian Konflik; Ketersediaan Pasar di Desa) yang perlu diintervensi.",
    "rekomendasiKategori": [
      "Pemerintahan Desa & Digitalisasi",
      "Sampah, Lingkungan & Kebencanaan"
    ],
    "namaKepalaDesa": "H. ABDUL RAHMAN",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8.5382 S - 116.0893 E",
    "alamatDesa": "JL. PARIWISATA SANDIK",
    "emailDesa": "desasandik.batulayar@gmail.com",
    "webDesa": "sandik.desa.id",
    "masaJabatanKades": "13 Tahun 7 Bulan",
    "periodeKades": "Periode ke-2",
    "skorBappenasId": 107.38
  },
  {
    "id": "desa-lembah-sari-batu-layar",
    "nama": "Lembah Sari",
    "tipe": "Desa",
    "kecamatan": "Batu Layar",
    "kodeWilayah": "5201142004",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.737,
    "statusKemendesa": "MAJU",
    "skorBappenas": 72.99,
    "statusBappenas": "MAJU",
    "nilaiTotal": 468,
    "indeksKomposit": 27.0,
    "indikator": {
      "infrastruktur": 12.0,
      "pertanianPangan": 28.1,
      "pendidikanSDM": 16.0,
      "kesehatanStunting": 33.3,
      "ekonomiUMKM": 28.1,
      "lingkunganSampah": 36.7
    },
    "dimensi": {
      "layananDasar": {
        "skor": 125,
        "persen": 73.5,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 42,
            "maks": 45,
            "persen": 93.3
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 60,
            "maks": 100,
            "persen": 60.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ],
        "sub": {
          "pendidikan": 42,
          "kesehatan": 60,
          "utilitas": 23
        }
      },
      "sosial": {
        "skor": 64,
        "persen": 75.3,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 59,
            "maks": 65,
            "persen": 90.8
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 5,
            "maks": 20,
            "persen": 25.0
          }
        ]
      },
      "ekonomi": {
        "skor": 115,
        "persen": 71.9,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 28,
            "maks": 40,
            "persen": 70.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 87,
            "maks": 120,
            "persen": 72.5
          }
        ]
      },
      "lingkungan": {
        "skor": 57,
        "persen": 63.3,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 37,
            "maks": 65,
            "persen": 56.9
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 20,
            "maks": 25,
            "persen": 80.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 44,
        "persen": 88.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 19,
            "maks": 20,
            "persen": 95.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 25,
            "maks": 30,
            "persen": 83.3
          }
        ]
      },
      "tataKelola": {
        "skor": 63,
        "persen": 78.8,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 33,
            "maks": 35,
            "persen": 94.3
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 30,
            "maks": 45,
            "persen": 66.7
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (63.3%)",
      "Ekonomi (71.9%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Ekonomi"
    ],
    "catatanMusrenbang": "Terdapat 33 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (63.3%). Prioritas lapangan: Ketersediaan layanan dokter di desa; Operasional ketersediaan layanan dokter di desa.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Pertanian, Peternakan & Pangan"
    ],
    "namaKepalaDesa": "H.SIBAWAEHI,S.Pd.I",
    "statusKepalaDesa": "Penjabat",
    "koordinatDesa": "Lat-8.541343 Long 116.071605",
    "alamatDesa": "Jalan Sidemen Lauq",
    "emailDesa": "lembahsariberseri@gmail.com",
    "webDesa": "lembahsari.desa.id",
    "masaJabatanKades": "7 Tahun 3 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 90.49
  },
  {
    "id": "desa-senteluk-batu-layar",
    "nama": "Senteluk",
    "tipe": "Desa",
    "kecamatan": "Batu Layar",
    "kodeWilayah": "5201142005",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.8425,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 85.3,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 535,
    "indeksKomposit": 14.7,
    "indikator": {
      "infrastruktur": 2.0,
      "pertanianPangan": 15.0,
      "pendidikanSDM": 12.0,
      "kesehatanStunting": 2.2,
      "ekonomiUMKM": 15.0,
      "lingkunganSampah": 31.1
    },
    "dimensi": {
      "layananDasar": {
        "skor": 155,
        "persen": 91.2,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 44,
            "maks": 45,
            "persen": 97.8
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 88,
            "maks": 100,
            "persen": 88.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ],
        "sub": {
          "pendidikan": 44,
          "kesehatan": 88,
          "utilitas": 23
        }
      },
      "sosial": {
        "skor": 75,
        "persen": 88.2,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 61,
            "maks": 65,
            "persen": 93.8
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 14,
            "maks": 20,
            "persen": 70.0
          }
        ]
      },
      "ekonomi": {
        "skor": 136,
        "persen": 85.0,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 36,
            "maks": 40,
            "persen": 90.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 100,
            "maks": 120,
            "persen": 83.3
          }
        ]
      },
      "lingkungan": {
        "skor": 62,
        "persen": 68.9,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 53,
            "maks": 65,
            "persen": 81.5
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 9,
            "maks": 25,
            "persen": 36.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 58,
        "persen": 72.5,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 32,
            "maks": 35,
            "persen": 91.4
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 26,
            "maks": 45,
            "persen": 57.8
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (68.9%)",
      "Tata Kelola (72.5%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Tata Kelola"
    ],
    "catatanMusrenbang": "Terdapat 17 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (68.9%). Prioritas lapangan: Keberadaan Fasilitas Puskesmas Pembantu (Pustu) termasuk Poskesdes/Polindes di Desa; Kerjasama desa dengan desa lainnya.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Pemerintahan Desa & Digitalisasi"
    ],
    "namaKepalaDesa": "MUSNI, S.Pd",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "-8Â°32â€™19\"S 161Â°4â€™28\"E",
    "alamatDesa": "JL OTOMOTIF RAYA BTN GRIYA ASRI SENTELUK",
    "emailDesa": "desasenteluk0101@gmail.com",
    "webDesa": "SENTELUK",
    "masaJabatanKades": "1 Tahun 6 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 105.76
  },
  {
    "id": "desa-senggigi-batu-layar",
    "nama": "Senggigi",
    "tipe": "Desa",
    "kecamatan": "Batu Layar",
    "kodeWilayah": "5201142006",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.8283,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 82.17,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 526,
    "indeksKomposit": 17.8,
    "indikator": {
      "infrastruktur": 6.0,
      "pertanianPangan": 19.4,
      "pendidikanSDM": 32.0,
      "kesehatanStunting": 7.8,
      "ekonomiUMKM": 19.4,
      "lingkunganSampah": 13.3
    },
    "dimensi": {
      "layananDasar": {
        "skor": 140,
        "persen": 82.4,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 34,
            "maks": 45,
            "persen": 75.6
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 83,
            "maks": 100,
            "persen": 83.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ],
        "sub": {
          "pendidikan": 34,
          "kesehatan": 83,
          "utilitas": 23
        }
      },
      "sosial": {
        "skor": 64,
        "persen": 75.3,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 58,
            "maks": 65,
            "persen": 89.2
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 6,
            "maks": 20,
            "persen": 30.0
          }
        ]
      },
      "ekonomi": {
        "skor": 129,
        "persen": 80.6,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 20,
            "maks": 40,
            "persen": 50.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 109,
            "maks": 120,
            "persen": 90.8
          }
        ]
      },
      "lingkungan": {
        "skor": 78,
        "persen": 86.7,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 57,
            "maks": 65,
            "persen": 87.7
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 21,
            "maks": 25,
            "persen": 84.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 47,
        "persen": 94.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 18,
            "maks": 20,
            "persen": 90.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 68,
        "persen": 85.0,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 31,
            "maks": 35,
            "persen": 88.6
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 37,
            "maks": 45,
            "persen": 82.2
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Sosial (75.3%)",
      "Ekonomi (80.6%)"
    ],
    "targetDimensi": [
      "Sosial",
      "Ekonomi"
    ],
    "catatanMusrenbang": "Seluruh 6 dimensi ≥70%, namun masih terdapat 10 indikator berskor 1 (Keberadaan Taman Bacaan Masyarakat/ Perpustakaan Desa; Operasional Taman Bacaan Masyarakat/ Perpustakaan Desa) yang perlu diintervensi.",
    "rekomendasiKategori": [
      "Keagamaan, Sosial & Budaya",
      "Pertanian, Peternakan & Pangan"
    ],
    "namaKepalaDesa": "MASTUR, SE",
    "statusKepalaDesa": "Penjabat",
    "koordinatDesa": "8.4877 S - 116.0409 E",
    "alamatDesa": "Jl. Raya Senggigi Km-10 Kerandangan",
    "emailDesa": "desasenggigi@Gmail.com",
    "webDesa": "senggigi.desa.id",
    "masaJabatanKades": "4 tahun 7 bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 101.88
  },
  {
    "id": "desa-bengkaung-batu-layar",
    "nama": "Bengkaung",
    "tipe": "Desa",
    "kecamatan": "Batu Layar",
    "kodeWilayah": "5201142007",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7732,
    "statusKemendesa": "MAJU",
    "skorBappenas": 77.67,
    "statusBappenas": "MAJU",
    "nilaiTotal": 491,
    "indeksKomposit": 22.3,
    "indikator": {
      "infrastruktur": 16.0,
      "pertanianPangan": 15.6,
      "pendidikanSDM": 12.0,
      "kesehatanStunting": 31.1,
      "ekonomiUMKM": 15.6,
      "lingkunganSampah": 43.3
    },
    "dimensi": {
      "layananDasar": {
        "skor": 127,
        "persen": 74.7,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 44,
            "maks": 45,
            "persen": 97.8
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 62,
            "maks": 100,
            "persen": 62.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 21,
            "maks": 25,
            "persen": 84.0
          }
        ],
        "sub": {
          "pendidikan": 44,
          "kesehatan": 62,
          "utilitas": 21
        }
      },
      "sosial": {
        "skor": 76,
        "persen": 89.4,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 62,
            "maks": 65,
            "persen": 95.4
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 14,
            "maks": 20,
            "persen": 70.0
          }
        ]
      },
      "ekonomi": {
        "skor": 135,
        "persen": 84.4,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 40,
            "maks": 40,
            "persen": 100.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 95,
            "maks": 120,
            "persen": 79.2
          }
        ]
      },
      "lingkungan": {
        "skor": 51,
        "persen": 56.7,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 42,
            "maks": 65,
            "persen": 64.6
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 9,
            "maks": 25,
            "persen": 36.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 42,
        "persen": 84.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 16,
            "maks": 20,
            "persen": 80.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 26,
            "maks": 30,
            "persen": 86.7
          }
        ]
      },
      "tataKelola": {
        "skor": 60,
        "persen": 75.0,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 35,
            "maks": 35,
            "persen": 100.0
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 25,
            "maks": 45,
            "persen": 55.6
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (56.7%)",
      "Layanan Dasar (74.7%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Layanan Dasar"
    ],
    "catatanMusrenbang": "Terdapat 25 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (56.7%). Prioritas lapangan: Ketersediaan layanan dokter di desa; Operasional ketersediaan layanan dokter di desa.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Pendidikan & Sekolah"
    ],
    "namaKepalaDesa": "H. FAIZUL BAYANI, M.Pd",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "-8°31'45,02986\"S 116°5'33,47722\"E",
    "alamatDesa": "Jl. Desa Bengkaung Desa Bengkaung Kec. Batulayar Kab. Lombok Barat",
    "emailDesa": "desabengkaung@gmail.com",
    "webDesa": "bengkaung.desa.id",
    "masaJabatanKades": "7 Tahun 5 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 96.29
  },
  {
    "id": "desa-pusuk-lestari-batu-layar",
    "nama": "Pusuk Lestari",
    "tipe": "Desa",
    "kecamatan": "Batu Layar",
    "kodeWilayah": "5201142008",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7386,
    "statusKemendesa": "MAJU",
    "skorBappenas": 72.23,
    "statusBappenas": "MAJU",
    "nilaiTotal": 469,
    "indeksKomposit": 27.8,
    "indikator": {
      "infrastruktur": 14.0,
      "pertanianPangan": 31.9,
      "pendidikanSDM": 28.0,
      "kesehatanStunting": 25.6,
      "ekonomiUMKM": 31.9,
      "lingkunganSampah": 31.1
    },
    "dimensi": {
      "layananDasar": {
        "skor": 122,
        "persen": 71.8,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 36,
            "maks": 45,
            "persen": 80.0
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 67,
            "maks": 100,
            "persen": 67.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 19,
            "maks": 25,
            "persen": 76.0
          }
        ],
        "sub": {
          "pendidikan": 36,
          "kesehatan": 67,
          "utilitas": 19
        }
      },
      "sosial": {
        "skor": 62,
        "persen": 72.9,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 58,
            "maks": 65,
            "persen": 89.2
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 4,
            "maks": 20,
            "persen": 20.0
          }
        ]
      },
      "ekonomi": {
        "skor": 109,
        "persen": 68.1,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 32,
            "maks": 40,
            "persen": 80.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 77,
            "maks": 120,
            "persen": 64.2
          }
        ]
      },
      "lingkungan": {
        "skor": 62,
        "persen": 68.9,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 49,
            "maks": 65,
            "persen": 75.4
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 13,
            "maks": 25,
            "persen": 52.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 43,
        "persen": 86.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 19,
            "maks": 20,
            "persen": 95.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 24,
            "maks": 30,
            "persen": 80.0
          }
        ]
      },
      "tataKelola": {
        "skor": 71,
        "persen": 88.8,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 34,
            "maks": 35,
            "persen": 97.1
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 37,
            "maks": 45,
            "persen": 82.2
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Ekonomi (68.1%)",
      "Lingkungan (68.9%)"
    ],
    "targetDimensi": [
      "Ekonomi",
      "Lingkungan"
    ],
    "catatanMusrenbang": "Terdapat 31 indikator defisit (Skor 1) dengan sektor kritis: Ekonomi (68.1%), Lingkungan (68.9%). Prioritas lapangan: Kemudahan Akses menuju SMP/MTs/Sederajat terdekat di Desa; Ketersediaan layanan dokter di desa.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ],
    "namaKepalaDesa": "H. JUNAIDI",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "-8.48525. 116.09239",
    "alamatDesa": "Jln H Mansyur Jurusan Mataram-Tanjung Km 11",
    "emailDesa": "ppiddesapusuklestari@gmail.com",
    "webDesa": "pusuklestari.desa.id",
    "masaJabatanKades": "7 TAHUN 6 BULAN",
    "periodeKades": "Periode ke-2",
    "skorBappenasId": 89.54
  },
  {
    "id": "desa-batu-layar-barat-batu-layar",
    "nama": "Batu Layar Barat",
    "tipe": "Desa",
    "kecamatan": "Batu Layar",
    "kodeWilayah": "5201142009",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7858,
    "statusKemendesa": "MAJU",
    "skorBappenas": 78.65,
    "statusBappenas": "MAJU",
    "nilaiTotal": 499,
    "indeksKomposit": 21.3,
    "indikator": {
      "infrastruktur": 14.0,
      "pertanianPangan": 22.5,
      "pendidikanSDM": 28.0,
      "kesehatanStunting": 11.1,
      "ekonomiUMKM": 22.5,
      "lingkunganSampah": 22.2
    },
    "dimensi": {
      "layananDasar": {
        "skor": 137,
        "persen": 80.6,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 36,
            "maks": 45,
            "persen": 80.0
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 80,
            "maks": 100,
            "persen": 80.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 21,
            "maks": 25,
            "persen": 84.0
          }
        ],
        "sub": {
          "pendidikan": 36,
          "kesehatan": 80,
          "utilitas": 21
        }
      },
      "sosial": {
        "skor": 67,
        "persen": 78.8,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 63,
            "maks": 65,
            "persen": 96.9
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 4,
            "maks": 20,
            "persen": 20.0
          }
        ]
      },
      "ekonomi": {
        "skor": 124,
        "persen": 77.5,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 32,
            "maks": 40,
            "persen": 80.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 92,
            "maks": 120,
            "persen": 76.7
          }
        ]
      },
      "lingkungan": {
        "skor": 70,
        "persen": 77.8,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 53,
            "maks": 65,
            "persen": 81.5
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 17,
            "maks": 25,
            "persen": 68.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 43,
        "persen": 86.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 17,
            "maks": 20,
            "persen": 85.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 26,
            "maks": 30,
            "persen": 86.7
          }
        ]
      },
      "tataKelola": {
        "skor": 58,
        "persen": 72.5,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 31,
            "maks": 35,
            "persen": 88.6
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 27,
            "maks": 45,
            "persen": 60.0
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Tata Kelola (72.5%)",
      "Ekonomi (77.5%)"
    ],
    "targetDimensi": [
      "Tata Kelola",
      "Ekonomi"
    ],
    "catatanMusrenbang": "Seluruh 6 dimensi ≥70%, namun masih terdapat 22 indikator berskor 1 (Keberadaan Fasilitas Puskesmas Pembantu (Pustu) termasuk Poskesdes/Polindes di Desa; Operasional ketersediaan layanan Tenaga Kesehatan di desa) yang perlu diintervensi.",
    "rekomendasiKategori": [
      "Pemerintahan Desa & Digitalisasi",
      "Pertanian, Peternakan & Pangan"
    ],
    "namaKepalaDesa": "Marjuni",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "LU/LS 116,06   BB/BT -8,50901",
    "alamatDesa": "jalan raya senggigi desa batulayar barat kabupaten lombok barat nusa tenggara barat",
    "emailDesa": "batulayarbarat@gmail.com",
    "webDesa": "batulayarbarat.desa.id",
    "masaJabatanKades": "2 Tahun 5 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 97.51
  },
  {
    "id": "desa-kuripan-kuripan",
    "nama": "Kuripan",
    "tipe": "Desa",
    "kecamatan": "Kuripan",
    "kodeWilayah": "5201152001",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.9528,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 96.17,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 605,
    "indeksKomposit": 3.8,
    "indikator": {
      "infrastruktur": 2.0,
      "pertanianPangan": 1.9,
      "pendidikanSDM": 14.0,
      "kesehatanStunting": -10.0,
      "ekonomiUMKM": 1.9,
      "lingkunganSampah": 8.9
    },
    "dimensi": {
      "layananDasar": {
        "skor": 167,
        "persen": 98.2,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 43,
            "maks": 45,
            "persen": 95.6
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 99,
            "maks": 100,
            "persen": 99.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ],
        "sub": {
          "pendidikan": 43,
          "kesehatan": 99,
          "utilitas": 25
        }
      },
      "sosial": {
        "skor": 74,
        "persen": 87.1,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 64,
            "maks": 65,
            "persen": 98.5
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 10,
            "maks": 20,
            "persen": 50.0
          }
        ]
      },
      "ekonomi": {
        "skor": 157,
        "persen": 98.1,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 40,
            "maks": 40,
            "persen": 100.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 117,
            "maks": 120,
            "persen": 97.5
          }
        ]
      },
      "lingkungan": {
        "skor": 82,
        "persen": 91.1,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 61,
            "maks": 65,
            "persen": 93.8
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 21,
            "maks": 25,
            "persen": 84.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 76,
        "persen": 95.0,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 35,
            "maks": 35,
            "persen": 100.0
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 41,
            "maks": 45,
            "persen": 91.1
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Sosial (87.1%)",
      "Lingkungan (91.1%)"
    ],
    "targetDimensi": [
      "Sosial",
      "Lingkungan"
    ],
    "catatanMusrenbang": "Seluruh 6 dimensi ≥70%, namun masih terdapat 5 indikator berskor 1 (Keberadaan Taman Bacaan Masyarakat/ Perpustakaan Desa; Operasional Taman Bacaan Masyarakat/ Perpustakaan Desa) yang perlu diintervensi.",
    "rekomendasiKategori": [
      "Keagamaan, Sosial & Budaya",
      "Sampah, Lingkungan & Kebencanaan"
    ],
    "namaKepalaDesa": "HASBI",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8.6749483333333333333S 116.164761666666668E",
    "alamatDesa": "Jl. TGH. ABD Hafiz Kuripan, Kec.Kuripan Kab. Lombok Barat NTB",
    "emailDesa": "kuripan@gmail.com",
    "webDesa": "kuripan.desa.id",
    "masaJabatanKades": "7 Tahun 4 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 119.23
  },
  {
    "id": "desa-jagaraga-kuripan",
    "nama": "Jagaraga",
    "tipe": "Desa",
    "kecamatan": "Kuripan",
    "kodeWilayah": "5201152002",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.9291,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 93.66,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 590,
    "indeksKomposit": 6.3,
    "indikator": {
      "infrastruktur": 2.0,
      "pertanianPangan": 7.5,
      "pendidikanSDM": 14.0,
      "kesehatanStunting": -8.9,
      "ekonomiUMKM": 7.5,
      "lingkunganSampah": 8.9
    },
    "dimensi": {
      "layananDasar": {
        "skor": 166,
        "persen": 97.6,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 43,
            "maks": 45,
            "persen": 95.6
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 98,
            "maks": 100,
            "persen": 98.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ],
        "sub": {
          "pendidikan": 43,
          "kesehatan": 98,
          "utilitas": 25
        }
      },
      "sosial": {
        "skor": 80,
        "persen": 94.1,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 64,
            "maks": 65,
            "persen": 98.5
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 16,
            "maks": 20,
            "persen": 80.0
          }
        ]
      },
      "ekonomi": {
        "skor": 148,
        "persen": 92.5,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 40,
            "maks": 40,
            "persen": 100.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 108,
            "maks": 120,
            "persen": 90.0
          }
        ]
      },
      "lingkungan": {
        "skor": 82,
        "persen": 91.1,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 57,
            "maks": 65,
            "persen": 87.7
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 25,
            "maks": 25,
            "persen": 100.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 19,
            "maks": 20,
            "persen": 95.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 30,
            "maks": 30,
            "persen": 100.0
          }
        ]
      },
      "tataKelola": {
        "skor": 65,
        "persen": 81.2,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 33,
            "maks": 35,
            "persen": 94.3
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 32,
            "maks": 45,
            "persen": 71.1
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Tata Kelola (81.2%)",
      "Lingkungan (91.1%)"
    ],
    "targetDimensi": [
      "Tata Kelola",
      "Lingkungan"
    ],
    "catatanMusrenbang": "Seluruh 6 dimensi ≥70%, namun masih terdapat 7 indikator berskor 1 (Ketersediaan Pendidikan Non-formal/Pusat Keterampilan/Kursus; Keterlibatan Angkatan Kerja pada Pendidikan Non-formal/Pusat Keterampilan/Kursus) yang perlu diintervensi.",
    "rekomendasiKategori": [
      "Pemerintahan Desa & Digitalisasi",
      "Sampah, Lingkungan & Kebencanaan"
    ],
    "namaKepalaDesa": "MUHAMAD HASYIM, ST",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "-8.658330812604465, 116.15831936499222",
    "alamatDesa": "Jln. TGH. Abdul Hafidz Dusun Tegal Desa Jagaraga",
    "emailDesa": "kandesjagaraga0117@gmail.com",
    "webDesa": "jagaraga.desa.id",
    "masaJabatanKades": "5 Tahun 9 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 116.11
  },
  {
    "id": "desa-kuripan-utara-kuripan",
    "nama": "Kuripan Utara",
    "tipe": "Desa",
    "kecamatan": "Kuripan",
    "kodeWilayah": "5201152003",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.885,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 89.35,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 562,
    "indeksKomposit": 10.7,
    "indikator": {
      "infrastruktur": 2.0,
      "pertanianPangan": 6.9,
      "pendidikanSDM": 10.0,
      "kesehatanStunting": 4.4,
      "ekonomiUMKM": 6.9,
      "lingkunganSampah": 20.0
    },
    "dimensi": {
      "layananDasar": {
        "skor": 154,
        "persen": 90.6,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 45,
            "maks": 45,
            "persen": 100.0
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 86,
            "maks": 100,
            "persen": 86.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ],
        "sub": {
          "pendidikan": 45,
          "kesehatan": 86,
          "utilitas": 23
        }
      },
      "sosial": {
        "skor": 70,
        "persen": 82.4,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 58,
            "maks": 65,
            "persen": 89.2
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 12,
            "maks": 20,
            "persen": 60.0
          }
        ]
      },
      "ekonomi": {
        "skor": 149,
        "persen": 93.1,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 40,
            "maks": 40,
            "persen": 100.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 109,
            "maks": 120,
            "persen": 90.8
          }
        ]
      },
      "lingkungan": {
        "skor": 72,
        "persen": 80.0,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 49,
            "maks": 65,
            "persen": 75.4
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 68,
        "persen": 85.0,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 31,
            "maks": 35,
            "persen": 88.6
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 37,
            "maks": 45,
            "persen": 82.2
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (80.0%)",
      "Sosial (82.4%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Sosial"
    ],
    "catatanMusrenbang": "Seluruh 6 dimensi ≥70%, namun masih terdapat 8 indikator berskor 1 (Keberadaan ruang publik terbuka/keadaan sebagian besar Fasilitas Ruang Publik Terbuka di Desa; Ketersediaan Lembaga Ekonomi KUD) yang perlu diintervensi.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Keagamaan, Sosial & Budaya"
    ],
    "namaKepalaDesa": "TIDAK ADA",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8â—¦38'37,404's116â—¦10'58,866''Â±8,70m",
    "alamatDesa": "Jalan Pramua No.4 Hp.081805212399",
    "emailDesa": "kuripanutara96@gmai.com",
    "webDesa": "kuripanutara.desa.ID",
    "masaJabatanKades": "4Tahun 5 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 110.77
  },
  {
    "id": "desa-kuripan-selatan-kuripan",
    "nama": "Kuripan Selatan",
    "tipe": "Desa",
    "kecamatan": "Kuripan",
    "kodeWilayah": "5201152004",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7591,
    "statusKemendesa": "MAJU",
    "skorBappenas": 76.87,
    "statusBappenas": "MAJU",
    "nilaiTotal": 482,
    "indeksKomposit": 23.1,
    "indikator": {
      "infrastruktur": 6.0,
      "pertanianPangan": 28.1,
      "pendidikanSDM": 16.0,
      "kesehatanStunting": 6.7,
      "ekonomiUMKM": 28.1,
      "lingkunganSampah": 52.2
    },
    "dimensi": {
      "layananDasar": {
        "skor": 149,
        "persen": 87.6,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 42,
            "maks": 45,
            "persen": 93.3
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 84,
            "maks": 100,
            "persen": 84.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ],
        "sub": {
          "pendidikan": 42,
          "kesehatan": 84,
          "utilitas": 23
        }
      },
      "sosial": {
        "skor": 65,
        "persen": 76.5,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 59,
            "maks": 65,
            "persen": 90.8
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 6,
            "maks": 20,
            "persen": 30.0
          }
        ]
      },
      "ekonomi": {
        "skor": 115,
        "persen": 71.9,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 30,
            "maks": 40,
            "persen": 75.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 85,
            "maks": 120,
            "persen": 70.8
          }
        ]
      },
      "lingkungan": {
        "skor": 43,
        "persen": 47.8,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 30,
            "maks": 65,
            "persen": 46.2
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 13,
            "maks": 25,
            "persen": 52.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 47,
        "persen": 94.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 19,
            "maks": 20,
            "persen": 95.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 28,
            "maks": 30,
            "persen": 93.3
          }
        ]
      },
      "tataKelola": {
        "skor": 63,
        "persen": 78.8,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 31,
            "maks": 35,
            "persen": 88.6
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 32,
            "maks": 45,
            "persen": 71.1
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (47.8%)",
      "Ekonomi (71.9%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Ekonomi"
    ],
    "catatanMusrenbang": "Terdapat 25 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (47.8%). Prioritas lapangan: Keberadaan kegiatan sosialisasi dan/atau advokasi terkait program jaminan kesehatan nasional di desa; Keberadaan Taman Bacaan Masyarakat/ Perpustakaan Desa.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Pertanian, Peternakan & Pangan"
    ],
    "namaKepalaDesa": "Satriawan",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "8â—¦40'56,022'S116â—¦10'5,856''EÂ±1,90m",
    "alamatDesa": "Jalan Raya Kuripan Selatan No.1  Kode post 83362",
    "emailDesa": "kuripanselatan@yahoo.com",
    "webDesa": "www.kuripanselatan.desa.id",
    "masaJabatanKades": "5 tahun",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 95.3
  },
  {
    "id": "desa-kuripan-timur-kuripan",
    "nama": "Kuripan Timur",
    "tipe": "Desa",
    "kecamatan": "Kuripan",
    "kodeWilayah": "5201152005",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Tinggi",
    "skorKemendesa": 0.7543,
    "statusKemendesa": "MAJU",
    "skorBappenas": 77.38,
    "statusBappenas": "MAJU",
    "nilaiTotal": 479,
    "indeksKomposit": 22.6,
    "indikator": {
      "infrastruktur": 20.0,
      "pertanianPangan": 21.2,
      "pendidikanSDM": 34.0,
      "kesehatanStunting": 2.2,
      "ekonomiUMKM": 21.2,
      "lingkunganSampah": 47.8
    },
    "dimensi": {
      "layananDasar": {
        "skor": 144,
        "persen": 84.7,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 33,
            "maks": 45,
            "persen": 73.3
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 88,
            "maks": 100,
            "persen": 88.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ],
        "sub": {
          "pendidikan": 33,
          "kesehatan": 88,
          "utilitas": 23
        }
      },
      "sosial": {
        "skor": 57,
        "persen": 67.1,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 51,
            "maks": 65,
            "persen": 78.5
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 6,
            "maks": 20,
            "persen": 30.0
          }
        ]
      },
      "ekonomi": {
        "skor": 126,
        "persen": 78.8,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 26,
            "maks": 40,
            "persen": 65.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 100,
            "maks": 120,
            "persen": 83.3
          }
        ]
      },
      "lingkungan": {
        "skor": 47,
        "persen": 52.2,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 33,
            "maks": 65,
            "persen": 50.8
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 14,
            "maks": 25,
            "persen": 56.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 40,
        "persen": 80.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 19,
            "maks": 20,
            "persen": 95.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 21,
            "maks": 30,
            "persen": 70.0
          }
        ]
      },
      "tataKelola": {
        "skor": 65,
        "persen": 81.2,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 30,
            "maks": 35,
            "persen": 85.7
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 35,
            "maks": 45,
            "persen": 77.8
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (52.2%)",
      "Sosial (67.1%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Sosial"
    ],
    "catatanMusrenbang": "Terdapat 25 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (52.2%), Sosial (67.1%). Prioritas lapangan: Kemudahan Akses menuju SMA/SMK/MA/MAK/Sederajat terdekat di Desa; Operasional ketersediaan layanan Tenaga Kesehatan di desa.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Keagamaan, Sosial & Budaya"
    ],
    "namaKepalaDesa": "ANWAR EFENDI",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "2.88229393S 108.23985578E",
    "alamatDesa": "Jln TGH MUHAMMAD ARIF DESAN KURIPAN TIMUR",
    "emailDesa": "Kuripantimur01@gmail.com",
    "webDesa": "",
    "masaJabatanKades": "5 TAHUN 6 Bulan",
    "periodeKades": "Periode ke-1",
    "skorBappenasId": 95.93
  },
  {
    "id": "desa-giri-sasak-kuripan",
    "nama": "Giri Sasak",
    "tipe": "Desa",
    "kecamatan": "Kuripan",
    "kodeWilayah": "5201152006",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Mandiri",
    "skorKemendesa": 0.8551,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 87.45,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 543,
    "indeksKomposit": 12.5,
    "indikator": {
      "infrastruktur": 18.0,
      "pertanianPangan": 8.8,
      "pendidikanSDM": 14.0,
      "kesehatanStunting": -8.9,
      "ekonomiUMKM": 8.8,
      "lingkunganSampah": 40.0
    },
    "dimensi": {
      "layananDasar": {
        "skor": 156,
        "persen": 91.8,
        "maks": 170,
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 43,
            "maks": 45,
            "persen": 95.6
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 98,
            "maks": 100,
            "persen": 98.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 15,
            "maks": 25,
            "persen": 60.0
          }
        ],
        "sub": {
          "pendidikan": 43,
          "kesehatan": 98,
          "utilitas": 15
        }
      },
      "sosial": {
        "skor": 75,
        "persen": 88.2,
        "maks": 85,
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 61,
            "maks": 65,
            "persen": 93.8
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 14,
            "maks": 20,
            "persen": 70.0
          }
        ]
      },
      "ekonomi": {
        "skor": 146,
        "persen": 91.2,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 40,
            "maks": 40,
            "persen": 100.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 106,
            "maks": 120,
            "persen": 88.3
          }
        ]
      },
      "lingkungan": {
        "skor": 54,
        "persen": 60.0,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 45,
            "maks": 65,
            "persen": 69.2
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 9,
            "maks": 25,
            "persen": 36.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 41,
        "persen": 82.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 19,
            "maks": 20,
            "persen": 95.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 22,
            "maks": 30,
            "persen": 73.3
          }
        ]
      },
      "tataKelola": {
        "skor": 71,
        "persen": 88.8,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 34,
            "maks": 35,
            "persen": 97.1
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 37,
            "maks": 45,
            "persen": 82.2
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Lingkungan (60.0%)",
      "Aksesibilitas (82.0%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Aksesibilitas"
    ],
    "catatanMusrenbang": "Terdapat 17 indikator defisit (Skor 1) dengan sektor kritis: Lingkungan (60.0%). Prioritas lapangan: Operasional Ketersediaan Air Minum di Desa dalam seminggu; Kemudahan akses Air Minum untuk warga di desa.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Jalan, Jembatan & Infrastruktur"
    ],
    "namaKepalaDesa": "HAMDANI",
    "statusKepalaDesa": "Definitif",
    "koordinatDesa": "-8,70807,116.17588",
    "alamatDesa": "PERENDEKAN JALAN GIRI SASAK",
    "emailDesa": "girisasakdesa.@gmail.com",
    "webDesa": "girisasak.desa.id",
    "masaJabatanKades": "11 Tahun 7 Bulan",
    "periodeKades": "Periode ke-2",
    "skorBappenasId": 108.42
  },
  {
    "id": "kelurahan-dasan-geres-gerung",
    "nama": "Dasan Geres",
    "tipe": "Kelurahan",
    "kecamatan": "Gerung",
    "kodeWilayah": "5201011001",
    "jumlahDusun": 6,
    "statusPrioritas": "Prioritas Mandiri (Kelurahan)",
    "skorKemendesa": 0.885,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 88.5,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 562,
    "indeksKomposit": 11.5,
    "indikator": {
      "infrastruktur": 15.0,
      "pertanianPangan": 25.0,
      "pendidikanSDM": 18.0,
      "kesehatanStunting": 14.0,
      "ekonomiUMKM": 20.0,
      "lingkunganSampah": 30.0
    },
    "dimensi": {
      "layananDasar": {
        "skor": 158,
        "persen": 92.9,
        "maks": 170,
        "sub": {
          "pendidikan": 45,
          "kesehatan": 80,
          "utilitas": 27
        },
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 42,
            "maks": 45,
            "persen": 93.3
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 93,
            "maks": 100,
            "persen": 93.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ]
      },
      "sosial": {
        "skor": 75,
        "persen": 88.2,
        "maks": 85,
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 4,
          "fasilitasOlahraga": 3
        },
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 57,
            "maks": 65,
            "persen": 87.7
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 18,
            "maks": 20,
            "persen": 90.0
          }
        ]
      },
      "ekonomi": {
        "skor": 142,
        "persen": 88.8,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 36,
            "maks": 40,
            "persen": 90.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 106,
            "maks": 120,
            "persen": 88.3
          }
        ]
      },
      "lingkungan": {
        "skor": 78,
        "persen": 86.7,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 56,
            "maks": 65,
            "persen": 86.2
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 22,
            "maks": 25,
            "persen": 88.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 50,
        "persen": 100.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 30,
            "maks": 30,
            "persen": 100.0
          }
        ]
      },
      "tataKelola": {
        "skor": 59,
        "persen": 73.8,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 26,
            "maks": 35,
            "persen": 74.3
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 33,
            "maks": 45,
            "persen": 73.3
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Pengelolaan Sampah Perkotaan (86.7%)",
      "Drainase & Sanitasi (89.4%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Tata Kelola"
    ],
    "catatanMusrenbang": "Optimalisasi penanganan persampahan TPS3R perkotaan dan penataan sanitasi drainase pemukiman padat.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Jalan, Jembatan & Infrastruktur"
    ],
    "namaKepalaDesa": "Lurah Dasan Geres (Wilayah Perkotaan)",
    "statusKepalaDesa": "Lurah (ASN)",
    "koordinatDesa": "-8.6685, 116.1225",
    "alamatDesa": "Kantor Lurah Dasan Geres, Kec. Gerung, Kab. Lombok Barat",
    "emailDesa": "",
    "webDesa": "",
    "masaJabatanKades": "-",
    "periodeKades": "-"
  },
  {
    "id": "kelurahan-gerung-selatan-gerung",
    "nama": "Gerung Selatan",
    "tipe": "Kelurahan",
    "kecamatan": "Gerung",
    "kodeWilayah": "5201011002",
    "jumlahDusun": 6,
    "statusPrioritas": "Prioritas Mandiri (Kelurahan)",
    "skorKemendesa": 0.862,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 86.2,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 547,
    "indeksKomposit": 13.8,
    "indikator": {
      "infrastruktur": 15.0,
      "pertanianPangan": 25.0,
      "pendidikanSDM": 18.0,
      "kesehatanStunting": 14.0,
      "ekonomiUMKM": 20.0,
      "lingkunganSampah": 30.0
    },
    "dimensi": {
      "layananDasar": {
        "skor": 152,
        "persen": 89.4,
        "maks": 170,
        "sub": {
          "pendidikan": 45,
          "kesehatan": 80,
          "utilitas": 27
        },
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 40,
            "maks": 45,
            "persen": 88.9
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 89,
            "maks": 100,
            "persen": 89.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ]
      },
      "sosial": {
        "skor": 72,
        "persen": 84.7,
        "maks": 85,
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 4,
          "fasilitasOlahraga": 3
        },
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 55,
            "maks": 65,
            "persen": 84.6
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 17,
            "maks": 20,
            "persen": 85.0
          }
        ]
      },
      "ekonomi": {
        "skor": 138,
        "persen": 86.2,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 34,
            "maks": 40,
            "persen": 85.0
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 104,
            "maks": 120,
            "persen": 86.7
          }
        ]
      },
      "lingkungan": {
        "skor": 74,
        "persen": 82.2,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 53,
            "maks": 65,
            "persen": 81.5
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 21,
            "maks": 25,
            "persen": 84.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 50,
        "persen": 100.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 30,
            "maks": 30,
            "persen": 100.0
          }
        ]
      },
      "tataKelola": {
        "skor": 61,
        "persen": 76.2,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 27,
            "maks": 35,
            "persen": 77.1
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 34,
            "maks": 45,
            "persen": 75.6
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Pengelolaan Sampah Perkotaan (86.7%)",
      "Drainase & Sanitasi (89.4%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Tata Kelola"
    ],
    "catatanMusrenbang": "Optimalisasi penanganan persampahan TPS3R perkotaan dan penataan sanitasi drainase pemukiman padat.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Jalan, Jembatan & Infrastruktur"
    ],
    "namaKepalaDesa": "Lurah Gerung Selatan (Wilayah Perkotaan)",
    "statusKepalaDesa": "Lurah (ASN)",
    "koordinatDesa": "-8.6852, 116.1248",
    "alamatDesa": "Kantor Lurah Gerung Selatan, Jl. Soekarno-Hatta, Kec. Gerung, Kab. Lombok Barat",
    "emailDesa": "",
    "webDesa": "",
    "masaJabatanKades": "-",
    "periodeKades": "-"
  },
  {
    "id": "kelurahan-gerung-utara-gerung",
    "nama": "Gerung Utara",
    "tipe": "Kelurahan",
    "kecamatan": "Gerung",
    "kodeWilayah": "5201011003",
    "jumlahDusun": 6,
    "statusPrioritas": "Prioritas Mandiri (Kelurahan)",
    "skorKemendesa": 0.871,
    "statusKemendesa": "MANDIRI",
    "skorBappenas": 87.1,
    "statusBappenas": "MANDIRI",
    "nilaiTotal": 553,
    "indeksKomposit": 12.9,
    "indikator": {
      "infrastruktur": 15.0,
      "pertanianPangan": 25.0,
      "pendidikanSDM": 18.0,
      "kesehatanStunting": 14.0,
      "ekonomiUMKM": 20.0,
      "lingkunganSampah": 30.0
    },
    "dimensi": {
      "layananDasar": {
        "skor": 155,
        "persen": 91.2,
        "maks": 170,
        "sub": {
          "pendidikan": 45,
          "kesehatan": 80,
          "utilitas": 27
        },
        "subList": [
          {
            "kode": "1.A",
            "nama": "Pendidikan",
            "skor": 41,
            "maks": 45,
            "persen": 91.1
          },
          {
            "kode": "1.B",
            "nama": "Kesehatan",
            "skor": 91,
            "maks": 100,
            "persen": 91.0
          },
          {
            "kode": "1.C",
            "nama": "Utilitas Dasar",
            "skor": 23,
            "maks": 25,
            "persen": 92.0
          }
        ]
      },
      "sosial": {
        "skor": 74,
        "persen": 87.1,
        "maks": 85,
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 4,
          "fasilitasOlahraga": 3
        },
        "subList": [
          {
            "kode": "2.A",
            "nama": "Aktivitas Sosial",
            "skor": 57,
            "maks": 65,
            "persen": 87.7
          },
          {
            "kode": "2.B",
            "nama": "Fasilitas Masyarakat",
            "skor": 17,
            "maks": 20,
            "persen": 85.0
          }
        ]
      },
      "ekonomi": {
        "skor": 140,
        "persen": 87.5,
        "maks": 160,
        "subList": [
          {
            "kode": "3.A",
            "nama": "Produksi Desa",
            "skor": 35,
            "maks": 40,
            "persen": 87.5
          },
          {
            "kode": "3.B",
            "nama": "Fasilitas Pendukung Ekonomi",
            "skor": 105,
            "maks": 120,
            "persen": 87.5
          }
        ]
      },
      "lingkungan": {
        "skor": 76,
        "persen": 84.4,
        "maks": 90,
        "subList": [
          {
            "kode": "4.A",
            "nama": "Pengelolaan Lingkungan",
            "skor": 55,
            "maks": 65,
            "persen": 84.6
          },
          {
            "kode": "4.B",
            "nama": "Penanggulangan Bencana",
            "skor": 21,
            "maks": 25,
            "persen": 84.0
          }
        ]
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50,
        "subList": [
          {
            "kode": "5.A",
            "nama": "Kondisi Akses Jalan",
            "skor": 20,
            "maks": 20,
            "persen": 100.0
          },
          {
            "kode": "5.B",
            "nama": "Kemudahan Akses",
            "skor": 29,
            "maks": 30,
            "persen": 96.7
          }
        ]
      },
      "tataKelola": {
        "skor": 59,
        "persen": 73.8,
        "maks": 80,
        "subList": [
          {
            "kode": "6.A",
            "nama": "Kelembagaan & Pelayanan Desa",
            "skor": 26,
            "maks": 35,
            "persen": 74.3
          },
          {
            "kode": "6.B",
            "nama": "Tata Kelola Keuangan Desa",
            "skor": 33,
            "maks": 45,
            "persen": 73.3
          }
        ]
      }
    },
    "masalahPrioritas": [
      "Pengelolaan Sampah Perkotaan (86.7%)",
      "Drainase & Sanitasi (89.4%)"
    ],
    "targetDimensi": [
      "Lingkungan",
      "Tata Kelola"
    ],
    "catatanMusrenbang": "Optimalisasi penanganan persampahan TPS3R perkotaan dan penataan sanitasi drainase pemukiman padat.",
    "rekomendasiKategori": [
      "Sampah, Lingkungan & Kebencanaan",
      "Jalan, Jembatan & Infrastruktur"
    ],
    "namaKepalaDesa": "Lurah Gerung Utara (Wilayah Perkotaan)",
    "statusKepalaDesa": "Lurah (ASN)",
    "koordinatDesa": "-8.6745, 116.1235",
    "alamatDesa": "Kantor Lurah Gerung Utara, Jl. Gatot Subroto, Kec. Gerung, Kab. Lombok Barat",
    "emailDesa": "",
    "webDesa": "",
    "masaJabatanKades": "-",
    "periodeKades": "-"
  }
];

// Fungsi Helper untuk Menghubungkan Usulan dengan Masalah Desa
export function getOpdByDimensi(dimensiNama) {
  for (const key in DIMENSI_CONFIG) {
    if (DIMENSI_CONFIG[key].nama === dimensiNama) {
      return DIMENSI_CONFIG[key].opdPengampu;
    }
  }
  return [];
}

export function getDimensiByOpd(opdName) {
  const res = [];
  for (const key in DIMENSI_CONFIG) {
    if (DIMENSI_CONFIG[key].opdPengampu.includes(opdName)) {
      res.push(DIMENSI_CONFIG[key].nama);
    }
  }
  return res.length > 0 ? res : ["Layanan Dasar"];
}

// Ambang Batas Klasifikasi Masalah Desa (Bappenas & Kemendesa Sheet RUMUSAN)
export const THRESHOLD_KRITIS = 70.0; // < 70.0% = Kritis (Merah 🔴) - Intervensi Sangat Mendesak
export const THRESHOLD_SEDANG = 80.0; // 70.0% - 79.9% = Sedang (Kuning 🟡) - Perlu Perhatian
// >= 80.0% = Aman (Hijau 🟢) - Kebutuhan Terpenuhi / Mandiri

import desaProblemStats from "./desaProblemStats.js";

/**
 * Mendapatkan ringkasan jumlah masalah kritis, sedang, dan aman berdasarkan 127 indikator sheet RUMUSAN
 * @param {string} kecamatan 
 * @param {string} desaNama 
 * @returns {Object} { jmlKritis, jmlSedang, jmlAman, masalahKritisDetail }
 */
export function getDesaProblemCounts(kecamatan, desaNama) {
  if (!kecamatan || !desaNama) {
    return { jmlKritis: 0, jmlSedang: 0, jmlAman: 0, masalahKritisDetail: [] };
  }
  const cleanKec = String(kecamatan).trim().toUpperCase();
  const cleanDesa = String(desaNama).trim().toUpperCase();
  const key = `${cleanKec}_${cleanDesa}`;

  if (desaProblemStats[key]) {
    return desaProblemStats[key];
  }

  // Cek pencarian nama desa
  for (const k in desaProblemStats) {
    if (k.includes(cleanDesa)) {
      return desaProblemStats[k];
    }
  }

  // Default untuk Kelurahan (Gerung Selatan, Gerung Utara, Dasan Geres)
  return {
    jmlKritis: 14,
    jmlSedang: 18,
    jmlAman: 95,
    masalahKritisDetail: [
      "Pengelolaan dan Pengolahan Sampah Perkotaan",
      "Ketersediaan Tangki Septik Komunal",
      "Ketersediaan Ruang Publik Terbuka Ramah Anak",
      "Ketersediaan Akses Pasar Higienis"
    ]
  };
}

/**
 * Menganalisis status triase 6 dimensi masalah desa dan memetakan OPD pengampu
 * @param {Object} desa - Objek desa dari WILAYAH_LOBAR
 * @returns {Object} Hasil klasifikasi triase Kritis, Sedang, Aman beserta pemetaan OPD dan jumlah masalah 127 indikator
 */
export function getTriageStatusDesa(desa) {
  if (!desa || !desa.dimensi) {
    return {
      kritis: [],
      sedang: [],
      aman: [],
      opdKritis: [],
      opdSedang: [],
      opdAman: [],
      dimensiMap: {},
      opdStatusMap: {},
      jmlKritis: 0,
      jmlSedang: 0,
      jmlAman: 0,
      masalahKritisDetail: []
    };
  }

  const problemCounts = getDesaProblemCounts(desa.kecamatan, desa.nama);

  const kritis = [];
  const sedang = [];
  const aman = [];
  const dimensiMap = {};
  const dimKeys = ["layananDasar", "sosial", "ekonomi", "lingkungan", "aksesibilitas", "tataKelola"];

  dimKeys.forEach((key) => {
    const d = desa.dimensi[key];
    const cfg = DIMENSI_CONFIG[key];
    if (!d || !cfg) return;

    const persen = d.persen !== undefined ? Number(d.persen) : Math.round((d.skor / cfg.skorMaks) * 1000) / 10;
    const item = {
      key,
      nama: cfg.nama,
      skor: d.skor,
      maks: cfg.skorMaks,
      persen,
      opdPengampu: cfg.opdPengampu || [],
      subBidang: cfg.subBidang || []
    };

    if (persen < THRESHOLD_KRITIS) {
      item.status = "kritis";
      item.statusLabel = "KRITIS (🔴)";
      kritis.push(item);
    } else if (persen < THRESHOLD_SEDANG) {
      item.status = "sedang";
      item.statusLabel = "SEDANG (🟡)";
      sedang.push(item);
    } else {
      item.status = "aman";
      item.statusLabel = "AMAN (🟢)";
      aman.push(item);
    }

    dimensiMap[key] = item;
  });

  // Urutkan Kritis dari persentase capaian terendah (paling parah)
  kritis.sort((a, b) => a.persen - b.persen);
  sedang.sort((a, b) => a.persen - b.persen);
  aman.sort((a, b) => b.persen - a.persen);

  // Kumpulkan OPD Kritis, Sedang, Aman
  const opdStatusMap = {};

  // 1. OPD Kritis (dimensi persen < 70%)
  const opdKritisSet = new Set();
  kritis.forEach((it) => {
    it.opdPengampu.forEach((opd) => {
      opdKritisSet.add(opd);
      if (!opdStatusMap[opd] || opdStatusMap[opd].persen > it.persen) {
        opdStatusMap[opd] = {
          status: "kritis",
          persen: it.persen,
          dimensi: it.nama,
          dimensiKey: it.key
        };
      }
    });
  });

  // 2. OPD Sedang (dimensi persen 70% - 79.9%)
  const opdSedangSet = new Set();
  sedang.forEach((it) => {
    it.opdPengampu.forEach((opd) => {
      if (!opdKritisSet.has(opd)) {
        opdSedangSet.add(opd);
        if (!opdStatusMap[opd] || opdStatusMap[opd].persen > it.persen) {
          opdStatusMap[opd] = {
            status: "sedang",
            persen: it.persen,
            dimensi: it.nama,
            dimensiKey: it.key
          };
        }
      }
    });
  });

  // 3. OPD Aman (hanya mengampu dimensi persen >= 80% dan tidak ada di kritis/sedang)
  const opdAmanSet = new Set();
  aman.forEach((it) => {
    it.opdPengampu.forEach((opd) => {
      if (!opdKritisSet.has(opd) && !opdSedangSet.has(opd)) {
        opdAmanSet.add(opd);
        if (!opdStatusMap[opd]) {
          opdStatusMap[opd] = {
            status: "aman",
            persen: it.persen,
            dimensi: it.nama,
            dimensiKey: it.key
          };
        }
      }
    });
  });

  return {
    kritis,
    sedang,
    aman,
    opdKritis: Array.from(opdKritisSet),
    opdSedang: Array.from(opdSedangSet),
    opdAman: Array.from(opdAmanSet),
    dimensiMap,
    opdStatusMap,
    jmlKritis: problemCounts.jmlKritis,
    jmlSedang: problemCounts.jmlSedang,
    jmlAman: problemCounts.jmlAman,
    masalahKritisDetail: problemCounts.masalahKritisDetail
  };
}
