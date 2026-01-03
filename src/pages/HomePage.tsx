import { IoSettingsOutline } from 'react-icons/io5';

import { Header } from '../components/Header/Header';
import { CurrentWeather } from '../features/CurrentWeather/CurrentWeather';
import { HourlyWeather } from '../features/HourlyWeather/HourlyWeather';
import { Humidity } from '../features/Humidity/Humidity';
import { UVIndex } from '../features/UVIndex/UVIndex';

import { useWeather } from '../hooks/useWeather';
import { useRouter } from './Router';
import { useLocation } from '../state';

export const HomePage = () => {
  const [location] = useLocation();
  const { goToPage } = useRouter();

  const weather = useWeather(location);

  const goToSettings = () => goToPage('settings');

  return (
    <>
      <Header
        title={weather.location}
        rightAction={{ icon: IoSettingsOutline, action: () => goToSettings() }}
      />
      <CurrentWeather
        location={weather.location}
        sunset={weather.sunset}
        current={weather.current}
      />
      <HourlyWeather localTime={weather.localTime} hourly={weather.hourly} />
      <Humidity
        humidity={weather.humidity.humidity}
        dewPoint={weather.humidity.dewPoint}
      />
      <UVIndex
        uvIndex={weather.sun.uvIndex}
        heatIndex={weather.sun.heatIndex}
        clouds={weather.sun.clouds}
        precipitation={weather.sun.precipitation}
      />
    </>
  );
};
