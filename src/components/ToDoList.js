import React, {Component } from 'react';

import '../assets/css/index.css'

export default class ToDoList extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }

    addData=() =>{
        // alert(this.refs.tto.value);
        var tempList = this.state.list;
        tempList.push(this.refs.tto.value);
        this.refs.tto.value='';
        this.setState({
            list:tempList
        })
    }

    removeDate(key) {
        alert(key);
        var tempList = this.state.list;
        tempList.splice(key,1);
        this.setState({
            list:tempList
        })
    }

    render(){
        return (
            <div>
                <h2>ToDoList待办演示案例</h2>
                <input type="text" ref="tto" /><button onClick={this.addData}>增加+</button>
                <hr/>
                <ul className="list">
                    {
                        this.state.list.map((value,key)=>{
                            return(
                                <li key={key}>{value}<button onClick={this.removeDate.bind(this,key)}>删除-</button></li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

