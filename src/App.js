import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './assets/css/index.css';

import routes from './model/router';

import { Layout, Menu, Calendar } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
/* github 搜索 react router */
class App extends Component {
  state = {
    collapsed: false,
  };
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  onPanelChange = (value, mode) => {
    console.log(value, mode);
  }

  render() {
    const { collapsed } = this.state;
    return (
      <Router>
        <div className="app">
          <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
              <div className="logo" />
              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<PieChartOutlined />}>
                  <Link to="/user">首页组件</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<DesktopOutlined />}>
                  <Link to="/shop">商户</Link>
                </Menu.Item>
                {/* <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                  <Menu.Item key="3">Tom</Menu.Item>
                  <Menu.Item key="4">Bill</Menu.Item>
                  <Menu.Item key="5">Alex</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                  <Menu.Item key="6">Team 1</Menu.Item>
                  <Menu.Item key="8">Team 2</Menu.Item>
                </SubMenu> */}
                <Menu.Item key="9" icon={<FileOutlined />}>
                  <Link to="/news">新闻</Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Header className="site-layout-background" style={{ padding: 0 }} />
              <Content style={{ margin: '0 16px' }}>
                {
                  routes.map((route, key) => {
                    if (routes.route) {
                      return <Route key={key} exact path={route.path}
                        render={props => (
                          <route.component {...props} routes={route.routes} />
                        )} />
                    } else {
                      return <Route key={key} path={route.path}
                        render={props => (
                          <route.component {...props} routes={route.routes} />
                        )} />
                    }
                  })
                }
               

              </Content>
              
              <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
          </Layout>
        </div>
      </Router>
    );
  }
}
export default App;