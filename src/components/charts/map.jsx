import * as React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Country", "Sign Ups"],
  ["China", 65],
  ["United States", 200],
  ["United Kingdom", 22],
];
class World extends React.Component {
  render() {
    return (
      <div style={{ overflow: "hidden" }}>
        <Chart
          chartEvents={[
            {
              eventName: "select",
              callback: ({ chartWrapper }) => {
                const chart = chartWrapper.getChart();
                const selection = chart.getSelection();
                if (selection.length === 0) return;
                const region = data[selection[0].row + 1];
                console.log("Selected : " + region);
              },
            },
          ]}
          options={{
            colorAxis: { colors: ["#f0c674", "#1baaa9", "#267cb4"] },
            backgroundColor: "#2a2a2a",
            datalessRegionColor: "#878686",
            legend: "none",
          }}
          chartType="GeoChart"
          keepAspectRatio={true}
          height={300}
          data={data}
        />
      </div>
    );
  }
}

export default World;
