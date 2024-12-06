//test for pie chart functionality using Chart.js
import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ chartData }) {
  return (
    <div className="chart-container">
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              //chart title
              text: "Split of money"
            }
          }
        }}
      />
    </div>
  );
}
export default PieChart;