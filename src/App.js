
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
      </header>
    </div>
  );
}

export default App;
