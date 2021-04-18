import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import Home from './components/Home';
import News from './components/News';

function App() {
  return (
    <div className="App">
      你好 react 组件
      <Home/>
      <News />
    </div>
  );
}

export default App;
