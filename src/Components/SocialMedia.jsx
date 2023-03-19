import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const SocialMediaCard = () => {
  return (
    <div className="card m-sm-3">
      <div className="card-body">
        <div>
          <h5 className="card-title">Social Media & Links</h5>
          <FontAwesomeIcon className="pl-5" icon={faAngleDown} />
        </div>
        <p className="card-text">salsesTeam@br.in / salsesTeam2@br.in </p>
        <p className="card-text">+91 3423456444 / +91 9688863434</p>
      </div>
    </div>
  );
};

export default SocialMediaCard;
