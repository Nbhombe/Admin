import { ButtonStyled } from './style';
interface Props {
  btnText: string;
  buttonClass?: string;
  disabled?: boolean;
  secondBtn?: boolean;
  onClick?: () => void;
}
const Button = (props: Props) => {
  const { btnText, buttonClass, disabled, secondBtn, onClick } = props;
  return (
    <ButtonStyled
      className={`${buttonClass}`}
      disabled={disabled}
      secondBtn={secondBtn}
      onClick={onClick}
    >
      {btnText}
    </ButtonStyled>
  );
};

export default Button;
