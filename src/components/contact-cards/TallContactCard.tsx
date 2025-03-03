import Contact from "../../contact.types";
import getRandomElement from "../../helpers/getRandomElement";
import SocialLinks from "./SocialLinks";
import "./styles.css";

const TallContactCard = (props: { contact: Contact }) => {
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
        <SocialLinks contact={contact}></SocialLinks>
      </div>
      <div className="container">
        <h3 style={{ marginBottom: "0" }}>{contact.firstName}</h3>
        <br></br>
        <div className="twoLineText">{contact.bio}</div>
      </div>
    </div>
  );
};

export default TallContactCard;
