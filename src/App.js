import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import Home from './components/Home';
import News from './components/News';
import ListD from './components/List';
import ToDoList from './components/ToDoList';
import ReactForm from './components/ReactForm';

function App() {
  return (
    <div className="App">
      你好 react 组件
      {/* <Home/> */}
      {/* <News /> */}
      {/* <ListD/> */}
      {/* <ToDoList/> */}
      <ReactForm/>
    </div>
  );
}

export default App;
