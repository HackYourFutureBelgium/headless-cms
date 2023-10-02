import { useState } from 'react';

const Card = ({title}) => {
    const [count, setCount] = useState(0);
    console.log('RENDER Card')

    return (
 <div className="card" >
    <h3>{title}</h3>
        <button 
        onClick={() =>{
            console.log("CLICK");
            console.log(count);
            //count++
           setCount( count + 1); 
           }}
           >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    );
};









export default Card;