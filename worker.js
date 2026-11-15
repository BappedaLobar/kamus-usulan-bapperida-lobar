// ============================================================================
// CLOUDFLARE WORKER BACKEND + STATIC ASSETS HANDLER
// APLIKASI KAMUS USULAN PERENCANAAN DAERAH - BAPPERIDA LOMBOK BARAT
// ============================================================================

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // ------------------------------------------------------------------------
    // ROUTE 1: /api/init -> Inisialisasi Otomatis Tabel & Indeks Database D1
    // ------------------------------------------------------------------------
    if (url.pathname === "/api/init") {
      if (!env.DB) {
        return Response.json(
          {
            ok: false,
            message: "Binding database D1 (DB) belum dikonfigurasi di Cloudflare Dashboard.",
            d1Bound: false
          },
          { status: 200 }
        );
      }

      try {
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

        const countResult = await env.DB.prepare("SELECT COUNT(*) as total FROM usulan_desa").first();

        return Response.json({
          ok: true,
          d1Bound: true,
          totalUsulan: countResult?.total || 0,
          message: "Database Cloudflare D1 siap digunakan.",
          timestamp: new Date().toISOString()
        });
      } catch (err) {
        return Response.json(
          { ok: false, error: err.message, message: `Gagal inisialisasi D1: ${err.message}` },
          { status: 500 }
        );
      }
    }

    // ------------------------------------------------------------------------
    // ROUTE 2: /api/usulan -> CRUD API Usulan Desa Terintegrasi D1
    // ------------------------------------------------------------------------
    if (url.pathname === "/api/usulan") {
      if (!env.DB) {
        return Response.json(
          {
            ok: false,
            message: "Binding database D1 (DB) belum aktif.",
            d1Bound: false,
            data: []
          },
          { status: 200 }
        );
      }

      // 1. GET: Ambil Usulan (bisa filter ?desa=...&tahun=...&opd=...)
      if (request.method === "GET") {
        try {
          const desa = url.searchParams.get("desa");
          const tahun = url.searchParams.get("tahun");
          const opd = url.searchParams.get("opd");

          let query = "SELECT * FROM usulan_desa WHERE 1=1";
          const params = [];

          if (desa && desa !== "Semua") {
            query += " AND desa_pengusul = ?";
            params.push(desa);
          }
          if (tahun && tahun !== "Semua") {
            query += " AND tahun = ?";
            params.push(tahun);
          }
          if (opd && opd !== "Semua") {
            query += " AND opd = ?";
            params.push(opd);
          }

          query += " ORDER BY created_at DESC";

          const stmt = env.DB.prepare(query);
          const { results } = await (params.length > 0 ? stmt.bind(...params) : stmt).all();

          const formattedData = (results || []).map((row) => ({
            id: row.id,
            desaPengusul: row.desa_pengusul,
            kecamatan: row.kecamatan,
            tahun: row.tahun,
            opd: row.opd,
            program: row.program,
            kegiatan: row.kegiatan,
            subKegiatan: row.sub_kegiatan,
            usulanKegiatan: row.usulan_kegiatan,
            usulanPermasalahan: row.usulan_permasalahan,
            sasaranPenerima: row.sasaran_penerima,
            lokasiDusun: row.lokasi_dusun,
            estimasiPagu: Number(row.estimasi_pagu) || 0,
            dimensiMasalah: row.dimensi_masalah,
            justifikasiMasalah: row.justifikasi_masalah,
            kategoriMudah: row.kategori_mudah,
            aksiPrioritas: row.aksi_prioritas,
            intervensiPrioritas: row.intervensi_prioritas,
            status: row.status,
            createdAt: row.created_at,
            updatedAt: row.updated_at
          }));

          return Response.json({
            ok: true,
            d1Bound: true,
            total: formattedData.length,
            data: formattedData
          });
        } catch (err) {
          return Response.json({ ok: false, error: err.message, data: [] }, { status: 500 });
        }
      }

      // 2. POST: Simpan atau Update Usulan (Single atau Array Batch)
      if (request.method === "POST") {
        try {
          const body = await request.json();
          const items = Array.isArray(body) ? body : [body];
          const now = new Date().toISOString();

          const insertSql = `
            INSERT INTO usulan_desa (
              id, desa_pengusul, kecamatan, tahun, opd, program, kegiatan, sub_kegiatan,
              usulan_kegiatan, usulan_permasalahan, sasaran_penerima, lokasi_dusun,
              estimasi_pagu, dimensi_masalah, justifikasi_masalah, kategori_mudah,
              aksi_prioritas, intervensi_prioritas, status, created_at, updated_at
            ) VALUES (
              ?, ?, ?, ?, ?, ?, ?, ?,
              ?, ?, ?, ?,
              ?, ?, ?, ?,
              ?, ?, ?, ?, ?
            )
            ON CONFLICT(id) DO UPDATE SET
              desa_pengusul = excluded.desa_pengusul,
              kecamatan = excluded.kecamatan,
              tahun = excluded.tahun,
              opd = excluded.opd,
              program = excluded.program,
              kegiatan = excluded.kegiatan,
              sub_kegiatan = excluded.sub_kegiatan,
              usulan_kegiatan = excluded.usulan_kegiatan,
              usulan_permasalahan = excluded.usulan_permasalahan,
              sasaran_penerima = excluded.sasaran_penerima,
              lokasi_dusun = excluded.lokasi_dusun,
              estimasi_pagu = excluded.estimasi_pagu,
              dimensi_masalah = excluded.dimensi_masalah,
              justifikasi_masalah = excluded.justifikasi_masalah,
              kategori_mudah = excluded.kategori_mudah,
              aksi_prioritas = excluded.aksi_prioritas,
              intervensi_prioritas = excluded.intervensi_prioritas,
              status = excluded.status,
              updated_at = excluded.updated_at
          `;

          const statements = items.map((item) => {
            const id = String(item.id || `usulan-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`);
            return env.DB.prepare(insertSql).bind(
              id,
              item.desaPengusul || "Desa Lombok Barat",
              item.kecamatan || "",
              item.tahun || "2027",
              item.opd || "",
              item.program || "",
              item.kegiatan || "",
              item.subKegiatan || "",
              item.usulanKegiatan || "",
              item.usulanPermasalahan || "",
              item.sasaranPenerima || "",
              item.lokasiDusun || "Dusun Prioritas",
              Number(item.estimasiPagu) || 0,
              item.dimensiMasalah || "",
              item.justifikasiMasalah || "",
              item.kategoriMudah || "",
              item.aksiPrioritas || "",
              item.intervensiPrioritas || "",
              item.status || "DIAJUKAN",
              item.createdAt || now,
              now
            );
          });

          if (statements.length === 1) {
            await statements[0].run();
          } else if (statements.length > 1) {
            await env.DB.batch(statements);
          }

          return Response.json({
            ok: true,
            d1Bound: true,
            message: `Berhasil menyimpan ${items.length} usulan ke Database Cloudflare D1.`,
            savedCount: items.length
          });
        } catch (err) {
          return Response.json({ ok: false, error: err.message }, { status: 500 });
        }
      }

      // 3. DELETE: Hapus Usulan Berdasarkan ID (?id=...)
      if (request.method === "DELETE") {
        try {
          const id = url.searchParams.get("id");
          if (!id) {
            return Response.json({ ok: false, message: "ID diperlukan" }, { status: 400 });
          }
          await env.DB.prepare("DELETE FROM usulan_desa WHERE id = ?").bind(id).run();
          return Response.json({
            ok: true,
            d1Bound: true,
            message: `Usulan ID [${id}] berhasil dihapus dari Cloudflare D1.`
          });
        } catch (err) {
          return Response.json({ ok: false, error: err.message }, { status: 500 });
        }
      }
    }

    // ------------------------------------------------------------------------
    // ROUTE 3: Layani Static Assets (Vite React Build di dist/)
    // ------------------------------------------------------------------------
    if (env.ASSETS) {
      let response = await env.ASSETS.fetch(request);
      // SPA Fallback: jika route tidak ditemukan dan bukan /api/, kembalikan index.html
      if (response.status === 404 && !url.pathname.startsWith("/api/")) {
        const indexUrl = new URL("/index.html", request.url);
        response = await env.ASSETS.fetch(new Request(indexUrl, request));
      }
      return response;
    }

    return new Response("Not Found", { status: 404 });
  }
};
