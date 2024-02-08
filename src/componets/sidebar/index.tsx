import { useTheme } from 'styled-components';
import { SidebarStyled } from './style';
import { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

const Sidebar = () => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const ToggleSidebar = () => {
    setIsOpen(prevOpen => !prevOpen);
  };
  return (
    <SidebarStyled className={`sidebar ${isOpen == true ? 'active' : ''}`}>
      <div className="logo">
        <div className="mainlogo">{theme.logoWhite}</div>{' '}
        <div className="minilogo">{theme.miniLogo}</div>{' '}
        <div className="toggle-button" onClick={ToggleSidebar}>
          <IoIosArrowBack className="arrow-back" />
        </div>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <a href="admin">
              {theme.dashboard} <p>Dashboard</p>
            </a>
          </li>
          <li>
            <a href="/product">
              {theme.product} <p>Product</p>
            </a>
          </li>
          <li>
            <a href="/insight">
              {theme.insight} <p>Insight</p>
            </a>
          </li>
          <li>
            <a href="/people">
              {theme.team} <p>People & Teams</p>
            </a>
          </li>
          <li>
            <a href="">
              {theme.inbox} <p>Inbox</p>
            </a>
          </li>
        </ul>
      </div>
    </SidebarStyled>
  );
};

export default Sidebar;
