import React from 'react'
import { getIconUrl } from '../services/weatherService'

export default function Forecast({ title, temp, max_temp, humidity, items }) {
    console.log(`5-Day Forecast:`, items)
    return (
        <div className='flex flex-wrap w-full p-4 gap-2 items-center justify-around'>
            {items.map((i, index) => (
                <div key={index} className='bg-sky-200 border-2 rounded-md p-8 shadow-sm'>
                    <div className='flex w-full justify-between'>
                        <h2 className='text-black font-light text-3xl font-medium mb-2'>{`${i.title}`}</h2>
                        <img src={getIconUrl(i.icon)} alt='weather icon' className='w-24' />
                    </div>
                    <div
                        id='weather-info-col'
                        className='flex flex-col'>
                        <div className='flex space-x-2 items-center'>
                            <p className='text-zinc-600 font-light' id='city-weather-info'>Temp:</p>
                            <p className='text-black font-medium' id='city-weather-data'>{`${i.temp}`}</p>
                        </div>
                        <div className='flex space-x-2 items-center'>
                            <p className='text-zinc-600 font-light' id='city-weather-info'>Max Temp:</p>
                            <p className='text-black font-medium' id='city-weather-data'>{`${i.max_temp}`} km/h</p>
                        </div>
                        <div className='flex space-x-2 items-center'>
                            <p className='text-zinc-600 font-light' id='city-weather-info'>Humidity:</p>
                            <p className='text-black font-medium' id='city-weather-data'>{`${i.humidity}`}%</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
