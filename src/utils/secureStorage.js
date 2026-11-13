// Modul Keamanan Siber & Penyimpanan Lokal Terproteksi (Secure LocalStorage Layer)
// Standar OWASP Client-Side Security: Input Sanitization (Anti-XSS), Integrity Checksum, Audit Trail

const STORAGE_PREFIX = "BAPPERIDA_LOBAR_SEC_V2_";
const SECRET_SALT = "LOBAR_PATUT_PATUH_PATJU_2027_2029_SEC_SALT";

// 1. Sanitasi Input Ketat (Mencegah XSS / Script Injection)
export function sanitizeInput(value) {
  if (value === null || value === undefined) return "";
  if (typeof value !== "string") return value;
  return value
    .replace(/<\s*script[^>]*>[\s\S]*?<\s*\/\s*script\s*>/gi, "")
    .replace(/<\/?[a-z][^>]*>/gi, "")
    .replace(/javascript\s*:/gi, "")
    .replace(/on\w+\s*=/gi, "")
    .trim();
}

export function sanitizeObject(obj) {
  if (Array.isArray(obj)) {
    return obj.map((item) => sanitizeObject(item));
  }
  if (obj && typeof obj === "object") {
    const cleaned = {};
    for (const [k, v] of Object.entries(obj)) {
      cleaned[k] = sanitizeObject(v);
    }
    return cleaned;
  }
  if (typeof obj === "string") {
    return sanitizeInput(obj);
  }
  return obj;
}

// 2. Fungsi Hash Integritas (FNV-1a / DJB2 Dual 64-bit Hex Signature)
export function computeIntegrityHash(payloadStr) {
  const input = `${SECRET_SALT}::${payloadStr}::${SECRET_SALT}`;
  let h1 = 0xdeadbeef ^ input.length;
  let h2 = 0x41c6ce57 ^ input.length;
  for (let i = 0, ch; i < input.length; i++) {
    ch = input.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  const hex1 = (h1 >>> 0).toString(16).padStart(8, "0");
  const hex2 = (h2 >>> 0).toString(16).padStart(8, "0");
  return `SHA256-SIM-${hex1}${hex2}`.toUpperCase();
}

// 3. Simpan ke LocalStorage dengan Envelope Terproteksi & Checksum
export function saveSecureData(key, data) {
  try {
    const cleanData = sanitizeObject(data);
    const jsonPayload = JSON.stringify(cleanData);
    const checksum = computeIntegrityHash(jsonPayload);
    const envelope = {
      version: "2.0",
      updatedAt: new Date().toISOString(),
      checksum,
      payload: cleanData
    };
    localStorage.setItem(`${STORAGE_PREFIX}${key}`, JSON.stringify(envelope));
    return { ok: true, checksum, updatedAt: envelope.updatedAt };
  } catch (err) {
    console.error("Gagal menyimpan ke Secure LocalStorage:", err);
    return { ok: false, error: err.message };
  }
}

// 4. Baca dari LocalStorage dengan Verifikasi Integritas Data
export function loadSecureData(key, fallbackValue = null) {
  try {
    const raw = localStorage.getItem(`${STORAGE_PREFIX}${key}`);
    if (!raw) return { data: fallbackValue, verified: true, status: "DEFAULT_INIT" };

    const envelope = JSON.parse(raw);
    if (!envelope || !envelope.checksum || envelope.payload === undefined) {
      return { data: fallbackValue, verified: false, status: "INVALID_ENVELOPE" };
    }

    const expectedHash = computeIntegrityHash(JSON.stringify(envelope.payload));
    if (expectedHash !== envelope.checksum) {
      logSecurityEvent("PERINGATAN_INTEGRITAS", `Terdeteksi modifikasi tidak sah pada key [${key}]. Data dipulihkan ke standar aman.`);
      return { data: fallbackValue, verified: false, status: "TAMPER_DETECTED" };
    }

    return {
      data: envelope.payload,
      verified: true,
      checksum: envelope.checksum,
      updatedAt: envelope.updatedAt,
      status: "VERIFIED_OK"
    };
  } catch (err) {
    return { data: fallbackValue, verified: false, status: "PARSE_ERROR" };
  }
}

// 5. Pencatatan Audit Trail Keamanan (Security Audit Log)
export function logSecurityEvent(action, detail, actor = "Operator Desa / Umum") {
  try {
    const rawLogs = localStorage.getItem(`${STORAGE_PREFIX}AUDIT_LOGS`);
    const logs = rawLogs ? JSON.parse(rawLogs) : [];
    const newEntry = {
      id: `LOG-${Date.now()}`,
      timestamp: new Date().toISOString(),
      action: sanitizeInput(action),
      detail: sanitizeInput(detail),
      actor: sanitizeInput(actor),
      signature: computeIntegrityHash(`${action}:${detail}:${Date.now()}`).slice(0, 18)
    };
    const updated = [newEntry, ...logs].slice(0, 50); // simpan 50 log terakhir
    localStorage.setItem(`${STORAGE_PREFIX}AUDIT_LOGS`, JSON.stringify(updated));
    return newEntry;
  } catch {
    return null;
  }
}

export function getSecurityAuditLogs() {
  try {
    const rawLogs = localStorage.getItem(`${STORAGE_PREFIX}AUDIT_LOGS`);
    return rawLogs ? JSON.parse(rawLogs) : [];
  } catch {
    return [];
  }
}

export function clearAllSecureData() {
  Object.keys(localStorage).forEach((k) => {
    if (k.startsWith(STORAGE_PREFIX)) {
      localStorage.removeItem(k);
    }
  });
}
