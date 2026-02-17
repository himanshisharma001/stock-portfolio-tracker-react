import { API } from "../api";

export default function StockTable({ stocks, refreshStocks }) {
  const handleDelete = async (id) => {
    try {
      await API.delete(`/stocks/${id}`);
      refreshStocks();
    } catch (error) {
      console.log(error);
      alert("Error deleting stock!");
    }
  };

  return (
    <div className="card tableCard">
      <h3>Portfolio Holdings</h3>

      <div className="tableResponsive">
        <table>
          <thead>
            <tr>
              <th>Stock</th>
              <th>Symbol</th>
              <th>Qty</th>
              <th>Buy Price</th>
              <th>Current Price</th>
              <th>Total Value</th>
              <th>P/L</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {stocks.length === 0 ? (
              <tr>
                <td colSpan="8" className="noData">
                  No stocks added yet.
                </td>
              </tr>
            ) : (
              stocks.map((stock) => {
                const totalValue = stock.quantity * stock.current_price;
                const profitLoss =
                  stock.quantity * stock.current_price -
                  stock.quantity * stock.buy_price;

                return (
                  <tr key={stock.id}>
                    <td>{stock.stock_name}</td>
                    <td>{stock.stock_symbol}</td>
                    <td>{stock.quantity}</td>
                    <td>₹ {stock.buy_price}</td>
                    <td>₹ {stock.current_price}</td>
                    <td>₹ {totalValue.toFixed(2)}</td>
                    <td className={profitLoss >= 0 ? "green" : "red"}>
                      ₹ {profitLoss.toFixed(2)}
                    </td>
                    <td>
                      <button
                        className="deleteBtn"
                        onClick={() => handleDelete(stock.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
