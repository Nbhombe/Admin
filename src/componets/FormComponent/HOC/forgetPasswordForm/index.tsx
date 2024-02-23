import Form from 'react-bootstrap/Form';
import Button from '../../../button';
import FormInput from '../../../formInput';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ForgetPasswordForm = () => {
  return (
    <Form>
      <FormInput label="Email" type="email" placeholder="Email Address" />
      <Button btnText="Send Reset Link" buttonClass="form-btn" />
      <div className="login-link">
        <p>
          <Link to="/">
            <MdOutlineKeyboardArrowLeft /> Back to login
          </Link>
        </p>
      </div>
    </Form>
  );
};

export default ForgetPasswordForm;
