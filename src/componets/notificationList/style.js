import styled from "styled-components";

export const NotificationListStyled = styled.div`
  position: relative;
  height: ${({ notifyDropdown }) => (notifyDropdown ? "252px" : "auto")};
  overflow: auto;
  ul {
    padding: 0;
    margin: 0;
    li {
      cursor: pointer;
      list-style: none;
      display: flex;
      align-items: center;
      padding: ${({ notifyDropdown }) =>
        notifyDropdown ? "15px" : "15px 25px"};
      border-bottom: 1px solid ${(props) => props.theme.darkColor.dark4};
      &:nth-child(even) {
        .notification-content {
          .notification-content-image {
            background: ${(props) => props.theme.customColor.notifyEvenBg};
            p {
              color: ${(props) => props.theme.customColor.notifyEvenText};
            }
          }
        }
      }
      &:nth-child(odd) {
        .notification-content {
          .notification-content-image {
            background: ${(props) => props.theme.customColor.notifyOddBg};
            p {
              color: ${(props) => props.theme.customColor.notifyOddText};
            }
          }
        }
      }
      &.unread {
        background: ${(props) => props.theme.brandColor.subtle};
        .notification-content {
          .notification-content-image {
            background: ${(props) => props.theme.customColor.notifyUnreadBg};
            p {
              color: ${(props) => props.theme.customColor.notifyUnreadText};
            }
          }
        }
      }

      .notification-content {
        flex: 1 1 0;
        display: flex;
        align-items: center;
        .notification-content-image {
          position: relative;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 15px;
          p {
            font-size: ${(props) => props.theme.fontSize.medium};
          }
          .notification-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: ${(props) => props.theme.brandColor.primary};
            border: 3px solid ${(props) => props.theme.customColor.primary};
            position: absolute;
            z-index: 1;
            bottom: 0;
            right: 0;
          }
        }
        .notification-content-inner {
          h6 {
            font-weight: 500;
            margin-bottom: 5px;
            color: ${(props) => props.theme.customColor.blueText};
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            max-width: 190px;
          }
          p {
            font-size: ${(props) => props.theme.fontSize.semiSmall};
            color: ${(props) => props.theme.darkColor.dark2};
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            max-width: 190px;
          }
          .notification-date-inner {
            flex: 1 1 0;
            p {
              font-size: ${(props) => props.theme.fontSize.semiSmall};
              color: ${(props) => props.theme.darkColor.dark1};
            }
          }
        }
      }
      .notification-date {
        flex: 1 1 0;
        display: ${({ notifyDropdown }) => (notifyDropdown ? "none" : "block")};
        p {
          font-size: ${(props) => props.theme.fontSize.semiSmall};
          color: ${(props) => props.theme.darkColor.dark1};
        }
      }
      &:last-child {
        border-radius: 0 0 10px 10px;
      }
    }
  }
  @media only screen and (max-width: ${(props) => props.theme.breakPoints.md}) {
    ul {
      li {
        flex-direction: column;
    gap: 10px;
    align-items: flex-start;
        .notification-content {
          flex-wrap: wrap;
          gap: 10px;
          .notification-content-inner {
            h6,
            p {
              max-width: 100px;
            }
          }
        }
      }
    }
  }
`;
