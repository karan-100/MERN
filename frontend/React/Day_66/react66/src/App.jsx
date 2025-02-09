import { useState } from 'react'
import Logoutbtn from '../components/Logoutbtn';
import Loginbtn from '../components/Loginbtn';










function App() {

const [isLogin,setLogin]=useState(true);

if(!isLogin){
  return(
    <Loginbtn/>
  )
}

return(
  <div>
    <h1>Welcome to my profile</h1>
    <div>
      {isLogin && <Logoutbtn/>}
    </div>
  </div>
)

// return(
//   <div>
//     {isLogin?<Logoutbtn/>:<Loginbtn/>}
//   </div>
// )

// if(isLogin){
//   return(
//     <Logoutbtn />
//   )
// }
// else{
//   return(
//     <Loginbtn />
//   )
// }

  //   return(
//     <div>
//       Hello jee
//     </div>
//   )
// }
}
export default App