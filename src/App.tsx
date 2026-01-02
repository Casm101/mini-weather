import { useState } from 'react';
import { invoke } from '@tauri-apps/api/core';

import { CurrentWeather } from './features/CurrentWeather/CurrentWeather';
import { HourlyWeather } from './features/HourlyWeather/HourlyWeather';

import './App.css';

function App() {
  const [greetMsg, setGreetMsg] = useState('');
  const [name, setName] = useState('');

  async function greet() {
    setGreetMsg(await invoke('greet', { name }));
  }

  return (
    <main className="container">
      <CurrentWeather />
      <HourlyWeather />
    </main>
  );
}

export default App;
