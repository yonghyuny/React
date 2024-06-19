import { CSSProperties } from "react";

type CircleProps = {
  backgroundColor: "red" | "orange" | "blue";
};

const PillCircle = ({ backgroundColor }: CircleProps) => {
  const style: CSSProperties = {
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    backgroundColor: backgroundColor,
  };

  return (
    <>
      <button style={style}></button>
    </>
  );
};

export default PillCircle;
