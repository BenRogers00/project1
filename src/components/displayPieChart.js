//test for pie chart functionality using Chart.js
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "../utils/Data";
import PieChart from "../components/PieChart";

Chart.register(CategoryScale);

export default function DispPieChart() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.type), 
    datasets: [
      {
        label: "Money:",
        data: Data.map((data) => data.total),
        //colours for each 'slice'
        backgroundColor: [
          "#ecf0f1",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "white",
        borderWidth: 5
      }
    ]
  });

  return (
    <div className="PieChart">
      <PieChart chartData={chartData} />
    </div>
  );
}