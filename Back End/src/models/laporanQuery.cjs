const dbPool = require("../config/database.cjs");

const getLaporan = () => {
  const query = "SELECT * FROM laporan_lingkungan";
  try {
    return dbPool.query(query);
  } catch (err) {
    throw err;
  }
};

const addLaporan = (body, gambar_laporan) => {
  const query = `INSERT INTO laporan_lingkungan (tanggal_laporan, nama, no_telepon, lokasi_laporan, deskripsi_laporan, gambar_laporan, status) VALUES (?, ?, ?, ?, ?, ?, ?)`;
  const values = [
    body.tanggal_laporan,
    body.nama,
    body.no_telepon,
    body.lokasi_laporan,
    body.deskripsi_laporan,
    gambar_laporan,
    body.status,
  ];

  try {
    return dbPool.execute(query, values);
  } catch (err) {
    throw err;
  }
};

const deleteLaporan = (id) => {
  const query = "DELETE FROM laporan_lingkungan WHERE id_laporan = ?";
  const values = [id];
  try {
    return dbPool.execute(query, values);
  } catch (err) {
    throw err;
  }
};

const createAdmin = (username, password) => {
  const query = `INSERT INTO user_admin (username, password, refresh_token) VALUES (?, ?, ?)`;
  const values = [username, password, null];

  try {
    return dbPool.execute(query, values);
  } catch (error) {
    throw error;
  }
};

const updateStatusLaporan = (id, status) => {
  const query = "UPDATE laporan_lingkungan SET status = ? WHERE id_laporan = ?";
  const values = [status, id];

  try {
    return dbPool.execute(query, values);
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getLaporan,
  addLaporan,
  deleteLaporan,
  createAdmin,
  updateStatusLaporan,
};
