import {
  getArtikel,
  getArtikelById,
  addArtikel,
  updateArtikel,
  deleteArtikel,
} from "../models/artikelQuery.js";

export const getArtikelForm = async (req, res) => {
  try {
    const [data] = await getArtikel();
    if (data.length === 0) {
      res.status(404).json({
        message: "Data artikel tidak ditemukan",
      });
    } else {
      res.status(200).json({
        message: "Data artikel berhasil didapatkan",
        data: data,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Gagal mengambil data artikel",
    });
  }
};

export const getArtikelFormById = async (req, res) => {
  const { id } = req.params;

  try {
    const [data] = await getArtikelById(id);
    if (data.length === 0) {
      res.status(404).json({
        message: `Data artikel dengan id :${id}  tidak ditemukan`,
      });
    } else {
      res.status(200).json({
        message: `Data artikel dengan id :${id}  berhasil didapatkan`,
        data: data,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: `Gagal mengambil data artikel dengan id :${id}`,
    });
  }
};

export const createArtikelForm = async (req, res, next) => {
  if (!req.files.gambar_artikel) {
    const error = new Error(" gambar harus diupload");
    error.errorStatus = 422;
    throw error;
  }

  const { body } = req;
  const gambar_artikel = req.files.gambar_artikel[0].path;

  if (
    !body.tanggal_artikel ||
    !body.judul_artikel ||
    !body.author ||
    !body.isi_artikel
  ) {
    const error = new Error("Semua field harus diisi");
    error.errorStatus = 422;
    throw error;
  }
  try {
    await addArtikel(body, gambar_artikel);
    res.status(201).json({
      message: "Artikel berhasil ditambahkan",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Artikel gagal ditambahkan",
    });
  }
};

export const updateArtikelForm = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  try {
    await updateArtikel(body, id);
    res.status(200).json({
      message: "Artikel berhasil diupdate",
    });
  } catch (error) {
    res.status(500).json({
      message: "Artikel gagal diupdate",
    });
  }
};

export const deleteArtikelForm = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    const error = new Error("ID harus diisi");
    error.errorStatus = 422;
    throw error;
  }

  try {
    await deleteArtikel(id);
    res.status(200).json({
      message: "Artikel berhasil dihapus",
      id: id,
    });
  } catch (error) {
    res.status(500).json({
      message: "Artikel gagal dihapus",
      id: id,
    });
  }
};
