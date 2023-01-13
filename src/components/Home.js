import React from 'react'

function Home({user}) { 
  return (
    <div>
      {user ? <h2>Hello there</h2>: <h2>Login</h2>}
    </div>
  )
}

export default Home