import React from 'react'
import {useNavigate} from 'react-router-dom'
  
const Home = () => {
   const Navigate = useNavigate()
   const move = () => {
      Navigate('/')
   }

  return (
      <div className='home'>
         <h1>Welcome to the Home Page</h1>
         <p>You are successfully registered to our app</p>
         <button onClick={move}>Click to go to Registration page </button>
      </div>
  )
}

export default Home