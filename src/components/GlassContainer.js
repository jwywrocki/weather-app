import React from 'react';
import { eIcon } from '../constants/global';

export default function GlassContainer(props) {
    return (
        <div className="glass">
            {props.children}
            <div className="data__container">
                {props.currentWeather.name ? (
                    <div className="loc horizontal">
                        <div className="city">
                            {props.currentWeather.name},{props.currentWeather.sys.country}
                        </div>
                        {props.currentWeather.weather ? (
                            <div className="icon">
                                <img
                                    src={`${eIcon}${props.currentWeather.weather[0].icon}.png`}
                                    alt="weather icon"
                                ></img>
                            </div>
                        ) : null}
                    </div>
                ) : null}
                {props.currentWeather.dt ? (
                    <div className="data">
                        {new Date(props.currentWeather.dt * 1000).toLocaleDateString('en-US', {
                            weekday: 'long',
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                        })}
                    </div>
                ) : null}
                {props.currentWeather.main ? (
                    <div className="data temp">
                        <span>Temperature: {props.currentWeather.main.temp}°C</span>
                    </div>
                ) : null}
                {props.currentWeather.main ? (
                    <div className="data pressure">
                        <span>
                            Pressure: {props.currentWeather.main.pressure}
                            hPa
                        </span>
                    </div>
                ) : null}
                {props.currentWeather.main ? (
                    <div className="data humidity">
                        <span>Humidity: {props.currentWeather.main.humidity}%</span>
                    </div>
                ) : null}
                {props.currentWeather.wind ? (
                    <div className="data wind">
                        <span>
                            Wind speed: {props.currentWeather.wind.speed}
                            KM/H
                        </span>
                    </div>
                ) : null}
            </div>
        </div>
    );
}
