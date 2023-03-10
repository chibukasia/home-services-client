import React, {useContext, useEffect, useRef}from 'react'
import { AppContext } from "../../context";

function ServicePersonAppointments() {
  const heightRef = useRef()
  const { user, appointmentOrders, users, services } = useContext(AppContext);
  const userAppointments = appointmentOrders.filter(appointment=>appointment.user_service.user_id === user.id)
  let i = 1;
  const appointmentDisplays = userAppointments.map((appointment) => {
    const service = services.find(service=>service.id === appointment.user_service.service_id)
    return (
      <tr className="table-dark" key={appointment.id}>
        <th scope="row">{i++}</th>
        <td>{service.service_name}</td>
        <td>{new Date(appointment.created_at).toDateString()}</td>
        <td>{new Date(appointment.appointment_date).toDateString()}</td>
        <td>{`${appointment.user.full_name}`}</td>
        <td>KES {appointment.user_service.quotation}</td>
        <td>{appointment.incidents ? appointment.incidents.length : 0}</td>
        <td>{appointment.status}</td>
        <td><a href={`/appointments/${appointment.id}`} className="btn btn-success">View details</a></td>
      </tr>
    );
  });

  let veiwHeight = 100
  useEffect(()=>{
    if (heightRef.current.clientHeight <= 100 * 19.2){
      veiwHeight = 100
    }
    console.log(heightRef.current.clientHeight)
  },[])
  
  return (
    <div className="appointment-table overflow-auto" ref={heightRef} style={{height: veiwHeight==100? `${veiwHeight}vh`: `${veiwHeight}%`}}>
      <table className="table table-striped table-hover">
        <thead>
          <tr className="table-dark">
            <th scope="col">#</th>
            <th scope="col">Service</th>
            <th scope="col">Created</th>
            <th scope="col">Date</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Amount</th>
            <th scope="col">No of Incidents</th>
            <th scope="col">Status</th>
            <th scope="col">Details</th>
          </tr>
        </thead>
        <tbody>
        {appointmentDisplays}
        </tbody>
      </table>
      
    </div>
  );
}

export default ServicePersonAppointments