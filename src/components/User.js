import React, { Component } from 'react';
import '../assets/css/index.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Info from './User/Info';
import Main from './User/Main';
export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div className="user">
                <div className="content">
                    <div className="left">
                        <Link to="/user/">个人中心</Link>
                        <br/>
                        <br/>
                        <Link to="/user/info">用户信息</Link>
                    </div>
                    <div className="right">
                        <Route exact path="/user/" component={Main}/>
                        <Route path="/user/info" component={Info}/>
                    </div>
                </div>
            </div>
        )
    }
}

