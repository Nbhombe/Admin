import { Link } from 'react-router-dom';
import Header from '../../componets/header';
import NotificationList from '../../componets/notificationList';
import PageHead from '../../componets/pageHead';
import { NotificationStyled } from './style';

const Notification = () => {
  return (
    <NotificationStyled>
      <Header />
      <PageHead head="Notification" />
      <div className="notification-section">
        <div className="notification-section-head">
          <h6>Notification</h6>
          <Link to="#">Mark All As Read</Link>
        </div>
        <NotificationList />
      </div>
    </NotificationStyled>
  );
};

export default Notification;
