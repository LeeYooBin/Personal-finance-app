import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import { useSelector } from "react-redux/es/hooks/useSelector";

import * as S from "./style";

import { selectTotal } from "../../store/transactions-slice";
import { selectTotalWithdrawals } from "../../store/transactions-slice";
import { selectTotalDeposits } from "../../store/transactions-slice";
import { getDate } from "../../utils/get-date";

const FinanceOverview = () => {
  const total = useSelector(selectTotal);
  const withdraw = useSelector(selectTotalWithdrawals);
  const deposits = useSelector(selectTotalDeposits);

  return (
    <S.Content>
      <S.BalanceWrapper>
        <S.Date>{getDate()}</S.Date>
        <S.Balance>R$ {total.toFixed(2)}</S.Balance>
      </S.BalanceWrapper>
      <S.TransitionsWrapper>
        <S.Transition>
          <S.TransitionUpIcon>
            <BiUpArrowAlt />
          </S.TransitionUpIcon>
          <S.TransitionInfo>
            <S.TransitionName>Depósitos</S.TransitionName>
            <S.TransitionAmount>R$ {deposits.toFixed(2)}</S.TransitionAmount>
          </S.TransitionInfo>
        </S.Transition>
        <S.Transition>
          <S.TransitionDownIcon>
            <BiDownArrowAlt />
          </S.TransitionDownIcon>
          <S.TransitionInfo>
            <S.TransitionName>Gastos</S.TransitionName>
            <S.TransitionAmount>R$ {withdraw.toFixed(2)}</S.TransitionAmount>
          </S.TransitionInfo>
        </S.Transition>
      </S.TransitionsWrapper>
    </S.Content>
  );
};

export default FinanceOverview;
