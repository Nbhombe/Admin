import { FormCheckInputProps } from "react-bootstrap/esm/FormCheckInput";
import styled from "styled-components";

export const FormChecboxStyled = styled.div<FormCheckInputProps>`
  position: relative;
  margin-top: 25px;
  label {
    font-size: ${(props) => props.theme.fontSize.small};
    color: ${(props) => props.theme.darkColor.dark2};
  }
  input {
    border: 1px solid ${(props) => props.theme.darkColor.dark4};
    background-color: ${(props) => props.theme.customColor.primary};
    &:focus,
    &:hover,
    &:active {
      border: 1px solid ${(props) => props.theme.brandColor.primary}!important;
      box-shadow: 0 0 0 transparent;
    }
    &:checked {
      background-color: ${(props) => props.theme.brandColor.primary};
    //   background-image: url({theme.check});
    }
  }
`;
