"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _validationAccess = _interopRequireDefault(require("../middleware/admin/validationAccess.js"));
var _path = _interopRequireDefault(require("path"));
var _url = require("url");
var _artikelForm = require("../controller/artikelForm.js");
var _getCount = require("../controller/getCount.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var artikelRouter = _express["default"].Router();
var _filename = (0, _url.fileURLToPath)(import.meta.url);
var _dirname = _path["default"].dirname(_filename);
var imagesPath = _path["default"].resolve(_dirname, "../../client_images/artikel");
artikelRouter.get("/", _artikelForm.getArtikelForm);
artikelRouter.get("/:id", _artikelForm.getArtikelFormById);
artikelRouter.post("/", _validationAccess["default"], _artikelForm.createArtikelForm);
artikelRouter.put("/:id", _validationAccess["default"], _artikelForm.updateArtikelForm);
artikelRouter["delete"]("/:id", _validationAccess["default"], _artikelForm.deleteArtikelForm);
artikelRouter.use("/gambar/artikel", _express["default"]["static"](_path["default"].join(imagesPath)));
artikelRouter.get("/artikel/total", _getCount.totalArtikel);
var _default = exports["default"] = artikelRouter;