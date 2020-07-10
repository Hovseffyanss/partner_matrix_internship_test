import React, { Component } from "react";
import { Layout, Menu } from "antd";
import Charts from "./charts/charts";
import Stat from "./statistics";
import Tables from "./tables/tables";
import NavBar from "./header";
import NavigationBar from "./navigationBar";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

class PageLayout extends Component {
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
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          style={{ backgroundColor: "#2a2a2a" }}
        >
          <NavigationBar />{" "}
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

export default PageLayout;
