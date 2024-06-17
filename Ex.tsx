// 오늘 할일 - 2024 06 14 -
// 토요일이면 파란색 일요일이면 빨간색

import { CSSProperties } from "react";
import { changeColorbyDay } from "./util/color";

const Ex = () => {
  const [year, month, date] = new Date()
    .toLocaleString()
    .replaceAll(".", "")
    .split(" ");

  const day = new Date().getDay();

  return (
    <div>
      오늘 할일
      <span style={{ color: changeColorbyDay(day) }}>
        {year}년 {month}월 {date}일
      </span>
    </div>
  );
};
export default Ex;

// const makeToday = () => {
//     const today = new Date();
//     const year = today.getFullYear();
//     const month = today.getMonth();
//     const date = today.getDate();
//     const day = today.getDay();

//     const todo = `${year}, ${month}, ${date}`};

// const Todo = ({color="black"}:makeTodayProps)=>{
// const style: CSSProperties = {
//     color,
// }

// return (
//     <>
//         <div style={style}>{makeToday()}</div>
//     </>
// )
// }
