import styled from "styled-components";

export const SidebarStyled = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.brandColor.primary};
  width: 220px;
  height: 100%;
  padding: 26px 23px;
  transition: 0.5s all;
  &.active {
    width: 80px;
    transition: 0.5s all;
    .logo {
      .mainlogo {
        display: none;
      }
      .minilogo {
        display: block;
      }
      .toggle-button {
        .arrow-back {
          transform: rotate(180deg);
        }
      }
    }
  }
  .logo {
    position: relative;
    .minilogo {
      display: none;
    }
    .toggle-button {
      background-color: ${(props) => props.theme.customColor.sidebarToggleBg};
      width: 28px;
      height: 28px;
      border-radius: 50%;
      position: absolute;
      right: -40px;
      top: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        fill: ${(props) => props.theme.customColor.primary};
      }
    }
  }
  .navigation {
    margin-top: 20px;
    ul {
      padding: 0;
      li {
        padding-bottom: 20px;
        list-style: none;
        a {
          position: relative;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 15px 0;
          p {
            color: ${(props) => props.theme.customColor.primary};
            font-size: ${(props) => props.theme.fontSize.small};
            font-weight: 400;
          }
          &:after {
            position: absolute;
            content: "";
            left: 0;
            bottom: 0;
            width: 0;
            height: 1px;
            background-color: ${(props) => props.theme.customColor.primary};
          }
          &:hover:after {
            transition: 1s all;
            width: 100%;
          }
        }
      }
    }
  }
`;
