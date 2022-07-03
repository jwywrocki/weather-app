import React, { useState } from 'react';
import { getCurrentWeather, getForecastWeather } from '../services/getWeather';
import { CurrentWeatherComponent } from '../components/CurrentWeatherComponent';
import { ForecastWeatherComponent } from '../components/ForecastWeatherComponent';
import { DetailsComponent } from '../components/DetailsComponent';
import { Search } from '../components/Search';
import { ToggleSwitch } from '../components/ToggleSwitch/ToggleSwitch';

export const Dashboard = () => {
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
            {forecastWeather.list ? (
                <div className="weather-details">
                    <div className="weather-details__controls">
                        <ToggleSwitch label="Test" param_1="&deg;C" param_2="&deg;F"></ToggleSwitch>
                    </div>
                    <ForecastWeatherComponent location={location} weather={forecastWeather} />
                    <DetailsComponent weather={currentWeather} />
                </div>
            ) : null}
        </>
    );
};
