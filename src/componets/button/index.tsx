import { ButtonStyled } from './style';
interface Props {
  btnText: string;
  buttonClass: string;
  disabled?: boolean;
  secondBtn?: any;
}
const Button = (props: Props) => {
  const { btnText, buttonClass, disabled, secondBtn } = props;
  return (
    <ButtonStyled
      className={`${buttonClass}`}
      disabled={disabled}
      secondBtn={secondBtn}
    >
      {btnText}
    </ButtonStyled>
  );
};

export default Button;
