import React,{ Component } from 'react';

export default class Footer extends Component {
    constructor(props){
        super(props);
        this.state={
            msg:'我是底部组件'
        }
    }

    footerRun=()=>{
        alert('我是底部组件的footerRun方法');
    }

    render(){
        return(
            <div>
                <h2>我是底部组件</h2>
            </div>
        )
    }
}