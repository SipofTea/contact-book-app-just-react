const NarrowProfile = () => {
  const tortieCat = require("/public/images/tortie_cat.jpg") as string;
  const placeholderQR = require("/public/images/placeholder_qr.png") as string;
  return (
    <>
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignSelf: "center",
            flexDirection: "column",
            paddingTop: "5vh",
          }}
        >
          <div>
            <img
              src={tortieCat}
              style={{ width: "40vw", marginRight: "5vw" }}
            ></img>
            <img
              src={placeholderQR}
              style={{ width: "40vw", borderRadius: 0 }}
            ></img>
          </div>
          <div
            style={{
              flexDirection: "column",
            }}
          >
            <h2>Else Meijerink</h2>
            <p>p.e.meijerink@gmail.com</p>
          </div>
        </div>
      </>
    </>
  );
};

export default NarrowProfile;
