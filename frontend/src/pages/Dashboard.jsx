import { useEffect, useState } from "react";
import { API } from "../api";
import Navbar from "../components/Navbar";
import AddStockForm from "../components/AddStockForm";
import StockTable from "../components/StockTable";
import SummaryCards from "../components/SummaryCards";
import SearchBar from "../components/SearchBar";

export default function Dashboard() {
  const [stocks, setStocks] = useState([]);
  const [search, setSearch] = useState("");

  const fetchStocks = async () => {
    try {
      const res = await API.get("/stocks");
      setStocks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStocks();
  }, []);

  // ✅ Filter stocks
  const filteredStocks = stocks.filter((stock) =>
    stock.stock_name.toLowerCase().includes(search.toLowerCase()) ||
    stock.stock_symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbar />

      <div className="container">
        <SummaryCards stocks={stocks} />

        <div className="topSection">
          <AddStockForm refreshStocks={fetchStocks} />
          <SearchBar search={search} setSearch={setSearch} />
        </div>

       
        <StockTable stocks={filteredStocks} refreshStocks={fetchStocks} />
      </div>
    </div>
  );
}
