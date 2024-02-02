import styled from "styled-components";
import ProfileBg from "../../assets/images/profile-bg.png";
export const ProfileStyled = styled.div`
  position: relative;
  .profile-head {
    margin-bottom: 20px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.customColor.primary};
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 50px 20px 34px;
    gap: 30px;
    position: relative;
    z-index: 1;
    &:after {
      position: absolute;
      content: "";
      border-radius: 5px 5px 0 0;
      top: 0;
      left: 0;
      right: 0;
      background-color: ${(props) => props.theme.brandColor.lighter};
      background-image: url(${ProfileBg});
      background-repeat: no-repeat;
      background-position: 80% 100%;
      background-size: contain;
      height: 83px;
      z-index: -1;
    }
    .profile-picture {
      border-radius: 10px;
      width: 100px;
      height: 100px;
      padding: 5px;
      background-color: ${(props) => props.theme.customColor.notifyOddBg};
      img {
        border-radius: 10px;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .profile-subinfo {
      h4 {
        font-weight: 700;
        color: ${(props) => props.theme.customColor.purpleText};
      }
      ul {
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 15px;
        gap: 50px;
        li {
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          i {
            width: 17px;
            height: 17px;
            color: ${(props) => props.theme.darkColor.dark2};
          }
          p {
            color: ${(props) => props.theme.darkColor.dark2};
            font-size: ${(props) => props.theme.fontSize.semiSmall};
          }
        }
      }
    }
  }
  .personal-info {
    border-radius: 5px;
    background-color: ${(props) => props.theme.customColor.primary};
    padding: 20px;
    h4 {
      color: ${(props) => props.theme.customColor.purpleText};
      font-weight: 500;
      margin-bottom: 30px;
      &.contact-head {
        margin-top: 30px;
      }
    }
    ul {
      margin: 0;
      padding: 0;
      gap: 30px;
      display: flex;
      flex-direction: column;
      li {
        list-style: none;
        display: flex;
        align-items: center;
        p {
          width: 30%;
          font-size: ${(props) => props.theme.fontSize.small};
          color: ${(props) => props.theme.darkColor.dark2};
        }
        h6 {
          font-size: ${(props) => props.theme.fontSize.small};
          font-weight: 500;
          color: ${(props) => props.theme.customColor.secondary};
          word-break: break-all;
        }
      }
    }
  }
  .timeline-main {
    border-radius: 5px;
    background-color: ${(props) => props.theme.customColor.primary};
    padding: 20px;
    .timeline {
      position: relative;
      ul {
        margin: 0;
        padding: 0;
        li {
          list-style: none;
          padding-left: 18px;
          position: relative;
          border-left: 1px solid ${(props) => props.theme.darkColor.dark4};
          padding-bottom: 40px;
          &:last-child {
            border: 0;
          }
          &:after {
            position: absolute;
            content: "";
            top: 0;
            left: -5px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            z-index: 1;
          }
          &:nth-child(1):after {
            background-color: ${(props) => props.theme.brandColor.primary};
            border: 2px solid ${(props) => props.theme.customColor.purpleLight};
          }
          &:nth-child(2):after {
            background-color: ${(props) => props.theme.statusColor.success};
            border: 2px solid ${(props) => props.theme.customColor.purpleLight};
          }
          &:nth-child(3):after {
            background-color: ${(props) => props.theme.statusColor.warning};
            border: 2px solid ${(props) => props.theme.customColor.purpleLight};
          }
          &:nth-child(4):after {
            background-color: ${(props) => props.theme.customColor.pinkBg};
            border: 2px solid ${(props) => props.theme.customColor.purpleLight};
          }
          .timeline-step {
            h5 {
              font-size: ${(props) => props.theme.fontSize.small};
              font-weight: 400;
              color: ${(props) => props.theme.darkColor.dark1};
            }
            p {
              margin-top: 13px;
              font-size: ${(props) => props.theme.fontSize.semiSmall};
              font-weight: 400;
              color: ${(props) => props.theme.darkColor.dark1};
              a {
                font-size: ${(props) => props.theme.fontSize.semiSmall};
                font-weight: 400;
                color: ${(props) => props.theme.darkColor.dark1};
              }
            }
            .client-detail {
              display: flex;
              align-items: center;
              gap: 10px;
              margin-top: 20px;
              .client-image {
                width: 43px;
                height: 43px;
                border-radius: 50%;
                img {
                  width: 100%;
                  height: 100%;
                  border-radius: 50%;
                  object-fit: cover;
                }
              }
              .client-name {
                h4 {
                  font-size: ${(props) => props.theme.fontSize.semiSmall};
                  font-weight: 500;
                  color: ${(props) => props.theme.darkColor.dark1};
                }
                p {
                  margin-top: 10px;
                  font-size: ${(props) => props.theme.fontSize.semiSmall};
                  font-weight: 400;
                  color: ${(props) => props.theme.darkColor.dark1};
                }
              }
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: ${(props) => props.theme.breakPoints.md}) {
    .personal-info {
      ul {
        li {
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          p {
            width: 100%;
          }
        }
      }
    }
    .timeline-main {
      margin-top: 20px;
    }
  }
`;
