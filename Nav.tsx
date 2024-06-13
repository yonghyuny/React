import { CSSProperties } from "react";
import Icon from "./Icon";

const Nav = () => {
  const navStyle: CSSProperties = {
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
      <div style={navStyle}>
        <Icon content="알림"></Icon>
        <Icon content="Musinsa"></Icon>
        <Icon content="Search"></Icon>
        <Icon content="Cart"></Icon>
      </div>
    </>
  );
};

export default Nav;
