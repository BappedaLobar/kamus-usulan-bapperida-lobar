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
  // Gunakan /\bbidan\b/ agar tidak salah menangkap kata "di bidang lingkungan/ekonomi"
  if (
    pl.includes("dokter") ||
    /\bbidan\b/.test(pl) ||
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
      keyword: isGizi ? "gizi|posyandu|stunting|kesehatan" : "kesehatan|puskesmas|pustu|dokter|bidan",
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
      keyword: "septik|mck|sanitasi|drainase|utilitas",
      dimensi: "Layanan Dasar",
      icon: "Droplets",
      badgeColor: "#0284c7",
      rekomendasi: "Pembangunan Tangki Septik Komunal / Individual Biotank, MCK dan Sarana Sanitasi Lingkungan"
    };
  }

  // 4. Air Minum / Air Bersih / SPAM
  if (pl.includes("air minum") || pl.includes("air bersih") || pl.includes("spam") || pl.includes("perpipaan")) {
    return {
      problemTitle: p,
      opd: "Dinas Pekerjaan Umum, Penataan Ruang, Perumahan dan Kawasan Permukiman",
      bidangBapperida: "Bidang PSDAIK",
      urusan: "Urusan Pekerjaan Umum Dan Penataan Ruang",
      keyword: "air|spam",
      dimensi: "Layanan Dasar",
      icon: "Droplet",
      badgeColor: "#0284c7",
      rekomendasi: "Penyediaan dan Perluasan Jaringan Sistem Penyediaan Air Minum (SPAM) Pedesaan"
    };
  }

  // 5. RTLH / Rumah Layak Huni / Ruang Publik & Permukiman (kecuali "rumah makan")
  if (
    pl.includes("rtlh") ||
    (pl.includes("rumah") && !pl.includes("rumah makan")) ||
    pl.includes("permukiman") ||
    pl.includes("ruang publik terbuka")
  ) {
    return {
      problemTitle: p,
      opd: "Dinas Pekerjaan Umum, Penataan Ruang, Perumahan dan Kawasan Permukiman",
      bidangBapperida: "Bidang PSDAIK",
      urusan: "Urusan Perumahan Dan Kawasan Permukiman",
      keyword: pl.includes("ruang publik") ? "utilitas|permukiman|perumahan" : "rumah|rtlh|permukiman",
      dimensi: pl.includes("ruang publik") ? "Sosial" : "Layanan Dasar",
      icon: "Home",
      badgeColor: "#0284c7",
      rekomendasi: pl.includes("ruang publik")
        ? "Penataan Prasarana, Sarana, dan Utilitas Umum (PSU) Kawasan Permukiman & Ruang Publik Desa"
        : "Bantuan Pemugaran Rumah Tidak Layak Huni (RTLH Swadaya / BSPS DAK & APBD)"
    };
  }

  // 6. Transportasi / Angkutan / Trayek / Penerangan Jalan (LPJU) - Diletakkan sebelum "jalan" agar "penerangan di jalan" masuk ke Dishub
  if (
    pl.includes("transportasi") ||
    pl.includes("angkutan") ||
    pl.includes("trayek") ||
    pl.includes("penerangan") ||
    pl.includes("pju") ||
    pl.includes("rambu")
  ) {
    return {
      problemTitle: p,
      opd: "Dinas Perhubungan",
      bidangBapperida: "Bidang PSDAIK",
      urusan: "Urusan Perhubungan",
      keyword: pl.includes("penerangan") || pl.includes("pju") ? "penerangan|perlengkapan jalan|perhubungan" : "angkutan|perlengkapan jalan|perhubungan",
      dimensi: "Aksesibilitas",
      icon: "Bus",
      badgeColor: "#0284c7",
      rekomendasi: "Pengadaan Lampu Penerangan Jalan Umum (LPJU), Perlengkapan Jalan & Fasilitasi Angkutan Pedesaan"
    };
  }

  // 7. Jalan / Jembatan / Drainase / Talud
  if (pl.includes("jalan") || pl.includes("jembatan") || pl.includes("drainase") || pl.includes("talud")) {
    return {
      problemTitle: p,
      opd: "Dinas Pekerjaan Umum, Penataan Ruang, Perumahan dan Kawasan Permukiman",
      bidangBapperida: "Bidang PSDAIK",
      urusan: "Urusan Pekerjaan Umum Dan Penataan Ruang",
      keyword: "jalan|jembatan|drainase",
      dimensi: "Aksesibilitas",
      icon: "Route",
      badgeColor: "#0284c7",
      rekomendasi: "Pembangunan, Peningkatan dan Pemeliharaan Berkala Jalan Strategis Penghubung Desa & Jembatan"
    };
  }

  // 8. Sektor Sosial: Dinas Sosial, Pemberdayaan Perempuan dan Perlindungan Anak (Bansos, Disabilitas, Lansia, Anak, Perempuan, KSB, PMKS)
  const isSosialReal =
    pl.includes("bantuan sosial") ||
    pl.includes("kesejahteraan sosial") ||
    pl.includes("lumbung sosial") ||
    pl.includes("panti sosial") ||
    pl.includes("rehabilitasi sosial") ||
    pl.includes("budaya/sosial") ||
    (pl.includes("sosial") && !pl.includes("sosialisasi"));

  if (
    isSosialReal ||
    pl.includes("disabilitas") ||
    pl.includes("lansia") ||
    pl.includes("anak terlantar") ||
    pl.includes("kursi roda") ||
    pl.includes("alat bantu") ||
    pl.includes("perempuan") ||
    pl.includes("kekerasan") ||
    pl.includes("forum anak") ||
    pl.includes("perlindungan anak") ||
    pl.includes("ksb") ||
    pl.includes("lks") ||
    pl.includes("pmks") ||
    pl.includes("sembako") ||
    pl.includes("kelompok rentan")
  ) {
    let kw = "sosial";
    if (pl.includes("disabilitas") || pl.includes("kursi roda") || pl.includes("alat bantu")) {
      kw = "alat bantu|kursi roda|disabilitas|sosial";
    } else if (pl.includes("anak") || pl.includes("forum anak")) {
      kw = "anak|sosial";
    } else if (pl.includes("perempuan") || pl.includes("kekerasan")) {
      kw = "perempuan|sosial";
    } else if (pl.includes("lks") || pl.includes("kelembagaan")) {
      kw = "lks|sosial";
    } else if (pl.includes("makanan") || pl.includes("sembako")) {
      kw = "makanan|sembako|sosial";
    } else if (pl.includes("bencana") || pl.includes("ksb") || pl.includes("lumbung")) {
      kw = "ksb|lumbung|sosial";
    }

    return {
      problemTitle: p,
      opd: "Dinas Sosial, Pemberdayaan Perempuan dan Perlindungan Anak",
      bidangBapperida: "Bidang P2M",
      urusan: "Urusan Sosial",
      keyword: kw,
      dimensi: "Sosial",
      icon: "HeartHandshake",
      badgeColor: "#ec4899",
      rekomendasi: "Penyediaan Bantuan Sosial Terpadu, Alat Bantu Disabilitas/Lansia, Lumbung Sosial & Penguatan Perlindungan Perempuan dan Anak"
    };
  }

  // 9. Perpustakaan / Taman Bacaan / Pojok Baca
  if (pl.includes("perpustakaan") || pl.includes("taman bacaan") || pl.includes("buku") || pl.includes("literasi")) {
    return {
      problemTitle: p,
      opd: "Dinas Kearsipan dan Perpustakaan",
      bidangBapperida: "Bidang P2M",
      urusan: "Urusan Perpustakaan",
      keyword: "perpustakaan|baca",
      dimensi: "Sosial",
      icon: "BookOpen",
      badgeColor: "#9333ea",
      rekomendasi: "Pengembangan Perpustakaan Desa / Pojok Baca Digital dan Pengadaan Bahan Bacaan Berkualitas"
    };
  }

  // 10. Pasar Desa / Distribusi / Perdagangan
  if (pl.includes("pasar") || pl.includes("pasar desa") || pl.includes("perdagangan") || pl.includes("kios")) {
    return {
      problemTitle: p,
      opd: "Dinas Perdagangan",
      bidangBapperida: "Bidang PSDAIK",
      urusan: "Urusan Perdagangan",
      keyword: "perdagangan|pasar",
      dimensi: "Ekonomi",
      icon: "ShoppingBag",
      badgeColor: "#ea580c",
      rekomendasi: "Pembangunan / Revitalisasi Sarana Distribusi Perdagangan Pasar Desa & Fasilitasi Akses Pemasaran"
    };
  }

  // 11. Tenaga Kerja / Pelatihan / Kursus / Balai Keterampilan (Diletakkan sebelum UMKM/Pendidikan agar kursus/keterampilan masuk ke Pelatihan Tenaga Kerja)
  if (
    pl.includes("angkatan kerja") ||
    pl.includes("keterampilan") ||
    pl.includes("kursus") ||
    pl.includes("pelatihan") ||
    pl.includes("blk") ||
    pl.includes("tenaga kerja") ||
    pl.includes("bpjs")
  ) {
    return {
      problemTitle: p,
      opd: "Dinas Perindustrian, Koperasi, UKM dan Tenaga Kerja",
      bidangBapperida: "Bidang PSDAIK",
      urusan: "Urusan Tenaga Kerja",
      keyword: "pelatihan|tenaga kerja|kerja",
      dimensi: "Ekonomi",
      icon: "GraduationCap",
      badgeColor: "#ea580c",
      rekomendasi: "Penyelenggaraan Pelatihan Vokasi Kerja Berbasis Kompetensi & Perlindungan Jaminan Ketenagakerjaan"
    };
  }

  // 12. UMKM / Koperasi / KUD / Modal Usaha / KKP-E / KUK / KUR / Merek Dagang / Produk Unggulan / Kedai / Toko / Aktivitas Ekonomi
  if (
    pl.includes("umkm") ||
    pl.includes("koperasi") ||
    pl.includes("kud") ||
    pl.includes("kredit") ||
    pl.includes("kkp-e") ||
    /\bkuk\b/.test(pl) ||
    /\bkur\b/.test(pl) ||
    pl.includes("merek dagang") ||
    pl.includes("wirausaha") ||
    pl.includes("usaha mikro") ||
    pl.includes("produk unggulan") ||
    pl.includes("rumah makan") ||
    pl.includes("kedai") ||
    pl.includes("toko") ||
    pl.includes("pertokoan") ||
    pl.includes("lembaga ekonomi") ||
    pl.includes("aktivitas ekonomi") ||
    pl.includes("perbankan")
  ) {
    return {
      problemTitle: p,
      opd: "Dinas Perindustrian, Koperasi, UKM dan Tenaga Kerja",
      bidangBapperida: "Bidang PSDAIK",
      urusan: "Urusan Koperasi, Usaha Kecil, Dan Menengah",
      keyword: "usaha|koperasi|umkm|industri",
      dimensi: "Ekonomi",
      icon: "Briefcase",
      badgeColor: "#ea580c",
      rekomendasi: "Bantuan Sarana Peralatan Usaha Mikro/IKM, Pendampingan Legalitas/Merek & Penguatan Koperasi Desa"
    };
  }

  // 13. Pertanian / Peternakan / Pangan / Irigasi / Pupuk / Benih / Alsintan / Ternak
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
      keyword: "pertanian|tani|ternak|irigasi",
      dimensi: "Ekonomi",
      icon: "Sprout",
      badgeColor: "#16a34a",
      rekomendasi: "Penyediaan Benih/Bibit Unggul, Bantuan Alat Mesin Pertanian (Alsintan) & Penguatan Ketahanan Pangan"
    };
  }

  // 14. Kelautan / Perikanan / Nelayan / Pesisir / Tambak / Ikan
  // Gunakan /\bikan\b/ agar tidak salah menangkap kata "kepemilikan", "melestarikan", "menjadikan", "pendidikan"
  if (
    /\bikan\b/.test(pl) ||
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
      keyword: "perikanan|ikan|nelayan",
      dimensi: "Ekonomi",
      icon: "Fish",
      badgeColor: "#0284c7",
      rekomendasi: "Bantuan Sarana Mesin Tempel, Coolbox, Alat Tangkap Ramah Lingkungan & Benih Budidaya Ikan"
    };
  }

  // 15. Pariwisata / Penginapan / Wisata / Olahraga / Pemuda / Budaya (kecuali pelestarian lingkungan)
  if (
    (pl.includes("wisata") ||
      pl.includes("penginapan") ||
      (pl.includes("atraksi alam") && !pl.includes("lingkungan")) ||
      pl.includes("olahraga") ||
      pl.includes("pemuda") ||
      pl.includes("kebudayaan lokal") ||
      pl.includes("budaya") ||
      pl.includes("kesenian")) &&
    !pl.includes("pelestarian lingkungan") &&
    !pl.includes("kearifan lingkungan")
  ) {
    const isOlahraga = pl.includes("olahraga") || pl.includes("pemuda");
    return {
      problemTitle: p,
      opd: "Dinas Pariwisata, Ekonomi Kreatif, Pemuda dan Olahraga",
      bidangBapperida: "Bidang PSDAIK",
      urusan: isOlahraga ? "Urusan Pemuda Dan Olahraga" : "Urusan Pariwisata",
      keyword: isOlahraga ? "olahraga|pemuda" : "wisata|pariwisata|ekonomi kreatif",
      dimensi: "Sosial",
      icon: isOlahraga ? "Trophy" : "Palmtree",
      badgeColor: "#d97706",
      rekomendasi: isOlahraga
        ? "Pembangunan dan Pemeliharaan Sarana Lapangan / Fasilitas Olahraga Pemuda Desa"
        : "Pengembangan Fasilitas Destinasi Desa Wisata, Promosi Wisata & Sarana Penunjang Homestay"
    };
  }

  // 16. Bencana / Kebencanaan / Mitigasi / Tanggap Darurat / Peringatan Dini
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

  // 17. Kebakaran / Pemadam
  if (pl.includes("kebakaran") || pl.includes("pemadam")) {
    return {
      problemTitle: p,
      opd: "Dinas Pemadam Kebakaran dan Penyelamatan",
      bidangBapperida: "Bidang PSDAIK",
      urusan: "Urusan Ketenteraman Dan Ketertiban Umum Serta Perlindungan Masyarakat",
      keyword: "kebakaran|bencana",
      dimensi: "Lingkungan",
      icon: "Flame",
      badgeColor: "#dc2626",
      rekomendasi: "Pembentukan Pos Siaga Relawan Pemadam Kebakaran (Redkar) & Sarana Proteksi Kebakaran Desa"
    };
  }

  // 18. Lingkungan Hidup / Energi Terbarukan (EBT) / Konservasi / Pohon
  const isLingkunganHidup =
    pl.includes("lingkungan hidup") ||
    pl.includes("pelestarian lingkungan") ||
    pl.includes("kearifan lingkungan") ||
    pl.includes("pencemaran lingkungan") ||
    (pl.includes("lingkungan") && !pl.includes("keamanan") && !pl.includes("satkamling"));
  if (
    pl.includes("energi baru terbarukan") ||
    pl.includes("ebt") ||
    pl.includes("listrik") ||
    isLingkunganHidup ||
    pl.includes("kearifan lokal") ||
    pl.includes("konservasi") ||
    pl.includes("pohon")
  ) {
    return {
      problemTitle: p,
      opd: "Dinas Lingkungan Hidup",
      bidangBapperida: "Bidang PSDAIK",
      urusan: "Urusan Lingkungan Hidup",
      keyword: "lingkungan|sampah|taman|konservasi",
      dimensi: "Lingkungan",
      icon: "TreePine",
      badgeColor: "#16a34a",
      rekomendasi: "Program Pelestarian Lingkungan Hidup, Konservasi Sumber Daya Alam, Penghijauan & Energi Terbarukan"
    };
  }

  // 19. Pendidikan / Sekolah / Ruang Kelas / Guru / PAUD / SD / SMP / SMA / SMK / Siswa / Beasiswa
  if (
    pl.includes("sekolah") ||
    pl.includes("pendidikan") ||
    pl.includes("paud") ||
    /\bsd\b/.test(pl) ||
    pl.includes("sd/") ||
    pl.includes("smp") ||
    pl.includes("sma") ||
    pl.includes("smk") ||
    pl.includes("guru") ||
    pl.includes("ruang kelas") ||
    pl.includes("beasiswa")
  ) {
    return {
      problemTitle: p,
      opd: "Dinas Pendidikan dan Kebudayaan",
      bidangBapperida: "Bidang P2M",
      urusan: "Urusan Pendidikan",
      keyword: pl.includes("paud") ? "paud|sekolah|pendidikan" : pl.includes("kelas") ? "kelas|sekolah" : "sekolah|pendidikan",
      dimensi: "Layanan Dasar",
      icon: "GraduationCap",
      badgeColor: "#2563eb",
      rekomendasi: "Rehabilitasi Sarpras Ruang Kelas Sekolah/PAUD & Peningkatan Mutu Layanan Pendidikan Dasar"
    };
  }

  // 20. Tata Kelola / Aset Desa / Kantor Desa / Kerjasama / BUMDes / Musyawarah / PADes / Administrasi / Gotong Royong
  if (
    pl.includes("aset") ||
    pl.includes("tanah desa") ||
    pl.includes("kantor desa") ||
    pl.includes("kerjasama") ||
    pl.includes("tata kelola") ||
    pl.includes("aparatur desa") ||
    pl.includes("bumdes") ||
    pl.includes("bum desa") ||
    pl.includes("musyawarah desa") ||
    pl.includes("pades") ||
    pl.includes("pendapatan asli desa") ||
    pl.includes("gotong royong") ||
    pl.includes("administrasi desa") ||
    pl.includes("pelayanan administrasi") ||
    pl.includes("pelayanan pengaduan") ||
    pl.includes("pelayanan lainnya")
  ) {
    return {
      problemTitle: p,
      opd: "Dinas Pemberdayaan Masyarakat dan Desa",
      bidangBapperida: "Bidang P2M",
      urusan: "Urusan Pemberdayaan Masyarakat Dan Desa",
      keyword: "desa|bumdes|kelembagaan",
      dimensi: "Tata Kelola",
      icon: "Landmark",
      badgeColor: "#475569",
      rekomendasi: "Fasilitasi Pengelolaan Aset & Administrasi Pemerintahan Desa, Penguatan BUMDes & Kerjasama Desa"
    };
  }

  // 21. Mitigasi Konflik Sosial / Mediator / Kerukunan -> Badan Kesatuan Bangsa dan Politik
  if (pl.includes("konflik") || pl.includes("mediator") || pl.includes("penengah") || pl.includes("kerukunan")) {
    return {
      problemTitle: p,
      opd: "Badan Kesatuan Bangsa dan Politik",
      bidangBapperida: "Bidang P2M",
      urusan: "Urusan Kesatuan Bangsa dan Politik",
      keyword: "konflik|kesatuan|sosialisasi",
      dimensi: "Sosial",
      icon: "Shield",
      badgeColor: "#7c3aed",
      rekomendasi: "Sosialisasi Pencegahan Konflik Sosial (Warung Cantik) & Penguatan Forum Kerukunan Masyarakat Desa"
    };
  }

  // 22. Ketenteraman / Keamanan Lingkungan / Satkamling / Ronda / Linmas -> Satuan Polisi Pamong Praja
  if (
    pl.includes("keamanan") ||
    pl.includes("satkamling") ||
    pl.includes("ronda") ||
    pl.includes("ketertiban") ||
    pl.includes("linmas")
  ) {
    return {
      problemTitle: p,
      opd: "Satuan Polisi Pamong Praja",
      bidangBapperida: "Bidang P2M",
      urusan: "Urusan Ketenteraman Dan Ketertiban Umum Serta Perlindungan Masyarakat",
      keyword: "keamanan|satlinmas|patroli|ketertiban",
      dimensi: "Sosial",
      icon: "Shield",
      badgeColor: "#64748b",
      rekomendasi: "Pengadaan Sarpras Pos Keamanan Lingkungan (Satkamling), Perlengkapan Patroli & Bimtek Satlinmas Desa"
    };
  }

  // 23. Komunikasi / Internet / Telepon / Sinyal / Digital / Publikasi Informasi / Pos & Logistik
  if (
    pl.includes("internet") ||
    pl.includes("telepon") ||
    pl.includes("komunikasi") ||
    pl.includes("sinyal") ||
    pl.includes("informasi") ||
    pl.includes("publikasi") ||
    pl.includes("website") ||
    pl.includes("digital") ||
    pl.includes("pos dan logistik")
  ) {
    return {
      problemTitle: p,
      opd: "Dinas Komunikasi, Informatika dan Statistik",
      fallbackOpd2027: "Dinas Pemberdayaan Masyarakat dan Desa",
      bidangBapperida: "Bidang RIDA",
      urusan: "Urusan Komunikasi Dan Informasi",
      keyword: "informasi|komunikasi|desa|digital",
      dimensi: "Aksesibilitas",
      icon: "Wifi",
      badgeColor: "#0ea5e9",
      rekomendasi: "Perluasan Akses Internet/Telekomunikasi Desa & Digitalisasi Publikasi Layanan Informasi Pemerintahan Desa"
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

/**
 * Mencocokkan satu baris item Kamus Usulan OPD dengan daftar masalah desa yang relevan
 * @param {Object} item Baris item dari kamusData.json
 * @param {Array<Object>} mappedProblems Daftar masalah desa hasil mapProblemToSolution
 * @returns {Array<Object>} Daftar masalah desa yang terjawab langsung oleh item program ini
 */
export function matchKamusItemToProblems(item, mappedProblems) {
  if (!item || !Array.isArray(mappedProblems) || mappedProblems.length === 0) return [];

  const haystack = `${item.usulanKegiatan || ""} ${item.usulanPermasalahan || ""} ${item.opd || ""} ${item.urusan || ""} ${item.bidangBapperida || item.bidang || ""} ${item.program || ""} ${item.kegiatan || ""} ${item.subKegiatan || ""} ${item.sasaranPenerima || ""} ${item.kategoriMudah || ""}`.toLowerCase();
  const itemYear = String(item.tahun || "");

  return mappedProblems.filter((prob) => {
    if (!prob) return false;
    const isOpdMatch =
      item.opd === prob.opd ||
      (itemYear === "2027" && prob.fallbackOpd2027 && item.opd === prob.fallbackOpd2027);
    if (!isOpdMatch) return false;

    const kw = String(prob.keyword || "").trim().toLowerCase();
    if (!kw) return true;
    const terms = kw
      .split("|")
      .map((t) => t.trim())
      .filter(Boolean);
    if (terms.length === 0) return true;
    return terms.some((term) => haystack.includes(term));
  });
}

/**
 * Membangun payload fokus solusi untuk satu Sektor Kritis (menggabungkan seluruh masalah kritis riil desa di sektor tersebut)
 * @param {Object} sectorObj Objek sektor dari desaTriage.kritis / sedang
 * @param {Object} desaObj Objek desa aktif
 * @returns {Object} Payload lengkap untuk handleApplyProblemSolution
 */
export function buildSectorFocusPayload(sectorObj, desaObj) {
  if (!sectorObj) return null;
  const desaNama = desaObj?.nama || "Desa";
  const rawList = Array.isArray(sectorObj.masalahKritis) ? sectorObj.masalahKritis : [];

  const mappedList = rawList.map((text, idx) => ({
    id: `sec-${sectorObj.key}-${idx + 1}`,
    level: "kritis",
    ...mapProblemToSolution(text)
  }));

  // Untuk Sektor Sosial, pastikan Dinas Sosial P3A selalu disertakan sebagai OPD inti perlindungan sosial desa
  if (sectorObj.key === "sosial") {
    const hasDinsos = mappedList.some(
      (m) => m.opd === "Dinas Sosial, Pemberdayaan Perempuan dan Perlindungan Anak"
    );
    if (!hasDinsos) {
      mappedList.unshift({
        id: `sec-sosial-dinsos`,
        level: "kritis",
        problemTitle:
          rawList.length > 0
            ? `Penguatan Ketahanan Sosial, Bantuan Disabilitas/Lansia & Perlindungan Anak (${rawList[0]})`
            : `Intervensi Kerentanan Sosial, Alat Bantu Disabilitas/Lansia & Perlindungan Perempuan/Anak Desa ${desaNama}`,
        opd: "Dinas Sosial, Pemberdayaan Perempuan dan Perlindungan Anak",
        bidangBapperida: "Bidang P2M",
        urusan: "Urusan Sosial",
        keyword: "sosial",
        dimensi: "Sosial",
        icon: "HeartHandshake",
        badgeColor: "#ec4899",
        rekomendasi:
          "Penyediaan Bantuan Sosial Terpadu, Alat Bantu Disabilitas/Lansia, Lumbung Sosial & Perlindungan Perempuan dan Anak"
      });
    }
  }

  // Fallback jika sektor kritis makro namun belum ada rincian array masalahKritis
  if (mappedList.length === 0) {
    const fallbackText =
      sectorObj.key === "layananDasar"
        ? "Ketersediaan layanan kesehatan dan pendidikan dasar di desa"
        : sectorObj.key === "ekonomi"
        ? "Pengembangan usaha pertanian dan ekonomi mikro desa"
        : sectorObj.key === "lingkungan"
        ? "Ketersediaan pengolahan sampah dan mitigasi bencana di desa"
        : sectorObj.key === "aksesibilitas"
        ? "Kualitas jalan dan penerangan jalan utama di desa"
        : sectorObj.key === "tataKelola"
        ? "Pelaksanaan pelayanan administrasi dan aset desa"
        : "Pelayanan kesejahteraan sosial masyarakat desa";

    mappedList.push({
      id: `sec-${sectorObj.key}-fallback`,
      level: "kritis",
      ...mapProblemToSolution(fallbackText)
    });
  }

  const uniqueOpds = Array.from(new Set(mappedList.map((m) => m.opd)));
  const uniqueBidangs = Array.from(new Set(mappedList.map((m) => m.bidangBapperida).filter(Boolean)));
  const uniqueRekomendasi = Array.from(new Set(mappedList.map((m) => m.rekomendasi).filter(Boolean)));

  return {
    isSectorFocus: true,
    sectorKey: sectorObj.key,
    sectorNama: sectorObj.nama,
    sectorPersen: sectorObj.persen,
    problemTitle: `Solusi Masalah Kritis Sektor ${sectorObj.nama} (${rawList.length || mappedList.length} Masalah Skor 1 di ${desaObj?.tipe || ""} ${desaNama})`,
    opd: uniqueOpds.length === 1 ? uniqueOpds[0] : "Semua OPD",
    opdList: uniqueOpds,
    bidangBapperida: uniqueBidangs.join(" & ") || "Bidang Teknis",
    urusan: "",
    keyword: "",
    rekomendasi: uniqueRekomendasi.slice(0, 2).join(" • "),
    masalahList: mappedList
  };
}
