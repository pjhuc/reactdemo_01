import React, { Component } from 'react';


export default class ShopEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: ''
        };
    }
    render() {
        return (
            <div className="info">
                我是修改商户
            </div>
        );
    }
}
