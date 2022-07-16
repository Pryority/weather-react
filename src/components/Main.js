import React, { useState } from 'react'
import axios from 'axios'

const Main = () => {
    const [weather, setWeather] = useState('');
    const [city, setCity] = useState('');

    const url = `${process.env.REACT_APP_API_URL}`;
    const apiKey = process.env.REACT_APP_API_KEY;

    const apiCall = async (e) => {
        e.preventDefault();
        const loc = e.target.value
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`;
        const req = axios.get(url);
        const res = await req;
        setWeather({
            descp: res.data.weather[0].description,
            temp: res.data.main.temp,
            city: res.data.name,
            humidity: res.data.main.humidity,
            press: res.data.main.pressure,
        })

        setCity(res.data.name)
        console.log(res);

    }

    const searchCity = (event) => {
        if (event.key === 'Enter' || 'Submit' || 'Click') {
            apiCall(event);
            // setWeatherData(response.data);

        }
    }

    return (
        <div id='wrapper' className="flex flex-col w-full items-center">
            <div className='flex w-full bg-slate-300 justify-center p-2'>
                <h1>Weather Dashboard</h1>
            </div>
            <div className='flex w-full'>
                <div id='city-search'>
                    <div className='flex flex-col space-y-4 items-center bg-red-100 h-screen p-2'>
                        <div className='flex w-full justify-start'>
                            <h3 className='font-medium'>Search for a City:</h3>
                        </div>
                        <div>
                            <input
                                type='text'
                                value={city}
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
                        <p>{city.name}</p>
                        <p>CITY NAME</p>
                    </div>
                </div>
                <div id='single-city' className='flex flex-col w-full bg-blue-100'>
                    <div className='flex w-full justify-start p-2'>
                        <div className='flex flex-col w-full bg-slate-400 p-4 rounded-md'>
                            <h2 className='text-3xl font-medium mb-2'>Toronto</h2>
                            <div
                                id='weather-info-col'
                                className='flex flex-col'>
                                <div className='flex space-x-2 items-center'>
                                    <p id='city-weather-info'>Temp:</p>
                                    <p id='city-weather-data'>20ºC</p>
                                </div>
                                <div className='flex space-x-2 items-center'>
                                    <p id='city-weather-info'>Wind:</p>
                                    <p id='city-weather-data'>5 km/h</p>
                                </div>
                                <div className='flex space-x-2 items-center'>
                                    <p id='city-weather-info'>Humidity:</p>
                                    <p id='city-weather-data'>46%</p>
                                </div>
                                <div className='flex space-x-2 items-center'>
                                    <p id='city-weather-info'>UV Index:</p>
                                    <p id='city-weather-data'>4</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Main;