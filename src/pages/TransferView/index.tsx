import { Link } from "react-router-dom";
import  { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

import BackButton from "../../components/BackButton";
import FinanceOverview from "../../components/FinanceOverview";

import * as S from "./style";

import { selectTotalDeposits } from "../../store/transactions-slice";
import { selectTotalWithdrawals } from "../../store/transactions-slice";
import { selectTransactions } from "../../store/transactions-slice";
import { Title } from "../../style/title";
import { getDate } from "../../utils/get-date";

const TransfersView = () => {
  const [activeButton, setActiveButton] = useState<string>("deposits");
  const withdraw = useSelector(selectTotalWithdrawals);
  const deposits = useSelector(selectTotalDeposits);
  const allTransactions = useSelector(selectTransactions);
  const filteredTransactions =
    activeButton === "deposits"
      ? allTransactions.filter((transaction) => transaction.isDepositStatus)
      : allTransactions.filter((transaction) => !transaction.isDepositStatus);

  const handleButtonClick = (buttonId: string) => {
    setActiveButton(buttonId);
  };

  return (
    <S.Content>
      <Link to="/">
        <BackButton />
      </Link>
      <Title>Transferências</Title>
      <FinanceOverview />
      <S.ButtonBar>
        <S.Button
          active={activeButton === "deposits"}
          onClick={() => handleButtonClick("deposits")}
        >
          Depósitos
        </S.Button>
        <S.Button
          active={activeButton === "withdraws"}
          onClick={() => handleButtonClick("withdraws")}
        >
          Saques
        </S.Button>
      </S.ButtonBar>
      <S.TotalWrapper>
        <S.Date>{getDate()}</S.Date>
        <S.Total>
          R$ {activeButton === "deposits" ? deposits : withdraw}
        </S.Total>
      </S.TotalWrapper>
      <S.TransactionsList>
        {filteredTransactions.map((transaction) => (
          <S.Transaction key={transaction.ID} isDepositStatus={transaction.isDepositStatus}>
            <S.TransactionTitle>{transaction.title}</S.TransactionTitle>
            <S.TransactionValue isDepositStatus={transaction.isDepositStatus}>
              {transaction.value}
            </S.TransactionValue>
            <S.TransferDate>{getDate(transaction.date)}</S.TransferDate>
          </S.Transaction>
        ))}
      </S.TransactionsList>
    </S.Content>
  );
};

export default TransfersView;
