import { useState } from 'react'
import './App.css'
import Card from '../components/Card'
function App() {

  // create state
  // manage state
  // change state 
  // sabhi child me state ko sync karwadunga
  const [name, setName]=useState('');

  return (
    <div>
      <Card name={name} setName={setName}  />
      <br/>
      <p>Name state variable  ki value inside parent component : {name}</p>
    </div>  
  )
}

export default App
