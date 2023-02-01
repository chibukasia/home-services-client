import React from 'react'
import './services.css'
import plumbing from '../../images/plumbing.jpg'

function UserServiceCard({service}) {

  const fullName = `${service.user.first_name.charAt(0).toUpperCase() + service.user.first_name.substring(1)} 
                    ${service.user.last_name.charAt(0).toUpperCase() + service.user.last_name.substring(1)}`
  return (
    <div className='card shadow'>
        <img src={plumbing} className='card-img-top img-fluid' style={{height: "230px"}}/>
        <h3 className='display-6'>{service.service.service_name}</h3>
        <h5>Ksh {service.quotation}</h5>
        <p className=''>{service.description}</p>
        <h6>Service person: {fullName}</h6>
        <h6 className=''>Available form: {service.start_time} Am</h6>
        <h6>Ends services at: {service.end_time} Pm</h6>
        <a href='#' className='btn btn-primary stretched-link'>Make appointment</a>
    </div>
  )
}

export default UserServiceCard