
import './App.css'
import {useDispatch, useSelector} from "react-redux"
import { decrement, increment, incrementByAmount, reset } from './fratures/counter/counterSlice';
import { useState } from 'react';


function App() {
  const [amount,setAmount]=useState(0);
  const count=useSelector((state)=>state.counter.value);
  const dispatch=useDispatch();

  function handleIncreamentClick(){
    dispatch(increment());
  }
  function handleDecreamentClick(){
    dispatch(decrement());
  }
  function handleResetClick(){
    dispatch(reset());
  }
  function handleAmountClick(){
    dispatch(incrementByAmount(amount));
  }
  return (
    <div className='container'>
      <button onClick={handleIncreamentClick} >+</button>
      <br/>
      <h2>Count : {count}</h2>
      <br/>
      <button  onClick={handleDecreamentClick}>-</button>
      <br/><br/>
      <button  onClick={handleResetClick}>reset</button>
      <br/><br/>
      <input type='Number' 
      value={amount} 
      placeholder='Enter Amount' 
      onChange={(e)=>setAmount(e.target.value)}
      />

      <br /><br />
      <button  onClick={handleAmountClick}>Amount</button>
    </div>
  )
}

export default App
