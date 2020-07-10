import React, { Component } from "react";
import WorldMap from "./worldMap";

class WorldMapContainer extends Component {
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
        <WorldMap />
      </div>
    );
  }
}

export default WorldMapContainer;
