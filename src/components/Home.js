import React, {useEffect, useContext} from 'react'
import { AppContext } from '../context'
import Profile from './profiles/Profile'
import UpdateProfile from './profiles/UpdateProfile'
import AddTerm from './terms_and_conditions/AddTerm'

function Home() { 
  const {user, services} = useContext(AppContext)
  useEffect(()=>{
    document.title = "Home"
  })
  return (
    <div className='main'>
      {user ? <h2>Hello there {user.username}</h2>: <h2>Login</h2>}
      <AddTerm/>
    </div>
  )
}

export default Home