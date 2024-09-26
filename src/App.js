import './App.css';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
import data from './api/mock';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <p>
            ravenous
          </p>
        </header>
        <SearchBar />
        <BusinessList businessArray={data}/>
      </div>
    </ChakraProvider>
  );
}

export default App;
