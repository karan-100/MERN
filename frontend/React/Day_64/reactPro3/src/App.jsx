
import './App.css'
import Card from '../component/Card'
import Button from '../component/Button'
import { useState } from 'react'
function App() {

  const [count,setCount]=useState(0);

  function handleCount(){
    setCount(count+1);
  }
  
  return (
    // <div>
    //   <Card name="Karan Sharma">
    //     <h2>Hello Everyone</h2>
    //     <p>I am learning props as a children and function</p>
    //   </Card>
    //   <Card children="Mai ek clildren hu">
    //     Hello jee kaise ho sare
    //   </Card>
    // </div>
    <div>
      <Button handleCount={handleCount} text="Click me">
        <h1>{count}</h1>
      </Button>
    </div>
  )
}

export default App
