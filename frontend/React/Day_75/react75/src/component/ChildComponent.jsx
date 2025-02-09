import React from 'react'

const ChildComponeny = React.memo(
  (props) => {
    console.log("Clild re-render ho rha hai")
    return (
      <div>
        <button onClick={props.handleClick}>{props.btnName}</button>
      </div>
    )
  }
);

export default ChildComponeny

// React.memo -> wrap -> component -> component re-render tabhi hoga jab props change honge nhi to re-render nhi hoga

// If u are sending a function ,then React.memo won't able to save you re-rendering 
