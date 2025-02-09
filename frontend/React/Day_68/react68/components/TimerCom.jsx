import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
const TimerCom = () => {
    const [seconds,setSeconds]=useState(0);

    useEffect(()=>{
        const intervalid=setInterval(()=>{
            console.log("setInterval executed");
            setSeconds(prevSeconds=>prevSeconds+1);
        },1000);
        
        return()=>{
            console.log("time to stop");
            clearInterval(intervalid);
        };

    },[])
  return (
    <div>
      <h1>Seconds : {seconds}</h1>
    </div>
  )
}

export default TimerCom
