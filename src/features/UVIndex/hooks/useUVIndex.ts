import { useEffect, useState } from 'react';

const WEATHER_API_CURRENT = 'http://api.weatherapi.com/v1/forecast.json';
const API_KEY = '6c054dea9af148c5ba0115742250304';

interface Weather {
  uvIndex: string;
  heatIndex: string;
  clouds: string;
  precipitation: string;
}

const fetchUVIndex = async (location: string) => {
  return await fetch(`${WEATHER_API_CURRENT}?key=${API_KEY}&q=${location}&aqi=no&days=7`)
    .then(response => response.json())
    .then(data => {
      return {
        uvIndex: data.current.uv,
        heatIndex: data.current.heatindex_c,
        clouds: data.current.cloud,
        precipitation: data.current.precip_mm,
      };
    });
};

export const useUVIndex = (location: string = 'Málaga') => {
  const [uvIndex, setUVIndex] = useState<Weather>({
    uvIndex: '',
    heatIndex: '',
    clouds: '',
    precipitation: '',
  });

  useEffect(() => {
    fetchUVIndex(location).then(data => setUVIndex(data));
  }, [location]);

  return uvIndex;
};
