import React, {Component, useDebugValue } from 'react';

import storage from '../model/storage';

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
            
            this.setState({
                list:tempList
            })
            //缓存数据
            
            // localStorage.setItem('todolist',JSON.stringify(tempList));
            this.refs.title.value='';
            storage.set('todolist',tempList);
        }
    }

    changeData=(key)=>{
        // alert("111");
        let tempList = this.state.list;
        tempList[key].checked=!tempList[key].checked;
        this.setState({
            list:tempList
        })
        //缓存数据
        // localStorage.setItem('todolist',JSON.stringify(tempList));
        storage.set('todolist',tempList);
    }

    removeData=(key)=>{
        let tempList = this.state.list;
        tempList.splice(key,1);
        this.setState({
            list:tempList
        })
        //缓存数据
        // localStorage.setItem('todolist',JSON.stringify(tempList));
        storage.set('todolist',tempList);
    }

    //声明周期函数  页面加载就会触发
    componentDidMount(){
        //获取缓存中的数据
        var todolist = storage.get('todolist');
        if(todolist){
            this.setState({
                list:todolist
            })
        }
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
                                    <li key={key}>
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
                                    <li key={key}>
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

