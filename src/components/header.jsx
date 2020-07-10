import React from "react";
import { PageHeader, Button, Avatar, Divider, Dropdown, Menu } from "antd";

const menu = (
  <Menu>
    <Menu.Item>Armenian</Menu.Item>
    <Menu.Item>Russian</Menu.Item>
    <Menu.Item>English</Menu.Item>
  </Menu>
);

function Header() {
  return (
    <>
      <PageHeader
        className="site-page-header"
        style={{ backgroundColor: "white" }}
        extra={[
          <Divider type="vertical" />,

          <Dropdown overlay={menu} placement="bottomCenter" trigger={["click"]}>
            <Button key="language">EN</Button>
          </Dropdown>,
          <Divider type="vertical" />,
          <Avatar
            style={{ backgroundColor: "white" }}
            // shape="square"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            size="large"
          />,
          <Divider type="vertical" />,
          <div style={{ display: "inline-block" }}>
            <h4>Hello, Anne</h4>
          </div>,
        ]}
      ></PageHeader>
    </>
  );
}

export default Header;
