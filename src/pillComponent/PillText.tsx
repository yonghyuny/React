import { CSSProperties } from "react";

type PillProps = {
  text: "XML" | "Javascript" | "UI";
};

const PillText = ({ text }: PillProps) => {
  const style: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    borderRadius: "30px",
  };

  return (
    <>
      <div style={style}>{text}</div>
    </>
  );
};

export default PillText;
