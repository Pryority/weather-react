import React from 'react'

// function SingleForecast({ weather }) {
function SingleForecast({ weather: { name, temp, speed, humidity } }) {
    return (
        <div id='single-city' className='flex flex-col w-full'>
            <div className='flex w-full justify-start p-2'>
                <div className='flex flex-col w-full bg-slate-400 p-4 rounded-md'>
                    <h2 className='text-3xl font-medium mb-2'>{`${name}`}</h2>
                    <div
                        id='weather-info-col'
                        className='flex flex-col'>
                        <div className='flex space-x-2 items-center'>
                            <p id='city-weather-info'>Temp:</p>
                            <p id='city-weather-data'>{`${temp}`}</p>
                        </div>
                        <div className='flex space-x-2 items-center'>
                            <p id='city-weather-info'>Wind:</p>
                            <p id='city-weather-data'>{`${speed}`}</p>
                        </div>
                        <div className='flex space-x-2 items-center'>
                            <p id='city-weather-info'>Humidity:</p>
                            <p id='city-weather-data'>{`${humidity}`}%</p>
                        </div>
                        <div className='flex space-x-2 items-center'>
                            <p id='city-weather-info'>UV Index:</p>
                            <p id='city-weather-data'>{`$`}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <ForecastColumn /> */}
            <div className='flex w-full justify-start p-2'>
                <div className='flex flex-col w-full bg-slate-400 p-4 rounded-md'>
                    <h2 className='text-3xl font-medium mb-2'>2022-07-15</h2>
                    <div
                        id='weather-info-col'
                        className='flex flex-col'>
                        <div className='flex space-x-2 items-center'>
                            <p id='city-weather-info'>Temp:</p>
                            <p id='city-weather-data'>fix</p>
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
    )
}

export default SingleForecast;