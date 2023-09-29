import { useSelector } from "react-redux/es/hooks/useSelector";

import AddButton from "../../components/AddButton";
import FinanceOverview from "../../components/FinanceOverview";
import Header from "../../components/Header";
import TransferCard from "../../components/TransferCard";

import * as S from "./style";

import { selectTransactions } from "../../store/transactions-slice";

const Home: React.FC = () => {
  const transfers = useSelector(selectTransactions);

  return (
    <S.Content>
      <Header />
      <FinanceOverview />
      <S.TransferWrapper>
        <S.TransferTitle>Transferências</S.TransferTitle>
        <S.TransferList>
          {transfers.length ? (
            transfers.map((item) => (
              <TransferCard
                key={item.ID}
                ID={item.ID}
                title={item.title}
                value={item.value}
                isDepositStatus={item.isDepositStatus}
                date={item.date}
              />
            ))
          ) : (
            <S.NoTransfersMessage>
              Você ainda não tem nenhuma transferência!
            </S.NoTransfersMessage>
          )}
        </S.TransferList>
      </S.TransferWrapper>
      <AddButton />
    </S.Content>
  );
};

export default Home;
