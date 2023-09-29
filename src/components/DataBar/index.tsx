import Chart from "react-google-charts";
import { useSelector } from "react-redux";

import {
  selectTotal,
  selectTotalWithdrawals,
  selectTotalDeposits
} from "../../store/transactions-slice";

const DataBar = () => {
  const total = useSelector(selectTotal);
  const withdraw = useSelector(selectTotalWithdrawals);
  const deposits = useSelector(selectTotalDeposits);

  const data = [
    ["Variável", "Valor", { role: "style" }],
    ["Saques", withdraw, "#DB3535"],
    ["Depósitos", deposits, "#379137"],
    ["Saldo", total, "#329DBF"]
  ];

  const customStyle = {
    boxShadow: "0 0.2rem 0.4rem rgba(0, 0, 0, 0.1)",
    height: window.screen.width < 920 ? "30rem" : "28rem",
    width: window.screen.width < 920 ? "100%" : "auto"
  };

  return (
    <Chart
      className="chart"
      chartType="ColumnChart"
      data={data}
      options={{
        title: "",
        legend: { position: "none" }
      }}
      style={customStyle}
    />
  );
};

export default DataBar;
