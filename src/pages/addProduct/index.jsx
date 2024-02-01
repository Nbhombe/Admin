import { Col, Row } from "react-bootstrap";
import Header from "../../componets/header";
import PageHead from "../../componets/pageHead";
import { AddProductStyled } from "./style";
import FormInput from "../../componets/formInput";
import FormSelect from "../../componets/formSelect";
import FormChecbox from "../../componets/formChecbox";
import ToggleComponent from "../../componets/toggleComponent";
import Button from "../../componets/button";
const categoryOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const AddProduct = () => {
  return (
    <AddProductStyled>
      <Header />
      <PageHead head="Add Product" />
      <Row>
        <Col lg={7} className="d-flex">
          <div className="product-information flex-fill">
            <h6>Product Information</h6>
            <Row>
              <Col lg={12}>
                <FormInput label="Product Name" placeholder="Product Name" />
              </Col>
              <Col lg={6}>
                <FormInput label="Weight" placeholder="Product Weight" />
              </Col>
              <Col lg={6}>
                <FormSelect
                  options={categoryOptions}
                  placeholder="Product Category"
                  label="Product Category"
                />
              </Col>
              <Col lg={6}>
                <FormInput label="Region" placeholder="Product Region" />
              </Col>
              <Col lg={6}>
                <FormSelect
                  options={categoryOptions}
                  placeholder="Packing"
                  label="Packing type"
                />
              </Col>
              <Col lg={6}>
                <FormInput label="Nick Name" placeholder="Product Nick Name" />
              </Col>
              <Col lg={6}>
                <FormSelect
                  options={categoryOptions}
                  placeholder="Grade"
                  label="Product Grade"
                />
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg={5} className="d-flex">
          <div className="product-details flex-fill">
            <h6>Pricing Details</h6>
            <Row>
              <Col lg={12}>
                <FormSelect
                  options={categoryOptions}
                  placeholder="Specification"
                  label="Product Specification"
                />
              </Col>
              <Col lg={12}>
                <FormInput label="Stock" placeholder="Qty" />
              </Col>
              <Col lg={12}>
                <FormInput label="Clarity" placeholder="Clarity" />
              </Col>
              <Col lg={12}>
                <FormChecbox label="Charge tax on this product" />
              </Col>
              <Col lg={12}>
                <div className="stock-check">
                  <label htmlFor="stock">In Stock</label>
                  <ToggleComponent id="stock" />
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg={12}>
          <div className="add-product">
            <Button btnText="Cancel" secondBtn={true}/>
            <Button btnText="Add Products" />
          </div>
        </Col>
      </Row>
    </AddProductStyled>
  );
};

export default AddProduct;
