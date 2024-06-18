import Button from "./Button";
import BtnGruop from "./BtnGroup";
import Nav from "./Nav";
import Header from "./Header";
import MainImg from "./mainImg";
import CategoryButton, { CategoryButtonProps } from "./CategoryButton";
import { categoryBtn } from "./constants/category";

import BrandBtn from "./BrandBtn";
import { brandBtn } from "./constants/brandBtn";
import Ex from "./Ex";

import { FaBeer, FaFacebook, FaGoogle } from "react-icons/fa";
import SnsBtnGroup from "./MakeSnsBtnGroup";
import SNSText from "./sns/SNSText";
import SNSLogin from "./sns/SNSLogin";
import { FaApple } from "react-icons/fa";
import { CSSProperties } from "react";
import PillCancle from "./pillComponent/PillCancle";
import PillCircle from "./pillComponent/PillCircle";
import PillText from "./pillComponent/PillText";
import Pill from "./pill1/Pill";
import NewButton from "./NewButton/NewButton";

function App() {
  // const styles: CSSProperties = {
  //   display: "flex",
  //   flexDirection: "column",
  //   gap: "20px",
  //   margin: "20px",
  // };

  const test = () => alert("하....");

  return (
    <div className="App">
      {/* {categoryBtn.map((v) => (
        <CategoryButton {...v} />
      ))}
      <Nav></Nav>
      <BtnGruop></BtnGruop>
      <MainImg></MainImg>
      {brandBtn.map((v) => (
        <BrandBtn {...v} />
      ))}
      <Ex></Ex> */}
      {/* <SnsBtnGroup></SnsBtnGroup>

      <SNSLogin
        SNSTextP={{ sns: "Facebook" }}
        SNSIconP={{ Icon: FaFacebook }}
        SNSColorP="FaceBook"
      ></SNSLogin>
      <SNSLogin
        SNSTextP={{ sns: "Google" }}
        SNSIconP={{ Icon: FaGoogle }}
        SNSColorP="Google"
      ></SNSLogin>
      <SNSLogin
        SNSTextP={{ sns: "Apple" }}
        SNSIconP={{ Icon: FaApple }}
        SNSColorP="Apple"
      ></SNSLogin> */}

      <PillCancle></PillCancle>
      <PillCircle backgroundColor="blue"></PillCircle>
      <PillText text="Javascript"></PillText>

      <Pill CircleColor="#2196F3" TextContent={{ text: "Javascript" }}></Pill>
      <NewButton click={() => alert("개빡셈")} />
      <NewButton click={() => alert("개어려움")} />
      <NewButton click={test} />
    </div>
  );
}

export default App;
