import './ListWeather.css';

interface DaysType {
  day: string;
  max: number;
  min: number;
  icon: string,
}

interface DayListType {
  days: DaysType[];
}

function ListWeather({ days }: DayListType) {
  return (
    <div className="section-sevenDays">
      {days.map((daily, i) => {
        const dailyMax = Math.round(daily.max);
        const dailyMin = Math.round(daily.min);
        return (
          <div className="sevenDays-item" key={i}>
            <div className="day">
              <span>{daily.day}</span>
            </div>
            <div className="img">
              <img
                src={`https://openweathermap.org/img/w/${daily.icon}.png`}
                alt=""
              />
            </div>
            <div className="temp">
              <span>
                {dailyMax}° / {dailyMin}°
              </span>
            </div>
          </div>
        );
      })}
    </div>
  )
}
export default ListWeather