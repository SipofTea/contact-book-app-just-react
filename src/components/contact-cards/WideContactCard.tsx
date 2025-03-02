import Contact from "../../contact.types";
import getRandomElement from "../../helpers/getRandomElement";
import "./styles.css";

const WideContactCard = (props: { contact: Contact }) => {
  const penIcon = require("/public/images/icons/pen.svg") as string;

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
      <div
        className="iconContainer"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <img
          src={penIcon}
          style={{
            height: "25px",
            width: "25px",
            paddingBottom: "10px",
          }}
        ></img>
        <img
          src={penIcon}
          style={{
            height: "25px",
            width: "25px",
            paddingBottom: "10px",
          }}
        ></img>
        <img src={penIcon} style={{ height: "25px", width: "25px" }}></img>
      </div>
    </div>
  );
};

export default WideContactCard;
