import { Form } from "react-bootstrap";
import styled from "styled-components";
import Toggle from "../../assets/icons/toggle.svg";

export const ToggleComponentStyled = styled(Form)`
  .form-switch {
    input {
      background-color: ${(props) => props.theme.customColor.toggleBg};
      background-image: url(${Toggle});
      background-size: 10px 10px;
      background-position: 5px center;
      &:active,
      &:hover,
      &:focus {
        border: 0;
        outline: 0;
        box-shadow: 0 0 0 transparent;
        background-image: url(${Toggle});
      }
      &:checked {
        background-color: ${(props) => props.theme.brandColor.primary};
        background-image: url(${Toggle});
        background-position: 18px center;
      }
    }
  }
  input {
      background-color: ${(props) => props.theme.customColor.toggleBg};
      background-image: url(${Toggle});
      background-size: 10px 10px;
      background-position: 5px center;
      &:active,
      &:hover,
      &:focus {
        border: 0;
        outline: 0;
        box-shadow: 0 0 0 transparent;
        background-image: url(${Toggle});
      }
      &:checked {
        background-color: ${(props) => props.theme.brandColor.primary};
        background-image: url(${Toggle});
        background-position: 18px center;
      }
    }
`;
