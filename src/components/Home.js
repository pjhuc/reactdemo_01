import React, { Component } from 'react';

import { Link } from "react-router-dom";

import '../assets/css/index.css';

const axios = require('axios');

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
            <div>
                我是首页组件
            </div>
        )
    }
}

