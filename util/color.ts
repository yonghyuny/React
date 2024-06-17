type HolidayColor = "blue" | "red";
type WeekdayColor = "black";

export const changeColorbyDay = (day: number): HolidayColor | WeekdayColor => {
  // return day == 0 ? "red" : day == 6 ? "blue" : "black";
  const dayColorMap: { [key: number]: HolidayColor } = {
    0: "red",
    6: "blue",
  };
  return dayColorMap[day] || "black";
};
