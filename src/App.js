import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './assets/css/index.css'
import User from './components/User';
import Home from './components/Home';
import Shop from './components/Shop';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header className="title">
            <Link to="/">用户组件</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/user">首页组件</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/shop">商户</Link>
          </header>
          <Route exact path="/" component={Home} />
          <Route path="/user" component={User} />
          <Route path="/shop" component={Shop} />
        </div>
      </Router>
    );
  }
}
export default App;