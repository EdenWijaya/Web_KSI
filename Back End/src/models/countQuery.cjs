const dbPool = require("../config/database.cjs");

const getCountArtikel = () => {
  const query = "SELECT COUNT(*) as total_artikel FROM artikel_lingkungan";

  try {
    return dbPool.query(query);
  } catch (error) {
    throw error;
  }
};

const getCountLaporan = () => {
  const query = "SELECT COUNT(*) as total_laporan FROM laporan_lingkungan";

  try {
    return dbPool.query(query);
  } catch (error) {
    throw error;
  }
};

const getCountLaporanSelesai = () => {
  const query =
    "SELECT COUNT(*) as total_laporan_selesai FROM laporan_lingkungan WHERE status = 'Selesai'";
  try {
    return dbPool.query(query);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getCountArtikel,
  getCountLaporan,
  getCountLaporanSelesai,
};
