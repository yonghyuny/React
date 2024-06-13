import Button from "./Button";
import BtnGruop from "./BtnGroup";
import Nav from "./Nav";
import Header from "./Header";
import MainImg from "./mainImg";
import CategoryButton, { CategoryButtonProps } from "./CategoryButton";
import { categoryBtn } from "./constants/category";

import BrandBtn from "./BrandBtn";
import { brandBtn } from "./constants/brandBtn";

function App() {
  return (
    <div className="App">
      {categoryBtn.map((v) => (
        <CategoryButton {...v} />
      ))}
      <Nav></Nav>
      <BtnGruop></BtnGruop>
      <MainImg></MainImg>
      {brandBtn.map((v) => (
        <BrandBtn {...v} />
      ))}
    </div>
  );
}

export default App;
