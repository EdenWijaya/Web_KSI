import { dbPool } from "../config/database.js";

export const getCountArtikel = () => {
  const query = "SELECT COUNT(*) as total_artikel FROM artikel_lingkungan";

  try {
    return dbPool.query(query);
  } catch (error) {
    throw error;
  }
};

export const getCountLaporan = () => {
  const query = "SELECT COUNT(*) as total_laporan FROM laporan_lingkungan";

  try {
    return dbPool.query(query);
  } catch (error) {
    throw error;
  }
};

export const getCountLaporanSelesai = () => {
  const query =
    "SELECT COUNT(*) as total_laporan_selesai FROM laporan_lingkungan WHERE status = 'Selesai'";
  try {
    return dbPool.query(query);
  } catch (error) {
    throw error;
  }
};
