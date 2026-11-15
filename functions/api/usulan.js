// Cloudflare Pages Function: CRUD Usulan Desa Terintegrasi D1
// Endpoint: /api/usulan

// 1. GET: Ambil daftar usulan (bisa difilter via query params: ?desa=...&tahun=...)
export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  if (!env || !env.DB) {
    return Response.json(
      {
        ok: false,
        message: "Binding database D1 (DB) belum dikonfigurasi di Cloudflare Dashboard.",
        d1Bound: false,
        data: []
      },
      { status: 200 }
    );
  }

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

    // Map database snake_case columns to frontend camelCase object format
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
    return Response.json(
      { ok: false, error: err.message, data: [] },
      { status: 500 }
    );
  }
}

// 2. POST: Simpan Usulan Baru atau Update Usulan yang Ada
export async function onRequestPost(context) {
  const { request, env } = context;

  if (!env || !env.DB) {
    return Response.json(
      {
        ok: false,
        message: "Binding database D1 (DB) belum aktif.",
        d1Bound: false
      },
      { status: 200 }
    );
  }

  try {
    const body = await request.json();

    // Support single item or batch sync array
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
    return Response.json(
      { ok: false, error: err.message },
      { status: 500 }
    );
  }
}

// 3. DELETE: Hapus usulan berdasarkan id (?id=...)
export async function onRequestDelete(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const id = url.searchParams.get("id");

  if (!env || !env.DB) {
    return Response.json(
      { ok: false, message: "Binding database D1 (DB) belum aktif.", d1Bound: false },
      { status: 200 }
    );
  }

  if (!id) {
    return Response.json({ ok: false, message: "Parameter id usulan diperlukan." }, { status: 400 });
  }

  try {
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
