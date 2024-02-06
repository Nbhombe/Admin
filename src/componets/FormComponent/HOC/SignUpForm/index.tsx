import Form from "react-bootstrap/Form";
import Button from "../../../button";
import FormInput from "../../../formInput";
import { useTheme } from "styled-components";

const SignUpForm = () => {
  const theme = useTheme();

  return (
    <Form>
      <FormInput label="Email" type="email" placeholder="Email Address" />
      <FormInput label="Password" type="password" placeholder="Password" />
      <Button btnText="Sign In" buttonClass="form-btn" />
      {/* <div className="forget-pass">
        <Form.Check type="checkbox" id="default-checkbox" label="Remember me" />
        <a href="#" className="forget-link">
          Forgot Password?
        </a>
      </div> */}
      <div className="signin-option">
        <a href="/" className="sign-link">
          Or Sign In with
        </a>
        <div className="signin-social">
        {theme.google}
          {theme.facebook}
          {theme.ios}
        </div>
      </div>
    </Form>
  );
};

export default SignUpForm;
