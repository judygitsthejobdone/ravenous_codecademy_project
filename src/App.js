import './App.css';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
//import data from './utils/mockAPI';
import getData from './utils/YelpAPI';
import { ChakraProvider } from '@chakra-ui/react';
import { useState } from 'react';

function App() {
  const [data,setData] = useState();
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
        <footer>
          <p>This project was bootstrapped with <a href="https://github.com/facebook/create-react-app" target='_blank' >Create React App</a> and 
          is powered by <a href="https://docs.developer.yelp.com/reference/v3_business_search" target='_blank' >Yelp Fusion API</a>
          . Styles are powered by <a target='blank' href='https://v2.chakra-ui.com/'>ChakraUI</a>.</p>
          <address><a href="https://github.com/judygitsthejobdone" target='_blank' >Developed by Judah Mendez</a></address>
          </footer>
      </div>
    </ChakraProvider>
  );
}

export default App;
