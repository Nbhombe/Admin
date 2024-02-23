import styled from "styled-components";

export const PieChartStyled = styled.div`
  position: relative;
  height: calc(100% - 50px);
  & > div {
    height: 100%;
  }
  .highcharts-container {
    height: 100%;
    width: 100% !important;
    svg {
      width: 100% !important;
      display: flex;
      .highcharts-legend {
        .highcharts-legend-item {
          text {
            font-size: ${(props) => props.theme.fontSize.semiSmall}!important;
            color: ${(props) => props.theme.darkColor.dark1}!important;
            fill: ${(props) => props.theme.darkColor.dark1}!important;
          }
        }
      }
    }
    .highcharts-credits {
      display: none;
    }
  }
  @media only screen and (max-width: ${(props) => props.theme.breakPoints.md}) {
    height: 400px;
  }
`;
