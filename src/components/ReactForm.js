import React, { Component } from 'react';

import '../assets/css/index.css'

export default class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "react表单",
            name: '',
            sex: '1',
            city: '',
            citys: [
                '北京', '上海', '深圳'
            ],
            hobby: [
                {
                    'title': "睡觉",
                    'checked': true
                },
                {
                    'title': "吃饭",
                    'checked': false
                },
                {
                    'title': "敲代码",
                    'checked': true
                }
            ],
            info: ''
        }
    }

    handelSubmit=(e)=>{
        //阻止submit的提交事件
        // 取消事件的默认动作
        e.preventDefault();
        console.log(this.state.name,this.state.sex,this.state.city,this.state.hobby,this.state.info);

    }
    handelName=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    handelSex=(e)=>{
        this.setState({
            sex:e.target.value
        })
    }
    handelCity=(e)=>{
        this.setState({
            city:e.target.value
        })
    }
    handelHobby=(key)=>{
        var hobbyVal=this.state.hobby;
        hobbyVal[key].checked=!hobbyVal[key].checked;
        this.setState({
            hobby:hobbyVal
        })
    }
    handleInfo=(e)=>{
        this.setState({
            info:e.target.value
        })
    }
    render() {
        return (
            <div>
                <h2>{this.state.msg}</h2>
                <form onSubmit={this.handelSubmit}>
                    用户名: <input type="text" value={this.state.name} onChange={this.handelName} /> <br /><br />
                    性别:   <input type="radio" value="1" checked={this.state.sex == 1} onChange={this.handelSex} />男
                            <input type="radio" value="2" checked={this.state.sex == 2} onChange={this.handelSex} />女 <br /><br />
                    居住城市:
                            <select value={this.state.city} onChange={this.handelCity}>
                                {
                                    this.state.citys.map(function (value, key) {
                                        return <option key={key}>{value}</option>
                                    })
                                }
                            </select>
                    <br /><br />
                    爱好:   
                            {
                                // 注意this指向
                                this.state.hobby.map((value,key)=>{
                                    return (
                                    <span key={key}>
                                            <input type="checkbox"  checked={value.checked}  onChange={this.handelHobby.bind(this,key)}/> {value.title} 
                                    </span>
                                    )
                                })
                            }
                    <br /><br />
                    备注：<textarea vlaue={this.state.info}  onChange={this.handleInfo} />
                    <br /><br />
                    <input type="submit"  defaultValue="提交"/>
                </form>
            </div>
        )
    }
}

