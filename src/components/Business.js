import './Business.css'
function Business(props) {
  return (
    <div className="business">
        <img src={props.business.src} alt={props.business.alt} />
        <p className="business-name">{props.business.name}</p>
        <div className="business-info">
            <p className="address">
                {props.business.address}<br />
                {props.business.city}<br />
                {props.business.state} {props.business.zipcode}
            </p>
            <div className="column2">
                <p className="business-category">{props.business.category}</p>
                <p className="business-rating">{props.business.rating} stars</p>
                <p className="business-review-count">{props.business.review_count} reviews</p>
            </div>
        </div>
    </div>
  );
}

export default Business;
