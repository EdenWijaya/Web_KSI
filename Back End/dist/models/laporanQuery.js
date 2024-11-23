"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateStatusLaporan = exports.getLaporan = exports.deleteLaporan = exports.createAdmin = exports.addLaporan = void 0;
var _database = require("../config/database.js");
var getLaporan = exports.getLaporan = function getLaporan() {
  var query = "SELECT * FROM laporan_lingkungan";
  try {
    return _database.dbPool.query(query);
  } catch (err) {
    throw err;
  }
};
var addLaporan = exports.addLaporan = function addLaporan(body, gambar_laporan) {
  var query = "INSERT INTO laporan_lingkungan (tanggal_laporan, nama, no_telepon, lokasi_laporan, deskripsi_laporan, gambar_laporan,status) VALUES (?, ?, ?, ?, ?, ?,?)";
  var values = [body.tanggal_laporan, body.nama, body.no_telepon, body.lokasi_laporan, body.deskripsi_laporan, gambar_laporan, body.status];
  try {
    return _database.dbPool.execute(query, values);
  } catch (err) {
    throw err;
  }
};
var deleteLaporan = exports.deleteLaporan = function deleteLaporan(id) {
  var query = "DELETE FROM laporan_lingkungan WHERE id_laporan = ?";
  var values = [id];
  try {
    return _database.dbPool.execute(query, values);
  } catch (err) {
    throw err;
  }
};
var createAdmin = exports.createAdmin = function createAdmin(username, password) {
  var query = "INSERT INTO user_admin (username, password,refresh_token) VALUES (?, ?,?)";
  var values = [username, password, null];
  try {
    return _database.dbPool.execute(query, values);
  } catch (error) {
    throw error;
  }
};
var updateStatusLaporan = exports.updateStatusLaporan = function updateStatusLaporan(id, status) {
  var query = "UPDATE laporan_lingkungan SET status = ? WHERE id_laporan = ?";
  var values = [status, id];
  try {
    return _database.dbPool.execute(query, values);
  } catch (err) {
    throw err;
  }
};