// App.js
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import DispPieChart from "./components/displayPieChart";

Chart.register(CategoryScale);

export default function App() {

  return (
    <div className="App">
      <h1>Pie Chart</h1>
      <DispPieChart />
    </div>
  );
}