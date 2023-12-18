import useBackground from "../../hooks/useBackground";

import './Weather.css'

interface WeatherType {
  city: string;
  country: string;
  currentDate: string;
  temp: number;
  tempMax: number;
  tempMin: number;
  feelsLike: number;
  weatherIcon: string;
}

function Weather({ city, country, currentDate, temp, tempMax, tempMin, feelsLike, weatherIcon }: WeatherType) {
  const { backgroundClassName } = useBackground(weatherIcon);
  return (
    <div className={`weather-section background ${backgroundClassName}`}>
      <div className="title">
        <h2>
          {city}, {country}
        </h2>
        <h4>{currentDate}</h4>
      </div>
      <div className="section-temperature">
        <div className="weather-temp">
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
  )
}
export default Weather