import { CSSProperties } from "react";

const PillCancle = () => {
  const style: CSSProperties = {
    borderRadius: "50%",
    backgroundColor: "gray",
    color: "white",
    width: "20px",
    height: "20px",
    padding: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <>
      <button style={style}>x</button>
    </>
  );
};

export default PillCancle;
