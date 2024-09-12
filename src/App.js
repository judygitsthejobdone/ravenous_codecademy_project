import './App.css';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          ravenous
        </p>
      </header>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
