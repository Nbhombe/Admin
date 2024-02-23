import { Dropdown, Form } from 'react-bootstrap';
import { HeaderStyled } from './style';
import { useTheme } from 'styled-components';
import Profile from '../../assets/images/profile.png';
import FormInput from '../formInput';
import NotificationList from '../notificationList';
import { Link } from 'react-router-dom';
const Header = () => {
  const theme = useTheme();
  return (
    <HeaderStyled>
      <div className="header-inner">
        <div className="header-left">
          <Form>
            <FormInput
              type="text"
              icon={theme.search}
              placeholder="Search"
              id="search"
              formInputClass="search-dash"
            />
          </Form>
        </div>
        <div className="header-right">
          <div className="info">
            <Link to="#">{theme.info}</Link>
          </div>
          <div className="notification">
            <div className="notify"></div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {theme.bell}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <div className="notification-section-head">
                  <h6>Notification</h6>
                  <Link to="#">Mark All As Read</Link>
                </div>
                <NotificationList
                  notifyDropdown={true}
                  notifyListClass="notification-list"
                />
                <div className="notification-section-bottom">
                  <Link to="/admin/notification">View All Notification</Link>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="profile">
            <div className="profile-image">
              <img src={Profile} alt="profile-image" />
            </div>
            <div className="profile-name">
              <h6>Hello,</h6>
              <p>Mark Hanrry</p>
            </div>
          </div>
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
