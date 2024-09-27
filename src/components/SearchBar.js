import './SearchBar.css';

function SearchBar() {
    const obj = {
        "Best Match": "best_match",
        "Highest Rated": "rating",
        "Most Reviewed": "most_reviewed"
    }
    const sortOptions = [];
    for (const option in obj) {
        sortOptions.push(<button key={obj[option]}>{option}</button>);
    };
  return (
    <form className="SearchBar" name="SearchBar" action="" method="GET">
        {sortOptions}
        <hr /><br />
        <input type="search" name="term" placeholder="Search Businesses" />
        <input type="search" name="location" placeholder="Where?" />
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