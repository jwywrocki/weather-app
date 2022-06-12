import React, { Component } from 'react';
import Search from './Search';

export default class SearchAndDataContainer extends Component {
    render() {
        return (
            <div className="glass">
                <Search
                    value={this.props.value}
                    onChange={this.props.onChange}
                    onKeyPress={this.props.onKeyPress}
                />
                <div className="data__container">
                    {this.props.currentWeather.name ? (
                        <div className="loc horizontal">
                            <div className="city">
                                {this.props.currentWeather.name},
                                {this.props.currentWeather.sys.country}
                            </div>
                            {this.props.currentWeather.weather ? (
                                <div className="icon">
                                    <img
                                        src={`${this.props.weatherIcon}${this.props.currentWeather.weather[0].icon}.png`}
                                        alt="weather icon"
                                    ></img>
                                </div>
                            ) : null}
                        </div>
                    ) : null}
                    {this.props.currentWeather.dt ? (
                        <div className="data">
                            {new Date(
                                this.props.currentWeather.dt * 1000
                            ).toLocaleDateString('en-US', {
                                weekday: 'long',
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric',
                            })}
                        </div>
                    ) : null}
                    {this.props.currentWeather.main ? (
                        <div className="data temp">
                            <span>
                                Temperature:{' '}
                                {this.props.currentWeather.main.temp}°C
                            </span>
                        </div>
                    ) : null}
                    {this.props.currentWeather.main ? (
                        <div className="data pressure">
                            <span>
                                Pressure:{' '}
                                {this.props.currentWeather.main.pressure}hPa
                            </span>
                        </div>
                    ) : null}
                    {this.props.currentWeather.main ? (
                        <div className="data humidity">
                            <span>
                                Humidity:{' '}
                                {this.props.currentWeather.main.humidity}%
                            </span>
                        </div>
                    ) : null}
                    {this.props.currentWeather.wind ? (
                        <div className="data wind">
                            <span>
                                Wind speed:{' '}
                                {this.props.currentWeather.wind.speed}KM/H
                            </span>
                        </div>
                    ) : null}
                </div>
            </div>
        );
    }
}
