// import { invoke } from '@tauri-apps/api/core';

import { CurrentWeather } from './features/CurrentWeather/CurrentWeather';
import { HourlyWeather } from './features/HourlyWeather/HourlyWeather';
import { Humidity } from './features/Humidity/Humidity';
import { UVIndex } from './features/UVIndex/UVIndex';

import { useWeather } from './hooks/useWeather';

import './App.css';
import { Header } from './components/Header/Header';

function App() {
  const weather = useWeather();

  // const [greetMsg, setGreetMsg] = useState('');
  // const [name, setName] = useState('');

  // async function greet() {
  //   setGreetMsg(await invoke('greet', { name }));
  // }

  return (
    <main className="container">
      <Header />
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
