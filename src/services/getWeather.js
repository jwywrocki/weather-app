import axios from 'axios';

const api = {
    key: process.env.REACT_APP_WEATHER_API_KEY,
    endpointCurrentWeather:
        'https://api.openweathermap.org/data/2.5/weather?q=',
};

export const getCurrentWeather = async (location) => {
    try {
        const currentWeather = await axios.get(
            `${api.endpointCurrentWeather}${location}&appid=${api.key}&units=metric`
        );
        return currentWeather;
    } catch (error) {
        throw error;
    }
};
