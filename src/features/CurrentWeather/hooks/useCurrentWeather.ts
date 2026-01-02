import { useEffect, useState } from 'react';

const WEATHER_API_CURRENT = 'http://api.weatherapi.com/v1/forecast.json';
const API_KEY = '6c054dea9af148c5ba0115742250304';

interface Weather {
  temperature: number;
  condition: string;
  conditionIcon: string;
  location: string;
  maxTemp: number;
  minTemp: number;
  windSpeed: number;
  pressure: number;
  sunset: string;
}

const fetchCurrentWeather = async (location: string) => {
  return await fetch(`${WEATHER_API_CURRENT}?key=${API_KEY}&q=${location}&aqi=no`)
    .then(response => response.json())
    .then(data => {
      return {
        temperature: data.current.temp_c,
        condition: data.current.condition.text,
        conditionIcon: data.current.condition.icon,
        location: data.location.name,
        maxTemp: data.forecast.forecastday[0].day.maxtemp_c.toFixed(0),
        minTemp: data.forecast.forecastday[0].day.mintemp_c.toFixed(0),
        windSpeed: data.current.wind_kph,
        pressure: data.current.pressure_mb,
        sunset: data.forecast.forecastday[0].astro.sunset,
      };
    });
};

export const useCurrentWeather = (location: string = 'Málaga') => {
  const [current, setCurrent] = useState<Weather>({
    temperature: 0,
    condition: '',
    conditionIcon: '',
    location: '',
    maxTemp: 0,
    minTemp: 0,
    windSpeed: 0,
    pressure: 0,
    sunset: '',
  });

  useEffect(() => {
    fetchCurrentWeather(location).then(data => setCurrent(data));
  }, [location]);

  return current;
};
