import React, { useState } from 'react';
import { getCurrentWeather, getForecastWeather } from '../services/getWeather';
import { CurrentWeatherComponent } from '../components/CurrentWeatherComponent';
import { ForecastWeatherComponent } from '../components/ForecastWeatherComponent';
import { DetailsComponent } from '../components/DetailsComponent';
import { Search } from '../components/Search';
import SwiperCore, { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';

SwiperCore.use([FreeMode]);

export const Dashboard = () => {
    const [currentWeather, setCurrentWeather] = useState({});
    const [forecastWeather, setForecastWeather] = useState({});
    const [location, setLocation] = useState('');

    const getWeather = () => {
        getCurrentWeather(location, setCurrentWeather);
        getForecastWeather(location, setForecastWeather);
    };
    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            getWeather();
            setLocation('');
        }
    };
    return (
        <>
            {console.log(currentWeather)}
            <CurrentWeatherComponent weather={currentWeather}>
                <Search
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    onKeyPress={searchLocation}
                />
            </CurrentWeatherComponent>
            {forecastWeather.cod === '200' ? (
                <div className="weather-details">
                    <div className="weather-details__controls"></div>
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
                                    width: 1600,
                                    slidesPerView: 8,
                                },
                                2560: {
                                    width: 2300,
                                    slidesPerView: 12,
                                },
                            }}
                        >
                            {forecastWeather.list.map((value, index) => (
                                <SwiperSlide key={index}>
                                    <ForecastWeatherComponent weather={value} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <DetailsComponent weather={currentWeather} />
                </div>
            ) : null}
        </>
    );
};
