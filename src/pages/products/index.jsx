import { Dropdown, Table } from "react-bootstrap";
import Button from "../../componets/button";
import FormInput from "../../componets/formInput";
import FormSelect from "../../componets/formSelect";
import Header from "../../componets/header";
import PageHead from "../../componets/pageHead";
import { ProductsStyled } from "./style";
import Product_1 from "../../assets/images/product_1.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import Skeleton from "react-loading-skeleton";

const optionsData = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const RecentOrdersData = [
  {
    productImage: Product_1,
    productName: "BANGE Anti Theft Backpack",
    productDescription: "Smart Business Laptop Fits 15.6",
    category: "Bags",
    status: "In Stock",
    sku: "1.2k",
    price: "125",
    quantity: "10",
  },
  {
    productImage: Product_1,
    productName: "BANGE Anti Theft Backpack",
    productDescription: "Smart Business Laptop Fits 15.6",
    category: "Bags",
    status: "In Stock",
    sku: "1.2k",
    price: "125",
    quantity: "10",
  },
  {
    productImage: Product_1,
    productName: "BANGE Anti Theft Backpack",
    productDescription: "Smart Business Laptop Fits 15.6",
    category: "Bags",
    status: "In Stock",
    sku: "1.2k",
    price: "125",
    quantity: "10",
  },
  {
    productImage: Product_1,
    productName: "BANGE Anti Theft Backpack",
    productDescription: "Smart Business Laptop Fits 15.6",
    category: "Bags",
    status: "In Stock",
    sku: "1.2k",
    price: "125",
    quantity: "10",
  },
  {
    productImage: Product_1,
    productName: "BANGE Anti Theft Backpack",
    productDescription: "Smart Business Laptop Fits 15.6",
    category: "Bags",
    status: "In Stock",
    sku: "1.2k",
    price: "125",
    quantity: "10",
  },
  {
    productImage: Product_1,
    productName: "BANGE Anti Theft Backpack",
    productDescription: "Smart Business Laptop Fits 15.6",
    category: "Bags",
    status: "In Stock",
    sku: "1.2k",
    price: "125",
    quantity: "10",
  },
  {
    productImage: Product_1,
    productName: "BANGE Anti Theft Backpack",
    productDescription: "Smart Business Laptop Fits 15.6",
    category: "Bags",
    status: "In Stock",
    sku: "1.2k",
    price: "125",
    quantity: "10",
  },
  {
    productImage: Product_1,
    productName: "BANGE Anti Theft Backpack",
    productDescription: "Smart Business Laptop Fits 15.6",
    category: "Bags",
    status: "In Stock",
    sku: "1.2k",
    price: "125",
    quantity: "10",
  },

  {
    productImage: Product_1,
    productName: "BANGE Anti Theft Backpack",
    productDescription: "Smart Business Laptop Fits 15.6",
    category: "Bags",
    status: "In Stock",
    sku: "1.2k",
    price: "125",
    quantity: "10",
  },
  {
    productImage: Product_1,
    productName: "BANGE Anti Theft Backpack",
    productDescription: "Smart Business Laptop Fits 15.6",
    category: "Bags",
    status: "In Stock",
    sku: "1.2k",
    price: "125",
    quantity: "10",
  },
  {
    productImage: Product_1,
    productName: "BANGE Anti Theft Backpack",
    productDescription: "Smart Business Laptop Fits 15.6",
    category: "Bags",
    status: "In Stock",
    sku: "1.2k",
    price: "125",
    quantity: "10",
  },
  {
    productImage: Product_1,
    productName: "BANGE Anti Theft Backpack",
    productDescription: "Smart Business Laptop Fits 15.6",
    category: "Bags",
    status: "In Stock",
    sku: "1.2k",
    price: "125",
    quantity: "10",
  },
];

const Products = ({loading}) => {
  return (
    <ProductsStyled>
      <Header />
      <PageHead head="Product List" />
      <div className="product-wrapper">
        <div className="search-product">
          <FormInput placeholder="Search Product" type="search" />
          <Button btnText="Add Products" />
        </div>
        <div className="filter-wrap">
          <h5>Filter</h5>
          <FormSelect
            placeholder="Status"
            options={optionsData}
            formSelectClass="filter-select"
          />
          <FormSelect
            placeholder="Category"
            options={optionsData}
            formSelectClass="filter-select"
          />
          <FormSelect
            placeholder="Stocks"
            options={optionsData}
            formSelectClass="filter-select"
          />
        </div>
        <div className="product-list">
          <Table responsive>
            <thead>
              <tr>
                <th>Products</th>
                <th>Category</th>
                <th>Status</th>
                <th>SKU</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {RecentOrdersData.map((data, index) => (
                loading ? <Skeleton /> : <>
                <tr>
                  <td>
                    <div className="product-detail">
                      <div className="product-image">
                        <img
                          src={data.productImage}
                          alt={`product-image-${index}`}
                        />
                      </div>
                      <div className="product-name">
                        <h6>{data.productName}</h6>
                        <p>{data.productDescription}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p>{data.category}</p>
                  </td>
                  <td>
                    <p>{data.status}</p>
                  </td>
                  <td>
                    <p>{data.sku}</p>
                  </td>
                  <td>
                    <p>${data.price}</p>
                  </td>
                  <td>
                    <p>{data.quantity}</p>
                  </td>
                  <td>
                    <div className="actions">
                      <FiEdit />
                      <RiDeleteBinLine />
                      <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                          <BsThreeDotsVertical />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            Action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            Another action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Something else
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </td>
                </tr>
                </>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </ProductsStyled>
  );
};

export default Products;
