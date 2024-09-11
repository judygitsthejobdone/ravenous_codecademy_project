import React from 'react';

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
}

function Business(props) {
    props = hardcodedBusiness;
  return (
    <div className="App">
        <img src={props.src} alt={props.alt} />
        <p className="business-name">{props.name}</p>
        <p className="business-address">
            {props.address}<br />
            {props.city}<br />
            {props.state}<br />
            {props.zipcode}
        </p>
        <p className="business-category">{props.category}</p>
        <p className="business-rating">{props.rating}</p>
        <p className="business-review-count">{props.review_count}</p>
    </div>
  );
}

export default Business;
