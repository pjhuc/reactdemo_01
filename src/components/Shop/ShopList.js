import React, { Component } from 'react';


export default class ShopList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: ''
        };
    }
    render() {
        return (
            <div className="info">
                我是商户list
            </div>
        );
    }
}
