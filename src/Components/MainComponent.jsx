import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import ContactCard from "./ContactCard";
import AddressCard from "./Address";
import SocialMediaCard from "./SocialMedia";
import HoursOfOperationCard from "./HoursOfOperation";
import StatementCard from "./Statement";
import EditContactModal from "./EditContactModal";
import api from "../api";

const MainComponent = () => {
  const [contact, setContact] = useState([{}]);
  const [titleText, setTitleText] = useState("");
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingContact, setIsEditingContact] = useState(false);
  const [isEditingContactField, setIsEditingContactField] = useState(false);

  const handleChange = (e) => {
    setTitleText(e.target.value);
  };
  const toggleEditingContact = () => {
    setIsEditingContact(!isEditingContact);
  };
  const toggleEditingContactFields = () => {
    setIsEditingContactField(!isEditingContactField);
  };
  //Title API call
  const title = async () => {
    const response = await api.get("/title");
    return response.data;
  };
  const updateTitle = async () => {
    const response = await api.put("/title", { title: titleText });
    setTitleText(response.data.title);
  };
  const setDefaultTitleText = async () => {
    const data = await title();
    setTitleText(data.title);
  };
  const contacts = async () => {
    const response = await api.get("/contacts");
    console.log("resdata", response.data);
    return response;
  };
  useEffect(() => {
    const getTitle = async () => {
      const data = await title();
      if (data) setTitleText(data.title);
    };
    getTitle();
    const getAllContact = async () => {
      const data = await contacts();
      if (data) {
        setContact(data.data);
        console.log("Test", data.data);
      }
      console.log("contact", contact);
      console.log("contact[0].emailArray", contact[0].emailArray);
    };
    getAllContact();
  }, []);

  return (
    <>
      {isEditingContact && (
        <EditContactModal
          isEditingContact={isEditingContact}
          isEditingContactField={isEditingContactField}
          toggleEditingContactFields={toggleEditingContactFields}
          toggleEditingContact={toggleEditingContact}
          contact={contact}
        />
      )}
      <div className="main-container">
        <h2 className="title">About Us</h2>
        <div className="title-section">
          <img
            src="https://www.atinks.com/wp-content/uploads/2017/10/A.T-inks-logo-600-DPI-1-e1545645137933.png"
            alt="Profile image"
            width="64"
            height="62"
            className="image--cover"
          />{" "}
          <h3 className="title-text">
            A.T. Links <br /> <span className="sub-title">Digital INks</span>
          </h3>
          <div className="ms-5">
            <FontAwesomeIcon icon={faAngleDown} />
            {/* <FontAwesomeIcon icon="fad fa-badge-check" />{" "} */}
            <a href="#" className="ms-2">
              <u>Verify Company</u>
            </a>
          </div>
        </div>
        <div className="row col-6 w-80 ms-1 mb-sm-3 mt-sm-2">
          <div>
            {!isEditingTitle && <span>{titleText}</span>}
            {!isEditingTitle && (
              <Button
                className="pt-0"
                variant="link"
                onClick={() => {
                  setIsEditingTitle(true);
                }}
              >
                Edit
              </Button>
            )}
            {isEditingTitle && (
              <div className="row col-md-12 mr-0">
                <div className="col-md-8 px-0">
                  <input
                    type="text"
                    className="form-control w-100"
                    value={titleText}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-4 mt-1">
                  <Button
                    className="me-1"
                    variant="primary"
                    size="sm"
                    type="submit"
                    onClick={() => {
                      setIsEditingTitle(false);
                      updateTitle();
                    }}
                  >
                    Save
                  </Button>
                  <Button
                    variant="secondary"
                    className="ml-1"
                    size="sm"
                    onClick={() => {
                      setIsEditingTitle(false);
                      setDefaultTitleText();
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* <div className="card text-center">
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Active
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div> */}
        <div className="tab">
          <div className="tab-navigator">
            <div>Info</div>
            <div>FAQ</div>
            <div>Complaints and feedback</div>
            <div>Privacy Policy</div>
            <div>Terms and conditions</div>
          </div>

          <div className="first-row">
            <ContactCard
              title={"Contact"}
              testemail={contact[0].emailArray}
              testphoneNumber={contact[0].phoneNumberArray}
              toggleEditing={toggleEditingContact}
            ></ContactCard>
            {/* <ContactCard
              title={"Contact"}
              testemail={["he, te"]}
              testphoneNumber={["te", "ge"]}
              toggleEditing={toggleEditingContact}
            ></ContactCard> */}
            <AddressCard></AddressCard>
            <HoursOfOperationCard></HoursOfOperationCard>
            <SocialMediaCard></SocialMediaCard>
            <StatementCard></StatementCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainComponent;
