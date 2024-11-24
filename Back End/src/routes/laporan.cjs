const express = require("express");
const accesValidation = require("../middleware/admin/validationAccess.cjs");
const path = require("path");

const {
  getLaporanForm,
  createLaporanForm,
  deleteLaporanForm,
  updateStatus,
} = require("../controller/laporanForm.cjs");

const {
  totalLaporan,
  totalLaporanSelesai,
} = require("../controller/getCount.cjs");

const laporanRouter = express.Router();

const imagesPath = path.resolve(__dirname, "../../client_images/laporan");

laporanRouter.get("/", accesValidation, getLaporanForm);
laporanRouter.post("/", createLaporanForm);
laporanRouter.delete("/:id", accesValidation, deleteLaporanForm);
laporanRouter.put("/:id", accesValidation, updateStatus);

laporanRouter.use("/gambar/laporan", express.static(path.join(imagesPath)));

laporanRouter.get("/laporan/total", totalLaporan);
laporanRouter.get("/laporan/total/selesai", totalLaporanSelesai);

module.exports = laporanRouter;
