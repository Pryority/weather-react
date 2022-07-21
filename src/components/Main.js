import React, { useEffect, useState } from "react";
import getFormattedWeatherData from "../services/weatherService";

import Search from './Search';
import SingleForecast from './SingleForecast';
import Forecast from './Forecast';
const Main = () => {
    const [query, setQuery] = useState({ q: 'Toronto' })
    const [units, setUnits] = useState('Metric');
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            await getFormattedWeatherData({ ...query, units }).then(data => setWeather(data))
        }

        fetchWeather();
    }, [query, units]);

    return (
        <div id='wrapper' className="flex flex-col w-full items-center">
            <div className='flex w-full bg-sky-200 justify-end p-4'>
                <h1 className="text-2xl font-mediumd">Weather Dashboard</h1>
            </div>
            <div className='flex w-full h-screen'>
                {weather && (
                    <>
                        <Search setQuery={setQuery} />
                        <div className="flex flex-col w-full">
                            <SingleForecast weather={weather} />
                            <div className="w-1/2 text-sm">
                                {/* <div>{JSON.stringify(weather.daily)}</div> */}
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