import Container from "react-bootstrap/Container";
import { SignInStyled } from "./style";
import FormComponent from "../../componets/FormComponent";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SignInForm from "../../componets/FormComponent/HOC/signInForm";

const SignIn = () => {
  return (
    <SignInStyled>
      <Container>
        <Row>
          <Col lg={5} md={12}>
            <FormComponent
              formComponentClass="form-wrap"
              formHead="Sign In"
              formPara="Enter the below information to sign up"
            >
              <SignInForm />
            </FormComponent>
          </Col>
        </Row>
      </Container>
    </SignInStyled>
  );
};

export default SignIn;
