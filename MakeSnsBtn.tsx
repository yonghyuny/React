import { CSSProperties } from "react";
import { IconType } from "react-icons";
import { FaFacebook } from "react-icons/fa";
type SnsBtnProps = {
  content: string;
  color?: string;
  backgroundColor: string;
  size: string;
  Icon: IconType;
};

const MakeSnsBtn = ({
  content,
  color = "white",
  size,
  backgroundColor,
  Icon,
}: SnsBtnProps) => {
  const btnStyle: CSSProperties = {
    color: color,
    width: size,
    height: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: backgroundColor,
    borderRadius: "10px",
    gap: "20px",
  };

  return (
    <>
      <button style={btnStyle}>
        <Icon /> {content}
      </button>
    </>
  );
};

export default MakeSnsBtn;
