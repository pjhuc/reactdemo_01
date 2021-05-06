import React, { Component } from 'react';
import url from 'url';

import '../assets/css/index.css';

export default class ProductContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    componentDidMount(){
        // 获取get传值
        //url模块来解析url地址    在react里面使用url模块需要安装url模块    cnpm install url --save
        console.log(url.parse(this.props.location.search,true));
        var query = url.parse(this.props.location.search,true).query;
        console.log(query);
    }
    render() {
        return (
            <div>
                我是 Product 详情组件
                
            </div>
        )
    }
}
