// import { invoke } from '@tauri-apps/api/core';
import { Router } from './pages/Router';

import './App.css';

function App() {
  // const [greetMsg, setGreetMsg] = useState('');
  // const [name, setName] = useState('');

  // async function greet() {
  //   setGreetMsg(await invoke('greet', { name }));
  // }

  return (
    <main className="appContainer">
      <Router />
    </main>
  );
}

export default App;
