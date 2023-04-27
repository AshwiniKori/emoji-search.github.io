import logo from './logo.svg';
import './App.css';
import SearchEmoji from './Component/SearchEmoji';

function App() {
  return (
    <div className="App">
     {/* intalled "npm i emoji-picker-react" to create emojis */}
     <SearchEmoji />
    </div>
  );
}

export default App;
