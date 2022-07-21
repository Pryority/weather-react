import { DateTime } from "luxon";

const API_KEY = '85ae6703a00509f279d0e19226365a60';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const getWeatherData = (searchType, searchParams) => {
    const url = new URL(BASE_URL + '/' + searchType);
    url.search = new URLSearchParams({ ...searchParams, appId: API_KEY })

    return fetch(url)
        .then((res) => res.json())
        .then((data) => data);
};

const formatCurrentWeather = (data) => {
    const {
        coord: { lat, lon },
        main: { temp, feels_like, min_temp, max_temp, humidity },
        name,
        dt,
        weather,
        wind: { speed }
    } = data;

    const { main: details, icon } = weather[0];

    return {
        lat,
        lon,
        temp,
        feels_like,
        min_temp,
        max_temp,
        humidity,
        name,
        dt,
        details,
        icon,
        speed
    }
};

const formatForecastWeather = (data) => {
    let { timezone, daily, hourly } = data;
    daily = daily.slice(1, 6).map(d => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'ccc'),
            temp: d.temp.day,
            icon: d.weather[0].icon,
            humidity: d.humidity,
            max_temp: d.temp.max
        }
    });

    hourly = hourly.slice(1, 6).map(d => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
            temp: d.temp,
            icon: d.weather[0].icon
        }
    })

    return { timezone, daily, hourly };
};

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather', searchParams).then(formatCurrentWeather);

    const { lat, lon } = formattedCurrentWeather;

    const formattedForecastWeather = await getWeatherData('onecall', {
        lat,
        lon,
        exclude: 'currently,minutely,alerts',
        units: 'metric'
    }).then(formatForecastWeather)

    return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

const formatToLocalTime = (secs, zone, format = "cccc, dd  LLL yyyy' | Local time: 'hh:mm a") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const getIconUrl = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`;

export default getFormattedWeatherData;

export { formatToLocalTime, getIconUrl };