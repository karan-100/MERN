import React from 'react'
import my_pic from '../photos/my_pic.jpg'
import "./UserCard.css"
// import "../src/App.jsx"
const UserCard = (props) => {
  return (
    <div  className='user-container'>
      <p id="title">{props.name}</p>
      <img id="user-img"  src={my_pic} alt="karan"></img>
      <p id="user-desc">Description of Karan</p>
    </div>
  )
}

export default UserCard
