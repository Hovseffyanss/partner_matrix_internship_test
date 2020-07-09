import React from "react";
import { PageHeader, Button, Avatar, Divider, Dropdown, Menu } from "antd";

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer">
        Armenian
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer">
        Russian{" "}
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer">
        English
      </a>
    </Menu.Item>
  </Menu>
);

function NavBar() {
  return (
    <>
      <PageHeader
        className="site-page-header"
        // subTitle="Dashboard"
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

export default NavBar;
