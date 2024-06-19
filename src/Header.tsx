import { CSSProperties } from "react";

const Header = () => {
  const headerStyle: CSSProperties = {
    maxWidth: "600px",
    margin: "0px auto",
    boxSizing: "border-box",
    height: "50px",
    backgroundColor: "rgb(255, 255, 255)",
    display: "flex",
    justifyContent: "space-between",
    padding: "0px 10px",
  };

  return (
    <>
      <div style={headerStyle}></div>
    </>
  );
};

export default Header;
