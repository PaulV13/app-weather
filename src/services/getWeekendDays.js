//date-fns
import format from "date-fns/format";

const getWeekendDays = (dailys) => {
  const dias = dailys.map((dt, index) => {
    const date = new Date(dt.dt * 1000);
    const dia = format(date, "EEEE");
    if (index === 0) {
      const today = {
        day: "Today",
        max: dt.temp.max,
        min: dt.temp.min,
        icon: dt.weather[0].icon,
      };
      return today;
    } else {
      const dailyCustom = {
        day: dia,
        max: dt.temp.max,
        min: dt.temp.min,
        icon: dt.weather[0].icon,
      };
      return dailyCustom;
    }
  });
  return dias;
};

export default getWeekendDays;
