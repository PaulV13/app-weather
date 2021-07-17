import { useState } from "react";
import { getData } from "../services/getData";
import { getSevenDailys } from "../services/getSevenDailys";
import getDate from "../services/getDate";
import getHour from "../services/getHour";
import getWeekendDays from "../services/getWeekendDays";

const useForm = () => {
  const [citySearch, setCitySearch] = useState("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { lat, lon, name, country, cod, message } = await getData(citySearch);
    const dataDaily = await getSevenDailys(lat, lon);

    if (cod === "404") {
      setError(message);
      setTemperature("");
      setWeatherIcon("");
      setLoading(false);
    } else {
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
  };

  return {
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
  };
};

export default useForm;
