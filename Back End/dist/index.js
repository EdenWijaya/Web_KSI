"use strict";

var _express = _interopRequireDefault(require("express"));
require("dotenv/config");
var _cors = _interopRequireDefault(require("cors"));
var _laporan = _interopRequireDefault(require("./routes/laporan.js"));
var _artikel = _interopRequireDefault(require("./routes/artikel.js"));
var _admin = _interopRequireDefault(require("./routes/admin.js"));
var _visitor = _interopRequireDefault(require("./routes/visitor.js"));
var _fileHandler = require("./middleware/file_upload/fileHandler.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var PORT = process.env.PORT || 3000;
var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use((0, _cors["default"])({
  origin: process.env.CLIENT_URL
}));
app.use(_fileHandler.uploadHandler);
app.use("/laporan-lingkungan", _laporan["default"]);
app.use("/artikel-lingkungan", _artikel["default"]);
app.use("/admin", _admin["default"]);
app.use("/visitor", _visitor["default"]);
app.listen(PORT, function () {
  console.log("Server running on : http://localhost:".concat(PORT));
});