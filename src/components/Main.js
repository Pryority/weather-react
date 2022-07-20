import React, { useEffect, useState } from "react";
import axios from 'axios'

const Main = () => {
    const [weather, setWeather] = useState('');
    const [city, setCity] = useState('Toronto');

    const defaultCities = [
        "Ottawa",
        "New York",
        "Tokyo",
        "Paris",
        "Mumbai",
    ]

    const cityListItems = defaultCities.map((defaultCity) =>
        <p key={defaultCity.toString()} className='flex w-full bg-slate-100 border p-2 rounded-md justify-center items-center'>{defaultCity}</p>
    );

    const apiCall = async (e) => {
        e.preventDefault();
        // const loc = e.target.value
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=85b2f1bdec6377177c781dc904257b09&units=metric`;
        const req = axios.get(url);
        const res = await req;
        setWeather({
            descp: res.data.weather[0].description,
            temp: res.data.main.temp,
            city: res.data.name,
            humidity: res.data.main.humidity,
            uv: res.data.main.uv,
        })

        // setCity(res.data)
        console.log(res);

    }

    const searchCity = (event) => {
        if (event.key === 'Enter' || 'Submit' || 'Click') {
            apiCall(event);
        }
    }

    const getData = async () => {
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=85b2f1bdec6377177c781dc904257b09&units=metric`);
        setWeather({
            city: data.name,
            coord: data.coord,
            descp: data.weather[0].description,
            temp: data.main.temp,
            humidity: data.main.humidity,
            wind: data.wind.speed,
            uv: data.main.uv,
        })
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <div id='wrapper' className="flex flex-col w-full items-center">
            <div className='flex w-full bg-slate-300 justify-center p-2'>
                <h1>Weather Dashboard</h1>
            </div>
            <div>{JSON.stringify((weather))}</div>
            <div className='flex w-full h-screen'>
                <div id='city-search'>
                    <div className='p-2'>
                        <div className='flex flex-col space-y-4 items-center bg-red-100 p-2 rounded-md h-screen'>
                            <div className='flex w-full justify-start'>
                                <h3 className='font-medium'>Search for a City:</h3>
                            </div>
                            <div>
                                <input
                                    type='text'
                                    value={city}
                                    onSubmit={apiCall}
                                    onChange={(e) => setCity(e.target.value)}
                                    // onKeyUp={searchCity}
                                    placeholder='Toronto'
                                    className='p-2 rounded-md border'
                                />
                            </div>
                            <div className='flex w-full'>
                                <button className='bg-blue-400 p-2 px-4 rounded-md w-full border text-white font-semibold'
                                    onClick={searchCity}
                                >
                                    Search
                                </button>
                            </div>
                            <div className='flex w-full border border-slate-300' />
                            <div className='flex flex-col space-y-2 w-full'>{cityListItems}</div>
                            <p>CITY NAME</p>
                        </div>
                    </div>
                </div>
                <div id='single-city' className='flex w-full'>
                    <div className='flex w-full justify-start p-2'>
                        <div className='flex flex-col w-full bg-slate-400 p-4 rounded-md'>
                            <h2 className='text-3xl font-medium mb-2'>{weather.city}</h2>
                            <div
                                id='weather-info-col'
                                className='flex flex-col'>
                                <div className='flex space-x-2 items-center'>
                                    <p id='city-weather-info'>Temp:</p>
                                    <p id='city-weather-data'>{weather.temp}</p>
                                </div>
                                <div className='flex space-x-2 items-center'>
                                    <p id='city-weather-info'>Wind:</p>
                                    <p id='city-weather-data'>{weather.wind} km/h</p>
                                </div>
                                <div className='flex space-x-2 items-center'>
                                    <p id='city-weather-info'>Humidity:</p>
                                    <p id='city-weather-data'>{weather.humidity}%</p>
                                </div>
                                <div className='flex space-x-2 items-center'>
                                    <p id='city-weather-info'>UV Index:</p>
                                    <p id='city-weather-data'>4</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <ForecastColumn /> */}
            </div>
        </div >
    )
}

export default Main;