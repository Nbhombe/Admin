import { ButtonStyled } from "./style";

const Button = ({btnText, buttonClass, disabled, secondBtn}) => {
    return (
        <ButtonStyled className={`${buttonClass}`} disabled={disabled} secondBtn={secondBtn}>
            {btnText}
        </ButtonStyled>
    )
}

export default Button;