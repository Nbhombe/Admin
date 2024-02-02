import { useTheme } from "styled-components";
import { SidebarStyled } from "./style";
import {useState} from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constants/routes";

const Sidebar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };
  return (
    <SidebarStyled className={`sidebar ${isOpen == true ? 'active' : ''}`}>
      <div className="logo"><div className="mainlogo">{theme.logoWhite}</div> <div className="minilogo">{theme.miniLogo}</div> <div className="toggle-button" onClick={ToggleSidebar}><IoIosArrowBack className="arrow-back"/></div></div>
      <div className="navigation">
        <ul>
          <li>
            <Link to={ROUTES.dashboard}>{theme.dashboard} <p>Dashboard</p></Link>
          </li>
          <li>
            <Link to={ROUTES.products}>{theme.product} <p>Product</p></Link>
          </li>
          <li>
            <a href="/insight">{theme.insight} <p>Insight</p></a>
          </li>
          <li>
            <a href="/people">{theme.team} <p>People & Teams</p></a>
          </li>
          <li>
            <a href="">{theme.inbox} <p>Inbox</p></a>
          </li>
        </ul>
      </div>
    </SidebarStyled>
  );
};

export default Sidebar;
