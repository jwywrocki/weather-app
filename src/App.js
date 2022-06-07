import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [currWeather, setCurrWeather] = useState({});
    const [foreWeather, setForeWeather] = useState({});
    const [location, setLocation] = useState('');

    const api = {
        key: process.env.REACT_APP_WEATHER_API_KEY,
        endpointCurrentWeather:
            'https://api.openweathermap.org/data/2.5/weather?q=',
        endpointForecastWeather: `https://api.openweathermap.org/data/2.5/forecast?q=`,
        icon_e: 'http://openweathermap.org/img/w/',
    };
    const urlCurrWeather = `${api.endpointCurrentWeather}${location}&appid=${api.key}&units=metric`;
    const urlForeWeather = `${api.endpointForecastWeather}${location}&appid=${api.key}&units=metric`;

    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(urlCurrWeather).then((currResp) => {
                setCurrWeather(currResp.data);
                console.log('Current Weather: ', currResp.data);
            });
            axios.get(urlForeWeather).then((foreResp) => {
                setForeWeather(foreResp.data);
                console.log('Forecast Weather: ', foreResp.data);
            });
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
                    {currWeather.name ? (
                        <div className="loc horizontal">
                            <div className="city">
                                {currWeather.name}, {currWeather.sys.country}
                            </div>
                            {currWeather.weather ? (
                                <div className="icon">
                                    <img
                                        src={`${api.icon_e}${currWeather.weather[0].icon}.png`}
                                        alt="weather icon"
                                    ></img>
                                </div>
                            ) : null}
                        </div>
                    ) : null}
                    {currWeather.dt ? (
                        <div className="data">
                            {new Date(currWeather.dt * 1000).toLocaleDateString(
                                'en-US',
                                {
                                    weekday: 'long',
                                    month: 'long',
                                    day: 'numeric',
                                    year: 'numeric',
                                }
                            )}
                        </div>
                    ) : null}
                    {currWeather.main ? (
                        <div className="data temp">
                            <span>Temperature: {currWeather.main.temp}°C</span>
                        </div>
                    ) : null}
                    {currWeather.main ? (
                        <div className="data pressure">
                            <span>
                                Pressure: {currWeather.main.pressure}hPa
                            </span>
                        </div>
                    ) : null}
                    {currWeather.main ? (
                        <div className="data humidity">
                            <span>Humidity: {currWeather.main.humidity}%</span>
                        </div>
                    ) : null}
                    {currWeather.wind ? (
                        <div className="data wind">
                            <span>
                                Wind speed: {currWeather.wind.speed}KM/H
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
