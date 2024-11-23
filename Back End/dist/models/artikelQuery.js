"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateArtikel = exports.getArtikelById = exports.getArtikel = exports.deleteArtikel = exports.addArtikel = void 0;
var _database = require("../config/database.js");
var getArtikel = exports.getArtikel = function getArtikel() {
  var query = "SELECT * FROM artikel_lingkungan";
  try {
    return _database.dbPool.query(query);
  } catch (error) {
    throw error;
  }
};
var getArtikelById = exports.getArtikelById = function getArtikelById(id) {
  var query = "SELECT * FROM artikel_lingkungan WHERE id_artikel = ?";
  var values = [id];
  try {
    return _database.dbPool.query(query, values);
  } catch (error) {
    throw error;
  }
};
var addArtikel = exports.addArtikel = function addArtikel(body, gambar_artikel) {
  var sumber_artikel = body.sumber_artikel || "Unknown";
  var query = "INSERT INTO artikel_lingkungan (tanggal_artikel, judul_artikel,author, gambar_artikel, isi_artikel,sumber_artikel) VALUES (?, ?, ?, ?, ?,?)";
  var values = [body.tanggal_artikel, body.judul_artikel, body.author, gambar_artikel, body.isi_artikel, sumber_artikel];
  try {
    return _database.dbPool.execute(query, values);
  } catch (error) {
    throw error;
  }
};
var updateArtikel = exports.updateArtikel = function updateArtikel(body, id, gambar) {
  var judul_artikel = body.judul_artikel,
    author = body.author,
    isi_artikel = body.isi_artikel,
    sumber_artikel = body.sumber_artikel;
  var title = judul_artikel || null;
  var authorName = author || null;
  var content = isi_artikel || null;
  var image = gambar || null;
  var sumber = sumber_artikel;
  var query = "UPDATE artikel_lingkungan SET author = ?, judul_artikel = ?, gambar_artikel = ?, isi_artikel = ?, sumber_artikel = ? WHERE id_artikel = ?";
  var params = [authorName, title, image, content, sumber, id];
  try {
    return _database.dbPool.execute(query, params);
  } catch (error) {
    throw error;
  }
};
var deleteArtikel = exports.deleteArtikel = function deleteArtikel(id) {
  var query = "DELETE FROM artikel_lingkungan WHERE id_artikel = ?";
  var values = [id];
  try {
    return _database.dbPool.execute(query, values);
  } catch (error) {
    throw error;
  }
};