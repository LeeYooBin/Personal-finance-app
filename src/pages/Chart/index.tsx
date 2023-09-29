import { Link } from "react-router-dom";

// import AreaChart from "../../components/AreaChart";
// import BalanceChart from "../../components/BalanceChart";
import BackButton from "../../components/BackButton";
import DataBar from "../../components/DataBar";
import PieChart from "../../components/PieChart";

import * as S from "./style";

import { Title } from "../../style/title";

const Charts = () => {
  return (
    <S.Content>
      <Link to="/">
        <BackButton />
      </Link>
      <Title>Estatísticas</Title>
      <S.GraphicWrapper>
        <DataBar />
        <PieChart />
        {/* <AreaChart />
        <BalanceChart /> */}
      </S.GraphicWrapper>
    </S.Content>
  );
};

export default Charts;
