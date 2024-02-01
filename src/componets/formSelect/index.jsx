import Select from "react-select";
import { FormSelectStyled } from "./style";
import { Form } from "react-bootstrap";
const FormSelect = ({ options, placeholder, label, disabled, menuIsOpen, formSelectClass }) => {
  return (
    <FormSelectStyled disabled={disabled} className={formSelectClass}>
      {label && <Form.Label>{label}</Form.Label>}
      <Select
        options={options}
        placeholder={placeholder}
        className="react-select-container"
        classNamePrefix="react-select"
        menuIsOpen={menuIsOpen}
        menuPlacement="auto"
      />
    </FormSelectStyled>
  );
};

export default FormSelect;
