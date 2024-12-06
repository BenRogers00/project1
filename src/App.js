// App.js
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import DispPieChart from "./components/displayPieChart";
import InputCategoryAmounts from "./components/input";

Chart.register(CategoryScale);

export default function App() {

  return (
    <div className="App">
      <h1>Pie Chart</h1>
      <InputCategoryAmounts />
      <DispPieChart />
      
    </div>
  );
}