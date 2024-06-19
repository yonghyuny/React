import { CSSProperties } from "react";

type IconProps = {
  content: string;
};

const Icon = ({ content }: IconProps) => {
  const IconStyle: CSSProperties = {
    width: "40px",
    height: "30px",
  };
  return (
    <>
      <div style={IconStyle}>{content}</div>
    </>
  );
};

export default Icon;
