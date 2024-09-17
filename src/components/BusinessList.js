import Business from "./Business";
import './BusinessList.css'

function BusinessList(props) {
    return (
    <div className="Business-List">
      <ul>
        {props.businessArray.map(element=><li><Business business={element}/></li>)}
      </ul>
    </div>
  );
}

export default BusinessList;
