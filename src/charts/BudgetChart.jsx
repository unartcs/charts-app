import React, { useEffect, useRef, useState } from "react";
import Highcharts from "highcharts";
import './charts.css'
const BudgetChart = () => {
  const chartRef = useRef(null);
  useEffect(() => {
    const chart = Highcharts.chart("chart-container", {
      chart: {
        type: "bar",
      },
      title: {
        text: "Budget Chart",
      },
      series: [
        {
          data: [1, 3, 2, 4],
        },
      ],
    });
    chart.reflow()
    const handleResize = () => {
        chart.reflow()
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="chart-wrapper flex justify-center">
      <div id="chart-container" ref={chartRef} className="chart-wrapper w-[90%]"></div>
    </div>
  );
};

export default BudgetChart;
