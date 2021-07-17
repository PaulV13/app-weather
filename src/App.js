import { useState, useCallback } from "react";
import Form from "./components/Form/Form";
import useBackground from "./hooks/useBackground";
import getData from "./services/getData";
import getSevenDailys from "./services/getSevenDailys";
import getDate from "./services/getDate";
import getHour from "./services/getHour";
import getWeekendDays from "./services/getWeekendDays";

//styles
import "./styles/App.css";

//imageIcon
import iconHumidity from "./assets/humidity.png";
import iconSunrise from "./assets/sunrise.png";
import iconSunset from "./assets/sunset.png";
import loadingSvg from "./assets/loading.svg";

function App() {
  const [temp, setTemperature] = useState(0);
  const [tempMin, setTempMin] = useState(0);
  const [tempMax, setTempMax] = useState(0);
  const [feelsLike, setFeelsLike] = useState(0);
  const [weatherIcon, setWeatherIcon] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [sunsetHour, setSunset] = useState("");
  const [sunriseHour, setSunrise] = useState("");
  const [currentDate, setDate] = useState("");
  const [days, setDays] = useState([]);
  const [error, setError] = useState("");
  const [humidity, setHumidity] = useState(0);
  const [loading, setLoading] = useState(false);
  const [, setDisabled] = useState(true);

  const handleSubmit = useCallback(async ({ citySearch, setCitySearch }) => {
    setLoading(true);

    const { lat, lon, name, country, cod, message } = await getData(citySearch);

    if (cod === "404") {
      setError(message);
      setTemperature("");
      setWeatherIcon("");
      setLoading(false);
    } else {
      const dataDaily = await getSevenDailys(lat, lon);
      setError("");
      setCity(name);
      setCountry(country);
      setWeatherIcon(dataDaily.current.weather[0].icon);
      setFeelsLike(Math.round(dataDaily.current.feels_like));
      setTempMin(Math.round(dataDaily.daily[0].temp.min));
      setTempMax(Math.round(dataDaily.daily[0].temp.max));
      setTemperature(Math.round(dataDaily.daily[0].temp.day));
      setSunrise(getHour(dataDaily.current.sunrise, dataDaily.timezone));
      setSunset(getHour(dataDaily.current.sunset, dataDaily.timezone));
      setHumidity(dataDaily.current.humidity);
      setDate(getDate(dataDaily.current.dt, dataDaily.timezone));
      setDays(getWeekendDays(dataDaily.daily));
      setDisabled(true);
      setLoading(false);
      setCitySearch("");
    }
  }, []);

  const { backgroundClassName } = useBackground({ weatherIcon });

  return (
    <div className="App">
      <div className="container">
        <Form onSubmit={handleSubmit} />
        {loading ? (
          <div className="loading">
            <img src={loadingSvg} alt="" />
          </div>
        ) : temp ? (
          <>
            <div className={`section-title background ${backgroundClassName}`}>
              <div className="title">
                <h2>
                  {city}, {country}
                </h2>
                <h4>{currentDate}</h4>
              </div>
              <div className="temperature">
                <div className="temp">
                  <img
                    className="temp-img"
                    src={`https://openweathermap.org/img/w/${weatherIcon}.png`}
                    alt=""
                  />
                  <p>{temp}°</p>
                </div>
                <div className="feels_like">
                  <div className="tempMaxMin">
                    <p className="tempMax">{tempMax}°</p>
                    <span>/</span>
                    <p className="tempMin">{tempMin}°</p>
                  </div>
                  <div className="description">
                    <p>Feels like {feelsLike}°</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sevenDays">
              {days.map((daily, i) => {
                const dailyMax = Math.round(daily.max);
                const dailyMin = Math.round(daily.min);
                return (
                  <div className="sevenDays-item" key={i}>
                    <div className="sevenDay-day">
                      <span>{daily.day}</span>
                    </div>
                    <div className="sevenDay-img">
                      <img
                        className="icon-img"
                        src={`https://openweathermap.org/img/w/${daily.icon}.png`}
                        alt=""
                      />
                    </div>
                    <div className="sevenDay-temp">
                      <span>
                        {dailyMax}° / {dailyMin}°
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="humidity-sunset-sunrise">
              <div className="humidity-sunset-sunrise-item">
                <img className="icon-img" src={iconHumidity} alt="" />
                <p>Humidity</p>
                <span>{humidity}%</span>
              </div>
              <div className="humidity-sunset-sunrise-item">
                <img className="icon-img" src={iconSunrise} alt="" />
                <p>Sunrise</p>
                <span>{sunriseHour}</span>
              </div>
              <div className="humidity-sunset-sunrise-item">
                <img className="icon-img" src={iconSunset} alt="" />
                <p>Sunset</p>
                <span>{sunsetHour}</span>
              </div>
            </div>
          </>
        ) : (
          <div className="error">
            <h2>{error}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
