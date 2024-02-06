import styled from "styled-components";

export const ButtonStyled = styled.button`
  position: relative;
  border: 1px solid
    ${({ secondBtn, theme }) =>
      secondBtn ? theme.brandColor.subtle : theme.brandColor.primary};
  outline: 0;
  box-shadow: 0 0 0 transparent;
  border-radius: 5px;
  padding: 14px;
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
  background: ${({ secondBtn, theme }) =>
    secondBtn ? theme.brandColor.subtle : theme.brandColor.primary};
  color: ${({ secondBtn, theme }) =>
    secondBtn ? theme.brandColor.primary : theme.customColor.primary};
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: 700;
  &:hover {
    transition: 0.5s all;
    background: transparent;
    color: ${(props) => props.theme.brandColor.primary};
    border: 1px solid ${(props) => props.theme.brandColor.primary};
  }
`;
