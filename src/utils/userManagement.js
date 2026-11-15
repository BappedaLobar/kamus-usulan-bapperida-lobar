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

export const DEFAULT_SYSTEM_USERS = [];

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
  const res = loadSecureData("USER_ACCOUNTS", []);
  if (Array.isArray(res.data)) {
    return res.data;
  }
  return [];
}

// Simpan daftar akun ke storage aman
export function saveUserAccounts(users) {
  return saveSecureData("USER_ACCOUNTS", users);
}
