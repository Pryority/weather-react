import React, { useState, useEffect } from 'react';
import './App.css';
import Main from './components/Main'

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  // const [data, setData] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    getWeather(lat, long)
      .then(weather => {
        setWeatherData(weather);
        setError(null)
      }).catch(err => {
        setError(err.message);
      });

    function getWeather(lat, long) {
      return fetch(
        `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then(res => handleResponse(res))
        .then(weather => {
          if (Object.entries(weather).length) {
            const mappedData = mapDataToWeatherInterface(weather);
            return mappedData;
          }
        });
    }

  }, [lat, long, error])

  function handleResponse(response) {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Please Enable your Location in your browser!");
    }
  }

  console.log(`Latitude: ${lat}`);
  console.log(`Longitude: ${long}`);

  function mapDataToWeatherInterface(data) {
    const mapped = {
      date: data.dt * 1000, // convert from seconds to milliseconds
      description: data.weather[0].main,
      temperature: Math.round(data.main.temp),
    };

    // Add extra properties for the five day forecast: dt_txt, icon, min, max
    if (data.dt_txt) {
      mapped.dt_txt = data.dt_txt;
    }

    return mapped;
  }

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
