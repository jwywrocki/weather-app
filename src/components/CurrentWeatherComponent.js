import React from 'react';
import { eIcon } from '../constants/global';

export default function CurrentWeatherSection(props) {
    return (
        <div className="currentWeather">
            {props.children}
            <div className=" currentWeather__container">
                {props.weather.name ? (
                    <div className="currentWeather__city">
                        {props.weather.name}, {props.weather.sys.country}
                    </div>
                ) : null}
                {props.weather.main ? (
                    <div className="currentWeather__temp">
                        <span>{Math.round(props.weather.main.temp)}&deg;C</span>
                    </div>
                ) : null}
                {props.weather.weather ? (
                    <div className="currentWeather__icon">
                        <img
                            src={`${eIcon}${props.weather.weather[0].icon}@4x.png`}
                            alt="weather icon"
                        ></img>
                    </div>
                ) : null}
            </div>
            <div className="currentWeather__container currentWeather__container--details">
                {props.weather.main ? (
                    <div className="currentWeather__pressure">
                        <i className="fa-solid fa-circle-down"></i>
                        <span>
                            {props.weather.main.pressure}
                            hPa
                        </span>
                    </div>
                ) : null}
                {props.weather.main ? (
                    <div className="currentWeather__humidity">
                        <i className="fa-solid fa-droplet"></i>
                        <span>{props.weather.main.humidity}&#x25;</span>
                    </div>
                ) : null}
                {props.weather.wind ? (
                    <div className="currentWeather__wind">
                        <i className="fa-solid fa-wind"></i>
                        <span>
                            {props.weather.wind.speed}
                            KM/H
                        </span>
                    </div>
                ) : null}
            </div>
        </div>
    );
}
