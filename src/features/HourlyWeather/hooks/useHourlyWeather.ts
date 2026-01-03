import { useEffect, useState } from 'react';

const WEATHER_API_CURRENT = 'http://api.weatherapi.com/v1/forecast.json';
const API_KEY = '6c054dea9af148c5ba0115742250304';

interface HourlyWeather {
  time: string;
  temperature: number;
  conditionIcon: string;
}

const fetchWeatherForecast = async (location: string) => {
  return await fetch(`${WEATHER_API_CURRENT}?key=${API_KEY}&q=${location}&aqi=no&days=7`)
    .then(response => response.json())
    .then(data => {
      return {
        localTime: data.location.localtime,
        hourly: data.forecast.forecastday[0].hour.map((hour: any) => ({
          time: hour.time.split(' ')[1],
          temperature: hour.temp_c.toFixed(0),
          conditionIcon: hour.condition.icon,
        })),
      };
    });
};

export const useHourlyWeather = (location: string = 'Málaga') => {
  const [localTime, setLocalTime] = useState<string>('');
  const [hourly, setHourly] = useState<HourlyWeather[]>([
    {
      time: '',
      temperature: 0,
      conditionIcon: '',
    },
  ]);

  useEffect(() => {
    fetchWeatherForecast(location).then(data => {
      setHourly(data.hourly);
      setLocalTime(data.localTime);
    });
  }, [location]);

  return { localTime, hourly };
};
