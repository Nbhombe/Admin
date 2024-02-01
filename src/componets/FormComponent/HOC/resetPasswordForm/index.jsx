import Form from "react-bootstrap/Form";
import Button from "../../../button";
import FormInput from "../../../formInput";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const ResetPasswordForm = () => {
  return (
    <Form>
      <FormInput label="New Password" type="password" placeholder="New Password" />
      <FormInput label="Confirm Password" type="password" placeholder="Confirm Password" />
      <Button btnText="Set New Password" buttonClass="form-btn" />
      <div className="login-link">
        <p><a href="/"><MdOutlineKeyboardArrowLeft />  Back to login</a></p>
      </div>
    </Form>
  );
};

export default ResetPasswordForm;
