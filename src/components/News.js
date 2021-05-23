import React, { Component } from 'react';

import { DatePicker, Space } from 'antd';

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    onChange=(date, dateString) => {
        console.log(date, dateString);
      }
    render() {
        return (
            <div className="info">
                我是新闻信息
                <DatePicker onChange={this.onChange} />
            </div>
        );
    }
}
