import React from "react";
import { Line } from "@ant-design/charts";

const data = [
  {
    week: "01.09.19-07.09.19",
    type: "Sign Ups",
    value: 40,
  },
  {
    week: "01.09.19-07.09.19",
    type: "Page View",
    value: -35,
  },
  {
    week: "01.09.19-07.09.19",
    type: "Clicks",
    value: 18,
  },
  {
    week: "08.09.19-14.09.19",
    type: "Sign Ups",
    value: 50,
  },
  {
    week: "08.09.19-14.09.19",
    type: "Page View",
    value: 25,
  },
  {
    week: "08.09.19-14.09.19",
    type: "Clicks",
    value: 58,
  },
  {
    week: "15.09.19-21.09.19",
    type: "Sign Ups",
    value: 0,
  },
  {
    week: "15.09.19-21.09.19",
    type: "Page View",
    value: 58,
  },
  {
    week: "15.09.19-21.09.19",
    type: "Clicks",
    value: 18,
  },
  {
    week: "22.09.19-28.09.19",
    type: "Sign Ups",
    value: -50,
  },
  {
    week: "22.09.19-28.09.19",
    type: "Page View",
    value: 18,
  },
  {
    week: "22.09.19-28.09.19",
    type: "Clicks",
    value: -40,
  },
  {
    week: "29.09.19-05.10.19",
    type: "Sign Ups",
    value: -20,
  },
  {
    week: "29.09.19-05.10.19",
    type: "Page View",
    value: -40,
  },
  {
    week: "29.09.19-05.10.19",
    type: "Clicks",
    value: -30,
  },
  {
    week: "06.10.19-12.10.19",
    type: "Sign Ups",
    value: 40,
  },
  {
    week: "06.10.19-12.10.19",
    type: "Page View",
    value: -30,
  },
  {
    week: "06.10.19-12.10.19",
    type: "Clicks",
    value: 30,
  },
  {
    week: "13.10.19-19.10.19",
    type: "Sign Ups",
    value: 50,
  },
  {
    week: "13.10.19-19.10.19",
    type: "Page View",
    value: 20,
  },
  {
    week: "13.10.19-19.10.19",
    type: "Clicks",
    value: 48,
  },
];

const config = {
  data,
  height: 300,
  title: {
    visible: true,
    text: "Medias Stats",
    style: { fontSize: 18, fill: "#d8d8d8" },
  },
  padding: "auto",
  smooth: "true",
  forceFit: true,
  xField: "week",
  yField: "value",
  xAxis: { visible: false },
  legend: {
    position: "bottom-right",
    marker: { symbol: "square" },
    text: { style: { fill: "#d8d8d8", fontSize: 12 } },
  },
  seriesField: "type",
  color: ["#1baaa9", "#f0c674", "#267cb4"],
  responsive: true,
  theme: { backgroundStyle: { fill: "#2a2a2a" } },
  point: {
    visible: true,
    size: 3,
    shape: "circle",
    style: {
      stroke: "2d3136",
      lineWidth: 0.5,
    },
  },
};

function LineChart() {
  return <Line {...config} />;
}

export default LineChart;
