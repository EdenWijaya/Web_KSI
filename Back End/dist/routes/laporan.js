"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _validationAccess = _interopRequireDefault(require("../middleware/admin/validationAccess.js"));
var _path = _interopRequireDefault(require("path"));
var _url = require("url");
var _laporanForm = require("../controller/laporanForm.js");
var _getCount = require("../controller/getCount.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var laporanRouter = _express["default"].Router();
var _filename = (0, _url.fileURLToPath)(import.meta.url);
var _dirname = _path["default"].dirname(_filename);
var imagesPath = _path["default"].resolve(_dirname, "../../client_images/laporan");
laporanRouter.get("/", _validationAccess["default"], _laporanForm.getLaporanForm);
laporanRouter.post("/", _laporanForm.createLaporanForm);
laporanRouter["delete"]("/:id", _validationAccess["default"], _laporanForm.deleteLaporanForm);
laporanRouter.put("/:id", _validationAccess["default"], _laporanForm.updateStatus);
laporanRouter.use("/gambar/laporan", _express["default"]["static"](_path["default"].join(imagesPath)));
laporanRouter.get("/laporan/total", _getCount.totalLaporan);
laporanRouter.get("/laporan/total/selesai", _getCount.totalLaporanSelesai);
var _default = exports["default"] = laporanRouter;