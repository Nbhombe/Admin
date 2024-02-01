import Container from "react-bootstrap/Container";
import { ResetPasswordStyled } from "./style";
import FormComponent from "../../componets/FormComponent";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ResetPasswordForm from "../../componets/FormComponent/HOC/resetPasswordForm";
const ResetPassword = () => {
  return (
    <ResetPasswordStyled>
      <Container>
        <Row>
          <Col lg={5} md={12}>
            <FormComponent
              formComponentClass="form-wrap"
              formHead="Reset Password?"
              ifsvg={true}
              formPara="for john.doe@email.com"
            >
              <ResetPasswordForm />
            </FormComponent>
          </Col>
        </Row>
      </Container>
    </ResetPasswordStyled>
  );
};

export default ResetPassword;
