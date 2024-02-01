import styled from "styled-components";

export const HeaderStyled = styled.div`
  position: relative;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.brandColor.subtle};
  background: ${(props) => props.theme.customColor.primary};
  padding: 9px 12px;
  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    .header-right {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 25px;
      .notification {
        position: relative;
        .notify {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: ${(props) => props.theme.brandColor.primary};
          border: 3px solid ${(props) => props.theme.customColor.primary};
          position: absolute;
          z-index: 1;
          top: 0;
          right: 0;
        }
        .dropdown {
          button {
            padding: 0;
            background: transparent;
            border: 0;
            &:after {
              display: none;
            }
          }
          .dropdown-menu {
            background: ${(props) => props.theme.customColor.primary};
            border: 1px solid ${(props) => props.theme.customColor.greyBorder};
            filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.1));
            -webkit-filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.1));
            border-radius: 10px;
            padding: 0;
            a {
              padding: 0;
            }
            .notification-list {
              ul {
                li {
                  &:last-child {
                    border-radius: 0;
                    border: 0;
                  }
                }
              }
            }
            .notification-section-head {
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 15px;
              h6 {
                color: ${(props) => props.theme.darkColor.dark1};
              }
              a {
                font-size: ${(props) => props.theme.fontSize.small};
                color: ${(props) => props.theme.brandColor.primary};
              }
            }
            .notification-section-bottom {
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 15px;
              border-top: 1px solid ${(props) => props.theme.darkColor.dark4};
              a {
                font-size: ${(props) => props.theme.fontSize.small};
                color: ${(props) => props.theme.darkColor.dark3};
              }
            }
          }
        }
      }
      .profile {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        flex-wrap: wrap;
        .profile-image {
          width: 32px;
          hight: 32px;
          border-radius: 50%;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .profile-name {
          h6 {
            color: ${(props) => props.theme.brandColor.primary};
            margin-bottom: 8px;
          }
          p {
            color: ${(props) => props.theme.customColor.secondary};
            font-size: ${(props) => props.theme.fontSize.small};
          }
        }
      }
    }
  }
`;
