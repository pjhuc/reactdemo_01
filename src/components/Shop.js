import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Button } from 'antd';
import { Icon } from '@ant-design/compatible';

import ShopAdd from './Shop/ShopAdd';
import ShopList from './Shop/ShopList';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '我是一个商户组件'
        };
    }
    componentWillMount() {
        console.log(this.props.routes)
    }
    render() {
        return (
            <div className="shop">
                <div className="content">
                    <div className="left">
                        <Link to="/shop/">商户列表</Link>
                        <br />
                        <br />
                        <br />
                        <Link to="/shop/add">增加商户</Link>
                        <br />
                        <br />
                        <Link to="/shop/edit">编辑商户</Link>
                        <Button type="primary">Primary Button</Button>
                        <Icon className="red" type="vertical-align-top" />
                    </div>
                    <div className="right">
                        {
                            this.props.routes.map((route, key) => {
                                return <Route key={key} exact path={route.path} component={route.component} />
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Shop;
