import './SearchBar.css';
import react, { useState } from 'react';

function SearchBar() {

  /**Modify your SearchBar component so that it manages the state for the following inputs:
   * The search term located in the search input
   * The location to search near from the location input
   * The selected sorting option to use
   */

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
  };


  const obj = {
      "Best Match": "best_match",
      "Highest Rated": "rating",
      "Most Reviewed": "most_reviewed"
  }
  const sortOptions = [];
  for (const option in obj) {
      sortOptions.push(<button key={obj[option]} value={obj[option]} type='button' onClick={handleSortSelection} className={ sortBy == obj[option] ? 'activeSort': 'inactiveSort'}>{option}</button>);
  };
  
  return (
    <form className="SearchBar" name="SearchBar" onSubmit={handleSubmit} method="GET">
        {sortOptions}
        <br /> <br />
        <input type="search" name="term" placeholder="Search Businesses" value={search} onChange={handleSearch}/>
        <input type="search" name="location" placeholder="Where?" value={location} onChange={handleLocation}/>
        <br />
        <input className="submit" type="submit" value="Let's Go" />
    </form>
  );
};

export default SearchBar;

/**Need to add 4 buttons
 * - Best Match
 * - Highest Rated
 * - Most Reviewed
 * - Let's Go (submit)
 * 
 * Need to add 2 text inputs
 * - Search Businesses
 * - Where?
 */
/**Create a SearchBar component that users can use to search for businesses on the Yelp platform.

The search bar should contain two inputs, one for the user’s search terms and the selected location. Don’t forget a search button as well.

The search bar should also offer sorting options such as Best Match, Highest Rated, and Most Reviewed. This functionality will be fully incorporated in a later part of the project, but for now, concentrate on building the buttons and the structure needed to communicate with the Yelp API.

Review the details on what the API expects to receive, and follow the formatting and naming convention set by the API documentation.
 */