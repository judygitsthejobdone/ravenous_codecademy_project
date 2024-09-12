function Business(props) {
  return (
    <div className="business">
        <img src={props.business.src} alt={props.business.alt} />
        <p className="business-name">{props.business.name}</p>
        <p className="business-address">
            {props.business.address}<br />
            {props.business.city}<br />
            {props.business.state}<br />
            {props.business.zipcode}
        </p>
        <p className="business-category">{props.business.category}</p>
        <p className="business-rating">{props.business.rating}</p>
        <p className="business-review-count">{props.business.review_count}</p>
    </div>
  );
}

export default Business;
