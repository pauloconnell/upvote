import logo from './logo.svg';
import './App.css';
import Upvote from './components/Upvote/Upvote';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Lists: </h1>
        <Upvote />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       
      </header>
    </div>
  );
}

export default App;
