import { useState } from 'react'

import './App.css'

function App() {
  const [userData, setUserData] = useState({name: '', email: '', password: ''});
  async function handleClick(e){
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <h1>Sign up</h1>
      <form>
        <input
        onChange={(e) => setUserData({...userData, name: e.target.value})}   
        type="text" placeholder="Username" /><br  /><br  />
        <input 
        onChange={(e) => setUserData({...userData, email: e.target.value})}
        type="email" placeholder="Email" /><br  /><br  />
        <input
        onChange={(e) => setUserData({...userData, password: e.target.value})} 
        type="password" placeholder="Password" /><br  /><br  />
        <button onClick={handleClick}>Sign up</button>
      </form>
    </div>
  )
}

export default App
