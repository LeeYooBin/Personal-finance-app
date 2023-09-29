"use client";
import styled from "styled-components";

export const Content = styled.header`
  width: 100%;
  height: auto;
  display: flex;
  margin-bottom: 2rem;
  justify-content: flex-end;
`;

export const NavMenu = styled.nav`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const Icon = styled.button`
  width: auto;
  height: auto;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  font-size: 2.5rem;
  color: #ababab;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
