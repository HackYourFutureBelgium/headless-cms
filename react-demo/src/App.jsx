
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/Card';
import { useState } from 'react';


const cards = [1, 2, 3,];

function App() {
  const [message, setMessage] = useState("bloodhound");

  console.log('RENDER APP');
 
 
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {cards.map((cardkey) =>(
      <Card key={cardkey}title="Wolf"/>))}

      <p>{message}</p>
    <button onClick={() => setMessage("UPDATE")}>update</button> 
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default App;
