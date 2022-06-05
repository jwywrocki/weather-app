import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');

    const api = {
        key: '1a154a37d24dfd3c1156aee65de4ab61',
        base: 'https://api.openweathermap.org/data/2.5/',
    };
    const url = `${api.base}weather?q=${location}&appid=${api.key}&units=metric`;

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
            <div className="search">
                <input
                    type="text"
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    onKeyPress={searchLocation}
                    placeholder="Enter location"
                    className="search"
                ></input>
            </div>
            <div className="container">
                <div className="top">
                    <div className="loc">
                        <h1>{data.name}</h1>
                    </div>
                    <div className="temp">
                        Temperature:
                        {data.main ? <p>{data.main.temp}°C</p> : null}
                    </div>
                    <div className="desc">
                        Desc:
                        {data.weather ? <p>{data.weather[0].main}</p> : null}
                    </div>
                </div>
                <div className="bottom">
                    <div className="pressure">
                        Pressure:
                        {data.main ? <p>{data.main.pressure}hPa</p> : null}
                    </div>
                    <div className="humidity">
                        Humidity:
                        {data.main ? <p>{data.main.humidity}%</p> : null}
                    </div>
                    <div className="wind">
                        Wind speed:
                        {data.wind ? <p>{data.wind.speed}KM/H</p> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
