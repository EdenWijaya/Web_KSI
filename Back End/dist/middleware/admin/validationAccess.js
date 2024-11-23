"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var accesValidation = function accesValidation(req, res, next) {
  var authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(401).json({
      message: "Unauthorized : Diperlukan token"
    });
  }
  var token = authorization.split(" ")[1];
  var secretKey = process.env.JWT_SECRET;
  try {
    var jwtDecode = _jsonwebtoken["default"].verify(token, secretKey);
    req.userData = jwtDecode;
  } catch (error) {
    console.error(error);
    return res.status(401).json({
      message: "Unauthorized : Token tidak valid"
    });
  }
  next();
};
var _default = exports["default"] = accesValidation;