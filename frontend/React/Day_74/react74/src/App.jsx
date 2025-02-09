import { useState,useMemo } from 'react'

import './App.css'

function App() {
  const [count,setCount]=useState(0);
  const [input,setInput]=useState(0);

  function expensiveTask(num,){
    console.log("ho raha hai render");
    for(let i=0;i<1000000000;i++){};
    console.log("Ho gaya render");
    return num*2;
  }

  // let doubleValue=expensiveTask(input);
  let doubleValue =useMemo(()=>expensiveTask(input),[input]);
  

  return (
    
   <div>
      <div>
        <button onClick={()=>setCount(count+1)}>increament</button>
        <br/>
        <br/>
        <p>Count : {count}</p>
      </div>  
      <div>
        <input 
          type="number"
          value={input}

          onChange={(e)=>setInput(e.target.value)}
        />
        <p>Double : {doubleValue}</p>


      </div>
    </div>
  )
}

export default App
