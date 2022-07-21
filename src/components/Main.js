import React, { useEffect, useState } from "react";
import axios from 'axios'
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
            <div className='flex w-full bg-slate-300 justify-center p-2'>
            
                <h1>Weather Dashboard</h1>
            </div>
            <div className='flex w-full h-screen'>
                {weather && (
                    <>
                        <Search setQuery={setQuery}/>
                        <div className="flex flex-col">
                            <SingleForecast weather={weather} />
                            <div className="w-1/2 text-sm">
                            <div>{JSON.stringify(weather.daily)}</div>
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



    // // const [weather, setWeather] = useState('');
    // const [city, setCity] = useState('Tokyo');
    // const [location, setLocation] = useState('');
    // const [forecast, setForecast] = useState('');

    // /* const apiCall = async (e) => {
    //     e.preventDefault();
    //     // const loc = e.target.value
    //     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=60b824a594dce68730bab043decd40d5&units=metric`;
    //     const req = axios.get(url);
    //     const res = await req;
    //     setWeather({
    //         descp: res.data.weather[0].description,
    //         temp: res.data.main.temp,
    //         city: res.data.name,
    //         humidity: res.data.main.humidity,
    //         uv: res.data.main.uv,
    //     })
 
    //     // setCity(res.data)
    //     console.log(res);
    // } */

    // const [lat, setLat] = useState('');
    // const [lon, setLon] = useState('');

    // const geocode = async () => {
    //     const { data } = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=60b824a594dce68730bab043decd40d5`);
    //     setLat(data.lat)
    //     setLon(data.lon)
    //     setLocation({ lat: lat, lon: lon })
    //     console.log('Geocode Data:', data)


    //     // getForecastData();
    // }

    // const getForecast = async (lat, lon) => {
    //     const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=60b824a594dce68730bab043decd40d5`);
    //     // setForecast({
    //     //     city: data.name,
    //     //     coord: data.coord,
    //     //     descp: data.weather[0].description,
    //     //     temp: data.main.temp,
    //     //     humidity: data.main.humidity,
    //     //     wind: data.wind.speed,
    //     //     uv: data.main.uv,
    //     // })
    //     // geocode();
    //     console.log('Forecast:', data);
    // }

    // const getLocationData = async () => {
    //     const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=60b824a594dce68730bab043decd40d5&units=metric`);
    //     setWeather({
    //         city: data.name,
    //         coord: data.coord,
    //         descp: data.weather[0].description,
    //         temp: data.main.temp,
    //         humidity: data.main.humidity,
    //         wind: data.wind.speed,
    //         uv: data.main.uv,
    //     })
    //     console.log('Search Location Data:', data)
    //     getForecast(data.coord.lat, data.coord.lon);
    // }