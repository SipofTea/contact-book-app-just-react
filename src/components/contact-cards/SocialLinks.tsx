import Contact from "../../contact.types";
import "./styles.css";

const SocialLinks = (props: { contact: Contact }) => {
  const { contact } = props;

  const instaIcon = require("/public/images/icons/instagram.svg") as string;
  const xIcon = require("/public/images/icons/x.svg") as string;
  const snapchatIcon = require("/public/images/icons/snapchat.svg") as string;

  return (
    <div className="iconContainer">
      <a
        href={`https://www.instagram.com/${contact.instagram}`}
        target="_blank"
      >
        <img
          src={instaIcon}
          style={{
            height: "25px",
            width: "25px",
            paddingBottom: "10px",
            borderRadius: 0,
          }}
        ></img>
      </a>
      <a href={`https://www.x.com/${contact.x}`} target="_blank">
        <img
          src={xIcon}
          style={{
            height: "25px",
            width: "25px",
            paddingBottom: "10px",
            borderRadius: 0,
          }}
        ></img>
      </a>
      <a href={`https://www.snapchat.com/${contact.snapchat}`} target="_blank">
        <img
          src={snapchatIcon}
          style={{ height: "25px", width: "25px", borderRadius: 0 }}
        ></img>
      </a>
    </div>
  );
};

export default SocialLinks;
