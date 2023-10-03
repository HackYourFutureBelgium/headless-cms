
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/Card';
import { useState } from 'react';


//const cards = ["Wolf 1", "Wolf  2" ,"Wolf  3" ];


const cards = [
  {backgroundColor:'red', key:'1', title:"Wolf 1"},
  {backgroundColor:'green', key:"2", title:"Wolf 2"},
  {backgroundColor:'yellow', key:"3", title: "Wolf 3"}]

function App() {
  const [message, setMessage] = useState("WEREWOLF PACK");

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

      {/* {cards.map((cardkey) =>(
      <Card key={cardkey}title="Wolf"/>))} */}
      {cards.map(({backgroundColor, key,title}) => (
      <Card backgroundColor={backgroundColor} key={key} title={title}/>))}

      <p>{message}</p>
    

    <button onClick={() => setMessage("UPDATE")}>update</button> 
    
  
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default App;
