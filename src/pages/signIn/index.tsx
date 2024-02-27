import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FormComponent from '../../componets/FormComponent';
import SignInForm from '../../componets/FormComponent/HOC/signInForm';
import { SignInStyled } from './style';

const SignIn = () => {
  return (
    <SignInStyled>
      <Container>
        <Row>
          <Col lg={5} md={12}>
            <FormComponent
              formComponentClass="form-wrap"
              formHead="Login"
              formPara="Enter the below information to sign in"
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
