import React from 'react'
import SingleForecast from './SingleForecast'
import MultiForecast from './MultiForecast';

export default function ForecastColumn() {
    return (
        <div className='flex flex-col w-full items-center'>
            <MultiForecast />
        </div>
    )
}
