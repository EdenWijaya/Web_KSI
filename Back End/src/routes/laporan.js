import express from "express";
import accesValidation from "../middleware/admin/validationAccess.js";
import path from "path";
import { fileURLToPath } from "url";

import {
  getLaporanForm,
  createLaporanForm,
  deleteLaporanForm,
  updateStatus,
} from "../controller/laporanForm.js";

const laporanRouter = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesPath = path.resolve(__dirname, "../../client_images/laporan");

laporanRouter.get("/", accesValidation, getLaporanForm);
laporanRouter.post("/", createLaporanForm);
laporanRouter.delete("/:id", accesValidation, deleteLaporanForm);
laporanRouter.put("/:id", accesValidation, updateStatus);

laporanRouter.use("/gambar/laporan", express.static(path.join(imagesPath)));

export default laporanRouter;
