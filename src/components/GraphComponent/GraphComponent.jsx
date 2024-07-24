import { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import './GraphComponent.css';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class GraphComponent extends Component {
  render() {
    const options = {
      animationEnabled: true,
      backgroundColor: "#ffffff",
      axisX: {
        valueFormatString: "MMM",
        intervalType: "month",
        interval: 1,
        tickLength: 0,
        lineThickness: 1,
        lineColor: "#333",
        labelFontColor: "#9a9a9a",
        margin: 10,
        labelFormatter: function(e) {
          const monthIndex = e.value.getMonth();
          const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
          // Hide labels after the data point with y value £123,000
          return monthIndex <= 6 ? months[monthIndex] : "";
        },
      },
      axisY: {
        prefix: "£",
        includeZero: false,
        gridThickness: 0,
        lineThickness: 0,
        tickLength: 0,
        labelFontColor: "#ffffff",
        margin: 10,
      },
      data: [
        {
          type: "splineArea",
          color: "rgba(113, 128, 191, 0.2)",
          lineColor: "#4b77be",
          lineThickness: 3,
          markerSize: 8,
          zoomEnabled: true,
          xValueFormatString: "MMMM",
          yValueFormatString: "£#,##0",
          dataPoints: [
            { x: new Date(2023, 0), y: 85000 },
            { x: new Date(2023, 1), y: 95000 },
            { x: new Date(2023, 2), y: 110000 },
            { x: new Date(2023, 3), y: 120000 },
            { x: new Date(2023, 4), y: 115000 },
            { x: new Date(2023, 5), y: 120000 },
            { x: new Date(2023, 6), y: 123000, indexLabel: "£123,000", markerColor: "transparent", markerType: "circle" }
          ]
        },
        {
          type: "spline",
          lineDashType: "dash",
          lineColor: "#4b77be",
          lineThickness: 3,
          markerSize: 0,
          dataPoints: [
            { x: new Date(2023, 0), y: 85000 },
            { x: new Date(2023, 1), y: 95000 },
            { x: new Date(2023, 2), y: 110000 },
            { x: new Date(2023, 3), y: 120000 },
            { x: new Date(2023, 4), y: 115000 },
            { x: new Date(2023, 5), y: 120000 },
            { x: new Date(2023, 6), y: 123000 }
          ]
        },
        {
          type: "splineArea",
          lineDashType: "dash",
          color: "rgba(255, 255, 255, 0)",
          lineColor: "#bcc3e1",
          lineThickness: 3,
          markerSize: 0,
          dataPoints: [
            { x: new Date(2023, 6), y: 123000 },
            { x: new Date(2023, 7), y: 130000 },
            { x: new Date(2023, 8), y: 145000 },
            { x: new Date(2023, 9), y: 150000 },
          ]
        }
      ]
    };

    return (
      <div className="graph-container">
        <div className="header">
          <h2>Portfolio</h2>
          <button className="settings-button">Settings</button>
        </div>
        <div className="chart-container">
          <CanvasJSChart options={options} />
        </div>
        <div className="prediction-text">Our Prediction</div>
      </div>
    );
  }
}

export default GraphComponent;
