import styled from "styled-components";

export const RecentOrdersStyled = styled.div`
  position: relative;
  border-radius: 5px;
  background-color: ${(props) => props.theme.customColor.primary};
  .sub-head {
    padding: 15px 20px;
    border-bottom: 1px solid ${(props) => props.theme.darkColor.dark4};
    h6 {
      color: ${(props) => props.theme.customColor.purpleText};
    }
  }
  .table-section {
    padding: 15px 0px;
    height: 332px;
    overflow: auto;
    .table-responsive {
      height: 100%;
    }
    table {
      margin: 0;
      thead {
        position: sticky;
        top: 0;
        background: ${(props) => props.theme.customColor.primary};
        th {
          padding: 0 20px;
          color: ${(props) => props.theme.customColor.secondary};
          font-size: ${(props) => props.theme.fontSize.semiSmall};
        }
      }
      tbody {
        tr {
          td {
            text-transform: capitalize;
            padding: 15px 0px 15px 20px !important;
            background: transparent;
            color: ${(props) => props.theme.darkColor.dark1};
            font-size: ${(props) => props.theme.fontSize.small};
            p {
              color: ${(props) => props.theme.darkColor.dark1};
              font-size: ${(props) => props.theme.fontSize.small};
            }
            span {
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              max-width: 70px;
              display: inline-block;
            }
            img {
              width: 30px;
              height: 30px;
              border-radius: 50%;
              margin-right: 11px;
            }
            &:nth-child(4) {
              p {
                border-radius: 4px;
                background: #e7ffe4;
                padding: 5px;
                color: #63b25d;
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
`;
