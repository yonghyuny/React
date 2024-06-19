import { useState } from "react";

const Counter = () => {
  //   useState(초기값);

  const [num, setNum] = useState<number>(0);

  const handleClickPlus = () => {
    setNum((prev) => prev + 1);
  };

  const handleClickMinus = () => {
    setNum((prev) => {
      return prev === 0 ? 0 : prev - 1;
    });
  };

  return (
    <div>
      <button onClick={handleClickMinus}>-</button>
      <span>{num}</span>
      <button onClick={handleClickPlus}>+</button>
    </div>
  );
};

export default Counter;
