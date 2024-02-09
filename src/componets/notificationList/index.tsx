import { NotificationListStyled } from './style';

const NotificationListData = [
  {
    image: '',
    profileText: 'SJ',
    notificationHead: 'Congratulations Flora!',
    notificationDesc: 'Won the monthly best seller badge',
    notificationDate: 'Today',
    unread: true,
  },
  {
    image: '',
    profileText: 'VJ',
    notificationHead: 'Congratulations Flora!',
    notificationDesc: 'Won the monthly best seller badge',
    notificationDate: 'Yesterday',
    unread: true,
  },
  {
    image: '',
    profileText: 'VJ',
    notificationHead: 'Congratulations Flora!',
    notificationDesc: 'Won the monthly best seller badge',
    notificationDate: '11 Dec',
    unread: false,
  },
  {
    image: '',
    profileText: 'VJ',
    notificationHead: 'Congratulations Flora!',
    notificationDesc: 'Won the monthly best seller badge',
    notificationDate: '10 Dec',
    unread: false,
  },
  {
    image: '',
    profileText: 'VJ',
    notificationHead: 'Congratulations Flora!',
    notificationDesc: 'Won the monthly best seller badge',
    notificationDate: '10 Dec',
    unread: false,
  },
  {
    image: '',
    profileText: 'VJ',
    notificationHead: 'Congratulations Flora!',
    notificationDesc: 'Won the monthly best seller badge',
    notificationDate: '10 Dec',
    unread: false,
  },
  {
    image: '',
    profileText: 'VJ',
    notificationHead: 'Congratulations Flora!',
    notificationDesc: 'Won the monthly best seller badge',
    notificationDate: '10 Dec',
    unread: false,
  },
  {
    image: '',
    profileText: 'VJ',
    notificationHead: 'Congratulations Flora!',
    notificationDesc: 'Won the monthly best seller badge',
    notificationDate: '10 Dec',
    unread: false,
  },
];

const NotificationList = ({ unread, notifyDropdown, notifyListClass }: any) => {
  return (
    <NotificationListStyled
      unread={unread}
      notifyDropdown={notifyDropdown}
      className={notifyListClass}
    >
      <ul>
        {NotificationListData.map((data, index) => (
          <li key={index} className={data.unread ? 'unread' : ''}>
            <div className="notification-content">
              <div className="notification-content-image">
                {data.unread && <div className="notification-dot"></div>}
                {data.image ? (
                  <img src={data.image} alt="profile-image" />
                ) : (
                  <p>{data.profileText}</p>
                )}
              </div>
              <div className="notification-content-inner">
                <h6>{data.notificationHead}</h6>
                <p>{data.notificationDesc}</p>
                {notifyDropdown && (
                  <div className="notification-date-inner">
                    <p>{data.notificationDate}</p>
                  </div>
                )}
              </div>
            </div>
            <div className="notification-date">
              <p>{data.notificationDate}</p>
            </div>
          </li>
        ))}
      </ul>
    </NotificationListStyled>
  );
};

export default NotificationList;
