import React from 'react'
import getIconUrl from '../services/weatherService'

// function SingleForecast({ weather }) {
function SingleForecast({ weather: { name, temp, speed, humidity, icon } }) {
    return (
        <div id='single-city' className='flex flex-col w-full'>
            <div className='flex w-full justify-start p-2'>
                <div className='flex flex-col w-full bg-sky-200 p-4 rounded-md'>

                    <div>
                        <h2 className='text-3xl font-medium mb-2'>{`${name}`}</h2>
                        <img src='' alt='icon' className='w-12' />
                        <div
                            id='weather-info-col'
                            className='flex flex-col'>
                            <div className='flex space-x-2 items-center'>
                                <p id='city-weather-info'>Temp:</p>
                                <p id='city-weather-data'>{`${temp}º`}</p>
                            </div>
                            <div className='flex space-x-2 items-center'>
                                <p id='city-weather-info'>Wind:</p>
                                <p id='city-weather-data'>{`${speed} km/h`}</p>
                            </div>
                            <div className='flex space-x-2 items-center'>
                                <p id='city-weather-info'>Humidity:</p>
                                <p id='city-weather-data'>{`${humidity}`}%</p>
                            </div>
                            {/* <div className='flex space-x-2 items-center'>
                            <p id='city-weather-info'>UV Index:</p>
                            <p id='city-weather-data'>{`$`}</p>
                        </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleForecast;