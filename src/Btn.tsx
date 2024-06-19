import { CSSProperties } from "react";

type BtnProps = {
  content: string;
  color: string;
};

const Btn = ({ content, color }: BtnProps) => {
  const btnStyle: CSSProperties = {
    display: "flex",
    flex: "0 0 auto",
    alignItems: "center",
    position: "relative",
    height: "46px",
    padding: "0px 8px",
    boxSizing: "border-box",
    fontWeight: "400",
    fontSize: "15px",
    color: color,
  };

  return (
    <>
      <button style={btnStyle}>{content}</button>
    </>
  );
};

export default Btn;
