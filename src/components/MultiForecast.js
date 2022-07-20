import React from 'react'

export default function Forecast({ items }) {
    return (
        <div className='flex flex-wrap w-full p-4 gap-2 items-center justify-center'>
            {items.map((item, index) => (
                <div key={index} className='bg-slate-400 rounded-md p-2 '>
                    <h2 className='text-3xl font-medium mb-2'>2022-07-15</h2>
                    <div
                        id='weather-info-col'
                        className='flex flex-col'>
                        <div className='flex space-x-2 items-center'>
                            <p id='city-weather-info'>Temp:</p>
                            <p id='city-weather-data'>{`ad`}</p>
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
            ))}
        </div>
    )
}
