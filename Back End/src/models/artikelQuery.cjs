const dbPool = require("../config/database.cjs");

const getArtikel = () => {
  const query = "SELECT * FROM artikel_lingkungan";

  try {
    return dbPool.query(query);
  } catch (error) {
    throw error;
  }
};

const getArtikelById = (id) => {
  const query = "SELECT * FROM artikel_lingkungan WHERE id_artikel = ?";
  const values = [id];

  try {
    return dbPool.query(query, values);
  } catch (error) {
    throw error;
  }
};

const addArtikel = (body, gambar_artikel) => {
  const sumber_artikel = body.sumber_artikel || "Unknown";
  const query = `INSERT INTO artikel_lingkungan (tanggal_artikel, judul_artikel, author, gambar_artikel, isi_artikel, sumber_artikel) VALUES (?, ?, ?, ?, ?, ?)`;
  const values = [
    body.tanggal_artikel,
    body.judul_artikel,
    body.author,
    gambar_artikel,
    body.isi_artikel,
    sumber_artikel,
  ];

  try {
    return dbPool.execute(query, values);
  } catch (error) {
    throw error;
  }
};

const updateArtikel = (body, id, gambar) => {
  const { judul_artikel, author, isi_artikel, sumber_artikel } = body;

  const title = judul_artikel || null;
  const authorName = author || null;
  const content = isi_artikel || null;
  const image = gambar || null;
  const sumber = sumber_artikel;

  const query =
    "UPDATE artikel_lingkungan SET author = ?, judul_artikel = ?, gambar_artikel = ?, isi_artikel = ?, sumber_artikel = ? WHERE id_artikel = ?";
  const params = [authorName, title, image, content, sumber, id];

  try {
    return dbPool.execute(query, params);
  } catch (error) {
    throw error;
  }
};

const deleteArtikel = (id) => {
  const query = "DELETE FROM artikel_lingkungan WHERE id_artikel = ?";
  const values = [id];

  try {
    return dbPool.execute(query, values);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getArtikel,
  getArtikelById,
  addArtikel,
  updateArtikel,
  deleteArtikel,
};
