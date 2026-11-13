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
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 136,
        "persen": 85.0,
        "maks": 160
      },
      "lingkungan": {
        "skor": 74,
        "persen": 82.2,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 48,
        "persen": 96.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 53,
        "persen": 66.2,
        "maks": 80
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
    "catatanMusrenbang": "Kondisi keseluruhan desa telah berstatus Mandiri/Maju, prioritas pemeliharaan.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 2,
          "konflik": 23,
          "satkamling": 10,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 1
        }
      },
      "ekonomi": {
        "skor": 132,
        "persen": 82.5,
        "maks": 160
      },
      "lingkungan": {
        "skor": 54,
        "persen": 60.0,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 46,
        "persen": 92.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 64,
        "persen": 80.0,
        "maks": 80
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
    "catatanMusrenbang": "Sarana/Kegiatan Olahraga Minim (Skor: 2/5) • Pengelolaan Sampah & Sanitasi Terbatas (60.0%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sosial, Keagamaan & Kelembagaan Desa"
    ]
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
        "sub": {
          "olahraga": 1,
          "konflik": 25,
          "satkamling": 2,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 110,
        "persen": 68.8,
        "maks": 160
      },
      "lingkungan": {
        "skor": 55,
        "persen": 61.1,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 38,
        "persen": 76.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 55,
        "persen": 68.8,
        "maks": 80
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
    "catatanMusrenbang": "Sarana/Kegiatan Olahraga Minim (Skor: 1/5) • Satkamling / Pos Ronda Pasif • Aksesibilitas Jalan Butuh Peningkatan (76.0%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sosial, Keagamaan & Kelembagaan Desa"
    ]
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
        "sub": {
          "olahraga": 2,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 121,
        "persen": 75.6,
        "maks": 160
      },
      "lingkungan": {
        "skor": 58,
        "persen": 64.4,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 63,
        "persen": 78.8,
        "maks": 80
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
    "catatanMusrenbang": "Sarana/Kegiatan Olahraga Minim (Skor: 2/5) • Pengelolaan Sampah & Sanitasi Terbatas (64.4%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sosial, Keagamaan & Kelembagaan Desa"
    ]
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
        "sub": {
          "olahraga": 4,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 3
        }
      },
      "ekonomi": {
        "skor": 106,
        "persen": 66.2,
        "maks": 160
      },
      "lingkungan": {
        "skor": 61,
        "persen": 67.8,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 46,
        "persen": 92.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 71,
        "persen": 88.8,
        "maks": 80
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
    "catatanMusrenbang": "Kondisi keseluruhan desa telah berstatus Mandiri/Maju, prioritas pemeliharaan.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 7,
          "tamanBacaan": 8,
          "fasilitasOlahraga": 4
        }
      },
      "ekonomi": {
        "skor": 126,
        "persen": 78.8,
        "maks": 160
      },
      "lingkungan": {
        "skor": 52,
        "persen": 57.8,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 67,
        "persen": 83.8,
        "maks": 80
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
    "catatanMusrenbang": "Pengelolaan Sampah & Sanitasi Terbatas (57.8%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sosial, Keagamaan & Kelembagaan Desa"
    ]
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
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 10,
          "fasilitasOlahraga": 3
        }
      },
      "ekonomi": {
        "skor": 136,
        "persen": 85.0,
        "maks": 160
      },
      "lingkungan": {
        "skor": 58,
        "persen": 64.4,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 50,
        "persen": 100.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 72,
        "persen": 90.0,
        "maks": 80
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
    "catatanMusrenbang": "Pengelolaan Sampah & Sanitasi Terbatas (64.4%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 10,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 108,
        "persen": 67.5,
        "maks": 160
      },
      "lingkungan": {
        "skor": 50,
        "persen": 55.6,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 61,
        "persen": 76.2,
        "maks": 80
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
    "catatanMusrenbang": "Pengelolaan Sampah & Sanitasi Terbatas (55.6%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 9,
          "tamanBacaan": 10,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 112,
        "persen": 70.0,
        "maks": 160
      },
      "lingkungan": {
        "skor": 68,
        "persen": 75.6,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 62,
        "persen": 77.5,
        "maks": 80
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
    "catatanMusrenbang": "Kondisi keseluruhan desa telah berstatus Mandiri/Maju, prioritas pemeliharaan.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 2,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 121,
        "persen": 75.6,
        "maks": 160
      },
      "lingkungan": {
        "skor": 70,
        "persen": 77.8,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 48,
        "persen": 96.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 66,
        "persen": 82.5,
        "maks": 80
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
    "catatanMusrenbang": "Sarana/Kegiatan Olahraga Minim (Skor: 2/5)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sosial, Keagamaan & Kelembagaan Desa"
    ]
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
        "sub": {
          "olahraga": 1,
          "konflik": 25,
          "satkamling": 2,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 118,
        "persen": 73.8,
        "maks": 160
      },
      "lingkungan": {
        "skor": 66,
        "persen": 73.3,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 47,
        "persen": 94.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 58,
        "persen": 72.5,
        "maks": 80
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
    "catatanMusrenbang": "Sarana/Kegiatan Olahraga Minim (Skor: 1/5) • Satkamling / Pos Ronda Pasif",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sosial, Keagamaan & Kelembagaan Desa"
    ]
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
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 2,
          "tamanBacaan": 9,
          "fasilitasOlahraga": 3
        }
      },
      "ekonomi": {
        "skor": 134,
        "persen": 83.8,
        "maks": 160
      },
      "lingkungan": {
        "skor": 62,
        "persen": 68.9,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 71,
        "persen": 88.8,
        "maks": 80
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
    "catatanMusrenbang": "Satkamling / Pos Ronda Pasif",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sosial, Keagamaan & Kelembagaan Desa"
    ]
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
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 10,
          "fasilitasOlahraga": 3
        }
      },
      "ekonomi": {
        "skor": 107,
        "persen": 66.9,
        "maks": 160
      },
      "lingkungan": {
        "skor": 58,
        "persen": 64.4,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 62,
        "persen": 77.5,
        "maks": 80
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
    "catatanMusrenbang": "Pengelolaan Sampah & Sanitasi Terbatas (64.4%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 9,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 3
        }
      },
      "ekonomi": {
        "skor": 120,
        "persen": 75.0,
        "maks": 160
      },
      "lingkungan": {
        "skor": 58,
        "persen": 64.4,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 50,
        "persen": 100.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 51,
        "persen": 63.7,
        "maks": 80
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
    "catatanMusrenbang": "Pengelolaan Sampah & Sanitasi Terbatas (64.4%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 10,
          "fasilitasOlahraga": 4
        }
      },
      "ekonomi": {
        "skor": 143,
        "persen": 89.4,
        "maks": 160
      },
      "lingkungan": {
        "skor": 67,
        "persen": 74.4,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 48,
        "persen": 96.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 72,
        "persen": 90.0,
        "maks": 80
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
    "catatanMusrenbang": "Kondisi keseluruhan desa telah berstatus Mandiri/Maju, prioritas pemeliharaan.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 2,
          "konflik": 23,
          "satkamling": 6,
          "tamanBacaan": 10,
          "fasilitasOlahraga": 3
        }
      },
      "ekonomi": {
        "skor": 141,
        "persen": 88.1,
        "maks": 160
      },
      "lingkungan": {
        "skor": 57,
        "persen": 63.3,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 48,
        "persen": 96.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 74,
        "persen": 92.5,
        "maks": 80
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
    "catatanMusrenbang": "Sarana/Kegiatan Olahraga Minim (Skor: 2/5) • Pengelolaan Sampah & Sanitasi Terbatas (63.3%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sosial, Keagamaan & Kelembagaan Desa"
    ]
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
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 8,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 3
        }
      },
      "ekonomi": {
        "skor": 123,
        "persen": 76.9,
        "maks": 160
      },
      "lingkungan": {
        "skor": 47,
        "persen": 52.2,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 67,
        "persen": 83.8,
        "maks": 80
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
    "catatanMusrenbang": "Pengelolaan Sampah & Sanitasi Terbatas (52.2%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sosial, Keagamaan & Kelembagaan Desa"
    ]
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
        "sub": {
          "olahraga": 2,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 10,
          "fasilitasOlahraga": 3
        }
      },
      "ekonomi": {
        "skor": 106,
        "persen": 66.2,
        "maks": 160
      },
      "lingkungan": {
        "skor": 56,
        "persen": 62.2,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 46,
        "persen": 92.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 72,
        "persen": 90.0,
        "maks": 80
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
    "catatanMusrenbang": "Sarana/Kegiatan Olahraga Minim (Skor: 2/5) • Pengelolaan Sampah & Sanitasi Terbatas (62.2%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 4,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 9,
          "fasilitasOlahraga": 3
        }
      },
      "ekonomi": {
        "skor": 119,
        "persen": 74.4,
        "maks": 160
      },
      "lingkungan": {
        "skor": 52,
        "persen": 57.8,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 72,
        "persen": 90.0,
        "maks": 80
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
    "catatanMusrenbang": "Pengelolaan Sampah & Sanitasi Terbatas (57.8%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 7,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 114,
        "persen": 71.2,
        "maks": 160
      },
      "lingkungan": {
        "skor": 67,
        "persen": 74.4,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 55,
        "persen": 68.8,
        "maks": 80
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
    "catatanMusrenbang": "Kondisi keseluruhan desa telah berstatus Mandiri/Maju, prioritas pemeliharaan.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 5,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 7,
          "fasilitasOlahraga": 3
        }
      },
      "ekonomi": {
        "skor": 122,
        "persen": 76.2,
        "maks": 160
      },
      "lingkungan": {
        "skor": 68,
        "persen": 75.6,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 47,
        "persen": 94.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 58,
        "persen": 72.5,
        "maks": 80
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
    "catatanMusrenbang": "Kondisi keseluruhan desa telah berstatus Mandiri/Maju, prioritas pemeliharaan.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 3
        }
      },
      "ekonomi": {
        "skor": 140,
        "persen": 87.5,
        "maks": 160
      },
      "lingkungan": {
        "skor": 60,
        "persen": 66.7,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 70,
        "persen": 87.5,
        "maks": 80
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
    "catatanMusrenbang": "Kondisi keseluruhan desa telah berstatus Mandiri/Maju, prioritas pemeliharaan.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sosial, Keagamaan & Kelembagaan Desa"
    ]
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
        "sub": {
          "olahraga": 4,
          "konflik": 25,
          "satkamling": 7,
          "tamanBacaan": 9,
          "fasilitasOlahraga": 4
        }
      },
      "ekonomi": {
        "skor": 138,
        "persen": 86.2,
        "maks": 160
      },
      "lingkungan": {
        "skor": 54,
        "persen": 60.0,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 48,
        "persen": 96.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 54,
        "persen": 67.5,
        "maks": 80
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
    "catatanMusrenbang": "Pengelolaan Sampah & Sanitasi Terbatas (60.0%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 4,
          "konflik": 5,
          "satkamling": 10,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 4
        }
      },
      "ekonomi": {
        "skor": 120,
        "persen": 75.0,
        "maks": 160
      },
      "lingkungan": {
        "skor": 64,
        "persen": 71.1,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 68,
        "persen": 85.0,
        "maks": 80
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
    "catatanMusrenbang": "Mitigasi Konflik Rendah (Skor: 5/25)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sosial, Keagamaan & Kelembagaan Desa"
    ]
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
        "sub": {
          "olahraga": 2,
          "konflik": 5,
          "satkamling": 10,
          "tamanBacaan": 7,
          "fasilitasOlahraga": 3
        }
      },
      "ekonomi": {
        "skor": 132,
        "persen": 82.5,
        "maks": 160
      },
      "lingkungan": {
        "skor": 56,
        "persen": 62.2,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 48,
        "persen": 96.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 72,
        "persen": 90.0,
        "maks": 80
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
    "catatanMusrenbang": "Mitigasi Konflik Rendah (Skor: 5/25) • Sarana/Kegiatan Olahraga Minim (Skor: 2/5) • Pengelolaan Sampah & Sanitasi Terbatas (62.2%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sosial, Keagamaan & Kelembagaan Desa"
    ]
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
        "sub": {
          "olahraga": 2,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 10,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 135,
        "persen": 84.4,
        "maks": 160
      },
      "lingkungan": {
        "skor": 50,
        "persen": 55.6,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 45,
        "persen": 90.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 76,
        "persen": 95.0,
        "maks": 80
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
    "catatanMusrenbang": "Sarana/Kegiatan Olahraga Minim (Skor: 2/5) • Pengelolaan Sampah & Sanitasi Terbatas (55.6%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 2,
          "konflik": 25,
          "satkamling": 2,
          "tamanBacaan": 10,
          "fasilitasOlahraga": 3
        }
      },
      "ekonomi": {
        "skor": 118,
        "persen": 73.8,
        "maks": 160
      },
      "lingkungan": {
        "skor": 46,
        "persen": 51.1,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 45,
        "persen": 90.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 62,
        "persen": 77.5,
        "maks": 80
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
    "catatanMusrenbang": "Sarana/Kegiatan Olahraga Minim (Skor: 2/5) • Satkamling / Pos Ronda Pasif • Pengelolaan Sampah & Sanitasi Terbatas (51.1%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 4,
          "konflik": 11,
          "satkamling": 10,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 4
        }
      },
      "ekonomi": {
        "skor": 120,
        "persen": 75.0,
        "maks": 160
      },
      "lingkungan": {
        "skor": 64,
        "persen": 71.1,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 63,
        "persen": 78.8,
        "maks": 80
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
    "catatanMusrenbang": "Mitigasi Konflik Rendah (Skor: 11/25)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sosial, Keagamaan & Kelembagaan Desa"
    ]
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
        "sub": {
          "olahraga": 2,
          "konflik": 25,
          "satkamling": 7,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 115,
        "persen": 71.9,
        "maks": 160
      },
      "lingkungan": {
        "skor": 64,
        "persen": 71.1,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 59,
        "persen": 73.8,
        "maks": 80
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
    "catatanMusrenbang": "Sarana/Kegiatan Olahraga Minim (Skor: 2/5)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sosial, Keagamaan & Kelembagaan Desa"
    ]
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
        "sub": {
          "olahraga": 3,
          "konflik": 23,
          "satkamling": 10,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 3
        }
      },
      "ekonomi": {
        "skor": 111,
        "persen": 69.4,
        "maks": 160
      },
      "lingkungan": {
        "skor": 60,
        "persen": 66.7,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 48,
        "persen": 96.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 66,
        "persen": 82.5,
        "maks": 80
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
    "catatanMusrenbang": "Kondisi keseluruhan desa telah berstatus Mandiri/Maju, prioritas pemeliharaan.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 2,
          "konflik": 5,
          "satkamling": 10,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 121,
        "persen": 75.6,
        "maks": 160
      },
      "lingkungan": {
        "skor": 58,
        "persen": 64.4,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 41,
        "persen": 82.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 56,
        "persen": 70.0,
        "maks": 80
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
    "catatanMusrenbang": "Mitigasi Konflik Rendah (Skor: 5/25) • Sarana/Kegiatan Olahraga Minim (Skor: 2/5) • Pengelolaan Sampah & Sanitasi Terbatas (64.4%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sosial, Keagamaan & Kelembagaan Desa"
    ]
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
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 9,
          "fasilitasOlahraga": 3
        }
      },
      "ekonomi": {
        "skor": 110,
        "persen": 68.8,
        "maks": 160
      },
      "lingkungan": {
        "skor": 86,
        "persen": 95.6,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 66,
        "persen": 82.5,
        "maks": 80
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
    "catatanMusrenbang": "Kondisi keseluruhan desa telah berstatus Mandiri/Maju, prioritas pemeliharaan.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 7,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 127,
        "persen": 79.4,
        "maks": 160
      },
      "lingkungan": {
        "skor": 72,
        "persen": 80.0,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 48,
        "persen": 96.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 68,
        "persen": 85.0,
        "maks": 80
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
    "catatanMusrenbang": "Kondisi keseluruhan desa telah berstatus Mandiri/Maju, prioritas pemeliharaan.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 10,
          "fasilitasOlahraga": 3
        }
      },
      "ekonomi": {
        "skor": 120,
        "persen": 75.0,
        "maks": 160
      },
      "lingkungan": {
        "skor": 66,
        "persen": 73.3,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 48,
        "persen": 96.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 63,
        "persen": 78.8,
        "maks": 80
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
    "catatanMusrenbang": "Kondisi keseluruhan desa telah berstatus Mandiri/Maju, prioritas pemeliharaan.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 2,
          "konflik": 21,
          "satkamling": 10,
          "tamanBacaan": 10,
          "fasilitasOlahraga": 3
        }
      },
      "ekonomi": {
        "skor": 110,
        "persen": 68.8,
        "maks": 160
      },
      "lingkungan": {
        "skor": 64,
        "persen": 71.1,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 61,
        "persen": 76.2,
        "maks": 80
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
    "catatanMusrenbang": "Sarana/Kegiatan Olahraga Minim (Skor: 2/5)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 6,
          "tamanBacaan": 10,
          "fasilitasOlahraga": 3
        }
      },
      "ekonomi": {
        "skor": 121,
        "persen": 75.6,
        "maks": 160
      },
      "lingkungan": {
        "skor": 42,
        "persen": 46.7,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 60,
        "persen": 75.0,
        "maks": 80
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
    "catatanMusrenbang": "Pengelolaan Sampah & Sanitasi Terbatas (46.7%) • Layanan Dasar Perlu Intervensi (71.8%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 2,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 9,
          "fasilitasOlahraga": 1
        }
      },
      "ekonomi": {
        "skor": 114,
        "persen": 71.2,
        "maks": 160
      },
      "lingkungan": {
        "skor": 50,
        "persen": 55.6,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 50,
        "persen": 100.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 64,
        "persen": 80.0,
        "maks": 80
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
    "catatanMusrenbang": "Sarana/Kegiatan Olahraga Minim (Skor: 2/5) • Pengelolaan Sampah & Sanitasi Terbatas (55.6%) • Layanan Dasar Perlu Intervensi (73.5%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 1,
          "konflik": 13,
          "satkamling": 10,
          "tamanBacaan": 9,
          "fasilitasOlahraga": 1
        }
      },
      "ekonomi": {
        "skor": 118,
        "persen": 73.8,
        "maks": 160
      },
      "lingkungan": {
        "skor": 76,
        "persen": 84.4,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 38,
        "persen": 76.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 70,
        "persen": 87.5,
        "maks": 80
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
    "catatanMusrenbang": "Mitigasi Konflik Rendah (Skor: 13/25) • Sarana/Kegiatan Olahraga Minim (Skor: 1/5) • Aksesibilitas Jalan Butuh Peningkatan (76.0%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sosial, Keagamaan & Kelembagaan Desa"
    ]
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
        "sub": {
          "olahraga": 2,
          "konflik": 19,
          "satkamling": 10,
          "tamanBacaan": 10,
          "fasilitasOlahraga": 3
        }
      },
      "ekonomi": {
        "skor": 137,
        "persen": 85.6,
        "maks": 160
      },
      "lingkungan": {
        "skor": 56,
        "persen": 62.2,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 74,
        "persen": 92.5,
        "maks": 80
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
    "catatanMusrenbang": "Sarana/Kegiatan Olahraga Minim (Skor: 2/5) • Pengelolaan Sampah & Sanitasi Terbatas (62.2%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sosial, Keagamaan & Kelembagaan Desa"
    ]
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
        "sub": {
          "olahraga": 4,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 9,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 127,
        "persen": 79.4,
        "maks": 160
      },
      "lingkungan": {
        "skor": 66,
        "persen": 73.3,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 50,
        "persen": 100.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 66,
        "persen": 82.5,
        "maks": 80
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
    "catatanMusrenbang": "Kondisi keseluruhan desa telah berstatus Mandiri/Maju, prioritas pemeliharaan.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 2,
          "konflik": 25,
          "satkamling": 8,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 114,
        "persen": 71.2,
        "maks": 160
      },
      "lingkungan": {
        "skor": 48,
        "persen": 53.3,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 37,
        "persen": 74.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 67,
        "persen": 83.8,
        "maks": 80
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
    "catatanMusrenbang": "Sarana/Kegiatan Olahraga Minim (Skor: 2/5) • Aksesibilitas Jalan Butuh Peningkatan (74.0%) • Pengelolaan Sampah & Sanitasi Terbatas (53.3%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sosial, Keagamaan & Kelembagaan Desa"
    ]
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
        "sub": {
          "olahraga": 4,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 3
        }
      },
      "ekonomi": {
        "skor": 104,
        "persen": 65.0,
        "maks": 160
      },
      "lingkungan": {
        "skor": 76,
        "persen": 84.4,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 58,
        "persen": 72.5,
        "maks": 80
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
    "catatanMusrenbang": "Kondisi keseluruhan desa telah berstatus Mandiri/Maju, prioritas pemeliharaan.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 8,
          "fasilitasOlahraga": 3
        }
      },
      "ekonomi": {
        "skor": 138,
        "persen": 86.2,
        "maks": 160
      },
      "lingkungan": {
        "skor": 72,
        "persen": 80.0,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 47,
        "persen": 94.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 71,
        "persen": 88.8,
        "maks": 80
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
    "catatanMusrenbang": "Kondisi keseluruhan desa telah berstatus Mandiri/Maju, prioritas pemeliharaan.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 125,
        "persen": 78.1,
        "maks": 160
      },
      "lingkungan": {
        "skor": 71,
        "persen": 78.9,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 48,
        "persen": 96.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 65,
        "persen": 81.2,
        "maks": 80
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
    "catatanMusrenbang": "Kondisi keseluruhan desa telah berstatus Mandiri/Maju, prioritas pemeliharaan.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 3,
          "konflik": 5,
          "satkamling": 9,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 135,
        "persen": 84.4,
        "maks": 160
      },
      "lingkungan": {
        "skor": 61,
        "persen": 67.8,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 46,
        "persen": 92.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 78,
        "persen": 97.5,
        "maks": 80
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
    "catatanMusrenbang": "Mitigasi Konflik Rendah (Skor: 5/25)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sosial, Keagamaan & Kelembagaan Desa"
    ]
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
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 7,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 120,
        "persen": 75.0,
        "maks": 160
      },
      "lingkungan": {
        "skor": 68,
        "persen": 75.6,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 45,
        "persen": 90.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 68,
        "persen": 85.0,
        "maks": 80
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
    "catatanMusrenbang": "Kondisi keseluruhan desa telah berstatus Mandiri/Maju, prioritas pemeliharaan.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
  },
  {
    "id": "desa-kedaro-sekotong",
    "nama": "Kedaro",
    "tipe": "Desa",
    "kecamatan": "Sekotong",
    "kodeWilayah": "5201072005",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Sangat Tinggi",
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
        "sub": {
          "olahraga": 2,
          "konflik": 25,
          "satkamling": 7,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 92,
        "persen": 57.5,
        "maks": 160
      },
      "lingkungan": {
        "skor": 58,
        "persen": 64.4,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 45,
        "persen": 90.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 55,
        "persen": 68.8,
        "maks": 80
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
    "catatanMusrenbang": "Sarana/Kegiatan Olahraga Minim (Skor: 2/5) • Pengelolaan Sampah & Sanitasi Terbatas (64.4%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 2,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 8,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 114,
        "persen": 71.2,
        "maks": 160
      },
      "lingkungan": {
        "skor": 62,
        "persen": 68.9,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 44,
        "persen": 88.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 66,
        "persen": 82.5,
        "maks": 80
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
    "catatanMusrenbang": "Sarana/Kegiatan Olahraga Minim (Skor: 2/5)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 2,
          "konflik": 25,
          "satkamling": 9,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 96,
        "persen": 60.0,
        "maks": 160
      },
      "lingkungan": {
        "skor": 64,
        "persen": 71.1,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 43,
        "persen": 86.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 72,
        "persen": 90.0,
        "maks": 80
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
    "catatanMusrenbang": "Sarana/Kegiatan Olahraga Minim (Skor: 2/5) • Layanan Dasar Perlu Intervensi (73.5%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 9,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 117,
        "persen": 73.1,
        "maks": 160
      },
      "lingkungan": {
        "skor": 62,
        "persen": 68.9,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 44,
        "persen": 88.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 68,
        "persen": 85.0,
        "maks": 80
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
    "catatanMusrenbang": "Kondisi keseluruhan desa telah berstatus Mandiri/Maju, prioritas pemeliharaan.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 3
        }
      },
      "ekonomi": {
        "skor": 119,
        "persen": 74.4,
        "maks": 160
      },
      "lingkungan": {
        "skor": 46,
        "persen": 51.1,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 39,
        "persen": 78.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 64,
        "persen": 80.0,
        "maks": 80
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
    "catatanMusrenbang": "Aksesibilitas Jalan Butuh Peningkatan (78.0%) • Pengelolaan Sampah & Sanitasi Terbatas (51.1%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 2,
          "konflik": 25,
          "satkamling": 8,
          "tamanBacaan": 9,
          "fasilitasOlahraga": 4
        }
      },
      "ekonomi": {
        "skor": 129,
        "persen": 80.6,
        "maks": 160
      },
      "lingkungan": {
        "skor": 68,
        "persen": 75.6,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 50,
        "persen": 100.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 67,
        "persen": 83.8,
        "maks": 80
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
    "catatanMusrenbang": "Sarana/Kegiatan Olahraga Minim (Skor: 2/5)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 4,
          "konflik": 25,
          "satkamling": 8,
          "tamanBacaan": 10,
          "fasilitasOlahraga": 3
        }
      },
      "ekonomi": {
        "skor": 106,
        "persen": 66.2,
        "maks": 160
      },
      "lingkungan": {
        "skor": 43,
        "persen": 47.8,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 40,
        "persen": 80.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 66,
        "persen": 82.5,
        "maks": 80
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
    "catatanMusrenbang": "Aksesibilitas Jalan Butuh Peningkatan (80.0%) • Pengelolaan Sampah & Sanitasi Terbatas (47.8%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 1,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 9,
          "fasilitasOlahraga": 3
        }
      },
      "ekonomi": {
        "skor": 99,
        "persen": 61.9,
        "maks": 160
      },
      "lingkungan": {
        "skor": 52,
        "persen": 57.8,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 52,
        "persen": 65.0,
        "maks": 80
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
    "catatanMusrenbang": "Sarana/Kegiatan Olahraga Minim (Skor: 1/5) • Pengelolaan Sampah & Sanitasi Terbatas (57.8%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 2,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 10,
          "fasilitasOlahraga": 3
        }
      },
      "ekonomi": {
        "skor": 131,
        "persen": 81.9,
        "maks": 160
      },
      "lingkungan": {
        "skor": 62,
        "persen": 68.9,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 50,
        "persen": 100.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 71,
        "persen": 88.8,
        "maks": 80
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
    "catatanMusrenbang": "Sarana/Kegiatan Olahraga Minim (Skor: 2/5)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 2,
          "konflik": 5,
          "satkamling": 10,
          "tamanBacaan": 9,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 127,
        "persen": 79.4,
        "maks": 160
      },
      "lingkungan": {
        "skor": 62,
        "persen": 68.9,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 47,
        "persen": 94.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 66,
        "persen": 82.5,
        "maks": 80
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
    "catatanMusrenbang": "Mitigasi Konflik Rendah (Skor: 5/25) • Sarana/Kegiatan Olahraga Minim (Skor: 2/5)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sosial, Keagamaan & Kelembagaan Desa"
    ]
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
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 9,
          "tamanBacaan": 10,
          "fasilitasOlahraga": 3
        }
      },
      "ekonomi": {
        "skor": 151,
        "persen": 94.4,
        "maks": 160
      },
      "lingkungan": {
        "skor": 69,
        "persen": 76.7,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 50,
        "persen": 100.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 49,
        "persen": 61.3,
        "maks": 80
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
    "catatanMusrenbang": "Kondisi keseluruhan desa telah berstatus Mandiri/Maju, prioritas pemeliharaan.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 1,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 8,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 88,
        "persen": 55.0,
        "maks": 160
      },
      "lingkungan": {
        "skor": 59,
        "persen": 65.6,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 46,
        "persen": 92.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 52,
        "persen": 65.0,
        "maks": 80
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
    "catatanMusrenbang": "Sarana/Kegiatan Olahraga Minim (Skor: 1/5)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 1,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 1
        }
      },
      "ekonomi": {
        "skor": 111,
        "persen": 69.4,
        "maks": 160
      },
      "lingkungan": {
        "skor": 80,
        "persen": 88.9,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 50,
        "persen": 100.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 67,
        "persen": 83.8,
        "maks": 80
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
    "catatanMusrenbang": "Sarana/Kegiatan Olahraga Minim (Skor: 1/5)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sosial, Keagamaan & Kelembagaan Desa"
    ]
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
        "sub": {
          "olahraga": 2,
          "konflik": 25,
          "satkamling": 7,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 106,
        "persen": 66.2,
        "maks": 160
      },
      "lingkungan": {
        "skor": 54,
        "persen": 60.0,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 47,
        "persen": 94.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 74,
        "persen": 92.5,
        "maks": 80
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
    "catatanMusrenbang": "Sarana/Kegiatan Olahraga Minim (Skor: 2/5) • Pengelolaan Sampah & Sanitasi Terbatas (60.0%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 4,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 4
        }
      },
      "ekonomi": {
        "skor": 126,
        "persen": 78.8,
        "maks": 160
      },
      "lingkungan": {
        "skor": 68,
        "persen": 75.6,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 50,
        "persen": 100.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 75,
        "persen": 93.8,
        "maks": 80
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
    "catatanMusrenbang": "Kondisi keseluruhan desa telah berstatus Mandiri/Maju, prioritas pemeliharaan.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 2,
          "konflik": 25,
          "satkamling": 8,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 133,
        "persen": 83.1,
        "maks": 160
      },
      "lingkungan": {
        "skor": 46,
        "persen": 51.1,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 48,
        "persen": 96.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 59,
        "persen": 73.8,
        "maks": 80
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
    "catatanMusrenbang": "Sarana/Kegiatan Olahraga Minim (Skor: 2/5) • Pengelolaan Sampah & Sanitasi Terbatas (51.1%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 110,
        "persen": 68.8,
        "maks": 160
      },
      "lingkungan": {
        "skor": 62,
        "persen": 68.9,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 47,
        "persen": 94.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 58,
        "persen": 72.5,
        "maks": 80
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
    "catatanMusrenbang": "Kondisi keseluruhan desa telah berstatus Mandiri/Maju, prioritas pemeliharaan.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 5
        }
      },
      "ekonomi": {
        "skor": 150,
        "persen": 93.8,
        "maks": 160
      },
      "lingkungan": {
        "skor": 78,
        "persen": 86.7,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 50,
        "persen": 100.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 65,
        "persen": 81.2,
        "maks": 80
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
    "catatanMusrenbang": "Kondisi keseluruhan desa telah berstatus Mandiri/Maju, prioritas pemeliharaan.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sosial, Keagamaan & Kelembagaan Desa"
    ]
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
        "sub": {
          "olahraga": 4,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 9,
          "fasilitasOlahraga": 4
        }
      },
      "ekonomi": {
        "skor": 137,
        "persen": 85.6,
        "maks": 160
      },
      "lingkungan": {
        "skor": 78,
        "persen": 86.7,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 69,
        "persen": 86.2,
        "maks": 80
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
    "catatanMusrenbang": "Kondisi keseluruhan desa telah berstatus Mandiri/Maju, prioritas pemeliharaan.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 9,
          "tamanBacaan": 10,
          "fasilitasOlahraga": 4
        }
      },
      "ekonomi": {
        "skor": 136,
        "persen": 85.0,
        "maks": 160
      },
      "lingkungan": {
        "skor": 80,
        "persen": 88.9,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 77,
        "persen": 96.2,
        "maks": 80
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
    "catatanMusrenbang": "Kondisi keseluruhan desa telah berstatus Mandiri/Maju, prioritas pemeliharaan.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 1,
          "konflik": 25,
          "satkamling": 8,
          "tamanBacaan": 8,
          "fasilitasOlahraga": 1
        }
      },
      "ekonomi": {
        "skor": 114,
        "persen": 71.2,
        "maks": 160
      },
      "lingkungan": {
        "skor": 68,
        "persen": 75.6,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 40,
        "persen": 80.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 72,
        "persen": 90.0,
        "maks": 80
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
    "catatanMusrenbang": "Sarana/Kegiatan Olahraga Minim (Skor: 1/5) • Aksesibilitas Jalan Butuh Peningkatan (80.0%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sosial, Keagamaan & Kelembagaan Desa"
    ]
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
        "sub": {
          "olahraga": 2,
          "konflik": 5,
          "satkamling": 9,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 112,
        "persen": 70.0,
        "maks": 160
      },
      "lingkungan": {
        "skor": 70,
        "persen": 77.8,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 38,
        "persen": 76.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 58,
        "persen": 72.5,
        "maks": 80
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
    "catatanMusrenbang": "Mitigasi Konflik Rendah (Skor: 5/25) • Sarana/Kegiatan Olahraga Minim (Skor: 2/5) • Aksesibilitas Jalan Butuh Peningkatan (76.0%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sosial, Keagamaan & Kelembagaan Desa"
    ]
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
        "sub": {
          "olahraga": 2,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 116,
        "persen": 72.5,
        "maks": 160
      },
      "lingkungan": {
        "skor": 52,
        "persen": 57.8,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 40,
        "persen": 80.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 71,
        "persen": 88.8,
        "maks": 80
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
    "catatanMusrenbang": "Sarana/Kegiatan Olahraga Minim (Skor: 2/5) • Aksesibilitas Jalan Butuh Peningkatan (80.0%) • Pengelolaan Sampah & Sanitasi Terbatas (57.8%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 2,
          "konflik": 25,
          "satkamling": 7,
          "tamanBacaan": 9,
          "fasilitasOlahraga": 1
        }
      },
      "ekonomi": {
        "skor": 94,
        "persen": 58.8,
        "maks": 160
      },
      "lingkungan": {
        "skor": 49,
        "persen": 54.4,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 47,
        "persen": 94.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 70,
        "persen": 87.5,
        "maks": 80
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
    "catatanMusrenbang": "Sarana/Kegiatan Olahraga Minim (Skor: 2/5) • Pengelolaan Sampah & Sanitasi Terbatas (54.4%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 119,
        "persen": 74.4,
        "maks": 160
      },
      "lingkungan": {
        "skor": 72,
        "persen": 80.0,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 61,
        "persen": 76.2,
        "maks": 80
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
    "catatanMusrenbang": "Kondisi keseluruhan desa telah berstatus Mandiri/Maju, prioritas pemeliharaan.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 2,
          "konflik": 21,
          "satkamling": 10,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 103,
        "persen": 64.4,
        "maks": 160
      },
      "lingkungan": {
        "skor": 53,
        "persen": 58.9,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 45,
        "persen": 90.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 70,
        "persen": 87.5,
        "maks": 80
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
    "catatanMusrenbang": "Sarana/Kegiatan Olahraga Minim (Skor: 2/5) • Pengelolaan Sampah & Sanitasi Terbatas (58.9%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 4,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 9,
          "fasilitasOlahraga": 4
        }
      },
      "ekonomi": {
        "skor": 118,
        "persen": 73.8,
        "maks": 160
      },
      "lingkungan": {
        "skor": 55,
        "persen": 61.1,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 72,
        "persen": 90.0,
        "maks": 80
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
    "catatanMusrenbang": "Pengelolaan Sampah & Sanitasi Terbatas (61.1%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
  },
  {
    "id": "desa-guntur-macan-gunungsari",
    "nama": "Guntur Macan",
    "tipe": "Desa",
    "kecamatan": "Gunungsari",
    "kodeWilayah": "5201092011",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Sangat Tinggi",
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
        "sub": {
          "olahraga": 1,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 100,
        "persen": 62.5,
        "maks": 160
      },
      "lingkungan": {
        "skor": 56,
        "persen": 62.2,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 46,
        "persen": 92.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 56,
        "persen": 70.0,
        "maks": 80
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
    "catatanMusrenbang": "Sarana/Kegiatan Olahraga Minim (Skor: 1/5) • Pengelolaan Sampah & Sanitasi Terbatas (62.2%) • Layanan Dasar Perlu Intervensi (58.2%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
  },
  {
    "id": "desa-mekar-sari-gunungsari",
    "nama": "Mekar Sari",
    "tipe": "Desa",
    "kecamatan": "Gunungsari",
    "kodeWilayah": "5201092012",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Sangat Tinggi",
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
        "sub": {
          "olahraga": 2,
          "konflik": 5,
          "satkamling": 10,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 1
        }
      },
      "ekonomi": {
        "skor": 94,
        "persen": 58.8,
        "maks": 160
      },
      "lingkungan": {
        "skor": 53,
        "persen": 58.9,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 31,
        "persen": 62.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 61,
        "persen": 76.2,
        "maks": 80
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
    "catatanMusrenbang": "Mitigasi Konflik Rendah (Skor: 5/25) • Sarana/Kegiatan Olahraga Minim (Skor: 2/5) • Aksesibilitas Jalan Butuh Peningkatan (62.0%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sosial, Keagamaan & Kelembagaan Desa"
    ]
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
        "sub": {
          "olahraga": 2,
          "konflik": 13,
          "satkamling": 10,
          "tamanBacaan": 10,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 125,
        "persen": 78.1,
        "maks": 160
      },
      "lingkungan": {
        "skor": 58,
        "persen": 64.4,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 66,
        "persen": 82.5,
        "maks": 80
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
    "catatanMusrenbang": "Mitigasi Konflik Rendah (Skor: 13/25) • Sarana/Kegiatan Olahraga Minim (Skor: 2/5) • Pengelolaan Sampah & Sanitasi Terbatas (64.4%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sosial, Keagamaan & Kelembagaan Desa"
    ]
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
        "sub": {
          "olahraga": 2,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 1
        }
      },
      "ekonomi": {
        "skor": 101,
        "persen": 63.1,
        "maks": 160
      },
      "lingkungan": {
        "skor": 67,
        "persen": 74.4,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 44,
        "persen": 88.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 64,
        "persen": 80.0,
        "maks": 80
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
    "catatanMusrenbang": "Sarana/Kegiatan Olahraga Minim (Skor: 2/5) • Layanan Dasar Perlu Intervensi (65.9%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
  },
  {
    "id": "desa-jeringo-gunungsari",
    "nama": "Jeringo",
    "tipe": "Desa",
    "kecamatan": "Gunungsari",
    "kodeWilayah": "5201092015",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Sangat Tinggi",
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
        "sub": {
          "olahraga": 2,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 83,
        "persen": 51.9,
        "maks": 160
      },
      "lingkungan": {
        "skor": 38,
        "persen": 42.2,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 40,
        "persen": 80.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 68,
        "persen": 85.0,
        "maks": 80
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
    "catatanMusrenbang": "Sarana/Kegiatan Olahraga Minim (Skor: 2/5) • Aksesibilitas Jalan Butuh Peningkatan (80.0%) • Pengelolaan Sampah & Sanitasi Terbatas (42.2%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 2,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 1
        }
      },
      "ekonomi": {
        "skor": 127,
        "persen": 79.4,
        "maks": 160
      },
      "lingkungan": {
        "skor": 58,
        "persen": 64.4,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 48,
        "persen": 96.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 71,
        "persen": 88.8,
        "maks": 80
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
    "catatanMusrenbang": "Sarana/Kegiatan Olahraga Minim (Skor: 2/5) • Pengelolaan Sampah & Sanitasi Terbatas (64.4%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sosial, Keagamaan & Kelembagaan Desa"
    ]
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
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 9,
          "fasilitasOlahraga": 4
        }
      },
      "ekonomi": {
        "skor": 147,
        "persen": 91.9,
        "maks": 160
      },
      "lingkungan": {
        "skor": 86,
        "persen": 95.6,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 67,
        "persen": 83.8,
        "maks": 80
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
    "catatanMusrenbang": "Kondisi keseluruhan desa telah berstatus Mandiri/Maju, prioritas pemeliharaan.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 10,
          "fasilitasOlahraga": 4
        }
      },
      "ekonomi": {
        "skor": 151,
        "persen": 94.4,
        "maks": 160
      },
      "lingkungan": {
        "skor": 82,
        "persen": 91.1,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 69,
        "persen": 86.2,
        "maks": 80
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
    "catatanMusrenbang": "Kondisi keseluruhan desa telah berstatus Mandiri/Maju, prioritas pemeliharaan.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 9,
          "tamanBacaan": 7,
          "fasilitasOlahraga": 3
        }
      },
      "ekonomi": {
        "skor": 143,
        "persen": 89.4,
        "maks": 160
      },
      "lingkungan": {
        "skor": 60,
        "persen": 66.7,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 46,
        "persen": 92.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 75,
        "persen": 93.8,
        "maks": 80
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
    "catatanMusrenbang": "Kondisi keseluruhan desa telah berstatus Mandiri/Maju, prioritas pemeliharaan.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sosial, Keagamaan & Kelembagaan Desa"
    ]
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
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 9,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 113,
        "persen": 70.6,
        "maks": 160
      },
      "lingkungan": {
        "skor": 77,
        "persen": 85.6,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 45,
        "persen": 90.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 71,
        "persen": 88.8,
        "maks": 80
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
    "catatanMusrenbang": "Kondisi keseluruhan desa telah berstatus Mandiri/Maju, prioritas pemeliharaan.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 2,
          "konflik": 25,
          "satkamling": 9,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 1
        }
      },
      "ekonomi": {
        "skor": 114,
        "persen": 71.2,
        "maks": 160
      },
      "lingkungan": {
        "skor": 78,
        "persen": 86.7,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 46,
        "persen": 92.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 68,
        "persen": 85.0,
        "maks": 80
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
    "catatanMusrenbang": "Sarana/Kegiatan Olahraga Minim (Skor: 2/5)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sosial, Keagamaan & Kelembagaan Desa"
    ]
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
        "sub": {
          "olahraga": 4,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 10,
          "fasilitasOlahraga": 4
        }
      },
      "ekonomi": {
        "skor": 136,
        "persen": 85.0,
        "maks": 160
      },
      "lingkungan": {
        "skor": 78,
        "persen": 86.7,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 77,
        "persen": 96.2,
        "maks": 80
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
    "catatanMusrenbang": "Kondisi keseluruhan desa telah berstatus Mandiri/Maju, prioritas pemeliharaan.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 4,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 10,
          "fasilitasOlahraga": 4
        }
      },
      "ekonomi": {
        "skor": 125,
        "persen": 78.1,
        "maks": 160
      },
      "lingkungan": {
        "skor": 82,
        "persen": 91.1,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 68,
        "persen": 85.0,
        "maks": 80
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
    "catatanMusrenbang": "Kondisi keseluruhan desa telah berstatus Mandiri/Maju, prioritas pemeliharaan.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 4,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 3
        }
      },
      "ekonomi": {
        "skor": 132,
        "persen": 82.5,
        "maks": 160
      },
      "lingkungan": {
        "skor": 80,
        "persen": 88.9,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 42,
        "persen": 84.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 63,
        "persen": 78.8,
        "maks": 80
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
    "catatanMusrenbang": "Kondisi keseluruhan desa telah berstatus Mandiri/Maju, prioritas pemeliharaan.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sosial, Keagamaan & Kelembagaan Desa"
    ]
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
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 3
        }
      },
      "ekonomi": {
        "skor": 100,
        "persen": 62.5,
        "maks": 160
      },
      "lingkungan": {
        "skor": 83,
        "persen": 92.2,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 67,
        "persen": 83.8,
        "maks": 80
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
    "catatanMusrenbang": "Kondisi keseluruhan desa telah berstatus Mandiri/Maju, prioritas pemeliharaan.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 10,
          "fasilitasOlahraga": 3
        }
      },
      "ekonomi": {
        "skor": 142,
        "persen": 88.8,
        "maks": 160
      },
      "lingkungan": {
        "skor": 76,
        "persen": 84.4,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 48,
        "persen": 96.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 60,
        "persen": 75.0,
        "maks": 80
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
    "catatanMusrenbang": "Kondisi keseluruhan desa telah berstatus Mandiri/Maju, prioritas pemeliharaan.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 2,
          "konflik": 25,
          "satkamling": 8,
          "tamanBacaan": 7,
          "fasilitasOlahraga": 1
        }
      },
      "ekonomi": {
        "skor": 122,
        "persen": 76.2,
        "maks": 160
      },
      "lingkungan": {
        "skor": 66,
        "persen": 73.3,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 41,
        "persen": 82.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 64,
        "persen": 80.0,
        "maks": 80
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
    "catatanMusrenbang": "Sarana/Kegiatan Olahraga Minim (Skor: 2/5) • Layanan Dasar Perlu Intervensi (67.1%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sosial, Keagamaan & Kelembagaan Desa"
    ]
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
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 10,
          "fasilitasOlahraga": 1
        }
      },
      "ekonomi": {
        "skor": 130,
        "persen": 81.2,
        "maks": 160
      },
      "lingkungan": {
        "skor": 58,
        "persen": 64.4,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 47,
        "persen": 94.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 69,
        "persen": 86.2,
        "maks": 80
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
    "catatanMusrenbang": "Pengelolaan Sampah & Sanitasi Terbatas (64.4%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 4,
          "konflik": 23,
          "satkamling": 10,
          "tamanBacaan": 9,
          "fasilitasOlahraga": 3
        }
      },
      "ekonomi": {
        "skor": 139,
        "persen": 86.9,
        "maks": 160
      },
      "lingkungan": {
        "skor": 64,
        "persen": 71.1,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 60,
        "persen": 75.0,
        "maks": 80
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
    "catatanMusrenbang": "Kondisi keseluruhan desa telah berstatus Mandiri/Maju, prioritas pemeliharaan.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 10,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 142,
        "persen": 88.8,
        "maks": 160
      },
      "lingkungan": {
        "skor": 84,
        "persen": 93.3,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 48,
        "persen": 96.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 70,
        "persen": 87.5,
        "maks": 80
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
    "catatanMusrenbang": "Kondisi keseluruhan desa telah berstatus Mandiri/Maju, prioritas pemeliharaan.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 9,
          "fasilitasOlahraga": 3
        }
      },
      "ekonomi": {
        "skor": 138,
        "persen": 86.2,
        "maks": 160
      },
      "lingkungan": {
        "skor": 76,
        "persen": 84.4,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 74,
        "persen": 92.5,
        "maks": 80
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
    "catatanMusrenbang": "Kondisi keseluruhan desa telah berstatus Mandiri/Maju, prioritas pemeliharaan.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 2,
          "konflik": 25,
          "satkamling": 2,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 3
        }
      },
      "ekonomi": {
        "skor": 126,
        "persen": 78.8,
        "maks": 160
      },
      "lingkungan": {
        "skor": 49,
        "persen": 54.4,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 40,
        "persen": 80.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 56,
        "persen": 70.0,
        "maks": 80
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
    "catatanMusrenbang": "Sarana/Kegiatan Olahraga Minim (Skor: 2/5) • Satkamling / Pos Ronda Pasif • Aksesibilitas Jalan Butuh Peningkatan (80.0%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
  },
  {
    "id": "desa-jembatan-kembar-lembar",
    "nama": "Jembatan Kembar",
    "tipe": "Desa",
    "kecamatan": "Lembar",
    "kodeWilayah": "5201132002",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Sangat Tinggi",
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
        "sub": {
          "olahraga": 3,
          "konflik": 17,
          "satkamling": 8,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 1
        }
      },
      "ekonomi": {
        "skor": 101,
        "persen": 63.1,
        "maks": 160
      },
      "lingkungan": {
        "skor": 46,
        "persen": 51.1,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 47,
        "persen": 58.8,
        "maks": 80
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
    "catatanMusrenbang": "Pengelolaan Sampah & Sanitasi Terbatas (51.1%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
  },
  {
    "id": "desa-mareje-lembar",
    "nama": "Mareje",
    "tipe": "Desa",
    "kecamatan": "Lembar",
    "kodeWilayah": "5201132003",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Sangat Tinggi",
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
        "sub": {
          "olahraga": 2,
          "konflik": 5,
          "satkamling": 2,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 1
        }
      },
      "ekonomi": {
        "skor": 80,
        "persen": 50.0,
        "maks": 160
      },
      "lingkungan": {
        "skor": 50,
        "persen": 55.6,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 46,
        "persen": 92.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 59,
        "persen": 73.8,
        "maks": 80
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
    "catatanMusrenbang": "Mitigasi Konflik Rendah (Skor: 5/25) • Sarana/Kegiatan Olahraga Minim (Skor: 2/5) • Satkamling / Pos Ronda Pasif",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sosial, Keagamaan & Kelembagaan Desa"
    ]
  },
  {
    "id": "desa-sekotong-timur-lembar",
    "nama": "Sekotong Timur",
    "tipe": "Desa",
    "kecamatan": "Lembar",
    "kodeWilayah": "5201132004",
    "jumlahDusun": 5,
    "statusPrioritas": "Prioritas Sangat Tinggi",
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
        "sub": {
          "olahraga": 1,
          "konflik": 5,
          "satkamling": 2,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 1
        }
      },
      "ekonomi": {
        "skor": 78,
        "persen": 48.8,
        "maks": 160
      },
      "lingkungan": {
        "skor": 46,
        "persen": 51.1,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 41,
        "persen": 82.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 65,
        "persen": 81.2,
        "maks": 80
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
    "catatanMusrenbang": "Mitigasi Konflik Rendah (Skor: 5/25) • Sarana/Kegiatan Olahraga Minim (Skor: 1/5) • Satkamling / Pos Ronda Pasif",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sosial, Keagamaan & Kelembagaan Desa"
    ]
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
        "sub": {
          "olahraga": 2,
          "konflik": 25,
          "satkamling": 7,
          "tamanBacaan": 7,
          "fasilitasOlahraga": 1
        }
      },
      "ekonomi": {
        "skor": 127,
        "persen": 79.4,
        "maks": 160
      },
      "lingkungan": {
        "skor": 53,
        "persen": 58.9,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 48,
        "persen": 96.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 59,
        "persen": 73.8,
        "maks": 80
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
    "catatanMusrenbang": "Sarana/Kegiatan Olahraga Minim (Skor: 2/5) • Pengelolaan Sampah & Sanitasi Terbatas (58.9%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 4,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 125,
        "persen": 78.1,
        "maks": 160
      },
      "lingkungan": {
        "skor": 50,
        "persen": 55.6,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 54,
        "persen": 67.5,
        "maks": 80
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
    "catatanMusrenbang": "Pengelolaan Sampah & Sanitasi Terbatas (55.6%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 1,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 10,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 138,
        "persen": 86.2,
        "maks": 160
      },
      "lingkungan": {
        "skor": 77,
        "persen": 85.6,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 48,
        "persen": 96.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 71,
        "persen": 88.8,
        "maks": 80
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
    "catatanMusrenbang": "Sarana/Kegiatan Olahraga Minim (Skor: 1/5)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 1,
          "konflik": 5,
          "satkamling": 10,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 1
        }
      },
      "ekonomi": {
        "skor": 140,
        "persen": 87.5,
        "maks": 160
      },
      "lingkungan": {
        "skor": 66,
        "persen": 73.3,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 48,
        "persen": 96.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 72,
        "persen": 90.0,
        "maks": 80
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
    "catatanMusrenbang": "Mitigasi Konflik Rendah (Skor: 5/25) • Sarana/Kegiatan Olahraga Minim (Skor: 1/5)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sosial, Keagamaan & Kelembagaan Desa"
    ]
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
        "sub": {
          "olahraga": 2,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 120,
        "persen": 75.0,
        "maks": 160
      },
      "lingkungan": {
        "skor": 58,
        "persen": 64.4,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 65,
        "persen": 81.2,
        "maks": 80
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
    "catatanMusrenbang": "Sarana/Kegiatan Olahraga Minim (Skor: 2/5) • Pengelolaan Sampah & Sanitasi Terbatas (64.4%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sosial, Keagamaan & Kelembagaan Desa"
    ]
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
        "sub": {
          "olahraga": 1,
          "konflik": 25,
          "satkamling": 2,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 115,
        "persen": 71.9,
        "maks": 160
      },
      "lingkungan": {
        "skor": 46,
        "persen": 51.1,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 55,
        "persen": 68.8,
        "maks": 80
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
    "catatanMusrenbang": "Sarana/Kegiatan Olahraga Minim (Skor: 1/5) • Satkamling / Pos Ronda Pasif • Pengelolaan Sampah & Sanitasi Terbatas (51.1%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sosial, Keagamaan & Kelembagaan Desa"
    ]
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
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 3
        }
      },
      "ekonomi": {
        "skor": 125,
        "persen": 78.1,
        "maks": 160
      },
      "lingkungan": {
        "skor": 63,
        "persen": 70.0,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 45,
        "persen": 90.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 68,
        "persen": 85.0,
        "maks": 80
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
    "catatanMusrenbang": "Kondisi keseluruhan desa telah berstatus Mandiri/Maju, prioritas pemeliharaan.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 4,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 3
        }
      },
      "ekonomi": {
        "skor": 143,
        "persen": 89.4,
        "maks": 160
      },
      "lingkungan": {
        "skor": 76,
        "persen": 84.4,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 48,
        "persen": 96.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 70,
        "persen": 87.5,
        "maks": 80
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
    "catatanMusrenbang": "Kondisi keseluruhan desa telah berstatus Mandiri/Maju, prioritas pemeliharaan.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 3,
          "konflik": 21,
          "satkamling": 7,
          "tamanBacaan": 10,
          "fasilitasOlahraga": 3
        }
      },
      "ekonomi": {
        "skor": 142,
        "persen": 88.8,
        "maks": 160
      },
      "lingkungan": {
        "skor": 74,
        "persen": 82.2,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 48,
        "persen": 96.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 63,
        "persen": 78.8,
        "maks": 80
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
    "catatanMusrenbang": "Kondisi keseluruhan desa telah berstatus Mandiri/Maju, prioritas pemeliharaan.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 115,
        "persen": 71.9,
        "maks": 160
      },
      "lingkungan": {
        "skor": 57,
        "persen": 63.3,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 44,
        "persen": 88.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 63,
        "persen": 78.8,
        "maks": 80
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
    "catatanMusrenbang": "Pengelolaan Sampah & Sanitasi Terbatas (63.3%) • Layanan Dasar Perlu Intervensi (73.5%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 8,
          "tamanBacaan": 9,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 136,
        "persen": 85.0,
        "maks": 160
      },
      "lingkungan": {
        "skor": 62,
        "persen": 68.9,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 58,
        "persen": 72.5,
        "maks": 80
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
    "catatanMusrenbang": "Kondisi keseluruhan desa telah berstatus Mandiri/Maju, prioritas pemeliharaan.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 2,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 129,
        "persen": 80.6,
        "maks": 160
      },
      "lingkungan": {
        "skor": 78,
        "persen": 86.7,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 47,
        "persen": 94.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 68,
        "persen": 85.0,
        "maks": 80
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
    "catatanMusrenbang": "Sarana/Kegiatan Olahraga Minim (Skor: 2/5)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sosial, Keagamaan & Kelembagaan Desa"
    ]
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
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 9,
          "tamanBacaan": 8,
          "fasilitasOlahraga": 3
        }
      },
      "ekonomi": {
        "skor": 135,
        "persen": 84.4,
        "maks": 160
      },
      "lingkungan": {
        "skor": 51,
        "persen": 56.7,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 42,
        "persen": 84.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 60,
        "persen": 75.0,
        "maks": 80
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
    "catatanMusrenbang": "Pengelolaan Sampah & Sanitasi Terbatas (56.7%) • Layanan Dasar Perlu Intervensi (74.7%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 1,
          "konflik": 25,
          "satkamling": 9,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 1
        }
      },
      "ekonomi": {
        "skor": 109,
        "persen": 68.1,
        "maks": 160
      },
      "lingkungan": {
        "skor": 62,
        "persen": 68.9,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 43,
        "persen": 86.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 71,
        "persen": 88.8,
        "maks": 80
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
    "catatanMusrenbang": "Sarana/Kegiatan Olahraga Minim (Skor: 1/5) • Layanan Dasar Perlu Intervensi (71.8%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 1
        }
      },
      "ekonomi": {
        "skor": 124,
        "persen": 77.5,
        "maks": 160
      },
      "lingkungan": {
        "skor": 70,
        "persen": 77.8,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 43,
        "persen": 86.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 58,
        "persen": 72.5,
        "maks": 80
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
    "catatanMusrenbang": "Kondisi keseluruhan desa telah berstatus Mandiri/Maju, prioritas pemeliharaan.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 4,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 3
        }
      },
      "ekonomi": {
        "skor": 157,
        "persen": 98.1,
        "maks": 160
      },
      "lingkungan": {
        "skor": 82,
        "persen": 91.1,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 76,
        "persen": 95.0,
        "maks": 80
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
    "catatanMusrenbang": "Kondisi keseluruhan desa telah berstatus Mandiri/Maju, prioritas pemeliharaan.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sosial, Keagamaan & Kelembagaan Desa"
    ]
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
        "sub": {
          "olahraga": 4,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 9,
          "fasilitasOlahraga": 3
        }
      },
      "ekonomi": {
        "skor": 148,
        "persen": 92.5,
        "maks": 160
      },
      "lingkungan": {
        "skor": 82,
        "persen": 91.1,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 65,
        "persen": 81.2,
        "maks": 80
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
    "catatanMusrenbang": "Kondisi keseluruhan desa telah berstatus Mandiri/Maju, prioritas pemeliharaan.",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 2,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 9,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 149,
        "persen": 93.1,
        "maks": 160
      },
      "lingkungan": {
        "skor": 72,
        "persen": 80.0,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 68,
        "persen": 85.0,
        "maks": 80
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
    "catatanMusrenbang": "Sarana/Kegiatan Olahraga Minim (Skor: 2/5)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sosial, Keagamaan & Kelembagaan Desa"
    ]
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
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 115,
        "persen": 71.9,
        "maks": 160
      },
      "lingkungan": {
        "skor": 43,
        "persen": 47.8,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 47,
        "persen": 94.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 63,
        "persen": 78.8,
        "maks": 80
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
    "catatanMusrenbang": "Pengelolaan Sampah & Sanitasi Terbatas (47.8%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        "sub": {
          "olahraga": 2,
          "konflik": 23,
          "satkamling": 7,
          "tamanBacaan": 2,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 126,
        "persen": 78.8,
        "maks": 160
      },
      "lingkungan": {
        "skor": 47,
        "persen": 52.2,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 40,
        "persen": 80.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 65,
        "persen": 81.2,
        "maks": 80
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
    "catatanMusrenbang": "Sarana/Kegiatan Olahraga Minim (Skor: 2/5) • Aksesibilitas Jalan Butuh Peningkatan (80.0%) • Pengelolaan Sampah & Sanitasi Terbatas (52.2%)",
    "rekomendasiKategori": [
      "Pertanian, Peternakan & Pangan",
      "Sosial, Keagamaan & Kelembagaan Desa"
    ]
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
        "sub": {
          "olahraga": 3,
          "konflik": 25,
          "satkamling": 10,
          "tamanBacaan": 9,
          "fasilitasOlahraga": 2
        }
      },
      "ekonomi": {
        "skor": 146,
        "persen": 91.2,
        "maks": 160
      },
      "lingkungan": {
        "skor": 54,
        "persen": 60.0,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 41,
        "persen": 82.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 71,
        "persen": 88.8,
        "maks": 80
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
    "catatanMusrenbang": "Pengelolaan Sampah & Sanitasi Terbatas (60.0%)",
    "rekomendasiKategori": [
      "Jalan, Jembatan & Infrastruktur",
      "Sampah, Lingkungan & Kebencanaan"
    ]
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
        }
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
        }
      },
      "ekonomi": {
        "skor": 142,
        "persen": 88.8,
        "maks": 160
      },
      "lingkungan": {
        "skor": 78,
        "persen": 86.7,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 50,
        "persen": 100.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 59,
        "persen": 73.8,
        "maks": 80
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
    ]
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
        }
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
        }
      },
      "ekonomi": {
        "skor": 138,
        "persen": 86.2,
        "maks": 160
      },
      "lingkungan": {
        "skor": 74,
        "persen": 82.2,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 50,
        "persen": 100.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 61,
        "persen": 76.2,
        "maks": 80
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
    ]
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
        }
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
        }
      },
      "ekonomi": {
        "skor": 140,
        "persen": 87.5,
        "maks": 160
      },
      "lingkungan": {
        "skor": 76,
        "persen": 84.4,
        "maks": 90
      },
      "aksesibilitas": {
        "skor": 49,
        "persen": 98.0,
        "maks": 50
      },
      "tataKelola": {
        "skor": 59,
        "persen": 73.8,
        "maks": 80
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
    ]
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
