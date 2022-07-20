import React, { useState } from 'react'

export default function Search() {
    const [city, setCity] = useState('');

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

    const searchCity = (event) => {
        if (event.key === 'Enter' || 'Submit' || 'Click') {
            // apiCall(event);
            // getLocationData();
        }
    }

    return (
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
                            // onSubmit={apiCall}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder='Enter a city'
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
                </div>
            </div>
        </div>
    )
}
