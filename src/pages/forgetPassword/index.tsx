import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FormComponent from '../../componets/FormComponent';
import ForgetPasswordForm from '../../componets/FormComponent/HOC/forgetPasswordForm';
import { SignInStyled } from '../signIn/style';
const ForgetPassword = () => {
  return (
    <SignInStyled>
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
    </SignInStyled>
  );
};

export default ForgetPassword;
