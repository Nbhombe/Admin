import { Form } from 'react-bootstrap';
import { ToggleComponentStyled } from './style';
interface Props {
  id?: string;
  onClick?: () => void;
}
const ToggleComponent = ({ id, onClick }: Props) => {
  return (
    <ToggleComponentStyled>
      <Form.Check type="switch" id={id} onClick={onClick} />
    </ToggleComponentStyled>
  );
};

export default ToggleComponent;
