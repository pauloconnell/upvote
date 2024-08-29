import logo from './logo.svg';
import './App.css';
import List from './components/Lists/List';
import { VoteProvider } from './components/VoteProvider';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <h1> Vote Tracker </h1>
        <VoteProvider>
          <List />

        </VoteProvider>
        <img src={logo} className="App-logo" alt="logo" />
      
      </header>
    </div>
  );
}

export default App;
