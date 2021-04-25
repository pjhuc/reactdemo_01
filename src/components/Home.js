import { getDefaultNormalizer } from '@testing-library/dom';
import React, {Component } from 'react';
import Header from '../components/Header';

import '../assets/css/index.css'
/*

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

