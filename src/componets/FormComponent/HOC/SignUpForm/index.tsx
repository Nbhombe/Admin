import Form from 'react-bootstrap/Form';
import Button from '../../../button';
import FormInput from '../../../formInput';
import { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
  const theme = useTheme();

  return (
    <Form>
      <FormInput label="Email" type="email" placeholder="Email Address" />
      <FormInput label="Password" type="password" placeholder="Password" />
      <Button btnText="Sign Up" buttonClass="form-btn" />
      {/* <div className="forget-pass">
        <Form.Check type="checkbox" id="default-checkbox" label="Remember me" />
        <a href="#" className="forget-link">
          Forgot Password?
        </a>
      </div> */}
      <div className="signin-option">
        <Link to="/" className="sign-link">
          Or Sign In with
        </Link>
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
