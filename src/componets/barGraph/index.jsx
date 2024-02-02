import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { BarGraphStyled } from "./style";
const BarGraph = () => {
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "",
    },
    xAxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Nov",
        "Dec",
      ],
      crosshair: false,
      accessibility: {
        description: "Months",
      },
    },
    yAxis: {
      min: 100000,
      title: {
        text: "",
      },
      tickInterval: 100000
    },
    tooltip: {
        valueSuffix: ' '
    },
    series: [
      {
        name: 'Revenue',
        data: [300000, 400000, 270000, 300000, 400000, 270000, 300000, 400000, 270000, 300000, 400000],
      },
    ],
  };
  return (
    <BarGraphStyled>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </BarGraphStyled>
  );
};

export default BarGraph;
