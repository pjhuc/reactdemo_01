import React, {Component } from 'react';

import '../assets/css/index.css'
/* 双向数据绑定 */
export default class ToDoList extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'111'
        }
    }
    inputVlaue=(e)=>{
        this.setState({
            username:e.target.value
        })
    }
    changeUserName=()=>{
        this.setState({
            username:'李四'
        })
    }
    render(){
        return (
        <div>
            <h2>双向数据绑定</h2>
            {/* model改变影响View  view改变反过来影响model */}
            <input onChange={this.inputVlaue} value={this.state.username} />
            <p>{this.state.username}</p>
            {/* state中的值改变，就会重新渲染页面 */}
            <button onClick={this.changeUserName}>model影响view</button>
        </div>
        )
    }
}

