import React,{ Component } from 'react';

/* 这个组件是演示：父组件获取子组件的属性 和 调用子组件的方法 */
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