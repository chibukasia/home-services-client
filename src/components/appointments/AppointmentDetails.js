import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context";
import IncidentModal from "../incidents/IncidentModal";
import ReviewForm from '../reviews/ReviewForm'
// import profile from '../../images/profile.jpg'

function AppointmentDetails() {
  const { id } = useParams();
  const token = localStorage.getItem('token')
  const { appointmentOrders, users, services, user } = useContext(AppContext);
  const appointment = appointmentOrders.find(
    (order) => order.id.toString() === id
  );

  function handleReject(){
    fetch(`http://localhost:3000/appointment_orders/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({status: "rejected"})
    })
    .then(res=>{
      if(res.ok){
        res.json().then(console.log)
      }else{
        res.json().then(console.log)
      }
    })
    .catch(error=>console.log(error))
  }
  
  function handleAccept(){
    fetch(`http://localhost:3000/appointment_orders/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({status: "accepted"})
    })
    .then(res=>{
      if(res.ok){
        res.json().then(console.log)
      }else{
        res.json().then(console.log)
      }
    })
    .catch(error=>console.log(error))
  }
  const profile =
    "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=";
  if (appointment && user) { 
    let person = user;
    if ( user.role == "service person"){
      person = users.find(
        (user) => user.id === appointment.user.id
      );
    }else{
      person = users.find(
        (user) => user.id === appointment.user_service.user_id
      );
    }
    const service = services.find(
      (service) => service.id === appointment.user_service.service_id
    );
    return (
      <div className="appointment">
        <IncidentModal id={id} />
        {user.role === "service person" ? (
          <><button onClick={handleAccept} className="btn btn-primary">Accept</button><button onClick={handleReject} className="btn btn-primary">Reject</button></>
        ): null}
        <div className="appointment-card">
          <div className="profile">
            <div className="d-flex flex-column align-items-center text-center">
              <img
                src={person.profile.image_url ? person.profile.image_url : profile}
                alt="Admin"
                className="rounded-circle"
                width="150"
              />
              <div className="col-sm-6">
                {/* <h4 className="mb-0">Service Person details</h4> */}
              </div>
              <div className="mt-3">
                <p className="text-secondary mb-1">
                  {person.role === "regular" ? "Home Owner": "Service Person"}
                </p>
                <p className="text-muted font-size-sm">{person.address}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Full Name</h6>
              </div>
              <div className="col-sm-9 text-secondary">{person.full_name}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Email</h6>
              </div>
              <div className="col-sm-9 text-secondary">{person.email}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Phone</h6>
              </div>
              <div className="col-sm-9 text-secondary">{person.phone}</div>
            </div>
            <hr />
          </div>
          <div className="appointment-details card-body">
          <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Service Name</h6>
              </div>
              <div className="col-sm-9 text-secondary">{service.service_name}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Service Description</h6>
              </div>
              <div className="col-sm-9 text-secondary">{appointment.user_service.description}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Appointment Date</h6>
              </div>
              <div className="col-sm-9 text-secondary">{new Date(appointment.appointment_date).toLocaleString()}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Status</h6>
              </div>
              <div className="col-sm-9 text-secondary">{appointment.status.charAt(0).toUpperCase() +
                appointment.status.substring(1)}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Quotation</h6>
              </div>
              <div className="col-sm-9 text-secondary">KES {appointment.user_service.quotation}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Incidents Reported</h6>
              </div>
              <div className="col-sm-9 text-secondary">{appointment.incidents ? appointment.incidents.length : 0}</div>
            </div>
            <hr />
          </div>
        </div>
        <ReviewForm/>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}

export default AppointmentDetails;
