import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const HelpSection = () => {
  return (
    <div className="card text-center" style={{ marginTop: 68 }}>
      <div className="card-body">
        <h5 className="card-title">Need Help ?</h5>
        <p className="card-text">Our Support Team is at your Disopsal.</p>
        <button>Get Help</button>
      </div>
    </div>
  );
};

export default HelpSection;
