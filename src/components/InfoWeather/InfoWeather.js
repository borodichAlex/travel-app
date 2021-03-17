import ReactWeather from "react-open-weather-widget";
import "react-open-weather-widget/lib/css/ReactWeather.css";
import "./InfoWeather.scss";
import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export default function InfoWeather(props) {
  const { height, width } = useWindowDimensions();
  const forecast = width > 1300 ? "5days" : "today";
  return (
    <ReactWeather
      forecast={forecast}
      apikey="f869af09e5de6292cb06fb3153a97fac"
      type="city"
      city={props.city}
      lang={props.lang}
    />
  );
}
