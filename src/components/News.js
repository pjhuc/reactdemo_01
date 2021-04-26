/*
React中的组件: 解决html 标签构建应用的不足。

使用组件的好处：把公共的功能单独抽离成一个文件作为一个组件，哪里里使用哪里引入。
父子组件：组件的相互调用中，我们把调用者称为父组件，被调用者称为子组件
父子组件传值（react 父子组件通信）：
    父组件给子组件传值 
		    1.在调用子组件的时候定义一个属性  <Header msg='首页'></Header>
			2.子组件里面 this.props.msg
        说明：父组件不仅可以给子组件传值，还可以给子组件传方法,以及把整个父组件传给子组件,可以让子组件给父组件传值。
    父组件主动获取子组件的数据
        1、父组件调用子组件的时候指定ref的值 <Header ref='header'></Header>      
        2、父组件通过this.refs.header  获取整个子组件实例  (dom（组件）加载完成以后获取 )
*/
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
                {/* 通过 news={this} 将整个News组件传给子组件 Header  */}
                <Header title={this.state.title} run={this.run} news={this} />
                我是新闻组件内容--{this.state.msg}
                <hr/>
                <button onClick={this.execChildMethed}>获取整个底部组件</button>
                <Footer ref="footer"/>
            </div>
        )
    }
}

