-- ============================================================================
-- SKEMA DATABASE CLOUDFLARE D1 (SQLITE SERVERLESS)
-- APLIKASI KAMUS USULAN PERENCANAAN DAERAH - BAPPERIDA LOMBOK BARAT
-- ============================================================================

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

-- Indeks Pencarian & Filter Cepat
CREATE INDEX IF NOT EXISTS idx_usulan_desa_nama ON usulan_desa (desa_pengusul);
CREATE INDEX IF NOT EXISTS idx_usulan_kecamatan ON usulan_desa (kecamatan);
CREATE INDEX IF NOT EXISTS idx_usulan_tahun ON usulan_desa (tahun);
CREATE INDEX IF NOT EXISTS idx_usulan_opd ON usulan_desa (opd);
CREATE INDEX IF NOT EXISTS idx_usulan_status ON usulan_desa (status);
