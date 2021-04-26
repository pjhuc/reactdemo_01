import React,{ Component } from 'react';

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            msg:'我是头部组件'
        }
    }

    getNews=()=>{
        //获取父组附件的值
        alert(this.props.news.state.msg);
        //执行父组件的方法
        this.props.news.getData();
    }

    render(){
        return(
            <div>
                <h2>{this.props.title}</h2>
                <button onClick={this.props.run} >调用news父组件的run方法</button>
                <br/>
                <button onClick={this.props.news.getData} >将整个父组件传给子组件，并执行getData方法</button>
                <br/>
                <button onClick={this.getNews} >子组件中的方法获取父组件中的msg值</button>
                <br/>
                <button onClick={this.props.news.getChildData.bind(this,'我是子组件穿过来的值！！！')} >子组件给父组件传值</button>
                {/* {this.state.msg} */}
            </div>
        )
    }
}
