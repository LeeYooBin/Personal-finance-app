import styled from "styled-components";

export const Content = styled.section`
  width: 100%;
  height: 100vh;
  padding: 4.2rem 2rem;
  position: relative;
  background-color: #f1f2f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 760px) {
    padding: 3.4rem 10rem;
  }
  @media screen and (min-width: 920px) {
    padding: 3.4rem 20rem;
  }
`;

export const ButtonBar = styled.div`
  margin: 3.5rem 0 6.5rem 0;
  padding: 0.4rem 0.3rem;
  width: 100%;
  display: flex;
  background-color: #fff;
  border-radius: 2.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  @media screen and (min-width: 920px) {
    width: 40%;
  }
`;

export const Button = styled.button<{ active: boolean }>`
  flex: 1;
  padding: 1.2rem 0;
  background: ${({ active }) =>
    active
      ? `linear-gradient(
    127deg,
    #4f80c3 0%,
    #c262ea 53.04%,
    #d56dc4 76.7%,
    #e67b99 92.19%
  )`
      : "#fff"};
  color: ${({ active }) => (active ? "#fff" : "#000")};
  border: none;
  border-radius: 2.5rem;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const TotalWrapper = styled.div`
  padding: 3.5rem 0;
  width: 100%;
  height: auto;
  background-color: #fff;
  text-align: center;
  border-radius: 2.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 920px) {
    width: 40%;
  }
`;

export const Total = styled.h2`
  font-size: 3rem;
  font-weight: 700;
`;

export const Date = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

export const TransactionsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-height: 20rem;
  margin-top: 1.8rem;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 920px) {
    width: 40%;
  }
`;

export const Transaction = styled.li<{ isDepositStatus: boolean }>`
  width: 100%;
  background: #fff;
  padding: 2rem 1.5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px -2px 1px 0px ${({ isDepositStatus }): string =>
  isDepositStatus ? "#379137" : "#DB3535"} inset;
`;

export const TransactionTitle = styled.p`
  color: #000;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const TransactionValue = styled(TransactionTitle)<{
  isDepositStatus: boolean;
}>``;

export const TransferDate = styled(Date)`
  margin: 0;
`;
