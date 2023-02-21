//date-fns
import format from "date-fns/format";

interface WeatherType {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface DailyType {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: {
    min: number;
    max: number;
  };
  feels_like: number;
  pressure: number;
  humidity: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: WeatherType[]
}

const getWeekendDays = (dailys: DailyType[]) => {
  const dias = dailys.map((daily, index) => {
    const date = new Date(daily.dt * 1000);
    const dia = format(date, "EEEE");
    if (index === 0) {
      const today = {
        day: "Today",
        max: daily.temp.max,
        min: daily.temp.min,
        icon: daily.weather[0].icon,
      };
      return today;
    } else {
      const dailyCustom = {
        day: dia,
        max: daily.temp.max,
        min: daily.temp.min,
        icon: daily.weather[0].icon,
      };
      return dailyCustom;
    }
  });
  return dias;
};

export default getWeekendDays;
