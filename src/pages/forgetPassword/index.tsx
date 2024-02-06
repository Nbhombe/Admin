import Container from "react-bootstrap/Container";
import { ForgetPasswordStyled } from "./style";
import FormComponent from "../../componets/FormComponent";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ForgetPasswordForm from "../../componets/FormComponent/HOC/forgetPasswordForm";
const ForgetPassword = () => {
  return (
    <ForgetPasswordStyled>
      <Container>
        <Row>
          <Col lg={5} md={12}>
            <FormComponent
              formComponentClass="form-wrap"
              formHead="Forgot Password?"
              ifsvg={true}
              formPara="Enter your email and we'll send you instructions to reset your password"
            >
              <ForgetPasswordForm />
            </FormComponent>
          </Col>
        </Row>
      </Container>
    </ForgetPasswordStyled>
  );
};

export default ForgetPassword;
