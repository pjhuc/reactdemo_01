import React,{ Component } from 'react';

import PropTypes from 'prop-types';

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            msg:'我是头部组件'
        }
    }

    render(){
        return(
            <div>
                <h2>---{this.props.title}---{this.props.num}</h2>
            </div>
        )
    }
}

Header.defaultProps={
    title:'标题'
}

Header.propTypes={
    num:PropTypes.number
}

