import Form from 'react-bootstrap/Form';
import Button from '../../../button';
import FormInput from '../../../formInput';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ResetPasswordForm = () => {
  return (
    <Form>
      <FormInput
        label="New Password"
        type="password"
        placeholder="New Password"
      />
      <FormInput
        label="Confirm Password"
        type="password"
        placeholder="Confirm Password"
      />
      <Button btnText="Set New Password" buttonClass="form-btn" />
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

export default ResetPasswordForm;
