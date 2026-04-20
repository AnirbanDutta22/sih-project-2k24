// ComplianceReportChart.js
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ComplianceChart = () => {
  const data = {
    labels: ["Compliant", "Partially Compliant", "Non-Compliant"],
    datasets: [
      {
        label: "Application Compliance Report",
        data: [40, 30, 20], // Example data: 40 compliant, 30 partially compliant, 20 non-compliant
        backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
        hoverBackgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
        borderColor: ["#FFFFFF", "#FFFFFF", "#FFFFFF"],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div style={{ width: "400px", margin: "0 auto" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default ComplianceChart;
