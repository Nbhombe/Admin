import { FormComponentStyled } from './style';
import { useTheme } from 'styled-components';

interface Props {
  formComponentClass: string;
  formHead: string;
  formPara: string;
  ifsvg?: boolean;
  children: any;
}
const FormComponent = (props: Props) => {
  const { formComponentClass, formHead, formPara, ifsvg, children } = props;
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
