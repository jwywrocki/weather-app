import React from 'react';
import { eIcon } from '../constants/global';

export default function ForecastWeatherSection(props) {
    return (
        <div className="forecastWeather__card">
            {props.weather.name ? (
                <div className="forecastWeather__city">
                    {props.weather.name}, {props.weather.sys.country}
                </div>
            ) : null}
            {props.weather.weather ? (
                <div className="forecastWeather__icon">
                    <img
                        src={`${eIcon}${props.weather.weather[0].icon}.png`}
                        alt="weather icon"
                    ></img>
                </div>
            ) : null}
            {props.weather.dt ? (
                <div className="forecastWeather__date">
                    {new Date(props.weather.dt * 1000).toLocaleDateString('en-GB', {
                        weekday: 'long',
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                        hour: 'numeric',
                    })}
                </div>
            ) : null}
            {props.weather.main ? (
                <div className="forecastWeather__temp">
                    <span>{Math.round(props.weather.main.temp)}&#x2103;</span>
                </div>
            ) : null}
            {props.weather.main ? (
                <div className="forecastWeather__pressure">
                    <span>{props.weather.main.pressure}hPa</span>
                </div>
            ) : null}
            {props.weather.main ? (
                <div className="forecastWeather__humidity">
                    <span>{props.weather.main.humidity}&#x25;</span>
                </div>
            ) : null}
            {props.weather.wind ? (
                <div className="forecastWeather__wind">
                    <span>{props.weather.wind.speed}KM/H</span>
                </div>
            ) : null}
        </div>
    );
}
