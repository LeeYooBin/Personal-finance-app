import styled from "styled-components";

export const Content = styled.button`
  margin-top: 1rem;
  padding: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  background: linear-gradient(
    127deg,
    #4f80c3 0%,
    #c262ea 53.04%,
    #d56dc4 76.7%,
    #e67b99 92.19%
  );
  font-size: 3.4rem;
  color: #fff;
  position: absolute;
  bottom: 8rem;
  right: 2.6rem;
  cursor: pointer;

  @media screen and (min-width: 760px) {
    right: 10rem;
  }

  @media screen and (min-width: 920px) {
    right: 35.5%;
  }
`;
