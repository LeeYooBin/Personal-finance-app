import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: auto;
  padding: 1.2rem 1.5rem;
  background: linear-gradient(
    127deg,
    #4f80c3 0%,
    #c262ea 53.04%,
    #d56dc4 76.7%,
    #e67b99 92.19%
  );
  border-radius: 2.5rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 920px) {
    width: 40%;
  }
`;

export const BalanceWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Balance = styled.h2`
  font-size: 2.6rem;
  font-weight: 600;
`;

export const Date = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const TransitionsWrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 920px) {
    justify-content: center;
    gap: 5rem;
  }
`;

export const Transition = styled.div`
  display: flex;
  align-items: center;
`;

export const TransitionUpIcon = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(217, 217, 217, 0.53);
  border-radius: 50%;
  font-size: 3.5rem;
  color: #379137;
`;

export const TransitionDownIcon = styled(TransitionUpIcon)`
  color: #db3535;
`;

export const TransitionInfo = styled.div`
  height auto;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const TransitionName = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
`;

export const TransitionAmount = styled(TransitionName)`
  font-weight: 600;
`;
