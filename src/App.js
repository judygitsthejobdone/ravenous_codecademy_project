import './App.css';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
import data from './api/mock'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          ravenous
        </p>
      </header>
      <SearchBar />
      <BusinessList businessArray={data}/>
    </div>
  );
}

export default App;
