import React, { useState } from 'react';
import { getCurrentWeather, getForecastWeather } from './services/getWeather';
import SearchAndDataContainer from './components/SearchAndDataContainer';

function App() {
    const [currentWeather, setCurrentWeather] = useState({});
    const [forecastWeather, setForecastWeather] = useState({});
    const [location, setLocation] = useState('');

    const api = {
        icon_e: 'https://openweathermap.org/img/wn/',
    };

    const getWeather = async () => {
        try {
            const current = await getCurrentWeather(location);
            const forecast = await getForecastWeather(location);
            setCurrentWeather(current.data);
            setForecastWeather(forecast.data);
            const list = forecast.data.list;
            list.map((day) => {
                console.log(day);
            });
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
            <SearchAndDataContainer
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                onKeyPress={searchLocation}
                currentWeather={currentWeather}
                weatherIcon={api.icon_e}
            />
            <div className="glass">
                <div className="data__container">
                    Ther will be something more soon :)
                </div>
            </div>
        </div>
    );
}

export default App;
