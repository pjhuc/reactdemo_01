import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; import './assets/css/index.css'
import Home from './components/Home';
import Pcontent from './components/Pcontent';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/pcontent/:id" component={Pcontent} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}
export default App;