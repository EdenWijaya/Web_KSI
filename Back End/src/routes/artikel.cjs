const express = require("express");
const accesValidation = require("../middleware/admin/validationAccess.cjs");
const path = require("path");

const {
  getArtikelForm,
  getArtikelFormById,
  createArtikelForm,
  updateArtikelForm,
  deleteArtikelForm,
} = require("../controller/artikelForm.cjs");

const { totalArtikel } = require("../controller/getCount.cjs");

const artikelRouter = express.Router();

const imagesPath = path.resolve(__dirname, "../../client_images/artikel");

artikelRouter.get("/", getArtikelForm);
artikelRouter.get("/:id", getArtikelFormById);
artikelRouter.post("/", accesValidation, createArtikelForm);
artikelRouter.put("/:id", accesValidation, updateArtikelForm);
artikelRouter.delete("/:id", accesValidation, deleteArtikelForm);
artikelRouter.use("/gambar/artikel", express.static(path.join(imagesPath)));

artikelRouter.get("/artikel/total", totalArtikel);

module.exports = artikelRouter;
