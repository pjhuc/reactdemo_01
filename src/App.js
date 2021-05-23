import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './assets/css/index.css';

import routes from './model/router'

/* github 搜索 react router */
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header className="title">
            <Link to="/">用户组件</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/user">首页组件</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/shop">商户</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/news">新闻</Link>
          </header>
          {/* 实现将 根组件（App.js） 中的 数据传给 Shop 实现动态路由跳转 */}

          {/* 0: {path: "/shop/", component: ƒ}
          1: {path: "/shop/add", component: ƒ} */}

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
        </div>
      </Router>
    );
  }
}
export default App;