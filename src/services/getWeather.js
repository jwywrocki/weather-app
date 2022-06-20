import axios from 'axios';
import { eCurrent, eForecast } from '../constants/global';
const api = {
    key: process.env.REACT_APP_WEATHER_API_KEY,
};

export const getCurrentWeather = (location, setWeather) => {
    axios
        .get(`${eCurrent}${location}&appid=${api.key}&units=metric`)
        .then((response) => {
            setWeather(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            console.log('Fetched current weather');
        });
};
export const getForecastWeather = (location, setWeather) => {
    axios
        .get(`${eForecast}${location}&appid=${api.key}&units=metric`)
        .then((response) => {
            setWeather(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            console.log('Fetched forecast weather');
        });
};
