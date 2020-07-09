import React, { Component } from "react";
import { Statistic, Row, Col, Card } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";

const gridStyle = {
  textAlign: "center",
  borderRadius: "0px",
};

class Stat extends Component {
  render() {
    return (
      <Row>
        <Col xs={24} sm={12} lg={6}>
          <Card style={gridStyle} hoverable>
            <Statistic
              title="Sign Ups"
              value={25}
              valueStyle={{ color: "#1baaa9", fontWeight: "bold" }}
              suffix="$"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card style={gridStyle} hoverable>
            <Statistic
              title="Profit"
              value={1000}
              valueStyle={{ color: "#267cb4", fontWeight: "bold" }}
              suffix="$"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card style={gridStyle} hoverable>
            <Statistic
              title="Commisions"
              value={350}
              valueStyle={{ color: "#f0c674", fontWeight: "bold" }}
              suffix="$"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card style={gridStyle} hoverable>
            <Statistic
              title="Pending Commisions"
              value={300}
              valueStyle={{ color: "#1baaa9", fontWeight: "bold" }}
              suffix="$"
            />
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Stat;
