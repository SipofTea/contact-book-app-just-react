import "./styles.css";

const ContactAddedModal = (props) => {
  const { contact } = props;
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <div onClick={(e) => e.stopPropagation()} className="star">
            <img
              src={contact.imageUrl}
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            ></img>
            <div style={{ zIndex: "2", fontSize: ".8rem", marginTop: "1vh" }}>
              {contact.firstName}
            </div>
            <div style={{ zIndex: "2", fontSize: ".8rem" }}>
              has been added as a pal!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactAddedModal;
