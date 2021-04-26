import { getDefaultNormalizer } from '@testing-library/dom';
import React, {Component } from 'react';
import Header from '../components/Header';

import '../assets/css/index.css'
/*
父组件给子组件传值：
    defaultProps:父子组件传值中，如果父组件调用子组件的时候不给子组件传值，可以在子组件中使用defaultProps定义的 默认值
    propTypes：验证父组件传值的 类型 合法性
            1、引入import PropTypes from 'prop-types';
            2、类.propTypes = {
                name: PropTypes.string
            };
    都是定义在子组件里面
https://reactjs.org/docs/typechecking-with-proptypes.html
*/
export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
          title:'首页组件',
          num:2222222222222222
        }
    }

    render(){
        return (
        <div>
          <Header title={this.state.title} num={this.state.num}/>
        </div>
        )
    }
}

