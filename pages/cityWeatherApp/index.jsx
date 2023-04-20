import { useState } from "react";
import axios from "axios";

import SearchInput from "@/components/search/searchInput";
import MainBtn from "@/components/search/mainBtn";
import Styles from './mainContainer.module.css'
import WeatherInfo from "@/components/weather-Info/weatherInfo";

const CityWeather = () => {
  const [cityName, setCityName] = useState("");
  const [cityWeather, setCityWeather] = useState("");

  const getWeatherByCityName = async () => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
      );
      setCityWeather(response.data);
      console.log(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.searchContainer}>
      
        <SearchInput label='City name!' change={(e) => setCityName(e.target.value)}> </SearchInput>
        <MainBtn click={getWeatherByCityName} label='Search'></MainBtn>
      </div>
      <div className={Styles.infoContainer}>
        {cityWeather.main&&<WeatherInfo  temp={cityWeather.main.temp} city={cityWeather.name} sky={cityWeather.weather[0].main}
        humidity={cityWeather.main.humidity} feels={cityWeather.main.feels_like} pressure={cityWeather.main.pressure}/>}
      </div>
    
    </div>
  );
};

export default CityWeather;