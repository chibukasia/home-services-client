import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context";
import IncidentModal from "../incidents/IncidentModal";

function AppointmentDetails() {
  const { id } = useParams();
  const { appointmentOrders } = useContext(AppContext);
  const appointment = appointmentOrders.find(
    (order) => order.id.toString() === id
  );

  
  if (appointment) {
    console.log(appointment)
    return (
      <div>
        <IncidentModal id={id}/>
        <h2>Plumbing</h2>
        <p>{appointment.user_service.description}</p>
        <h4>Date: {new Date(appointment.appointment_date).toLocaleString()}</h4>
        <h4>Status: {appointment.status.charAt(0).toUpperCase()+ appointment.status.substring(1)}</h4>
        <h4>Quotation: KES {appointment.user_service.quotation}</h4>
        <h4>Service Person details</h4>
        <h4>Name: {`${appointment.user.first_name} ${appointment.user.last_name}`}</h4>
        <h4>Phone: {appointment.user.phone}</h4>
        <h4>Email: {appointment.user.email}</h4>
        <h4>Number of reported incidents: {appointment.incidents ? appointment.incidents.length : 0}</h4>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}

export default AppointmentDetails;
