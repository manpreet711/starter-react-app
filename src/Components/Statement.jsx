import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const StatementCard = () => {
  return (
    <div className="card m-sm-3">
      <div className="card-body">
        <div>
          <h5 className="card-title">Statement</h5>
          <FontAwesomeIcon className="pl-5" icon={faAngleDown} />
        </div>
        <p className="card-text">You Think it we ink it</p>
      </div>
    </div>
  );
};

export default StatementCard;
