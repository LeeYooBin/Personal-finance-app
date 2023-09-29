import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: transparent;
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MessageWrapper = styled.div`
  width: 80%;
  height: auto;
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 3.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 20rem;

  @media screen and (min-width: 760px) {
    width: 50%;
  }

  @media screen and (min-width: 920px) {
    width: 30%;
  }
`;

export const Message = styled.p`
  font-size: 1.7rem;
  font-weight: 400;
  text-align: center;
`;

export const Buttons = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
`;

export const ConfirmButton = styled.button`
  font-size: 2rem;
  font-weight: 400;
  padding: 0.5rem 1rem;
  border: 0.1rem solid #000;
  border-radius: 0.2rem;
  background: #f1f1f1;
  color: #000;
  cursor: pointer;

  &:hover {
    background-color: #c1c1c1;
  }
`;
