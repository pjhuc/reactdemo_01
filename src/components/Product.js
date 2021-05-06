import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/index.css';

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    id: '11',
                    title: "我是商品详情组件111"
                },
                {
                    id: '2222',
                    title: "我是商品详情组件222"
                },
                {
                    id: '33',
                    title: "我是商品详情组件333"
                },
                {
                    id: '44444',
                    title: "我是商品详情组件444"
                }
            ]
        }
    }
    render() {
        return (
            <div>
                我是 Product 组件
                <ul>
                    {
                        this.state.list.map((value, key) => {
                            return (
                                <li key={key}>
                                    {/* ES6中的模板字符串：{`/content/${value.id}`} */}
                                    <Link to={`/productcontent?aid=${value.id}`}>{value.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
