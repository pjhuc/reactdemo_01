import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import Home from './components/Home';
import News from './components/News';
import ListD from './components/List';
import ToDoList from './components/ToDoList';
import ReactForm from './components/ReactForm';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      
      <hr/>
      <Home/>
      {/* <News /> */}
      {/* <ListD/> */}
      {/* <ToDoList/> */}
      {/* <ReactForm/> */}
      <Header/>
    </div>
  );
}

export default App;
