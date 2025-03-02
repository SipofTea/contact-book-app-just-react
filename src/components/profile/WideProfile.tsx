const WideProfile = () => {
  const tortieCat = require("/public/images/tortie_cat.jpg") as string;
  const placeholderQR = require("/public/images/placeholder_qr.png") as string;
  return (
    <>
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
        <img src={tortieCat} style={{ height: "200px", width: "200px" }}></img>
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
          style={{ maxWidth: "100%", height: "200px", borderRadius: 0 }}
        ></img>
      </div>
    </>
  );
};

export default WideProfile;
