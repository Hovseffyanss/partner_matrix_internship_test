import React from "react";
import { Layout, Menu, Divider } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
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
import Charts from "./charts/charts";
import Stat from "./statistics";
import Tables from "./tables/tables";
import World from "./charts/map";
import NavBar from "./navBar";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

class Demo extends React.Component {
  state = {
    collapsed: true,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout>
        <Sider
          // trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          style={{ backgroundColor: "#2a2a2a" }}
        >
          {/* <Avatar shape="square" size={32} icon={<UserOutlined />} /> */}
          <div className="logo" />
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
            <Menu.Item
              key="10"
              icon={<EyeFilled />}
              style={{ color: "#878686" }}
            >
              Hidden{" "}
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <NavBar />
          <Content
            className="site-layout-background"
            style={{
              margin: "20px 16px",
              minHeight: 280,
              backgroundColor: "purple",
            }}
          >
            <Stat />
            <Charts />
            <Tables />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Demo;
