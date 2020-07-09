import React from "react";
import { Menu, Button, Divider } from "antd";
import {
  DashboardFilled,
  KeyOutlined,
  UserOutlined,
  NotificationOutlined,
  SwapOutlined,
  AreaChartOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SettingFilled,
  HeartFilled,
  ClockCircleOutlined,
  EyeFilled,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";

class NavigationBar extends React.Component {
  state = {
    collapsed: true,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <>
        <div style={{ width: 256 }}>
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            inlineCollapsed={this.state.collapsed}
            style={{ backgroundColor: "#222222", minHeight: "100vh" }}
          >
            <Menu.Item key="1" icon={<DashboardFilled />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<KeyOutlined />}>
              Option 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
              Option 3
            </Menu.Item>
            <Menu.Item key="4" icon={<NotificationOutlined />}>
              Option 4
            </Menu.Item>
            <Menu.Item key="5" icon={<AreaChartOutlined />}>
              Option 5
            </Menu.Item>
            <Menu.Item key="6" icon={<SwapOutlined />}>
              Option 6
            </Menu.Item>
            <Menu.Item key="7" icon={<SettingFilled />}>
              Option 7
            </Menu.Item>
            {/* <Divider /> */}
            <Menu.Item
              key="8"
              icon={<HeartFilled />}
              style={{ backgroundColor: "#171717" }}
            >
              Option 8
            </Menu.Item>
            <Menu.Item
              key="9"
              icon={<ClockCircleOutlined />}
              style={{ backgroundColor: "#171717" }}
            >
              Option 9
            </Menu.Item>
            <Menu.Item
              key="10"
              icon={<EyeFilled />}
              style={{ backgroundColor: "#171717" }}
            >
              Option 10
            </Menu.Item>
            <Button
              onClick={this.toggleCollapsed}
              style={{
                color: "white",
                position: "absolute",
                bottom: 0,
              }}
              type="link"
            >
              {React.createElement(
                this.state.collapsed ? RightOutlined : LeftOutlined
              )}
            </Button>
          </Menu>
        </div>
      </>
    );
  }
}

export default NavigationBar;
