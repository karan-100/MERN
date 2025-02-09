import {useState} from 'react'
import React from 'react'
import "./Counter.css"
const Counter = () => {
    const [count,setCount]=useState(0);
  return (
    <div className='counter-container'>
      <p id='para'>You clicked {count} times</p>
      <button id='btn' onClick={()=>{setCount(count+1)}}>Click me</button>
    </div>
  )
}

export default Counter
