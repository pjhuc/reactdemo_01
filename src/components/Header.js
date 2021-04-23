import React, {Component} from 'react';

export default class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            msg : '我是一个头部组件'
        }
    }

    render(){
        return (
            <div>
                {this.state.msg}
                {/* <h2>{this.props.title}</h2> */}
            </div>
        )
    }
}
