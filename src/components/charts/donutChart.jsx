import React from "react";
import { Donut } from "@ant-design/charts";

const data = [
  {
    type: "Total Views",
    value: 200,
  },
  {
    type: "Total Clicks",
    value: 65,
  },
  {
    type: "Signups",
    value: 22,
  },
];
const config = {
  forceFit: true,
  height: 300,

  title: {
    visible: true,
    text: "Active Medias",
    style: { fontSize: 18, fill: "#d8d8d8" },
  },

  radius: 0.8,
  innerRadius: 0.8,
  padding: "auto",
  data,
  color: ["#1baaa9", "#f0c674", "#267cb4"],
  angleField: "value",
  colorField: "type",
  label: { visible: false },
  legend: {
    position: "bottom-right",
    marker: { symbol: "circle" },
    text: { style: { fill: "#d8d8d8", fontSize: 12 } },
  },
  theme: { backgroundStyle: { fill: "#222222" } },
};

function DonutChart() {
  return <Donut {...config} />;
}

export default DonutChart;
