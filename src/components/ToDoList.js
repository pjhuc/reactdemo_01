import React, {Component, useDebugValue } from 'react';

import '../assets/css/index.css'

export default class ToDoList extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[
                {
                    title:'录制ionic',
                    checked:true
                },
                {
                    title:'录制nodejs',
                    checked:false
                }
                ,
                {
                    title:'录制egg.js',
                    checked:true
                } ,
                {
                    title:'录制vue',
                    checked:false
                }
            ]
        }
    }

    addData=(event)=>{
        if(event.keyCode  == 13){
            let val = this.refs.title.value;
            // alert(val);
            let tempList = this.state.list;
            tempList.push({
                title:val,
                checked:false
            })
            this.refs.title.value='';
            this.setState({
                list:tempList
            })
        }
    }

    changeData=(key)=>{
        // alert("111");
        let tempList = this.state.list;
        tempList[key].checked=!tempList[key].checked;
        this.setState({
            list:tempList
        })
    }

    removeData=(key)=>{
        let tempList = this.state.list;
        tempList.splice(key,1);
        this.setState({
            list:tempList
        })
    }

    render(){
        return(
            <div>
                <header className="title">ToDoList<input ref="title" onKeyUp={this.addData}/></header>
                <h2>待办事项</h2>
                <ul>
                    {
                        this.state.list.map((value,key)=>{
                            if(!value.checked) {
                                return (
                                    <li>
                                        <input type="checkbox" checked={value.checked} onChange={this.changeData.bind(this,key)} />
                                        {value.title}
                                        <button onClick={this.removeData.bind(this,key)}>--删除</button>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
                
                <hr />
                <h2>已完成事项</h2>
                <ul>
                    {
                        this.state.list.map((value,key)=>{
                            if(value.checked) {
                                return (
                                    <li>
                                        <input type="checkbox" checked={value.checked} onChange={this.changeData.bind(this,key)} />
                                        {value.title}
                                        <button onClick={this.removeData.bind(this,key)}>--删除</button>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        )
    }
}

