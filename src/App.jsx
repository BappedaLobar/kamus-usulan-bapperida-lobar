import React, { useState, useMemo, useEffect } from "react";
import {
  Search,
  Filter,
  BookOpen,
  Target,
  Award,
  Database,
  Cloud,
  RefreshCw,
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
  Unlock,
  AlertTriangle,
  AlertOctagon,
  CheckCircle,
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
  PanelLeftOpen,
  ChevronDown,
  Calendar,
  User,
  Navigation,
  Mail,
  Globe,
  ArrowRight,
  FileSpreadsheet,
  FileText,
  Printer
} from "lucide-react";
import * as XLSX from "xlsx";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import rawKamusData from "./data/kamusData.json";
import {
  PATJU_STATISTIK_KABUPATEN,
  PATJU_TREATMENT_CATALOG,
  PATJU_DESA_LIST,
  getPatjuDesa,
  generateDataDukungPatju
} from "./data/patju360Data.js";
import {
  WILAYAH_LOBAR,
  DAFTAR_KECAMATAN,
  DIMENSI_CONFIG,
  getOpdByDimensi,
  getDimensiByOpd,
  getTriageStatusDesa,
  THRESHOLD_KRITIS,
  THRESHOLD_SEDANG
} from "./data/desaLobarData.js";
import {
  saveSecureData,
  loadSecureData,
  logSecurityEvent,
  getSecurityAuditLogs,
  sanitizeInput
} from "./utils/secureStorage.js";
import {
  checkCloudDatabaseStatus,
  fetchAllUsulanFromCloud,
  saveUsulanToCloud,
  deleteUsulanFromCloud,
  syncLocalUsulanToCloud
} from "./utils/cloudDatabase.js";
import {
  mapProblemToSolution,
  getDesaMappedProblems
} from "./utils/problemMapper.js";

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
  const [selectedBidangBapperida, setSelectedBidangBapperida] = useState("Semua Bidang Bapperida");
  const [selectedUrusan, setSelectedUrusan] = useState("Semua Bidang Urusan");
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
  const [exportModalType, setExportModalType] = useState(null); // 'excel' | 'pdf' | null
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
  
  // Mode Filter Smart Triase: "kritis" (Strict / Hanya Kritis), "kritis_sedang" (Kritis & Sedang), "off" (Semua Sektor)
  const [smartFilterMode, setSmartFilterMode] = useState("kritis");
  const [filterTriaseDesaTab, setFilterTriaseDesaTab] = useState("all"); // "all" | "kritis" | "sedang" | "aman"
  const [showProblemListModal, setShowProblemListModal] = useState(false);

  // State Fokus Masalah Spesifik Desa (Problem-to-Program Engine)
  const [activeProblemFocus, setActiveProblemFocus] = useState(null); // { title, opd, bidangBapperida, urusan, keyword, rekomendasi, source, volume, satuan }
  const [selectedProblemFilterId, setSelectedProblemFilterId] = useState("all");

  // State Sinergi PATJU 360 (Kemiskinan Ekstrem & Data Sasaran)
  const [patjuKecFilter, setPatjuKecFilter] = useState("Semua Kecamatan");
  const [patjuSearch, setPatjuSearch] = useState("");
  const [patjuSeverityFilter, setPatjuSeverityFilter] = useState("all");
  const [selectedPatjuKode, setSelectedPatjuKode] = useState("5201012002"); // default Kebon Ayu

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

  // State Koneksi Database Cloudflare D1
  const [cloudDbStatus, setCloudDbStatus] = useState({
    checked: false,
    connected: false,
    d1Bound: false,
    totalUsulan: 0,
    message: "Memeriksa koneksi database..."
  });
  const [isSyncingCloud, setIsSyncingCloud] = useState(false);

  // Auto-koneksi ke Cloudflare D1 saat aplikasi pertama kali dibuka
  useEffect(() => {
    let isMounted = true;
    async function autoConnectD1() {
      try {
        const localDataRes = loadSecureData("SAVED_USULAN_DESA", []);
        const localList = Array.isArray(localDataRes.data) ? localDataRes.data : [];

        const status = await checkCloudDatabaseStatus();
        if (!isMounted) return;

        setCloudDbStatus({ checked: true, ...status });
        if (status.connected) {
          const cloudRes = await fetchAllUsulanFromCloud();
          if (cloudRes.ok && Array.isArray(cloudRes.data)) {
            if (cloudRes.data.length > 0) {
              // Jika di cloud sudah ada data, sinkronkan ke state & localStorage
              setSavedUsulanDesa(cloudRes.data);
              saveSecureData("SAVED_USULAN_DESA", cloudRes.data);
              setCloudDbStatus(prev => ({ ...prev, totalUsulan: cloudRes.data.length }));
            } else if (localList.length > 0) {
              // Jika di cloud masih kosong tapi di lokal ada data usulan lama, migrasikan lokal ke cloud otomatis!
              await syncLocalUsulanToCloud(localList);
              const reCloud = await fetchAllUsulanFromCloud();
              if (reCloud.ok && Array.isArray(reCloud.data)) {
                setSavedUsulanDesa(reCloud.data);
                setCloudDbStatus(prev => ({ ...prev, totalUsulan: reCloud.data.length }));
              }
            }
          }
        }
      } catch (e) {
        console.warn("Auto D1 connect error:", e);
      }
    }
    autoConnectD1();
    return () => { isMounted = false; };
  }, []);

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg((prev) => (prev === msg ? null : prev));
    }, 3000);
  };

  // Saat tahun berganti: jika 2027 atau 2028, aktifkan mode tabel secara otomatis
  useEffect(() => {
    if (selectedYear === "2027" || selectedYear === "2028") {
      setViewMode("table");
    }
    setCurrentPage(1);
    setVisibleCountCards(25);
  }, [selectedYear]);

  // Reset pagination ketika filter berubah
  useEffect(() => {
    setCurrentPage(1);
    setVisibleCountCards(25);
  }, [searchQuery, selectedKategori, selectedOpd, selectedBidangBapperida, selectedUrusan, selectedAksi, rowsPerPage, activeProblemFocus, smartFilterMode]);

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

  // Daftar 4 Bidang SOTK Bapperida Lombok Barat
  const bidangBapperidaOptions = useMemo(() => [
    "Semua Bidang Bapperida",
    "Bidang PSDAIK",
    "Bidang P2M",
    "Bidang RIDA",
    "Bidang P2EPD"
  ], []);

  // Daftar OPD unik pada tahun terpilih (tersaring jika memilih Bidang Bapperida)
  const opdOptions = useMemo(() => {
    let list = allKamusForYear;
    if (selectedBidangBapperida !== "Semua Bidang Bapperida") {
      list = list.filter((it) => (it.bidangBapperida || it.bidang) === selectedBidangBapperida);
    }
    const setOpd = new Set(list.map((it) => it.opd).filter(Boolean));
    return ["Semua OPD", ...Array.from(setOpd).sort()];
  }, [allKamusForYear, selectedBidangBapperida]);

  // Daftar Bidang Urusan unik pada tahun / OPD / Bidang terpilih
  const urusanOptions = useMemo(() => {
    let list = allKamusForYear;
    if (selectedBidangBapperida !== "Semua Bidang Bapperida") {
      list = list.filter((it) => (it.bidangBapperida || it.bidang) === selectedBidangBapperida);
    }
    if (selectedOpd !== "Semua OPD") {
      list = list.filter((it) => it.opd === selectedOpd);
    }
    const setU = new Set(list.map((it) => it.urusan).filter(Boolean));
    return ["Semua Bidang Urusan", ...Array.from(setU).sort()];
  }, [allKamusForYear, selectedBidangBapperida, selectedOpd]);

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

  // Analisis Diagnosa Triase 6 Dimensi Desa Pengusul Aktif (Sheet RUMUSAN)
  const desaTriage = useMemo(() => {
    return getTriageStatusDesa(activeDesaObj);
  }, [activeDesaObj]);

  // Daftar Masalah Terpetakan ke OPD & Program untuk Desa Aktif (Problem-to-Program Matrix)
  const mappedDesaProblems = useMemo(() => {
    return getDesaMappedProblems(activeDesaObj);
  }, [activeDesaObj]);

  // Handler: Fokuskan Solusi Masalah Desa ke Kamus OPD
  const handleApplyProblemSolution = (mappedProb, sourceName = "Indeks Desa") => {
    if (!mappedProb) return;
    
    // Tentukan OPD yang valid untuk tahun aktif
    let targetOpd = mappedProb.opd;
    if (selectedYear === "2027" && targetOpd === "Dinas Komunikasi, Informatika dan Statistik") {
      targetOpd = "Dinas Pemberdayaan Masyarakat dan Desa";
    }

    // 1. Kunci OPD pengampu
    if (targetOpd) {
      setSelectedOpd(targetOpd);
    }
    
    // 2. Reset Bidang Bapperida, Bidang Urusan, Kategori, dan Aksi ke Semua agar tidak memblokir usulan sah OPD
    setSelectedBidangBapperida("Semua Bidang Bapperida");
    setSelectedUrusan("Semua Bidang Urusan");
    setSelectedKategori("Semua Kategori");
    setSelectedAksi("Semua Aksi Prioritas");
    
    // 3. Set kata kunci pencarian yang bersih (ambil token pertama agar di search bar rapi)
    const rawKw = mappedProb.keyword || "";
    const cleanKw = rawKw.includes("|") ? rawKw.split("|")[0].trim() : rawKw.trim();
    setSearchQuery(cleanKw);
    
    // 4. Set ID filter jika ada
    if (mappedProb.id) {
      setSelectedProblemFilterId(mappedProb.id);
    }
    
    // 5. Simpan state fokus
    setActiveProblemFocus({
      title: mappedProb.problemTitle || mappedProb.title,
      opd: targetOpd,
      bidangBapperida: mappedProb.bidangBapperida,
      urusan: mappedProb.urusan,
      keyword: rawKw,
      rekomendasi: mappedProb.rekomendasi,
      volume: mappedProb.volume,
      satuan: mappedProb.satuan,
      source: sourceName
    });
    
    // 6. Reset pagination ke halaman awal
    setCurrentPage(1);

    // 7. Alihkan ke Kamus Usulan dalam mode tabel
    setActiveTab("kamus");
    setViewMode("table");
    setShowProblemListModal(false);
    if (selectedDesaDetail) setSelectedDesaDetail(null);
    
    // 8. Auto-scroll langsung ke tabel kamus usulan secara halus
    setTimeout(() => {
      const targetEl = document.getElementById("active-problem-focus-banner") || document.getElementById("kamus-table-container");
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);

    showToast(`Fokus Solusi Masalah: ${mappedProb.opd}`);
  };

  // Reset fokus masalah jika desa berganti
  useEffect(() => {
    setSelectedProblemFilterId("all");
    setActiveProblemFocus(null);
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

  // Hitung jumlah usulan tahun aktif yang OPD-nya berstatus AMAN bagi desa tersebut (Terkunci)
  const lockedOpdCount = useMemo(() => {
    return allKamusForYear.filter((item) => desaTriage.opdAman.includes(item.opd)).length;
  }, [allKamusForYear, desaTriage.opdAman]);

  // Hasil Filter Kamus Usulan (Dilengkapi Filter Cerdas Masalah Desa RUMUSAN Mode Ketat)
  const filteredKamus = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    // Siapkan token pencarian (mendukung multi-token OR dari pemetaan masalah atau input user)
    const focusTokens = activeProblemFocus && activeProblemFocus.keyword
      ? activeProblemFocus.keyword.split('|').map((t) => t.trim().toLowerCase()).filter(Boolean)
      : [];

    let searchTokens = [];
    if (q) {
      if (q.includes('|')) {
        searchTokens = q.split('|').map((t) => t.trim().toLowerCase()).filter(Boolean);
      } else {
        // Jika q sama dengan token pertama fokus masalah, gunakan semua token fokus agar pencarian komprehensif
        const primaryFocusToken = focusTokens[0] || '';
        if (focusTokens.length > 0 && q === primaryFocusToken) {
          searchTokens = focusTokens;
        } else {
          searchTokens = [q];
        }
      }
    } else if (focusTokens.length > 0) {
      searchTokens = focusTokens;
    }

    let results = allKamusForYear.filter((item) => {
      // 1. FILTER CERDAS STATUS MASALAH DESA (STRICT TRIAGE MODE) - Hanya aktif jika bukan Tahun 2029
      // Jika pengguna sedang fokus pada solusi OPD tertentu atau memilih OPD secara eksplisit, jangan kunci OPD tersebut
      const isFocusedOpd = (activeProblemFocus && activeProblemFocus.opd === item.opd) || (selectedOpd !== "Semua OPD" && item.opd === selectedOpd);

      if (!isFocusedOpd && selectedYear !== "2029" && smartFilterMode === "kritis") {
        // Mode Ketat: HANYA usulan dari OPD berstatus Kritis (<70%)
        // Jika desa tersebut tidak memiliki dimensi kritis sama sekali (14 desa mandiri), buka dimensi sedang
        const allowedOpds = desaTriage.opdKritis.length > 0 ? desaTriage.opdKritis : desaTriage.opdSedang;
        if (!allowedOpds.includes(item.opd)) {
          return false;
        }
        // Pastikan OPD Aman selalu dikunci & tidak ditampilkan jika filter umum
        if (desaTriage.opdAman.includes(item.opd)) {
          return false;
        }
      } else if (!isFocusedOpd && selectedYear !== "2029" && smartFilterMode === "kritis_sedang") {
        // Mode Kritis & Sedang: Usulan dari OPD Kritis + Sedang
        const allowedOpds = [...desaTriage.opdKritis, ...desaTriage.opdSedang];
        if (!allowedOpds.includes(item.opd)) {
          return false;
        }
        // OPD Aman tetap dikunci & tidak ditampilkan jika filter umum
        if (desaTriage.opdAman.includes(item.opd)) {
          return false;
        }
      }

      // 2. Filter Kategori
      if (
        selectedKategori !== "Semua Kategori" &&
        item.kategoriMudah !== selectedKategori
      ) {
        return false;
      }

      // 3. Filter PIC Bidang Bapperida (SOTK Baru)
      if (
        selectedBidangBapperida !== "Semua Bidang Bapperida" &&
        (item.bidangBapperida || item.bidang) !== selectedBidangBapperida
      ) {
        return false;
      }

      // 4. Filter OPD
      if (selectedOpd !== "Semua OPD" && item.opd !== selectedOpd) {
        return false;
      }

      // 5. Filter Bidang Urusan
      if (
        selectedUrusan !== "Semua Bidang Urusan" &&
        item.urusan !== selectedUrusan
      ) {
        return false;
      }

      // 6. Filter Aksi Prioritas
      if (
        selectedAksi !== "Semua Aksi Prioritas" &&
        item.aksiPrioritas !== selectedAksi
      ) {
        return false;
      }

      // 7. Pencarian multi-token OR
      if (searchTokens.length === 0) return true;
      const haystack = `${item.usulanKegiatan} ${item.usulanPermasalahan} ${item.opd} ${item.urusan || ''} ${item.bidangBapperida || item.bidang || ''} ${item.program} ${item.kegiatan} ${item.subKegiatan} ${item.sasaranPenerima} ${item.kategoriMudah}`.toLowerCase();
      return searchTokens.some((tok) => haystack.includes(tok));
    });

    // JARING PENGAMAN: Jika sedang fokus pada masalah suatu OPD dan hasil filter 0 baris,
    // kembalikan seluruh usulan resmi milik OPD tersebut agar tabel tidak pernah kosong!
    if (results.length === 0 && activeProblemFocus && activeProblemFocus.opd) {
      results = allKamusForYear.filter((item) => item.opd === activeProblemFocus.opd);
    }

    return results;
  }, [
    allKamusForYear,
    searchQuery,
    selectedKategori,
    selectedBidangBapperida,
    selectedOpd,
    selectedUrusan,
    selectedAksi,
    smartFilterMode,
    desaTriage,
    activeProblemFocus,
    selectedYear
  ]);

  // Perhitungan Paginasi untuk Tabel dengan Safe Clamping
  const totalPages = Math.ceil(filteredKamus.length / rowsPerPage) || 1;
  const safeCurrentPage = Math.min(Math.max(currentPage, 1), totalPages);
  const startIndex = (safeCurrentPage - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, filteredKamus.length);
  const paginatedTableRows = useMemo(() => {
    return filteredKamus.slice(startIndex, endIndex);
  }, [filteredKamus, startIndex, endIndex]);

  // Pastikan currentPage tidak melebihi totalPages jika filter berubah
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

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

  // Ringkasan Statistik 122 Wilayah Sheet RUMUSAN
  const desaSummaryStats = useMemo(() => {
    let mandiri = 0;
    let maju = 0;
    let berkembang = 0;
    let adaSektorKritis = 0;
    wilayahList.forEach((w) => {
      if (w.statusKemendesa === "MANDIRI") mandiri++;
      else if (w.statusKemendesa === "MAJU") maju++;
      else berkembang++;
      const tr = getTriageStatusDesa(w);
      if (tr.kritisMakro && tr.kritisMakro.length > 0) adaSektorKritis++;
    });
    return {
      total: wilayahList.length,
      desaCount: wilayahList.filter((w) => w.tipe === "Desa").length,
      kelurahanCount: wilayahList.filter((w) => w.tipe === "Kelurahan").length,
      mandiri,
      maju,
      berkembang,
      adaSektorKritis
    };
  }, [wilayahList]);

  const filteredWilayah = useMemo(() => {
    const q = desaSearch.trim().toLowerCase();
    return wilayahList.filter((w) => {
      if (
        selectedKecamatan !== "Semua Kecamatan" &&
        w.kecamatan !== selectedKecamatan
      ) {
        return false;
      }
      if (filterTriaseDesaTab !== "all") {
        const tr = getTriageStatusDesa(w);
        const hasMacroKritis = tr.kritisMakro && tr.kritisMakro.length > 0;
        if (filterTriaseDesaTab === "kritis" && !hasMacroKritis) return false;
        if (filterTriaseDesaTab === "sedang" && (hasMacroKritis || tr.sedang.length === 0)) return false;
        if (filterTriaseDesaTab === "aman" && (hasMacroKritis || tr.sedang.length > 0)) return false;
      }
      if (!q) return true;
      return (
        w.nama.toLowerCase().includes(q) ||
        w.kecamatan.toLowerCase().includes(q) ||
        w.kodeWilayah.toLowerCase().includes(q) ||
        (w.namaKepalaDesa || "").toLowerCase().includes(q) ||
        (w.alamatDesa || "").toLowerCase().includes(q) ||
        (w.koordinatDesa || "").toLowerCase().includes(q)
      );
    });
  }, [wilayahList, selectedKecamatan, desaSearch, filterTriaseDesaTab]);

  // Fungsi Simpan / Hapus Item ke Daftar Usulan Desa Saya (LocalStorage)
  const handleManualCloudSync = async () => {
    setIsSyncingCloud(true);
    showToast("Menghubungi Cloudflare D1...");
    try {
      const status = await checkCloudDatabaseStatus();
      setCloudDbStatus({ checked: true, ...status });
      if (status.connected) {
        await syncLocalUsulanToCloud(savedUsulanDesa);
        const cloudRes = await fetchAllUsulanFromCloud();
        if (cloudRes.ok && Array.isArray(cloudRes.data)) {
          setSavedUsulanDesa(cloudRes.data);
          saveSecureData("SAVED_USULAN_DESA", cloudRes.data);
        }
        showToast(`Sukses tersinkron ke Cloudflare D1 (${cloudRes.data?.length || savedUsulanDesa.length} Usulan)`);
      } else {
        showToast(status.message || "Database D1 belum terhubung di Cloudflare Dashboard.");
      }
    } catch (err) {
      showToast("Gagal sinkron: " + err.message);
    }
    setIsSyncingCloud(false);
  };

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
      const patjuInfo = getPatjuDesa(null, activeDesaPengusul);
      const justifikasi = patjuInfo
        ? `Berdasarkan data sasaran PATJU 360 & Sheet RUMUSAN Indeks Desa 2026, ${activeDesaPengusul} tercatat memiliki ${patjuInfo.kkDesil1.toLocaleString('id-ID')} KK Desil 1 (Kemiskinan Ekstrem), ${patjuInfo.rtlhCount.toLocaleString('id-ID')} unit RTLH, dan ${patjuInfo.tanpaJambanCount.toLocaleString('id-ID')} KK tanpa jamban. Usulan program ini diajukan ke ${item.opd} sebagai intervensi prioritas percepatan penanggulangan kemiskinan dan pemenuhan layanan dasar.`
        : `Berdasarkan data Sheet RUMUSAN Indeks Desa 2026, ${activeDesaPengusul} memiliki fokus kebutuhan pada sektor ${dimensiSektor}, sehingga usulan ini relevan diusulkan ke ${item.opd}.`;
      const entry = {
        ...item,
        desaPengusul: activeDesaPengusul,
        lokasiDusun: "Dusun Prioritas",
        dimensiMasalah: dimensiSektor,
        justifikasiMasalah: justifikasi,
        estimasiPagu: 100000000,
        savedAt: new Date().toISOString()
      };
      updated = [entry, ...savedUsulanDesa];
      logSecurityEvent(
        "SIMPAN_USULAN_DESA",
        `Menyimpan usulan [${item.id}] untuk ${activeDesaPengusul}`
      );
      showToast("Tersimpan ke daftar Usulan Desa!");
    }
    setSavedUsulanDesa(updated);
    const res = saveSecureData("SAVED_USULAN_DESA", updated);

    // Sinkronisasi realtime ke Cloudflare D1
    if (cloudDbStatus.connected) {
      if (exists) {
        deleteUsulanFromCloud(item.id).catch(console.warn);
        setCloudDbStatus(prev => ({ ...prev, totalUsulan: Math.max(0, prev.totalUsulan - 1) }));
      } else {
        saveUsulanToCloud(entry).catch(console.warn);
        setCloudDbStatus(prev => ({ ...prev, totalUsulan: prev.totalUsulan + 1 }));
      }
    }
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

  // Fungsi Ekspor Kertas Kerja Pre-SIPD ke Microsoft Excel (.xlsx) Resmi SIPD-RI (Mendukung Form Terisi & Template Kosong)
  const handleExportExcel = (isTemplate = false) => {
    if (!isTemplate && savedUsulanDesa.length === 0) {
      showToast("Belum ada usulan yang dipilih. Anda dapat mengunduh Template Kosong atau memilih usulan terlebih dahulu.");
      return;
    }

    try {
      const wb = XLSX.utils.book_new();
      const tglCetak = new Date().toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric"
      });

      const titleKertas = isTemplate
        ? "BLANGKO / TEMPLATE KERTAS KERJA USULAN ASPIRASI MASYARAKAT (PRE-SIPD)"
        : "KERTAS KERJA USULAN ASPIRASI MASYARAKAT DESA / KELURAHAN (PRE-SIPD)";

      const subTitle = isTemplate
        ? `Format Blangko Kosong Musrenbang Desa • Rencana Kerja Pemerintah Daerah (RKPD) Tahun ${selectedYear}`
        : `RENCANA KERJA PEMERINTAH DAERAH (RKPD) TAHUN ANGGARAN ${selectedYear}`;

      const metaInfo = isTemplate
        ? `Wilayah: ${activeDesaPengusul} | Petunjuk: Isi nama usulan, OPD tujuan, dan rincian masalah sesuai kolom di bawah ini`
        : `Wilayah Pengusul: ${activeDesaPengusul} | Tanggal Cetak: ${tglCetak} | Total: ${savedUsulanDesa.length} Usulan`;

      // Data Baris Kertas Kerja Resmi Pre-SIPD Kemendagri / Bapperida Lobar
      const wsData = [
        ["PEMERINTAH KABUPATEN LOMBOK BARAT"],
        ["BADAN PERENCANAAN PEMBANGUNAN DAERAH (BAPPERIDA)"],
        [titleKertas],
        [subTitle],
        [metaInfo],
        [], // Baris kosong pemisah
        [
          "NO",
          "ID PRE-SIPD",
          "TAHUN",
          "DESA / KELURAHAN PENGUSUL",
          "PERANGKAT DAERAH (OPD) PENGAMPU",
          "BIDANG URUSAN",
          "PROGRAM SIPD",
          "KEGIATAN SIPD",
          "SUB KEGIATAN SIPD",
          "USULAN KEGIATAN RIIL (KAMUS USULAN)",
          "URAIAN PERMASALAHAN / MASALAH LAPANGAN",
          "SASARAN PENERIMA MANFAAT",
          "LOKASI DETAIL / DUSUN",
          "VOLUME / SATUAN",
          "KESESUAIAN 9 AKSI PRIORITAS",
          "56 INTERVENSI PRIORITAS",
          "KATEGORI KEMUDAHAN",
          "PIC BIDANG BAPPERIDA (SOTK)",
          "STATUS PRE-SIPD"
        ]
      ];

      if (isTemplate) {
        // Buat 10 baris blangko kosong berformat siap isi
        for (let i = 1; i <= 10; i++) {
          wsData.push([
            i,
            `#TEMPLATE-${String(i).padStart(2, "0")}`,
            selectedYear,
            activeDesaPengusul,
            "", // OPD Pengampu diisi desa
            "", // Bidang Urusan
            "", // Program SIPD
            "", // Kegiatan SIPD
            "", // Sub Kegiatan SIPD
            "", // Usulan Kegiatan Riil
            "", // Permasalahan
            "", // Sasaran
            "Dusun ....", // Lokasi Dusun
            "1 Paket", // Volume
            "", // 9 Aksi Prioritas
            "", // 56 Intervensi
            "Kategori 1", // Kategori
            "", // PIC Bapperida
            "Draft Musdes"
          ]);
        }
      } else {
        savedUsulanDesa.forEach((u, idx) => {
          wsData.push([
            idx + 1,
            `#${u.id}`,
            u.tahun || selectedYear,
            u.desaPengusul || activeDesaPengusul,
            u.opd,
            u.urusan || "-",
            u.program || "-",
            u.kegiatan || "-",
            u.subKegiatan || "-",
            u.usulanKegiatan,
            u.usulanPermasalahan,
            u.sasaranPenerima || "-",
            u.lokasiDusun || "Dusun Prioritas Desa",
            u.volume ? `${u.volume} ${u.satuan || ''}` : "1 Paket",
            u.aksiPrioritas || "-",
            u.intervensiPrioritas || "-",
            u.kategoriMudah || "-",
            u.bidangBapperida || u.bidang || "-",
            "Siap Input SIPD-RI"
          ]);
        });
      }

      // Ringkasan dan Lembar Pengesahan Musrenbang Desa Pre-SIPD
      wsData.push([]);
      if (!isTemplate) {
        wsData.push(["", "TOTAL USULAN DESA", `${savedUsulanDesa.length} Usulan Terverifikasi Pre-SIPD`]);
      } else {
        wsData.push(["", "CATATAN", "Blangko resmi Pre-SIPD ini digunakan sebagai kertas kerja musyawarah desa sebelum diinput ke aplikasi resmi SIPD-RI Kemendagri."]);
      }
      wsData.push([]);
      wsData.push([
        "",
        "Mengetahui,",
        "",
        "",
        "Mengetahui,",
        "",
        "",
        "",
        "",
        `Lombok Barat, ${tglCetak}`
      ]);
      wsData.push([
        "",
        "Kepala Desa / Lurah Pengusul",
        "",
        "",
        "Camat Setempat",
        "",
        "",
        "",
        "",
        "Tim Fasilitator Pre-SIPD Bapperida"
      ]);
      wsData.push([]);
      wsData.push([]);
      wsData.push([]);
      wsData.push([
        "",
        `( ${activeDesaPengusul.split(" (")[0]} )`,
        "",
        "",
        "( ........................................... )",
        "",
        "",
        "",
        "",
        "( Tim Verifikator Bapperida Kab. Lobar )"
      ]);

      const ws = XLSX.utils.aoa_to_sheet(wsData);

      // Lebar Kolom Presisi
      ws["!cols"] = [
        { wch: 5 },   // No
        { wch: 16 },  // ID Pre-SIPD
        { wch: 8 },   // Tahun
        { wch: 28 },  // Desa Pengusul
        { wch: 38 },  // OPD
        { wch: 32 },  // Urusan
        { wch: 32 },  // Program
        { wch: 32 },  // Kegiatan
        { wch: 35 },  // Sub Kegiatan
        { wch: 40 },  // Usulan Kegiatan
        { wch: 45 },  // Permasalahan
        { wch: 25 },  // Sasaran
        { wch: 25 },  // Lokasi
        { wch: 15 },  // Volume
        { wch: 28 },  // 9 Aksi
        { wch: 32 },  // 56 Intervensi
        { wch: 18 },  // Kategori
        { wch: 20 },  // PIC Bapperida
        { wch: 20 }   // Status Pre-SIPD
      ];

      XLSX.utils.book_append_sheet(wb, ws, isTemplate ? "TEMPLATE BLANGKO SIPD" : "KERTAS KERJA PRE-SIPD");
      const cleanDesaName = activeDesaPengusul.replace(/[^a-zA-Z0-9]/g, "_").slice(0, 30);
      const fileName = isTemplate
        ? `Template_Blangko_PreSIPD_${cleanDesaName}_RKPD_${selectedYear}.xlsx`
        : `Kertas_Kerja_Terisi_PreSIPD_${cleanDesaName}_RKPD_${selectedYear}.xlsx`;

      XLSX.writeFile(wb, fileName);
      showToast(isTemplate ? "Template Blangko Excel (.xlsx) berhasil diunduh!" : "Kertas Kerja Pre-SIPD Excel (.xlsx) berhasil diunduh!");
    } catch (err) {
      console.error("Export Excel error:", err);
      showToast("Terjadi kendala saat membuat file Excel: " + err.message);
    }
  };

  // Fungsi Ekspor Berita Acara & Kertas Kerja Pre-SIPD Resmi ke PDF (Mendukung Form Terisi & Template Kosong)
  const handleExportPDF = (isTemplate = false) => {
    if (!isTemplate && savedUsulanDesa.length === 0) {
      showToast("Belum ada usulan yang dipilih untuk dicetak. Anda dapat mencetak Template Kosong.");
      return;
    }

    try {
      const doc = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4"
      });

      const tglCetak = new Date().toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric"
      });

      // Header Kop Resmi Pemerintah Kabupaten Lombok Barat
      doc.setFont("helvetica", "bold");
      doc.setFontSize(13);
      doc.setTextColor(10, 37, 64); // Gov Navy
      doc.text("PEMERINTAH KABUPATEN LOMBOK BARAT", 148.5, 12, { align: "center" });

      doc.setFontSize(11);
      doc.setTextColor(0, 112, 184); // Gov Blue
      doc.text("BADAN PERENCANAAN PEMBANGUNAN DAERAH (BAPPERIDA)", 148.5, 17, { align: "center" });

      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(100, 116, 139);
      doc.text("Gedung Graha Giri Menang, Jl. Soekarno-Hatta Giri Menang, Gerung • www.bappeda.lombokbaratkab.go.id", 148.5, 21.5, { align: "center" });

      // Garis Pembatas Kop Surat
      doc.setDrawColor(10, 37, 64);
      doc.setLineWidth(0.8);
      doc.line(14, 23.5, 283, 23.5);
      doc.setLineWidth(0.2);
      doc.line(14, 24.3, 283, 24.3);

      // Judul Kertas Kerja
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(15, 23, 42);
      const docTitle = isTemplate
        ? `BLANGKO KERTAS KERJA USULAN ASPIRASI MASYARAKAT (PRE-SIPD RKPD ${selectedYear})`
        : `KERTAS KERJA USULAN ASPIRASI MASYARAKAT (PRE-SIPD RKPD ${selectedYear})`;
      doc.text(docTitle, 148.5, 30, { align: "center" });

      // Metadata Info Box
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(51, 65, 85);
      doc.text(`Desa / Kelurahan Pengusul : ${activeDesaPengusul}`, 14, 36);
      doc.text(`Tahun Anggaran RKPD      : ${selectedYear}`, 14, 40.5);
      doc.text(`Tanggal Cetak / Verifikasi : ${tglCetak}`, 200, 36);
      const statusKet = isTemplate
        ? "Format: Blangko Kosong Musrenbang Desa"
        : `Jumlah Usulan: ${savedUsulanDesa.length} Usulan Terverifikasi`;
      doc.text(statusKet, 200, 40.5);

      // Siapkan Kolom Tabel untuk jsPDF AutoTable
      const tableHeaders = [
        [
          "No",
          "OPD Pengampu",
          "Bidang Urusan",
          "Usulan Kegiatan Riil",
          "Permasalahan Lapangan",
          "Nomenklatur SIPD (Sub Kegiatan)",
          "Sasaran & Lokasi",
          "PIC Bapperida"
        ]
      ];

      let tableRows = [];
      if (isTemplate) {
        // Buat 8 baris kosong bergaris yang cukup tinggi untuk ditulis tangan saat Musdes
        for (let i = 1; i <= 8; i++) {
          tableRows.push([
            i,
            "\n\n",
            "",
            "",
            "",
            "",
            "",
            ""
          ]);
        }
      } else {
        tableRows = savedUsulanDesa.map((u, idx) => [
          idx + 1,
          u.opd,
          u.urusan || "-",
          u.usulanKegiatan,
          u.usulanPermasalahan,
          u.subKegiatan || u.kegiatan || "-",
          `${u.sasaranPenerima || '-'}\n(Lokasi: ${u.lokasiDusun || 'Dusun Prioritas'})`,
          u.bidangBapperida || u.bidang || "-"
        ]);
      }

      autoTable(doc, {
        head: tableHeaders,
        body: tableRows,
        startY: 44,
        margin: { left: 14, right: 14 },
        styles: {
          fontSize: 7.5,
          cellPadding: isTemplate ? 4.5 : 2.2,
          valign: "middle",
          overflow: "linebreak",
          lineColor: [203, 213, 225],
          lineWidth: 0.15
        },
        headStyles: {
          fillColor: [10, 37, 64], // Gov Navy
          textColor: [255, 255, 255],
          fontStyle: "bold",
          fontSize: 8,
          halign: "center"
        },
        columnStyles: {
          0: { cellWidth: 8, halign: "center" },  // No
          1: { cellWidth: 38 },                   // OPD
          2: { cellWidth: 32 },                   // Urusan
          3: { cellWidth: 44, fontStyle: isTemplate ? "normal" : "bold" },// Usulan
          4: { cellWidth: 46 },                   // Masalah
          5: { cellWidth: 42 },                   // Sub Kegiatan SIPD
          6: { cellWidth: 35 },                   // Sasaran & Lokasi
          7: { cellWidth: 24, halign: "center" }  // PIC Bapperida
        },
        alternateRowStyles: isTemplate ? {} : {
          fillColor: [248, 250, 252]
        },
        didDrawPage: (data) => {
          // Footer Nomor Halaman
          doc.setFontSize(7.5);
          doc.setTextColor(148, 163, 184);
          doc.text(
            `Kertas Kerja Pre-SIPD Bapperida Lombok Barat • Halaman ${data.pageNumber}`,
            14,
            202
          );
          doc.text(
            isTemplate
              ? "Dokumen Blangko Resmi Kertas Kerja Musrenbang Desa / Kelurahan • Pre-SIPD RI"
              : "Dokumen ini merupakan Kertas Kerja resmi pra-input ke SIPD-RI Kemendagri",
            283,
            202,
            { align: "right" }
          );
        }
      });

      // Posisi Lembar Pengesahan Tanda Tangan setelah tabel
      let finalY = doc.lastAutoTable.finalY + 8;
      if (finalY > 165) {
        doc.addPage();
        finalY = 20;
      }

      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(15, 23, 42);

      const colLeft = 25;
      const colCenter = 120;
      const colRight = 215;

      doc.text("Mengetahui,", colLeft, finalY);
      doc.text("Kepala Desa / Lurah Pengusul", colLeft, finalY + 4);

      doc.text("Mengetahui,", colCenter, finalY);
      doc.text("Camat Setempat", colCenter, finalY + 4);

      doc.text(`Lombok Barat, ${tglCetak}`, colRight, finalY);
      doc.text("Tim Fasilitator Pre-SIPD Bapperida", colRight, finalY + 4);

      doc.text(`( ${activeDesaPengusul.split(" (")[0]} )`, colLeft, finalY + 24);
      doc.text("( .................................................. )", colCenter, finalY + 24);
      doc.text("( Tim Verifikator Pre-SIPD Lobar )", colRight, finalY + 24);

      const cleanDesaName = activeDesaPengusul.replace(/[^a-zA-Z0-9]/g, "_").slice(0, 30);
      const fileName = isTemplate
        ? `Template_Blangko_PreSIPD_${cleanDesaName}_RKPD_${selectedYear}.pdf`
        : `Kertas_Kerja_Terisi_PreSIPD_${cleanDesaName}_RKPD_${selectedYear}.pdf`;

      doc.save(fileName);
      showToast(isTemplate ? "Template Blangko PDF resmi berhasil diunduh!" : "Kertas Kerja Pre-SIPD PDF resmi berhasil diunduh!");
    } catch (err) {
      console.error("Export PDF error:", err);
      showToast("Terjadi kendala saat membuat file PDF: " + err.message);
    }
  };

  // Fungsi Ekspor Daftar Usulan Desa ke CSV (Format SIPD-RI)
  const handleExportCSV = () => {
    if (savedUsulanDesa.length === 0) {
      showToast("Belum ada usulan yang dipilih untuk diekspor.");
      return;
    }
    const headers = [
      "No",
      "ID Pre-SIPD",
      "Tahun RKPD",
      "Desa/Kelurahan Pengusul",
      "Perangkat Daerah (OPD)",
      "Bidang Urusan",
      "PIC Bidang Bapperida",
      "Program SIPD",
      "Kegiatan SIPD",
      "Sub Kegiatan SIPD",
      "Usulan Kegiatan Riil",
      "Uraian Permasalahan Lapangan",
      "Sasaran Penerima Manfaat",
      "Lokasi Dusun",
      "Volume/Satuan",
      "9 Aksi Prioritas",
      "56 Intervensi Prioritas",
      "Kategori Kemudahan",
      "Status Pre-SIPD"
    ];
    const rows = savedUsulanDesa.map((u, idx) => [
      idx + 1,
      `#${u.id}`,
      u.tahun || selectedYear,
      u.desaPengusul || activeDesaPengusul,
      u.opd,
      u.urusan || "-",
      u.bidangBapperida || u.bidang || "-",
      u.program || "-",
      u.kegiatan || "-",
      u.subKegiatan || "-",
      u.usulanKegiatan,
      u.usulanPermasalahan,
      u.sasaranPenerima || "-",
      u.lokasiDusun || "Dusun Prioritas",
      u.volume ? `${u.volume} ${u.satuan || ''}` : "1 Paket",
      u.aksiPrioritas || "-",
      u.intervensiPrioritas || "-",
      u.kategoriMudah || "-",
      "Siap Input SIPD-RI"
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
    const cleanDesaName = activeDesaPengusul.replace(/[^a-zA-Z0-9]/g, "_").slice(0, 30);
    a.download = `Kertas_Kerja_PreSIPD_${cleanDesaName}_RKPD_${selectedYear}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("File Kertas Kerja Pre-SIPD (CSV) berhasil diunduh!");
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
                <Check size={10} strokeWidth={3} /> PEMKAB LOMBOK BARAT • BAPPERIDA
              </span>
              <h1 className="navbar-title">
                Kamus Usulan Perencanaan Daerah
              </h1>
              <p className="navbar-subtitle">
                Pedoman Musrenbang RKPD &amp; Program Satu Desa Satu Miliar
              </p>
            </div>
          </div>

          {/* Desktop Nav Tabs with Material Icons */}
          <nav className="desktop-nav-tabs">
            <button
              className={`desktop-tab-btn ${activeTab === "patju" ? "active" : ""}`}
              onClick={() => setActiveTab("patju")}
            >
              <Target size={16} />
              <span>Sinergi PATJU 360</span>
              <span className="tab-badge-pill">P3KE</span>
            </button>

            <button
              className={`desktop-tab-btn ${activeTab === "kamus" ? "active" : ""}`}
              onClick={() => setActiveTab("kamus")}
            >
              <BookOpen size={16} />
              <span>Kamus Usulan OPD</span>
            </button>

            <button
              className={`desktop-tab-btn ${activeTab === "desa" ? "active" : ""}`}
              onClick={() => setActiveTab("desa")}
            >
              <MapPin size={16} />
              <span>Rumusan Indeks Desa</span>
            </button>

            <button
              className={`desktop-tab-btn ${activeTab === "usulanku" ? "active" : ""}`}
              onClick={() => setActiveTab("usulanku")}
            >
              <Bookmark size={16} />
              <span>Usulan Desa</span>
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

          {/* Kelompok Aksi Kanan Header: Dropdown Pilihan Tahun & Input Usulan (SEJAJAR 1 BARIS) */}
          <div className="navbar-right-actions">
            {/* Dropdown Menu Pilihan Tahun Perencanaan */}
            <div className="header-year-wrapper">
              <select
                className="header-year-select"
                value={selectedYear}
                onChange={(e) => {
                  const yr = e.target.value;
                  setSelectedYear(yr);
                  if (yr === "2027" || yr === "2028") {
                    setViewMode("table");
                  }
                  showToast(`Beralih ke Tahun Perencanaan ${yr}`);
                }}
                title="Pilih Tahun Perencanaan RKPD"
              >
                <option value="2027">📅 RKPD 2027</option>
                <option value="2028">📅 RKPD 2028</option>
                <option value="2029">📅 RKPD 2029 (Kosong)</option>
              </select>
              <ChevronDown
                size={14}
                color="#0369a1"
                className="header-year-chevron"
              />
            </div>
          </div>
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
        {/* SUB-BAR: STATUS TAHUN AKTIF & KPI METRIC CARDS */}
        <section className="desktop-subbar">
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                background: selectedYear === "2029" ? "#fef3c7" : "#e0f2fe",
                color: selectedYear === "2029" ? "#92400e" : "#0369a1",
                padding: "6px 14px",
                borderRadius: "var(--radius-md)",
                fontSize: "13px",
                fontWeight: 800,
                border: selectedYear === "2029" ? "1px solid #fde68a" : "1px solid #bae6fd"
              }}
            >
              <Calendar size={15} />
              Tahun Perencanaan: <strong>RKPD {selectedYear}</strong>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 800,
                  padding: "1px 7px",
                  borderRadius: "10px",
                  background: selectedYear === "2029" ? "#fde68a" : "#0284c7",
                  color: selectedYear === "2029" ? "#92400e" : "#ffffff",
                  marginLeft: "4px"
                }}
              >
                {selectedYear === "2027" && `${count2027} Item • Tabel Resmi`}
                {selectedYear === "2028" && `${count2028} Item • Rekap`}
                {selectedYear === "2029" && "Belum Ada Rancangan Final"}
              </span>
            </span>
          </div>

          <div className="kpi-metrics-group">
            <div className="kpi-mini-card">
              <Layers size={15} color="#0070b8" />
              <span>
                Total Aktif: <strong>{filteredKamus.length}</strong> Usulan
              </span>
            </div>
            <div className="kpi-mini-card">
              <Building2 size={15} color="#0070b8" />
              <span>
                Cakupan: <strong>{opdOptions.length - 1}</strong> OPD Pengampu
              </span>
            </div>
            <div className="kpi-mini-card">
              <MapPin size={15} color="#0070b8" />
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
                      selectedBidangBapperida !== "Semua Bidang Bapperida" ||
                      selectedOpd !== "Semua OPD" ||
                      selectedUrusan !== "Semua Bidang Urusan" ||
                      selectedAksi !== "Semua Aksi Prioritas" ||
                      activeProblemFocus) && (
                      <button
                        className="btn btn-danger-ghost"
                        onClick={() => {
                          setSearchQuery("");
                          setSelectedKategori("Semua Kategori");
                          setSelectedBidangBapperida("Semua Bidang Bapperida");
                          setSelectedOpd("Semua OPD");
                          setSelectedUrusan("Semua Bidang Urusan");
                          setSelectedAksi("Semua Aksi Prioritas");
                          setActiveProblemFocus(null);
                          setSelectedProblemFilterId("all");
                        }}
                      >
                        <RotateCcw size={11} /> Reset
                      </button>
                    )}
                  </div>

                  {/* Dropdown Fokus Masalah Spesifik Desa (Problem-to-Program Link) */}
                  <div className="filter-field-group" style={{ background: "#fff1f2", padding: "10px", borderRadius: "8px", border: "1px solid #fecdd3" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                      <label className="filter-label" style={{ marginBottom: 0, display: "flex", alignItems: "center", gap: "5px", color: "#9f1239", fontWeight: 800 }}>
                        <Target size={13} color="#e11d48" /> Fokus Masalah Desa:
                      </label>
                      <span style={{ fontSize: "10px", background: "#e11d48", color: "#fff", padding: "1px 6px", borderRadius: "99px", fontWeight: 800 }}>
                        {mappedDesaProblems.length} Masalah
                      </span>
                    </div>
                    <select
                      className="form-select form-select-sm"
                      style={{ borderColor: "#fda4af", background: "#ffffff", fontWeight: 700, fontSize: "11px", color: "#0f172a" }}
                      value={selectedProblemFilterId}
                      onChange={(e) => {
                        const val = e.target.value;
                        setSelectedProblemFilterId(val);
                        if (val === "all") {
                          setActiveProblemFocus(null);
                          setSelectedOpd("Semua OPD");
                          setSelectedBidangBapperida("Semua Bidang Bapperida");
                          setSelectedUrusan("Semua Bidang Urusan");
                          setSearchQuery("");
                        } else {
                          const found = mappedDesaProblems.find((p) => p.id === val);
                          if (found) {
                            handleApplyProblemSolution(found, `Masalah Lapangan ${activeDesaObj.nama}`);
                          }
                        }
                      }}
                      title="Pilih salah satu masalah desa untuk langsung mengunci OPD penanggung jawab dan program solusinya"
                    >
                      <option value="all">
                        🎯 Semua Masalah ({mappedDesaProblems.length} Masalah Terdeteksi)
                      </option>
                      {mappedDesaProblems.map((prob) => (
                        <option key={prob.id} value={prob.id}>
                          {prob.level === "kritis" ? "🔴" : "🟡"} {prob.problemTitle.length > 36 ? prob.problemTitle.slice(0, 36) + "..." : prob.problemTitle} ➔ {prob.opd.replace("Dinas ", "").replace("Badan ", "").slice(0, 24)}
                        </option>
                      ))}
                    </select>
                    {activeProblemFocus && (
                      <div style={{ fontSize: "10.5px", color: "#881337", marginTop: "5px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span>Kunci: <b>{activeProblemFocus.opd.replace("Dinas ", "").replace("Badan ", "").slice(0, 20)}</b></span>
                        <button
                          style={{ background: "transparent", border: "none", color: "#e11d48", fontWeight: 700, cursor: "pointer", fontSize: "10.5px", padding: 0 }}
                          onClick={() => {
                            setSelectedProblemFilterId("all");
                            setActiveProblemFocus(null);
                            setSelectedOpd("Semua OPD");
                            setSelectedBidangBapperida("Semua Bidang Bapperida");
                            setSelectedUrusan("Semua Bidang Urusan");
                            setSearchQuery("");
                          }}
                        >
                          ✕ Batalkan
                        </button>
                      </div>
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

                  {/* Dropdown PIC Bidang di Bapperida (SOTK Baru) */}
                  <div className="filter-field-group">
                    <label className="filter-label" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                      <Building2 size={13} color="var(--gov-navy-700)" /> PIC Bidang di Bapperida:
                    </label>
                    <select
                      className="form-select"
                      value={selectedBidangBapperida}
                      onChange={(e) => {
                        setSelectedBidangBapperida(e.target.value);
                        setSelectedOpd("Semua OPD");
                        setSelectedUrusan("Semua Bidang Urusan");
                      }}
                    >
                      {bidangBapperidaOptions.map((b) => (
                        <option key={b} value={b}>
                          {b === "Semua Bidang Bapperida" ? "🏢 Semua Bidang di Bapperida" : b}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Dropdown Dinas / OPD */}
                  <div className="filter-field-group">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                      <label className="filter-label" style={{ marginBottom: 0 }}>Dinas / OPD Pengampu:</label>
                      {desaTriage.opdStatusMap[selectedOpd] && (
                        <span style={{ fontSize: "10px", fontWeight: 800 }}>
                          {desaTriage.opdStatusMap[selectedOpd].status === "kritis" && (
                            desaTriage.opdStatusMap[selectedOpd].persen < 70 ? (
                              <span style={{ color: "#e11d48" }}>🔴 Sektor Kritis ({desaTriage.opdStatusMap[selectedOpd].persen}%)</span>
                            ) : (
                              <span style={{ color: "#e11d48" }}>🔴 Prioritas Masalah Lapangan (Ada Indikator Skor 1 di Desa Ini)</span>
                            )
                          )}
                          {desaTriage.opdStatusMap[selectedOpd].status === "sedang" && (
                            <span style={{ color: "#d97706" }}>🟡 Sektor Perlu Perhatian ({desaTriage.opdStatusMap[selectedOpd].persen}%)</span>
                          )}
                          {desaTriage.opdStatusMap[selectedOpd].status === "aman" && (
                            <span style={{ color: "#166534" }}>🟢 Sektor Mandiri ({desaTriage.opdStatusMap[selectedOpd].persen}%)</span>
                          )}
                        </span>
                      )}
                    </div>
                    <select
                      className="form-select"
                      value={selectedOpd}
                      onChange={(e) => setSelectedOpd(e.target.value)}
                    >
                      {opdOptions.map((opd) => {
                        if (opd === "Semua OPD") {
                          return <option key={opd} value={opd}>Semua Dinas / OPD Pengampu</option>;
                        }
                        const st = desaTriage.opdStatusMap[opd];
                        let prefix = "";
                        if (st) {
                          if (st.status === "kritis") {
                            if (st.persen < 70) {
                              prefix = `🔴 [Sektor Kritis ${st.persen}%] `;
                            } else {
                              prefix = `🔴 [Prioritas Defisit Skor 1] `;
                            }
                          } else if (st.status === "sedang") {
                            prefix = `🟡 [Perlu Perhatian ${st.persen}%] `;
                          } else if (st.status === "aman") {
                            prefix = `🟢 [Capaian Mandiri ${st.persen}%] `;
                          }
                        }
                        return (
                          <option key={opd} value={opd}>
                            {prefix}{opd}
                          </option>
                        );
                      })}
                    </select>

                    {/* Penjelasan Interaktif Status OPD Terpilih */}
                    {selectedOpd !== "Semua OPD" && desaTriage.opdStatusMap[selectedOpd]?.status === "aman" && (
                      <div style={{
                        marginTop: "6px",
                        padding: "6px 9px",
                        background: "#f0fdf4",
                        border: "1px solid #bbf7d0",
                        borderRadius: "6px",
                        fontSize: "11px",
                        color: "#166534",
                        lineHeight: 1.4
                      }}>
                        🔒 <b>Sektor Mandiri (Aman) di {activeDesaObj.nama}:</b> Capaian sektor {desaTriage.opdStatusMap[selectedOpd].dimensi} sudah tinggi (<b>{desaTriage.opdStatusMap[selectedOpd].persen}%</b>) dan tidak memiliki indikator masalah kritis (0 Skor 1). Usulan desa difokuskan ke OPD yang memiliki masalah riil.
                      </div>
                    )}
                    {selectedOpd !== "Semua OPD" && desaTriage.opdStatusMap[selectedOpd]?.status === "kritis" && desaTriage.opdStatusMap[selectedOpd].persen >= 70 && (
                      <div style={{
                        marginTop: "6px",
                        padding: "6px 9px",
                        background: "#fff1f2",
                        border: "1px solid #fecdd3",
                        borderRadius: "6px",
                        fontSize: "11px",
                        color: "#9f1239",
                        lineHeight: 1.4
                      }}>
                        💡 <b>Penjelasan Status Prioritas:</b> Capaian umum sektor {desaTriage.opdStatusMap[selectedOpd].dimensi} di desa ini bernilai <b>{desaTriage.opdStatusMap[selectedOpd].persen}%</b>. OPD ini ditandai <b>Prioritas (🔴)</b> karena memiliki <b>indikator masalah riil bernilai Skor 1</b> di lapangan yang memerlukan intervensi kegiatan.
                      </div>
                    )}
                    {selectedOpd !== "Semua OPD" && desaTriage.opdStatusMap[selectedOpd]?.status === "kritis" && desaTriage.opdStatusMap[selectedOpd].persen < 70 && (
                      <div style={{
                        marginTop: "6px",
                        padding: "6px 9px",
                        background: "#fff1f2",
                        border: "1px solid #fecdd3",
                        borderRadius: "6px",
                        fontSize: "11px",
                        color: "#9f1239",
                        lineHeight: 1.4
                      }}>
                        🚨 <b>Sektor Kritis Lapangan:</b> Capaian sektor {desaTriage.opdStatusMap[selectedOpd].dimensi} di desa ini masih di bawah ambang batas (<b>{desaTriage.opdStatusMap[selectedOpd].persen}% &lt; 70%</b>), menjadikannya prioritas penanganan utama di APBD/RKPD.
                      </div>
                    )}
                  </div>

                  {/* Dropdown Bidang Urusan */}
                  <div className="filter-field-group">
                    <label className="filter-label" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                      <Layers size={13} color="var(--gov-navy-700)" /> Bidang Urusan:
                    </label>
                    <select
                      className="form-select"
                      value={selectedUrusan}
                      onChange={(e) => setSelectedUrusan(e.target.value)}
                    >
                      {urusanOptions.map((u) => (
                        <option key={u} value={u}>
                          {u === "Semua Bidang Urusan" ? "📂 Semua Bidang Urusan" : u}
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
                        • Gunakan tombol <b>"Pilih"</b> di kolom kanan tabel untuk menyimpan usulan ke daftar <b>Usulan Desa</b> Anda.
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
                  BANNER DIAGNOSA MASALAH DESA TRIASE 3 TINGKAT (HANYA MUNCUL DI TAHUN 2027 & 2028)
                  TAHUN 2029 DIKOSONGKAN AGAR TIDAK MEMBUAT BINGUNG PENGGUNA
                  ======================================================== */}
              {selectedYear !== "2029" ? (
                <div className="village-diagnostic-banner" style={{ flexDirection: "column", gap: "14px" }}>
                {/* Baris Atas: Pemilih Wilayah 2-Tahap & Pengatur Mode Filter */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap", width: "100%" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                    <div
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "50%",
                        background: "rgba(0, 112, 184, 0.12)",
                        border: "1.5px solid #0070b8",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#0070b8",
                        flexShrink: 0
                      }}
                    >
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: "11px", fontWeight: 800, color: "#0070b8", letterSpacing: "0.5px", textTransform: "uppercase" }}>
                        DIAGNOSA KEBUTUHAN PRIORITAS DESA (SHEET RUMUSAN 2026):
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "3px", flexWrap: "wrap" }}>
                        {/* Langkah 1: Pilih Kecamatan */}
                        <select
                          className="form-select form-select-sm"
                          style={{
                            background: "#ffffff",
                            color: "#0f172a",
                            borderColor: "#0284c7",
                            fontWeight: 800,
                            fontSize: "12px",
                            padding: "5px 10px",
                            width: "auto",
                            flex: "1 1 145px",
                            boxShadow: "0 1px 3px rgba(0, 112, 184, 0.12)"
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
                          title="Langkah 1: Pilih Kecamatan"
                        >
                          {DAFTAR_KECAMATAN.map((k) => (
                            <option key={k.kode} value={k.nama}>
                              📍 Kec. {k.nama}
                            </option>
                          ))}
                        </select>

                        {/* Langkah 2: Baru Pilih Desa */}
                        <select
                          className="form-select form-select-sm"
                          style={{
                            background: "#ffffff",
                            color: "#0f172a",
                            borderColor: "#0284c7",
                            fontWeight: 700,
                            fontSize: "12px",
                            padding: "5px 12px",
                            width: "auto",
                            flex: "2 1 220px",
                            boxShadow: "0 1px 3px rgba(0, 112, 184, 0.12)"
                          }}
                          value={activeDesaPengusul}
                          onChange={(e) => setActiveDesaPengusul(e.target.value)}
                          title="Langkah 2: Pilih Desa / Kelurahan"
                        >
                          {villagesInSelectedKecamatan.map((w) => (
                            <option key={w.id} value={`${w.tipe} ${w.nama} (Kec. ${w.kecamatan})`}>
                              {w.tipe} {w.nama} • {w.statusKemendesa} (Skor ID: {w.skorKemendesa})
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
                        <span style={{ fontSize: "11.5px", color: "var(--slate-700)" }}>
                          Nilai: <b>{activeDesaObj.nilaiTotal}/635</b> ({activeDesaObj.skorBappenas}%)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Switcher Mode Filter Smart Ketat */}
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "11px", fontWeight: 800, color: "var(--slate-700)", textTransform: "uppercase" }}>
                      Filter Smart Masalah Desaku:
                    </span>
                    <div className="smart-mode-segmented">
                      <button
                        className={`smart-mode-btn ${smartFilterMode === "kritis" ? "active-kritis" : ""}`}
                        onClick={() => {
                          setSmartFilterMode("kritis");
                          showToast(`Mode Ketat Aktif: Hanya menampilkan usulan sektor KRITIS ${activeDesaObj.nama}`);
                        }}
                        title="Hanya tampilkan usulan dari OPD sektor KRITIS (<70%). Sektor AMAN dikunci."
                      >
                        🔴 Sektor Kritis Saja (Ketat)
                      </button>
                      <button
                        className={`smart-mode-btn ${smartFilterMode === "kritis_sedang" ? "active-sedang" : ""}`}
                        onClick={() => {
                          setSmartFilterMode("kritis_sedang");
                          showToast(`Menampilkan usulan sektor Kritis & Sedang ${activeDesaObj.nama}`);
                        }}
                        title="Tampilkan usulan sektor Kritis & Sedang (<80%). Sektor AMAN tetap dikunci."
                      >
                        🔴🟡 Kritis & Sedang
                      </button>
                      <button
                        className={`smart-mode-btn ${smartFilterMode === "off" ? "active-all" : ""}`}
                        onClick={() => {
                          setSmartFilterMode("off");
                          showToast("Filter cerdas dimatikan: Menampilkan seluruh kamus usulan.");
                        }}
                        title="Matikan filter masalah: Tampilkan seluruh OPD dan usulan."
                      >
                        ⚪ Semua Sektor
                      </button>
                    </div>
                  </div>
                </div>

                {/* Baris Tengah: 3 Box Triase Status Masalah Desa (🔴 Kritis, 🟡 Sedang, 🟢 Aman) */}
                <div className="triage-grid">
                  {/* BOX 1: 🔴 SEKTOR & INDIKATOR KRITIS */}
                  <div className="triage-card triage-card-kritis">
                    <div className="triage-card-header">
                      <div className="triage-title triage-title-kritis">
                        <span>🔴 1. SEKTOR &amp; INDIKATOR KRITIS</span>
                      </div>
                      <span className="triage-pill-count pill-kritis">
                        🔴 Kritis ({desaTriage.jmlKritis} Masalah)
                      </span>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                      {desaTriage.kritis.length > 0 ? (
                        desaTriage.kritis.map((k) => (
                          <div key={k.key} className="triage-item-row">
                            <div style={{ flex: 1 }}>
                              <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
                                <strong style={{ color: "#9f1239" }}>{k.nama}</strong>: {k.skor}/{k.maks}
                                {k.jmlKritis > 0 && (
                                  <span
                                    style={{
                                      background: "#ffe4e6",
                                      color: "#be123c",
                                      border: "1px solid #fda4af",
                                      borderRadius: "99px",
                                      padding: "0px 6px",
                                      fontSize: "10px",
                                      fontWeight: 800
                                    }}
                                  >
                                    {k.jmlKritis} Masalah Skor 1
                                  </span>
                                )}
                              </div>
                              {k.triageReason && (
                                <div style={{ fontSize: "10.5px", fontWeight: 700, color: "#be123c", marginTop: "2px" }}>
                                  • {k.triageReason}
                                </div>
                              )}
                              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "4px", gap: "6px", flexWrap: "wrap" }}>
                                <div className="triage-opd-preview" style={{ margin: 0 }}>
                                  OPD: {(k.opdKritisAktif && k.opdKritisAktif.length > 0 ? k.opdKritisAktif : k.opdPengampu).join(", ")}
                                </div>
                                <button
                                  className="btn btn-sm"
                                  style={{
                                    background: "#ffffff",
                                    border: "1px solid #fecdd3",
                                    color: "#be123c",
                                    fontSize: "10.5px",
                                    fontWeight: 700,
                                    padding: "2px 8px",
                                    borderRadius: "4px",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "4px",
                                    cursor: "pointer"
                                  }}
                                  onClick={() => {
                                    // Jika desa memiliki masalah kritis spesifik di sektor ini, arahkan langsung ke masalah pertama agar presisi
                                    if (k.masalahKritis && k.masalahKritis.length > 0) {
                                      const primaryProb = k.masalahKritis[0];
                                      const mapped = mapProblemToSolution(primaryProb);
                                      handleApplyProblemSolution({
                                        ...mapped,
                                        problemTitle: `${primaryProb} (Sektor ${k.nama})`
                                      }, `Sektor Kritis ${k.nama}`);
                                      return;
                                    }

                                    // Fallback cerdas jika makro-kritis tanpa butir indikator
                                    let targetOpd = "";
                                    let kw = "";
                                    let bidangBapperida = "Bidang P2M";
                                    let urusan = "";

                                    if (k.key === "sosial") {
                                      targetOpd = "Dinas Sosial, Pemberdayaan Perempuan dan Perlindungan Anak";
                                      kw = "sosial";
                                      bidangBapperida = "Bidang P2M";
                                      urusan = "";
                                    } else if (k.key === "layananDasar") {
                                      targetOpd = "Dinas Kesehatan, Pengendalian Penduduk dan KB";
                                      kw = "kesehatan";
                                      bidangBapperida = "Bidang P2M";
                                      urusan = "Urusan Kesehatan";
                                    } else if (k.key === "ekonomi") {
                                      targetOpd = "Dinas Pertanian";
                                      kw = "pertanian";
                                      bidangBapperida = "Bidang PSDAIK";
                                      urusan = "Urusan Pertanian";
                                    } else if (k.key === "lingkungan") {
                                      targetOpd = "Dinas Lingkungan Hidup";
                                      kw = "sampah";
                                      bidangBapperida = "Bidang PSDAIK";
                                      urusan = "Urusan Lingkungan Hidup";
                                    } else if (k.key === "aksesibilitas") {
                                      targetOpd = "Dinas Pekerjaan Umum, Penataan Ruang, Perumahan dan Kawasan Permukiman";
                                      kw = "jalan";
                                      bidangBapperida = "Bidang PSDAIK";
                                      urusan = "Urusan Pekerjaan Umum Dan Penataan Ruang";
                                    } else if (k.key === "tataKelola") {
                                      targetOpd = "Dinas Pemberdayaan Masyarakat dan Desa";
                                      kw = "desa";
                                      bidangBapperida = "Bidang P2M";
                                      urusan = "Urusan Pemberdayaan Masyarakat Dan Desa";
                                    } else {
                                      const opds = k.opdKritisAktif && k.opdKritisAktif.length > 0 ? k.opdKritisAktif : k.opdPengampu;
                                      targetOpd = opds[0];
                                    }

                                    handleApplyProblemSolution({
                                      problemTitle: `Sektor Kritis: ${k.nama} (${activeDesaObj.nama})`,
                                      opd: targetOpd,
                                      bidangBapperida: bidangBapperida,
                                      urusan: urusan || undefined,
                                      keyword: kw,
                                      rekomendasi: `Intervensi Terpadu Sektor ${k.nama}`
                                    }, `Sektor Kritis ${k.nama}`);
                                  }}
                                >
                                  <Sparkles size={11} /> Buka Solusi Sektor {k.nama} ➔
                                </button>
                              </div>
                            </div>
                            <span style={{ fontWeight: 800, color: "#e11d48", fontSize: "12px", marginLeft: "6px" }}>
                              {k.persen}%
                            </span>
                          </div>
                        ))
                      ) : (
                        <div style={{ fontSize: "11px", color: "var(--slate-600)", padding: "4px 0" }}>
                          ✓ Seluruh indikator dan sub-dimensi sektor telah melampaui ambang batas (0 Masalah Skor 1).
                        </div>
                      )}

                      {/* Tombol Lihat Rincian Masalah Lapangan */}
                      {desaTriage.jmlKritis > 0 && (
                        <button
                          className="btn btn-sm"
                          style={{
                            background: "#ffe4e6",
                            color: "#9f1239",
                            border: "1px solid #fecdd3",
                            fontSize: "11px",
                            fontWeight: 700,
                            marginTop: "6px",
                            width: "100%",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "6px"
                          }}
                          onClick={() => setShowProblemListModal(true)}
                          title="Lihat daftar lengkap indikator masalah kritis di desa ini"
                        >
                          <Search size={12} /> Buka Rincian {desaTriage.jmlKritis} Masalah Kritis Lapangan
                        </button>
                      )}
                    </div>
                  </div>

                  {/* BOX 2: 🟡 SEKTOR SEDANG */}
                  <div className="triage-card triage-card-sedang">
                    <div className="triage-card-header">
                      <div className="triage-title triage-title-sedang">
                        <span>🟡 2. SEKTOR SEDANG (70 - 79.9%)</span>
                      </div>
                      <span className="triage-pill-count pill-sedang">
                        🟡 Sedang ({desaTriage.jmlSedang} Indikator)
                      </span>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                      {desaTriage.sedang.length > 0 ? (
                        desaTriage.sedang.map((s) => (
                          <div key={s.key} className="triage-item-row">
                            <div style={{ flex: 1 }}>
                              <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
                                <strong style={{ color: "#854d0e" }}>{s.nama}</strong>: {s.skor}/{s.maks}
                                {s.jmlSedang > 0 && (
                                  <span
                                    style={{
                                      background: "#fef9c3",
                                      color: "#a16207",
                                      border: "1px solid #fde047",
                                      borderRadius: "99px",
                                      padding: "0px 6px",
                                      fontSize: "10px",
                                      fontWeight: 800
                                    }}
                                  >
                                    {s.jmlSedang} Indikator Sedang
                                  </span>
                                )}
                              </div>
                              {s.subNote && (
                                <div style={{ fontSize: "10.5px", fontWeight: 700, color: "#a16207", marginTop: "1px" }}>
                                  • Sub-Dimensi Sedang: {s.subNote}
                                </div>
                              )}
                              <div className="triage-opd-preview">
                                OPD: {s.opdPengampu.join(", ")}
                              </div>
                            </div>
                            <span style={{ fontWeight: 800, color: "#d97706", fontSize: "12px", marginLeft: "6px" }}>
                              {s.persen}%
                            </span>
                          </div>
                        ))
                      ) : (
                        <div style={{ fontSize: "11px", color: "var(--slate-600)", padding: "4px 0" }}>
                          ✓ Tidak ada sektor dalam kategori sedang (70–79.9%).
                        </div>
                      )}
                    </div>
                  </div>

                  {/* BOX 3: 🟢 SEKTOR AMAN (TERKUNCI) */}
                  <div className="triage-card triage-card-aman">
                    <div className="triage-card-header">
                      <div className="triage-title triage-title-aman">
                        <span>🟢 3. SEKTOR AMAN (≥ 80%) • TERKUNCI 🔒</span>
                      </div>
                      <span className="triage-pill-count pill-aman">
                        🟢 Aman ({desaTriage.jmlAman} Indikator)
                      </span>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                      {desaTriage.aman.length > 0 ? (
                        desaTriage.aman.map((a) => (
                          <div key={a.key} className="triage-item-row">
                            <div style={{ flex: 1 }}>
                              <strong style={{ color: "#14532d" }}>{a.nama}</strong>: {a.skor}/{a.maks}
                              <div className="triage-opd-preview">
                                {a.opdDibukaKhusus && a.opdDibukaKhusus.length > 0 ? (
                                  <span>
                                    🔒 {a.opdTerkunci?.length || 0} OPD Dikunci •{" "}
                                    <span style={{ color: "#be123c", fontWeight: 700 }}>
                                      🔓 {a.opdDibukaKhusus.length} OPD Dibuka ({a.jmlKritis} Skor 1)
                                    </span>
                                  </span>
                                ) : (
                                  <span>🔒 {a.opdTerkunci?.length || a.opdPengampu.length} OPD Pengampu Dikunci (0 Masalah Kritis)</span>
                                )}
                              </div>
                            </div>
                            <span style={{ fontWeight: 800, color: "#16a34a", fontSize: "12px", marginLeft: "6px" }}>
                              {a.persen}%
                            </span>
                          </div>
                        ))
                      ) : (
                        <div style={{ fontSize: "11px", color: "var(--slate-600)", padding: "4px 0" }}>
                          Belum ada sektor yang mencapai 80%.
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Notifikasi Penguncian Sektor Aman Jika Filter Smart Aktif */}
                {smartFilterMode !== "off" && (
                  <div
                    style={{
                      background: "#eff6ff",
                      border: "1.5px solid #bfdbfe",
                      borderLeft: "5px solid #0070b8",
                      borderRadius: "8px",
                      padding: "10px 14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "12px",
                      fontSize: "12px",
                      color: "#1e3a8a",
                      boxShadow: "0 1px 3px rgba(0, 112, 184, 0.08)"
                    }}
                  >
                    <span>
                      🔒 <b>PENGUNCIAN SEKTOR AMAN AKTIF:</b> Menampilkan usulan untuk <b>{desaTriage.jmlKritis} masalah kritis</b> desa. Sebanyak <b>{lockedOpdCount} usulan</b> dari <b>{desaTriage.opdAman.length} OPD</b> sektor AMAN ({desaTriage.opdAman.slice(0, 3).join(", ")}{desaTriage.opdAman.length > 3 ? ", dll" : ""}) telah <b>dikunci dan disembunyikan</b> agar usulan Musrenbang {activeDesaObj.tipe} {activeDesaObj.nama} 100% fokus menyelesaikan masalah KRITIS.
                    </span>
                    <button
                      className="btn btn-secondary btn-sm"
                      style={{ padding: "4px 10px", fontSize: "11px", whiteSpace: "nowrap", border: "1px solid #93c5fd" }}
                      onClick={() => setSmartFilterMode("off")}
                      title="Tampilkan seluruh usulan termasuk sektor aman"
                    >
                      Buka Kunci Sementara
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* CALLOUT KHUSUS TAHUN 2029: INDEKS DESA & KAMUS USULAN DIKOSONGKAN */
              <div
                style={{
                  background: "#ffffff",
                  border: "1.5px dashed #cbd5e1",
                  borderLeft: "5px solid #0284c7",
                  borderRadius: "var(--radius-lg)",
                  padding: "16px 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
                  flexWrap: "wrap",
                  marginBottom: "8px"
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", maxWidth: "780px" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "#f0f9ff",
                      border: "1.5px solid #bae6fd",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#0284c7",
                      flexShrink: 0
                    }}
                  >
                    <Info size={20} />
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginBottom: "3px" }}>
                      <span
                        style={{
                          fontSize: "10.5px",
                          fontWeight: 800,
                          padding: "2px 8px",
                          borderRadius: "10px",
                          background: "#e0f2fe",
                          color: "#0369a1",
                          letterSpacing: "0.5px"
                        }}
                      >
                        STATUS INDEKS DESA 2029
                      </span>
                      <span style={{ fontSize: "13px", fontWeight: 800, color: "var(--gov-navy-900)" }}>
                        Indeks Permasalahan Desa Tahun 2029 Dikosongkan Sementara
                      </span>
                    </div>
                    <p style={{ fontSize: "12px", color: "var(--slate-600)", margin: 0, lineHeight: 1.55 }}>
                      Sesuai arahan, penyelarasan <b>Indeks Permasalahan Desa (127 Indikator)</b> untuk <b>Tahun Perencanaan 2029</b> saat ini sengaja dikosongkan dan tidak disamakan dengan data tahun 2026/2027, karena kamus usulan dan rancangan teknis RKPD 2029 belum ditetapkan secara final oleh Bapperida &amp; OPD pengampu. Untuk melihat diagnosa masalah dan kamus usulan resmi, silakan beralih ke <b>Tahun 2027</b> atau <b>Tahun 2028</b>.
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => setSelectedYear("2027")}
                    style={{ fontSize: "12px", padding: "6px 12px" }}
                  >
                    <TableIcon size={14} /> Buka Tahun 2027
                  </button>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => setSelectedYear("2028")}
                    style={{ fontSize: "12px", padding: "6px 12px" }}
                  >
                    <BookOpen size={14} /> Buka Tahun 2028
                  </button>
                </div>
              </div>
            )}

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

              {/* BANNER FOKUS MASALAH DESA TERPILIH (PROBLEM-TO-PROGRAM ENGINE) */}
              {activeProblemFocus && (
                <div
                  id="active-problem-focus-banner"
                  style={{
                    background: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
                    border: "1px solid #93c5fd",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    marginBottom: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "10px",
                    boxShadow: "0 2px 6px rgba(37, 99, 235, 0.08)"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div
                      style={{
                        background: "#2563eb",
                        color: "#ffffff",
                        width: "38px",
                        height: "38px",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                      }}
                    >
                      <Target size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: "11px", fontWeight: 800, color: "#1d4ed8", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                        🎯 Mode Fokus Solusi Masalah: <b>{activeDesaObj.nama}</b> ({activeProblemFocus.source})
                      </div>
                      <div style={{ fontSize: "14px", fontWeight: 800, color: "#1e3a8a", marginTop: "1px" }}>
                        {activeProblemFocus.title}
                      </div>
                      <div style={{ fontSize: "11.5px", color: "#1e40af", marginTop: "3px", display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
                        <span>🏢 OPD Pengampu: <b>{activeProblemFocus.opd}</b></span>
                        <span>•</span>
                        <span>🏛️ PIC Bapperida: <b>{activeProblemFocus.bidangBapperida}</b></span>
                        {activeProblemFocus.urusan && (
                          <>
                            <span>•</span>
                            <span>📂 Urusan: <b>{activeProblemFocus.urusan}</b></span>
                          </>
                        )}
                        {activeProblemFocus.volume !== undefined && activeProblemFocus.volume > 0 && (
                          <>
                            <span>•</span>
                            <span>📊 Potensi Sasaran: <b>{Number(activeProblemFocus.volume).toLocaleString('id-ID')} {activeProblemFocus.satuan}</b></span>
                          </>
                        )}
                        <span>•</span>
                        <span style={{ background: "#2563eb", color: "#ffffff", padding: "1px 7px", borderRadius: "10px", fontSize: "11px", fontWeight: 700 }}>
                          📋 {filteredKamus.length} Program Solusi Ditemukan
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    className="btn btn-secondary btn-sm"
                    style={{
                      background: "#ffffff",
                      borderColor: "#bfdbfe",
                      color: "#1e40af",
                      fontWeight: 700
                    }}
                    onClick={() => {
                      setActiveProblemFocus(null);
                      setSelectedProblemFilterId("all");
                      setSelectedOpd("Semua OPD");
                      setSelectedBidangBapperida("Semua Bidang Bapperida");
                      setSelectedUrusan("Semua Bidang Urusan");
                      setSearchQuery("");
                      showToast("Fokus masalah direset: Menampilkan seluruh kamus usulan.");
                    }}
                  >
                    <RotateCcw size={12} /> Reset Fokus / Tampilkan Semua
                  </button>
                </div>
              )}

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
                <div className="gov-table-card" id="kamus-table-container">
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
                          <th style={{ minWidth: "220px" }}>Perangkat Daerah (OPD) & Bidang Urusan</th>
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
                                  {/* Nama OPD */}
                                  <div style={{ fontWeight: 800, color: "var(--gov-navy-900)", fontSize: "13px", lineHeight: 1.35, marginBottom: "5px" }}>
                                    {item.opd}
                                  </div>

                                  {/* Bidang Urusan (Persis seperti dokumen Excel resmi) */}
                                  {item.urusan && (
                                    <div style={{
                                      display: "inline-flex",
                                      alignItems: "center",
                                      gap: "4px",
                                      background: "#f0fdf4",
                                      border: "1px solid #bbf7d0",
                                      color: "#166534",
                                      padding: "2px 7px",
                                      borderRadius: "4px",
                                      fontSize: "11px",
                                      fontWeight: 700,
                                      marginBottom: "4px"
                                    }}>
                                      <span>📂 <b>Urusan:</b> {item.urusan}</span>
                                    </div>
                                  )}

                                  {/* PIC Bidang di Bapperida (SOTK Baru: PSDAIK, P2M, RIDA, P2EPD) */}
                                  <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "4px",
                                    fontSize: "11px",
                                    color: "#475569",
                                    background: "#f8fafc",
                                    padding: "2px 6px",
                                    borderRadius: "4px",
                                    border: "1px solid #e2e8f0",
                                    marginBottom: "4px",
                                    width: "fit-content"
                                  }}>
                                    <Building2 size={11} color="#0070b8" />
                                    <span>PIC Bapperida: <b style={{ color: "var(--gov-navy-800)" }}>{item.bidangBapperida || item.bidang}</b></span>
                                  </div>

                                  {/* Status Triage Desa */}
                                  <div style={{ display: "flex", alignItems: "center", gap: "5px", flexWrap: "wrap" }}>
                                    {desaTriage.opdKritis.includes(item.opd) && (
                                      <span className="badge-kritis-desa" title={`Sektor KRITIS di ${activeDesaObj.nama} (<70%)`}>
                                        🔴 Prioritas Kritis
                                      </span>
                                    )}
                                    {desaTriage.opdSedang.includes(item.opd) && (
                                      <span className="badge-sedang-desa" title={`Sektor SEDANG di ${activeDesaObj.nama} (70-79.9%)`}>
                                        🟡 Prioritas Sedang
                                      </span>
                                    )}
                                    {desaTriage.opdAman.includes(item.opd) && (
                                      <span className="badge-aman-locked" title={`Sektor AMAN / Mandiri di ${activeDesaObj.nama} (≥80%)`}>
                                        <Lock size={10} /> Sektor Aman
                                      </span>
                                    )}
                                  </div>
                                </td>
                                <td className="td-text-col">{item.program}</td>
                                <td className="td-text-col">{item.kegiatan}</td>
                                <td className="td-text-col">{item.subKegiatan}</td>
                                <td className="td-kegiatan">
                                  {activeProblemFocus && (
                                    <div style={{
                                      display: "inline-flex",
                                      alignItems: "center",
                                      gap: "4px",
                                      background: "#eff6ff",
                                      border: "1px solid #bfdbfe",
                                      borderRadius: "4px",
                                      padding: "2px 7px",
                                      marginBottom: "5px",
                                      fontSize: "10.5px",
                                      color: "#1d4ed8",
                                      fontWeight: 800
                                    }}>
                                      <Sparkles size={11} /> Program Solusi Masalah {activeDesaObj.nama}
                                    </div>
                                  )}
                                  <div style={{ color: "var(--slate-900)", fontWeight: 700 }}>{item.usulanKegiatan}</div>
                                  <span className="card-item-code" style={{ marginTop: "4px", display: "inline-block" }}>
                                    #{item.id}
                                  </span>
                                </td>
                                <td className="td-masalah">
                                  {activeProblemFocus && (
                                    <div style={{
                                      background: "#fff1f2",
                                      border: "1px solid #fecdd3",
                                      borderRadius: "6px",
                                      padding: "6px 9px",
                                      marginBottom: "7px",
                                      fontSize: "11px",
                                      color: "#9f1239",
                                      lineHeight: 1.4
                                    }}>
                                      <div style={{ fontSize: "10px", fontWeight: 800, textTransform: "uppercase", color: "#e11d48", letterSpacing: "0.4px" }}>
                                        🔴 Masalah Kritis Riil ({activeDesaObj.tipe} {activeDesaObj.nama}):
                                      </div>
                                      <div style={{ fontWeight: 800, marginTop: "2px", color: "#881337" }}>
                                        "{activeProblemFocus.title}"
                                      </div>
                                    </div>
                                  )}
                                  <div style={{ fontSize: "11.5px", color: "var(--slate-700)" }}>
                                    {activeProblemFocus && (
                                      <div style={{ fontSize: "10px", color: "#64748b", fontWeight: 700, marginBottom: "2px" }}>
                                        Uraian Masalah Dokumen RKPD:
                                      </div>
                                    )}
                                    {item.usulanPermasalahan}
                                  </div>
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
                                      className={`btn btn-sm ${
                                        isSaved
                                          ? "btn-success"
                                          : desaTriage.opdKritis.includes(item.opd)
                                          ? "btn-gold"
                                          : "btn-primary"
                                      }`}
                                      style={{ width: "100%" }}
                                      onClick={() => handleToggleSaveUsulan(item)}
                                      title={
                                        desaTriage.opdAman.includes(item.opd)
                                          ? `Perhatian: Sektor ini sudah AMAN (≥80%) di ${activeDesaObj.nama}`
                                          : isSaved
                                          ? "Hapus dari daftar usulan desa"
                                          : "Pilih dan simpan ke usulan desa"
                                      }
                                    >
                                      {isSaved ? (
                                        <>
                                          <CheckCircle2 size={13} /> Terpilih
                                        </>
                                      ) : desaTriage.opdKritis.includes(item.opd) ? (
                                        <>
                                          <Sparkles size={13} /> + Usulan Kritis
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
                            {desaTriage.opdKritis.includes(item.opd) && (
                              <span className="badge-kritis-desa" title={`Sektor KRITIS di ${activeDesaObj.nama} (<70%)`}>
                                🔴 Prioritas Kritis
                              </span>
                            )}
                            {desaTriage.opdSedang.includes(item.opd) && (
                              <span className="badge-sedang-desa" title={`Sektor SEDANG di ${activeDesaObj.nama} (70-79.9%)`}>
                                🟡 Prioritas Sedang
                              </span>
                            )}
                            {desaTriage.opdAman.includes(item.opd) && (
                              <span className="badge-aman-locked" title={`Sektor AMAN / Mandiri di ${activeDesaObj.nama} (≥80%)`}>
                                <Lock size={10} /> Sektor Aman
                              </span>
                            )}
                            {item.urusan && (
                              <span className="badge" style={{ background: "#f0fdf4", color: "#166534", border: "1px solid #bbf7d0", fontWeight: 700 }}>
                                📂 {item.urusan}
                              </span>
                            )}
                            <span className="badge" style={{ background: "#f8fafc", color: "#334155", border: "1px solid #cbd5e1", fontWeight: 700 }}>
                              🏢 PIC: {item.bidangBapperida || item.bidang}
                            </span>
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
                <MapPin size={16} color="var(--gov-navy-700)" /> Direktori &amp; Diagnosa 119 Desa &amp; 3 Kelurahan (Sheet RUMUSAN &amp; Raw Data 2026):
              </strong>
              <p style={{ marginTop: "4px" }}>
                Data skor indeks Kemendesa &amp; Bappenas, rincian 6 dimensi &amp; 12 sub-dimensi dari <b>Sheet RUMUSAN</b>, serta profil pemerintahan desa (<b>Kepala Desa, Koordinat, Alamat Kantor</b> dari <b>Sheet Raw Data</b>) selaras langsung dengan filter triase pada menu <b>Kamus Usulan OPD</b>.
              </p>

              {/* Strip Statistik Ringkas Sheet RUMUSAN */}
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "10px" }}>
                <span className="badge" style={{ background: "#e0f2fe", color: "#0369a1", border: "1px solid #bae6fd", fontWeight: 800 }}>
                  Total Wilayah: {desaSummaryStats.total} ({desaSummaryStats.desaCount} Desa + {desaSummaryStats.kelurahanCount} Kel.)
                </span>
                <span className="badge" style={{ background: "#dcfce7", color: "#15803d", border: "1px solid #bbf7d0", fontWeight: 800 }}>
                  Mandiri: {desaSummaryStats.mandiri} Wilayah
                </span>
                <span className="badge" style={{ background: "#dbeafe", color: "#1d4ed8", border: "1px solid #bfdbfe", fontWeight: 800 }}>
                  Maju: {desaSummaryStats.maju} Wilayah
                </span>
                {desaSummaryStats.berkembang > 0 && (
                  <span className="badge" style={{ background: "#fef3c7", color: "#b45309", border: "1px solid #fde68a", fontWeight: 800 }}>
                    Berkembang: {desaSummaryStats.berkembang} Wilayah
                  </span>
                )}
                <span className="badge" style={{ background: "#ffe4e6", color: "#be123c", border: "1px solid #fecdd3", fontWeight: 800 }}>
                  🔴 Memiliki Sektor Kritis (&lt;70%): {desaSummaryStats.adaSektorKritis} Wilayah
                </span>
              </div>
            </div>

            {/* Filter Bar Wilayah & Filter Triase Masalah Desa */}
            <div
              style={{
                background: "var(--pure-white)",
                padding: "16px 20px",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--slate-200)",
                boxShadow: "var(--shadow-sm)",
                display: "flex",
                flexDirection: "column",
                gap: "12px"
              }}
            >
              <div style={{ display: "flex", gap: "14px", alignItems: "center", flexWrap: "wrap", width: "100%" }}>
                <div style={{ flex: "2 1 240px", minWidth: 0 }} className="search-input-wrap">
                  <Search size={15} color="#64748b" style={{ position: "absolute", left: "12px" }} />
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Cari nama Desa/Kelurahan, Kepala Desa, Alamat, atau Kode Wilayah..."
                    value={desaSearch}
                    onChange={(e) => setDesaSearch(e.target.value)}
                  />
                </div>

                <div style={{ flex: "1 1 240px", minWidth: 0 }}>
                  <select
                    className="form-select"
                    value={selectedKecamatan}
                    onChange={(e) => setSelectedKecamatan(e.target.value)}
                  >
                    <option value="Semua Kecamatan">
                      📍 Semua 10 Kecamatan (119 Desa &amp; 3 Kelurahan)
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

              {/* Bilah Segmented Filter Triase Masalah Desa */}
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center", borderTop: "1px solid var(--slate-100)", paddingTop: "10px" }}>
                <span style={{ fontSize: "11.5px", fontWeight: 700, color: "var(--slate-600)", textTransform: "uppercase" }}>
                  Filter Status Masalah Desa:
                </span>
                <div className="smart-mode-segmented">
                  <button
                    className={`smart-mode-btn ${filterTriaseDesaTab === "all" ? "active-all" : ""}`}
                    onClick={() => setFilterTriaseDesaTab("all")}
                  >
                    Semua ({wilayahList.length})
                  </button>
                  <button
                    className={`smart-mode-btn ${filterTriaseDesaTab === "kritis" ? "active-kritis" : ""}`}
                    onClick={() => setFilterTriaseDesaTab("kritis")}
                    title="Tampilkan hanya desa yang memiliki sektor defisit kritis (<70%)"
                  >
                    🔴 Memiliki Sektor Kritis (&lt;70%)
                  </button>
                  <button
                    className={`smart-mode-btn ${filterTriaseDesaTab === "sedang" ? "active-sedang" : ""}`}
                    onClick={() => setFilterTriaseDesaTab("sedang")}
                    title="Tampilkan desa yang sektor terendahnya berstatus sedang (70-79.9%)"
                  >
                    🟡 Sektor Sedang (70-79.9%)
                  </button>
                  <button
                    className={`smart-mode-btn ${filterTriaseDesaTab === "aman" ? "active-kritis" : ""}`}
                    style={filterTriaseDesaTab === "aman" ? { background: "#16a34a" } : {}}
                    onClick={() => setFilterTriaseDesaTab("aman")}
                    title="Tampilkan desa yang seluruh sektornya sudah mandiri / aman (≥80%)"
                  >
                    🟢 Seluruh Sektor Aman (≥80%)
                  </button>
                </div>
              </div>
            </div>

            <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--slate-800)", padding: "0 2px" }}>
              Ditemukan <b>{filteredWilayah.length}</b> Wilayah Terdaftar di Kabupaten Lombok Barat
            </div>

            {/* Grid 2 Kolom untuk Kartu Desa (Proporsional, Tidak Melebar) */}
            <div className="desktop-desa-grid">
              {filteredWilayah.map((w) => {
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
                          Kode: <b>{w.kodeWilayah}</b> • Skor ID 2026: <b>{w.skorKemendesa}</b> (Nilai: <b>{w.nilaiTotal}/635</b>) • Bappenas: <b>{w.skorBappenas}%</b>
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

                    {/* Kotak Detail Profil Pemerintahan & Lokasi Desa (Sheet Raw Data) */}
                    <div
                      style={{
                        background: "#f0f9ff",
                        border: "1px solid #bae6fd",
                        borderLeft: "4px solid #0284c7",
                        borderRadius: "var(--radius-md)",
                        padding: "9px 12px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px",
                        fontSize: "11.5px",
                        color: "#0f172a"
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "7px", flexWrap: "wrap" }}>
                        <User size={13} color="#0284c7" style={{ flexShrink: 0 }} />
                        <span>
                          <b style={{ color: "#0369a1" }}>{w.tipe === "Kelurahan" ? "Lurah:" : "Kepala Desa:"}</b>{" "}
                          <strong>{w.namaKepalaDesa || "-"}</strong>
                          {w.statusKepalaDesa ? (
                            <span style={{ color: "#475569", marginLeft: "5px", fontSize: "10.5px" }}>
                              ({w.statusKepalaDesa})
                            </span>
                          ) : null}
                        </span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "7px", flexWrap: "wrap" }}>
                        <Navigation size={13} color="#0284c7" style={{ flexShrink: 0 }} />
                        <span>
                          <b style={{ color: "#0369a1" }}>Koordinat:</b>{" "}
                          <span style={{ fontFamily: "monospace", fontSize: "11px", color: "#1e293b" }}>
                            {w.koordinatDesa || "-"}
                          </span>
                        </span>
                      </div>
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "7px" }}>
                        <Building2 size={13} color="#0284c7" style={{ flexShrink: 0, marginTop: "2px" }} />
                        <span>
                          <b style={{ color: "#0369a1" }}>Alamat Kantor:</b> {w.alamatDesa || "-"}
                        </span>
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

                    {/* Status Triase 3 Tingkat (🔴 Kritis, 🟡 Sedang, 🟢 Aman) */}
                    {(() => {
                      const wTr = getTriageStatusDesa(w);
                      return (
                        <div
                          style={{
                            background: "#ffffff",
                            padding: "9px 12px",
                            borderRadius: "var(--radius-md)",
                            border: "1px solid var(--slate-200)",
                            display: "flex",
                            flexDirection: "column",
                            gap: "5px",
                            fontSize: "11px"
                          }}
                        >
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "4px" }}>
                            <span style={{ fontWeight: 800, color: wTr.jmlKritis > 0 ? "#e11d48" : "#64748b" }}>
                              🔴 Kritis ({wTr.jmlKritis} Masalah):{" "}
                              {wTr.kritis.length > 0
                                ? wTr.kritis
                                    .map((k) =>
                                      k.jmlKritis > 0
                                        ? `${k.nama} (${k.persen}% • ${k.jmlKritis} Skor 1)`
                                        : `${k.nama} (${k.persen}%)`
                                    )
                                    .join(", ")
                                : "Nihil (Aman)"}
                            </span>
                          </div>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "4px" }}>
                            <span style={{ fontWeight: 700, color: wTr.jmlSedang > 0 ? "#d97706" : "#64748b" }}>
                              🟡 Sedang ({wTr.jmlSedang} Indikator): {wTr.sedang.length > 0 ? wTr.sedang.map((s) => `${s.nama} (${s.persen}%)`).join(", ") : "Nihil"}
                            </span>
                            <span style={{ fontWeight: 700, color: "#16a34a" }}>
                              🟢 Aman ({wTr.jmlAman} Indikator • {wTr.aman.length} Sektor • {wTr.opdAman.length} OPD 🔒)
                            </span>
                          </div>
                        </div>
                      );
                    })()}

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
                        Detail Info &amp; Rumusan
                      </button>
                      <button
                        className="btn btn-primary"
                        style={{ flex: 1.6 }}
                        onClick={() => {
                          const desaLabel = `${w.tipe} ${w.nama} (Kec. ${w.kecamatan})`;
                          setActiveDesaPengusul(desaLabel);
                          setSelectedKecamatanPengusul(w.kecamatan);
                          setSmartFilterMode("kritis"); // Mode Ketat otomatis aktif
                          setSelectedYear((prev) => (prev === "2029" ? "2027" : prev));
                          setViewMode("table");
                          setActiveTab("kamus");
                          showToast(`Menampilkan Kamus Usulan OPD (Prioritas Kritis) untuk ${w.tipe} ${w.nama}`);
                        }}
                      >
                        <Sparkles size={14} />
                        <span>Lihat Solusi Kritis</span>
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}

        
        {/* ==================== TAB: SINERGI PATJU 360 (DATA SASARAN & TREATMENT LINTAS OPD) ==================== */}
        {activeTab === "patju" && (() => {
          const selectedPatjuDesa = PATJU_DESA_LIST.find(d => d.kodeWilayah === selectedPatjuKode) || PATJU_DESA_LIST[0];
          const matchedWilayahObj = WILAYAH_LOBAR.find(w => w.kodeWilayah === selectedPatjuDesa?.kodeWilayah);
          const desaTriageObj = matchedWilayahObj ? getTriageStatusDesa(matchedWilayahObj) : null;

          const filteredPatjuDesaList = PATJU_DESA_LIST.filter(d => {
            if (patjuKecFilter !== "Semua Kecamatan" && d.kecamatan !== patjuKecFilter) return false;
            if (patjuSearch) {
              const q = patjuSearch.toLowerCase();
              const matchName = d.namaDesa.toLowerCase().includes(q);
              const matchKec = d.kecamatan.toLowerCase().includes(q);
              const matchKode = d.kodeWilayah.includes(q);
              if (!matchName && !matchKec && !matchKode) return false;
            }
            if (patjuSeverityFilter === "desil1_tinggi" && d.kkDesil1 < 250) return false;
            if (patjuSeverityFilter === "rtlh_tinggi" && d.rtlhCount < 40) return false;
            if (patjuSeverityFilter === "jamban_tinggi" && d.tanpaJambanCount < 100) return false;
            if (patjuSeverityFilter === "berkembang" && d.statusIndeks !== "BERKEMBANG") return false;
            return true;
          });

          return (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* 1. HERO BANNER: INTEGRASI PATJU 360 & KAMUS USULAN */}
              <div className="patju-hero-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "14px" }}>
                  <div style={{ maxWidth: "820px" }}>
                    <span className="patju-hero-badge">
                      <Target size={12} strokeWidth={2.5} /> Sinergi Ekosistem Bapperida Lombok Barat
                    </span>
                    <h2 style={{ fontSize: "22px", fontWeight: 800, margin: "6px 0 10px 0", letterSpacing: "-0.3px" }}>
                      Sinergi PATJU 360 × Kamus Usulan RKPD
                    </h2>
                    <p style={{ fontSize: "13.5px", color: "#e0f2fe", lineHeight: 1.6, margin: 0 }}>
                      Mengintegrasikan <strong>Data Sasaran Kemiskinan Ekstrem (P3KE Desil 1–4)</strong> dan <strong>Defisit Empiris Indeks Desa 2026</strong> ke dalam <strong>Menu Program &amp; Treatment Terpadu Lintas OPD</strong> untuk Perencanaan RKPD 2027 dan Program Prioritas Satu Desa Satu Miliar.
                    </p>
                  </div>
                </div>

                {/* 6 Elemen Siklus Kerja Bapperida */}
                <div style={{ marginTop: "18px", paddingTop: "14px", borderTop: "1px solid rgba(255,255,255,0.15)", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {[
                    "1. Satu Data Sasaran (P3KE)",
                    "2. Satu Lokus Prioritas (122 Desa)",
                    "3. Satu Keluarga Sasaran",
                    "4. Satu Treatment Lintas OPD",
                    "5. Satu Tagging Program & Pagu",
                    "6. Satu Rapor Outcome Terukur"
                  ].map((elem, i) => (
                    <span
                      key={i}
                      style={{
                        background: "rgba(15, 23, 42, 0.35)",
                        padding: "4px 10px",
                        borderRadius: "14px",
                        fontSize: "11px",
                        fontWeight: 600,
                        color: "#bae6fd",
                        border: "1px solid rgba(186, 230, 253, 0.2)"
                      }}
                    >
                      {elem}
                    </span>
                  ))}
                </div>

                {/* KPI Metrics Agregat Kabupaten */}
                <div className="patju-kpi-grid">
                  <div className="patju-kpi-card">
                    <span className="patju-kpi-title">Total Sasaran P3KE (Desil 1-4)</span>
                    <span className="patju-kpi-val">{PATJU_STATISTIK_KABUPATEN.totalSasaranP3KE.toLocaleString('id-ID')} KK</span>
                    <span className="patju-kpi-sub">Dari total {PATJU_STATISTIK_KABUPATEN.totalKK.toLocaleString('id-ID')} KK Kab. Lombok Barat</span>
                  </div>
                  <div className="patju-kpi-card" style={{ borderLeft: "3px solid #ef4444" }}>
                    <span className="patju-kpi-title" style={{ color: "#fca5a5" }}>🔴 Miskin Ekstrem (Desil 1)</span>
                    <span className="patju-kpi-val" style={{ color: "#fef2f2" }}>{PATJU_STATISTIK_KABUPATEN.totalDesil1.toLocaleString('id-ID')} KK</span>
                    <span className="patju-kpi-sub">Target Prioritas Nol Kemiskinan Ekstrem</span>
                  </div>
                  <div className="patju-kpi-card">
                    <span className="patju-kpi-title">Keluarga Desil 2</span>
                    <span className="patju-kpi-val">{PATJU_STATISTIK_KABUPATEN.totalDesil2.toLocaleString('id-ID')} KK</span>
                    <span className="patju-kpi-sub">Bantalan Perlindungan Sosial Lanjutan</span>
                  </div>
                  <div className="patju-kpi-card">
                    <span className="patju-kpi-title">🏠 Rumah Tidak Layak Huni</span>
                    <span className="patju-kpi-val">{PATJU_STATISTIK_KABUPATEN.totalRtlh.toLocaleString('id-ID')} Unit</span>
                    <span className="patju-kpi-sub">Lokus DPUPRPKP (Perumahan &amp; BSPS)</span>
                  </div>
                  <div className="patju-kpi-card">
                    <span className="patju-kpi-title">🚽 Tanpa Jamban Sehat</span>
                    <span className="patju-kpi-val">{PATJU_STATISTIK_KABUPATEN.totalTanpaJamban.toLocaleString('id-ID')} KK</span>
                    <span className="patju-kpi-sub">Lokus DPUPRPKP (Sanitasi) &amp; Dinkes P2KB</span>
                  </div>
                  <div className="patju-kpi-card">
                    <span className="patju-kpi-title">💧 Air Minum Rentan</span>
                    <span className="patju-kpi-val">{PATJU_STATISTIK_KABUPATEN.totalAirTakTerlindung.toLocaleString('id-ID')} KK</span>
                    <span className="patju-kpi-sub">Lokus DPUPRPKP (Air Bersih Perdesaan)</span>
                  </div>
                </div>
              </div>

              {/* 2. FILTER & PENCARIAN LOKUS DESA */}
              <div
                style={{
                  background: "var(--pure-white)",
                  padding: "16px 20px",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid var(--slate-200)",
                  display: "flex",
                  gap: "14px",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center", flex: "1 1 540px", minWidth: 0 }}>
                  {/* Filter Kecamatan */}
                  <select
                    className="form-select"
                    style={{ width: "auto", flex: "1 1 180px", minWidth: "150px" }}
                    value={patjuKecFilter}
                    onChange={(e) => setPatjuKecFilter(e.target.value)}
                  >
                    <option value="Semua Kecamatan">📍 Semua Kecamatan (10)</option>
                    {DAFTAR_KECAMATAN.map((k) => (
                      <option key={k.kode} value={k.nama}>
                        Kecamatan {k.nama}
                      </option>
                    ))}
                  </select>

                  {/* Filter Tingkat Urgensi */}
                  <select
                    className="form-select"
                    style={{ width: "auto", flex: "1 1 200px", minWidth: "160px" }}
                    value={patjuSeverityFilter}
                    onChange={(e) => setPatjuSeverityFilter(e.target.value)}
                  >
                    <option value="all">⚡ Semua Tingkat Urgensi</option>
                    <option value="desil1_tinggi">🔴 Desil 1 &gt; 250 KK (Tinggi)</option>
                    <option value="rtlh_tinggi">🏠 RTLH &gt; 40 Unit (Prioritas)</option>
                    <option value="jamban_tinggi">🚽 Tanpa Jamban &gt; 100 KK</option>
                    <option value="berkembang">🏷️ Status Desa Berkembang</option>
                  </select>

                  {/* Search box */}
                  <div style={{ position: "relative", flex: "2 1 220px", minWidth: "180px" }}>
                    <Search size={14} style={{ position: "absolute", left: "10px", top: "11px", color: "var(--slate-400)" }} />
                    <input
                      type="text"
                      className="form-input"
                      style={{ paddingLeft: "32px" }}
                      placeholder="Cari Desa atau Kode Wilayah..."
                      value={patjuSearch}
                      onChange={(e) => setPatjuSearch(e.target.value)}
                    />
                  </div>
                </div>

                <div style={{ fontSize: "12px", color: "var(--slate-600)", fontWeight: 600 }}>
                  Menampilkan <strong>{filteredPatjuDesaList.length}</strong> dari 122 Wilayah
                </div>
              </div>

              {/* 3. SPLIT VIEW: DAFTAR DESA (KIRI) VS DOSSIER TERPADU (KANAN) */}
              <div className="patju-split-layout">
                {/* KOLOM KIRI: DAFTAR DESA */}
                <div className="patju-desa-list-panel">
                  <div style={{ padding: "12px 14px", borderBottom: "1px solid var(--slate-200)", background: "#f8fafc", fontWeight: 700, fontSize: "12.5px", color: "var(--gov-navy-900)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span>Pilih Lokus Wilayah</span>
                    <span className="badge" style={{ background: "var(--gov-navy-100)", color: "var(--gov-navy-800)" }}>
                      {filteredPatjuDesaList.length} Wilayah
                    </span>
                  </div>
                  <div className="patju-desa-list-scroll">
                    {filteredPatjuDesaList.map((d) => {
                      const isSelected = d.kodeWilayah === selectedPatjuDesa?.kodeWilayah;
                      return (
                        <button
                          key={d.id || d.kodeWilayah}
                          className={`patju-desa-item-btn ${isSelected ? "selected" : ""}`}
                          onClick={() => setSelectedPatjuKode(d.kodeWilayah)}
                        >
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <strong style={{ fontSize: "13px", color: isSelected ? "#0369a1" : "var(--slate-800)" }}>
                              {d.tipe} {d.namaDesa}
                            </strong>
                            <span
                              style={{
                                fontSize: "10px",
                                fontWeight: 700,
                                padding: "2px 6px",
                                borderRadius: "4px",
                                background: d.statusIndeks === "MANDIRI" ? "#dcfce7" : d.statusIndeks === "MAJU" ? "#e0f2fe" : "#fef3c7",
                                color: d.statusIndeks === "MANDIRI" ? "#15803d" : d.statusIndeks === "MAJU" ? "#0369a1" : "#b45309"
                              }}
                            >
                              {d.statusIndeks}
                            </span>
                          </div>
                          <div style={{ fontSize: "11px", color: "var(--slate-500)" }}>
                            Kecamatan {d.kecamatan} • Kode: {d.kodeWilayah}
                          </div>
                          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "4px" }}>
                            <span style={{ fontSize: "10.5px", background: "#fee2e2", color: "#991b1b", padding: "1px 5px", borderRadius: "3px", fontWeight: 700 }}>
                              Desil 1: {d.kkDesil1} KK
                            </span>
                            <span style={{ fontSize: "10.5px", background: "#fef9c3", color: "#854d0e", padding: "1px 5px", borderRadius: "3px", fontWeight: 600 }}>
                              RTLH: {d.rtlhCount}
                            </span>
                            <span style={{ fontSize: "10.5px", background: "#f1f5f9", color: "#475569", padding: "1px 5px", borderRadius: "3px", fontWeight: 600 }}>
                              Jamban: {d.tanpaJambanCount}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* KOLOM KANAN: DOSSIER TERPADU DESA TERPILIH */}
                {selectedPatjuDesa ? (
                  <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                    {/* Header Dossier Desa */}
                    <div
                      style={{
                        background: "var(--pure-white)",
                        padding: "20px 24px",
                        borderRadius: "var(--radius-lg)",
                        border: "1px solid var(--slate-200)",
                        boxShadow: "var(--shadow-sm)"
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px" }}>
                        <div>
                          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                            <span className="badge" style={{ background: "var(--gov-navy-800)", color: "#ffffff", fontWeight: 700 }}>
                              LOKUS TERPADU
                            </span>
                            <span style={{ fontSize: "12px", color: "var(--slate-500)" }}>
                              Kode Kemendagri: <strong>{selectedPatjuDesa.kodeWilayah}</strong>
                            </span>
                          </div>
                          <h3 style={{ fontSize: "22px", fontWeight: 800, color: "var(--gov-navy-900)", margin: "6px 0 2px 0" }}>
                            {selectedPatjuDesa.tipe} {selectedPatjuDesa.namaDesa}
                          </h3>
                          <div style={{ fontSize: "13px", color: "var(--slate-600)" }}>
                            Kecamatan {selectedPatjuDesa.kecamatan} • Status Indeks Desa:{" "}
                            <strong style={{ color: selectedPatjuDesa.statusIndeks === "MANDIRI" ? "#16a34a" : selectedPatjuDesa.statusIndeks === "MAJU" ? "#0284c7" : "#d97706" }}>
                              {selectedPatjuDesa.statusIndeks} (Skor: {selectedPatjuDesa.skorIndeks})
                            </strong>
                          </div>
                        </div>

                        {/* Tombol Aksi Cepat */}
                        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                          <button
                            className="btn btn-primary"
                            onClick={() => {
                              const desaLabel = `${selectedPatjuDesa.tipe} ${selectedPatjuDesa.namaDesa} (Kec. ${selectedPatjuDesa.kecamatan})`;
                              setActiveDesaPengusul(desaLabel);
                              setSelectedKecamatanPengusul(selectedPatjuDesa.kecamatan);
                              setSmartFilterMode("kritis");
                              setSelectedYear((prev) => (prev === "2029" ? "2027" : prev));
                              setViewMode("table");
                              setActiveTab("kamus");
                              showToast(`Kamus Usulan disaring untuk Lokus ${selectedPatjuDesa.namaDesa}`);
                            }}
                          >
                            <Sparkles size={14} />
                            <span>Buka Kamus Usulan Sesuai Lokus</span>
                          </button>
                        </div>
                      </div>

                      {/* Bar Breakdown Komposisi Desil */}
                      <div style={{ marginTop: "18px", paddingTop: "14px", borderTop: "1px solid var(--slate-200)" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", fontWeight: 700, marginBottom: "6px" }}>
                          <span>Komposisi Keluarga Sasaran P3KE (Total {selectedPatjuDesa.totalSasaranP3KE.toLocaleString('id-ID')} KK Sasaran)</span>
                          <span style={{ color: "#dc2626" }}>
                            Kemiskinan Ekstrem: {selectedPatjuDesa.persenMiskinEkstrem}% ({selectedPatjuDesa.kkDesil1} KK)
                          </span>
                        </div>
                        <div style={{ display: "flex", height: "16px", borderRadius: "8px", overflow: "hidden", background: "#e2e8f0" }}>
                          <div
                            style={{
                              width: `${(selectedPatjuDesa.kkDesil1 / (selectedPatjuDesa.totalSasaranP3KE || 1)) * 100}%`,
                              background: "#ef4444",
                              title: `Desil 1: ${selectedPatjuDesa.kkDesil1} KK`
                            }}
                          />
                          <div
                            style={{
                              width: `${(selectedPatjuDesa.kkDesil2 / (selectedPatjuDesa.totalSasaranP3KE || 1)) * 100}%`,
                              background: "#f97316",
                              title: `Desil 2: ${selectedPatjuDesa.kkDesil2} KK`
                            }}
                          />
                          <div
                            style={{
                              width: `${(selectedPatjuDesa.kkDesil3 / (selectedPatjuDesa.totalSasaranP3KE || 1)) * 100}%`,
                              background: "#eab308",
                              title: `Desil 3: ${selectedPatjuDesa.kkDesil3} KK`
                            }}
                          />
                          <div
                            style={{
                              width: `${(selectedPatjuDesa.kkDesil4 / (selectedPatjuDesa.totalSasaranP3KE || 1)) * 100}%`,
                              background: "#38bdf8",
                              title: `Desil 4: ${selectedPatjuDesa.kkDesil4} KK`
                            }}
                          />
                        </div>
                        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", fontSize: "11px", marginTop: "6px", color: "var(--slate-600)" }}>
                          <span><strong style={{ color: "#ef4444" }}>■</strong> Desil 1 (Ekstrem): {selectedPatjuDesa.kkDesil1} KK</span>
                          <span><strong style={{ color: "#f97316" }}>■</strong> Desil 2 (Miskin): {selectedPatjuDesa.kkDesil2} KK</span>
                          <span><strong style={{ color: "#eab308" }}>■</strong> Desil 3 (Hampir Miskin): {selectedPatjuDesa.kkDesil3} KK</span>
                          <span><strong style={{ color: "#38bdf8" }}>■</strong> Desil 4 (Rentan): {selectedPatjuDesa.kkDesil4} KK</span>
                        </div>
                      </div>

                      {/* 6 Metrik Kerentanan Fisik & Layanan Dasar */}
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(135px, 1fr))", gap: "10px", marginTop: "16px" }}>
                        <div style={{ background: "#fef2f2", border: "1px solid #fecaca", padding: "10px", borderRadius: "var(--radius-md)" }}>
                          <span style={{ fontSize: "11px", color: "#991b1b", fontWeight: 700 }}>🏠 RTLH</span>
                          <div style={{ fontSize: "18px", fontWeight: 800, color: "#b91c1c", marginTop: "2px" }}>
                            {selectedPatjuDesa.rtlhCount} <small style={{ fontSize: "11px" }}>Unit</small>
                          </div>
                        </div>
                        <div style={{ background: "#fefce8", border: "1px solid #fef08a", padding: "10px", borderRadius: "var(--radius-md)" }}>
                          <span style={{ fontSize: "11px", color: "#854d0e", fontWeight: 700 }}>🚽 Tanpa Jamban</span>
                          <div style={{ fontSize: "18px", fontWeight: 800, color: "#a16207", marginTop: "2px" }}>
                            {selectedPatjuDesa.tanpaJambanCount} <small style={{ fontSize: "11px" }}>KK</small>
                          </div>
                        </div>
                        <div style={{ background: "#f0f9ff", border: "1px solid #bae6fd", padding: "10px", borderRadius: "var(--radius-md)" }}>
                          <span style={{ fontSize: "11px", color: "#0369a1", fontWeight: 700 }}>💧 Air Rentan</span>
                          <div style={{ fontSize: "18px", fontWeight: 800, color: "#0284c7", marginTop: "2px" }}>
                            {selectedPatjuDesa.airTakTerlindungCount} <small style={{ fontSize: "11px" }}>KK</small>
                          </div>
                        </div>
                        <div style={{ background: "#fdf4ff", border: "1px solid #f5d0fe", padding: "10px", borderRadius: "var(--radius-md)" }}>
                          <span style={{ fontSize: "11px", color: "#86198f", fontWeight: 700 }}>⚡ Tanpa Listrik</span>
                          <div style={{ fontSize: "18px", fontWeight: 800, color: "#a21caf", marginTop: "2px" }}>
                            {selectedPatjuDesa.tanpaListrikCount} <small style={{ fontSize: "11px" }}>KK</small>
                          </div>
                        </div>
                        <div style={{ background: "#f8fafc", border: "1px solid #cbd5e1", padding: "10px", borderRadius: "var(--radius-md)" }}>
                          <span style={{ fontSize: "11px", color: "#334155", fontWeight: 700 }}>💼 Tanpa Aset</span>
                          <div style={{ fontSize: "18px", fontWeight: 800, color: "#1e293b", marginTop: "2px" }}>
                            {selectedPatjuDesa.tanpaAsetCount} <small style={{ fontSize: "11px" }}>KK</small>
                          </div>
                        </div>
                        <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", padding: "10px", borderRadius: "var(--radius-md)" }}>
                          <span style={{ fontSize: "11px", color: "#166534", fontWeight: 700 }}>🏥 JKN PBI</span>
                          <div style={{ fontSize: "18px", fontWeight: 800, color: "#15803d", marginTop: "2px" }}>
                            {selectedPatjuDesa.pbiCount} <small style={{ fontSize: "11px" }}>Jiwa</small>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Sinergi dengan Sheet RUMUSAN Indeks Desa */}
                    {matchedWilayahObj && desaTriageObj && (
                      <div
                        style={{
                          background: "var(--pure-white)",
                          padding: "18px 22px",
                          borderRadius: "var(--radius-lg)",
                          border: "1px solid var(--slate-200)",
                          boxShadow: "var(--shadow-sm)"
                        }}
                      >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                          <h4 style={{ fontSize: "14px", fontWeight: 800, color: "var(--gov-navy-900)", margin: 0, display: "flex", alignItems: "center", gap: "6px" }}>
                            <Layers size={15} color="#0369a1" /> Sinergi Indikator Lapangan Sheet RUMUSAN Indeks Desa 2026:
                          </h4>
                          <span style={{ fontSize: "12px", color: "#dc2626", fontWeight: 700 }}>
                            {desaTriageObj.jmlKritis} Indikator Kritis Skor 1
                          </span>
                        </div>
                        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "10px" }}>
                          {desaTriageObj.kritis.map((dim, idx) => (
                            <span
                              key={idx}
                              style={{
                                background: "#fee2e2",
                                color: "#991b1b",
                                padding: "3px 9px",
                                borderRadius: "4px",
                                fontSize: "11px",
                                fontWeight: 700
                              }}
                            >
                              🔴 {dim.nama}: {dim.persen}%
                            </span>
                          ))}
                        </div>
                        <div style={{ fontSize: "12px", color: "var(--slate-700)", background: "#f8fafc", padding: "10px 12px", borderRadius: "6px", border: "1px solid var(--slate-200)" }}>
                          <strong>Fokus Kebutuhan Lapangan Teridentifikasi: </strong>
                          {matchedWilayahObj.catatanMusrenbang}
                        </div>
                      </div>
                    )}

                    {/* KATALOG 12 REKOMENDASI TREATMENT LINTAS OPD (TERPADU) */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
                        <div>
                          <h4 style={{ fontSize: "16px", fontWeight: 800, color: "var(--gov-navy-900)", margin: 0, display: "flex", alignItems: "center", gap: "7px" }}>
                            <Award size={18} color="#d97706" /> Rekomendasi Paket Treatment Lintas OPD (PDP Compliant)
                          </h4>
                          <p style={{ fontSize: "12px", color: "var(--slate-600)", margin: "2px 0 0 0" }}>
                            Menu intervensi terpadu lintas sektor yang dapat didanai melalui RKPD 2027 OPD maupun Program Satu Desa Satu Miliar.
                          </p>
                        </div>
                        <span className="badge" style={{ background: "var(--gov-gold-100)", color: "var(--gov-gold-800)", fontWeight: 700 }}>
                          12 Paket Treatment
                        </span>
                      </div>

                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "12px" }}>
                        {PATJU_TREATMENT_CATALOG.map((trt) => {
                          let sasaranDesa = 0;
                          let satuanSasaran = "Sasaran";
                          if (trt.rekomendasiVolumeKey === "rtlhCount") {
                            sasaranDesa = selectedPatjuDesa.rtlhCount;
                            satuanSasaran = "Unit RTLH";
                          } else if (trt.rekomendasiVolumeKey === "tanpaJambanCount") {
                            sasaranDesa = selectedPatjuDesa.tanpaJambanCount;
                            satuanSasaran = "KK Tanpa Jamban";
                          } else if (trt.rekomendasiVolumeKey === "tanpaListrikCount") {
                            sasaranDesa = selectedPatjuDesa.tanpaListrikCount;
                            satuanSasaran = "KK Tanpa Listrik";
                          } else if (trt.rekomendasiVolumeKey === "tanpaAsetCount") {
                            sasaranDesa = selectedPatjuDesa.tanpaAsetCount;
                            satuanSasaran = "KK Rentan Ekonomi";
                          } else if (trt.rekomendasiVolumeKey === "nonPbiCount") {
                            sasaranDesa = selectedPatjuDesa.nonPbiCount;
                            satuanSasaran = "Jiwa Belum PBI";
                          } else {
                            sasaranDesa = selectedPatjuDesa.kkDesil1;
                            satuanSasaran = "KK Desil 1";
                          }

                          return (
                            <div key={trt.id} className="patju-treatment-card">
                              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "6px" }}>
                                <span
                                  style={{
                                    fontSize: "10px",
                                    fontWeight: 800,
                                    padding: "2px 7px",
                                    borderRadius: "4px",
                                    background: trt.strategiNasional === "Penurunan Kantong Kemiskinan" ? "#fef2f2" : trt.strategiNasional === "Peningkatan Pendapatan" ? "#ecfdf5" : "#eff6ff",
                                    color: trt.strategiNasional === "Penurunan Kantong Kemiskinan" ? "#b91c1c" : trt.strategiNasional === "Peningkatan Pendapatan" ? "#047857" : "#1d4ed8"
                                  }}
                                >
                                  {trt.strategiNasional}
                                </span>
                                <span style={{ fontSize: "10.5px", fontWeight: 700, color: "var(--slate-500)" }}>
                                  {trt.opdCode}
                                </span>
                              </div>

                              <strong style={{ fontSize: "13px", color: "var(--gov-navy-900)", lineHeight: 1.4 }}>
                                {trt.namaProgram}
                              </strong>

                              <p style={{ fontSize: "11.5px", color: "var(--slate-600)", margin: 0, lineHeight: 1.5, flex: 1 }}>
                                {trt.deskripsiPaket}
                              </p>

                              <div style={{ background: "#f8fafc", padding: "8px 10px", borderRadius: "6px", border: "1px solid var(--slate-200)", fontSize: "11px" }}>
                                <div style={{ color: "var(--slate-500)" }}>
                                  OPD Pengampu: <strong>{trt.targetOpdKamus}</strong>
                                </div>
                                <div style={{ color: "var(--gov-gold-700)", fontWeight: 700, marginTop: "2px" }}>
                                  Estimasi: {trt.estimasiAnggaran}
                                </div>
                                <div style={{ color: "#0369a1", fontWeight: 700, marginTop: "2px" }}>
                                  🎯 Potensi Sasaran: {sasaranDesa.toLocaleString('id-ID')} {satuanSasaran} di Desa ini
                                </div>
                              </div>

                              <div style={{ display: "flex", gap: "6px", marginTop: "4px" }}>
                                <button
                                  className="btn btn-secondary"
                                  style={{ flex: 1, fontSize: "11px", padding: "6px 8px", background: "#f0fdf4", borderColor: "#86efac", color: "#166534", fontWeight: 700 }}
                                  onClick={() => {
                                    const desaLabel = `${selectedPatjuDesa.tipe} ${selectedPatjuDesa.namaDesa} (Kec. ${selectedPatjuDesa.kecamatan})`;
                                    setActiveDesaPengusul(desaLabel);
                                    setSelectedKecamatanPengusul(selectedPatjuDesa.kecamatan);
                                    
                                    const kw = trt.rekomendasiVolumeKey === "rtlhCount" ? "rumah" 
                                      : trt.rekomendasiVolumeKey === "tanpaJambanCount" ? "sanitasi" 
                                      : trt.kategori.includes("UMKM") ? "usaha" 
                                      : trt.kategori.includes("Perikanan") ? "perikanan"
                                      : trt.kategori.includes("Pertanian") ? "pertanian"
                                      : trt.kategori.includes("Sosial") || (trt.targetOpdKamus && trt.targetOpdKamus.includes("Sosial")) ? "sosial"
                                      : "";

                                    handleApplyProblemSolution({
                                      problemTitle: trt.namaProgram,
                                      opd: trt.targetOpdKamus,
                                      bidangBapperida: trt.targetOpdKamus.includes("Pendidikan") || trt.targetOpdKamus.includes("Kesehatan") || trt.targetOpdKamus.includes("Sosial") ? "Bidang P2M" : "Bidang PSDAIK",
                                      urusan: trt.targetOpdKamus.includes("Pekerjaan Umum") ? (kw === "rumah" ? "Urusan Perumahan Dan Kawasan Permukiman" : "Urusan Pekerjaan Umum Dan Penataan Ruang") : "",
                                      keyword: kw,
                                      rekomendasi: trt.deskripsiPaket,
                                      volume: sasaranDesa,
                                      satuan: satuanSasaran
                                    }, `Sinergi PATJU 360 (${selectedPatjuDesa.namaDesa})`);
                                  }}
                                >
                                  <Sparkles size={12} />
                                  <span>Solusi Kamus OPD ➔</span>
                                </button>

                                <button
                                  className="btn btn-primary"
                                  style={{ flex: 1.4, fontSize: "11px", padding: "6px 8px" }}
                                  onClick={() => {
                                    const desaLabel = `${selectedPatjuDesa.tipe} ${selectedPatjuDesa.namaDesa} (Kec. ${selectedPatjuDesa.kecamatan})`;
                                    setActiveDesaPengusul(desaLabel);
                                    setSelectedKecamatanPengusul(selectedPatjuDesa.kecamatan);
                                    
                                    const customItem = {
                                      id: `patju-${trt.id}-${Date.now()}`,
                                      tahun: "2027",
                                      opd: trt.targetOpdKamus,
                                      program: `Program Penanggulangan Kemiskinan Ekstrem (${trt.kategori})`,
                                      kegiatan: trt.namaProgram,
                                      subKegiatan: `Penyediaan dan Penyaluran ${trt.namaProgram}`,
                                      usulanKegiatan: `${trt.namaProgram} di ${desaLabel}`,
                                      usulanPermasalahan: `Terdapat ${sasaranDesa.toLocaleString('id-ID')} ${satuanSasaran} yang mendesak mendapatkan intervensi perlindungan sosial / peningkatan pendapatan.`,
                                      sasaranPenerima: `Keluarga Sasaran Desil 1 & 2 ${selectedPatjuDesa.namaDesa}`,
                                      kategoriMudah: trt.kategori,
                                      aksiPrioritas: "Aksi Prioritas: Penanggulangan Kemiskinan Ekstrem",
                                      intervensiPrioritas: trt.strategiNasional
                                    };
                                    handleToggleSaveUsulan(customItem);
                                    setActiveTab("usulanku");
                                    showToast(`Treatment "${trt.namaProgram}" berhasil dimasukkan ke Usulan Desa!`);
                                  }}
                                >
                                  <Bookmark size={12} />
                                  <span>Ajukan ke Usulan</span>
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* BOX DATA DUKUNG MUSRENBANG (SIAP TEMPEL KE PROPOSAL / SIPD) */}
                    <div
                      style={{
                        background: "var(--pure-white)",
                        padding: "18px 22px",
                        borderRadius: "var(--radius-lg)",
                        border: "1px solid var(--slate-200)",
                        boxShadow: "var(--shadow-sm)"
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px", flexWrap: "wrap", gap: "8px" }}>
                        <div>
                          <h4 style={{ fontSize: "14px", fontWeight: 800, color: "var(--gov-navy-900)", margin: 0 }}>
                            📋 Data Dukung Terintegrasi (Siap Salin untuk Berita Acara &amp; SIPD)
                          </h4>
                          <span style={{ fontSize: "11.5px", color: "var(--slate-500)" }}>
                            Lampiran resmi justifikasi data kemiskinan ekstrem &amp; defisit lapangan tingkat desa.
                          </span>
                        </div>
                        <button
                          className="btn btn-secondary"
                          style={{ fontSize: "12px" }}
                          onClick={() => {
                            const dukungText = generateDataDukungPatju(selectedPatjuDesa, "Perencanaan RKPD & Satu Desa Satu Miliar");
                            navigator.clipboard?.writeText(dukungText);
                            showToast(`Data Dukung PATJU 360 ${selectedPatjuDesa.namaDesa} berhasil disalin ke clipboard!`);
                          }}
                        >
                          <Share2 size={13} />
                          <span>Salin Data Dukung</span>
                        </button>
                      </div>

                      <div className="patju-data-dukung-box">
                        {generateDataDukungPatju(selectedPatjuDesa, "Perencanaan RKPD & Satu Desa Satu Miliar")}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div style={{ background: "var(--pure-white)", padding: "40px", borderRadius: "var(--radius-lg)", textAlign: "center" }}>
                    Pilih salah satu wilayah di kolom kiri untuk melihat profil data sasaran PATJU 360.
                  </div>
                )}
              </div>
            </div>
          );
        })()}

        {/* ==================== TAB 3: USULANKU (KERANJANG USULAN DESA) ==================== */}
        {activeTab === "usulanku" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <div className="desktop-helper-banner">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
                <strong style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "14px" }}>
                  <Bookmark size={17} color="var(--gov-navy-700)" /> Keranjang Usulan Prioritas Desa • Modul Pre-SIPD RI:
                </strong>
                <span style={{ background: "#dbeafe", color: "#1e40af", padding: "2px 8px", borderRadius: "12px", fontSize: "11px", fontWeight: 800 }}>
                  🏛️ Standar Kertas Kerja SIPD Kemendagri RI
                </span>
              </div>
              <p style={{ marginTop: "6px", fontSize: "12.5px", color: "var(--slate-600)" }}>
                Kelola usulan aspirasi masyarakat desa Anda untuk RKPD Tahun {selectedYear}. Seluruh usulan yang dipilih siap diekspor ke Kertas Kerja resmi format Excel (.xlsx) dan PDF Berita Acara Pre-SIPD sebelum diinput ke aplikasi resmi SIPD-RI.
              </p>
            </div>

            {/* Panel Pengaturan Desa Pengusul & Kelompok Aksi (Input Usulan + Export) Sejajar */}
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
              {/* Sisi Kiri: Wilayah Desa Pengusul */}
              <div style={{ flex: "1 1 320px", minWidth: "280px" }}>
                <label className="filter-label" style={{ fontWeight: 800, color: "var(--gov-navy-900)" }}>
                  🏛️ Wilayah Pengusul Usulan Desa (Pre-SIPD):
                </label>
                <div style={{ display: "flex", gap: "8px", marginTop: "5px" }}>
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

              {/* Sisi Kanan: Aksi Sejajar: Input Usulan Baru + Ekspor Excel Kertas Kerja SIPD + Cetak PDF + CSV + WA */}
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
                {/* 1. Tombol Input Usulan Baru (Pindah dari Navbar Header ke sini) */}
                <button
                  className="btn btn-gold"
                  style={{ fontWeight: 800, padding: "8px 14px", display: "inline-flex", alignItems: "center", gap: "6px" }}
                  onClick={() => {
                    setNewKamusForm((prev) => ({ ...prev, tahun: selectedYear }));
                    setShowAddModal(true);
                  }}
                  title="Tambah usulan kegiatan baru ke kamus usulan desa"
                >
                  <Plus size={16} strokeWidth={2.5} />
                  <span>+ Input Usulan Baru</span>
                </button>

                {/* 2. Tombol Ekspor Excel (.xlsx) Kertas Kerja Resmi SIPD */}
                <button
                  className="btn btn-success"
                  style={{ fontWeight: 700, padding: "8px 14px", display: "inline-flex", alignItems: "center", gap: "6px" }}
                  onClick={() => setExportModalType("excel")}
                  title="Unduh Kertas Kerja Pre-SIPD format Microsoft Excel (.xlsx) resmi (Pilihan Form Terisi atau Template Blangko Kosong)"
                >
                  <FileSpreadsheet size={16} />
                  <span>Ekspor Excel (.xlsx) SIPD ▾</span>
                </button>

                {/* 3. Tombol Cetak / PDF Resmi Pre-SIPD */}
                <button
                  className="btn btn-primary"
                  style={{ fontWeight: 700, padding: "8px 14px", display: "inline-flex", alignItems: "center", gap: "6px" }}
                  onClick={() => setExportModalType("pdf")}
                  title="Cetak Berita Acara & Kertas Kerja Pre-SIPD format PDF (Pilihan Form Terisi atau Template Blangko Kosong)"
                >
                  <Printer size={16} />
                  <span>Cetak PDF Pre-SIPD ▾</span>
                </button>

                {/* 4. Tombol Unduh CSV */}
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={handleExportCSV}
                  title="Unduh data mentah format CSV"
                  style={{ padding: "8px 10px", display: "inline-flex", alignItems: "center", gap: "4px" }}
                >
                  <Download size={14} />
                  <span>CSV</span>
                </button>

                {/* 5. Tombol Salin ke WhatsApp */}
                <button
                  className="btn btn-secondary btn-sm"
                  style={{ padding: "8px 10px", display: "inline-flex", alignItems: "center", gap: "4px" }}
                  onClick={() => {
                    if (savedUsulanDesa.length === 0) {
                      showToast("Belum ada usulan yang dipilih untuk dibagikan.");
                      return;
                    }
                    const text =
                      `*DAFTAR KERTAS KERJA PRE-SIPD DESA*\n*${activeDesaPengusul}*\n*Tahun RKPD: ${selectedYear}*\n\n` +
                      savedUsulanDesa
                        .map(
                          (u, i) =>
                            `${i + 1}. [${u.opd}] *${u.usulanKegiatan}*\n   • Program: ${u.program || '-'}\n   • Sub Kegiatan: ${u.subKegiatan || '-'}\n   • Permasalahan: ${u.usulanPermasalahan}\n   • Sasaran/Lokasi: ${u.sasaranPenerima} (${u.lokasiDusun || 'Dusun Prioritas'})\n   • PIC Bapperida: ${u.bidangBapperida || u.bidang || '-'}`
                        )
                        .join("\n\n") +
                      `\n\n_Dokumen Kertas Kerja Pre-SIPD Bapperida Lombok Barat_`;
                    navigator.clipboard?.writeText(text);
                    showToast("Ringkasan Kertas Kerja berhasil disalin! Siap ditempel ke WhatsApp.");
                  }}
                  title="Salin ringkasan usulan ke WhatsApp"
                >
                  <Share2 size={14} />
                  <span>WhatsApp</span>
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
                  Buka tab <b>Kamus Usulan OPD</b>, temukan program yang dibutuhkan desa Anda, lalu tekan tombol <b>"Pilih Usulan Desa"</b>.
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

            {/* Status & Integrasi Cloudflare D1 Database */}
            <div className="gov-dossier-card d1-cloud-management-card" style={{ borderLeft: "5px solid #0284c7" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px" }}>
                <div>
                  <h3 className="dossier-title" style={{ display: "flex", alignItems: "center", gap: "8px", margin: 0 }}>
                    <Database size={18} color="#0284c7" /> Database Cloudflare D1 (Serverless SQL Online)
                  </h3>
                  <p style={{ fontSize: "12.5px", color: "var(--slate-600)", marginTop: "4px", marginBottom: 0 }}>
                    Database terpusat Bapperida Lombok Barat untuk sinkronisasi usulan seluruh 119 Desa &amp; 3 Kelurahan.
                  </p>
                </div>

                <div style={{ display: "flex", gap: "8px" }}>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={handleManualCloudSync}
                    disabled={isSyncingCloud}
                  >
                    <RefreshCw size={13} className={isSyncingCloud ? "spin-animation" : ""} />
                    <span>Cek &amp; Sinkronkan Sekarang</span>
                  </button>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "10px", marginTop: "10px" }}>
                <div style={{ background: cloudDbStatus.connected ? "#ecfdf5" : "#fefce8", padding: "12px", borderRadius: "8px", border: `1px solid ${cloudDbStatus.connected ? "#a7f3d0" : "#fef08a"}` }}>
                  <span style={{ fontSize: "11px", color: cloudDbStatus.connected ? "#065f46" : "#854d0e", fontWeight: 700 }}>STATUS KONEKSI D1:</span>
                  <div style={{ fontSize: "15px", fontWeight: 800, color: cloudDbStatus.connected ? "#047857" : "#b45309", marginTop: "2px" }}>
                    {cloudDbStatus.connected ? "🟢 TERHUBUNG ONLINE" : "🟡 STANDBY (LOKAL AKTIF)"}
                  </div>
                </div>

                <div style={{ background: "#f8fafc", padding: "12px", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                  <span style={{ fontSize: "11px", color: "#475569", fontWeight: 700 }}>KAPASITAS FREE TIER:</span>
                  <div style={{ fontSize: "15px", fontWeight: 800, color: "#0f172a", marginTop: "2px" }}>
                    5 GB Storage (500 MB/DB)
                  </div>
                </div>

                <div style={{ background: "#f8fafc", padding: "12px", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                  <span style={{ fontSize: "11px", color: "#475569", fontWeight: 700 }}>KUOTA OPERASI BACA/TULIS:</span>
                  <div style={{ fontSize: "15px", fontWeight: 800, color: "#0f172a", marginTop: "2px" }}>
                    5 Juta Baca / 100 Ribu Tulis / Hari
                  </div>
                </div>
              </div>

              {!cloudDbStatus.connected && (
                <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", padding: "12px 14px", borderRadius: "8px", fontSize: "12px", color: "#1e40af", marginTop: "6px" }}>
                  <strong>Langkah 1-Menit Mengaktifkan Database D1 di Cloudflare Dashboard:</strong>
                  <ol style={{ paddingLeft: "20px", marginTop: "6px", display: "flex", flexDirection: "column", gap: "4px" }}>
                    <li>Buka <b>Cloudflare Dashboard</b> → Menu <b>Storage &amp; Databases</b> → <b>D1 SQL Database</b> → Klik <b>Create Database</b> (beri nama: <code>kamus-usulan-db</code>).</li>
                    <li>Buka menu <b>Workers &amp; Pages</b> → Pilih project <b>kamus-usulan-bapperida-lobar</b> → Klik tab <b>Settings</b> → <b>Bindings</b>.</li>
                    <li>Klik <b>Add binding</b> → Pilih <b>D1 database</b> → Isi Variable name: <code>DB</code> dan pilih database: <code>kamus-usulan-db</code> → Klik <b>Save and Deploy</b>.</li>
                  </ol>
                </div>
              )}
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
                  <strong>Bidang Urusan:</strong>
                  <div style={{ color: "#166534", fontWeight: 700 }}>{detailItem.urusan || "(Urusan Utama)"}</div>
                </div>
                <div>
                  <strong>PIC Bidang di Bapperida:</strong>
                  <div style={{ color: "var(--gov-navy-800)", fontWeight: 700 }}>{detailItem.bidangBapperida || detailItem.bidang}</div>
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
          MODAL DETAIL DIAGNOSA TRIASE 6 DIMENSI DESA
          ======================================================== */}
      {selectedDesaDetail && (() => {
        const modalTriage = getTriageStatusDesa(selectedDesaDetail);
        return (
          <div className="desktop-modal-backdrop" onClick={() => setSelectedDesaDetail(null)}>
            <div className="desktop-modal-dialog" style={{ maxWidth: "720px" }} onClick={(e) => e.stopPropagation()}>
              <div className="modal-dialog-header">
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "3px" }}>
                    <span className="badge badge-opd">AUDIT TRIASE 6 DIMENSI SHEET RUMUSAN</span>
                    <span className={`badge ${
                      selectedDesaDetail.statusKemendesa === "MANDIRI"
                        ? "badge-mandiri"
                        : selectedDesaDetail.statusKemendesa === "MAJU"
                        ? "badge-maju"
                        : "badge-berkembang"
                    }`}>
                      {selectedDesaDetail.statusKemendesa}
                    </span>
                  </div>
                  <h3 style={{ fontSize: "16px", fontWeight: 800 }}>
                    {selectedDesaDetail.tipe} {selectedDesaDetail.nama} (Kecamatan {selectedDesaDetail.kecamatan})
                  </h3>
                  <div style={{ fontSize: "11.5px", color: "var(--slate-500)", marginTop: "2px" }}>
                    Kode Wilayah: <b>{selectedDesaDetail.kodeWilayah}</b> • Skor IDM: <b>{selectedDesaDetail.skorKemendesa}</b> • Nilai Total: <b>{selectedDesaDetail.nilaiTotal}/635</b> ({selectedDesaDetail.skorBappenas}%)
                  </div>
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

              <div className="modal-dialog-body" style={{ maxHeight: "75vh", overflowY: "auto" }}>
                {/* Bagian 1: Profil Pemerintahan & Lokasi Desa (Sheet Raw Data 2026) */}
                <div
                  style={{
                    background: "#f0f9ff",
                    border: "1px solid #bae6fd",
                    borderLeft: "5px solid #0070b8",
                    borderRadius: "var(--radius-md)",
                    padding: "12px 14px",
                    marginBottom: "12px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px"
                  }}
                >
                  <div style={{ fontSize: "11px", fontWeight: 800, color: "#0369a1", textTransform: "uppercase", letterSpacing: "0.4px", marginBottom: "2px" }}>
                    Profil Pemerintahan &amp; Lokasi Desa (Sumber: Sheet Raw Data 2026)
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "8px 16px", fontSize: "12px", color: "#0f172a" }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "7px" }}>
                      <User size={14} color="#0284c7" style={{ marginTop: "2px", flexShrink: 0 }} />
                      <div>
                        <div style={{ fontSize: "10.5px", color: "#475569", fontWeight: 700 }}>
                          {selectedDesaDetail.tipe === "Kelurahan" ? "Nama Lurah" : "Nama Kepala Desa / Plt"}
                        </div>
                        <div style={{ fontWeight: 800, color: "#0f172a" }}>
                          {selectedDesaDetail.namaKepalaDesa || "-"}
                        </div>
                        {(selectedDesaDetail.statusKepalaDesa || selectedDesaDetail.periodeKades || selectedDesaDetail.masaJabatanKades) && (
                          <div style={{ fontSize: "10.5px", color: "#475569", marginTop: "1px" }}>
                            {selectedDesaDetail.statusKepalaDesa || "-"}
                            {selectedDesaDetail.periodeKades && selectedDesaDetail.periodeKades !== "-" ? ` • ${selectedDesaDetail.periodeKades}` : ""}
                            {selectedDesaDetail.masaJabatanKades && selectedDesaDetail.masaJabatanKades !== "-" ? ` (${selectedDesaDetail.masaJabatanKades})` : ""}
                          </div>
                        )}
                      </div>
                    </div>

                    <div style={{ display: "flex", alignItems: "flex-start", gap: "7px" }}>
                      <Navigation size={14} color="#0284c7" style={{ marginTop: "2px", flexShrink: 0 }} />
                      <div>
                        <div style={{ fontSize: "10.5px", color: "#475569", fontWeight: 700 }}>
                          Titik Koordinat Desa (Timestamp)
                        </div>
                        <div style={{ fontFamily: "monospace", fontWeight: 700, color: "#0369a1", fontSize: "12px" }}>
                          {selectedDesaDetail.koordinatDesa || "-"}
                        </div>
                      </div>
                    </div>

                    <div style={{ display: "flex", alignItems: "flex-start", gap: "7px", gridColumn: "1 / -1" }}>
                      <Building2 size={14} color="#0284c7" style={{ marginTop: "2px", flexShrink: 0 }} />
                      <div>
                        <div style={{ fontSize: "10.5px", color: "#475569", fontWeight: 700 }}>
                          Alamat Lengkap Kantor Desa
                        </div>
                        <div style={{ fontWeight: 600, color: "#1e293b" }}>
                          {selectedDesaDetail.alamatDesa || "-"}
                        </div>
                      </div>
                    </div>

                    {(selectedDesaDetail.emailDesa || selectedDesaDetail.webDesa) && (
                      <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap", gridColumn: "1 / -1", borderTop: "1px dashed #bae6fd", paddingTop: "6px", fontSize: "11px", color: "#334155" }}>
                        {selectedDesaDetail.emailDesa && (
                          <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
                            <Mail size={12} color="#0284c7" /> {selectedDesaDetail.emailDesa}
                          </span>
                        )}
                        {selectedDesaDetail.webDesa && (
                          <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
                            <Globe size={12} color="#0284c7" /> {selectedDesaDetail.webDesa}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Bagian 2: Ringkasan Triase 3 Tingkat */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "10px",
                  background: "var(--slate-50)",
                  padding: "12px",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--slate-200)"
                }}>
                  <div style={{ padding: "10px", background: "#fff1f2", borderRadius: "8px", border: "1px solid #fecdd3" }}>
                    <div style={{ fontSize: "11px", fontWeight: 800, color: "#be123c" }}>
                      🔴 SEKTOR &amp; INDIKATOR KRITIS ({modalTriage.jmlKritis} Masalah)
                    </div>
                    <div style={{ fontSize: "11.5px", fontWeight: 700, color: "#881337", marginTop: "4px" }}>
                      {modalTriage.kritis.length > 0
                        ? modalTriage.kritis
                            .map((k) => (k.jmlKritis > 0 ? `${k.nama} (${k.jmlKritis} Skor 1)` : `${k.nama} (${k.persen}%)`))
                            .join(", ")
                        : "Tidak Ada (Nihil)"}
                    </div>
                    <div style={{ fontSize: "10px", color: "#9f1239", marginTop: "2px" }}>
                      {modalTriage.opdKritis.length} OPD Prioritas Kritis dibuka
                    </div>
                  </div>

                  <div style={{ padding: "10px", background: "#fefce8", borderRadius: "8px", border: "1px solid #fef08a" }}>
                    <div style={{ fontSize: "11px", fontWeight: 800, color: "#a16207" }}>
                      🟡 SEKTOR SEDANG ({modalTriage.jmlSedang} Indikator)
                    </div>
                    <div style={{ fontSize: "12px", fontWeight: 700, color: "#713f12", marginTop: "4px" }}>
                      {modalTriage.sedang.length > 0
                        ? modalTriage.sedang.map((s) => `${s.nama} (${s.persen}%)`).join(", ")
                        : "Tidak Ada (Nihil)"}
                    </div>
                    <div style={{ fontSize: "10px", color: "#854d0e", marginTop: "2px" }}>
                      Pengawalan &amp; pemeliharaan
                    </div>
                  </div>

                  <div style={{ padding: "10px", background: "#f0fdf4", borderRadius: "8px", border: "1px solid #bbf7d0" }}>
                    <div style={{ fontSize: "11px", fontWeight: 800, color: "#15803d" }}>
                      🟢 SEKTOR AMAN ({modalTriage.jmlAman} Indikator) • TERKUNCI 🔒
                    </div>
                    <div style={{ fontSize: "12px", fontWeight: 700, color: "#14532d", marginTop: "4px" }}>
                      {modalTriage.aman.length} Sektor Mandiri
                    </div>
                    <div style={{ fontSize: "10px", color: "#166534", marginTop: "2px" }}>
                      {modalTriage.opdAman.length} OPD Terkunci
                    </div>
                  </div>
                </div>

                {/* Bagian 3: Audit 6 Dimensi & 12 Sub-Dimensi Sheet RUMUSAN */}
                <div>
                  <h4 style={{ fontSize: "13px", fontWeight: 800, color: "var(--gov-navy-900)", margin: "12px 0 10px 0" }}>
                    Audit 6 Dimensi &amp; 12 Sub-Dimensi Sheet RUMUSAN (Skala Maksimum 635):
                  </h4>

                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {[
                      { key: "layananDasar", label: "1. Layanan Dasar (Pendidikan, Kesehatan, RTLH/Air Bersih)", maks: 170 },
                      { key: "sosial", label: "2. Sosial (Pemuda, Olahraga, Konflik, Kelembagaan)", maks: 85 },
                      { key: "ekonomi", label: "3. Ekonomi (Pertanian, Pangan, UMKM, Pasar Desa)", maks: 160 },
                      { key: "lingkungan", label: "4. Lingkungan (Pengelolaan Sampah, Sanitasi, Bencana)", maks: 90 },
                      { key: "aksesibilitas", label: "5. Aksesibilitas (Jalan Poros Desa, Jembatan, PJU)", maks: 50 },
                      { key: "tataKelola", label: "6. Tata Kelola (Administrasi Desa, BUMDes, SPBE)", maks: 80 }
                    ].map((dim) => {
                      const dData = selectedDesaDetail.dimensi?.[dim.key] || { skor: 0, persen: 0 };
                      const persen = dData.persen !== undefined ? dData.persen : Math.round((dData.skor / dim.maks) * 100);
                      const isKritis = persen < 70;
                      const isSedang = persen >= 70 && persen < 80;
                      const isAman = persen >= 80;

                      return (
                        <div
                          key={dim.key}
                          style={{
                            border: `1px solid ${isKritis ? "#fca5a5" : isSedang ? "#fde047" : "#bbf7d0"}`,
                            borderRadius: "var(--radius-md)",
                            padding: "10px 14px",
                            background: isKritis ? "#fff1f2" : isSedang ? "#fffbeb" : "#f0fdf4"
                          }}
                        >
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "6px" }}>
                            <div>
                              <strong style={{ fontSize: "12.5px", color: "var(--slate-900)" }}>{dim.label}</strong>
                              <span style={{ fontSize: "11px", color: "var(--slate-600)", marginLeft: "8px" }}>
                                ({dData.skor} dari {dim.maks} poin)
                              </span>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                              {dData.jmlKritis > 0 && (
                                <span
                                  style={{
                                    background: "#ffe4e6",
                                    color: "#be123c",
                                    border: "1px solid #fda4af",
                                    borderRadius: "99px",
                                    padding: "1px 7px",
                                    fontSize: "10px",
                                    fontWeight: 800
                                  }}
                                >
                                  🔴 {dData.jmlKritis} Masalah Skor 1
                                </span>
                              )}
                              <span style={{ fontSize: "13px", fontWeight: 800, color: isKritis ? "#be123c" : isSedang ? "#a16207" : "#15803d" }}>
                                {persen}%
                              </span>
                              <span className={`badge ${isKritis ? "badge-kritis-desa" : isSedang ? "badge-sedang-desa" : "badge-aman-locked"}`}>
                                {isKritis ? "🔴 Kritis" : isSedang ? "🟡 Sedang" : dData.jmlKritis > 0 ? "🟢 Makro ≥80% (Ada Skor 1)" : "🟢 Aman 🔒"}
                              </span>
                            </div>
                          </div>

                          <div className="indeks-bar-bg" style={{ marginTop: "6px", height: "7px" }}>
                            <div
                              className="indeks-bar-fill"
                              style={{
                                width: `${persen}%`,
                                background: isKritis ? "var(--gov-rose-500)" : isSedang ? "var(--gov-gold-500)" : "var(--gov-emerald-500)"
                              }}
                            />
                          </div>

                          {/* Rincian Sub-Dimensi Sheet RUMUSAN */}
                          {dData.subList && dData.subList.length > 0 && (
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "8px" }}>
                              {dData.subList.map((sub) => {
                                const subIsKritis = sub.persen < 70 || (sub.jmlKritis || 0) > 0;
                                return (
                                  <span
                                    key={sub.kode}
                                    style={{
                                      fontSize: "10.5px",
                                      background: sub.persen < 70 ? "#ffe4e6" : "rgba(255, 255, 255, 0.85)",
                                      border: `1px solid ${subIsKritis ? "#fda4af" : "rgba(148, 163, 184, 0.45)"}`,
                                      borderRadius: "6px",
                                      padding: "2px 8px",
                                      color: sub.persen < 70 ? "#9f1239" : "#1e293b",
                                      fontWeight: 600
                                    }}
                                  >
                                    <b>{sub.kode} {sub.nama}:</b> {sub.skor}/{sub.maks} ({sub.persen}%)
                                    {sub.jmlKritis > 0 ? (
                                      <span style={{ color: "#e11d48", fontWeight: 800, marginLeft: "4px" }}>
                                        • 🔴 {sub.jmlKritis} Skor 1
                                      </span>
                                    ) : null}
                                  </span>
                                );
                              })}
                            </div>
                          )}

                          <div style={{ fontSize: "11px", color: "var(--slate-600)", marginTop: "6px" }}>
                            <strong>OPD Pengampu: </strong>
                            {DIMENSI_CONFIG[dim.key]?.opdPengampu?.join(", ") || "-"}
                            {isAman && (!dData.jmlKritis || dData.jmlKritis === 0) && (
                              <span style={{ color: "#166534", fontWeight: 700, marginLeft: "6px" }}>
                                (Dikunci penuh — 0 Masalah Skor 1)
                              </span>
                            )}
                            {isAman && dData.jmlKritis > 0 && (
                              <span style={{ color: "#be123c", fontWeight: 700, marginLeft: "6px" }}>
                                (OPD terkait {dData.jmlKritis} masalah Skor 1 tetap dibuka: {(dData.opdKritisSpesifik || []).join(", ")})
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bagian 4: Daftar Indikator Masalah Kritis Lapangan (Skor 1 dari 127 Indikator Sheet RUMUSAN) */}
                {modalTriage.masalahKritisDetail && modalTriage.masalahKritisDetail.length > 0 && (
                  <div style={{ marginTop: "12px" }}>
                    <h4 style={{ fontSize: "12.5px", fontWeight: 800, color: "#9f1239", marginBottom: "8px" }}>
                      Daftar {modalTriage.jmlKritis} Indikator Masalah Kritis (Skor 1 dari 127 Indikator Sheet RUMUSAN):
                    </h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: "5px", maxHeight: "200px", overflowY: "auto", paddingRight: "4px" }}>
                      {modalTriage.masalahKritisDetail.map((indName, idx) => {
                        const mapped = mapProblemToSolution(indName);
                        return (
                          <div
                            key={idx}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              flexWrap: "wrap",
                              gap: "8px",
                              padding: "8px 12px",
                              background: "#fff5f5",
                              border: "1px solid #fecdd3",
                              borderRadius: "6px",
                              fontSize: "11.5px",
                              color: "#881337"
                            }}
                          >
                            <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", flex: "1 1 300px" }}>
                              <span style={{ background: "#e11d48", color: "#fff", fontSize: "10px", fontWeight: 800, padding: "1px 6px", borderRadius: "99px", flexShrink: 0, marginTop: "2px" }}>
                                #{idx + 1}
                              </span>
                              <div>
                                <div style={{ fontWeight: 700, color: "#881337" }}>{indName}</div>
                                <div style={{ fontSize: "10.5px", color: "#64748b", marginTop: "2px" }}>
                                  OPD Pengampu: <b style={{ color: "#0f172a" }}>{mapped.opd}</b> ({mapped.bidangBapperida})
                                </div>
                              </div>
                            </div>
                            <button
                              className="btn btn-primary btn-sm"
                              style={{ fontSize: "10.5px", padding: "3px 8px", flexShrink: 0 }}
                              onClick={() => {
                                const desaLabel = `${selectedDesaDetail.tipe} ${selectedDesaDetail.nama} (Kec. ${selectedDesaDetail.kecamatan})`;
                                setActiveDesaPengusul(desaLabel);
                                setSelectedKecamatanPengusul(selectedDesaDetail.kecamatan);
                                handleApplyProblemSolution(mapped, `Masalah ${selectedDesaDetail.nama}`);
                              }}
                            >
                              <Sparkles size={11} /> Buka Solusi Kamus ➔
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div className="dossier-problem-box" style={{ fontSize: "12px", marginTop: "12px" }}>
                  <strong>Catatan Defisit Empiris Sheet RUMUSAN: </strong>
                  {selectedDesaDetail.catatanMusrenbang}
                </div>
              </div>

              <div className="modal-dialog-footer">
                <button className="btn btn-secondary" onClick={() => setSelectedDesaDetail(null)}>
                  Tutup
                </button>
                <button
                  className="btn btn-secondary"
                  style={{ background: "#0b396b", color: "#ffffff", borderColor: "#0b396b" }}
                  onClick={() => {
                    setSelectedPatjuKode(selectedDesaDetail.kodeWilayah || "");
                    setActiveTab("patju");
                    setSelectedDesaDetail(null);
                    showToast(`Beralih ke Sinergi PATJU 360 untuk ${selectedDesaDetail.tipe} ${selectedDesaDetail.nama}`);
                  }}
                >
                  <Target size={14} /> Sinergi Data PATJU 360
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    const desaLabel = `${selectedDesaDetail.tipe} ${selectedDesaDetail.nama} (Kec. ${selectedDesaDetail.kecamatan})`;
                    setActiveDesaPengusul(desaLabel);
                    setSelectedKecamatanPengusul(selectedDesaDetail.kecamatan);
                    setSmartFilterMode("kritis");
                    setSelectedYear((prev) => (prev === "2029" ? "2027" : prev));
                    setViewMode("table");
                    setActiveTab("kamus");
                    setSelectedDesaDetail(null);
                    showToast(`Kamus Usulan OPD disaring untuk sektor KRITIS ${selectedDesaDetail.nama}`);
                  }}
                >
                  <Sparkles size={14} /> Saring Kamus Usulan OPD Sektor Kritis Desa Ini
                </button>
              </div>
            </div>
          </div>
        );
      })()}

      {/* ========================================================
          MODAL DAFTAR LENGKAP INDIKATOR MASALAH KRITIS (SKOR 1 DARI 127 INDIKATOR)
          ======================================================== */}
      {showProblemListModal && (
        <div className="desktop-modal-backdrop" onClick={() => setShowProblemListModal(false)}>
          <div className="desktop-modal-dialog" style={{ maxWidth: "680px" }} onClick={(e) => e.stopPropagation()}>
            <div className="modal-dialog-header" style={{ background: "#fff1f2", borderBottom: "1px solid #fecdd3" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span className="badge" style={{ background: "#e11d48", color: "#ffffff", fontWeight: 800 }}>
                    127 INDIKATOR EMPIRIS SHEET RUMUSAN
                  </span>
                </div>
                <h3 style={{ fontSize: "16px", fontWeight: 800, color: "#9f1239", marginTop: "3px" }}>
                  Daftar {desaTriage.jmlKritis} Masalah Kritis Lapangan (Skor 1)
                </h3>
                <div style={{ fontSize: "12px", color: "#881337" }}>
                  Wilayah: <b>{activeDesaObj.tipe} {activeDesaObj.nama}</b> (Kecamatan {activeDesaObj.kecamatan})
                </div>
              </div>
              <button
                onClick={() => setShowProblemListModal(false)}
                style={{
                  background: "#fecdd3",
                  color: "#9f1239",
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

            <div className="modal-dialog-body" style={{ maxHeight: "65vh", overflowY: "auto" }}>
              <div style={{ padding: "10px 14px", background: "#fefce8", border: "1px solid #fef08a", borderRadius: "8px", fontSize: "11.5px", color: "#854d0e", lineHeight: 1.5 }}>
                💡 <b>Catatan Regulasi Kemendesa & Bappenas:</b> Indikator berikut memiliki nilai <b>Skor 1</b> pada kuesioner resmi Indeks Desa 2026 (Sheet RUMUSAN), menandakan ketiadaan sarana, operasional nihil, atau akses yang sangat sulit. Indikator ini merupakan sasaran prioritas utama intervensi bantuan program <b>Rp 1 Miliar per Desa (SDD)</b>.
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "6px" }}>
                {desaTriage.masalahKritisDetail && desaTriage.masalahKritisDetail.length > 0 ? (
                  desaTriage.masalahKritisDetail.map((item, idx) => {
                    const mapped = mapProblemToSolution(item);
                    return (
                      <div
                        key={idx}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          justifyContent: "space-between",
                          flexWrap: "wrap",
                          gap: "10px",
                          padding: "10px 14px",
                          background: "#fff5f5",
                          border: "1px solid #fed7aa",
                          borderRadius: "8px",
                          fontSize: "12px",
                          color: "#9f1239"
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", flex: "1 1 340px" }}>
                          <span
                            style={{
                              background: "#e11d48",
                              color: "#ffffff",
                              fontSize: "10px",
                              fontWeight: 800,
                              padding: "2px 7px",
                              borderRadius: "99px",
                              flexShrink: 0,
                              marginTop: "2px"
                            }}
                          >
                            #{idx + 1}
                          </span>
                          <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: 800, color: "#881337", fontSize: "12.5px" }}>{item}</div>
                            <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", marginTop: "4px" }}>
                              <span className="badge" style={{ background: "#ffffff", color: "#334155", border: "1px solid #cbd5e1", fontSize: "10.5px", fontWeight: 700 }}>
                                🏢 {mapped.opd}
                              </span>
                              <span className="badge" style={{ background: "#eff6ff", color: "#1d4ed8", border: "1px solid #bfdbfe", fontSize: "10.5px", fontWeight: 700 }}>
                                🏛️ {mapped.bidangBapperida}
                              </span>
                              <span className="badge" style={{ background: "#f0fdf4", color: "#166534", border: "1px solid #bbf7d0", fontSize: "10.5px", fontWeight: 700 }}>
                                📂 {mapped.urusan}
                              </span>
                            </div>
                            <div style={{ fontSize: "11px", color: "#64748b", marginTop: "4px", fontStyle: "italic" }}>
                              💡 Rekomendasi Solusi: {mapped.rekomendasi}
                            </div>
                          </div>
                        </div>
                        <button
                          className="btn btn-primary btn-sm"
                          style={{ fontSize: "11px", padding: "6px 12px", flexShrink: 0, marginTop: "2px" }}
                          onClick={() => handleApplyProblemSolution(mapped, `Masalah Lapangan ${activeDesaObj.nama}`)}
                        >
                          <Sparkles size={12} /> Buka Solusi di Kamus OPD ➔
                        </button>
                      </div>
                    );
                  })
                ) : (
                  <div style={{ textAlign: "center", padding: "20px", color: "#64748b" }}>
                    Desa ini tidak memiliki indikator berskor 1. Seluruh layanan berada pada kategori Sedang atau Baik.
                  </div>
                )}
              </div>
            </div>

            <div className="modal-dialog-footer" style={{ background: "#fff1f2", borderTop: "1px solid #fecdd3" }}>
              <button className="btn btn-secondary" onClick={() => setShowProblemListModal(false)}>
                Tutup
              </button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  setSmartFilterMode("kritis");
                  setSelectedYear((prev) => (prev === "2029" ? "2027" : prev));
                  setViewMode("table");
                  setShowProblemListModal(false);
                  showToast(`Kamus Usulan OPD disaring untuk ${desaTriage.jmlKritis} masalah kritis ${activeDesaObj.nama}`);
                }}
              >
                <Sparkles size={14} /> Terapkan Saring Usulan di Kamus OPD
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

      {/* ========================================================
          MODAL PILIHAN FORMAT EKSPOR PRE-SIPD (FORM TERISI VS TEMPLATE KOSONG)
          ======================================================== */}
      {exportModalType && (
        <div className="desktop-modal-backdrop" onClick={() => setExportModalType(null)}>
          <div
            className="desktop-modal-dialog"
            style={{ maxWidth: "620px" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-dialog-header">
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                {exportModalType === "excel" ? (
                  <div
                    style={{
                      background: "#dcfce7",
                      color: "#15803d",
                      width: "42px",
                      height: "42px",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0
                    }}
                  >
                    <FileSpreadsheet size={24} />
                  </div>
                ) : (
                  <div
                    style={{
                      background: "#dbeafe",
                      color: "#1d4ed8",
                      width: "42px",
                      height: "42px",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0
                    }}
                  >
                    <Printer size={24} />
                  </div>
                )}
                <div>
                  <span className="badge badge-opd" style={{ background: exportModalType === "excel" ? "#15803d" : "var(--gov-navy-800)" }}>
                    {exportModalType === "excel" ? "EKSPOR MICROSOFT EXCEL (.XLSX)" : "CETAK BERITA ACARA PDF"}
                  </span>
                  <h3 style={{ fontSize: "16px", fontWeight: 800, marginTop: "3px", color: "var(--slate-900)" }}>
                    {exportModalType === "excel"
                      ? "Pilihan Kertas Kerja Excel Pre-SIPD"
                      : "Pilihan Dokumen Cetak PDF Pre-SIPD"}
                  </h3>
                  <div style={{ fontSize: "12px", color: "var(--slate-600)", marginTop: "2px" }}>
                    Wilayah: <b>{activeDesaPengusul}</b> • RKPD <b>{selectedYear}</b>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setExportModalType(null)}
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

            <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "14px" }}>
              {/* Pilihan 1: Form Usulan Terisi */}
              <div
                style={{
                  border: "1.5px solid var(--slate-200)",
                  borderRadius: "12px",
                  padding: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "14px",
                  background: "#ffffff",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                    <strong style={{ fontSize: "14px", color: "var(--gov-navy-900)" }}>
                      1. Form Usulan Terisi
                    </strong>
                    <span
                      style={{
                        background: savedUsulanDesa.length > 0 ? "#eff6ff" : "#f1f5f9",
                        color: savedUsulanDesa.length > 0 ? "#1d4ed8" : "#64748b",
                        border: "1px solid #bfdbfe",
                        borderRadius: "10px",
                        padding: "1px 8px",
                        fontSize: "11px",
                        fontWeight: 800
                      }}
                    >
                      {savedUsulanDesa.length} Usulan Terpilih
                    </span>
                  </div>
                  <p style={{ fontSize: "12px", color: "var(--slate-600)", margin: "5px 0 0 0", lineHeight: 1.45 }}>
                    Mencetak seluruh usulan yang telah Anda pilih ke dalam format resmi Pre-SIPD RI, lengkap dengan Nomenklatur Sub Kegiatan SIPD, OPD pengampu, uraian masalah riil lapangan, dan data dukung.
                  </p>
                </div>
                <button
                  className={`btn ${exportModalType === "excel" ? "btn-success" : "btn-primary"}`}
                  style={{ fontWeight: 800, padding: "8px 16px", flexShrink: 0 }}
                  onClick={() => {
                    if (exportModalType === "excel") {
                      handleExportExcel(false);
                    } else {
                      handleExportPDF(false);
                    }
                    setExportModalType(null);
                  }}
                  disabled={savedUsulanDesa.length === 0}
                  title={savedUsulanDesa.length === 0 ? "Pilih minimal 1 usulan untuk opsi ini" : "Unduh sekarang"}
                >
                  {exportModalType === "excel" ? "Unduh Excel Terisi" : "Cetak PDF Terisi"}
                </button>
              </div>

              {/* Pilihan 2: Template / Blangko Kosong */}
              <div
                style={{
                  border: "1.5px solid #fed7aa",
                  borderRadius: "12px",
                  padding: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "14px",
                  background: "#fffaf5",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                    <strong style={{ fontSize: "14px", color: "#9a3412" }}>
                      2. Template / Blangko Kosong
                    </strong>
                    <span
                      style={{
                        background: "#ffedd5",
                        color: "#c2410c",
                        border: "1px solid #fed7aa",
                        borderRadius: "10px",
                        padding: "1px 8px",
                        fontSize: "11px",
                        fontWeight: 800
                      }}
                    >
                      Kertas Kerja Blangko Siap Isi
                    </span>
                  </div>
                  <p style={{ fontSize: "12px", color: "#7c2d12", margin: "5px 0 0 0", lineHeight: 1.45 }}>
                    Format blangko kosong resmi SIPD-RI lengkap dengan Kop Surat Bapperida Lobar, 19 kolom kertas kerja, dan lembar tanda tangan. Siap dicetak untuk notulensi dan pencatatan aspirasi manual saat Musdes.
                  </p>
                </div>
                <button
                  className="btn btn-gold"
                  style={{ fontWeight: 800, padding: "8px 16px", flexShrink: 0 }}
                  onClick={() => {
                    if (exportModalType === "excel") {
                      handleExportExcel(true);
                    } else {
                      handleExportPDF(true);
                    }
                    setExportModalType(null);
                  }}
                >
                  {exportModalType === "excel" ? "Unduh Template Kosong" : "Cetak Blangko Kosong"}
                </button>
              </div>
            </div>

            <div className="modal-dialog-footer" style={{ justifyContent: "flex-end" }}>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setExportModalType(null)}
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
