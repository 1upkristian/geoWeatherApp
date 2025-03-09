import axios from "axios";
import { useState, useContext } from "react";
import "./style.css";
import GetLocate from "./geoLocate";
import GetRestData from "./getWeekData";

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);
  const [input, setInput] = useState("");
  const [clicked, setClicked] = useState(false);

  const getWeather = () => {
      const apiKey = "API_KEY";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then((res) => {
      setWeather(res.data);
      setInput("");
    });
  };

  return (
    <div className="phone-mockup">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          setClicked(true);
          getWeather();
        }}
      >
        <input
          id="searchInput"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <i className="fa fa-search"></i>
      </form>

      <div>
        <div id="weatherIcon">
          {weather?.main?.humidity != null ? (
            <WeatherIcon weather={weather} />
          ) : null}
        </div>
        <div className="weather-data">
          <div className="allTemp">
            <h2 id="weather-temp">
              {weather?.main?.temp != null
                ? `${Math.floor(weather.main.temp)}°`
                : null}
            </h2>
          </div>
        </div>
        <div className="extraData">
          <h2 id="weather-wind">
            {weather?.wind?.speed != null
              ? `  ᯓ  ${weather.wind.speed} km/h`
              : null}
          </h2>

          <h2 id="weather-humidity">
            <img src="./src/images/water21.png" id="water" />{" "}
            {weather?.main?.humidity != null
              ? `${weather.main.humidity}%`
              : null}
          </h2>
        </div>
        <span>
          <br />
        </span>
        <div className="min-max">
          <h4 id="MinMaxTemp">
            <img src="./src/images/arrowdown.png" alt="" id="adown" />
            {weather?.main?.temp_min != null
              ? `${Math.floor(weather.main.temp_min)}°`
              : null}{" "}
            <img src="./src/images/arrowup.png" alt="" id="aup" />
            {weather?.main?.temp_max != null
              ? `${Math.floor(weather.main.temp_max)}°`
              : null}
          </h4>
        </div>
        <div className="rest-days">
          <GetRestData
            input={input}
            clicked={clicked}
            setClicked={setClicked}
          />
        </div>
        <GetLocate input={input} clicked={clicked} setClicked={setClicked} />
      </div>
    </div>
  );
};

const WeatherIcon = ({ weather }) => {
  const getWeatherIcon = () => {
    const icon = weather?.weather?.[0]?.main;
    let iconSrc = "";

    switch (icon) {
      case "Clouds":
        iconSrc = "./src/images/Clouds.png";
        break;
      case "Rain":
        iconSrc = "./src/images/Rain.png";
        break;
      case "Snow":
        iconSrc = "./src/images/Snow.png";
        break;
      case "Sunny":
        iconSrc = "./src/images/Sunny.png";
        break;
      case "Thunder":
        iconSrc = "./src/images/Thunder.png";
        break;
      default:
        iconSrc = "";
    }
    return iconSrc;
  };

  return (
    <div>
      <img src={getWeatherIcon()} />
    </div>
  );
};

export default WeatherApp;

