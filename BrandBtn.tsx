import { CSSProperties } from "react";

export type BrandBtnProps = {
  color?: string;
  content: string;
};

const BrandBtn = ({ color = "black", content }: BrandBtnProps) => {
  const brandBtnStyle: CSSProperties = {
    color,
  };

  return <button style={brandBtnStyle}>{content}</button>;
};

export default BrandBtn;
