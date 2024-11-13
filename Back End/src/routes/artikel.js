import express from "express";

import accesValidation from "../middleware/admin/validationAccess.js";
import path from "path";
import { fileURLToPath } from "url";

import {
  getArtikelForm,
  getArtikelFormById,
  createArtikelForm,
  updateArtikelForm,
  deleteArtikelForm,
} from "../controller/artikelForm.js";

const artikelRouter = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesPath = path.resolve(__dirname, "../../client_images/artikel");

artikelRouter.get("/", accesValidation, getArtikelForm);
artikelRouter.get("/:id", getArtikelFormById);
artikelRouter.post("/", accesValidation, createArtikelForm);
artikelRouter.put("/:id", accesValidation, updateArtikelForm);
artikelRouter.delete("/:id", accesValidation, deleteArtikelForm);
artikelRouter.use("/gambar/artikel", express.static(path.join(imagesPath)));

export default artikelRouter;
