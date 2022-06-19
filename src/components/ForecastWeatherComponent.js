import React from 'react';
import { eIcon } from '../constants/global';

export const ForecastWeatherComponent = (props) => {
    let date = new Date(props.weather.dt * 1000).toLocaleDateString('en-GB', {
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    });
    return (
        <div className="forecastWeather__card">
            {props.weather.dt ? <div className="forecastWeather__date">{date}</div> : null}
            {props.weather.weather ? (
                <div className="forecastWeather__icon">
                    <img
                        src={`${eIcon}${props.weather.weather[0].icon}@2x.png`}
                        alt="weather icon"
                    ></img>
                </div>
            ) : null}
            {props.weather.main ? (
                <div className="forecastWeather__temp">
                    <span>{Math.round(props.weather.main.temp)}&deg;C</span>
                </div>
            ) : null}
        </div>
    );
};
