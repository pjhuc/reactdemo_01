import { getDefaultNormalizer } from '@testing-library/dom';
import React, {Component } from 'react';

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
          <Home title={this.state.title}/>
            {this.state.username}
            <hr/>
        </div>
        )
    }
}

