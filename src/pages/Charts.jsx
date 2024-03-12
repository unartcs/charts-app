import React, { useState } from "react";
import BudgetChart from "../charts/BudgetChart";
import UsersChart from "../charts/UsersChart";
import TrafficChart from "../charts/TrafficChart";

const Charts = () => {
  const [chart, setChart] = useState("budget-chart");
  const chartHandler = (e) => {
    setChart(e.target.value);
  };
  return (
    <div className="flex flex-col w-full text-center gap-5">
      <div className="self-center">
        <select value={chart} onChange={chartHandler}>
          <option value="budget-chart">Budget</option>
          <option value="users-chart">Users</option>
          <option value="traffic-chart">Traffic</option>
        </select>
      </div>
      <div className="chart-content w-auto">
        {chart === "budget-chart" && <BudgetChart />}
        {chart === "users-chart" && <UsersChart />}
        {chart === "traffic-chart" && <TrafficChart />}
      </div>
    </div>
  );
};

export default Charts;
