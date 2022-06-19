import React from 'react';

export const DetailsComponent = (props) => {
    return (
        <div className="weather-details__container">
            {props.weather.main ? (
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
            ) : null}
            {props.weather.sys ? (
                <div className="weather-details__sun">
                    <i className="fa-solid fa-sun"></i>
                    <div className="weather-details__sunrise">
                        <span>Sunrise </span>
                        <span>
                            {new Date(props.weather.sys.sunrise * 1000).toLocaleString('en-GB', {
                                hour: 'numeric',
                                minute: 'numeric',
                            })}
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
            ) : null}
            {props.weather.wind ? (
                <div className="weather-details__wind">
                    <i className="fa-solid fa-wind"></i>
                    <div className="weather-details__wind-speed">
                        <span>Speed </span>
                        <span>{props.weather.wind.speed}KM/H</span>
                    </div>
                    <div className="weather-details__wind-direct">
                        <span>Direction </span>
                        <span>{props.weather.wind.deg}KM/H</span>
                    </div>
                    <div className="weather-details__wind-gust">
                        <span>Gust </span>
                        <span>{props.weather.wind.gust}KM/H</span>
                    </div>
                </div>
            ) : null}
            {props.weather ? (
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
                    {props.weather.pop ? (
                        <div className="weather-details__rain-prob">
                            <span>Rain prob </span>
                            <span>{props.weather.pop * 100}%</span>
                        </div>
                    ) : null}
                </div>
            ) : null}
        </div>
    );
};