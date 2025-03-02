const ContactCard = () => {
  const penIcon = require("/public/images/icons/pen.svg") as string;
  const tortieCat = require("/public/images/tortie_cat.jpg") as string;

  const backgroundColours = ["#c39acb", "#8ed1fc", "#fece62"];
  const getRandomElement = (arr: any[]) =>
    arr[Math.floor(Math.random() * arr.length)];

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
          src={tortieCat}
          style={{
            height: "120px",
            width: "120px",
            borderRadius: "60px",
          }}
        ></img>
        <div
          className="iconContainer"
          style={{ display: "flex", flexDirection: "column" }}
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
      <div className="container">
        <h3>Pal</h3>
        <text>pal@email.com</text>
        <br></br>
        <text>Some fun stuff about pal</text>
      </div>
    </div>
  );
};

export default ContactCard;
