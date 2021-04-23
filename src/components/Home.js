import { getDefaultNormalizer } from '@testing-library/dom';
import React, {Component } from 'react';
import Header from '../components/Header';

import '../assets/css/index.css'
/*
约束性和非约束性组件:
      非约束性组:<input type="text" defaultValue="a" />   这个 defaultValue 其实就是原生DOM中的 value 属性。
      这样写出的来的组件，其value值就是用户输入的内容，React完全不管理输入的过程。

      约束性组件：<input value={this.state.username} type="text" onChange={this.handleUsername}  /> 
            这里，value属性不再是一个写死的值，他是 this.state.username, this.state.username 是由 this.handleChange 负责管理的。
            这个时候实际上 input 的 value 根本不是用户输入的内容。而是onChange 事件触发之后，由于 this.setState 导致了一次重新渲染。
            不过React会优化这个渲染过程。看上去有点类似双休数据绑定
*/
export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
          username:'我是首页组件',
          title:'首页组件'
        }
    }

    render(){
        return (
        <div>
          <Header title={this.state.title}/>
          我是首页组件的内容
        </div>
        )
    }
}

