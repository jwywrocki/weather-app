import React from 'react';
import { eIcon } from '../constants/global';
import SwiperCore, { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';

SwiperCore.use([FreeMode]);

export const ForecastWeatherComponent = (props) => {
    return (
        <>
            {props.weather.list ? (
                <div className="forecastWeather">
                    <Swiper
                        freeMode={true}
                        breakpoints={{
                            275: {
                                width: 275,
                                slidesPerView: 2,
                            },
                            375: {
                                width: 375,
                                slidesPerView: 3,
                            },
                            525: {
                                width: 525,
                                slidesPerView: 4,
                            },
                            768: {
                                width: 768,
                                slidesPerView: 5,
                            },
                            992: {
                                width: 580,
                                slidesPerView: 4,
                            },
                            1200: {
                                width: 710,
                                slidesPerView: 4,
                            },
                            1920: {
                                width: 1430,
                                slidesPerView: 8,
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
                                        <span>{Math.round(value.main.temp)}&deg;C</span>
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
