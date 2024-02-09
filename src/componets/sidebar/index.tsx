import { useTheme } from 'styled-components';
import { SidebarStyled } from './style';
import { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

const links = [
  { themeLabel: 'dashboard', href: '/admin', text: 'Dashboard' },
  { themeLabel: 'product', href: '/product', text: 'Product' },
  { themeLabel: 'insight', href: '/insight', text: 'Insight' },
  { themeLabel: 'team', href: '/people', text: 'People & Teams' },
  { themeLabel: 'inbox', href: '', text: 'Inbox' },
];

const Sidebar = () => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const ToggleSidebar = () => {
    setIsOpen(prevOpen => !prevOpen);
  };
  return (
    <SidebarStyled className={`sidebar ${isOpen ? 'active' : ''}`}>
      <div className="logo">
        <div className="mainlogo">{theme.logoWhite}</div>{' '}
        <div className="minilogo">{theme.miniLogo}</div>{' '}
        <div className="toggle-button" onClick={ToggleSidebar}>
          <IoIosArrowBack className="arrow-back" />
        </div>
      </div>
      <div className="navigation">
        <ul>
          {links.map((item, index) => (
            <li key={index}>
              <Link to={item.href}>
                {theme[item.themeLabel]} <p>{item.text}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </SidebarStyled>
  );
};

export default Sidebar;
