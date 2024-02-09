import Header from '../../componets/header';
import PageHead from '../../componets/pageHead';
import { ProfileStyled } from './style';
import ProfileImage from '../../assets/images/profile.png';
import { PiSuitcaseBold } from 'react-icons/pi';
import { FaRegMap } from 'react-icons/fa6';
import { LuCalendar } from 'react-icons/lu';
import { Col, Row } from 'react-bootstrap';
import ClientImage from '../../assets/images/client-image.png';
import { Link } from 'react-router-dom';
const Profile = () => {
  return (
    <ProfileStyled>
      <Header />
      <PageHead head="My Profile" />
      <div className="profile-head">
        <div className="profile-picture">
          <img src={ProfileImage} alt="profile-picture" />
        </div>
        <div className="profile-subinfo">
          <h4>Doe Park</h4>
          <ul>
            <li>
              <PiSuitcaseBold /> <p>Graphic Designer</p>
            </li>
            <li>
              <FaRegMap /> <p>Vatican City</p>
            </li>
            <li>
              <LuCalendar /> <p>Joined April 2021</p>
            </li>
          </ul>
        </div>
      </div>
      <Row>
        <Col lg={5} className="d-flex">
          <div className="personal-info flex-fill">
            <h4>Personal Info:</h4>
            <ul>
              <li>
                <p>Full Name:</p> <h6>Doe Park</h6>
              </li>
              <li>
                <p>Status:</p> <h6>Active</h6>
              </li>
              <li>
                <p>Role:</p> <h6>Graphic Designer</h6>
              </li>
              <li>
                <p>Country:</p> <h6>USA</h6>
              </li>
              <li>
                <p>Languages:</p> <h6>USA</h6>
              </li>
            </ul>
            <h4 className="contact-head">Contact Info:</h4>
            <ul>
              <li>
                <p>Contact:</p> <h6>(505) 555-0125</h6>
              </li>
              <li>
                <p>Skype:</p> <h6>Skype</h6>
              </li>
              <li>
                <p>Email:</p> <h6>willie.jennings@example.com</h6>
              </li>
            </ul>
          </div>
        </Col>
        <Col lg={7} className="d-flex">
          <div className="timeline-main flex-fill">
            <div className="timeline">
              <ul>
                <li>
                  <div className="timeline-step">
                    <h5>Client Meeting</h5>
                    <p>Project meeting with john @10:15am</p>
                    <div className="client-detail">
                      <div className="client-image">
                        <img src={ClientImage} alt="client-image" />
                      </div>
                      <div className="client-name">
                        <h4>Lester McCarthy (Client)</h4>
                        <p>CEO of Infibeam</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-step">
                    <h5>Create a new project for client</h5>
                    <p>
                      <Link to="#">Add files to new design folder</Link>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="timeline-step">
                    <h5>Shared 2 New Project Files</h5>
                    <p>Sent by Mollie Dixon</p>
                  </div>
                </li>
                <li>
                  <div className="timeline-step">
                    <h5>Shared 2 New Project Files</h5>
                    <p>Sent by Mollie Dixon</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </ProfileStyled>
  );
};

export default Profile;
