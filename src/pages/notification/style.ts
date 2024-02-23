import styled from "styled-components";

export const NotificationStyled = styled.div`
  position: relative;
  .notification-section {
    background: ${(props) => props.theme.customColor.primary};
    border: 1px solid ${(props) => props.theme.customColor.greyBorder};
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.1));
    -webkit-filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.1));
    border-radius: 10px;
    .notification-section-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 10px;
      padding: 17px 25px;
      h6 {
        color: ${(props) => props.theme.darkColor.dark1};
      }
      a {
        font-size: ${(props) => props.theme.fontSize.small};
        color: ${(props) => props.theme.brandColor.primary};
      }
    }
  }
`;
