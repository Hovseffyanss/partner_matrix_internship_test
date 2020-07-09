import React from "react";
import { List } from "antd";

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
];

function MapList() {
  return (
    <>
      <div>
        <List
          style={{ backgroundColor: "#2a2a2a" }}
          size="x-small"
          bordered
          dataSource={data}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </div>
    </>
  );
}

export default MapList;
