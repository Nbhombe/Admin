import { Form } from 'react-bootstrap';
import { FormChecboxStyled } from './style';
import { FormCheckType } from 'react-bootstrap/esm/FormCheck';
interface Props {
  type: FormCheckType;
  label?: string;
  disabled?: boolean;
}
const FormChecbox = ({ type, label, disabled }: Props) => {
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
