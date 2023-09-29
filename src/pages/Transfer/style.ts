"use client";
import styled from "styled-components";

export const Content = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #f1f2f6;
  padding: 12rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media screen and (min-width: 768px) {
    padding: 12rem 10rem;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: auto;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: #525252;
  font-size: 2rem;
  font-weight: 600;
`;

export const ValueInput = styled.input`
  width: 30rem;
  height: 3.7rem;
  padding: 1rem 2rem;
  margin: 3.4rem 0;
  outline: none;
  border-radius: 2rem;
  border: none;
  font-size: 1.3rem;
  color: #525252;

  &::placeholder {
    color: #ababab;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InputSpan = styled.div`
  width: 100%;
  padding: 1.9rem 1.3rem 1.5rem 4.5rem;
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  align-items: center;
  width: auto;
  height: auto;
  position: relative;
  z-index: 0;
  border-radius: 1rem;

  @media screen and (min-width: 920px) {
    width: 30%;
    align-self: center;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 22px;
  outline: none;
  border: none;
  font-size: 1.5rem;
  color: #525252;

  &::placeholder {
    color: #ababab;
  }
`;

export const InputIcon = styled.span`
  font-size: 2.3rem;
  position: absolute;
  left: 1rem;
  top: 1.7rem;
  opacity: 0.4;
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
  margin-top: 30rem;

  @media screen and (min-width: 920px) {
    margin-top: 3.5rem;
    width: 30%;
  }
`;
