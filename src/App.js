import logo from './logo.svg';
import ToxaProfileCard from './components/ToxaProfileCard/ToxaProfileCard'
import './App.css';
import TheHeader from "./components/TheHeader/TheHeader";

function App() {
  return (
    <div className="App">
        <TheHeader></TheHeader>
        <ToxaProfileCard/>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            Learn React
        </a>
    </div>
  );
}

export default App;
