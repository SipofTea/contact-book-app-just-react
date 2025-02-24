import { BaseSyntheticEvent, useEffect, useState } from "react";

const ContactBook = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("CONTACTS")) || [];
  });

  type Contact = {
    name: string;
    city: string;
  };

  const handleAddContact = (event: BaseSyntheticEvent) => {
    event.preventDefault();

    const newContact = {
      name: event.target[0].value,
      city: event.target[1].value,
    };
    setContacts([...contacts, newContact]);
  };

  const handleDelete = (indexToDelete: number) => {
    const filteredArray = contacts.filter(
      (_contact: Contact, index: number) => index !== indexToDelete,
    );

    setContacts(filteredArray);
  };

  useEffect(() => {
    if (contacts.length > 0)
      window.localStorage.setItem("CONTACTS", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <div>
        <h1>Contact book</h1>
      </div>
      <div>
        <h2>Add a new contact</h2>
        <form onSubmit={handleAddContact}>
          <label htmlFor="name">Name </label>
          <input id="name" type="text" name="name" />
          <br />
          <br />
          <label htmlFor="city">City </label>
          <input id="city" type="text" name="city" />
          <br />
          <br />
          <input type="submit" value="Add contact" />
        </form>
      </div>
      <div>
        <h2>Contacts</h2>
        <ul>
          {contacts.map((contact: Contact, index: number) => (
            <div>
              <li key={index}>
                {contact.name} {contact.city}
                <button
                  onClick={() => {
                    handleDelete(index);
                  }}
                >
                  Delete
                </button>
              </li>
              <br />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactBook;
