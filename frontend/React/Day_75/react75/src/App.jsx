import { useCallback, useState } from 'react'

import './App.css'
import ChildComponent from './component/ChildComponent'

function App() {
  const [count, setCount] = useState(0)

  const handleCount=useCallback(()=>{   // Freeze ho gaya
    setCount(count+1);
  },[])

  return (
    <div>
      <div>
        Count : {count}
      </div>
      <br /><br />
      <div>
        <button onClick={handleCount}>
          Increament
        </button>
      </div>
      <br /><br />
      <div>
        <ChildComponent btnName="click" handleCount={handleCount}/>
      </div>
    </div>
  )
}

export default App
