import React, {Component } from 'react';

import '../assets/css/index.css'

export default class News extends Component{
    
    constructor(){
        super();
        //react定义数据
        this.state={

            list:['11111111111111','222222222','333333333333'],
            list2:[<h2>我是一个好</h2>,<h2>我是一个好</h2>],
            list3:[
                {title:"新闻111111111"},
                {title:"新闻22222222222"},
                {title:"新闻333333333"},
                {title:"新闻444444444444"}
            ]
        }
    }
    
    render(){
        /* 第一种  list循环方式 */
        var listResult = this.state.list.map(function(value,key){
            return <li>{value}</li>
        })
        return (
        <div>
            {listResult}
            {/* 第二种  list循环方式 */}
            <li>{this.state.list2}</li>
            <hr/>
            {/* 第三种  list循环方式 */}
            <ul>
                {
                    this.state.list3.map(function(value,key){
                        return (<li key={key}>{value.title}</li>);
                    })
                }
            </ul>
            
        </div>
        
        )
    }
}

