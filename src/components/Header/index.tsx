import { Link } from "react-router-dom";
import { BiTransfer } from "react-icons/bi";
import { MdSettings } from "react-icons/md";
import { PiChartBarFill } from "react-icons/pi";

import * as S from "./style";

const Header = () => (
  <S.Content>
    <S.NavMenu>
      <Link to="/transferView">
        <S.Icon>
          <BiTransfer />
        </S.Icon>
      </Link>
      <Link to="/charts">
        <S.Icon>
          <PiChartBarFill />
        </S.Icon>
      </Link>
      <S.Icon>
        <MdSettings />
      </S.Icon>
    </S.NavMenu>
  </S.Content>
);

export default Header;
