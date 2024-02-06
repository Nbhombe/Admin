import { Form } from "react-bootstrap";
import { ToggleComponentStyled } from "./style";

const ToggleComponent = ({ id, onClick }) => {
  return (
    <ToggleComponentStyled>
      <Form.Check type="switch" id={id} onClick={onClick} />
    </ToggleComponentStyled>
  );
};

export default ToggleComponent;
