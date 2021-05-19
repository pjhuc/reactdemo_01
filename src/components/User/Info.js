import React, { Component } from 'react';


export default class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '我是用户信息'
        };
    }
    render() {
        return (
            <div className="info">
                我是用户信息
            </div>
        );
    }
}
