import { Form } from "react-bootstrap";
import styled from "styled-components";

export const FormInputStyled = styled(Form.Group)`
  position: relative;
  label {
    margin-top: 25px;
    font-size: ${(props) => props.theme.fontSize.small};
    color: ${(props) => props.theme.darkColor.dark2};
  }
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
  display: ${({ icon }) => (icon ? "flex" : "block")};
  ${({ icon, theme }) =>
    icon &&
    `
      border-radius: 8px;
        border: 1px solid ${theme.darkColor.dark4};
        &:has(input:hover),
        &:has(input:active),
        &:has(input:focus) {
          border: 1px solid ${theme.brandColor.primary};
          box-shadow: 0 0 0 transparent;
        }
      `}
  .input-group-text {
    background: transparent;
    border: 0;
    padding-right: 9px;
  }
  input {
    padding: ${({ icon }) => (icon ? "12px 15px" : "14px 15px")};
    padding-left: ${({ icon }) => (icon ? "0" : "15px")};
    border-radius: 4px;
    border: ${({ icon, theme }) =>
      icon ? "1px solid transparent" : `1px solid ${theme.darkColor.dark4}`};
    background: ${(icon, theme) =>
      icon ? "transparent" : theme.customColor.primary};
    font-size: ${(props) => props.theme.fontSize.small};
    color: ${(props) => props.theme.darkColor.dark2};
    &:hover,
    &:active,
    &:focus {
      box-shadow: 0 0 0 transparent;
      border: 1px solid transparent;
      background: transparent;
    }
    ${({ icon, theme }) =>
      !icon &&
      `&:hover,
      &:active,
      &:focus {
        border: 1px solid ${theme.brandColor.primary};
        box-shadow: 0 0 0 transparent;
        font-size: ${theme.fontSize.small};
        color: ${theme.darkColor.dark3};
      }`}
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px white inset !important;
    }
    &::placeholder {
      font-size: ${(props) => props.theme.fontSize.small};
      color: ${(props) => props.theme.darkColor.dark3};
    }
  }
`;
