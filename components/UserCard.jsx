import React from 'react'
import "./UserCard.css"
import lion from "../src/assets/lion.jpeg";

const UserCard = (props) => {
  return (
<div className='user-container' style={props.style}>
        <p className='user-name'>{props.name}</p>
        <img id="user-img" src={lion} alt="lion" ></img>
        <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default UserCard
