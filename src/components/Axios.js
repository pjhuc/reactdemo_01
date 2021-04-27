import React, { Component } from 'react';

import axios from 'axios';

export default class Axios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }
    getData = () => {
        // 通过axios获取服务器的数据
        // 接口后台允许跨域，
        // 地址、端口、协议 有一个不一样，就属于跨域
        var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';
        axios.get(api)
            .then((response) => {
                // handle success
                console.log(response);
                this.setState({
                    list: response.data.result
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });

    }
    render() {
        return (
            <div>
                <h2>Axios获取服务器数据</h2>
                <hr />
                <button onClick={this.getData}>dianji</button>
                <ul>
                    {
                        this.state.list.map((value, key) => {
                            return <li key={key}>{value.title}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

