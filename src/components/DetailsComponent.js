import React from 'react';
import { eIcon } from '../constants/global';

export default function CurrentWeatherComponent(props) {
    return (
        <div className="currentWeather">
            {props.children}
            <div className="data__container">
                <div className="loc horizontal">
                    {props.weather.name ? (
                        <div className="city">
                            {props.weather.name}, {props.weather.sys.country}
                        </div>
                    ) : null}
                    {props.weather.weather ? (
                        <div className="icon">
                            <img
                                src={`${eIcon}${props.weather.weather[0].icon}.png`}
                                alt="weather icon"
                            ></img>
                        </div>
                    ) : null}
                </div>
                {props.weather.dt ? (
                    <div className="data">
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
                    <div className="data temp">
                        <span>Temperature: {props.weather.main.temp}°C</span>
                    </div>
                ) : null}
                {props.weather.main ? (
                    <div className="data pressure">
                        <span>
                            Pressure: {props.weather.main.pressure}
                            hPa
                        </span>
                    </div>
                ) : null}
                {props.weather.main ? (
                    <div className="data humidity">
                        <span>Humidity: {props.weather.main.humidity}%</span>
                    </div>
                ) : null}
                {props.weather.wind ? (
                    <div className="data wind">
                        <span>
                            Wind speed: {props.weather.wind.speed}
                            KM/H
                        </span>
                    </div>
                ) : null}
            </div>
        </div>
    );
}
