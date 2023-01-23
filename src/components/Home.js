import React from 'react'
import UserService from './services/UserService'

function Home({user}) { 
  return (
    <div>
      <UserService/>
      {user ? <h2>Hello there {user.username}</h2>: <h2>Login</h2>}
    </div>
  )
}

export default Home