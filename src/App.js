import './App.css';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
//import data from './utils/mockAPI';
import getData from './utils/YelpAPI';
import { ChakraProvider } from '@chakra-ui/react';
import { useState } from 'react';

function App() {
  const [data,setData] = useState([]);
  const searchYelp = (search,location,sortBy) => {
    getData(search, location, sortBy ? sortBy : 'best_match')
      .then((res)=>setData(res));
  };
  
  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <p>
            ravenous
          </p>
        </header>
        <SearchBar searchYelp={searchYelp} />
        <BusinessList businessArray={data}/>
      </div>
    </ChakraProvider>
  );
}

export default App;
