import React, { useEffect, useState } from 'react'

export default function Search({ setQuery }) {
    const [city, setCity] = useState('');
    const [searchHistory, setSearchHistory] = useState([]);
    const [cityList, setCityList] = useState([]);

    const cityListItems = searchHistory.map((defaultCity) =>
        <button
            key={defaultCity.toString()}
            className='flex w-full bg-blue-200 border p-2 rounded-md justify-center items-center font-medium capitalize'
            onClick={(() => setQuery({ q: defaultCity }))}
        >
            {defaultCity}
        </button>
    );


    function setQueryAndSaveCity() {
        setQuery({ q: city });
        cityList.push(city);
        setSearchHistory(cityList);
        JSON.stringify(searchHistory);
        localStorage.setItem('search-history', JSON.stringify(searchHistory));
        console.log('Search history:', searchHistory);
    }

    return (
        <div id='city-search'>
            <div className='p-2'>
                <div className='flex flex-col space-y-4 items-center bg-sky-100 p-2 rounded-md h-screen'>
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
                            onClick={(() => { setQueryAndSaveCity() })}
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
