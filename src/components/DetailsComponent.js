import React from 'react';
import { windDirection } from '../helpers/windDirection';

export const DetailsComponent = (props) => {
    return (
        <>
            {props.weather.cod === 200 ? (
                <div className="weather-details__container">
                    <div className="weather-details__temp">
                        <i className="fa-solid fa-temperature-half"></i>
                        <div className="weather-details__feels-like">
                            <span>Feels like </span>
                            <span>{props.weather.main.feels_like.toFixed(1)}&deg;C</span>
                        </div>
                        <div className="weather-details__max">
                            <span>Max </span>
                            <span>{props.weather.main.temp_max.toFixed(1)}&deg;C</span>
                        </div>
                        <div className="weather-details__min">
                            <span>Min </span>
                            <span>{props.weather.main.temp_min.toFixed(1)}&deg;C</span>
                        </div>
                    </div>
                    <div className="weather-details__sun">
                        <i className="fa-solid fa-sun"></i>
                        <div className="weather-details__sunrise">
                            <span>Sunrise </span>
                            <span>
                                {new Date(props.weather.sys.sunrise * 1000).toLocaleString(
                                    'en-GB',
                                    {
                                        hour: 'numeric',
                                        minute: 'numeric',
                                    }
                                )}
                            </span>
                        </div>
                        <div className="weather-details__sunset">
                            <span>Sunset </span>
                            <span>
                                {new Date(props.weather.sys.sunset * 1000).toLocaleString('en-GB', {
                                    hour: 'numeric',
                                    minute: 'numeric',
                                })}
                            </span>
                        </div>
                    </div>
                    <div className="weather-details__wind">
                        <i className="fa-solid fa-wind"></i>
                        <div className="weather-details__wind-speed">
                            <span>Speed </span>
                            <span>{props.weather.wind.speed}KM/H</span>
                        </div>
                        <div className="weather-details__wind-direct">
                            <span>Direction </span>
                            <span>{windDirection(props.weather.wind.deg)}</span>
                        </div>
                        {props.weather.wind.gust ? (
                            <div className="weather-details__wind-gust">
                                <span>Gust </span>
                                <span>{props.weather.wind.gust}KM/H</span>
                            </div>
                        ) : null}
                    </div>
                    <div className="weather-details__other">
                        <i className="fa-solid fa-cloud"></i>
                        <div className="weather-details__visibility">
                            <span>Visibility </span>
                            <span>{props.weather.visibility / 1000}KM</span>
                        </div>
                        <div className="weather-details__clouds">
                            <span>Clouds </span>
                            <span>{props.weather.clouds.all}%</span>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
};
