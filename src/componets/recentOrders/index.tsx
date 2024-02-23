import { Table } from "react-bootstrap";
import { RecentOrdersStyled } from "./style";
import Product_1 from "../../assets/images/product_1.png";
import Skeleton from "react-loading-skeleton";
const RecentOrdersData = [
    {
        products_no: "#FZ001",
        products_image: Product_1,
        products_name: "Alex Smith",
        products_type: "Bags",
        products_status: "in stock",
        products_sku: "1.2K",
        products_price: "125.00",
        products_vendor: "Zoetic Fashion",
    },
    {
        products_no: "#FZ001",
        products_image: Product_1,
        products_name: "Alex Smith",
        products_type: "Bags",
        products_status: "in stock",
        products_sku: "1.2K",
        products_price: "125.00",
        products_vendor: "Zoetic Fashion",
    },
    {
        products_no: "#FZ001",
        products_image: Product_1,
        products_name: "Alex Smith",
        products_type: "Bags",
        products_status: "in stock",
        products_sku: "1.2K",
        products_price: "125.00",
        products_vendor: "Zoetic Fashion",
    },
    {
        products_no: "#FZ001",
        products_image: Product_1,
        products_name: "Alex Smith",
        products_type: "Bags",
        products_status: "in stock",
        products_sku: "1.2K",
        products_price: "125.00",
        products_vendor: "Zoetic Fashion",
    },
    {
        products_no: "#FZ001",
        products_image: Product_1,
        products_name: "Alex Smith",
        products_type: "Bags",
        products_status: "in stock",
        products_sku: "1.2K",
        products_price: "125.00",
        products_vendor: "Zoetic Fashion",
    },
    {
        products_no: "#FZ001",
        products_image: Product_1,
        products_name: "Alex Smith",
        products_type: "Bags",
        products_status: "in stock",
        products_sku: "1.2K",
        products_price: "125.00",
        products_vendor: "Zoetic Fashion",
    },
    {
        products_no: "#FZ001",
        products_image: Product_1,
        products_name: "Alex Smith",
        products_type: "Bags",
        products_status: "in stock",
        products_sku: "1.2K",
        products_price: "125.00",
        products_vendor: "Zoetic Fashion",
    },
    {
        products_no: "#FZ001",
        products_image: Product_1,
        products_name: "Alex Smith",
        products_type: "Bags",
        products_status: "in stock",
        products_sku: "1.2K",
        products_price: "125.00",
        products_vendor: "Zoetic Fashion",
    },
    {
        products_no: "#FZ001",
        products_image: Product_1,
        products_name: "Alex Smith",
        products_type: "Bags",
        products_status: "in stock",
        products_sku: "1.2K",
        products_price: "125.00",
        products_vendor: "Zoetic Fashion",
    },
]

const RecentOrders = ({ordersWrapper, loading}) => {
  return (
    <RecentOrdersStyled className={ordersWrapper}>
      <div className="sub-head">
        <h6>Recent Orders</h6>
      </div>
      <div className="table-section">
        <Table responsive>
            <thead>
                <th>Products</th>
                <th>Product Name</th>
                <th>Type</th>
                <th>Status</th>
                <th>SKU</th>
                <th>Price</th>
                <th>Vendor</th>
            </thead>
            <tbody>
                {RecentOrdersData.map((data,index) => (
                    loading ? (
                        <Skeleton />
                      ) : (
                        <>
                    <tr>
                        <td><p>{data.products_no}</p></td>
                        <td><img src={data.products_image} alt="product image" /><span>{data.products_name}</span></td>
                        <td><p>{data.products_type}</p></td>
                        <td><p>{data.products_status}</p></td>
                        <td><p>{data.products_sku}</p></td>
                        <td><p>{data.products_price}</p></td>
                        <td><p>{data.products_vendor}</p></td>
                    </tr>
                    </>)
                ))}
            </tbody>
        </Table>
      </div>
    </RecentOrdersStyled>
  );
};

export default RecentOrders;