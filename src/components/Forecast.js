import React from 'react'

export default function Forecast({ title, temp, humidity, items }) {
    console.log(items)
    return (
        <div className='flex flex-wrap w-full p-4 gap-2 items-center justify-center'>
            {items.map((i, index) => (
                <div key={index} className='bg-slate-400 rounded-md p-2 '>
                    <h2 className='text-3xl font-medium mb-2'>{`${i.title}`}</h2>
                    <div
                        id='weather-info-col'
                        className='flex flex-col'>
                        <div className='flex space-x-2 items-center'>
                            <p id='city-weather-info'>Temp:</p>
                            <p id='city-weather-data'>{`${i.temp}`}</p>
                        </div>
                        <div className='flex space-x-2 items-center'>
                            <p id='city-weather-info'>Wind:</p>
                            <p id='city-weather-data'>{`${i.speed}`} km/h</p>
                        </div>
                        <div className='flex space-x-2 items-center'>
                            <p id='city-weather-info'>Humidity:</p>
                            <p id='city-weather-data'>{`${i.humidity}`}%</p>
                        </div>
                        {/* <div className='flex space-x-2 items-center'>
                            <p id='city-weather-info'>UV Index:</p>
                            <p id='city-weather-data'>4</p>
                        </div> */}
                    </div>
                </div>
            ))}
        </div>
    )
}
