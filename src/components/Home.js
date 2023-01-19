import React from 'react'

function Home({user}) { 
  console.log(user)
  return (
    <div>
      {user ? <h2>Hello there {user.username}</h2>: <h2>Login</h2>}
    </div>
  )
}

export default Home