import { FormSelectProps } from "react-bootstrap";
import styled from "styled-components";
export const FormSelectStyled = styled.div<FormSelectProps>`
  position: relative;
  label {
    margin-top: 25px;
    font-size: ${(props) => props.theme.fontSize.small};
    color: ${(props) => props.theme.darkColor.dark2};
  }
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
  .react-select-container {
    .react-select__control {
        padding: 14px 15px;
        border-radius: 4px;
        border: 1px solid ${(props) => props.theme.darkColor.dark4};
        background: ${(props) => props.theme.customColor.primary};
        font-size: ${(props) => props.theme.fontSize.small};
        color: ${(props) => props.theme.darkColor.dark2};
        &:hover,
        &:active,
        &:focus {
            border: 1px solid ${(props) => props.theme.brandColor.primary}!important;
            box-shadow: 0 0 0 transparent;
            font-size: ${(props) => props.theme.fontSize.small};
            color: ${(props) => props.theme.darkColor.dark3};
        }
        
        .react-select__value-container {
            padding: 0;
            .react-select__placeholder {
                font-size: ${(props) => props.theme.fontSize.small};
                color: ${(props) => props.theme.darkColor.dark3};
            }
            .react-select__input-container {
                padding: 0;
                margin: 0;
            }
        }
        .react-select__indicators {
            .react-select__indicator-separator {
                display: none;
            }
            .react-select__indicator {
                padding: 0;
            }
        }
    }
    .react-select__menu {
        border: 1px solid ${(props) => props.theme.darkColor.dark4}
        background: ${(props) => props.theme.customColor.primary};
        font-size: ${(props) => props.theme.fontSize.small};
        color: ${(props) => props.theme.darkColor.dark2};
        .react-select__menu-list {
            .react-select__option {
                &:hover, &.react-select__option--is-focused {
                    background: transparent;
                    color: ${(props) => props.theme.brandColor.primary};
                }
            }
        }
    }
  }
`;
