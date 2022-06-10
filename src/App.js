import React, { useState } from 'react';
import { getCurrentWeather } from './services/getWeather';

function App() {
    const [currentWeather, setCurrentWeather] = useState({});
    // const [foreWeather, setForeWeather] = useState({});
    const [location, setLocation] = useState('');

    const api = {
        key: process.env.REACT_APP_WEATHER_API_KEY,
        endpointCurrentWeather:
            'https://api.openweathermap.org/data/2.5/weather?q=',
        endpointForecastWeather: `https://api.openweathermap.org/data/2.5/forecast?q=`,
        icon_e: 'http://openweathermap.org/img/w/',
    };
    // const urlCurrWeather = `${api.endpointCurrentWeather}${location}&appid=${api.key}&units=metric`;
    // const urlForeWeather = `${api.endpointForecastWeather}${location}&appid=${api.key}&units=metric`;

    const getWeather = async () => {
        try {
            const weather = await getCurrentWeather(location);
            setCurrentWeather(weather.data);
        } catch (error) {
            console.log(error.message);
        }
    };
    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            getWeather();
            setLocation('');
        }
    };
    return (
        <div className="App">
            <div className="glass">
                <div className="search__container">
                    <input
                        type="text"
                        value={location}
                        onChange={(event) => setLocation(event.target.value)}
                        onKeyPress={searchLocation}
                        placeholder="Enter location"
                        className="search"
                    ></input>
                </div>
                <div className="data__container">
                    {currentWeather.name ? (
                        <div className="loc horizontal">
                            <div className="city">
                                {currentWeather.name},
                                {currentWeather.sys.country}
                            </div>
                            {currentWeather.weather ? (
                                <div className="icon">
                                    <img
                                        src={`${api.icon_e}${currentWeather.weather[0].icon}.png`}
                                        alt="weather icon"
                                    ></img>
                                </div>
                            ) : null}
                        </div>
                    ) : null}
                    {currentWeather.dt ? (
                        <div className="data">
                            {new Date(
                                currentWeather.dt * 1000
                            ).toLocaleDateString('en-US', {
                                weekday: 'long',
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric',
                            })}
                        </div>
                    ) : null}
                    {currentWeather.main ? (
                        <div className="data temp">
                            <span>
                                Temperature: {currentWeather.main.temp}°C
                            </span>
                        </div>
                    ) : null}
                    {currentWeather.main ? (
                        <div className="data pressure">
                            <span>
                                Pressure: {currentWeather.main.pressure}hPa
                            </span>
                        </div>
                    ) : null}
                    {currentWeather.main ? (
                        <div className="data humidity">
                            <span>
                                Humidity: {currentWeather.main.humidity}%
                            </span>
                        </div>
                    ) : null}
                    {currentWeather.wind ? (
                        <div className="data wind">
                            <span>
                                Wind speed: {currentWeather.wind.speed}KM/H
                            </span>
                        </div>
                    ) : null}
                </div>
            </div>
            <div className="glass">
                <div className="data__container">
                    Ther will be something more soon :)
                </div>
            </div>
        </div>
    );
}

export default App;
