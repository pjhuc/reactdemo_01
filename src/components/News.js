import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/index.css'

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    id: '1',
                    title: "我是新闻111"
                },
                {
                    id: '2',
                    title: "我是新闻222"
                },
                {
                    id: '3',
                    title: "我是新闻333"
                },
                {
                    id: '4',
                    title: "我是新闻444"
                }
            ]
        }
    }

    render() {
        return (
            <div>
                我是 Content 组件
                <ul>
                    {
                        this.state.list.map((value, key) => {
                            return (
                                <li key={key}>
                                    {/* ES6中的模板字符串：{`/content/${value.id}`} */}
                                    <Link to={`/content/${value.id}`}>{value.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

