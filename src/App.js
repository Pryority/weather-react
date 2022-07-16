import React, { useState, useEffect } from 'react';
import './App.css';
import Main from './components/Main'

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
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

  }, [lat, long])

  return (
    <div>
      {(typeof data.main != 'undefined') ? (
        <Main weatherData={data} />
      ) : (
        <div>
        </div>
      )}
    </div>
  );
}

export default App;
