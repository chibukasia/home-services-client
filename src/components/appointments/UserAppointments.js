import React, { useContext } from 'react'
import { AppContext } from '../../context'

function UserAppointments() {
  const {user, users, appointmentOrders, services} = useContext(AppContext)
  const userAppointments = appointmentOrders.filter(appointment=>appointment.user.id === user.id)
  
  let i = 1;
  const appointmentDisplays = userAppointments.map((appointment) => {
    const servicePerson = users.find(user=>user.id === appointment.user_service.user_id)
    const service = services.find(service=>service.id === appointment.user_service.service_id)
    return (
      <tr className="table-dark" key={appointment.id}>
        <th scope="row">{i++}</th>
        <td>{service.service_name}</td>
        <td>{new Date(appointment.created_at).toDateString()}</td>
        <td>{new Date(appointment.appointment_date).toDateString()}</td>
        <td>{`${servicePerson.full_name}`}</td>
        <td>KES {appointment.user_service.quotation}</td>
        <td>{appointment.incidents ? appointment.incidents.length : 0}</td>
        <td>{appointment.status}</td>
        <td><a href={`/appointments/${appointment.id}`} className="btn btn-success">View details</a></td>
      </tr>
    );
  });
  return (
    <div className="appointment-table overflow-auto">
      <table className="table table-striped table-hover">
        <thead>
          <tr className="table-dark">
            <th scope="col">#</th>
            <th scope="col">Service</th>
            <th scope="col">Created</th>
            <th scope="col">Date</th>
            <th scope="col">Service Person</th>
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

export default UserAppointments