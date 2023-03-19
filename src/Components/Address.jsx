import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const AddressCard = () => {
  return (
    <div className="card m-sm-3">
      <div className="card-body">
        <div>
          <h5 className="card-title">Address</h5>
          <FontAwesomeIcon className="pl-5" icon={faAngleDown} />
        </div>
        <p className="card-text">
          C1/ 351 / 4, GIDC Makarpura, Vadodara - 390010, Gujrat, India.
        </p>
        {/* <p className="card-text">+91 3423456444 / +91 9688863434</p> */}
      </div>
    </div>
  );
};

export default AddressCard;
