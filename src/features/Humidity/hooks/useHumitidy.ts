import { useEffect, useState } from 'react';

const WEATHER_API_CURRENT = 'http://api.weatherapi.com/v1/forecast.json';
const API_KEY = '6c054dea9af148c5ba0115742250304';

interface Weather {
  humidity: string;
  dewPoint: string;
}

const fetchHumidity = async (location: string) => {
  return await fetch(`${WEATHER_API_CURRENT}?key=${API_KEY}&q=${location}&aqi=no&days=7`)
    .then(response => response.json())
    .then(data => {
      return {
        humidity: data.current.humidity,
        dewPoint: data.current.dewpoint_c,
      };
    });
};

export const useHumidity = (location: string = 'Málaga') => {
  const [humidity, setHumidity] = useState<Weather>({
    humidity: '',
    dewPoint: '',
  });

  useEffect(() => {
    fetchHumidity(location).then(data => setHumidity(data));
  }, [location]);

  return humidity;
};
