import React, { Component } from "react";
import World from "./map";
import MapList from "./list";

import { Card } from "antd";

class MapContainer extends Component {
  render() {
    return (
      <div
        style={{
          height: "300px",
          backgroundColor: "#2a2a2a",
          backgroundColor: "green",
          overflow: "scroll",
          textAlign: "-webkit-center",
        }}
      >
        <h2>Geographic Data</h2>
        <World />
        {/* <MapList /> */}
      </div>
    );
  }
}

export default MapContainer;
