import { BaseSyntheticEvent, useEffect, useState } from "react";
import "./styles.css";
import ContactCard from "./contact-card";
import mockContacts from "./mockContacts";
import WideProfile from "./wide-profile";
import NarrowProfile from "./narrow-profile";

const ContactBook = () => {
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(localStorage.getItem("CONTACTS")) || [];
  // });

  // type Contact = {
  //   name: string;
  //   city: string;
  // };

  const penIcon = require("/public/images/icons/pen.svg") as string;
  const tortieCat = require("/public/images/tortie_cat.jpg") as string;
  const placeholderQR = require("/public/images/placeholder_qr.png") as string;

  // const handleAddContact = (event: BaseSyntheticEvent) => {
  //   event.preventDefault();

  //   const newContact = {
  //     name: event.target[0].value,
  //     city: event.target[1].value,
  //   };
  //   setContacts([...contacts, newContact]);
  // };

  // const handleDelete = (indexToDelete: number) => {
  //   const filteredArray = contacts.filter(
  //     (_contact: Contact, index: number) => index !== indexToDelete,
  //   );

  //   setContacts(filteredArray);
  // };

  // useEffect(() => {
  //   if (contacts.length > 0)
  //     window.localStorage.setItem("CONTACTS", JSON.stringify(contacts));
  // }, [contacts]);

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
        <img src={penIcon} style={{ padding: "20px" }}></img>
        <h1>Pen pals</h1>
      </header>
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
        <div style={{ padding: "20px" }}>
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
            {mockContacts.map(() => (
              <ContactCard></ContactCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactBook;
