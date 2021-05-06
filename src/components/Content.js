import React, { Component } from 'react';

import '../assets/css/index.css'

export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        console.log(this.props.match.params.aid)
    }
    render() {
        return (
            <div>
                我是 Content 组件
            </div>
        )
    }
}

