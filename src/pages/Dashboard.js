import React, { useState } from 'react';
import { getCurrentWeather, getForecastWeather } from '../services/getWeather';
import CurrentWeatherComponent from '../components/CurrentWeatherComponent';
import ForecastWeatherComponent from '../components/ForecastWeatherComponent';
import Search from '../components/Search';

export default function Dashboard() {
    const [currentWeather, setCurrentWeather] = useState({});
    const [forecastWeather, setForecastWeather] = useState({});
    const [location, setLocation] = useState('');

    const getWeather = () => {
        getCurrentWeather(location, setCurrentWeather);
        getForecastWeather(location, setForecastWeather);
    };
    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            getWeather();
            setLocation('');
        }
    };
    return (
        <>
            <CurrentWeatherComponent weather={currentWeather}>
                <Search
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    onKeyPress={searchLocation}
                />
            </CurrentWeatherComponent>
            {console.log(currentWeather)}
            {forecastWeather.cod === '200' ? (
                <div className="forecastWeather">
                    {forecastWeather.list.map((value, index) => (
                        <ForecastWeatherComponent key={index} weather={value} />
                    ))}
                </div>
            ) : null}
        </>
    );
}
