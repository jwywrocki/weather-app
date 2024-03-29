import React from 'react';
import { eIcon } from '../constants/global';
import { convertToFahrenheit } from '../helpers/tempConverter';

export const CurrentWeatherComponent = (props) => {
    return (
        <div className="currentWeather">
            {props.children}
            {props.weather.cod === 200 ? (
                <div className=" currentWeather__container">
                    <div className="currentWeather__city">
                        {props.weather.name}, {props.weather.sys.country}
                    </div>
                    <div className="currentWeather__temp">
                        {props.toggle_unit ? (
                            <span>
                                {Math.round(convertToFahrenheit(props.weather.main.temp))}&deg;F
                            </span>
                        ) : (
                            <span>{Math.round(props.weather.main.temp)}&deg;C</span>
                        )}
                    </div>
                    <div className="currentWeather__icon">
                        <img
                            src={`${eIcon}${props.weather.weather[0].icon}@4x.png`}
                            alt="weather icon"
                        ></img>
                    </div>

                    <div className="currentWeather__details">
                        <div className="currentWeather__pressure">
                            <i className="fa-solid fa-circle-down"></i>
                            <span>
                                {props.weather.main.pressure}
                                hPa
                            </span>
                        </div>
                        <div className="currentWeather__humidity">
                            <i className="fa-solid fa-droplet"></i>
                            <span>{props.weather.main.humidity}&#x25;</span>
                        </div>
                        <div className="currentWeather__wind">
                            <i className="fa-solid fa-wind"></i>
                            <span>
                                {props.weather.wind.speed}
                                KM/H
                            </span>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};
