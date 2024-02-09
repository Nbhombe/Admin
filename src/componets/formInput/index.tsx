import { InputGroup } from 'react-bootstrap';
import { FormInputStyled } from './style';
import Form from 'react-bootstrap/Form';
interface Props {
  label?: string;
  type?: string;
  placeholder: string;
  id?: string;
  icon?: any;
  formInputClass?: string;
  disabled?: boolean;
}
const FormInput = ({
  label,
  type,
  placeholder,
  id,
  icon,
  formInputClass,
  disabled,
}: Props) => {
  return (
    <FormInputStyled
      className={formInputClass}
      controlId=""
      icon={icon}
      disabled={disabled}
    >
      {icon && <InputGroup.Text id={id}>{icon}</InputGroup.Text>}
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control
        type={type}
        placeholder={placeholder}
        aria-describedby={id}
      />
    </FormInputStyled>
  );
};

export default FormInput;
