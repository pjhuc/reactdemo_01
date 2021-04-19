import { getDefaultNormalizer } from '@testing-library/dom';
import React, {Component } from 'react';

import '../assets/css/index.css'

export default class Home extends Component{
    
    constructor(){
        super();
        //react定义数据
        this.state={
            msg:'我是一个form组件',
            message:'一套message',
            yourname :'你的名字',
            yourname02 :'你的名字02',
            whynot:'1111111'
        }
        /* 第二种 在构造函数中指明this指向 */
        this.getMessage = this.getMessage.bind(this);
    }

    /* 第一种 .bind(this) */
    getData() {
        alert(this.state.msg);
    }
    /* 第二种 指明 在构造函数中指明this指向 */
    getMessage() {
        alert(this.state.message);
    }
    /* 第三种 箭头函数 */
    getName=() => {
        alert(this.state.yourname);
    }
    whyNotMeth=()=>{
        this.setState({
            whynot:'为什么不为什么不？？？'
        })
    }
    setName=(str,str02)=>{
        this.setState({
            yourname:str,
            yourname02:str02
        })
    }

    render(){
        return (
        <div>
            <button onClick={this.getData.bind(this)}>执行方法</button>
            <br/>
            <button onClick={this.getMessage}>执行方法getMessage</button>
            <br/>
            <button onClick={this.getName}>执行方法 getName</button>
            <br/>
            whynot:{this.state.whynot}
            <hr/>
            yourname:{this.state.yourname}
            <hr/>
            yourname02:{this.state.yourname02}
            <hr/>
            <button onClick={this.whyNotMeth}>为什么不</button>
            <hr/>
            <button onClick={this.setName.bind(this,'张三','李四')}>name传参</button>
        </div>
        )
    }
}

