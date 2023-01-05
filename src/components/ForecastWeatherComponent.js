import React from 'react';
import { eIcon } from '../constants/global';
import { convertToFahrenheit } from '../helpers/tempConverter';



export const ForecastWeatherComponent = (props) => {
    return (
        <>
            {props.weather.list ? (
                <div className="forecastWeather__container">
                        {props.weather.list.map((value, index) => (
                            <div key={index} className="forecastWeather__item">
                                <div className="forecastWeather__date">
                                    {new Date(value.dt * 1000).toLocaleTimeString('en-US', {
                                        hour: 'numeric'
                                    }).toUpperCase()}
                                </div>
                                <div className="forecastWeather__icon">
                                    <img
                                        src={`${eIcon}${value.weather[0].icon}@2x.png`}
                                        alt="weather icon"
                                    ></img>
                                </div>
                                <div className="forecastWeather__temp">
                                    {props.toggle_unit ? (
                                        <span>
                                            {Math.round(convertToFahrenheit(value.main.temp))}
                                            &deg;F
                                        </span>
                                    ) : (
                                        <span>{Math.round(value.main.temp)}&deg;C</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
            ) : null}
        </>
    );
};
