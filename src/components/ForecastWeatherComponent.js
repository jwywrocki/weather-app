import React from 'react';
import { eIcon } from '../constants/global';
import SwiperCore, { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { convertToFahrenheit } from '../helpers/tempConverter';

import 'swiper/css';
import 'swiper/css/free-mode';

SwiperCore.use([FreeMode]);

export const ForecastWeatherComponent = (props) => {
    return (
        <>
            {props.weather.list ? (
                <div className="forecastWeather">
                    <Swiper
                        autoHeight={true}
                        freeMode={true}
                        breakpoints={{
                            275: {
                                slidesPerView: 2,
                            },
                            375: {
                                slidesPerView: 3,
                            },
                            525: {
                                slidesPerView: 4,
                            },
                            768: {
                                slidesPerView: 5,
                            },
                            992: {
                                slidesPerView: 4,
                            },
                            1200: {
                                slidesPerView: 4,
                            },
                            1400: {
                                slidesPerView: 5,
                            },
                        }}
                    >
                        {props.weather.list.map((value, index) => (
                            <SwiperSlide key={index}>
                                <div className="forecastWeather__card">
                                    <div className="forecastWeather__date">
                                        {new Date(value.dt * 1000).toLocaleDateString('en-GB', {
                                            day: 'numeric',
                                            hour: 'numeric',
                                            minute: 'numeric',
                                        })}
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
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            ) : null}
        </>
    );
};
