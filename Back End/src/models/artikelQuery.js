import { dbPool } from "../config/database.js";

export const getArtikel = () => {
  const query = "SELECT * FROM artikel_lingkungan";

  try {
    return dbPool.query(query);
  } catch (error) {
    throw error;
  }
};

export const getArtikelById = (id) => {
  const query = "SELECT * FROM artikel_lingkungan WHERE id_artikel = ?";
  const values = [id];

  try {
    return dbPool.query(query, values);
  } catch (error) {
    throw error;
  }
};

export const addArtikel = (body, gambar_artikel) => {
  const query = `INSERT INTO artikel_lingkungan (tanggal_artikel, judul_artikel,author, gambar_artikel, isi_artikel) VALUES (?, ?, ?, ?, ?)`;
  const values = [
    body.tanggal_artikel,
    body.judul_artikel,
    body.author,
    gambar_artikel,
    body.isi_artikel,
  ];

  try {
    return dbPool.execute(query, values);
  } catch (error) {
    throw error;
  }
};

export const updateArtikel = (id, body) => {
  const query = "UPDATE artikel_lingkungan SET ? WHERE id_artikel = ?";
  const values = [body, id];

  try {
    return dbPool.execute(query, values);
  } catch (error) {
    throw error;
  }
};

export const deleteArtikel = (id) => {
  const query = "DELETE FROM artikel_lingkungan WHERE id_artikel = ?";
  const values = [id];

  try {
    return dbPool.execute(query, values);
  } catch (error) {
    throw error;
  }
};
