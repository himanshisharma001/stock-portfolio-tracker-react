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

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
