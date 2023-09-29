"use client";
import styled from "styled-components";

export const Content = styled.li<{ isDepositStatus: boolean }>`
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

export const Title = styled.p`
  color: #000;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const Value = styled(Title)<{ isDepositStatus: boolean }>`
  color: ${({ isDepositStatus }): string => (isDepositStatus ? "#379137" : "#DB3535")};
`;

export const Date = styled(Title)`
  font-weight: 400;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const EditButton = styled.button`
  width: auto;
  height: auto;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.3rem;
  cursor: pointer;
  color: #4f80c3;
`;

export const DeleteButton = styled(EditButton)`
  color: #db3535;
`;

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

export const EditForm = styled.form`
  width: 80%;
  padding: 5rem 3rem 3rem 3rem;
  border-radius: 1rem;
  height: auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;

  @media screen and (min-width: 920px) {
    width: 20%;
  }
`;

export const ExitButton = styled.button`
  width: auto;
  height: auto;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 2.5rem;
  color: #000;
  position: absolute;
  left: 1.5rem;
  top: 1.5rem;
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const EditInput = styled.input`
  width: 100%;
  height: 22px;
  outline: none;
  border: 0.1rem solid #ccc;
  border-radius: 0.5rem;
  padding: 2rem;
  font-size: 1.5rem;
  color: #525252;

  &::placeholder {
    color: #ababab;
  }
`;

export const InputSpan = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  align-items: center;
  width: auto;
  height: auto;
`;

export const RadioWrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
`;

export const RadioLabel = styled.label`
  font-size: 1.5rem;
  color: #525252;
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 3.7rem;
  cursor: pointer;
  background: linear-gradient(
    127deg,
    #4f80c3 0%,
    #c262ea 53.04%,
    #d56dc4 76.7%,
    #e67b99 92.19%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 1rem;
  color: #fff;
  font-size: 1.6rem;
  font-weight: 700;
  margin-top: 3rem;
`;
