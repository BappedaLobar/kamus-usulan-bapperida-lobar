// Cloudflare Pages Function: Inisialisasi Otomatis Tabel Database D1
// Endpoint: /api/init

export async function onRequest(context) {
  const { env } = context;

  // Cek apakah binding D1 (bernama 'DB') sudah terpasang
  if (!env || !env.DB) {
    return Response.json(
      {
        ok: false,
        message: "Binding database D1 (DB) belum dikonfigurasi di Cloudflare Dashboard.",
        d1Bound: false
      },
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    // Eksekusi pembuatan tabel dan indeks jika belum ada
    await env.DB.exec(`
      CREATE TABLE IF NOT EXISTS usulan_desa (
        id TEXT PRIMARY KEY,
        desa_pengusul TEXT NOT NULL,
        kecamatan TEXT,
        tahun TEXT NOT NULL DEFAULT '2027',
        opd TEXT NOT NULL,
        program TEXT,
        kegiatan TEXT,
        sub_kegiatan TEXT,
        usulan_kegiatan TEXT NOT NULL,
        usulan_permasalahan TEXT,
        sasaran_penerima TEXT,
        lokasi_dusun TEXT DEFAULT 'Dusun Prioritas',
        estimasi_pagu REAL DEFAULT 0,
        dimensi_masalah TEXT,
        justifikasi_masalah TEXT,
        kategori_mudah TEXT,
        aksi_prioritas TEXT,
        intervensi_prioritas TEXT,
        status TEXT DEFAULT 'DIAJUKAN',
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL
      );

      CREATE INDEX IF NOT EXISTS idx_usulan_desa_nama ON usulan_desa (desa_pengusul);
      CREATE INDEX IF NOT EXISTS idx_usulan_kecamatan ON usulan_desa (kecamatan);
      CREATE INDEX IF NOT EXISTS idx_usulan_tahun ON usulan_desa (tahun);
      CREATE INDEX IF NOT EXISTS idx_usulan_opd ON usulan_desa (opd);
      CREATE INDEX IF NOT EXISTS idx_usulan_status ON usulan_desa (status);
    `);

    // Ambil statistik ringkas
    const countResult = await env.DB.prepare("SELECT COUNT(*) as total FROM usulan_desa").first();

    return Response.json(
      {
        ok: true,
        message: "Database Cloudflare D1 siap digunakan.",
        d1Bound: true,
        totalUsulan: countResult?.total || 0,
        timestamp: new Date().toISOString()
      },
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return Response.json(
      {
        ok: false,
        message: `Gagal inisialisasi tabel D1: ${error.message}`,
        error: error.message
      },
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
