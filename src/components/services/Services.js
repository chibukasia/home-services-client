import React,{useEffect} from 'react'

function Services() {
  useEffect(()=>{
    document.title = "service"
  })
  return (
    <div>
        <h2>Services</h2>
    </div>
  )
}

export default Services