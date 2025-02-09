import UserCard from "../components/UserCard"
import "./App.css"
function App() {
  return (
    <div className="container">
      <UserCard name='Karan Sharma'/>
      <UserCard name='Maharana Pratap'/>
      <UserCard name='Prithviraj Chauhan'/>
    </div>
  )
}

export default App
