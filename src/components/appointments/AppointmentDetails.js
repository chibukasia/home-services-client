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
    return (
      <div>
        <h2>Plumbing</h2>
        <IncidentModal id={id} />
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}

export default AppointmentDetails;
