import express from "express";

import accesValidation from "../middleware/admin/validationAccess.js";

import {
  getArtikelForm,
  getArtikelFormById,
  createArtikelForm,
  updateArtikelForm,
  deleteArtikelForm,
} from "../controller/artikelForm.js";

const artikelRouter = express.Router();

artikelRouter.get("/", getArtikelForm);
artikelRouter.get("/:id", getArtikelFormById);
artikelRouter.post("/", accesValidation, createArtikelForm);
artikelRouter.put("/:id", accesValidation, updateArtikelForm);
artikelRouter.delete("/:id", accesValidation, deleteArtikelForm);

export default artikelRouter;
