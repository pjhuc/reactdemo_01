import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import Home from './components/Home';
import News from './components/News';
import ListD from './components/List';
import ToDoList from './components/ToDoList';
import ReactForm from './components/ReactForm';
import Header from './components/Header';
import Lifecycle from './components/Lifecycle';
import { Component } from 'react';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flag: true,
      title: '我是App组件的title'
    }
  }
  setFlag = () => {
    this.setState({
      flag: !this.state.flag

    })
  }
  setTitle = () => {
    this.setState({
      title: '我是App组件改变后的title值'

    })
  }
  render() {
    return (
      <div className="App">
        {/* 你好 react 组件 */}
        {/* <Home/> */}
        {/* <News /> */}
        {/* <ListD/> */}
        {/* <ToDoList/> */}
        {/* <ReactForm/> */}
        {/* <Header/> */}
        <hr />
        <br />
        {
          this.state.flag ? <Lifecycle title={this.state.title} /> : ""
        }
        <hr />
        <br />
        <button onClick={this.setFlag}>点击</button>
        <hr />
        <br />
        <button onClick={this.setTitle}>改变title</button>
      </div>
    );
  }
}
