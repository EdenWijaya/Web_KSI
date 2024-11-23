"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _webVisitor = require("../controller/webVisitor.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var visitorRouter = _express["default"].Router();
visitorRouter.post("/", _webVisitor.setNewVisitor);
visitorRouter.get("/total", _webVisitor.totalVisitor);
var _default = exports["default"] = visitorRouter;