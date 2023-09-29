import styled from "styled-components";

export const Content = styled.section`
  width: 100%;
  min-height: 100vh;
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

export const GraphicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  height: auto;

  @media screen and (min-width: 920px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
