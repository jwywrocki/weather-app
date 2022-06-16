import React, { useState } from 'react';
import { getCurrentWeather, getForecastWeather } from './services/getWeather';
import GlassContainer from './components/GlassContainer';
import Search from './components/Search';

function App() {
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
        <div className="App">
            <GlassContainer currentWeather={currentWeather}>
                <Search
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    onKeyPress={searchLocation}
                />
            </GlassContainer>
            {console.log(forecastWeather)}
            {forecastWeather.cod === '200' ? (
                <GlassContainer currentWeather={forecastWeather.list[2]} />
            ) : null}
        </div>
    );
}

export default App;
