"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _adminAuthentication = _interopRequireDefault(require("../controller/admin/adminAuthentication.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var adminRouter = _express["default"].Router();
adminRouter.post("/login", _adminAuthentication["default"]);
var _default = exports["default"] = adminRouter;