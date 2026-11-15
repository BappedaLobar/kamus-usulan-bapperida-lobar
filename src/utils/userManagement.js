// Modul Manajemen Pengguna, Role Based Access Control (RBAC), dan 2FA Google Authenticator
// Standar Keamanan BSSN, SPBE & OWASP untuk Aplikasi Pre-SIPD RI Bapperida Lombok Barat

import { saveSecureData, loadSecureData, logSecurityEvent } from "./secureStorage";

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

export const DEFAULT_SYSTEM_USERS = [
  {
    id: "USR-001",
    username: "admin.bapperida",
    nama: "Administrator Perencanaan",
    nip: "198205142008011005",
    role: "Super Admin",
    instansi: "Bapperida Kab. Lombok Barat",
    status: "Aktif",
    googleAuthEnabled: true,
    googleAuthSecret: "JBSWY3DPEHPK3PXP",
    lastLogin: "2026-11-15T20:15:00Z",
    updatedAt: "2026-11-15T08:00:00Z"
  },
  {
    id: "USR-002",
    username: "verifikator.psdaik",
    nama: "Ir. Wayan Suarta, M.Si",
    nip: "197803122005011008",
    role: "Verifikator",
    instansi: "Bapperida (Bidang PSDAIK)",
    status: "Aktif",
    googleAuthEnabled: true,
    googleAuthSecret: "HXDMVJECJJWSRB3H",
    lastLogin: "2026-11-15T19:40:00Z",
    updatedAt: "2026-11-15T08:30:00Z"
  },
  {
    id: "USR-003",
    username: "verifikator.p2m",
    nama: "Baiq Nurhayati, S.Sos",
    nip: "198507202010012014",
    role: "Verifikator",
    instansi: "Bapperida (Bidang P2M)",
    status: "Aktif",
    googleAuthEnabled: false,
    googleAuthSecret: "MZXW6YTBOI26FA99",
    lastLogin: "2026-11-15T18:22:00Z",
    updatedAt: "2026-11-15T09:00:00Z"
  },
  {
    id: "USR-004",
    username: "operator.gerung",
    nama: "Fathurrahman, S.IP",
    nip: "199201102020121002",
    role: "Operator Desa",
    instansi: "Desa Beleke (Kec. Gerung)",
    status: "Aktif",
    googleAuthEnabled: false,
    googleAuthSecret: "KRSXG5CTMVRXEZLU",
    lastLogin: "2026-11-15T17:05:00Z",
    updatedAt: "2026-11-15T09:15:00Z"
  },
  {
    id: "USR-005",
    username: "operator.narmada",
    nama: "Lalu Agus Hendra",
    nip: "199406182022031005",
    role: "Operator Desa",
    instansi: "Desa Lembuak (Kec. Narmada)",
    status: "Aktif",
    googleAuthEnabled: true,
    googleAuthSecret: "OBXXK43VMVZCA5DI",
    lastLogin: "2026-11-15T20:50:00Z",
    updatedAt: "2026-11-15T09:30:00Z"
  },
  {
    id: "USR-006",
    username: "operator.sekotong",
    nama: "H. Sukriadi, S.Pd",
    nip: "198811232015021001",
    role: "Operator Desa",
    instansi: "Desa Sekotong Barat (Kec. Sekotong)",
    status: "Aktif",
    googleAuthEnabled: false,
    googleAuthSecret: "N54XC3DFOR2XAZLS",
    lastLogin: "2026-11-15T16:11:00Z",
    updatedAt: "2026-11-15T10:00:00Z"
  }
];

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
  const res = loadSecureData("USER_ACCOUNTS", DEFAULT_SYSTEM_USERS);
  if (Array.isArray(res.data) && res.data.length > 0) {
    return res.data;
  }
  return DEFAULT_SYSTEM_USERS;
}

// Simpan daftar akun ke storage aman
export function saveUserAccounts(users) {
  return saveSecureData("USER_ACCOUNTS", users);
}
