// import React from "react";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const SectorPerformanceChart = () => {
  const data = {
    labels: [
      "Ayurveda",
      "Yoga",
      "Naturopathy",
      "Unani",
      "Siddha",
      "Homoeopathy",
    ],
    datasets: [
      {
        label: "Applications Approved",
        data: [45, 35, 25, 15, 30, 20],
        backgroundColor: "#4caf50",
      },
      {
        label: "Applications Pending",
        data: [15, 20, 10, 5, 12, 8],
        backgroundColor: "#f44336",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Sector Performance Metrics",
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export const SectorGrowthPatternChart = () => {
  // Sample data for sector growth patterns
  const data = {
    labels: ["2020", "2021", "2022", "2023", "2024"], // Years as X-axis labels
    datasets: [
      {
        label: "Ayurveda",
        data: [20, 30, 50, 70, 90], // Growth data for Ayurveda
        borderColor: "#ff9800", // Orange line
        backgroundColor: "rgba(255, 152, 0, 0.5)",
        fill: true,
      },
      {
        label: "Yoga",
        data: [10, 25, 35, 60, 80], // Growth data for Yoga
        borderColor: "#2196f3", // Blue line
        backgroundColor: "rgba(33, 150, 243, 0.5)",
        fill: true,
      },
      {
        label: "Naturopathy",
        data: [15, 20, 30, 50, 65], // Growth data for Naturopathy
        borderColor: "#9c27b0", // Purple line
        backgroundColor: "rgba(156, 39, 176, 0.5)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Sector Growth Patterns Over Time",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
        },
      },
      y: {
        title: {
          display: true,
          text: "Growth Index",
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};
