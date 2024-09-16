import Business from "./Business";
import './BusinessList.css'

const hardcodedBusiness = {
    name: "Uncle Chip's",
    address: "1100 North Capitol St",
    city: "Washington",
    state: "DC",
    zipcode: "20001",
    category: "American",
    rating: "4.8",
    review_count: "237",
    src: "https://lh3.googleusercontent.com/p/AF1QipOQI5WU8mTmYDxDXuySRrOlI05XGWM42wnk6X0B=s1360-w1360-h1020",
    alt: "Uncle Chip's businesss photo"
}; //DEBUG code, used for testing

let businessArray = [
    <Business business={hardcodedBusiness}/>,
    <Business business={hardcodedBusiness}/>,
    <Business business={hardcodedBusiness}/>,
    <Business business={hardcodedBusiness}/>,
    <Business business={hardcodedBusiness}/>,
    <Business business={hardcodedBusiness}/>
];

function BusinessList() {
    const list = businessArray.map(business=><li>{business}</li>);

    return (
    <div className="Business-List">
      <ul>
        {list}
      </ul>
    </div>
  );
}

export default BusinessList;
