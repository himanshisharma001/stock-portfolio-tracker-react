import { useState } from "react";
import { API } from "../api";

export default function AddStockForm({ refreshStocks }) {
  const [formData, setFormData] = useState({
    stock_name: "",
    stock_symbol: "",
    quantity: "",
    buy_price: "",
    current_price: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.stock_name ||
      !formData.stock_symbol ||
      !formData.quantity ||
      !formData.buy_price ||
      !formData.current_price
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      await API.post("/stocks", formData);
      refreshStocks();
      setFormData({
        stock_name: "",
        stock_symbol: "",
        quantity: "",
        buy_price: "",
        current_price: "",
      });
    } catch (error) {
      console.log(error);
      alert("Error adding stock!");
    }
  };

  return (
    <div className="card formCard">
      <h3>Add Stock</h3>

      <form onSubmit={handleSubmit} className="stockForm">
        <input
          type="text"
          name="stock_name"
          placeholder="Stock Name (TCS)"
          value={formData.stock_name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="stock_symbol"
          placeholder="Symbol (TCS.NS)"
          value={formData.stock_symbol}
          onChange={handleChange}
        />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
        />

        <input
          type="number"
          name="buy_price"
          placeholder="Buy Price"
          value={formData.buy_price}
          onChange={handleChange}
        />

        <input
          type="number"
          name="current_price"
          placeholder="Current Price"
          value={formData.current_price}
          onChange={handleChange}
        />

        <button type="submit">➕ Add Stock</button>
      </form>
    </div>
  );
}
