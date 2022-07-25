import _ from "lodash";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import React from "react";
import Utils from "./Utils";

Chart.register(...registerables);

const WeatherCharts = ({ forecastData }) => {
  const labels = [];
  const highTemps = [];
  const lowTemps = [];
  const weatherDescription = [];

  _.map(forecastData?.[0].data?.daily, (dataItem) => {
    labels.push(new Date(dataItem.dt * 1000).toLocaleDateString());
    highTemps.push(Utils.connvertKelvinToCelsious(dataItem.temp.max));
    lowTemps.push(Utils.connvertKelvinToCelsious(dataItem.temp.min));
    weatherDescription.push(dataItem.weather[0].description);
  });

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      intersect: false,
      mode: "index",
    },
    plugins: {
      title: {
        display: true,
        text: "7 Days forecast data",
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            let label = context.dataset.label || "";
            if (label) label += " °C";
            return label;
          },
          footer: (context) => {
            return weatherDescription[context[0].dataIndex];
          },
        },
      },
    },
  };

  const datasets = [
    {
      data: highTemps,
      label: "High",
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      fill: false,
      pointHoverRadius: 6,
      pointHoverBorderWidth: 3,
    },
    {
      data: lowTemps,
      label: "Low",
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      fill: false,
      pointHoverRadius: 6,
      pointHoverBorderWidth: 3,
    },
  ];

  const data = {
    labels: labels,
    datasets: datasets,
  };

  return (
    <div className="charts--container">
      <Line options={options} data={data} />
    </div>
  );
};

export default WeatherCharts;
