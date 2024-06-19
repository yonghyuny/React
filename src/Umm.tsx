import { useState } from "react";

type UmmProps = {
  name: string;
};

const Umm = ({ name }: UmmProps) => {
  const [string, setString] = useState(name);

  const handleClick = () => {
    setString((prev) => (prev == "엄준식" ? "살아있다" : "엄준식"));
  };

  return <div onClick={handleClick}>{string}</div>;
};

export default Umm;
