import { useEffect, useState } from "react";

export default function useBackground(weatherIcon:string) {
  const [backgroundClassName, setBackgroundClassName] = useState("");

  useEffect(() => {
    switch (weatherIcon) {
      case "01d":
      case "01n": {
        setBackgroundClassName(`cleanSky`);
        break;
      }
      case "02d":
      case "02n": {
        setBackgroundClassName(`fewClouds`);
        break;
      }
      case "03d":
      case "03n": {
        setBackgroundClassName(`scatteredCloud`);
        break;
      }
      case "04d":
      case "04n": {
        setBackgroundClassName(`brokenCloud`);
        break;
      }
      case "09d":
      case "09n": {
        setBackgroundClassName(`showerRain`);
        break;
      }
      case "10d":
      case "10n": {
        setBackgroundClassName(`rain`);
        break;
      }
      case "11d":
      case "11n": {
        setBackgroundClassName(`thunderstorm`);
        break;
      }
      case "13d":
      case "13n": {
        setBackgroundClassName(`snow`);
        break;
      }
      case "50d":
      case "50n": {
        setBackgroundClassName(`mist`);
        break;
      }
      default: {
        setBackgroundClassName(``);
        break;
      }
    }
  }, [weatherIcon]);
  return { backgroundClassName };
}
