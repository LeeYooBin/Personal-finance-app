import styled from "styled-components";

export const Content = styled.main`
  min-height: 100vh;
  padding: 3.4rem 2rem;
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

export const TransferWrapper = styled.div`
  width: 100%;
  margin: 3.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: 920px) {
    align-items: center;
  }
`;

export const TransferList = styled.ul`
  width: 100%;
  margin: 2rem 0;
  list-style: none;
  max-height: 35rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 760px) {
    max-height: 60rem;
  }

  @media screen and (min-width: 920px) {
    max-height: 21rem;
    width: 40%;
  }
`;

export const TransferTitle = styled.h2`
  color: #000;
  font-size: 2rem;
  font-weight: 600;
`;

export const NoTransfersMessage = styled.p`
  font-size: 2rem;
  font-weigh: 900;
  text-align: center;
`;
