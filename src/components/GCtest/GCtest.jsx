import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend,
  Title,
  Filler,
  CategoryScale,
} from 'chart.js';
import 'chartjs-adapter-date-fns';
import './GCtest.css';

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend,
  Title,
  Filler,
  CategoryScale
);

const GCtest = () => {
  const data = {
    datasets: [
      {
        label: 'Portfolio',
        fill: true,
        backgroundColor: 'rgba(113, 128, 191, 0.2)',
        borderColor: '#4b77be',
        borderWidth: 3,
        pointRadius: 0,
        tension: 0.4,
        pointBackgroundColor: '#4b77be',
        data: [
          { x: new Date(2023, 0), y: 85000 },
          { x: new Date(2023, 1), y: 95000 },
          { x: new Date(2023, 2), y: 110000 },
          { x: new Date(2023, 3), y: 120000 },
          { x: new Date(2023, 4), y: 115000 },
          { x: new Date(2023, 5), y: 120000 },
          { x: new Date(2023, 6), y: 123000, pointRadius: 8 },
        ],
      },
      {
        label: 'Prediction',
        fill: false,
        borderDash: [5, 5],
        borderColor: '#4b77be',
        borderWidth: 3,
        pointRadius: 0,
        tension: 0.4,
        data: [
          { x: new Date(2023, 0), y: 85000 },
          { x: new Date(2023, 1), y: 95000 },
          { x: new Date(2023, 2), y: 110000 },
          { x: new Date(2023, 3), y: 120000 },
          { x: new Date(2023, 4), y: 115000 },
          { x: new Date(2023, 5), y: 120000 },
          { x: new Date(2023, 6), y: 123000 },
          { x: new Date(2023, 7), y: 130000 },
          { x: new Date(2023, 8), y: 145000 },
          { x: new Date(2023, 9), y: 150000 },
        ],
      },
    ],
  };

  const options = {
    animation: {
      duration: 1000,
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'month',
          tooltipFormat: 'MMM',
          displayFormats: {
            month: 'MMM',
          },
        },
        ticks: {
          callback: function (value) {
            const monthIndex = new Date(value).getMonth();
            return monthIndex <= 6 ? new Date(value).toLocaleString('default', { month: 'short' }) : '';
          },
          color: '#9a9a9a',
          maxRotation: 0,
          minRotation: 0,
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: false,
        ticks: {
          callback: function () {
            return '';
          },
          color: '#333333',
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y === 123000) {
              label += '£123000'; // Custom label for the specific point
            } else {
              label += '£' + context.parsed.y.toLocaleString();
            }
            return label;
          },
        },
      },
      annotation: {
        annotations: {
          text1: {
            type: 'label',
            content: '£123000',
            position: {
              x: 'end',
              y: 'start',
            },
            xValue: new Date(2023, 6),
            yValue: 123000,
            backgroundColor: 'rgba(113, 128, 191, 0.8)',
            color: 'white',
          },
        },
      },
    },
  };

  return (
    <div className="graph-container">
      <div className="header">
        <h2>Portfolio</h2>
        <button className="settings-button">Settings</button>
      </div>
      <div className="chart-container">
        <Line data={data} options={options} />
      </div>
      <div className="prediction-text">Our Prediction</div>
    </div>
  );
};

export default GCtest;
