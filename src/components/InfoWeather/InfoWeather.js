import ReactWeather from "react-open-weather-widget";
import "react-open-weather-widget/lib/css/ReactWeather.css";
import useWindowDimensions from '../../hooks/useWindowDimensions';
import './InfoWeather.css';

export default function InfoWeather(props) {
  const { width } = useWindowDimensions();
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
