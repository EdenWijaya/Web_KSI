"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCountLaporanSelesai = exports.getCountLaporan = exports.getCountArtikel = void 0;
var _database = require("../config/database.js");
var getCountArtikel = exports.getCountArtikel = function getCountArtikel() {
  var query = "SELECT COUNT(*) as total_artikel FROM artikel_lingkungan";
  try {
    return _database.dbPool.query(query);
  } catch (error) {
    throw error;
  }
};
var getCountLaporan = exports.getCountLaporan = function getCountLaporan() {
  var query = "SELECT COUNT(*) as total_laporan FROM laporan_lingkungan";
  try {
    return _database.dbPool.query(query);
  } catch (error) {
    throw error;
  }
};
var getCountLaporanSelesai = exports.getCountLaporanSelesai = function getCountLaporanSelesai() {
  var query = "SELECT COUNT(*) as total_laporan_selesai FROM laporan_lingkungan WHERE status = 'Selesai'";
  try {
    return _database.dbPool.query(query);
  } catch (error) {
    throw error;
  }
};