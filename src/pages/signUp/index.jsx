import Container from 'react-bootstrap/Container';
import { SignUpStyled } from "./style";
import FormComponent from '../../componets/FormComponent';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SignUpForm from '../../componets/FormComponent/HOC/SignUpForm';

const SignUp = () => {
    return (
        <SignUpStyled>
            <Container>
                <Row>
                    <Col lg={5} md={12}>
                        <FormComponent formComponentClass="form-wrap" formHead="Sign Up" formPara="Enter the below information to sign up" ><SignUpForm /></FormComponent>
                    </Col>
                </Row>
            </Container>
        </SignUpStyled>
    )
}

export default SignUp;