import React, {Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../assets/css/index.css'

export default class News extends Component{
    
    constructor(){
        super();
        //react定义数据
        this.state={
            title:'新闻组件',
            msg:'我是新闻组件的msg'
        }
    }

    run=()=>{
        alert('我是新闻组件的run方法！！');
    }

    getData=()=>{
        alert(this.state.title+"新闻组件的getData方法");
    }

    getChildData=(result)=>{
        alert(result);
        this.setState({
            msg:result
        })
    }

    execChildMethed=()=>{
        //获取子组件(Footer)的属性值
        alert(this.refs.footer.state.msg);
        //执行子组件(Footer)的方法
        this.refs.footer.footerRun();
    }
    
    render(){
        return(
            <div>
                <Header title={this.state.title} run={this.run} news={this} />
                我是新闻组件内容--{this.state.msg}
                <hr/>
                <button onClick={this.execChildMethed}>获取整个底部组件</button>
                <Footer ref="footer"/>
            </div>
        )
    }
}

