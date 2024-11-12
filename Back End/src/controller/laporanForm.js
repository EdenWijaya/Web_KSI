import {
  getLaporan,
  addLaporan,
  deleteLaporan,
} from "../models/laporanQuery.js";

export const getLaporanForm = async (req, res) => {
  try {
    const [data] = await getLaporan();

    if (data.length === 0) {
      res.status(404).json({
        message: "Data laporan tidak ditemukan ",
      });
    } else {
      res.status(200).json({
        message: "Data laporan berhasil didapatkan",
        data: data,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Data laporan gagal didapatkan",
    });
  }
};

export const createLaporanForm = async (req, res, next) => {
  const { body } = req;
  if (
    !body.tanggal_laporan ||
    !body.nama ||
    !body.no_telepon ||
    !body.lokasi_laporan ||
    !body.deskripsi_laporan
  ) {
    const error = new Error("Semua field harus diisi");
    error.errorStatus = 422;
    throw error;
  }
  if (!req.files.gambar_laporan || !req.files) {
    const error = new Error(" gambar harus diupload");
    error.errorStatus = 422;
    throw error;
  }

  const gambar_laporan = req.files.gambar_laporan[0].path;

  try {
    await addLaporan(body, gambar_laporan);
    res.status(201).json({
      message: "Laporan berhasil ditambahkan",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Laporan gagal ditambahkan",
    });
    console.log(error);
  }
};

export const deleteLaporanForm = (req, res) => {
  const { id } = req.params;

  if (!id) {
    const error = new Error("ID harus diisi");
    error.errorStatus = 422;
    throw error;
  }

  try {
    const idLaporan = parseInt(id);
    deleteLaporan(idLaporan);
    res.status(200).json({
      message: "Laporan berhasil dihapus",
      id: id,
    });
  } catch (err) {
    res.status(500).json({
      message: "Laporan gagal dihapus",
      error: err,
    });
  }
};
