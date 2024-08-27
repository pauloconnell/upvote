import logo from './logo.svg';
import './App.css';
import Upvote from './components/Upvote/Upvote';
import List from './components/Lists/List';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Vote App </h1>
        <List />
        <img src={logo} className="App-logo" alt="logo" />
      
      </header>
    </div>
  );
}

export default App;
