import './SearchBar.css';
import { useState } from 'react';

function SearchBar({searchYelp}) {

  const [ search, setSearch] = useState('');
  const [ location, setLocation] = useState('');
  const [ sortBy, setSortBy] = useState('');
  
  function handleSortSelection({target}) {
    const sortSelection = target.value;
    if(sortBy !== sortSelection) {
      setSortBy(sortSelection);
    } else {setSortBy('')};
  }
  function handleSearch({target}) {
    setSearch(target.value);
  }
  function handleLocation({target}) {
    setLocation(target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Searching for "${search}" in "${location}"${ sortBy ? ' sorted by '+sortBy : ''}.`);
    searchYelp(search, location, sortBy ? sortBy : 'best_match');
  };


  const obj = {
      "Best Match": "best_match",
      "Highest Rated": "rating",
      "Most Reviewed": "review_count"
  }
  const sortOptions = [];
  for (const option in obj) {
      sortOptions.push(<button key={obj[option]} value={obj[option]} type='button' onClick={handleSortSelection} className={ sortBy === obj[option] ? 'activeSort': 'inactiveSort'}>{option}</button>);
  };
  
  return (
    <form className="SearchBar" name="SearchBar" onSubmit={handleSubmit} method="GET">
        {sortOptions}
        <br /> <br />
        <input type="search" name="term" placeholder="Search Businesses" value={search} onChange={handleSearch}/>
        <input type="search" name="location" placeholder="Where?" value={location} onChange={handleLocation} required={true} />
        <br />
        <input className="submit" type="submit" value="Let's Go" />
    </form>
  );
};

export default SearchBar;