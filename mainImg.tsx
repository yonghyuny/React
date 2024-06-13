import { CSSProperties } from "react";

const MainImg = () => {
  const mainImgStyle: CSSProperties = {
    width: "100%",
    height: "auto",
    maxWidth: "600px",
    margin: " 0 auto",
  };

  const ImgStyle: CSSProperties = {
    width: "100%",
    maxWidth: "600px",
    margin: "0 auto",
  };

  return (
    <>
      <div style={mainImgStyle}>
        <img style={ImgStyle} src="musinsaMain.jpg" alt="" />
      </div>
    </>
  );
};

export default MainImg;
