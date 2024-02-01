import { InputGroup } from "react-bootstrap";
import { FormInputStyled } from "./style";
import Form from "react-bootstrap/Form";

const FormInput = ({ label, type, placeholder, id, icon, formInputClass, disabled }) => {
  return (
    <FormInputStyled className={formInputClass} controlId="" icon={icon} disabled={disabled} >
        {icon && <InputGroup.Text id={id}>{icon}</InputGroup.Text>}
        {label && <Form.Label>{label}</Form.Label>}
        <Form.Control type={type} placeholder={placeholder} aria-describedby={id}/>
    </FormInputStyled>
  );
};

export default FormInput;
