import { useEffect, useState } from 'react';

const WEATHER_API_CURRENT = 'http://api.weatherapi.com/v1/forecast.json';
const API_KEY = '6c054dea9af148c5ba0115742250304';

import { Weather } from '../types/index';

// Refresh interval in milliseconds (5 minutes)
const REFRESH_INTERVAL = 320000;

const fetchWeather = async (location: string) => {
  return await fetch(`${WEATHER_API_CURRENT}?key=${API_KEY}&q=${location}&aqi=no`)
    .then(response => response.json())
    .then(data => {
      return {
        localTime: data.location.localtime,
        location: data.location.name,
        sunset: data.forecast.forecastday[0].astro.sunset,
        current: {
          temperature: {
            metric: data.current.temp_c,
            imperial: data.current.temp_f,
          },
          condition: data.current.condition.text,
          conditionIcon: data.current.condition.icon,
          // maxTemp: {
          //   metric: data.forecast.forecastday[0].day.maxtemp_c.toFixed(0),
          //   imperial: data.forecast.forecastday[0].day.maxtemp_f.toFixed(0),
          // },
          // minTemp: {
          //   metric: data.forecast.forecastday[0].day.mintemp_c.toFixed(0),
          //   imperial: data.forecast.forecastday[0].day.mintemp_f.toFixed(0),
          // },
          windSpeed: {
            metric: data.current.wind_kph,
            imperial: data.current.wind_mph,
          },
          pressure: {
            metric: data.current.pressure_mb,
            imperial: data.current.pressure_in,
          },
        },
        hourly: data.forecast.forecastday[0].hour.map((hour: any) => ({
          time: hour.time.split(' ')[1],
          temperature: {
            metric: hour.temp_c.toFixed(0),
            imperial: hour.temp_f.toFixed(0),
          },
          conditionIcon: hour.condition.icon,
        })),
        humidity: {
          humidity: data.current.humidity,
          dewPoint: {
            metric: data.current.dewpoint_c,
            imperial: data.current.dewpoint_f,
          },
        },
        sun: {
          uvIndex: data.current.uv,
          heatIndex: {
            metric: data.current.heatindex_c,
            imperial: data.current.heatindex_f,
          },
          clouds: data.current.cloud,
          precipitation: {
            metric: data.current.precip_mm,
            imperial: data.current.precip_in,
          },
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
      temperature: {
        metric: 0,
        imperial: 0,
      },
      condition: '',
      conditionIcon: '',
      windSpeed: {
        metric: 0,
        imperial: 0,
      },
      pressure: {
        metric: 0,
        imperial: 0,
      },
    },
    hourly: [],
    humidity: {
      humidity: 0,
      dewPoint: {
        metric: 0,
        imperial: 0,
      },
    },
    sun: {
      uvIndex: 0,
      heatIndex: {
        metric: 0,
        imperial: 0,
      },
      clouds: 0,
      precipitation: {
        metric: 0,
        imperial: 0,
      },
    },
  });

  useEffect(() => {
    fetchWeather(location).then(data => setWeather(data));

    setInterval(() => {
      fetchWeather(location).then(data => setWeather(data));
    }, REFRESH_INTERVAL);
  }, [location]);

  return weather;
};
