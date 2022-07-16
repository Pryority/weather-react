import React, { useState, useEffect } from 'react';
import Main from './components/Main'

function App() {
  const [weatherData, setWeatherData] = useState([]);

  return (
    <div>
      {(typeof weatherData != 'undefined') ? (
        <Main weatherData={weatherData} />
      ) : (
        <div className='flex flex-col items-center w-full h-screen justify-center text-2xl'>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}

export default App;
