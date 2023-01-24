import React, {useEffect} from 'react'
import UserService from './services/UserService'

function Home({user, services}) { 
  useEffect(()=>{
    document.title = "Home"
  })
  return (
    <div>
      <UserService services={services}/>
      {user ? <h2>Hello there {user.username}</h2>: <h2>Login</h2>}
    </div>
  )
}

export default Home