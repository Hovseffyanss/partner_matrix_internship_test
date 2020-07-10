import React from "react";

import { Row, Col } from "antd";
import TopAffiliatesTable from "./topAffiliatesTable";
import PendingCommissionsTable from "./pendingCommissionsTable";
import SignUpsTable from "./signUpsTable";

function Tables() {
  return (
    <>
      <div style={{ overflow: "scroll" }}>
        <Row>
          <Col xs={24} lg={8}>
            <TopAffiliatesTable />
          </Col>
          <Col xs={24} lg={8}>
            <SignUpsTable />{" "}
          </Col>{" "}
          <Col xs={24} lg={8}>
            <PendingCommissionsTable />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;
