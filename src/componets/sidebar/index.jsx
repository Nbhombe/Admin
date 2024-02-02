import { useTheme } from "styled-components";
import { SidebarStyled } from "./style";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const theme = useTheme();
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };
  return (
    <SidebarStyled className={`sidebar ${isOpen == true ? "active" : ""}`}>
      <div className="logo">
        <div className="mainlogo">{theme.logoWhite}</div>{" "}
        <div className="minilogo">{theme.miniLogo}</div>{" "}
        <div className="toggle-button" onClick={ToggleSidebar}>
          <IoIosArrowBack className="arrow-back" />
        </div>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <Link to={"/admin"}>
              {theme.dashboard} <p>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to={"/admin/products"}>
              {theme.product} <p>Product</p>
            </Link>
          </li>
          <li>
            <Link to={"/admin/add_product"}>
              {theme.insight} <p>Insight</p>
            </Link>
          </li>
          <li>
            <Link to={"/admin/profile"}>
              {theme.team} <p>People & Teams</p>
            </Link>
          </li>
          <li>
            <Link to={"/admin/notification"}>
              {theme.inbox} <p>Inbox</p>
            </Link>
          </li>
        </ul>
      </div>
    </SidebarStyled>
  );
};

export default Sidebar;
