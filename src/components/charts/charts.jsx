import React from "react";
import DonutChart from "./donutChart";
import LineChart from "./lineChart";
import { Row, Col } from "antd";
import WorldMapContainer from "./worldMapContainer";

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
          <WorldMapContainer />
        </Col>
      </Row>
    </>
  );
}

export default Charts;
