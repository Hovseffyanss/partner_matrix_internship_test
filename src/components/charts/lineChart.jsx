import React from "react";
import { Line } from "@ant-design/charts";

const data = [
  {
    week: "1",
    type: "Sign Ups",
    value: 40,
  },
  {
    week: "1",
    type: "Page View",
    value: -35,
  },
  {
    week: "1",
    type: "Clicks",
    value: 18,
  },
  {
    week: "2",
    type: "Sign Ups",
    value: 50,
  },
  {
    week: "2",
    type: "Page View",
    value: 25,
  },
  {
    week: "2",
    type: "Clicks",
    value: 58,
  },
  {
    week: "3",
    type: "Sign Ups",
    value: 0,
  },
  {
    week: "3",
    type: "Page View",
    value: 58,
  },
  {
    week: "3",
    type: "Clicks",
    value: 18,
  },
  {
    week: "4",
    type: "Sign Ups",
    value: -50,
  },
  {
    week: "4",
    type: "Page View",
    value: 18,
  },
  {
    week: "4",
    type: "Clicks",
    value: -40,
  },
  {
    week: "5",
    type: "Sign Ups",
    value: -20,
  },
  {
    week: "5",
    type: "Page View",
    value: -40,
  },
  {
    week: "5",
    type: "Clicks",
    value: -30,
  },
  {
    week: "6",
    type: "Sign Ups",
    value: 40,
  },
  {
    week: "6",
    type: "Page View",
    value: -30,
  },
  {
    week: "6",
    type: "Clicks",
    value: 30,
  },
  {
    week: "7",
    type: "Sign Ups",
    value: 50,
  },
  {
    week: "7",
    type: "Page View",
    value: 20,
  },
  {
    week: "7",
    type: "Clicks",
    value: 48,
  },
];

const config = {
  height: 300,
  title: {
    visible: true,
    text: "Medias Stats",
    style: { fontSize: 18, fill: "#d8d8d8" },
  },
  padding: "auto",
  smooth: "true",
  forceFit: true,
  data,
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
