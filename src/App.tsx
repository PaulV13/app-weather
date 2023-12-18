import Form from "./components/Form/Form";
import useForm from "./hooks/useForm";
import Weather from "./components/Weather/Weather";
import ListWeather from "./components/ListWeather/ListWeather";
import FooterWeather from "./components/FooterWeather/FooterWeather";
//styles
import "./App.css";

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

  return (
    <div className="App">
      <div className="container">
        <Form onSubmit={handleSubmit} />
        {error !== "" && <label className="error">
          <h2>{error}</h2>
        </label>}
        {loading ? (
          <div className="loading">
            <img src={loadingSvg} alt="" />
          </div>
        ) : temp !== 0 && (
          <>
            <Weather city={city} country={country} currentDate={currentDate}
              temp={temp} tempMax={tempMax} tempMin={tempMin} feelsLike={feelsLike} weatherIcon={weatherIcon} />
            <ListWeather days={days} />
            <FooterWeather humidity={humidity} iconHumidity={iconHumidity} sunriseHour={sunriseHour} iconSunrise={iconSunrise}
              sunsetHour={sunsetHour} iconSunset={iconSunset} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
