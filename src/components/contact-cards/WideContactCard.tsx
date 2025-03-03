import Contact from "../../contact.types";
import getRandomElement from "../../helpers/getRandomElement";
import SocialLinks from "./SocialLinks";
import "./styles.css";

const WideContactCard = (props: { contact: Contact }) => {
  const instaIcon = require("/public/images/icons/instagram.svg") as string;
  const xIcon = require("/public/images/icons/x.svg") as string;
  const snapchatIcon = require("/public/images/icons/snapchat.svg") as string;

  const backgroundColours = ["#c39acb", "#8ed1fc", "#fece62"];

  const { contact } = props;
  return (
    <div
      className="card"
      style={{ backgroundColor: `${getRandomElement(backgroundColours)}` }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <img
          src={contact.imageUrl}
          style={{
            height: "120px",
            width: "120px",
            objectFit: "cover",
          }}
        ></img>
        <div className="container" style={{ margin: "5px" }}>
          <h3 style={{ marginBottom: "0" }}>{contact.firstName}</h3>
          <div style={{ fontSize: ".7rem" }}>{contact.email}</div>
          <br></br>
          <div className="text" style={{ fontSize: ".7rem" }}>
            {contact.bio}
          </div>
        </div>
      </div>
      <SocialLinks contact={contact}></SocialLinks>
    </div>
  );
};

export default WideContactCard;
