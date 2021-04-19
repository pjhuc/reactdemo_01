import { getDefaultNormalizer } from '@testing-library/dom';
import React, {Component } from 'react';

import '../assets/css/index.css'
/* 笨拙而原始的双向数据绑定 */
export default class Home extends Component{
    
    constructor(){
        super();
        this.state={
            yourname:'我是一个home组件'
        }
    }
    inputChange=(event)=> {
        // console.log("111");
        console.log(event.target.value);
        this.setState({
            yourname:event.target.value
        })
    }

    getInput=()=>{
        alert(this.state.yourname);
    }

    render(){
        return (
        <div>
           {/*  
                获取表单的值
                1、通过onChange监听表单的改变事件                   onChange
                2、在onChange事件中获取表单的值                     时间对象
                3、把表单输入的值赋给yourname                       this.setState({})
                4、点击按钮的时候获取state中 的yourname             this.state.username
            */}
            <input onChange={this.inputChange} /><button onClick={this.getInput}>获取input的值</button>
            <br/>
        </div>
        )
    }
}

