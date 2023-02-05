import React, { useContext } from "react";
import { AppContext } from "../../context";
import './appointments.css'

function Appointments() {
  const { appointmentOrders } = useContext(AppContext);
  
  let i = 1;
  const appointmentDisplays = appointmentOrders.map((appointment) => {
    return (
      <tr className="table-dark" key={appointment.id}>
        <th scope="row">{i++}</th>
        <td>Plumbing</td>
        <td>{appointment.created_at}</td>
        <td>{appointment.appointment_date}</td>
        <td>Here</td>
        <td>KES {appointment.user_service.quotation}</td>
        <td>0</td>
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

export default Appointments;
