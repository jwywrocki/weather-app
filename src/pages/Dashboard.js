import React, { useState } from 'react';
import { getCurrentWeather, getForecastWeather } from '../services/getWeather';
import CurrentWeatherComponent from '../components/CurrentWeatherComponent';
import ForecastWeatherComponent from '../components/ForecastWeatherComponent';
import DetailsComponent from '../components/DetailsComponent';
import Search from '../components/Search';
import SwiperCore, { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';

SwiperCore.use([FreeMode]);

export default function Dashboard() {
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
            <CurrentWeatherComponent weather={currentWeather}>
                <Search
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    onKeyPress={searchLocation}
                />
            </CurrentWeatherComponent>
            {console.log(currentWeather)}
            {forecastWeather.cod === '200' ? (
                <div className="weather-details">
                    <div className="weather-details__controls"></div>
                    <div className="forecastWeather">
                        <Swiper
                            spaceBetween={20}
                            freeMode={true}
                            breakpoints={{
                                576: {
                                    width: 576,
                                    slidesPerView: 3,
                                },
                                768: {
                                    width: 768,
                                    slidesPerView: 4,
                                },
                                992: {
                                    width: 992,
                                    slidesPerView: 5,
                                },
                                1024: {
                                    width: 1024,
                                    slidesPerView: 6,
                                },
                                1200: {
                                    width: 1200,
                                    slidesPerView: 7,
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
}
