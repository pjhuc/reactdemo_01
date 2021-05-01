import React, { Component } from 'react';

/*
https://reactjs.org/docs/react-component.html
React生命周期函数：
    组件加载之前，组件加载完成，以及组件更新数据，组件销毁。
    触发的一系列的方法 ，这就是组件的生命周期函数
组件加载的时候触发的函数： 
    constructor 、componentWillMount、 render 、componentDidMount
组件数据更新的时候触发的生命周期函数：
    shouldComponentUpdate、componentWillUpdate、render、componentDidUpdate
你在父组件里面改变props传值的时候触发的：
    componentWillReceiveProps
组件销毁的时候触发的：
    componentWillUnmount
必须记住的生命周期函数：
    *加载的时候：componentWillMount、 render 、componentDidMount（dom操作）
    更新的时候：componentWillUpdate、render、componentDidUpdate
    *销毁的时候： componentWillUnmount
*/
export default class Lifecycle extends Component {
    constructor(props) {
        console.log('01构造函数');
        super(props);
        this.state = {
            msg: '我是一个msg'
        }
    }
    componentWillMount() {
        console.log('02组件将要加载');
    }
    componentDidMount() {
        console.log('04组件将要挂载')
    }
    // 是否要更新数据，如果返回true，则调用 componentWillUpdate ；待数据更新完成之后，调用 componentDidUpdate 方法
    shouldComponentUpdate(nextProps, nextState) {
        console.log('01是否要更新数据 shouldComponentUpdate');
        console.log("nextProps", nextProps);
        console.log("nextState", nextState);
        return true;
    }
    // 将要更新数据的时候触发
    componentWillUpdate() {
        console.log('01组件将要更新 componentWillUpdate')
    }
    // 组件更新完成
    componentDidUpdate() {
        console.log('04组件数据更新完成 componentDidUpdate');
    }
    // 在父组件里面改变props传值的时候触发的
    componentWillReceiveProps() {
        console.log('父子组件传值，父组件里面改变了props的值触发的方法');
    }
    setMsg = () => {
        this.setState({
            msg: '我是修改后的msg数据'
        })
    }
    // 组件销毁时触发的方法
    componentWillUnmount() {
        console.log("05组件销毁时执行的方法！");
    }
    render() {
        console.log('03数据渲染render');
        return (
            <div>
                生命周期函数演示{this.state.msg}---{this.props.title}
                <button onClick={this.setMsg}>数据修改触发的生命周期函数</button>
            </div>
        )
    }
}