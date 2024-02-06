import { Form } from "react-bootstrap";
import { FormChecboxStyled } from "./style";

const FormChecbox = ({type, label, disabled}) => {
  return (
    <FormChecboxStyled disabled={disabled}>
      <Form.Check
        disabled={disabled}
        type={type}
        label={label}
        id={`disabled-default-${type}`}
      />
    </FormChecboxStyled>
  );
};

export default FormChecbox;
