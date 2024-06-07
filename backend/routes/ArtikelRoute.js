import express from "express";
import { getArtikels, getArtikelById, saveArtikel, updateArtikel, deleteArtikel } from "../controllers/ArtikelController.js";

const router = express.Router();

router.get("/artikels", getArtikels);
router.get("/artikels/:id", getArtikelById);
router.post("/artikels", saveArtikel);
router.patch("/artikels/:id", updateArtikel);
router.delete("/artikels/:id", deleteArtikel);

export default router;