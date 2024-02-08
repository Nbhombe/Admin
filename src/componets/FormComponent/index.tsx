import { FormComponentStyled } from './style';
import { useTheme } from 'styled-components';

const FormComponent = ({
  formComponentClass,
  formHead,
  formPara,
  ifsvg,
  children,
}) => {
  const theme = useTheme();
  return (
    <FormComponentStyled className={`${formComponentClass}`}>
      <div className="form-logo">{theme.logo}</div>
      <div className="form-head">
        <h1>
          {formHead} {ifsvg && theme.lock}
        </h1>
        <p>{formPara}</p>
      </div>
      {children}
    </FormComponentStyled>
  );
};

export default FormComponent;
