import { CSSProperties } from "react";
import Btn from "./Btn";

const BtnGruop = () => {
  const btnGroupStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    maxWidth: "600px",
    margin: "0 auto",
    justifyContent: "center",
  };

  return (
    <>
      <div style={btnGroupStyle}>
        <Btn content="530데이" color="red"></Btn>
        <Btn content="추천" color="black"></Btn>
        <Btn content="뷰티" color="black"></Btn>
        <Btn content="랭킹" color="black"></Btn>
        <Btn content="세일" color="black"></Btn>
        <Btn content="스타일" color="black"></Btn>
        <Btn content="이벤트" color="black"></Btn>
      </div>
    </>
  );
};

export default BtnGruop;
