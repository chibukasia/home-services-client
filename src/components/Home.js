import React, {useEffect, useContext} from 'react'
import { AppContext } from '../context'
import ReviewForm from './reviews/ReviewForm'
import UserServiceCard from './services/UserServiceCard'

function Home() { 
  const {user, services, userServices} = useContext(AppContext)
  useEffect(()=>{
    document.title = "Home"
  })

  const serviceCards = userServices.map(service=>{
    return <UserServiceCard key={service.id} service={service}/>
  })
  return (
    <div className='main'>
      {user ? <h2 className='display-4'>Hello there {user.username}</h2>: <h2>Login</h2>}
      <h2 className='display-4 center' style={{textAlign: "center"}}>Available Services</h2>
      <div className='main-content'>
      {serviceCards}
    </div>
    <ReviewForm/>
    </div>
    
  )
}

export default Home