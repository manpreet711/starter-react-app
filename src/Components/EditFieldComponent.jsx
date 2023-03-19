import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import api from "../api";
const EditFieldCard = ({ contact, toggleEditingContactFields }) => {
  const [emailList, setEmailList] = useState(contact.emailArray);
  const [phoneList, setPhoneList] = useState(contact.phoneNumberArray);
  console.log("hehe", contact);

  const handleSave = () => {
    const data = contact;
    data.emailArray = emailList;
    data.phoneNumberArray = phoneList;
    api.put(`/contacts/${contact.id}`, data);
    toggleEditingContactFields();
  };

  const handleContactChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...phoneList];
    list[index] = value;
    setPhoneList(list);
  };
  const handleaddclick = (type) => {
    if (type === "email") {
      setEmailList([...emailList, ""]);
    } else if (type === "contact") {
      setPhoneList([...phoneList, ""]);
    }
  };
  const handleEmailChange = (e, index) => {
    const { id, value } = e.target;
    const list = [...emailList];
    // console.log("id", id);
    // let x = document.getElementById(id);
    // console.log("x", x);
    // console.log("valye", value);
    // console.log("x.value", x.value);
    // x.value = value;
    list[index] = value;
    setEmailList(list);
    e.target.focus();
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

  return (
    <>
      <div className="edit-screen">
        <label>Email ID:</label>
        {emailList.map((emailData, i) => {
          return (
            <div key={emailData}>
              <form>
                <input
                  type="email"
                  id={i}
                  name="email"
                  onChange={(e) => handleEmailChange(e, i)}
                  value={emailData}
                />
                {emailList.length !== 1 && (
                  <button
                    className="btn btn-sm btn-dark mx-1"
                    onClick={() => handleremove(i, "email")}
                  >
                    Remove
                  </button>
                )}
              </form>
            </div>
          );
        })}
        <button
          type="button"
          onClick={() => handleaddclick("email")}
          className="my-button"
        >
          Add More
        </button>
        <br />
        <label>Contact Number:</label>
        {phoneList.map((contactData, i) => {
          return (
            <div key={contactData}>
              <form>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  onChange={(e) => handleContactChange(e, i)}
                  // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  value={contactData}
                />
                {phoneList.length !== 1 && (
                  <button
                    className="btn btn-sm btn-dark mx-1"
                    onClick={() => handleremove(i, "contact")}
                  >
                    Remove
                  </button>
                )}
              </form>
            </div>
          );
        })}
        <button
          type="button"
          onClick={() => handleaddclick("contact")}
          className="my-button"
        >
          Add More
        </button>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-danger btn-lg btn-block p-3 py-2"
          onClick={handleSave}
        >
          SAVE
        </button>
      </div>
    </>
  );
};

export default EditFieldCard;
