import React from 'react';

function Business() {
  return (
    <div className="App">
      
      <body>
        <img src="" />
        <p className="business-name">props.name</p>
        <p className="business-address">
            props.address<br />
            props.city<br />
            props.state<br />
            props.zipcode
        </p>
        <p className="business-category">props.category</p>
        <p className="business-rating">props.rating</p>
        <p className="business-review-count">props.review_count</p>
      </body>
    </div>
  );
}

export default Business;
