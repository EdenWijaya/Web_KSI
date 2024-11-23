"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setVisitor = exports.getTotalVisitor = void 0;
var _database = require("../config/database.js");
var setVisitor = exports.setVisitor = function setVisitor(count) {
  var query = "INSERT INTO web_visitor(visitor) VALUES (?)";
  var values = [count];
  try {
    return _database.dbPool.execute(query, values);
  } catch (error) {
    throw error;
  }
};
var getTotalVisitor = exports.getTotalVisitor = function getTotalVisitor() {
  var query = "SELECT COUNT(*) as total_visitor FROM web_visitor";
  try {
    return _database.dbPool.query(query);
  } catch (error) {
    throw error;
  }
};