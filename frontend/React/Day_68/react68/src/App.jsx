import { useEffect } from 'react'
import './App.css'
import { use } from 'react'
import { useState } from 'react'
import TimerCom from '../components/TimerCom'
import DataFetcher from '../components/DataFetcher'
import ResizeCom from '../components/ResizeCom'

function App() {
  const [count,setCount]=useState(0);
  const [total,setTotal]=useState(1);

  // first -> side-useEffect function
  // secnond -> clean-up function
  // third -> comma separated dep list

  // variation 1 
  // runs on every render
  // useEffect(()=>{
  //   alert("I will run on every render")  // 2-times
  // })

  // variation 2 : 
  // that runs only first render

  // useEffect(()=>{
  //   alert("I will run only on first rendering")
  // },[])

  // variation 3 :
   // useEffect(()=>{
  //   alert("I will run every time when count is updated ")
  // },[count])


  // variation 4: 
  // multiple dependencies

  useEffect(()=>{
    alert("I will run every time when count/total is updated");
  },[count , total])

  // variation 5:
  //Add cleanup function

  // useEffect(()=>{
  //   alert("Count is updated"); 

  //   return ()=>{
  //     alert("Count is unmounted");
  //   }
  // },[count])

  function handleCount(){
    setCount(count+1);
  }

  function handleTotal(){
    setTotal(total+2);
  }
  return (
    <div>

      {/* <TimerCom/> */}

      {/* <DataFetcher/> */}

      {/* <ResizeCom/> */}

      

      <button onClick={handleCount}>
        click me 
      </button>
      <p>Click count : {count}</p>
      <br/>
      <button onClick={handleTotal}>
        click me 
      </button >
      <p>Total count : {total}</p>
    </div>
  )
}

export default App
