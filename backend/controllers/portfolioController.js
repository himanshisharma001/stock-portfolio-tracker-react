import { db } from "../db.js";

export const getStocks = (req, res) => {
  const q = "SELECT * FROM stocks ORDER BY id DESC";

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const addStock = (req, res) => {
  const { stock_name, stock_symbol, quantity, buy_price, current_price } = req.body;

  const q =
    "INSERT INTO stocks (stock_name, stock_symbol, quantity, buy_price, current_price) VALUES (?)";

  const values = [stock_name, stock_symbol, quantity, buy_price, current_price];

  db.query(q, [values], (err) => {
    if (err) return res.status(500).json(err);
    return res.status(201).json({ message: "Stock Added Successfully!" });
  });
};

export const deleteStock = (req, res) => {
  const stockId = req.params.id;

  const q = "DELETE FROM stocks WHERE id = ?";

  db.query(q, [stockId], (err) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json({ message: "Stock Deleted Successfully!" });
  });
};
