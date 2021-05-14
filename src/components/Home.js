import React, { Component } from 'react';

import { Link } from "react-router-dom";

import '../assets/css/index.css';
/* 这个是引入 axios  */
const axios = require('axios');

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            domain: 'http://a.itying.com/'
        }
    }
    getData = () => {
        var url = this.state.domain + "api/productlist";
        // Make a request for a user with a given ID
        axios.get(url)
            .then((response) => {
                console.log(response);
                this.setState({
                    list: response.data.result
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }
    componentDidMount() {
        this.getData();
    }
    render() {
        return (
            <div className="home">
                <button><Link to="/login">跳转到登陆页面</Link></button>
                <div className="list">
                    {
                        this.state.list.map((value, key) => {
                            return (
                                <div className="item" key={key}>
                                    <h3 className="item_cate">{value.title}</h3>
                                    <ul className="item_list">
                                        {
                                            value.list.map((v, k) => {
                                                return (
                                                    <li key={k}>
                                                        <Link to={`/pcontent/${v._id}`}>
                                                            <div className="inner">
                                                                <img className="item_img" src={`${this.state.domain}${v.img_url}`} />
                                                                <p className="title">{v.catename}</p>
                                                                <p className="price">{v.price}元</p>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

