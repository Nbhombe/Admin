import styled from "styled-components";

export const CustomerStyled = styled.div`
  position: relative;
  border-radius: 5px;
  background-color: ${(props) => props.theme.customColor.primary};
  .sub-head {
    padding: 15px 20px;
    border-bottom: 1px solid ${(props) => props.theme.darkColor.dark4};
    margin-bottom: 15px;
    h6 {
      color: ${(props) => props.theme.customColor.purpleText};
    }
  }
  .customer-list {
    ul {
      padding: 0;
      margin: 0;
      height: 315px;
      overflow: auto;
      li {
        list-style: none;
        margin: 0;
        padding: 0 20px 25px 20px;
        .customer-list-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .customer-list-inner-left {
            display: flex;
            align-items: center;
            .customer-list-inner-image {
              width: 36px;
              height: 36px;
              border-radius: 4px;
              img {
                width: 100%;
                height: 100%;
                border-radius: 4px;
                object-fit: cover;
              }
            }
            .customer-list-inner-content {
              margin-left: 12px;
              h6 {
                color: ${(props) => props.theme.darkColor.dark1};
                margin: 0;
              }
              p {
                color: ${(props) => props.theme.darkColor.dark1};
                font-size: ${(props) => props.theme.fontSize.small};
              }
            }
          }
          .customer-list-inner-right {
            .customer-list-inner-price {
              p {
                font-size: ${(props) => props.theme.fontSize.small};
                color: ${(props) => props.theme.customColor.secondary};
              }
            }
          }
        }
      }
    }
  }
`;
