"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadHandler = exports.fileFilter = void 0;
var _multer = _interopRequireDefault(require("multer"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var storageImage = _multer["default"].diskStorage({
  destination: function destination(req, file, callback) {
    if (file.fieldname === "gambar_laporan") {
      callback(null, "client_images/laporan");
    } else if (file.fieldname === "gambar_artikel") {
      callback(null, "client_images/artikel");
    } else {
      callback(null, null);
    }
  },
  filename: function filename(req, file, callback) {
    var uniqueSuffix = new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname;
    callback(null, uniqueSuffix);
  }
});
var fileFilter = exports.fileFilter = function fileFilter(req, file, callback) {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/jpg") {
    callback(null, true);
  } else {
    callback(new Error("Hanya file berformat .jpg, .png, atau .jpeg yang diperbolehkan"), false);
  }
};
var uploadHandler = exports.uploadHandler = (0, _multer["default"])({
  storage: storageImage,
  fileFilter: fileFilter
}).fields([{
  name: "gambar_laporan",
  maxCount: 1
}, {
  name: "gambar_artikel",
  maxCount: 1
}]);