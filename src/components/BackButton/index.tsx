import React, { MouseEventHandler } from "react";
import { FiArrowLeft } from "react-icons/fi";

import * as S from "./style";

interface BackButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => (
  <S.Content onClick={onClick}>
    <S.Icon>
      <FiArrowLeft />
    </S.Icon>
  </S.Content>
);

export default BackButton;
