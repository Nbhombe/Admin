import styled from "styled-components";

export const BarGraphStyled = styled.div`
  position: relative;
  padding: 0 15px;
  .highcharts-container {
    width: 100% !important;
    svg {
      width: 100%;
      display: flex;
      .highcharts-series-group {
        .highcharts-series {
          .highcharts-point {
            fill: ${(props) => props.theme.brandColor.primary};
          }
        }
      }
      .highcharts-grid {
        .highcharts-grid-line {
          opacity: 0;
        }
      }
      .highcharts-axis {
        path {
          stroke: ${(props) => props.theme.brandColor.subtle};
        }
      }
      .highcharts-axis-labels {
        text {
          font-size: ${(props) => props.theme.fontSize.semiSmall}!important;
          color: ${(props) => props.theme.darkColor.dark3}!important;
          fill: ${(props) => props.theme.darkColor.dark3}!important;
        }
      }
      .highcharts-label {
        text {
          tspan:nth-child(3) {
            color: ${(props) => props.theme.brandColor.primary}!important;
            fill: ${(props) => props.theme.brandColor.primary}!important;
          }
        }
      }
      .highcharts-legend {
        display: none;
      }
      .highcharts-credits {
        display: none;
      }
      .highcharts-background {
        height: 0;
      }
    }
  }
`;
