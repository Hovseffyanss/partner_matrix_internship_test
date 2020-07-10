import React, { Component } from "react";
import { Menu } from "antd";
import {
  UserOutlined,
  DashboardFilled,
  KeyOutlined,
  NotificationOutlined,
  SwapOutlined,
  AreaChartOutlined,
  SettingFilled,
  HeartFilled,
  ClockCircleOutlined,
  EyeFilled,
} from "@ant-design/icons";

class NavigationBar extends Component {
  render() {
    return (
      <>
        <Menu
          style={{ minHeight: "100vh", backgroundColor: "#2a2a2a" }}
          mode="inline"
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item key="1" icon={<DashboardFilled />}>
            Dashboard{" "}
          </Menu.Item>
          <Menu.Item key="2" icon={<KeyOutlined />}>
            Privacy{" "}
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            Account{" "}
          </Menu.Item>
          <Menu.Item key="4" icon={<NotificationOutlined />}>
            Notiffications{" "}
          </Menu.Item>
          <Menu.Item key="5" icon={<AreaChartOutlined />}>
            Statistics{" "}
          </Menu.Item>
          <Menu.Item key="6" icon={<SwapOutlined />}>
            Communication{" "}
          </Menu.Item>
          <Menu.Item key="7" icon={<SettingFilled />}>
            Settings{" "}
          </Menu.Item>
          <Menu.Item
            key="8"
            icon={<HeartFilled />}
            style={{ color: "#878686" }}
          >
            Favourites{" "}
          </Menu.Item>
          <Menu.Item
            key="9"
            icon={<ClockCircleOutlined />}
            style={{ color: "#878686" }}
          >
            History{" "}
          </Menu.Item>
          <Menu.Item key="10" icon={<EyeFilled />} style={{ color: "#878686" }}>
            Hidden{" "}
          </Menu.Item>
        </Menu>
      </>
    );
  }
}

export default NavigationBar;
