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

import { FaBeer } from "react-icons/fa";
import SnsBtnGroup from "./MakeSnsBtnGroup";
import SNSText from "./sns/SNSText";
import SNSLogin from "./sns/SNSLogin";
import { FaApple } from "react-icons/fa";

function App() {
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
      <SnsBtnGroup></SnsBtnGroup>
      <SNSLogin
        SNSTextP={{ sns: "Apple" }}
        SNSIconP={{ Icon: FaApple }}
        SNSColorP="Apple"
      ></SNSLogin>
    </div>
  );
}

export default App;
