import React, { Component } from "react";
import World from "./map";

class MapContainer extends Component {
  render() {
    return (
      <div
        style={{
          height: "300px",
          backgroundColor: "#2a2a2a",
        }}
      >
        <p
          style={{
            color: "#d8d8d8",
            fontSize: 18,
            paddingTop: "18px",
            paddingLeft: "18px",
          }}
        >
          Geographic Data
        </p>
        <World />
      </div>
    );
  }
}

export default MapContainer;
