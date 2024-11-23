import {
  getCountArtikel,
  getCountLaporan,
  getCountLaporanSelesai,
} from "../models/countQuery.cjs";

export const totalArtikel = async (req, res) => {
  try {
    const countArtikel = await getCountArtikel();

    res.status(200).json({
      message: "Total artikel berhasil didapatkan",
      data: countArtikel[0],
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal mengambil total artikel",
    });
  }
};

export const totalLaporan = async (req, res) => {
  try {
    const countLaporan = await getCountLaporan();

    res.status(200).json({
      message: "Total laporan berhasil didapatkan",
      data: countLaporan[0],
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal mengambil total laporan",
    });
  }
};

export const totalLaporanSelesai = async (req, res) => {
  try {
    const countLaporanSelesai = await getCountLaporanSelesai();

    res.status(200).json({
      message: "Total laporan selesai berhasil didapatkan",
      data: countLaporanSelesai[0],
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal mengambil total laporan selesai",
    });
  }
};
