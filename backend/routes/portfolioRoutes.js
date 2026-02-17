import express from "express";
import { getStocks, addStock, deleteStock } from "../controllers/portfolioController.js";

const router = express.Router();

router.get("/", getStocks);
router.post("/", addStock);
router.delete("/:id", deleteStock);

export default router;
