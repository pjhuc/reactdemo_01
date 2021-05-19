import React, { Component } from 'react';


export default class ShopAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: ''
        };
    }
    render() {
        return (
            <div className="info">
                我是新增商户
            </div>
        );
    }
}
