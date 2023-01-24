import React, {useEffect, useContext} from 'react'
import UserService from './services/UserService'
import { AppContext } from '../context'

function Home() { 
  const {user, services} = useContext(AppContext)
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