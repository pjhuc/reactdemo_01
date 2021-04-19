import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import Home from './components/Home';
import News from './components/News';
import ListD from './components/List';

function App() {
  return (
    <div className="App">
      你好 react 组件
      {/* <Home/> */}
      {/* <News /> */}
      <ListD/>
    </div>
  );
}

export default App;
