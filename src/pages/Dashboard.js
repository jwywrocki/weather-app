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
    const [unit, setUnit] = useState(false);

    const handleChange = () => {
        setUnit(!unit);
    };

    const getWeather = () => {
        getCurrentWeather(location, setCurrentWeather);
        getForecastWeather(location, setForecastWeather);
    };
    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            getWeather();
            setLocation('');
            event.target.blur();
        }
    };
    return (
        <div className="dashboard">
            <CurrentWeatherComponent weather={currentWeather} toggle_unit={unit}>
                <Search
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    onKeyPress={searchLocation}
                />
            </CurrentWeatherComponent>
            {forecastWeather.list ? (
                <div className="weather-details">
                    <div className="weather-details__controls">
                        <ToggleSwitch
                            label="toggle_units"
                            param_1="&deg;C"
                            param_2="&deg;F"
                            toggle_unit={unit}
                            onChange={handleChange}
                        ></ToggleSwitch>
                    </div>
                    <ForecastWeatherComponent
                        location={location}
                        weather={forecastWeather}
                        toggle_unit={unit}
                    />
                    <DetailsComponent weather={currentWeather} toggle_unit={unit} />
                </div>
            ) : null}
        </div>
    );
};
