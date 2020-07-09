import React from "react";
import logo from "./logo.svg";
import "./App.less";
import NavigationBar from "./components/NavigationBar";

import DemoDonut from "./components/charts/donutChart";
import DemoLine from "./components/charts/lineChart";
import { Layout, Menu, Breadcrumb } from "antd";

import Charts from "./components/charts/charts";
import Demo from "./components/Layout";
const { Header, Content, Footer, Sider } = Layout;

// const { Header, Content, Footer, Sider } = Layout;

function App() {
  return (
    <>
      <Demo />
    </>
  );

  // <Navigationbar />
}

export default App;
