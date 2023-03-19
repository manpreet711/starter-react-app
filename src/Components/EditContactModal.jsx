import React, { useEffect, useState } from "react";
import ContactCard from "./ContactCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import api from "../api";
import EditFieldCard from "./EditFieldComponent";

const EditContactModal = ({
  isEditingContact,
  toggleEditingContact,
  isEditingContactField,
  toggleEditingContactFields,
  contact,
}) => {
  // const [contact, setContact] = useState([]);
  const [id, setTeamId] = useState();
  const [teamName, setTeamName] = useState();
  const [emailList, setEmailList] = useState([{ emailId: "" }]);
  const [phoneList, setPhoneList] = useState([{ contactNo: "" }]);
  const handleEmailChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...emailList];
    list[index][name] = value;
    setEmailList(list);
  };

  function setTeam(id) {
    setTeamId(id);
  }

  const handleContactChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...phoneList];
    list[index][name] = value;
    setPhoneList(list);
  };

  const handleremove = (index, type) => {
    if (type === "email") {
      const list = [...emailList];
      list.splice(index, 1);
      setEmailList(list);
    } else if (type === "contact") {
      const list = [...phoneList];
      list.splice(index, 1);
      setPhoneList(list);
    }
  };

  const handleaddclick = (type) => {
    if (type === "email") {
      setEmailList([...emailList, { email: "" }]);
    } else if (type === "contact") {
      setPhoneList([...phoneList, { contact: "" }]);
    }
  };
  // Contact API call
  const contacts = async () => {
    const response = await api.get("/contacts");
    console.log("resdata", response.data);
    return response.data;
  };

  useEffect(() => {
    const getAllContact = async () => {
      const data = await contacts();
      if (data) {
        // setContact(data);
        setEmailList(data.email);
        setPhoneList(data.phoneNumber);
        setTeamName(data.teamName);
        // setTeamId(data.id);
      }
      // console.log("Test", data);
      // console.log("contact", contact);
      // console.log("emailList", emailList);
      // console.log("phoneList", phoneList);
    };
    getAllContact();
  }, []);
  return (
    <div className="half-screen">
      <div>
        <FontAwesomeIcon
          onClick={
            isEditingContactField && isEditingContact
              ? toggleEditingContactFields
              : toggleEditingContact
          }
          className="pl-5"
          icon={faAngleDown}
        />{" "}
        <h2> Contacts </h2>
        <p className="text-muted">
          PLease Provide companys email and contact number
        </p>
      </div>
      {!isEditingContactField && (
        <div className="edit-screen">
          {contact.map((data) => {
            return (
              <ContactCard
                setTeam={setTeam}
                teamName={data.teamName}
                setTeamName={setTeamName}
                teamId={data.id}
                testemail={data.emailArray}
                testphoneNumber={data.phoneNumberArray}
                toggleEditing={toggleEditingContactFields}
              ></ContactCard>
            );
          })}
        </div>
      )}
      {isEditingContactField && (
        <EditFieldCard
          contact={contact[id]}
          phoneList={phoneList}
          toggleEditingContactFields={toggleEditingContactFields}
          handleContactChange={handleContactChange}
          handleEmailChange={handleEmailChange}
          handleremove={handleremove}
          handleaddclick={handleaddclick}
        />
      )}
    </div>
  );
};

export default EditContactModal;
