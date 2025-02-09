import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  function handleClick(){
     alert("I am clicked");
  }
      
  function handleMouseHover(){
    alert("Bhai para par hover kar diya hai")
  }

  function handleInput(e){
    console.log("Input change :",e.target.value)
  }

  function onSubmit(e){
    e.preventDefault();
    alert("Form submit kardu kya");
  }
  return (
    <div>

      {/* Boom */}
      {/* <button onClick={alert("click hua h")}>     Immediate invoke*/}
      {/* <button onClick={()=>alert("click hua h")}>
        click me
      </button>  */}

   



      {/* <form onSubmit={onSubmit}>
        <input type="text" onChange={handleInput} />
        <button type="submit">Submit</button>
      </form> */}

      <p onMouseOver={handleMouseHover}>Hello , I am paragraph</p>
      <button onClick={handleClick}> 
        click me
      </button>
    </div>
  )
}

export default App
