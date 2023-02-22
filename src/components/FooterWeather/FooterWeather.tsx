import "./FooterWeather.css"

interface FooterWeatherType {
  humidity: number;
  iconHumidity: string;
  sunriseHour: string;
  iconSunrise: string;
  sunsetHour: string;
  iconSunset: string;
}

function FooterWeather({ humidity, iconHumidity, sunriseHour, iconSunrise, sunsetHour, iconSunset }: FooterWeatherType) {
  return (
    <div className="footer-section">
      <div className="footer-section-item humidity">
        <img className="icon-img" src={iconHumidity} alt="" />
        <p>Humidity</p>
        <span>{humidity}%</span>
      </div>
      <div className="footer-section-item sunrise">
        <img className="icon-img" src={iconSunrise} alt="" />
        <p>Sunrise</p>
        <span>{sunriseHour}</span>
      </div>
      <div className="footer-section-item sunset">
        <img className="icon-img" src={iconSunset} alt="" />
        <p>Sunset</p>
        <span>{sunsetHour}</span>
      </div>
    </div>
  )
}
export default FooterWeather;