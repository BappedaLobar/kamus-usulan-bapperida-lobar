/**
 * Problem-to-Program Engine (Kamus Usulan RKPD × Rumusan Indeks Desa × Sinergi PATJU 360)
 * Bapperida Kabupaten Lombok Barat
 * 
 * Memetakan setiap butir indikator masalah riil desa (Sheet RUMUSAN & PATJU 360)
 * langsung ke OPD pengampu yang bertanggung jawab, Bidang Urusan, PIC Bidang Bapperida,
 * serta kata kunci program solusi di Kamus Usulan.
 */

import { getDesaProblemCounts } from "../data/desaLobarData.js";

/**
 * Memetakan satu butir kalimat masalah desa ke solusi OPD & Kamus Usulan
 * @param {string} problemText Kalimat indikator masalah (misal: "Ketersediaan Pengolahan Sampah di desa")
 * @returns {Object} Metadata solusi presisi
 */
export function mapProblemToSolution(problemText) {
  const p = String(problemText || "").trim();
  const pl = p.toLowerCase();

  // 1. Sampah / Kebersihan / TPS / Limbah
  if (pl.includes("sampah") || pl.includes("tps") || pl.includes("kebersihan") || pl.includes("limbah")) {
    return {
      problemTitle: p,
      opd: "Dinas Lingkungan Hidup",
      bidangBapperida: "Bidang PSDAIK",
      urusan: "Urusan Lingkungan Hidup",
      keyword: "sampah",
      dimensi: "Lingkungan",
      icon: "Trash2",
      badgeColor: "#15803d",
      rekomendasi: "Pembangunan TPS3R / Tempat Pengolahan Sampah Terpadu & Pengadaan Sarana Angkut Sampah Desa"
    };
  }

  // 2. Kesehatan / Dokter / Bidan / Nakes / Posyandu / Stunting / Gizi / Puskesmas / Pustu
  if (
    pl.includes("dokter") ||
    pl.includes("bidan") ||
    pl.includes("tenaga kesehatan") ||
    pl.includes("nakes") ||
    pl.includes("kesehatan") ||
    pl.includes("posyandu") ||
    pl.includes("stunting") ||
    pl.includes("gizi") ||
    pl.includes("puskesmas") ||
    pl.includes("pustu")
  ) {
    const isGizi = pl.includes("stunting") || pl.includes("gizi") || pl.includes("posyandu");
    return {
      problemTitle: p,
      opd: "Dinas Kesehatan, Pengendalian Penduduk dan KB",
      bidangBapperida: "Bidang P2M",
      urusan: "Urusan Kesehatan",
      keyword: isGizi ? "gizi" : "kesehatan",
      dimensi: "Layanan Dasar",
      icon: "HeartPulse",
      badgeColor: "#e11d48",
      rekomendasi: "Peningkatan Layanan Kesehatan Dasar, Fasilitasi Kunjungan Nakes/Dokter & Sarpras Posyandu Terintegrasi"
    };
  }

  // 3. Tangki Septik / Jamban / Sanitasi / MCK
  if (pl.includes("septik") || pl.includes("jamban") || pl.includes("sanitasi") || pl.includes("mck")) {
    return {
      problemTitle: p,
      opd: "Dinas Pekerjaan Umum, Penataan Ruang, Perumahan dan Kawasan Permukiman",
      bidangBapperida: "Bidang PSDAIK",
      urusan: "Urusan Pekerjaan Umum Dan Penataan Ruang",
      keyword: "sanitasi",
      dimensi: "Layanan Dasar",
      icon: "Droplets",
      badgeColor: "#0284c7",
      rekomendasi: "Pembangunan Tangki Septik Komunal / Individual Biotank dan Sarana Sanitasi Sehat Keluarga"
    };
  }

  // 4. Air Minum / Air Bersih / SPAM
  if (pl.includes("air minum") || pl.includes("air bersih") || pl.includes("spam") || pl.includes("perpipaan")) {
    return {
      problemTitle: p,
      opd: "Dinas Pekerjaan Umum, Penataan Ruang, Perumahan dan Kawasan Permukiman",
      bidangBapperida: "Bidang PSDAIK",
      urusan: "Urusan Pekerjaan Umum Dan Penataan Ruang",
      keyword: "air",
      dimensi: "Layanan Dasar",
      icon: "Droplet",
      badgeColor: "#0284c7",
      rekomendasi: "Penyediaan dan Perluasan Jaringan Sistem Penyediaan Air Minum (SPAM) Pedesaan"
    };
  }

  // 5. RTLH / Rumah / Permukiman Layak Huni
  if (pl.includes("rtlh") || pl.includes("rumah") || pl.includes("permukiman")) {
    return {
      problemTitle: p,
      opd: "Dinas Pekerjaan Umum, Penataan Ruang, Perumahan dan Kawasan Permukiman",
      bidangBapperida: "Bidang PSDAIK",
      urusan: "Urusan Perumahan Dan Kawasan Permukiman",
      keyword: "rumah",
      dimensi: "Layanan Dasar",
      icon: "Home",
      badgeColor: "#0284c7",
      rekomendasi: "Bantuan Pemugaran Rumah Tidak Layak Huni (RTLH Swadaya / BSPS DAK & APBD)"
    };
  }

  // 6. Jalan / Jembatan / Drainase / Talud
  if (pl.includes("jalan") || pl.includes("jembatan") || pl.includes("drainase") || pl.includes("talud")) {
    return {
      problemTitle: p,
      opd: "Dinas Pekerjaan Umum, Penataan Ruang, Perumahan dan Kawasan Permukiman",
      bidangBapperida: "Bidang PSDAIK",
      urusan: "Urusan Pekerjaan Umum Dan Penataan Ruang",
      keyword: "jalan",
      dimensi: "Aksesibilitas",
      icon: "Route",
      badgeColor: "#0284c7",
      rekomendasi: "Pembangunan, Peningkatan dan Pemeliharaan Berkala Jalan Strategis Penghubung Desa & Jembatan"
    };
  }

  // 7. Transportasi / Trayek / Penerangan Jalan (LPJU)
  if (pl.includes("transportasi") || pl.includes("trayek") || pl.includes("penerangan jalan") || pl.includes("pju") || pl.includes("rambu")) {
    return {
      problemTitle: p,
      opd: "Dinas Perhubungan",
      bidangBapperida: "Bidang PSDAIK",
      urusan: "Urusan Perhubungan",
      keyword: pl.includes("penerangan") ? "lampu" : "transportasi",
      dimensi: "Aksesibilitas",
      icon: "Bus",
      badgeColor: "#0284c7",
      rekomendasi: "Pengadaan Lampu Penerangan Jalan Umum (LPJU) & Penyediaan Trayek Angkutan Perintis Pedesaan"
    };
  }

  // 8. Perpustakaan / Taman Bacaan / Pojok Baca
  if (pl.includes("perpustakaan") || pl.includes("taman bacaan") || pl.includes("buku") || pl.includes("literasi")) {
    return {
      problemTitle: p,
      opd: "Dinas Kearsipan dan Perpustakaan",
      bidangBapperida: "Bidang P2M",
      urusan: "Urusan Perpustakaan",
      keyword: "perpustakaan",
      dimensi: "Sosial",
      icon: "BookOpen",
      badgeColor: "#9333ea",
      rekomendasi: "Pengembangan Perpustakaan Desa / Pojok Baca Digital dan Pengadaan Bahan Bacaan Berkualitas"
    };
  }

  // 9. Pasar Desa / Distribusi / Perdagangan
  if (pl.includes("pasar") || pl.includes("pasar desa") || pl.includes("perdagangan") || pl.includes("kios")) {
    return {
      problemTitle: p,
      opd: "Dinas Perdagangan",
      bidangBapperida: "Bidang PSDAIK",
      urusan: "Urusan Perdagangan",
      keyword: "pasar",
      dimensi: "Ekonomi",
      icon: "ShoppingBag",
      badgeColor: "#ea580c",
      rekomendasi: "Pembangunan / Revitalisasi Sarana Distribusi Pasar Tradisional Desa & Fasilitasi Akses Pemasaran"
    };
  }

  // 10. UMKM / Koperasi / KUD / Modal Usaha / KKP-E / KUK / Merek Dagang / Wirausaha
  if (
    pl.includes("umkm") ||
    pl.includes("koperasi") ||
    pl.includes("kud") ||
    pl.includes("kredit") ||
    pl.includes("kkp-e") ||
    pl.includes("kuk") ||
    pl.includes("merek dagang") ||
    pl.includes("wirausaha") ||
    pl.includes("usaha mikro")
  ) {
    return {
      problemTitle: p,
      opd: "Dinas Perindustrian, Koperasi, UKM dan Tenaga Kerja",
      bidangBapperida: "Bidang PSDAIK",
      urusan: "Urusan Koperasi, Usaha Kecil, Dan Menengah",
      keyword: "usaha",
      dimensi: "Ekonomi",
      icon: "Briefcase",
      badgeColor: "#ea580c",
      rekomendasi: "Bantuan Sarana Peralatan Usaha Mikro, Pendampingan Legalitas/Merek & Penguatan Koperasi Desa"
    };
  }

  // 11. Tenaga Kerja / Pelatihan / Kursus / Balai Keterampilan
  if (
    pl.includes("angkatan kerja") ||
    pl.includes("keterampilan") ||
    pl.includes("kursus") ||
    pl.includes("pelatihan") ||
    pl.includes("blk") ||
    pl.includes("tenaga kerja")
  ) {
    return {
      problemTitle: p,
      opd: "Dinas Perindustrian, Koperasi, UKM dan Tenaga Kerja",
      bidangBapperida: "Bidang PSDAIK",
      urusan: "Urusan Tenaga Kerja",
      keyword: "pelatihan",
      dimensi: "Ekonomi",
      icon: "GraduationCap",
      badgeColor: "#ea580c",
      rekomendasi: "Penyelenggaraan Pelatihan Vokasi Kerja Berbasis Kompetensi & Bantuan Peralatan Kerja Siap Pakai"
    };
  }

  // 12. Pertanian / Peternakan / Pangan / Irigasi / Pupuk / Benih / Alsintan / Ternak
  if (
    pl.includes("tani") ||
    pl.includes("pertanian") ||
    pl.includes("pangan") ||
    pl.includes("lumbung") ||
    pl.includes("ternak") ||
    pl.includes("peternakan") ||
    pl.includes("pupuk") ||
    pl.includes("benih") ||
    pl.includes("alsintan") ||
    pl.includes("irigasi")
  ) {
    return {
      problemTitle: p,
      opd: "Dinas Pertanian",
      bidangBapperida: "Bidang PSDAIK",
      urusan: "Urusan Pertanian",
      keyword: "pertanian",
      dimensi: "Ekonomi",
      icon: "Sprout",
      badgeColor: "#16a34a",
      rekomendasi: "Penyediaan Benih/Bibit Unggul, Bantuan Alat Mesin Pertanian (Alsintan) & Penguatan Ketahanan Pangan"
    };
  }

  // 13. Kelautan / Perikanan / Nelayan / Pesisir / Tambak / Ikan
  if (
    pl.includes("ikan") ||
    pl.includes("nelayan") ||
    pl.includes("perikanan") ||
    pl.includes("pesisir") ||
    pl.includes("tambak") ||
    pl.includes("garam")
  ) {
    return {
      problemTitle: p,
      opd: "Dinas Kelautan, Perikanan dan Ketahanan Pangan",
      bidangBapperida: "Bidang PSDAIK",
      urusan: "Urusan Kelautan Dan Perikanan",
      keyword: "perikanan",
      dimensi: "Ekonomi",
      icon: "Fish",
      badgeColor: "#0284c7",
      rekomendasi: "Bantuan Sarana Mesin Tempel, Coolbox, Alat Tangkap Ramah Lingkungan & Benih Budidaya Ikan"
    };
  }

  // 14. Pariwisata / Penginapan / Wisata / Olahraga / Pemuda / Budaya
  if (
    pl.includes("wisata") ||
    pl.includes("penginapan") ||
    pl.includes("atraksi alam") ||
    pl.includes("olahraga") ||
    pl.includes("pemuda") ||
    pl.includes("budaya") ||
    pl.includes("kesenian")
  ) {
    const isOlahraga = pl.includes("olahraga") || pl.includes("pemuda");
    return {
      problemTitle: p,
      opd: "Dinas Pariwisata, Ekonomi Kreatif, Pemuda dan Olahraga",
      bidangBapperida: "Bidang PSDAIK",
      urusan: isOlahraga ? "Urusan Pemuda Dan Olahraga" : "Urusan Pariwisata",
      keyword: isOlahraga ? "olahraga" : "wisata",
      dimensi: "Sosial",
      icon: isOlahraga ? "Trophy" : "Palmtree",
      badgeColor: "#d97706",
      rekomendasi: isOlahraga
        ? "Pembangunan dan Pemeliharaan Sarana Lapangan / Fasilitas Olahraga Pemuda Desa"
        : "Pengembangan Fasilitas Destinasi Desa Wisata, Promosi Wisata & Sarana Penunjang Homestay"
    };
  }

  // 15. Bencana / Kebencanaan / Mitigasi / Tanggap Darurat / Peringatan Dini
  if (
    pl.includes("bencana") ||
    pl.includes("mitigasi") ||
    pl.includes("tanggap darurat") ||
    pl.includes("kebencanaan") ||
    pl.includes("peringatan dini")
  ) {
    return {
      problemTitle: p,
      opd: "Badan Penanggulangan Bencana Daerah",
      bidangBapperida: "Bidang PSDAIK",
      urusan: "Urusan Ketenteraman Dan Ketertiban Umum Serta Perlindungan Masyarakat",
      keyword: "bencana",
      dimensi: "Lingkungan",
      icon: "ShieldAlert",
      badgeColor: "#dc2626",
      rekomendasi: "Penyediaan Sarana Evakuasi, Sistem Peringatan Dini Bencana & Penguatan Desa Tangguh Bencana (Destana)"
    };
  }

  // 16. Kebakaran / Pemadam
  if (pl.includes("kebakaran") || pl.includes("pemadam")) {
    return {
      problemTitle: p,
      opd: "Dinas Pemadam Kebakaran dan Penyelamatan",
      bidangBapperida: "Bidang PSDAIK",
      urusan: "Urusan Ketenteraman Dan Ketertiban Umum Serta Perlindungan Masyarakat",
      keyword: "kebakaran",
      dimensi: "Lingkungan",
      icon: "Flame",
      badgeColor: "#dc2626",
      rekomendasi: "Pembentukan Pos Siaga Relawan Pemadam Kebakaran (Redkar) & Sarana Proteksi Kebakaran Desa"
    };
  }

  // 17. Lingkungan Hidup / Energi Terbarukan (EBT) / Konservasi / Pohon
  if (
    pl.includes("energi baru terbarukan") ||
    pl.includes("ebt") ||
    pl.includes("lingkungan") ||
    pl.includes("kearifan lokal") ||
    pl.includes("konservasi") ||
    pl.includes("pohon")
  ) {
    return {
      problemTitle: p,
      opd: "Dinas Lingkungan Hidup",
      bidangBapperida: "Bidang PSDAIK",
      urusan: "Urusan Lingkungan Hidup",
      keyword: "lingkungan",
      dimensi: "Lingkungan",
      icon: "TreePine",
      badgeColor: "#16a34a",
      rekomendasi: "Program Konservasi Sumber Daya Alam, Penghijauan / Reboisasi & Pemanfaatan Energi Terbarukan"
    };
  }

  // 18. Pendidikan / Sekolah / Ruang Kelas / Guru / PAUD / SD / SMP / Siswa / Beasiswa
  if (
    pl.includes("sekolah") ||
    pl.includes("pendidikan") ||
    pl.includes("paud") ||
    pl.includes("sd") ||
    pl.includes("smp") ||
    pl.includes("guru") ||
    pl.includes("ruang kelas") ||
    pl.includes("beasiswa")
  ) {
    return {
      problemTitle: p,
      opd: "Dinas Pendidikan dan Kebudayaan",
      bidangBapperida: "Bidang P2M",
      urusan: "Urusan Pendidikan",
      keyword: pl.includes("kelas") ? "kelas" : "sekolah",
      dimensi: "Layanan Dasar",
      icon: "GraduationCap",
      badgeColor: "#2563eb",
      rekomendasi: "Rehabilitasi Sarpras Ruang Kelas Sekolah Rusak & Peningkatan Mutu Layanan Pendidikan Dasar"
    };
  }

  // 19. Tata Kelola / Aset Desa / Kantor Desa / Kerjasama / BUMDes
  if (
    pl.includes("aset") ||
    pl.includes("tanah desa") ||
    pl.includes("kantor desa") ||
    pl.includes("kerjasama") ||
    pl.includes("tata kelola") ||
    pl.includes("aparatur desa") ||
    pl.includes("bumdes")
  ) {
    return {
      problemTitle: p,
      opd: "Dinas Pemberdayaan Masyarakat dan Desa",
      bidangBapperida: "Bidang P2M",
      urusan: "Urusan Pemberdayaan Masyarakat Dan Desa",
      keyword: "desa",
      dimensi: "Tata Kelola",
      icon: "Landmark",
      badgeColor: "#475569",
      rekomendasi: "Fasilitasi Pengelolaan Aset & Administrasi Desa, Peningkatan Kapasitas BUMDes & Kerjasama Antar-Desa"
    };
  }

  // 20. Ketenteraman / Keamanan / Satkamling / Ronda / Konflik
  if (
    pl.includes("keamanan") ||
    pl.includes("satkamling") ||
    pl.includes("ronda") ||
    pl.includes("konflik") ||
    pl.includes("ketertiban") ||
    pl.includes("linmas")
  ) {
    return {
      problemTitle: p,
      opd: "Satuan Polisi Pamong Praja",
      bidangBapperida: "Bidang P2M",
      urusan: "Urusan Ketenteraman Dan Ketertiban Umum Serta Perlindungan Masyarakat",
      keyword: "ketertiban",
      dimensi: "Sosial",
      icon: "Shield",
      badgeColor: "#64748b",
      rekomendasi: "Pemberdayaan Satuan Linmas Desa & Penguatan Sarana Keamanan Pos Ronda / Satkamling"
    };
  }

  // 21. Komunikasi / Internet / Sinyal / Digital / Statistik
  if (
    pl.includes("internet") ||
    pl.includes("komunikasi") ||
    pl.includes("sinyal") ||
    pl.includes("informasi") ||
    pl.includes("website") ||
    pl.includes("digital")
  ) {
    return {
      problemTitle: p,
      opd: "Dinas Komunikasi, Informatika dan Statistik",
      bidangBapperida: "Bidang RIDA",
      urusan: "Urusan Komunikasi Dan Informasi",
      keyword: "komunikasi",
      dimensi: "Aksesibilitas",
      icon: "Wifi",
      badgeColor: "#0ea5e9",
      rekomendasi: "Penyediaan Akses Internet Desa Ramah Anak & Digitalisasi Sistem Informasi Pemerintahan Desa"
    };
  }

  // Fallback Umum
  return {
    problemTitle: p,
    opd: "Dinas Pemberdayaan Masyarakat dan Desa",
    bidangBapperida: "Bidang P2M",
    urusan: "Urusan Pemberdayaan Masyarakat Dan Desa",
    keyword: "desa",
    dimensi: "Tata Kelola",
    icon: "Layers",
    badgeColor: "#475569",
    rekomendasi: "Pemberdayaan Kelembagaan Masyarakat dan Fasilitasi Pembangunan Desa Mandiri"
  };
}

/**
 * Mengambil seluruh daftar masalah terpetakan untuk suatu objek desa
 * @param {Object} desaObj Objek desa dari WILAYAH_LOBAR
 * @returns {Array<Object>} Array daftar masalah lengkap dengan OPD pengampu & rekomendasi
 */
export function getDesaMappedProblems(desaObj) {
  if (!desaObj || !desaObj.nama || !desaObj.kecamatan) return [];

  const counts = getDesaProblemCounts(desaObj.kecamatan, desaObj.nama);
  const kritisList = Array.isArray(counts.masalahKritisDetail) ? counts.masalahKritisDetail : [];
  const sedangList = Array.isArray(counts.masalahSedangDetail) ? counts.masalahSedangDetail : [];

  const results = [];

  kritisList.forEach((text, i) => {
    const mapped = mapProblemToSolution(text);
    results.push({
      id: `kritis-${i + 1}`,
      level: "kritis",
      levelLabel: "Prioritas Kritis (Skor 1)",
      levelColor: "#e11d48",
      ...mapped
    });
  });

  sedangList.forEach((text, i) => {
    const mapped = mapProblemToSolution(text);
    results.push({
      id: `sedang-${i + 1}`,
      level: "sedang",
      levelLabel: "Prioritas Sedang (Skor 2-3)",
      levelColor: "#d97706",
      ...mapped
    });
  });

  return results;
}
