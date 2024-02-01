import { CustomerStyled } from "./style";
import Customer_1 from "../../assets/images/customer_1.png";
import Customer_2 from "../../assets/images/customer_2.png";
import Customer_3 from "../../assets/images/customer_3.png";
import Customer_4 from "../../assets/images/customer_4.png";
import Customer_5 from "../../assets/images/customer_5.png";

const CustomerData = [
  {
    customer_image: Customer_1,
    customer_name: "Marvin McKinney",
    customer_purchase: "583",
    customer_price: "885",
  },
  {
    customer_image: Customer_2,
    customer_name: "Robert Fox",
    customer_purchase: "453",
    customer_price: "785",
  },
  {
    customer_image: Customer_3,
    customer_name: "Courtney Henry",
    customer_purchase: "427",
    customer_price: "685",
  },
  {
    customer_image: Customer_4,
    customer_name: "Savannah Nguyen",
    customer_purchase: "427",
    customer_price: "685",
  },
  {
    customer_image: Customer_5,
    customer_name: "Cameron Williamson",
    customer_purchase: "427",
    customer_price: "685",
  },
];

const Customer = ({customerWrapper}) => {
  return (
    <CustomerStyled className={customerWrapper}>
      <div className="sub-head">
        <h6>Top Customers</h6>
      </div>
      <div className="customer-list">
        <ul>
          {CustomerData.map((data, index) => (
            <li key={index}>
              <div className="customer-list-inner">
                <div className="customer-list-inner-left">
                  <div className="customer-list-inner-image">
                    <img src={data.customer_image} alt="customer-image" />
                  </div>
                  <div className="customer-list-inner-content">
                    <h6>{data.customer_name}</h6>
                    <p>{data.customer_purchase} Purchase</p>
                  </div>
                </div>
                <div className="customer-list-inner-right">
                  <div className="customer-list-inner-price">
                    <p>${data.customer_price}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </CustomerStyled>
  );
};

export default Customer;
