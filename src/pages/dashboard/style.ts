import styled from "styled-components";

export const DashboardStyled = styled.div`
  position: relative;
  .head-section {
    margin: 20px 0;
    h4 {
      color: ${(props) => props.theme.customColor.headText};
      font-weight: 400;
      margin-bottom: 15px;
      span {
        font-weight: 700;
      }
    }
    p {
      color: ${(props) => props.theme.darkColor.dark2};
      font-size: ${(props) => props.theme.fontSize.semiSmall};
    }
  }
  .earning-cards {
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
    .earning-card-inner {
      flex: 1 1 auto !important;
    }
  }
  .middle-part {
    margin-top: 20px;
    .bar-graph {
      position: relative;
      border-radius: 5px;
      background-color: ${(props) => props.theme.customColor.primary};
      .bar-graph-head {
        padding: 15px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        ul {
          padding: 0;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 3px;
          li {
            list-style: none;
            background-color: rgba(
              ${(props) => props.theme.transparency.darkColor.dark4},
              0.4
            );
            border-radius: 3px;
            padding: 3px;
            width: 22px;
            height: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: 0.5s all;
            a {
              color: ${(props) => props.theme.darkColor.dark3};
              font-size: 10px;
            }
            &:hover,
            &.active {
              transition: 0.5s all;
              background-color: rgba(
                ${(props) => props.theme.transparency.brandColor.subtle},
                0.5
              );
              a {
                color: ${(props) => props.theme.brandColor.lighter};
              }
            }
          }
        }
      }
      .bar-graph-stats {
        margin-bottom: 25px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .bar-graph-stats-inner {
          flex: 1;
          text-align: center;
          padding: 21px 0;
          background-color: ${(props) => props.theme.customColor.purpleLight};
          border: 1px dashed
            rgba(
              ${(props) =>
                props.theme.transparency.customColor.sidebarToggleBg},
              0.6
            );
          h2 {
            color: ${(props) => props.theme.customColor.purpleLight};
          }
          p {
            margin-top: 10px;
            font-size: ${(props) => props.theme.fontSize.semiSmall};
            color: ${(props) => props.theme.customColor.grapStats};
          }
        }
      }
    }
    .pie-chart {
      position: relative;
      border-radius: 5px;
      background-color: ${(props) => props.theme.customColor.primary};
      .pie-graph-head {
        padding: 15px 20px;
        border-bottom: 1px solid ${(props) => props.theme.darkColor.dark4};
      }
    }
  }
  .bottom-part {
    margin-top: 20px;
    .recent-order-sec-inner,
    .top-customer-sec-inner {
      height: 100%;
    }
  }
  @media only screen and (max-width: ${(props) => props.theme.breakPoints.md}) {
    .middle-part {
      .col-lg-8,
      col-lg-4 {
        display: block !important;
      }
      .pie-chart {
        margin-top: 20px;
      }
      .bar-graph {
        .bar-graph-head {
          flex-direction: column;
          gap: 10px;
        }
        .bar-graph-stats {
          flex-direction: column;
        }
      }
    }
    .bottom-part {
      .recent-order-sec-inner {
        margin-top: 20px;
      }
    }
  }
`;
