import React, {Component } from 'react';

export default class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:'我是username'
        }
    }
    //键盘事件
    inputKeyUp=(e)=>{
        console.log(e.keyCode);
        if(e.keyCode==13){
            alert(e.target.value);
        }

    }
    inputonKeyDown=(e)=>{
        console.log(e.keyCode);
        if(e.keyCode==13){
            alert(e.target.value);
        }
    }
    render() {
        return (
            <div>
                <h2>键盘事件</h2>
                <input onKeyUp={this.inputKeyUp}/>
                <br /><br />
                <input onKeyDown={this.inputonKeyDown}/>
            </div>
        )
    }
}