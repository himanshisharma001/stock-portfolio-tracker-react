import express from "express";
import cors from "cors";
import portfolioRoutes from "./routes/portfolioRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/stocks", portfolioRoutes);

app.get("/", (req, res) => {
  res.send("Stock Portfolio Backend Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
