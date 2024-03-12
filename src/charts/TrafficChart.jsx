import React, { useEffect } from "react";
import Highcharts from "highcharts";

const TrafficChart = () => {
  useEffect(() => {
    Highcharts.chart("chart-container", {
      chart: {
        type: "bar",
      },
      title: {
        text: "Total Traffic",
      },
      series: [
        {
          data: [1, 3, 2, 4],
        },
      ],
    });
  }, []);

  return (
    <div className="chart-wrapper flex justify-center">
      <div id="chart-container" className="w-[90%]"></div>
    </div>
  );
};

export default TrafficChart;
