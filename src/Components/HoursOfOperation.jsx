import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const HoursOfOperationCard = () => {
  return (
    <div className="card m-sm-3">
      <div className="card-body">
        <div>
          <h5 className="card-title">Hours Of Operations</h5>
          <FontAwesomeIcon className="pl-5" icon={faAngleDown} />
        </div>
        <p className="card-text">Monday To Friday 09:00 Am To 06: 00 Pm.</p>
      </div>
    </div>
  );
};

export default HoursOfOperationCard;
