// Modul Manajemen Pengguna, Role Based Access Control (RBAC), dan 2FA Google Authenticator
// Standar Keamanan BSSN, SPBE & OWASP untuk Aplikasi Pre-SIPD RI Bapperida Lombok Barat

import { saveSecureData, loadSecureData, logSecurityEvent } from "./secureStorage";
import { WILAYAH_LOBAR } from "../data/desaLobarData.js";
import rawKamusData from "../data/kamusData.json";

export const USER_ROLES = {
  SUPER_ADMIN: "Super Admin",
  VERIFIKATOR: "Verifikator",
  OPERATOR_DESA: "Operator Desa"
};

export const ROLE_DETAILS = {
  "Super Admin": {
    label: "Super Admin",
    color: "#be123c",
    bg: "#ffe4e6",
    border: "#fecdd3",
    desc: "Akses penuh konfigurasi sistem, kelola seluruh pengguna, dan validasi akhir RKPD",
    badgeClass: "badge-super-admin"
  },
  "Verifikator": {
    label: "Verifikator",
    color: "#1d4ed8",
    bg: "#eff6ff",
    border: "#bfdbfe",
    desc: "Bapperida & OPD Pengampu: Meninjau, memverifikasi usulan, dan memberikan rekomendasi teknis",
    badgeClass: "badge-verifikator"
  },
  "Operator Desa": {
    label: "Operator Desa",
    color: "#15803d",
    bg: "#f0fdf4",
    border: "#bbf7d0",
    desc: "Pemerintah Desa / Kelurahan: Menginput usulan prioritas desa dan mencetak Kertas Kerja Pre-SIPD",
    badgeClass: "badge-operator-desa"
  }
};

// Pemetaan Singkatan Username OPD Verifikator Resmi
export const OPD_VERIFIKATOR_SLUGS = {
  "Dinas Kelautan, Perikanan dan Ketahanan Pangan": "dkpkp",
  "Dinas Pertanian": "pertanian",
  "Dinas Perdagangan": "perdagangan",
  "Dinas Perindustrian, Koperasi, UKM dan Tenaga Kerja": "disperindag",
  "Dinas Pekerjaan Umum, Penataan Ruang, Perumahan dan Kawasan Permukiman": "pupr",
  "Badan Penanggulangan Bencana Daerah": "bpbd",
  "Dinas Lingkungan Hidup": "dlh",
  "Dinas Perhubungan": "dishub",
  "Dinas Pariwisata, Ekonomi Kreatif, Pemuda dan Olahraga": "dispar",
  "Dinas Pendidikan dan Kebudayaan": "dikbud",
  "Dinas Kesehatan, Pengendalian Penduduk dan KB": "dikes",
  "Satuan Polisi Pamong Praja": "satpolpp",
  "Dinas Sosial, Pemberdayaan Perempuan dan Perlindungan Anak": "dinsos",
  "Dinas Pemberdayaan Masyarakat dan Desa": "dpmd",
  "Dinas Kearsipan dan Perpustakaan": "disarpus",
  "Sekretariat Daerah (Bagian Kesra)": "kesra",
  "Badan Kesatuan Bangsa dan Politik": "bakesbangpol",
  "Dinas Pemadam Kebakaran dan Penyelamatan": "damkar",
  "Dinas Komunikasi, Informatika dan Statistik": "diskominfotik",
  "Badan Keuangan dan Pengelolaan Aset Daerah": "bkpad"
};

// Builder: Hasilkan Daftar 143 Akun Siap Pakai (Super Admin, 20 Verifikator OPD, 122 Operator Desa)
export function buildStandardSystemUsers() {
  // 1. Super Admin Bapperida
  const admin = {
    id: "USR-ADMIN-01",
    nama: "Administrator Utama Bapperida",
    username: "admin.bapperida",
    nip: "197903152005011008",
    password: "Bapperida#Lobar2027!",
    role: "Super Admin",
    instansi: "Bapperida Kab. Lombok Barat",
    status: "Aktif",
    googleAuthEnabled: false,
    updatedAt: "2026-11-15T00:00:00.000Z"
  };

  // 2. Verifikator OPD (20 OPD across 2027 & 2028)
  const opd2027 = [...new Set((rawKamusData.kamus["2027"] || []).map((i) => i.opd))].filter(Boolean);
  const opd2028 = [...new Set((rawKamusData.kamus["2028"] || []).map((i) => i.opd))].filter(Boolean);
  const allOpds = [...new Set([...opd2027, ...opd2028])];

  const verifikators = allOpds.map((opd, idx) => {
    const slug = OPD_VERIFIKATOR_SLUGS[opd] || `opd${idx + 1}`;
    const activeYears = [];
    if (opd2027.includes(opd)) activeYears.push("2027");
    if (opd2028.includes(opd)) activeYears.push("2028");

    return {
      id: `USR-VERIF-${slug.toUpperCase()}`,
      nama: `Verifikator ${opd}`,
      username: `verif.${slug}`,
      nip: `1982${String(idx + 1).padStart(2, "0")}15201001100${idx + 1}`,
      password: "Verif#Lobar2027!",
      role: "Verifikator",
      instansi: opd,
      opd: opd,
      tahunAktif: activeYears,
      status: "Aktif",
      googleAuthEnabled: false,
      updatedAt: "2026-11-15T00:00:00.000Z"
    };
  });

  // 3. Operator Desa (122 Desa & Kelurahan di Lombok Barat)
  const usedSlugs = new Set();
  const operatorDesaList = (WILAYAH_LOBAR || []).map((w) => {
    const rawSlug = w.nama.toLowerCase().replace(/[^a-z0-9]/g, "");
    let uname = `op.${rawSlug}`;
    if (usedSlugs.has(uname)) {
      uname = `op.${rawSlug}.${w.kecamatan.toLowerCase().replace(/[^a-z0-9]/g, "")}`;
    }
    usedSlugs.add(uname);

    return {
      id: `USR-DESA-${w.kodeWilayah}`,
      nama: `Operator ${w.tipe} ${w.nama}`,
      username: uname,
      nip: w.kodeWilayah,
      password: "Desa#Lobar2027!",
      role: "Operator Desa",
      instansi: `${w.tipe} ${w.nama} (Kec. ${w.kecamatan})`,
      desa: w.nama,
      kecamatan: w.kecamatan,
      tipe: w.tipe,
      kodeWilayah: w.kodeWilayah,
      status: "Aktif",
      googleAuthEnabled: false,
      updatedAt: "2026-11-15T00:00:00.000Z"
    };
  });

  return [admin, ...verifikators, ...operatorDesaList];
}

export const DEFAULT_SYSTEM_USERS = buildStandardSystemUsers();

// Helper: Reset ke Akun Standar Resmi
export function resetToDefaultUsers() {
  saveUserAccounts(DEFAULT_SYSTEM_USERS);
  logSecurityEvent("RESET_KE_DEFAULT", "Memulihkan 143 akun resmi sistem (Super Admin, 20 OPD Verifikator, 122 Desa)", "Super Admin");
  return DEFAULT_SYSTEM_USERS;
}

// Helper: Hapus seluruh pengguna (Clean Wipe)
export function clearAllUsers() {
  saveUserAccounts([]);
  logSecurityEvent("RESET_SEMUA_PENGGUNA", "Seluruh data akun pengguna telah dihapus / di-reset bersih", "Super Admin");
  return [];
}

// Helper: Hasilkan Secret Key Base32 untuk Google Authenticator
export function generateBase32Secret(length = 16) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
  let secret = "";
  for (let i = 0; i < length; i++) {
    secret += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return secret;
}

// Helper: Hasilkan Password Acak Kuat
export function generateStrongPassword() {
  const upper = "ABCDEFGHJKLMNPQRSTUVWXYZ";
  const lower = "abcdefghijkmnopqrstuvwxyz";
  const nums = "23456789";
  const special = "#@!%*=";
  
  let pwd = "";
  pwd += upper.charAt(Math.floor(Math.random() * upper.length));
  pwd += lower.charAt(Math.floor(Math.random() * lower.length));
  pwd += nums.charAt(Math.floor(Math.random() * nums.length));
  pwd += special.charAt(Math.floor(Math.random() * special.length));
  
  const all = upper + lower + nums + special;
  for (let i = 0; i < 6; i++) {
    pwd += all.charAt(Math.floor(Math.random() * all.length));
  }
  return `Lobar#${pwd}`;
}

// Helper: URL TOTP Resmi untuk Google Authenticator
export function buildOtpAuthUri(username, secret, issuer = "Bapperida Lombok Barat") {
  const cleanUser = encodeURIComponent(username || "user");
  const cleanIssuer = encodeURIComponent(issuer);
  return `otpauth://totp/${cleanIssuer}:${cleanUser}?secret=${secret}&issuer=${cleanIssuer}&algorithm=SHA1&digits=6&period=30`;
}

// Baca daftar akun dari storage aman
export function loadUserAccounts() {
  const res = loadSecureData("USER_ACCOUNTS", null);
  if (Array.isArray(res.data) && res.data.length > 0) {
    return res.data;
  }
  // Default: selalu siap dengan 143 akun standar
  saveSecureData("USER_ACCOUNTS", DEFAULT_SYSTEM_USERS);
  return DEFAULT_SYSTEM_USERS;
}

// Simpan daftar akun ke storage aman
export function saveUserAccounts(users) {
  return saveSecureData("USER_ACCOUNTS", users);
}
