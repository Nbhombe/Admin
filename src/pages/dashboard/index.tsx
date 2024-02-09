import { Col, Row } from 'react-bootstrap';
import EarningCard from '../../componets/earningCard';
import Header from '../../componets/header';
import { DashboardStyled } from './style';
import Customer from '../../componets/customers';
import RecentOrders from '../../componets/recentOrders';
import BarGraph from '../../componets/barGraph';
import PieChart from '../../componets/pieChart';
import { Link } from 'react-router-dom';

const EarningCardData = [
  {
    earningHead: 'Total Earnings',
    earningData: '$92,000',
    profit: '16.4',
    isProfit: true,
    isNuetral: false,
  },
  {
    earningHead: 'Total Purchase',
    earningData: '$46,700',
    profit: '16.4',
    isProfit: false,
    isNuetral: false,
  },
  {
    earningHead: 'Total Sales',
    earningData: '$96,000',
    profit: '16.4',
    isProfit: true,
    isNuetral: false,
  },
  {
    earningHead: 'Total Orders',
    earningData: '10,000',
    profit: '00.0',
    isProfit: true,
    isNuetral: true,
  },
];

const Dashboard = () => {
  return (
    <DashboardStyled>
      <Header />
      <div className="head-section">
        <h4>
          Good Morning, <span>Deo Park!</span>
        </h4>
        <p>Here's what's happening with your store today.</p>
      </div>
      <div className="earning-cards">
        {EarningCardData.map((data, index) => (
          <EarningCard
            key={index}
            earningHead={data.earningHead}
            earningData={data.earningData}
            isProfit={data.isProfit}
            isNuetral={data.isNuetral}
            profit={data.profit}
            earningCardClass="earning-card-inner"
          />
        ))}
      </div>
      <div className="middle-part">
        <Row>
          <Col lg={8} className="d-flex">
            <div className="bar-graph flex-fill">
              <div className="bar-graph-head">
                <h6>Revenue</h6>
                <div className="bar-graph-month">
                  <ul>
                    <li>
                      <Link to="#">1M</Link>
                    </li>
                    <li className="active">
                      <Link to="#">3M</Link>
                    </li>
                    <li>
                      <Link to="#">6M</Link>
                    </li>
                    <li>
                      <Link to="#">12M</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bar-graph-stats">
                <div className="bar-graph-stats-inner">
                  <h4>7,585</h4>
                  <p>Orders</p>
                </div>
                <div className="bar-graph-stats-inner">
                  <h4>$22.89k</h4>
                  <p>Earnings</p>
                </div>
                <div className="bar-graph-stats-inner">
                  <h4>367</h4>
                  <p>Refund</p>
                </div>
                <div className="bar-graph-stats-inner">
                  <h4>18.92%</h4>
                  <p>Conversation Ratio</p>
                </div>
              </div>
              <BarGraph />
            </div>
          </Col>
          <Col lg={4} className="d-flex">
            <div className="pie-chart flex-fill">
              <div className="pie-graph-head">
                <h6>Store Visits by Source</h6>
              </div>
              <PieChart />
            </div>
          </Col>
        </Row>
      </div>
      <div className="bottom-part">
        <Row>
          <Col lg={4} className="d-flex">
            <div className="top-customer-sec flex-fill">
              <Customer customerWrapper="top-customer-sec-inner" />
            </div>
          </Col>
          <Col lg={8} className="d-flex">
            <div className="recent-order-sec flex-fill">
              <RecentOrders ordersWrapper="recent-order-sec-inner" />
            </div>
          </Col>
        </Row>
      </div>
    </DashboardStyled>
  );
};

export default Dashboard;
