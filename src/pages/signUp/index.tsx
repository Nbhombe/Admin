import Container from 'react-bootstrap/Container';
import { SignUpStyled } from './style';
import FormComponent from '../../componets/FormComponent';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SignUpForm from '../../componets/FormComponent/HOC/SignUpForm';
import { SignInStyled } from '../signIn/style';

const SignUp = () => {
  return (
    <SignInStyled>
      <Container>
        <Row>
          <Col lg={5} md={12}>
            <FormComponent
              formComponentClass="form-wrap"
              formHead="Sign Up"
              formPara="Enter the below information to sign up"
            >
              <SignUpForm />
            </FormComponent>
          </Col>
        </Row>
      </Container>
    </SignInStyled>
  );
};

export default SignUp;
