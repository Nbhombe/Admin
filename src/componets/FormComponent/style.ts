import styled from "styled-components";
import Check from "../../assets/icons/check.svg";

export const FormComponentStyled = styled.div`
  position: relative;
  padding: 0 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.customColor.primary};
  .form-head {
    margin-top: 40px;
    h1 {
      color: ${(props) => props.theme.brandColor.primary};
      display: flex;
      align-items: center;
      svg {
        margin-left: 6px;
      }
    }
    p {
      margin-top: 25px;
      font-size: ${(props) => props.theme.fontSize.small};
      color: ${(props) => props.theme.darkColor.dark1};
    }
  }
  form {
    margin-top: 15px;
    .form-btn {
      margin-top: 25px;
      width: 100%;
    }
    .forget-pass {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 30px;
      .form-check {
        label {
          font-size: ${(props) => props.theme.fontSize.small};
          color: ${(props) => props.theme.darkColor.dark2};
        }
        input {
          border-radius: 4px;
          border: 1px solid ${(props) => props.theme.darkColor.dark4};
          background-color: ${(props) => props.theme.customColor.primary};
          box-shadow: 0 0 0 transparent;
          &:hover,
          &:focus,
          &:active {
            background-color: ${(props) => props.theme.customColor.primary};
            filter: brightness(100%);
          }
          &:checked {
            background-image: url(${Check});
            box-shadow: 0 0 0 transparent;
          }
        }
      }
      .forget-link {
        color: ${(props) => props.theme.brandColor.primary};
        font-size: ${(props) => props.theme.fontSize.small};
        font-weight: 500;
      }
    }
    .signin-option {
      margin-top: 30px;
      text-align: center;
      .sign-link {
        color: ${(props) => props.theme.customColor.linkText};
        font-size: ${(props) => props.theme.fontSize.normal};
        font-weight: 400;
      }
      .signin-social {
        margin-top: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
      }
    }
    .login-link {
      margin-top: 20px;
      p {
        a {
          color: ${(props) => props.theme.brandColor.primary};
          font-size: ${(props) => props.theme.fontSize.normal};
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
`;