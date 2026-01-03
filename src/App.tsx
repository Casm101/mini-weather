// import { invoke } from '@tauri-apps/api/core';

import { Header } from './components/Header/Header';
import { CurrentWeather } from './features/CurrentWeather/CurrentWeather';
import { HourlyWeather } from './features/HourlyWeather/HourlyWeather';
import { Humidity } from './features/Humidity/Humidity';
import { UVIndex } from './features/UVIndex/UVIndex';

import { useWeather } from './hooks/useWeather';

import './App.css';

function App() {
  const weather = useWeather('Torremolinos');

  // const [greetMsg, setGreetMsg] = useState('');
  // const [name, setName] = useState('');

  // async function greet() {
  //   setGreetMsg(await invoke('greet', { name }));
  // }

  return (
    <main className="container">
      <Header title={weather.location} />
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
    </main>
  );
}

export default App;
