import { BaseSyntheticEvent, useEffect, useState } from "react";
import "./styles.css";
import mockContacts from "./mockContacts";
import WideProfile from "./components/profile/WideProfile";
import NarrowProfile from "./components/profile/NarrowProfile";
import TallContactCard from "./components/contact-cards/TallContactCard";
import WideContactCard from "./components/contact-cards/WideContactCard";
import ContactAddedModal from "./components/ContactAddedModal.tsx/ContactAddedModal";
import getRandomElement from "./helpers/getRandomElement";

const ContactBook = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("CONTACTS")) || [];
  });
  const [showContactAddedModal, setShowContactAddedModal] = useState(false);
  const [newContact, setNewContact] = useState();

  const penIcon = require("/public/images/icons/pen.svg") as string;

  const handleAddContact = (event: BaseSyntheticEvent) => {
    event.preventDefault();

    const randomContact = getRandomElement(mockContacts);
    setNewContact(randomContact);
    setContacts([...contacts, randomContact]);

    setShowContactAddedModal(true);
  };

  // const handleDelete = (indexToDelete: number) => {
  //   const filteredArray = contacts.filter(
  //     (_contact: Contact, index: number) => index !== indexToDelete,
  //   );

  //   setContacts(filteredArray);
  // };

  useEffect(() => {
    if (contacts.length > 0)
      window.localStorage.setItem("CONTACTS", JSON.stringify(contacts));
  }, [contacts]);

  const [isDesktop, setDesktop] = useState(window.innerWidth > 800);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 800);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <>
      <header className="header">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img src={penIcon} style={{ padding: "20px" }}></img>
          <h1>Pen pals</h1>
        </div>
        <button onClick={handleAddContact}>Add contact</button>
      </header>
      {showContactAddedModal && (
        <div onClick={() => setShowContactAddedModal(false)}>
          <ContactAddedModal contact={newContact}></ContactAddedModal>
        </div>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifySelf: "center",
        }}
      >
        {isDesktop ? (
          <WideProfile></WideProfile>
        ) : (
          <NarrowProfile></NarrowProfile>
        )}
        <div>
          <h2>Pals</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              maxWidth: "80vw",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            {contacts.map((contact) =>
              isDesktop ? (
                <TallContactCard contact={contact}></TallContactCard>
              ) : (
                <WideContactCard contact={contact}></WideContactCard>
              ),
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactBook;
