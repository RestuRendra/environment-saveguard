import express from "express";
import multer from "multer";
import { getMarkets, getMarketById, saveMarket, updateMarket, deleteMarket } from "../controllers/MarketController.js";

import path from "path";

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); //Appending extension
  },
});
const upload = multer({ storage });

const routerMarket = express.Router();
routerMarket.get("/markets", getMarkets);
routerMarket.get("/markets/:id", getMarketById);
routerMarket.post("/markets", upload.single("file"), saveMarket);
routerMarket.patch("/markets/:id", upload.single("file"), updateMarket);
routerMarket.delete("/markets/:id", deleteMarket);

export default routerMarket;
