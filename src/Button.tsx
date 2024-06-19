import { CSSProperties } from "react";

type ButtonProps = {
  content: string;
  backgroundColor: string;
  color: string;
};

const Button = ({ backgroundColor, content, color }: ButtonProps) => {
  const buttonStyle: CSSProperties = {
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "20px",
    color: color,
    backgroundColor: backgroundColor,
    width: "240px",
    textAlign: "center",
    padding: "10px 0",
    borderRadius: "8px",
  };

  return (
    <>
      <div style={buttonStyle}>{content}</div>
    </>
  );
};

export default Button;
