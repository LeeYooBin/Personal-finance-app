import { Chart } from "react-google-charts";
import { useSelector } from "react-redux";

import {
  selectTotalDeposits,
  selectTotalWithdrawals
} from "../../store/transactions-slice";

const PieChart = () => {
  const totalDeposits = useSelector(selectTotalDeposits);
  const totalWithdrawals = useSelector(selectTotalWithdrawals);

  const chartData = [
    ["Category", "Amount"],
    ["Deposits", totalDeposits],
    ["Withdrawals", totalWithdrawals]
  ];

  const customStyle = {
    boxShadow: "0 0.2rem 0.4rem rgba(0, 0, 0, 0.1)",
    height: window.screen.width < 920 ? "30rem" : "28rem",
    width: window.screen.width < 920 ? "100%" : "auto"
  };

  return (
    <Chart
      chartType="PieChart"
      style={customStyle}
      data={chartData}
      options={{
        title: "Depósitos vs Saques",
        is3D: true
      }}
    />
  );
};

export default PieChart;
