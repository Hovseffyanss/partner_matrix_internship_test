import React from "react";
import DonutChart from "./donutChart";
import LineChart from "./lineChart";
import { Row, Col, Card } from "antd";
import World from "./map";
import MapContainer from "./mapContainer";
import { Line } from "@ant-design/charts";

function Charts() {
  return (
    <>
      <Row>
        <Col xs={24} lg={10}>
          <LineChart />
        </Col>
        <Col xs={24} lg={6}>
          <DonutChart />
        </Col>
        <Col xs={24} lg={8}>
          <MapContainer />
        </Col>
      </Row>
    </>
  );
}

export default Charts;
