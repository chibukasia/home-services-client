import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context'
import './appointments.css'

function AppointmentForm() {
  const params = useParams()
  const {userServices} = useContext(AppContext)
  const service = userServices.find(userService=> userService.id.toString() === params.id)
  let fullName = ''

  if (service){
  fullName = `${service.user.first_name.charAt(0).toUpperCase() + service.user.first_name.substring(1)} 
                    ${service.user.last_name.charAt(0).toUpperCase() + service.user.last_name.substring(1)}`
  return (
    <div className='appointment'>
        <div className=''>
            <h2 className='display-6'>Appointment Details</h2>
            <h4 className='display-6'>Service Details</h4>
            <div>
                <h4>{service.service.service_name}</h4>
                <h4>General service description</h4>
                <p>{service.service.description}</p>
            </div>
            <div>
                <h4>Service specific description</h4>
                <p>{service.description}</p>
                <h5>Amount: Ksh {service.quotation}</h5>
                <h5>Service location: {service.location}</h5>
                <h6 className=''>Available form: {service.start_time} Am</h6>
                <h6>Ends services at: {service.end_time} Pm</h6>
            </div>
        </div>
        <div className=''>
            <h2 className='display-6'>Service Person Details</h2>
            <h5>Name: {fullName}</h5>
            <h5>Email: {service.user.email}</h5>
            <h5>Phone: {service.user.phone}</h5>
            <h5>Address: {service.user.address}</h5>
            <p>Ratings: </p>
        </div>
        <div className='service-form'>
            <h2 className='display-6'>Make Appointment</h2>
            <form className='form-control'>
                <div className='mb-3'>
                    <label htmlFor='date' className='form-label'>Select Date</label>
                    <input type='datetime-local' className='form-control' rows='3' id='date' name='date'/>
                </div>
                <div className='col-12 d-grid'>
                    <button type='submit' className='btn btn-primary'> Make Appointment</button>
                </div>
            </form>
        </div>
    </div>
  )
  }else{
    return(<div className='spinner-border" role="status"'><span className="visually-hidden">Loading...</span></div>)  
  }
}

export default AppointmentForm