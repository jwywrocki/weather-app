import React from 'react';

export const DetailsComponent = (props) => {
    return (
        <div className="weather-details__container">
            {props.weather.main ? (
                <>
                    <div className="weather-details__feels-like">
                        Fells like: {props.weather.main.feels_like.toFixed(1)}
                    </div>
                    <div className="weather-details__min">
                        Min: {props.weather.main.temp_min.toFixed(1)}
                    </div>
                    <div className="weather-details__max">
                        Max: {props.weather.main.temp_max.toFixed(1)}
                    </div>
                </>
            ) : null}
            {props.weather.sys ? (
                <>
                    <div className="forecastWeather__sunrise">
                        Sunrise:{' '}
                        {new Date(props.weather.sys.sunrise * 1000).toLocaleString('en-GB', {
                            hour: 'numeric',
                            minute: 'numeric',
                        })}
                    </div>
                    <div className="forecastWeather__sunset">
                        Sunset:{' '}
                        {new Date(props.weather.sys.sunset * 1000).toLocaleString('en-GB', {
                            hour: 'numeric',
                            minute: 'numeric',
                        })}
                    </div>
                </>
            ) : null}
        </div>
    );
};
