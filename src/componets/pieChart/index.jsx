import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { PieChartStyled } from "./style";

const PieChart = () => {
    const options = {
          chart: {
            type: 'pie'
          },
          title: {
            verticalAlign: 'middle',
            floating: true,
            text: '<p>Total</p><br><p>4145</p>'
          },
          yAxis: {
            title: {
              text: ''
            }
          },
          plotOptions: {
            pie: {
              shadow: false,
              point: {
                events: {
                  mouseOver: function(e) {
                    this.originalRadius = this.graphic.r;
                    this.graphic.animate({
                      r: this.originalRadius*1.07
                    }, 200);
                  },
                  mouseOut: function(e) {
                    this.graphic.animate({
                      r: this.originalRadius
                    }, 200);
                  }
                }
              }
            }
          },
          tooltip: {
            formatter: function() {
              return '<b>' + this.point.name + '</b>: ' + this.y + ' %';
            }
          },
          series: [{
            name: 'Data',
            data: [
              ["Direct", 8],
              ["Social", 5],
              ["Email", 7],
              ["Other", 7],
              ["Referrals", 7],
            ],
            size: '100%',
            innerSize: '60%',
            showInLegend: true,
            dataLabels: {
              enabled: false
            },
            states: {
              hover: {
                halo: false
              }
            },
          }]
      };
  return (
    <PieChartStyled>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </PieChartStyled>
  );
};

export default PieChart;
