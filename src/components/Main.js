import React, { useEffect, useState } from "react";
import getFormattedWeatherData from "../services/weatherService";

import Search from './Search';
import SingleForecast from './SingleForecast';
import Forecast from './Forecast';
const Main = () => {
    const [query, setQuery] = useState({ q: 'Toronto' })
    const [units, setUnits] = useState('Metric');
    const [weather, setWeather] = useState(null);

    const handleGetCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                setQuery({
                    lat,
                    lon
                });
            });
        };
    };

    useEffect(() => {
        const fetchWeather = async () => {
            await getFormattedWeatherData({ ...query, units }).then(data => setWeather(data))
        }

        fetchWeather();
    }, [query, units]);

    return (
        <div id='wrapper' className="flex flex-col w-full items-center">
            <div className='flex w-full bg-sky-200 justify-between p-4 items-center'>
                {/* <button
                    onClick={handleGetCurrentLocation()}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </button> */}

                <h1 className="text-2xl font-mediumd">Weather Dashboard</h1>
            </div>
            <div className='flex w-full h-screen'>
                {weather && (
                    <>
                        <Search setQuery={setQuery} />
                        <div className="flex flex-col w-full">
                            <SingleForecast weather={weather} />
                            <div className="w-1/2 text-sm">
                            </div>
                            <Forecast weather={weather} items={weather.daily} />
                        </div>
                    </>
                )}
            </div>
        </div>

    )
}

export default Main;