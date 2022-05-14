import logo from './logo.svg';
import ToxaProfileCard from './components/ToxaProfileCard'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <ToxaProfileCard/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
