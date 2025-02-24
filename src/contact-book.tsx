import { BaseSyntheticEvent, useState } from "react";

const ContactBook = () => {
  const [contacts, setContacts] = useState([]);

  const handleAddContact = (event: BaseSyntheticEvent) => {
    event.preventDefault();

    const newContact = {
      name: event.target[0].value,
      city: event.target[1].value,
    };
    setContacts([...contacts, newContact]);
  };

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
          {contacts.map((contact, index) => (
            <li key={index}>
              {contact.name} {contact.city}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactBook;
