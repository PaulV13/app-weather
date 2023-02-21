import Form from "./components/Form/Form";
import useBackground from "./hooks/useBackground";
import useForm from "./hooks/useForm";

//styles
import "./styles/App.css";

//imageIcon
import iconHumidity from "./assets/humidity.png";
import iconSunrise from "./assets/sunrise.png";
import iconSunset from "./assets/sunset.png";
import loadingSvg from "./assets/loading.svg";

function App() {
  const {
    temp,
    tempMin,
    tempMax,
    feelsLike,
    weatherIcon,
    city,
    country,
    sunsetHour,
    sunriseHour,
    currentDate,
    days,
    error,
    humidity,
    loading,
    handleSubmit,
  } = useForm()
  const { backgroundClassName } = useBackground(weatherIcon);

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
              <div className="humidity-sunset-sunrise-item humidity">
                <img className="icon-img" src={iconHumidity} alt="" />
                <p>Humidity</p>
                <span>{humidity}%</span>
              </div>
              <div className="humidity-sunset-sunrise-item sunrise">
                <img className="icon-img" src={iconSunrise} alt="" />
                <p>Sunrise</p>
                <span>{sunriseHour}</span>
              </div>
              <div className="humidity-sunset-sunrise-item sunset">
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
