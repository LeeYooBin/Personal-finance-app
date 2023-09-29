import { Link } from "react-router-dom"
import { AiOutlinePlus } from "react-icons/ai";

import * as S from "./style";

const AddButton = () => {
  return (
    <Link to="/transfer">
      <S.Content>
        <AiOutlinePlus />
      </S.Content>
    </Link>
  );
};

export default AddButton;
