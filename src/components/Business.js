import './Business.css'
function Business(props) {
  return (
    <div className="business">
        <img src={props.business.src} alt={props.business.alt} />
        <h2>{props.business.name}</h2>
        
        <div className="business-info">
            <p className="address">
                {props.business.address}<br />
                {props.business.city}<br />
                {props.business.state} {props.business.zipcode}
            </p>
            
            <div className="column2">
                <h3>{props.business.category}</h3>
                <h4>{props.business.rating} stars</h4>
                <p className="business-review-count">{props.business.review_count} reviews</p>
            </div>
        
        </div>
    
    </div>
  );
}

export default Business;
