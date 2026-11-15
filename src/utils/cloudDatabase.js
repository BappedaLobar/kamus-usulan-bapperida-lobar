// ============================================================================
// SERVICE CLIENT DATABASE CLOUDFLARE D1 (SERVERLESS CLOUD)
// APLIKASI KAMUS USULAN PERENCANAAN DAERAH - BAPPERIDA LOMBOK BARAT
// ============================================================================

const API_BASE = "/api";

export async function checkCloudDatabaseStatus() {
  try {
    const res = await fetch(`${API_BASE}/init`, {
      method: "GET",
      headers: { "Accept": "application/json" }
    });
    if (!res.ok) {
      return { connected: false, d1Bound: false, message: `HTTP ${res.status}` };
    }
    const data = await res.json();
    return {
      connected: data.ok && data.d1Bound,
      d1Bound: data.d1Bound,
      totalUsulan: data.totalUsulan || 0,
      message: data.message
    };
  } catch (err) {
    // Mode offline atau local dev tanpa Pages Functions server
    return { connected: false, d1Bound: false, message: "Server API belum merespons (Offline/Local)" };
  }
}

export async function fetchAllUsulanFromCloud(params = {}) {
  try {
    const query = new URLSearchParams();
    if (params.desa && params.desa !== "Semua") query.set("desa", params.desa);
    if (params.tahun && params.tahun !== "Semua") query.set("tahun", params.tahun);
    if (params.opd && params.opd !== "Semua") query.set("opd", params.opd);

    const res = await fetch(`${API_BASE}/usulan?${query.toString()}`);
    if (!res.ok) return { ok: false, data: [] };
    const json = await res.json();
    return { ok: json.ok && json.d1Bound, d1Bound: json.d1Bound, data: json.data || [] };
  } catch (err) {
    return { ok: false, error: err.message, data: [] };
  }
}

export async function saveUsulanToCloud(item) {
  try {
    const res = await fetch(`${API_BASE}/usulan`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item)
    });
    if (!res.ok) return { ok: false };
    const json = await res.json();
    return { ok: json.ok && json.d1Bound, d1Bound: json.d1Bound, message: json.message };
  } catch (err) {
    return { ok: false, error: err.message };
  }
}

export async function deleteUsulanFromCloud(id) {
  try {
    const res = await fetch(`${API_BASE}/usulan?id=${encodeURIComponent(id)}`, {
      method: "DELETE"
    });
    if (!res.ok) return { ok: false };
    const json = await res.json();
    return { ok: json.ok && json.d1Bound, d1Bound: json.d1Bound };
  } catch (err) {
    return { ok: false, error: err.message };
  }
}

export async function syncLocalUsulanToCloud(localItems) {
  if (!Array.isArray(localItems) || localItems.length === 0) return { ok: true, count: 0 };
  return saveUsulanToCloud(localItems);
}
