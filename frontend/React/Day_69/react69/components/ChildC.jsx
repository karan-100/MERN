import React, { useContext } from 'react'
// import {UserContext} from '../src/App'
import { ThemeContext } from '../src/App';
const ChildC= () => {
  // const user=useContext(UserContext);
  const {theme,setTheme}=useContext(ThemeContext);
  function handleClick(){
    if(theme==='light'){
      setTheme('dark');
      // document.getElementById('container').style.backgroundColor="black";
    }
    else{
      setTheme('light');
      // document.getElementById('container').style.backgroundColor="beige";
    }
  }
  return (
    <div>
      <button onClick={handleClick}>
        Change Theme
      </button>

      {/* Name : {user.name}
      Age  : {user.age} */}
    </div>
  )
}

export default ChildC
