import { Chart } from "react-google-charts";
import { useSelector } from "react-redux";

import { selectTransactions } from "../../store/transactions-slice";

const BalanceChart = () => {
  const transactions = useSelector(selectTransactions);

  const formatChartData = () => {
    const chartData = [["Date", "Balance"]];
    let balance = 0;

    transactions.forEach((transaction) => {
      balance += transaction.isDepositStatus ? transaction.value : -transaction.value;
      const formattedDate = new Date(transaction.date).toLocaleDateString();
      chartData.push([formattedDate, balance.toString()]);
    });

    return chartData;
  };

  const chartData = formatChartData();

  const customStyle = {
    boxShadow: "0 0.2rem 0.4rem rgba(0, 0, 0, 0.1)",
    height: window.screen.width < 920 ? "30rem" : "28rem",
    width: window.screen.width < 920 ? "100%" : "auto"
  };

  return <Chart chartType="LineChart" style={customStyle} data={chartData} />;
};

export default BalanceChart;
