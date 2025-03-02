// import { BaseSyntheticEvent, useEffect, useState } from "react";
import "./styles.css";
import ContactCard from "./contact-card";
import mockContacts from "./mockContacts";

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
        <div
          style={{
            maxWidth: "800px",
            display: "flex",
            height: "200px",
            justifyContent: "space-between",
            alignSelf: "center",
            padding: "20px",
          }}
        >
          <img
            src={tortieCat}
            style={{ height: "200px", width: "200px", borderRadius: "100px" }}
          ></img>
          <div
            style={{
              flexDirection: "column",
              paddingLeft: "30px",
              paddingRight: "60px",
            }}
          >
            <h2>Else Meijerink</h2>
            <p>p.e.meijerink@gmail.com</p>
          </div>
          <img
            src={placeholderQR}
            style={{ maxWidth: "100%", height: "200px" }}
          ></img>
        </div>
        <div style={{ padding: "20px" }}>
          <h2>Pals</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              maxWidth: "80vw",
              flexWrap: "wrap",
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
