import React,{ createContext, useState } from 'react'
import ChildA from '../components/ChildA';

import './App.css'
// step 1 : create context
// const UserContext=createContext();
const ThemeContext=createContext();
// step 2: Wrap all the child inside a provider
// step 3: consumer k andar jaake consume  karlo

function App() {
  // const [user,setUser]=useState({name:"Karan",age:21});
  const [theme,setTheme]=useState('light');
  return (
    <>
    
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div id="container" style={{backgroundColor:theme==='light'?"beige":"black"}}>
        <ChildA/>
      </div>
    </ThemeContext.Provider>

    {/* <UserContext.Provider value={user}>
      <ChildA/>
    </UserContext.Provider> */}
    </>
  )
}

export default App
export {ThemeContext}
// export {UserContext}
