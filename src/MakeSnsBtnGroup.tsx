import { CSSProperties } from "react";
import { FaFacebook } from "react-icons/fa";
import MakeSnsBtn from "./MakeSnsBtn";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const SnsBtnGroup = () => {
  const SnsbtnGroup: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  };

  return (
    <div style={SnsbtnGroup}>
      <MakeSnsBtn
        Icon={FaFacebook}
        content="Continue with Facebook"
        size="500px"
        backgroundColor="blue"
      ></MakeSnsBtn>
      <MakeSnsBtn
        Icon={FaGoogle}
        content="Continue with Google"
        color="gray"
        size="400px"
        backgroundColor="white"
      ></MakeSnsBtn>
      <MakeSnsBtn
        Icon={FaApple}
        content="Continue with Apple"
        size="300px"
        backgroundColor="black"
      ></MakeSnsBtn>
    </div>
  );
};

export default SnsBtnGroup;
