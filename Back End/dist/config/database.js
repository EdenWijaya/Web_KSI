"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dbPool = void 0;
var _promise = _interopRequireDefault(require("mysql2/promise"));
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
_dotenv["default"].config({
  path: "./.env"
});
var DB_HOST = process.env.DB_HOST;
var DB_USER = process.env.DB_USER;
var DB_PASSWORD = process.env.DB_PASSWORD;
var DB_NAME = process.env.DB_NAME;
var dbPool = exports.dbPool = _promise["default"].createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  waitForConnections: true
});