import React, { useState, useMemo, useEffect } from "react";
import {
  Search,
  Filter,
  BookOpen,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Bookmark,
  Plus,
  X,
  ChevronRight,
  Download,
  Info,
  Sparkles,
  Trash2,
  Share2,
  Lock,
  Building2,
  Layers,
  RotateCcw,
  SlidersHorizontal,
  Check,
  Table as TableIcon,
  LayoutGrid,
  ChevronLeft,
  ChevronsLeft,
  ChevronsRight,
  PanelLeftClose,
  PanelLeftOpen
} from "lucide-react";
import rawKamusData from "./data/kamusData.json";
import {
  WILAYAH_LOBAR,
  DAFTAR_KECAMATAN,
  DIMENSI_CONFIG,
  getOpdByDimensi,
  getDimensiByOpd
} from "./data/desaLobarData.js";
import {
  saveSecureData,
  loadSecureData,
  logSecurityEvent,
  getSecurityAuditLogs,
  sanitizeInput
} from "./utils/secureStorage.js";

const KATEGORI_LIST = [
  "Semua Kategori",
  "Jalan, Jembatan & Infrastruktur",
  "Pertanian, Peternakan & Pangan",
  "Pendidikan & Sekolah",
  "Kesehatan, Posyandu & Stunting",
  "UMKM, Pelatihan Kerja & Ekonomi",
  "Perikanan, Nelayan & Garam",
  "Bedah Rumah (RTLH) & Permukiman",
  "Wisata, Olahraga, Pemuda & Budaya",
  "Sampah, Lingkungan & Kebencanaan",
  "Sosial, Keagamaan & Kelembagaan Desa"
];

const KATA_KUNCI_CEPAT = [
  "Jalan",
  "Guru Ngaji",
  "Traktor",
  "Sapi",
  "Sekolah SD",
  "Sampah",
  "Olahraga",
  "RTLH",
  "Posyandu",
  "Irigasi",
  "UMKM",
  "Kursi Roda"
];

export default function App() {
  // Navigasi Utama Top Navbar
  const [activeTab, setActiveTab] = useState("kamus"); // kamus | desa | syarat | usulanku | keamanan

  // State Filter Kamus Usulan
  const [selectedYear, setSelectedYear] = useState("2027"); // "2027" | "2028" | "2029"
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedKategori, setSelectedKategori] = useState("Semua Kategori");
  const [selectedOpd, setSelectedOpd] = useState("Semua OPD");
  const [selectedAksi, setSelectedAksi] = useState("Semua Aksi Prioritas");
  const [showHelperGuide, setShowHelperGuide] = useState(true);

  // Tampilan Tabel vs Kartu: Khusus 2027 default Tabel
  const [viewMode, setViewMode] = useState("table"); // "table" | "cards"
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Paginasi Per Halaman
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10); // 10, 25, 50, 100
  const [visibleCountCards, setVisibleCountCards] = useState(25);

  // State Modal Detail & Tambah Kamus
  const [detailItem, setDetailItem] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newKamusForm, setNewKamusForm] = useState({
    tahun: "2027",
    opd: "Dinas Pertanian",
    kategoriMudah: "Pertanian, Peternakan & Pangan",
    program: "",
    kegiatan: "",
    subKegiatan: "",
    usulanPermasalahan: "",
    usulanKegiatan: "",
    sasaranPenerima: "Basis Kelompok",
    aksiPrioritas: "Aksi Prioritas 6: Agrominapolitan",
    intervensiPrioritas: "Pengembangan Pertanian, Peternakan, Perkebunan Dan Perikanan Berkelanjutan"
  });

  // State Tab Desa (119 Desa & 3 Kelurahan) & Rekomendasi Masalah RUMUSAN
  const [selectedKecamatan, setSelectedKecamatan] = useState("Semua Kecamatan");
  const [desaSearch, setDesaSearch] = useState("");
  const [selectedDesaDetail, setSelectedDesaDetail] = useState(null);
  const [selectedKecamatanPengusul, setSelectedKecamatanPengusul] = useState("Kuripan");
  const [activeDesaPengusul, setActiveDesaPengusul] = useState("Desa Kuripan (Kec. Kuripan)");
  const [filterHanyaRekomendasiDesa, setFilterHanyaRekomendasiDesa] = useState(false);

  // State Data yang Disimpan di Secure LocalStorage
  const [customKamusList, setCustomKamusList] = useState([]);
  const [savedUsulanDesa, setSavedUsulanDesa] = useState([]);
  const [customIndeksDesa, setCustomIndeksDesa] = useState({});
  const [securityStatus, setSecurityStatus] = useState({
    verified: true,
    checksum: "INITIALIZING",
    updatedAt: new Date().toISOString()
  });
  const [auditLogs, setAuditLogs] = useState([]);
  const [toastMsg, setToastMsg] = useState(null);

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg((prev) => (prev === msg ? null : prev));
    }, 3000);
  };

  // Saat tahun berganti: jika 2027, aktifkan mode tabel secara otomatis
  useEffect(() => {
    if (selectedYear === "2027") {
      setViewMode("table");
    }
    setCurrentPage(1);
    setVisibleCountCards(25);
  }, [selectedYear]);

  // Reset pagination ketika filter berubah
  useEffect(() => {
    setCurrentPage(1);
    setVisibleCountCards(25);
  }, [searchQuery, selectedKategori, selectedOpd, selectedAksi, rowsPerPage]);

  // Load dari Secure LocalStorage saat pertama kali buka aplikasi
  useEffect(() => {
    const loadedCustomKamus = loadSecureData("CUSTOM_KAMUS_ITEMS", []);
    const loadedSavedUsulan = loadSecureData("SAVED_USULAN_DESA", []);
    const loadedIndeks = loadSecureData("CUSTOM_INDEKS_DESA", {});

    setCustomKamusList(loadedCustomKamus.data || []);
    setSavedUsulanDesa(loadedSavedUsulan.data || []);
    setCustomIndeksDesa(loadedIndeks.data || {});

    const saveStatus = saveSecureData("APP_HEARTBEAT", {
      app: "Kamus Usulan Bapperida Lombok Barat",
      loadedAt: new Date().toISOString()
    });

    setSecurityStatus({
      verified: loadedCustomKamus.verified && loadedSavedUsulan.verified,
      checksum: saveStatus.checksum || "SHA256-SIM-VERIFIED",
      updatedAt: saveStatus.updatedAt
    });

    const existingLogs = getSecurityAuditLogs();
    if (existingLogs.length === 0) {
      logSecurityEvent(
        "INIT_SECURE_DB",
        "Database LocalStorage Kamus Usulan 2027-2029 & 122 Wilayah Desa/Kelurahan siap dan terverifikasi."
      );
    }
    setAuditLogs(getSecurityAuditLogs());
  }, []);

  // Gabungan Data Kamus per Tahun + Tambahan Custom dari LocalStorage
  const allKamusForYear = useMemo(() => {
    const baseList = rawKamusData.kamus[selectedYear] || [];
    const customForYear = customKamusList.filter(
      (it) => String(it.tahun) === String(selectedYear)
    );
    return [...customForYear, ...baseList];
  }, [selectedYear, customKamusList]);

  // Daftar OPD unik pada tahun terpilih
  const opdOptions = useMemo(() => {
    const setOpd = new Set(allKamusForYear.map((it) => it.opd).filter(Boolean));
    return ["Semua OPD", ...Array.from(setOpd).sort()];
  }, [allKamusForYear]);

  // Daftar 9 Aksi Prioritas unik
  const aksiOptions = useMemo(() => {
    const setAksi = new Set(
      allKamusForYear.map((it) => it.aksiPrioritas).filter(Boolean)
    );
    return ["Semua Aksi Prioritas", ...Array.from(setAksi).sort()];
  }, [allKamusForYear]);

  // Hitung jumlah item per kategori
  const countPerCategory = useMemo(() => {
    const counts = {};
    KATEGORI_LIST.forEach((k) => (counts[k] = 0));
    allKamusForYear.forEach((it) => {
      counts["Semua Kategori"] = (counts["Semua Kategori"] || 0) + 1;
      if (counts[it.kategoriMudah] !== undefined) {
        counts[it.kategoriMudah]++;
      }
    });
    return counts;
  }, [allKamusForYear]);

  // Objek Desa Pengusul Aktif dari data Sheet RUMUSAN 2026
  const activeDesaObj = useMemo(() => {
    return (
      WILAYAH_LOBAR.find(
        (w) => `${w.tipe} ${w.nama} (Kec. ${w.kecamatan})` === activeDesaPengusul
      ) || WILAYAH_LOBAR[0]
    );
  }, [activeDesaPengusul]);

  // Sinkronkan pilihan Kecamatan jika Desa Pengusul berganti dari kartu wilayah
  useEffect(() => {
    if (activeDesaObj && activeDesaObj.kecamatan && activeDesaObj.kecamatan !== selectedKecamatanPengusul) {
      setSelectedKecamatanPengusul(activeDesaObj.kecamatan);
    }
  }, [activeDesaObj, selectedKecamatanPengusul]);

  // Daftar Desa / Kelurahan di dalam Kecamatan yang sedang dipilih
  const villagesInSelectedKecamatan = useMemo(() => {
    return WILAYAH_LOBAR.filter((w) => w.kecamatan === selectedKecamatanPengusul);
  }, [selectedKecamatanPengusul]);

  // OPD Pengampu yang relevan menyelesaikan masalah prioritas desa terpilih (Sheet RUMUSAN)
  const targetOpdForActiveDesa = useMemo(() => {
    if (!activeDesaObj || !activeDesaObj.targetDimensi) return [];
    const opds = new Set();
    activeDesaObj.targetDimensi.forEach((dimName) => {
      const list = getOpdByDimensi(dimName);
      list.forEach((o) => opds.add(o));
    });
    return Array.from(opds);
  }, [activeDesaObj]);

  // Hasil Filter Kamus Usulan (Dilengkapi Filter Cerdas Masalah Desa RUMUSAN)
  const filteredKamus = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return allKamusForYear.filter((item) => {
      if (filterHanyaRekomendasiDesa) {
        if (!targetOpdForActiveDesa.includes(item.opd)) {
          return false;
        }
      }
      if (
        selectedKategori !== "Semua Kategori" &&
        item.kategoriMudah !== selectedKategori
      ) {
        return false;
      }
      if (selectedOpd !== "Semua OPD" && item.opd !== selectedOpd) {
        return false;
      }
      if (
        selectedAksi !== "Semua Aksi Prioritas" &&
        item.aksiPrioritas !== selectedAksi
      ) {
        return false;
      }
      if (!q) return true;
      const haystack = `${item.usulanKegiatan} ${item.usulanPermasalahan} ${item.opd} ${item.program} ${item.kegiatan} ${item.subKegiatan} ${item.sasaranPenerima} ${item.kategoriMudah}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [
    allKamusForYear,
    searchQuery,
    selectedKategori,
    selectedOpd,
    selectedAksi,
    filterHanyaRekomendasiDesa,
    targetOpdForActiveDesa
  ]);

  // Perhitungan Paginasi untuk Tabel
  const totalPages = Math.ceil(filteredKamus.length / rowsPerPage) || 1;
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, filteredKamus.length);
  const paginatedTableRows = useMemo(() => {
    return filteredKamus.slice(startIndex, endIndex);
  }, [filteredKamus, startIndex, endIndex]);

  // Data 119 Desa + 3 Kelurahan dengan custom update dari LocalStorage
  const wilayahList = useMemo(() => {
    return WILAYAH_LOBAR.map((w) => {
      const override = customIndeksDesa[w.id];
      if (!override) return w;
      return {
        ...w,
        ...override
      };
    });
  }, [customIndeksDesa]);

  const filteredWilayah = useMemo(() => {
    const q = desaSearch.trim().toLowerCase();
    return wilayahList.filter((w) => {
      if (
        selectedKecamatan !== "Semua Kecamatan" &&
        w.kecamatan !== selectedKecamatan
      ) {
        return false;
      }
      if (!q) return true;
      return (
        w.nama.toLowerCase().includes(q) ||
        w.kecamatan.toLowerCase().includes(q) ||
        w.kodeWilayah.toLowerCase().includes(q)
      );
    });
  }, [wilayahList, selectedKecamatan, desaSearch]);

  // Fungsi Simpan / Hapus Item ke Daftar Usulan Desa Saya (LocalStorage)
  const handleToggleSaveUsulan = (item) => {
    const exists = savedUsulanDesa.some((u) => u.id === item.id);
    let updated;
    if (exists) {
      updated = savedUsulanDesa.filter((u) => u.id !== item.id);
      logSecurityEvent(
        "HAPUS_USULAN_DESA",
        `Menghapus usulan [${item.id}] ${item.usulanKegiatan.slice(0, 40)}`
      );
      showToast("Usulan dihapus dari daftar Desa Anda");
    } else {
      const dimensiSektor = getDimensiByOpd(item.opd).join(" & ");
      const entry = {
        ...item,
        desaPengusul: activeDesaPengusul,
        lokasiDusun: "Dusun Prioritas",
        dimensiMasalah: dimensiSektor,
        justifikasiMasalah: `Berdasarkan data Sheet RUMUSAN Indeks Desa 2026, ${activeDesaPengusul} memiliki fokus kebutuhan pada sektor ${dimensiSektor}, sehingga usulan ini relevan diusulkan ke ${item.opd}.`,
        estimasiPagu: 100000000,
        savedAt: new Date().toISOString()
      };
      updated = [entry, ...savedUsulanDesa];
      logSecurityEvent(
        "SIMPAN_USULAN_DESA",
        `Menyimpan usulan [${item.id}] untuk ${activeDesaPengusul}`
      );
      showToast("Tersimpan ke daftar UsulanKu!");
    }
    setSavedUsulanDesa(updated);
    const res = saveSecureData("SAVED_USULAN_DESA", updated);
    if (res.ok) {
      setSecurityStatus((prev) => ({
        ...prev,
        checksum: res.checksum,
        updatedAt: res.updatedAt
      }));
    }
    setAuditLogs(getSecurityAuditLogs());
  };

  // Fungsi Tambah Kamus Usulan Baru (2027/2028/2029) ke LocalStorage
  const handleAddCustomKamus = (e) => {
    e.preventDefault();
    if (!newKamusForm.usulanKegiatan.trim() || !newKamusForm.usulanPermasalahan.trim()) {
      showToast("Mohon isi Nama Usulan Kegiatan dan Permasalahan!");
      return;
    }
    const newItem = {
      id: `${newKamusForm.tahun}-CUST-${Date.now().toString().slice(-4)}`,
      tahun: Number(newKamusForm.tahun),
      no: allKamusForYear.length + 1,
      bidang: "Usulan Tambahan Bapperida / Desa",
      opd: sanitizeInput(newKamusForm.opd),
      urusan: sanitizeInput(newKamusForm.opd),
      kategoriMudah: sanitizeInput(newKamusForm.kategoriMudah),
      program: sanitizeInput(newKamusForm.program) || "Program Pembangunan Daerah",
      kegiatan: sanitizeInput(newKamusForm.kegiatan) || "Kegiatan Prioritas Daerah",
      subKegiatan: sanitizeInput(newKamusForm.subKegiatan) || "Sub Kegiatan Usulan Masyarakat",
      usulanPermasalahan: sanitizeInput(newKamusForm.usulanPermasalahan),
      usulanKegiatan: sanitizeInput(newKamusForm.usulanKegiatan),
      sasaranPenerima: sanitizeInput(newKamusForm.sasaranPenerima) || "Basis Kelompok",
      sasaranDaerah: `Mendukung ${sanitizeInput(newKamusForm.aksiPrioritas)}`,
      aksiPrioritas: sanitizeInput(newKamusForm.aksiPrioritas),
      intervensiPrioritas: sanitizeInput(newKamusForm.intervensiPrioritas),
      keterangan: "Data Tambahan Tersimpan di LocalStorage",
      isCustom: true
    };

    const updated = [newItem, ...customKamusList];
    setCustomKamusList(updated);
    const res = saveSecureData("CUSTOM_KAMUS_ITEMS", updated);
    logSecurityEvent(
      "TAMBAH_KAMUS_BARU",
      `Menambahkan kamus tahun ${newItem.tahun}: ${newItem.usulanKegiatan.slice(0, 45)}`
    );
    setSecurityStatus((prev) => ({
      ...prev,
      checksum: res.checksum,
      updatedAt: res.updatedAt
    }));
    setAuditLogs(getSecurityAuditLogs());
    setSelectedYear(String(newKamusForm.tahun));
    setShowAddModal(false);
    showToast(`Kamus Usulan Tahun ${newItem.tahun} berhasil ditambahkan!`);
  };

  // Fungsi Update Indeks Permasalahan Desa
  const handleUpdateIndikatorDesa = (desaId, key, val) => {
    const current = customIndeksDesa[desaId] || {};
    const updated = {
      ...customIndeksDesa,
      [desaId]: {
        ...current,
        [key]: Number(val)
      }
    };
    setCustomIndeksDesa(updated);
    const res = saveSecureData("CUSTOM_INDEKS_DESA", updated);
    logSecurityEvent(
      "UPDATE_INDEKS_DESA",
      `Memperbarui indikator [${key}=${val}] pada wilayah ${desaId}`
    );
    if (res.ok) {
      setSecurityStatus((prev) => ({
        ...prev,
        checksum: res.checksum,
        updatedAt: res.updatedAt
      }));
    }
    setAuditLogs(getSecurityAuditLogs());
  };

  // Fungsi Ekspor Daftar Usulan Desa ke CSV (Bisa dibuka di Excel)
  const handleExportCSV = () => {
    if (savedUsulanDesa.length === 0) {
      showToast("Belum ada usulan yang dipilih untuk diekspor.");
      return;
    }
    const headers = [
      "ID Kamus",
      "Tahun",
      "Desa/Kelurahan Pengusul",
      "OPD Tujuan",
      "Kategori",
      "Usulan Kegiatan Riil",
      "Permasalahan Desa",
      "Syarat / Sasaran Penerima",
      "Program",
      "Kegiatan",
      "Sub Kegiatan",
      "Aksi Prioritas"
    ];
    const rows = savedUsulanDesa.map((u) => [
      u.id,
      u.tahun,
      u.desaPengusul,
      u.opd,
      u.kategoriMudah,
      u.usulanKegiatan,
      u.usulanPermasalahan,
      u.sasaranPenerima,
      u.program,
      u.kegiatan,
      u.subKegiatan,
      u.aksiPrioritas
    ]);
    const csvContent =
      "\uFEFF" +
      [headers, ...rows]
        .map((row) =>
          row.map((cell) => `"${String(cell || "").replace(/"/g, '""')}"`).join(",")
        )
        .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Usulan_Desa_Bapperida_Lobar_${selectedYear}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("File CSV Excel berhasil diunduh!");
  };

  // Fungsi Backup Semua Data LocalStorage ke JSON
  const handleExportBackupJSON = () => {
    const payload = {
      exportedAt: new Date().toISOString(),
      checksum: securityStatus.checksum,
      customKamusList,
      savedUsulanDesa,
      customIndeksDesa
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Backup_Secure_Kamus_Bapperida_Lobar.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("Backup JSON Terenkripsi/Checksum berhasil diunduh!");
  };

  const count2027 =
    (rawKamusData.kamus["2027"]?.length || 0) +
    customKamusList.filter((i) => String(i.tahun) === "2027").length;
  const count2028 =
    (rawKamusData.kamus["2028"]?.length || 0) +
    customKamusList.filter((i) => String(i.tahun) === "2028").length;
  const count2029 =
    (rawKamusData.kamus["2029"]?.length || 0) +
    customKamusList.filter((i) => String(i.tahun) === "2029").length;

  return (
    <div className="desktop-app-wrapper">
      {/* ========================================================
          TOP APPLICATION NAVIGATION BAR (DESKTOP EXECUTIVE HEADER)
          ======================================================== */}
      <header className="desktop-navbar">
        <div className="desktop-navbar-inner">
          <div className="navbar-brand-section">
            <img
              src="/logo-lobar.png"
              alt="Logo Kabupaten Lombok Barat"
              className="desktop-app-logo"
            />
            <div className="navbar-brand-text">
              <span className="navbar-badge">
                <Check size={11} strokeWidth={3} /> PEMKAB LOMBOK BARAT • BAPPERIDA
              </span>
              <h1 className="navbar-title">
                Kamus Usulan Perencanaan Daerah
              </h1>
              <p className="navbar-subtitle">
                Pedoman Musrenbang RKPD & Program Satu Desa Satu Miliar (2027–2029)
              </p>
            </div>
          </div>

          {/* Desktop Nav Tabs with Material Icons */}
          <nav className="desktop-nav-tabs">
            <button
              className={`desktop-tab-btn ${activeTab === "kamus" ? "active" : ""}`}
              onClick={() => setActiveTab("kamus")}
            >
              <BookOpen size={16} />
              <span>Kamus Usulan</span>
            </button>

            <button
              className={`desktop-tab-btn ${activeTab === "desa" ? "active" : ""}`}
              onClick={() => setActiveTab("desa")}
            >
              <MapPin size={16} />
              <span>122 Desa & Kelurahan</span>
            </button>

            <button
              className={`desktop-tab-btn ${activeTab === "usulanku" ? "active" : ""}`}
              onClick={() => setActiveTab("usulanku")}
            >
              <Bookmark size={16} />
              <span>UsulanKu</span>
              {savedUsulanDesa.length > 0 && (
                <span className="tab-badge-count">{savedUsulanDesa.length}</span>
              )}
            </button>

            <button
              className={`desktop-tab-btn ${activeTab === "keamanan" ? "active" : ""}`}
              onClick={() => setActiveTab("keamanan")}
            >
              <ShieldCheck size={16} />
              <span>Keamanan</span>
            </button>
          </nav>

          {/* Tombol Input Usulan Baru (Gold Theme CTA) */}
          <button
            className="btn btn-gold"
            onClick={() => {
              setNewKamusForm((prev) => ({ ...prev, tahun: selectedYear }));
              setShowAddModal(true);
            }}
          >
            <Plus size={15} strokeWidth={2.5} />
            <span>Input Usulan</span>
          </button>
        </div>
      </header>

      {/* Notifikasi Toast */}
      {toastMsg && (
        <div
          style={{
            background: "var(--slate-900)",
            color: "var(--gov-gold-400)",
            padding: "10px 18px",
            fontSize: "13px",
            fontWeight: 700,
            textAlign: "center",
            borderBottom: "2.5px solid var(--gov-gold-500)",
            boxShadow: "var(--shadow-md)"
          }}
        >
          {toastMsg}
        </div>
      )}

      {/* ========================================================
          MAIN PROPORTIONAL CONTAINER (ANTI-STRETCH MAX-WIDTH: 1240PX)
          ======================================================== */}
      <div className="desktop-main-container">
        {/* SUB-BAR: EXECUTIVE YEAR SWITCHER & KPI METRIC CARDS */}
        <section className="desktop-subbar">
          <div className="year-switcher-container">
            <span className="year-switcher-label">Pilihan Tahun:</span>
            <button
              className={`btn-year-segment ${selectedYear === "2027" ? "active" : ""}`}
              onClick={() => {
                setSelectedYear("2027");
                setViewMode("table"); // Otomatis mode tabel untuk 2027
              }}
              title="Kamus Usulan RKPD Tahun 2027 (Fix 17 Januari 2026 - Tampilan Tabel)"
            >
              <span>Tahun 2027</span>
              <span className="year-pill-counter">{count2027} item (Tabel)</span>
            </button>
            <button
              className={`btn-year-segment ${selectedYear === "2028" ? "active" : ""}`}
              onClick={() => setSelectedYear("2028")}
              title="Kamus Usulan RKPD Tahun 2028 (Rekap 6 November 2026)"
            >
              <span>Tahun 2028</span>
              <span className="year-pill-counter">{count2028} item</span>
            </button>
            <button
              className={`btn-year-segment ${selectedYear === "2029" ? "active" : ""}`}
              onClick={() => setSelectedYear("2029")}
              title="Kamus Usulan RKPD Tahun 2029 (Belum Ada Dokumen Final - Masih Dikosongkan)"
            >
              <span>Tahun 2029</span>
              <span
                className="year-pill-counter"
                style={
                  count2029 === 0
                    ? {
                        background: "rgba(239, 68, 68, 0.25)",
                        color: "#fee2e2",
                        border: "1px solid rgba(239, 68, 68, 0.4)"
                      }
                    : {}
                }
              >
                {count2029 > 0 ? `${count2029} item` : "Belum Final"}
              </span>
            </button>
          </div>

          <div className="kpi-metrics-group">
            <div className="kpi-mini-card">
              <Layers size={15} color="var(--gov-navy-700)" />
              <span>
                Total Aktif: <strong>{filteredKamus.length}</strong> Usulan
              </span>
            </div>
            <div className="kpi-mini-card">
              <Building2 size={15} color="var(--gov-navy-700)" />
              <span>
                Cakupan: <strong>{opdOptions.length - 1}</strong> OPD Pengampu
              </span>
            </div>
            <div className="kpi-mini-card">
              <MapPin size={15} color="var(--gov-navy-700)" />
              <span>
                Wilayah: <strong>119 Desa • 3 Kelurahan</strong>
              </span>
            </div>
          </div>
        </section>

        {/* ==================== TAB 1: KAMUS USULAN ==================== */}
        {activeTab === "kamus" && (
          <div className="desktop-two-col">
            {/* SIDEBAR FILTER KIRI (BISA DILIPAT / TOGGLE UNTUK MEMPERLUAS TABEL) */}
            {!isSidebarCollapsed && (
              <aside className="desktop-sidebar">
                <div className="sidebar-panel-card">
                  <div className="panel-header-title">
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                      <SlidersHorizontal size={15} color="var(--gov-navy-700)" /> Filter & Pencarian
                    </span>
                    {(searchQuery ||
                      selectedKategori !== "Semua Kategori" ||
                      selectedOpd !== "Semua OPD" ||
                      selectedAksi !== "Semua Aksi Prioritas") && (
                      <button
                        className="btn btn-danger-ghost"
                        onClick={() => {
                          setSearchQuery("");
                          setSelectedKategori("Semua Kategori");
                          setSelectedOpd("Semua OPD");
                          setSelectedAksi("Semua Aksi Prioritas");
                        }}
                      >
                        <RotateCcw size={11} /> Reset
                      </button>
                    )}
                  </div>

                  {/* Input Pencarian */}
                  <div className="filter-field-group">
                    <label className="filter-label">Kata Kunci Usulan:</label>
                    <div className="search-input-wrap">
                      <Search
                        size={15}
                        color="#64748b"
                        style={{ position: "absolute", left: "12px" }}
                      />
                      <input
                        type="text"
                        className="form-input"
                        placeholder={`Cari di tahun ${selectedYear}...`}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      {searchQuery && (
                        <button
                          onClick={() => setSearchQuery("")}
                          style={{
                            position: "absolute",
                            right: "10px",
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                            color: "#64748b"
                          }}
                        >
                          <X size={15} />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Kata Kunci Populer (Cepat Cari) */}
                  <div className="filter-field-group">
                    <label className="filter-label">Cepat Cari Kebutuhan:</label>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {KATA_KUNCI_CEPAT.map((kw) => {
                        const isActive =
                          searchQuery.toLowerCase() === kw.toLowerCase();
                        return (
                          <button
                            key={kw}
                            className={`btn-chip ${isActive ? "active" : ""}`}
                            onClick={() =>
                              setSearchQuery((prev) => (prev === kw ? "" : kw))
                            }
                          >
                            {kw}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Dropdown Dinas / OPD */}
                  <div className="filter-field-group">
                    <label className="filter-label">Dinas / OPD Pengampu:</label>
                    <select
                      className="form-select"
                      value={selectedOpd}
                      onChange={(e) => setSelectedOpd(e.target.value)}
                    >
                      {opdOptions.map((opd) => (
                        <option key={opd} value={opd}>
                          {opd === "Semua OPD" ? "Semua Dinas / OPD Pengampu" : opd}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Dropdown 9 Aksi Prioritas Bupati */}
                  <div className="filter-field-group">
                    <label className="filter-label">Aksi Prioritas Bupati:</label>
                    <select
                      className="form-select"
                      value={selectedAksi}
                      onChange={(e) => setSelectedAksi(e.target.value)}
                    >
                      {aksiOptions.map((ak) => (
                        <option key={ak} value={ak}>
                          {ak === "Semua Aksi Prioritas"
                            ? "Semua 9 Aksi Prioritas"
                            : ak}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Kategori Kebutuhan Desa (Daftar Vertikal Rapi) */}
                  <div className="filter-field-group">
                    <label className="filter-label">Katalog Kategori Usulan:</label>
                    <div className="category-vertical-menu">
                      {KATEGORI_LIST.map((kat) => {
                        const count = countPerCategory[kat] || 0;
                        const isActive = selectedKategori === kat;
                        return (
                          <button
                            key={kat}
                            className={`category-menu-item ${isActive ? "active" : ""}`}
                            onClick={() => setSelectedKategori(kat)}
                          >
                            <span>{kat}</span>
                            <span
                              style={{
                                fontSize: "10.5px",
                                fontWeight: 700,
                                background: isActive ? "rgba(11,79,138,0.15)" : "#e2e8f0",
                                padding: "1px 7px",
                                borderRadius: "99px",
                                color: isActive ? "var(--gov-navy-800)" : "var(--slate-600)"
                              }}
                            >
                              {count}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </aside>
            )}

            {/* AREA KONTEN UTAMA KANAN */}
            <main className="desktop-main-col">
              {/* Panduan Ramah untuk Pengguna Awam IT */}
              {showHelperGuide && (
                <div className="desktop-helper-banner">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                    <strong style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                      <Sparkles size={16} color="var(--gov-navy-700)" /> Panduan Penggunaan Kamus Usulan:
                    </strong>
                    <button
                      onClick={() => setShowHelperGuide(false)}
                      style={{
                        background: "transparent",
                        border: "none",
                        color: "var(--gov-navy-700)",
                        fontSize: "11.5px",
                        fontWeight: 700,
                        cursor: "pointer",
                        padding: "2px 6px"
                      }}
                    >
                      Tutup [x]
                    </button>
                  </div>
                  <div>
                    {selectedYear === "2027" ? (
                      <span>
                        • <b>Tabel Resmi Tahun 2027:</b> Ditampilkan dalam format tabel resmi lengkap dengan <b>scroll horizontal</b> (geser ke kanan untuk melihat uraian masalah, 9 Aksi, dan 56 Intervensi) serta <b>paginasi per halaman</b> di bagian bawah.<br />
                        • Gunakan tombol <b>"Pilih"</b> di kolom kanan tabel untuk menyimpan usulan ke daftar <b>UsulanKu</b> desa Anda.
                      </span>
                    ) : (
                      <span>
                        • Gunakan <b>Katalog Kategori</b> atau <b>Cepat Cari</b> di sebelah kiri untuk menemukan usulan yang dibutuhkan desa Anda.<br />
                        • Perhatikan <b>Syarat / Sasaran Penerima</b> (misal: Basis Kelompok Tani, terdaftar Dapodik, dll) agar usulan memenuhi kriteria verifikasi.
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* ========================================================
                  BANNER DIAGNOSA MASALAH DESA DARI SHEET RUMUSAN 2026
                  ======================================================== */}
              <div className="village-diagnostic-banner">
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", flex: 1 }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "rgba(200, 150, 62, 0.2)",
                      border: "1px solid var(--gov-gold-500)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--gov-gold-400)",
                      flexShrink: 0
                    }}
                  >
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--gov-gold-400)", letterSpacing: "0.5px", textTransform: "uppercase" }}>
                      DIAGNOSA PERMASALAHAN DESA PENGUSUL (SHEET RUMUSAN 2026):
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "3px", flexWrap: "wrap" }}>
                      {/* Langkah 1: Pilih Kecamatan */}
                      <select
                        className="form-select form-select-sm"
                        style={{
                          background: "#0f172a",
                          color: "#fde047",
                          borderColor: "rgba(200, 150, 62, 0.6)",
                          fontWeight: 800,
                          fontSize: "12.5px",
                          padding: "5px 10px",
                          minWidth: "155px"
                        }}
                        value={selectedKecamatanPengusul}
                        onChange={(e) => {
                          const newKec = e.target.value;
                          setSelectedKecamatanPengusul(newKec);
                          const firstInKec = WILAYAH_LOBAR.find((w) => w.kecamatan === newKec);
                          if (firstInKec) {
                            setActiveDesaPengusul(`${firstInKec.tipe} ${firstInKec.nama} (Kec. ${firstInKec.kecamatan})`);
                          }
                        }}
                        title="Pilih Kecamatan terlebih dahulu"
                      >
                        {DAFTAR_KECAMATAN.map((k) => (
                          <option key={k.kode} value={k.nama}>
                            📍 Kec. {k.nama}
                          </option>
                        ))}
                      </select>

                      {/* Langkah 2: Baru Pilih Desa dalam Kecamatan Tersebut */}
                      <select
                        className="form-select form-select-sm"
                        style={{
                          background: "#0f172a",
                          color: "#f8fafc",
                          borderColor: "rgba(200, 150, 62, 0.6)",
                          fontWeight: 700,
                          fontSize: "12.5px",
                          padding: "5px 12px",
                          minWidth: "230px"
                        }}
                        value={activeDesaPengusul}
                        onChange={(e) => setActiveDesaPengusul(e.target.value)}
                        title="Pilih Desa / Kelurahan di dalam Kecamatan"
                      >
                        {villagesInSelectedKecamatan.map((w) => (
                          <option key={w.id} value={`${w.tipe} ${w.nama} (Kec. ${w.kecamatan})`}>
                            {w.tipe} {w.nama} • {w.statusKemendesa} (Skor: {w.skorKemendesa})
                          </option>
                        ))}
                      </select>

                      <span
                        className={`badge ${
                          activeDesaObj.statusKemendesa === "MANDIRI"
                            ? "badge-mandiri"
                            : activeDesaObj.statusKemendesa === "MAJU"
                            ? "badge-maju"
                            : "badge-berkembang"
                        }`}
                      >
                        {activeDesaObj.statusKemendesa}
                      </span>
                      <span style={{ fontSize: "11.5px", color: "var(--slate-300)" }}>
                        Nilai: <b>{activeDesaObj.nilaiTotal}/635</b>
                      </span>
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: "11px", color: "var(--slate-300)" }}>
                      Fokus Kebutuhan / Defisit Terendah:
                    </div>
                    <div style={{ fontSize: "12px", fontWeight: 700, color: "#fef08a" }}>
                      {activeDesaObj.masalahPrioritas?.join(" • ") || "Layanan Dasar"}
                    </div>
                  </div>

                  <button
                    className={`btn btn-sm ${filterHanyaRekomendasiDesa ? "btn-gold" : "btn-secondary"}`}
                    onClick={() => {
                      const next = !filterHanyaRekomendasiDesa;
                      setFilterHanyaRekomendasiDesa(next);
                      if (next) {
                        showToast(`Menyaring usulan OPD yang menyelesaikan masalah ${activeDesaObj.nama}`);
                      } else {
                        showToast("Menampilkan seluruh kamus usulan");
                      }
                    }}
                    title="Saring tabel agar hanya menampilkan usulan dari OPD yang menyelesaikan masalah desa ini"
                  >
                    <Sparkles size={14} />
                    {filterHanyaRekomendasiDesa ? "✓ Filter Masalah Desaku Aktif" : "Filter Sesuai Masalah Desaku"}
                  </button>
                </div>
              </div>

              {/* Bar Ringkasan Hasil & Toolbar Tampilan */}
              <div className="results-summary-bar">
                <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                    title={isSidebarCollapsed ? "Tampilkan Filter Samping" : "Lipat Filter Samping (Perlebar Tabel)"}
                  >
                    {isSidebarCollapsed ? (
                      <>
                        <PanelLeftOpen size={14} /> Buka Filter
                      </>
                    ) : (
                      <>
                        <PanelLeftClose size={14} /> Sembunyikan Filter
                      </>
                    )}
                  </button>

                  <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--slate-900)" }}>
                    Menampilkan <b>{filteredKamus.length}</b> Usulan Tahun{" "}
                    <b style={{ color: "var(--gov-navy-700)" }}>{selectedYear}</b>
                    {selectedKategori !== "Semua Kategori" && ` • ${selectedKategori}`}
                    {selectedOpd !== "Semua OPD" && ` • ${selectedOpd}`}
                  </span>
                </div>

                {/* Switcher Mode: Tabel vs Kartu */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--slate-500)", textTransform: "uppercase" }}>
                    Mode:
                  </span>
                  <div className="view-mode-group">
                    <button
                      className={`btn-view-mode ${viewMode === "table" ? "active" : ""}`}
                      onClick={() => setViewMode("table")}
                      title="Tampilan Tabel Data"
                    >
                      <TableIcon size={14} /> Tabel
                    </button>
                    <button
                      className={`btn-view-mode ${viewMode === "cards" ? "active" : ""}`}
                      onClick={() => setViewMode("cards")}
                      title="Tampilan Kartu Dossier"
                    >
                      <LayoutGrid size={14} /> Kartu
                    </button>
                  </div>
                </div>
              </div>

              {/* -------------------- KONDISI KHUSUS TAHUN 2029 (BELUM FINAL / KOSONG) -------------------- */}
              {selectedYear === "2029" && allKamusForYear.length === 0 ? (
                <div
                  style={{
                    background: "#ffffff",
                    borderRadius: "14px",
                    border: "2px dashed var(--slate-300)",
                    padding: "48px 24px",
                    textAlign: "center",
                    boxShadow: "var(--shadow-sm)",
                    margin: "12px 0 24px 0"
                  }}
                >
                  <div
                    style={{
                      width: "68px",
                      height: "68px",
                      borderRadius: "50%",
                      background: "#f1f5f9",
                      color: "var(--gov-navy-800)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                      border: "2px solid #e2e8f0"
                    }}
                  >
                    <BookOpen size={32} />
                  </div>

                  <div>
                    <span
                      style={{
                        display: "inline-block",
                        background: "#fef3c7",
                        color: "#92400e",
                        padding: "5px 14px",
                        borderRadius: "20px",
                        fontSize: "12px",
                        fontWeight: 800,
                        marginBottom: "14px",
                        letterSpacing: "0.5px",
                        border: "1px solid #fde68a"
                      }}
                    >
                      STATUS: DOKUMEN BELUM FINAL
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 800,
                      color: "var(--gov-navy-900)",
                      margin: "0 0 10px 0"
                    }}
                  >
                    Kamus Usulan RKPD Tahun 2029 Dikosongkan
                  </h3>

                  <p
                    style={{
                      fontSize: "14px",
                      color: "var(--slate-600)",
                      maxWidth: "620px",
                      margin: "0 auto 24px auto",
                      lineHeight: 1.6
                    }}
                  >
                    Sesuai arahan, data kamus usulan untuk <strong>Tahun Perencanaan 2029</strong> saat ini
                    dikosongkan terlebih dahulu karena belum ada dokumen final dari Bapperida Kabupaten Lombok Barat
                    dan Perangkat Daerah (OPD) pengampu. Anda dapat mengecek data definitif pada Tahun 2027 atau Tahun 2028.
                  </p>

                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      justifyContent: "center",
                      flexWrap: "wrap"
                    }}
                  >
                    <button
                      className="btn btn-primary"
                      onClick={() => setSelectedYear("2027")}
                    >
                      <TableIcon size={15} /> Buka Kamus Usulan 2027 (Format Tabel)
                    </button>
                    <button
                      className="btn btn-secondary"
                      onClick={() => setSelectedYear("2028")}
                    >
                      <BookOpen size={15} /> Buka Kamus Usulan 2028 (308 Usulan OPD)
                    </button>
                    <button
                      className="btn btn-gold"
                      onClick={() => {
                        setNewKamusForm((prev) => ({ ...prev, tahun: "2029" }));
                        setShowAddModal(true);
                      }}
                    >
                      <Plus size={15} /> + Draf Usulan Mandiri 2029
                    </button>
                  </div>
                </div>
              ) : viewMode === "table" ? (
                <div className="gov-table-card">
                  {/* Petunjuk Geser Horizontal */}
                  <div
                    style={{
                      background: "var(--slate-50)",
                      padding: "8px 16px",
                      borderBottom: "1px solid var(--slate-200)",
                      fontSize: "11.5px",
                      color: "var(--slate-600)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between"
                    }}
                  >
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                      <TableIcon size={14} color="var(--gov-navy-700)" />
                      Tabel Resmi Kamus Usulan RKPD Tahun {selectedYear} • <i>Geser ke kanan untuk melihat rincian lengkap 11 kolom</i>
                    </span>
                    <span style={{ fontWeight: 700, color: "var(--gov-navy-800)" }}>
                      Halaman {currentPage} dari {totalPages}
                    </span>
                  </div>

                  {/* Wadah Scroll Horizontal */}
                  <div className="gov-table-scroll-container">
                    <table className="gov-data-table">
                      <thead>
                        <tr>
                          <th style={{ width: "50px", textAlign: "center" }}>No</th>
                          <th style={{ minWidth: "190px" }}>Perangkat Daerah (OPD)</th>
                          <th style={{ minWidth: "160px" }}>Program</th>
                          <th style={{ minWidth: "160px" }}>Kegiatan</th>
                          <th style={{ minWidth: "170px" }}>Sub Kegiatan</th>
                          <th style={{ minWidth: "260px" }}>Usulan Kegiatan Riil</th>
                          <th style={{ minWidth: "320px" }}>Usulan Permasalahan & Data Dasar</th>
                          <th style={{ minWidth: "160px" }}>Syarat / Penerima</th>
                          <th style={{ minWidth: "180px" }}>Kesesuaian 9 Aksi Prioritas</th>
                          <th style={{ minWidth: "200px" }}>56 Intervensi Prioritas</th>
                          <th style={{ minWidth: "140px", textAlign: "center" }}>Aksi Tindakan</th>
                        </tr>
                      </thead>
                      <tbody>
                        {paginatedTableRows.length === 0 ? (
                          <tr>
                            <td colSpan={11} style={{ textAlign: "center", padding: "40px 20px" }}>
                              <p style={{ fontSize: "14px", fontWeight: 700, color: "var(--slate-700)" }}>
                                Tidak ada data usulan yang cocok dengan kriteria pencarian.
                              </p>
                            </td>
                          </tr>
                        ) : (
                          paginatedTableRows.map((item, index) => {
                            const isSaved = savedUsulanDesa.some((u) => u.id === item.id);
                            const rowNumber = startIndex + index + 1;
                            return (
                              <tr key={item.id} className={isSaved ? "row-saved" : ""}>
                                <td className="td-no">{rowNumber}</td>
                                <td>
                                  <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", marginBottom: "4px" }}>
                                    <span className="badge badge-opd">
                                      {item.opd}
                                    </span>
                                    {targetOpdForActiveDesa.includes(item.opd) && (
                                      <span className="badge-rekomendasi" title={`Sesuai dengan diagnosa defisit ${activeDesaObj.nama}`}>
                                        ★ Solusi Desa
                                      </span>
                                    )}
                                  </div>
                                  <div style={{ fontSize: "11px", color: "var(--slate-500)" }}>
                                    {item.bidang}
                                  </div>
                                </td>
                                <td className="td-text-col">{item.program}</td>
                                <td className="td-text-col">{item.kegiatan}</td>
                                <td className="td-text-col">{item.subKegiatan}</td>
                                <td className="td-kegiatan">
                                  <div style={{ color: "var(--slate-900)" }}>{item.usulanKegiatan}</div>
                                  <span className="card-item-code" style={{ marginTop: "4px", display: "inline-block" }}>
                                    #{item.id}
                                  </span>
                                </td>
                                <td className="td-masalah">
                                  {item.usulanPermasalahan}
                                </td>
                                <td>
                                  <span className="badge badge-syarat">
                                    {item.sasaranPenerima}
                                  </span>
                                </td>
                                <td>
                                  <span className="badge badge-kat">
                                    {item.aksiPrioritas}
                                  </span>
                                </td>
                                <td style={{ fontSize: "11.5px", color: "var(--slate-700)" }}>
                                  {item.intervensiPrioritas}
                                </td>
                                <td className="td-action">
                                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", alignItems: "center" }}>
                                    <button
                                      className={`btn btn-sm ${isSaved ? "btn-success" : "btn-primary"}`}
                                      style={{ width: "100%" }}
                                      onClick={() => handleToggleSaveUsulan(item)}
                                    >
                                      {isSaved ? (
                                        <>
                                          <CheckCircle2 size={13} /> Terpilih
                                        </>
                                      ) : (
                                        <>
                                          <Bookmark size={13} /> Pilih Usulan
                                        </>
                                      )}
                                    </button>
                                    <button
                                      className="btn btn-secondary btn-sm"
                                      style={{ width: "100%" }}
                                      onClick={() => setDetailItem(item)}
                                    >
                                      <Info size={13} /> Rincian
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            );
                          })
                        )}
                      </tbody>
                    </table>
                  </div>

                  {/* Paginasi Bawah Tabel */}
                  <div className="gov-table-pagination">
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ fontSize: "12px", color: "var(--slate-600)" }}>
                        Baris per halaman:
                      </span>
                      <select
                        className="form-select"
                        style={{ width: "80px", padding: "5px 8px", fontSize: "12px" }}
                        value={rowsPerPage}
                        onChange={(e) => setRowsPerPage(Number(e.target.value))}
                      >
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                      </select>

                      <span style={{ fontSize: "12px", color: "var(--slate-600)" }}>
                        Menampilkan <b>{filteredKamus.length > 0 ? startIndex + 1 : 0}</b> - <b>{endIndex}</b> dari <b>{filteredKamus.length}</b> data
                      </span>
                    </div>

                    {/* Tombol Navigasi Halaman */}
                    <div className="pagination-controls-group">
                      <button
                        className="btn-page-nav"
                        onClick={() => setCurrentPage(1)}
                        disabled={currentPage === 1}
                        title="Halaman Pertama"
                      >
                        <ChevronsLeft size={16} />
                      </button>
                      <button
                        className="btn-page-nav"
                        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                        disabled={currentPage === 1}
                        title="Halaman Sebelumnya"
                      >
                        <ChevronLeft size={16} />
                      </button>

                      {/* Nomor Halaman */}
                      {Array.from({ length: totalPages }, (_, i) => i + 1)
                        .filter(
                          (p) =>
                            p === 1 ||
                            p === totalPages ||
                            (p >= currentPage - 2 && p <= currentPage + 2)
                        )
                        .map((p, idx, arr) => {
                          const prev = arr[idx - 1];
                          return (
                            <React.Fragment key={p}>
                              {prev && p - prev > 1 && (
                                <span style={{ padding: "0 4px", color: "var(--slate-400)" }}>...</span>
                              )}
                              <button
                                className={`btn-page-nav ${currentPage === p ? "active" : ""}`}
                                onClick={() => setCurrentPage(p)}
                              >
                                {p}
                              </button>
                            </React.Fragment>
                          );
                        })}

                      <button
                        className="btn-page-nav"
                        onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        title="Halaman Berikutnya"
                      >
                        <ChevronRight size={16} />
                      </button>
                      <button
                        className="btn-page-nav"
                        onClick={() => setCurrentPage(totalPages)}
                        disabled={currentPage === totalPages}
                        title="Halaman Terakhir"
                      >
                        <ChevronsRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                /* -------------------- KONTEN: JIKA MODE KARTU DIPILIH -------------------- */
                <>
                  {filteredKamus.slice(0, visibleCountCards).map((item) => {
                    const isSaved = savedUsulanDesa.some((u) => u.id === item.id);
                    return (
                      <article key={item.id} className="gov-dossier-card">
                        <div className="card-top-badges">
                          <div className="badge-tag-group">
                            <span className="badge badge-opd">{item.opd}</span>
                            {targetOpdForActiveDesa.includes(item.opd) && (
                              <span className="badge-rekomendasi" title={`Sesuai dengan diagnosa defisit ${activeDesaObj.nama}`}>
                                ★ Solusi Desa
                              </span>
                            )}
                            <span className="badge badge-kat">{item.kategoriMudah}</span>
                            <span className="badge badge-syarat">
                              Syarat: {item.sasaranPenerima}
                            </span>
                          </div>
                          <span className="card-item-code">#{item.id}</span>
                        </div>

                        <h2 className="dossier-title">{item.usulanKegiatan}</h2>

                        <div className="dossier-problem-box">
                          <strong>Uraian Masalah & Data Dasar: </strong>
                          {item.usulanPermasalahan}
                        </div>

                        <div className="dossier-meta-grid">
                          <div>
                            <strong>Sub Kegiatan:</strong> {item.subKegiatan}
                          </div>
                          <div>
                            <strong>Aksi Prioritas:</strong> {item.aksiPrioritas}
                          </div>
                          <div>
                            <strong>Program:</strong> {item.program}
                          </div>
                          <div>
                            <strong>Sasaran Daerah:</strong> {item.sasaranDaerah}
                          </div>
                        </div>

                        <div className="dossier-footer-actions">
                          <button
                            className="btn btn-secondary"
                            onClick={() => setDetailItem(item)}
                          >
                            <Info size={15} /> Rincian Lengkap
                          </button>
                          <button
                            className={`btn ${isSaved ? "btn-success" : "btn-primary"}`}
                            onClick={() => handleToggleSaveUsulan(item)}
                          >
                            {isSaved ? (
                              <>
                                <CheckCircle2 size={15} /> Sudah Terpilih di Desa
                              </>
                            ) : (
                              <>
                                <Bookmark size={15} /> Pilih Usulan Desa
                              </>
                            )}
                          </button>
                        </div>
                      </article>
                    );
                  })}

                  {visibleCountCards < filteredKamus.length && (
                    <button
                      className="btn btn-secondary"
                      style={{
                        padding: "13px",
                        fontSize: "13px",
                        fontWeight: 800,
                        color: "var(--gov-navy-700)",
                        borderColor: "var(--gov-navy-700)"
                      }}
                      onClick={() => setVisibleCountCards((prev) => prev + 30)}
                    >
                      Tampilkan 30 Usulan Berikutnya (Tersisa {filteredKamus.length - visibleCountCards} usulan)
                    </button>
                  )}
                </>
              )}
            </main>
          </div>
        )}

        {/* ==================== TAB 2: 122 DESA & KELURAHAN (GRID PROPORSI) ==================== */}
        {activeTab === "desa" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <div className="desktop-helper-banner">
              <strong style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <MapPin size={16} color="var(--gov-navy-700)" /> Indeks Permasalahan 119 Desa & 3 Kelurahan (10 Kecamatan):
              </strong>
              <p style={{ marginTop: "4px" }}>
                Gunakan direktori wilayah ini untuk melihat tingkat prioritas intervensi desa Anda,
                catatan hasil Musrenbang, serta langsung menyaring kamus usulan yang direkomendasikan untuk pagu program <b>Rp 1 Miliar per Desa (SDD)</b>.
              </p>
            </div>

            {/* Filter Bar Wilayah */}
            <div
              style={{
                background: "var(--pure-white)",
                padding: "16px 20px",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--slate-200)",
                boxShadow: "var(--shadow-sm)",
                display: "flex",
                gap: "14px",
                alignItems: "center",
                flexWrap: "wrap"
              }}
            >
              <div style={{ flex: 1, minWidth: "260px" }} className="search-input-wrap">
                <Search size={15} color="#64748b" style={{ position: "absolute", left: "12px" }} />
                <input
                  type="text"
                  className="form-input"
                  placeholder="Ketik nama Desa atau Kelurahan (contoh: Kuripan, Banyumulek, Senggigi)..."
                  value={desaSearch}
                  onChange={(e) => setDesaSearch(e.target.value)}
                />
              </div>

              <div style={{ width: "320px" }}>
                <select
                  className="form-select"
                  value={selectedKecamatan}
                  onChange={(e) => setSelectedKecamatan(e.target.value)}
                >
                  <option value="Semua Kecamatan">
                    📍 Semua 10 Kecamatan (119 Desa & 3 Kelurahan)
                  </option>
                  {DAFTAR_KECAMATAN.map((k) => (
                    <option key={k.kode} value={k.nama}>
                      Kecamatan {k.nama} ({k.jumlahDesa} Desa
                      {k.jumlahKelurahan > 0 ? `, ${k.jumlahKelurahan} Kelurahan` : ""})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--slate-800)", padding: "0 2px" }}>
              Ditemukan <b>{filteredWilayah.length}</b> Wilayah Terdaftar di Kabupaten Lombok Barat
            </div>

            {/* Grid 2 Kolom untuk Kartu Desa (Proporsional, Tidak Melebar) */}
            <div className="desktop-desa-grid">
              {filteredWilayah.map((w) => {
                const badgeColor =
                  w.indeksKomposit >= 72
                    ? { bg: "var(--gov-rose-50)", text: "var(--gov-rose-700)" }
                    : w.indeksKomposit >= 65
                    ? { bg: "var(--gov-amber-50)", text: "var(--gov-amber-700)" }
                    : { bg: "var(--gov-emerald-50)", text: "var(--gov-emerald-700)" };

                return (
                  <article key={w.id} className="desa-card">
                    <div className="desa-header-row">
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", marginBottom: "4px" }}>
                          <span className="badge badge-opd">
                            {w.tipe.toUpperCase()} • KEC. {w.kecamatan.toUpperCase()}
                          </span>
                          <span
                            className={`badge ${
                              w.statusKemendesa === "MANDIRI"
                                ? "badge-mandiri"
                                : w.statusKemendesa === "MAJU"
                                ? "badge-maju"
                                : "badge-berkembang"
                            }`}
                          >
                            {w.statusKemendesa}
                          </span>
                        </div>
                        <h3 style={{ fontSize: "16px", fontWeight: 800, color: "var(--slate-900)", marginTop: "2px" }}>
                          {w.tipe} {w.nama}
                        </h3>
                        <p style={{ fontSize: "11.5px", color: "var(--slate-500)", marginTop: "2px" }}>
                          Kode: {w.kodeWilayah} • Skor ID 2026: <b>{w.skorKemendesa}</b> (Nilai: <b>{w.nilaiTotal}/635</b>) • Bappenas: <b>{w.skorBappenas}%</b>
                        </p>
                      </div>

                      <div
                        className="desa-score-badge"
                        style={{
                          background:
                            w.statusKemendesa === "MANDIRI"
                              ? "#dcfce7"
                              : w.statusKemendesa === "MAJU"
                              ? "#e0f2fe"
                              : "#fef3c7",
                          color:
                            w.statusKemendesa === "MANDIRI"
                              ? "#15803d"
                              : w.statusKemendesa === "MAJU"
                              ? "#0369a1"
                              : "#92400e",
                          border: "1px solid rgba(0,0,0,0.08)"
                        }}
                      >
                        <div style={{ fontSize: "16px", fontWeight: 800, lineHeight: 1.1 }}>
                          {w.skorKemendesa}
                        </div>
                        <div style={{ fontSize: "8.5px", fontWeight: 800, textTransform: "uppercase" }}>
                          Skor Kemendesa
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar 6 Dimensi Resmi Sheet RUMUSAN 2026 */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "8px 14px",
                        background: "var(--slate-50)",
                        padding: "12px 14px",
                        borderRadius: "var(--radius-md)",
                        fontSize: "11px"
                      }}
                    >
                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span>1. Layanan Dasar ({w.dimensi?.layananDasar?.skor || 0}/170)</span>
                          <b>{w.dimensi?.layananDasar?.persen || 0}%</b>
                        </div>
                        <div className="indeks-bar-bg">
                          <div
                            className="indeks-bar-fill"
                            style={{
                              width: `${w.dimensi?.layananDasar?.persen || 0}%`,
                              background:
                                (w.dimensi?.layananDasar?.persen || 0) >= 80
                                  ? "var(--gov-emerald-500)"
                                  : (w.dimensi?.layananDasar?.persen || 0) >= 70
                                  ? "var(--gov-gold-500)"
                                  : "var(--gov-rose-500)"
                            }}
                          />
                        </div>
                      </div>

                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span>2. Sosial ({w.dimensi?.sosial?.skor || 0}/85)</span>
                          <b>{w.dimensi?.sosial?.persen || 0}%</b>
                        </div>
                        <div className="indeks-bar-bg">
                          <div
                            className="indeks-bar-fill"
                            style={{
                              width: `${w.dimensi?.sosial?.persen || 0}%`,
                              background:
                                (w.dimensi?.sosial?.persen || 0) >= 80
                                  ? "var(--gov-emerald-500)"
                                  : (w.dimensi?.sosial?.persen || 0) >= 70
                                  ? "var(--gov-gold-500)"
                                  : "var(--gov-rose-500)"
                            }}
                          />
                        </div>
                      </div>

                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span>3. Ekonomi ({w.dimensi?.ekonomi?.skor || 0}/160)</span>
                          <b>{w.dimensi?.ekonomi?.persen || 0}%</b>
                        </div>
                        <div className="indeks-bar-bg">
                          <div
                            className="indeks-bar-fill"
                            style={{
                              width: `${w.dimensi?.ekonomi?.persen || 0}%`,
                              background:
                                (w.dimensi?.ekonomi?.persen || 0) >= 80
                                  ? "var(--gov-emerald-500)"
                                  : (w.dimensi?.ekonomi?.persen || 0) >= 70
                                  ? "var(--gov-gold-500)"
                                  : "var(--gov-rose-500)"
                            }}
                          />
                        </div>
                      </div>

                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span>4. Lingkungan ({w.dimensi?.lingkungan?.skor || 0}/90)</span>
                          <b>{w.dimensi?.lingkungan?.persen || 0}%</b>
                        </div>
                        <div className="indeks-bar-bg">
                          <div
                            className="indeks-bar-fill"
                            style={{
                              width: `${w.dimensi?.lingkungan?.persen || 0}%`,
                              background:
                                (w.dimensi?.lingkungan?.persen || 0) >= 80
                                  ? "var(--gov-emerald-500)"
                                  : (w.dimensi?.lingkungan?.persen || 0) >= 70
                                  ? "var(--gov-gold-500)"
                                  : "var(--gov-rose-500)"
                            }}
                          />
                        </div>
                      </div>

                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span>5. Aksesibilitas ({w.dimensi?.aksesibilitas?.skor || 0}/50)</span>
                          <b>{w.dimensi?.aksesibilitas?.persen || 0}%</b>
                        </div>
                        <div className="indeks-bar-bg">
                          <div
                            className="indeks-bar-fill"
                            style={{
                              width: `${w.dimensi?.aksesibilitas?.persen || 0}%`,
                              background:
                                (w.dimensi?.aksesibilitas?.persen || 0) >= 80
                                  ? "var(--gov-emerald-500)"
                                  : (w.dimensi?.aksesibilitas?.persen || 0) >= 70
                                  ? "var(--gov-gold-500)"
                                  : "var(--gov-rose-500)"
                            }}
                          />
                        </div>
                      </div>

                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span>6. Tata Kelola ({w.dimensi?.tataKelola?.skor || 0}/80)</span>
                          <b>{w.dimensi?.tataKelola?.persen || 0}%</b>
                        </div>
                        <div className="indeks-bar-bg">
                          <div
                            className="indeks-bar-fill"
                            style={{
                              width: `${w.dimensi?.tataKelola?.persen || 0}%`,
                              background:
                                (w.dimensi?.tataKelola?.persen || 0) >= 80
                                  ? "var(--gov-emerald-500)"
                                  : (w.dimensi?.tataKelola?.persen || 0) >= 70
                                  ? "var(--gov-gold-500)"
                                  : "var(--gov-rose-500)"
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="dossier-problem-box" style={{ fontSize: "11.5px" }}>
                      <strong>Fokus Kebutuhan Lapangan (Sheet RUMUSAN): </strong>
                      {w.catatanMusrenbang}
                    </div>

                    <div style={{ display: "flex", gap: "10px", marginTop: "2px" }}>
                      <button
                        className="btn btn-secondary"
                        style={{ flex: 1 }}
                        onClick={() => setSelectedDesaDetail(w)}
                      >
                        Detail Dimensi
                      </button>
                      <button
                        className="btn btn-primary"
                        style={{ flex: 1.6 }}
                        onClick={() => {
                          const desaLabel = `${w.tipe} ${w.nama} (Kec. ${w.kecamatan})`;
                          setActiveDesaPengusul(desaLabel);
                          setFilterHanyaRekomendasiDesa(true);
                          setSelectedYear("2027");
                          setViewMode("table");
                          setActiveTab("kamus");
                          showToast(`Menampilkan Kamus Usulan 2027 penyelesai masalah ${w.tipe} ${w.nama}`);
                        }}
                      >
                        <Sparkles size={14} />
                        <span>Lihat Solusi di Kamus</span>
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}

        {/* ==================== TAB 3: USULANKU (KERANJANG USULAN DESA) ==================== */}
        {activeTab === "usulanku" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <div className="desktop-helper-banner">
              <strong style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <Bookmark size={16} color="var(--gov-navy-700)" /> Keranjang Usulan Prioritas Desa Anda (Tersimpan di LocalStorage):
              </strong>
              <p style={{ marginTop: "4px" }}>
                Usulan yang telah Anda pilih dapat ditinjau kembali, dikonfirmasi pagunya, lalu diekspor langsung ke berkas Excel (CSV) untuk dilampirkan dalam berita acara Musdes atau Musrenbang Kecamatan.
              </p>
            </div>

            {/* Panel Pengaturan Desa Pengusul & Ekspor */}
            <div
              style={{
                background: "var(--pure-white)",
                padding: "18px 22px",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--slate-200)",
                boxShadow: "var(--shadow-sm)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
                flexWrap: "wrap"
              }}
            >
              <div style={{ flex: 1, minWidth: "300px" }}>
                <label className="filter-label">
                  Wilayah Desa / Kelurahan Pengusul Aktif (Pilih Kecamatan → Baru Pilih Desa):
                </label>
                <div style={{ display: "flex", gap: "8px", marginTop: "4px" }}>
                  <select
                    className="form-select"
                    style={{ width: "38%" }}
                    value={selectedKecamatanPengusul}
                    onChange={(e) => {
                      const newKec = e.target.value;
                      setSelectedKecamatanPengusul(newKec);
                      const firstInKec = WILAYAH_LOBAR.find((w) => w.kecamatan === newKec);
                      if (firstInKec) {
                        setActiveDesaPengusul(`${firstInKec.tipe} ${firstInKec.nama} (Kec. ${firstInKec.kecamatan})`);
                      }
                    }}
                    title="Pilih Kecamatan"
                  >
                    {DAFTAR_KECAMATAN.map((k) => (
                      <option key={k.kode} value={k.nama}>
                        Kecamatan {k.nama}
                      </option>
                    ))}
                  </select>

                  <select
                    className="form-select"
                    style={{ width: "62%" }}
                    value={activeDesaPengusul}
                    onChange={(e) => setActiveDesaPengusul(e.target.value)}
                    title="Pilih Desa / Kelurahan di Kecamatan Terpilih"
                  >
                    {villagesInSelectedKecamatan.map((w) => {
                      const label = `${w.tipe} ${w.nama} (Kec. ${w.kecamatan})`;
                      return (
                        <option key={w.id} value={label}>
                          {label} • {w.statusKemendesa} (Skor: {w.skorKemendesa})
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div style={{ display: "flex", gap: "10px" }}>
                <button className="btn btn-primary" onClick={handleExportCSV}>
                  <Download size={15} /> Unduh Format Excel (CSV)
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    if (savedUsulanDesa.length === 0) {
                      showToast("Belum ada usulan yang dipilih untuk dibagikan.");
                      return;
                    }
                    const text =
                      `*DAFTAR USULAN MUSRENBANG / SDD*\n*${activeDesaPengusul}*\n\n` +
                      savedUsulanDesa
                        .map(
                          (u, i) =>
                            `${i + 1}. [${u.tahun}] *${u.usulanKegiatan}* (${u.opd}) - Syarat: ${u.sasaranPenerima}`
                        )
                        .join("\n");
                    navigator.clipboard?.writeText(text);
                    showToast("Ringkasan berhasil disalin! Siap ditempel ke WhatsApp.");
                  }}
                >
                  <Share2 size={15} /> Salin ke WhatsApp
                </button>
              </div>
            </div>

            {savedUsulanDesa.length === 0 ? (
              <div
                style={{
                  background: "var(--pure-white)",
                  borderRadius: "var(--radius-lg)",
                  padding: "50px 24px",
                  textAlign: "center",
                  border: "1px dashed var(--slate-300)"
                }}
              >
                <Bookmark size={38} color="var(--slate-400)" style={{ marginBottom: "10px" }} />
                <h3 style={{ fontSize: "16px", fontWeight: 800, color: "var(--slate-800)" }}>
                  Belum Ada Usulan yang Dipilih
                </h3>
                <p style={{ fontSize: "13px", color: "var(--slate-500)", marginTop: "4px" }}>
                  Buka tab <b>Kamus Usulan</b>, temukan program yang dibutuhkan desa Anda, lalu tekan tombol <b>"Pilih Usulan Desa"</b>.
                </p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {savedUsulanDesa.map((item, idx) => (
                  <article key={item.id} className="gov-dossier-card">
                    <div className="card-top-badges">
                      <div className="badge-tag-group">
                        <span className="badge badge-opd">Tahun {item.tahun}</span>
                        <span className="badge badge-kat">{item.opd}</span>
                        <span className="badge badge-syarat">{item.desaPengusul}</span>
                      </div>
                      <span className="card-item-code">#{item.id}</span>
                    </div>

                    <h3 className="dossier-title">
                      {idx + 1}. {item.usulanKegiatan}
                    </h3>

                    <div className="dossier-problem-box">
                      <strong>Permasalahan: </strong> {item.usulanPermasalahan}
                    </div>

                    <div className="dossier-footer-actions">
                      <button className="btn btn-secondary" onClick={() => setDetailItem(item)}>
                        <Info size={14} /> Detail
                      </button>
                      <button
                        className="btn btn-danger-ghost"
                        onClick={() => handleToggleSaveUsulan(item)}
                      >
                        <Trash2 size={14} /> Hapus dari Usulan
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ==================== TAB 5: KEAMANAN SIBER & AUDIT TRAIL ==================== */}
        {activeTab === "keamanan" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            {/* Kartu Status Integritas */}
            <div
              style={{
                background: "linear-gradient(135deg, var(--gov-navy-900) 0%, var(--gov-navy-800) 100%)",
                color: "var(--pure-white)",
                padding: "22px 26px",
                borderRadius: "var(--radius-lg)",
                boxShadow: "var(--shadow-md)",
                border: "1.5px solid rgba(255,255,255,0.15)",
                display: "flex",
                flexDirection: "column",
                gap: "14px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <ShieldCheck size={32} color="#4ade80" />
                  <div>
                    <h2 style={{ fontSize: "17px", fontWeight: 800 }}>
                      Status Integritas & Keamanan Siber LocalStorage
                    </h2>
                    <p style={{ fontSize: "12px", color: "#bae6fd" }}>
                      Standar Keamanan Klien OWASP • Checksum Envelope SHA-256 • Anti-XSS Sanitizer
                    </p>
                  </div>
                </div>

                <button className="btn btn-gold" onClick={handleExportBackupJSON}>
                  <Download size={15} /> Unduh Backup JSON Aman
                </button>
              </div>

              <div
                style={{
                  background: "rgba(0,0,0,0.3)",
                  padding: "14px 18px",
                  borderRadius: "var(--radius-md)",
                  fontFamily: "monospace",
                  fontSize: "12px",
                  lineHeight: 1.65,
                  border: "1px solid rgba(255,255,255,0.1)"
                }}
              >
                <div>
                  STATUS INTEGRITAS:{" "}
                  <strong style={{ color: "#4ade80" }}>
                    {securityStatus.verified ? "TERVERIFIKASI ASLI (AUTHENTIC)" : "PERINGATAN"}
                  </strong>
                </div>
                <div>SIGNATURE HASH: {securityStatus.checksum}</div>
                <div>ANTI-XSS INJECTION: AKTIF (Input Sanitization Sanitizer Enabled)</div>
                <div>STORAGE PREFIX: BAPPERIDA_LOBAR_SEC_V2_* (Sandboxed)</div>
              </div>
            </div>

            {/* Standar Arsitektur Backend Server Pusat */}
            <div className="gov-dossier-card">
              <h3 className="dossier-title" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Lock size={17} color="var(--gov-navy-700)" /> Standar Keamanan Siber Backend (BSSN & SPBE)
              </h3>
              <div style={{ fontSize: "13px", color: "var(--slate-700)", lineHeight: 1.6 }}>
                Ketika aplikasi ini dihubungkan dari penyimpanan lokal (LocalStorage) ke server data terpusat Bapperida Kabupaten Lombok Barat, arsitektur backend dirancang sesuai pedoman <b>BSSN & OWASP Top 10</b>:
                <ul style={{ paddingLeft: "20px", marginTop: "8px", display: "flex", flexDirection: "column", gap: "5px" }}>
                  <li>
                    <b>Autentikasi & RBAC:</b> JSON Web Token (JWT) berbasis <i>HttpOnly Secure Cookie</i> dengan pembagian peran (Administrator Bapperida, Verifikator 20 OPD, Operator 119 Desa & 3 Kelurahan).
                  </li>
                  <li>
                    <b>Enkripsi Berlapis:</b> Wajib protokol HTTPS TLS 1.3 (In-Transit) serta enkripsi database PostgreSQL AES-256 (At-Rest).
                  </li>
                  <li>
                    <b>API Gateway & Anti-DDoS:</b> Pembatasan laju permintaan (*Rate Limiting*), sanitasi schema request dengan Zod, dan proteksi header Helmet.js.
                  </li>
                  <li>
                    <b>Permanent Audit Trail:</b> Setiap penambahan, penghapusan, atau verifikasi usulan dicatat dalam tabel audit log yang tidak dapat dimanipulasi (*Append-Only*).
                  </li>
                </ul>
              </div>
            </div>

            {/* Tabel Log Audit Keamanan */}
            <div className="gov-dossier-card">
              <h3 className="dossier-title">
                Rekaman Log Jejak Audit Keamanan (Security Audit Trail)
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {auditLogs.slice(0, 8).map((log) => (
                  <div
                    key={log.id}
                    style={{
                      background: "var(--slate-50)",
                      border: "1px solid var(--slate-200)",
                      borderLeft: "4px solid var(--gov-navy-700)",
                      borderRadius: "var(--radius-sm)",
                      padding: "10px 14px",
                      fontSize: "12px"
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700 }}>
                      <span style={{ color: "var(--slate-900)" }}>{log.action}</span>
                      <span style={{ color: "var(--slate-500)", fontFamily: "monospace", fontSize: "11px" }}>
                        SIG: {log.signature}
                      </span>
                    </div>
                    <div style={{ color: "var(--slate-700)", marginTop: "3px" }}>{log.detail}</div>
                    <div style={{ color: "var(--slate-400)", fontSize: "11px", marginTop: "3px" }}>
                      {new Date(log.timestamp).toLocaleString("id-ID")} • Aktor: {log.actor}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ========================================================
          MODAL DETAIL LENGKAP KAMUS USULAN (DESKTOP CENTERED)
          ======================================================== */}
      {detailItem && (
        <div className="desktop-modal-backdrop" onClick={() => setDetailItem(null)}>
          <div className="desktop-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-dialog-header">
              <div>
                <span className="badge badge-opd">
                  Tahun {detailItem.tahun} • #{detailItem.id}
                </span>
                <h3 style={{ fontSize: "15px", fontWeight: 800, color: "var(--slate-900)", marginTop: "4px" }}>
                  Rincian Teknis Kamus Usulan
                </h3>
              </div>
              <button
                onClick={() => setDetailItem(null)}
                style={{
                  background: "var(--slate-200)",
                  border: "none",
                  borderRadius: "99px",
                  width: "32px",
                  height: "32px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <X size={16} />
              </button>
            </div>

            <div className="modal-dialog-body">
              <div>
                <div className="filter-label">
                  Usulan Kegiatan Riil (Yang Dapat Diajukan Desa):
                </div>
                <div style={{ fontSize: "16px", fontWeight: 800, color: "var(--gov-navy-700)", marginTop: "3px" }}>
                  {detailItem.usulanKegiatan}
                </div>
              </div>

              <div className="dossier-problem-box">
                <strong>Uraian Permasalahan & Data Dasar:</strong>
                <p style={{ marginTop: "4px" }}>{detailItem.usulanPermasalahan}</p>
              </div>

              <div
                style={{
                  background: "var(--gov-emerald-50)",
                  border: "1px solid #a7f3d0",
                  padding: "12px 14px",
                  borderRadius: "var(--radius-md)",
                  fontSize: "12.5px"
                }}
              >
                <strong style={{ color: "var(--gov-emerald-700)" }}>Syarat / Kriteria Sasaran Penerima:</strong>
                <div style={{ color: "var(--gov-emerald-600)", fontWeight: 600, marginTop: "3px" }}>
                  {detailItem.sasaranPenerima}
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "8px 14px",
                  background: "var(--slate-50)",
                  padding: "12px 14px",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--slate-200)",
                  fontSize: "12px"
                }}
              >
                <div>
                  <strong>Perangkat Daerah (OPD):</strong>
                  <div>{detailItem.opd}</div>
                </div>
                <div>
                  <strong>Bidang Koordinasi:</strong>
                  <div>{detailItem.bidang}</div>
                </div>
                <div>
                  <strong>Program:</strong>
                  <div>{detailItem.program}</div>
                </div>
                <div>
                  <strong>Kegiatan:</strong>
                  <div>{detailItem.kegiatan}</div>
                </div>
                <div>
                  <strong>Sub Kegiatan:</strong>
                  <div>{detailItem.subKegiatan}</div>
                </div>
                <div>
                  <strong>Aksi Prioritas Bupati:</strong>
                  <div>{detailItem.aksiPrioritas}</div>
                </div>
                <div style={{ gridColumn: "span 2" }}>
                  <strong>Intervensi Prioritas:</strong>
                  <div>{detailItem.intervensiPrioritas}</div>
                </div>
                <div style={{ gridColumn: "span 2" }}>
                  <strong>Sasaran Outcome RPJMD:</strong>
                  <div>{detailItem.sasaranDaerah}</div>
                </div>
              </div>
            </div>

            <div className="modal-dialog-footer">
              <button className="btn btn-secondary" onClick={() => setDetailItem(null)}>
                Tutup
              </button>
              <button
                className={`btn ${savedUsulanDesa.some((u) => u.id === detailItem.id) ? "btn-success" : "btn-primary"}`}
                onClick={() => {
                  handleToggleSaveUsulan(detailItem);
                  setDetailItem(null);
                }}
              >
                {savedUsulanDesa.some((u) => u.id === detailItem.id)
                  ? "✓ Sudah Terpilih di Desa (Batalkan)"
                  : "+ Pilih Usulan Ini untuk Desa"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          MODAL ATUR INDEKS MASALAH DESA
          ======================================================== */}
      {selectedDesaDetail && (
        <div className="desktop-modal-backdrop" onClick={() => setSelectedDesaDetail(null)}>
          <div className="desktop-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-dialog-header">
              <div>
                <span className="badge badge-opd">PEMUTAKHIRAN INDEKS PERMASALAHAN DESA</span>
                <h3 style={{ fontSize: "15px", fontWeight: 800, marginTop: "3px" }}>
                  {selectedDesaDetail.tipe} {selectedDesaDetail.nama} (Kec. {selectedDesaDetail.kecamatan})
                </h3>
              </div>
              <button
                onClick={() => setSelectedDesaDetail(null)}
                style={{
                  background: "var(--slate-200)",
                  border: "none",
                  borderRadius: "99px",
                  width: "32px",
                  height: "32px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <X size={16} />
              </button>
            </div>

            <div className="modal-dialog-body">
              <p style={{ fontSize: "12.5px", color: "var(--slate-600)" }}>
                Sesuaikan skor indikator permasalahan (skala 20–98). Perubahan langsung disimpan ke <b>LocalStorage</b> dan memperbarui rekomendasi usulan desa.
              </p>

              {[
                { key: "infrastruktur", label: "1. Masalah Jalan, Jembatan & Irigasi Desa" },
                { key: "pertanianPangan", label: "2. Masalah Pertanian, Sarana & Ketahanan Pangan" },
                { key: "pendidikanSDM", label: "3. Masalah Fasilitas SD/SMP & Anak Tidak Sekolah" },
                { key: "kesehatanStunting", label: "4. Masalah Fasilitas Posyandu, Air Bersih & Stunting" },
                { key: "ekonomiUMKM", label: "5. Masalah Permodalan UMKM, Usaha & Pelatihan Kerja" },
                { key: "lingkunganSampah", label: "6. Masalah Sampah Lingkungan & Mitigasi Bencana" }
              ].map((ind) => {
                const currentDesa =
                  wilayahList.find((w) => w.id === selectedDesaDetail.id) || selectedDesaDetail;
                const val = currentDesa.indikator[ind.key];
                return (
                  <div key={ind.key} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12.5px", fontWeight: 700 }}>
                      <span>{ind.label}</span>
                      <span style={{ color: "var(--gov-navy-700)" }}>{val} / 100</span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="98"
                      value={val}
                      onChange={(e) =>
                        handleUpdateIndikatorDesa(selectedDesaDetail.id, ind.key, e.target.value)
                      }
                    />
                  </div>
                );
              })}
            </div>

            <div className="modal-dialog-footer">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setSelectedDesaDetail(null);
                  showToast("Indeks permasalahan desa berhasil diperbarui!");
                }}
              >
                Selesai & Simpan ke LocalStorage
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          MODAL INPUT KAMUS USULAN BARU
          ======================================================== */}
      {showAddModal && (
        <div className="desktop-modal-backdrop" onClick={() => setShowAddModal(false)}>
          <div className="desktop-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-dialog-header">
              <div>
                <span className="badge badge-opd">INPUT USULAN BARU</span>
                <h3 style={{ fontSize: "15px", fontWeight: 800, marginTop: "3px" }}>
                  Tambah Item Kamus Usulan ke LocalStorage
                </h3>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                style={{
                  background: "var(--slate-200)",
                  border: "none",
                  borderRadius: "99px",
                  width: "32px",
                  height: "32px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <X size={16} />
              </button>
            </div>

            <form onSubmit={handleAddCustomKamus}>
              <div className="modal-dialog-body">
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  <div>
                    <label className="filter-label">Tahun Rencana:</label>
                    <select
                      className="form-select"
                      style={{ marginTop: "4px" }}
                      value={newKamusForm.tahun}
                      onChange={(e) => setNewKamusForm({ ...newKamusForm, tahun: e.target.value })}
                    >
                      <option value="2027">Tahun 2027</option>
                      <option value="2028">Tahun 2028</option>
                      <option value="2029">Tahun 2029</option>
                    </select>
                  </div>

                  <div>
                    <label className="filter-label">Kategori Kebutuhan:</label>
                    <select
                      className="form-select"
                      style={{ marginTop: "4px" }}
                      value={newKamusForm.kategoriMudah}
                      onChange={(e) =>
                        setNewKamusForm({ ...newKamusForm, kategoriMudah: e.target.value })
                      }
                    >
                      {KATEGORI_LIST.filter((k) => k !== "Semua Kategori").map((k) => (
                        <option key={k} value={k}>
                          {k}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="filter-label">Dinas / OPD Pengampu:</label>
                  <input
                    type="text"
                    className="form-input"
                    style={{ marginTop: "4px", paddingLeft: "12px" }}
                    value={newKamusForm.opd}
                    onChange={(e) => setNewKamusForm({ ...newKamusForm, opd: e.target.value })}
                    placeholder="Contoh: Dinas Pertanian"
                    required
                  />
                </div>

                <div>
                  <label className="filter-label">Nama Usulan Kegiatan Riil (Wajib):</label>
                  <input
                    type="text"
                    className="form-input"
                    style={{ marginTop: "4px", paddingLeft: "12px" }}
                    value={newKamusForm.usulanKegiatan}
                    onChange={(e) =>
                      setNewKamusForm({ ...newKamusForm, usulanKegiatan: e.target.value })
                    }
                    placeholder="Contoh: Pembangunan Jalan Usaha Tani Dusun..."
                    required
                  />
                </div>

                <div>
                  <label className="filter-label">Uraian Permasalahan & Data Dasar (Wajib):</label>
                  <textarea
                    rows={3}
                    className="form-input"
                    style={{ marginTop: "4px", padding: "10px", width: "100%", height: "auto" }}
                    value={newKamusForm.usulanPermasalahan}
                    onChange={(e) =>
                      setNewKamusForm({ ...newKamusForm, usulanPermasalahan: e.target.value })
                    }
                    placeholder="Uraikan kondisi riil masalah di lapangan yang melatarbelakangi usulan ini..."
                    required
                  />
                </div>

                <div>
                  <label className="filter-label">Syarat / Sasaran Penerima Manfaat:</label>
                  <input
                    type="text"
                    className="form-input"
                    style={{ marginTop: "4px", paddingLeft: "12px" }}
                    value={newKamusForm.sasaranPenerima}
                    onChange={(e) =>
                      setNewKamusForm({ ...newKamusForm, sasaranPenerima: e.target.value })
                    }
                    placeholder="Contoh: Basis Kelompok Tani terdaftar"
                  />
                </div>
              </div>

              <div className="modal-dialog-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowAddModal(false)}
                >
                  Batal
                </button>
                <button type="submit" className="btn btn-primary">
                  Simpan Usulan ke LocalStorage
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
