export default function SummaryCards({ stocks }) {
  const totalInvestment = stocks.reduce(
    (acc, stock) => acc + stock.quantity * stock.buy_price,
    0
  );

  const currentValue = stocks.reduce(
    (acc, stock) => acc + stock.quantity * stock.current_price,
    0
  );

  const profitLoss = currentValue - totalInvestment;

  return (
    <div className="summaryGrid">
      <div className="card summaryCard">
        <h4>Total Investment</h4>
        <p>₹ {totalInvestment.toFixed(2)}</p>
      </div>

      <div className="card summaryCard">
        <h4>Current Value</h4>
        <p>₹ {currentValue.toFixed(2)}</p>
      </div>

      <div className={`card summaryCard ${profitLoss >= 0 ? "profit" : "loss"}`}>
        <h4>Profit / Loss</h4>
        <p>₹ {profitLoss.toFixed(2)}</p>
      </div>
    </div>
  );
}
