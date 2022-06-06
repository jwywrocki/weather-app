import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');

    const api = {
        key: '1a154a37d24dfd3c1156aee65de4ab61',
        endpoint: 'https://api.openweathermap.org/data/2.5/weather?q=',
    };
    const url = `${api.endpoint}${location}&appid=${api.key}&units=metric`;

    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data);
                console.log(response.data);
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
                    {data.name ? (
                        <div className="loc horizontal">
                            <div className="city">
                                {data.name}, {data.sys.country}
                            </div>
                            {data.weather ? (
                                <div className="icon">
                                    <img
                                        src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                                        alt="weather icon"
                                    ></img>
                                </div>
                            ) : null}
                        </div>
                    ) : null}
                    {data.dt ? (
                        <div className="data">
                            {new Date(data.dt * 1000).toLocaleDateString(
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
                    {data.main ? (
                        <div className="data temp">
                            <span>Temperature: {data.main.temp}°C</span>
                        </div>
                    ) : null}
                    {data.main ? (
                        <div className="data pressure">
                            <span>Pressure: {data.main.pressure}hPa</span>
                        </div>
                    ) : null}
                    {data.main ? (
                        <div className="data humidity">
                            <span>Humidity: {data.main.humidity}%</span>
                        </div>
                    ) : null}
                    {data.wind ? (
                        <div className="data wind">
                            <span>Wind speed: {data.wind.speed}KM/H</span>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default App;
