import { useEffect, useState } from 'react';

const WEATHER_API_CURRENT = 'http://api.weatherapi.com/v1/forecast.json';
const API_KEY = '6c054dea9af148c5ba0115742250304';

import { Weather } from '../types/index';

const fetchWeather = async (location: string) => {
  return await fetch(`${WEATHER_API_CURRENT}?key=${API_KEY}&q=${location}&aqi=no`)
    .then(response => response.json())
    .then(data => {
      return {
        localTime: data.location.localtime,
        location: data.location.name,
        sunset: data.forecast.forecastday[0].astro.sunset,
        current: {
          temperature: data.current.temp_c,
          condition: data.current.condition.text,
          conditionIcon: data.current.condition.icon,
          maxTemp: data.forecast.forecastday[0].day.maxtemp_c.toFixed(0),
          minTemp: data.forecast.forecastday[0].day.mintemp_c.toFixed(0),
          windSpeed: data.current.wind_kph,
          pressure: data.current.pressure_mb,
        },
        hourly: data.forecast.forecastday[0].hour.map((hour: any) => ({
          time: hour.time.split(' ')[1],
          temperature: hour.temp_c.toFixed(0),
          conditionIcon: hour.condition.icon,
        })),
        humidity: {
          humidity: data.current.humidity,
          dewPoint: data.current.dewpoint_c,
        },
        sun: {
          uvIndex: data.current.uv,
          heatIndex: data.current.heatindex_c,
          clouds: data.current.cloud,
          precipitation: data.current.precip_mm,
        },
      };
    });
};

export const useWeather = (location: string = 'Málaga') => {
  const [weather, setWeather] = useState<Weather>({
    localTime: '',
    location: '',
    sunset: '',
    current: {
      temperature: 0,
      condition: '',
      conditionIcon: '',
      windSpeed: 0,
      pressure: 0,
    },
    hourly: [],
    humidity: {
      humidity: 0,
      dewPoint: 0,
    },
    sun: {
      uvIndex: 0,
      heatIndex: 0,
      clouds: 0,
      precipitation: 0,
    },
  });

  useEffect(() => {
    fetchWeather(location).then(data => setWeather(data));
  }, [location]);

  return weather;
};
