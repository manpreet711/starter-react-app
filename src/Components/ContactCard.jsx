import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const ContactCard = ({
  title,
  email,
  phoneNumber,
  toggleEditing,
  teamName,
  testemail,
  testphoneNumber,
  setTeam,
  teamId,
}) => {
  const handleClick = () => {
    console.log("condition ", typeof setTeam != "undefined");
    if (typeof setTeam != "undefined") {
      setTeam(teamId - 1);
      console.log(typeof setTeam);
    }
    toggleEditing();
  };

  return (
    <div className="card m-sm-3">
      <div className="card-body">
        <div>
          {title && <h4 className="card-title">{title}</h4>}
          {teamName && <h4 className="card-title">{teamName}</h4>}
          <FontAwesomeIcon
            className="pl-5"
            onClick={handleClick}
            icon={faAngleDown}
          />
        </div>
        {console.log("hello", testemail, testphoneNumber)}
        {testemail && testemail.map((data) => data + " / ")}
        <br></br>
        {testphoneNumber && testphoneNumber.map((data) => data + " / ")}
        <p className="card-text">{email} </p>
        <p className="card-text">{phoneNumber}</p>
      </div>
    </div>
  );
};

export default ContactCard;
