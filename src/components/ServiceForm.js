import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function ServiceForm() {
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState("");
  const [service, setService] = useState({
    service_name: "",
    description: "",
  });

  const token = localStorage.getItem("token");
  // Get the user service
  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setService({ ...service, [name]: value });
  }

  // Submit form data
  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3000/services", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(service),
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          console.log(data);
          setSuccess("Service Added successfully");
        });
      } else {
        response.json().then((err) => setErrors(err.errors));
      }
    });
  }
  return (
    <div className="service-form">
      <h1 className="display-4 h-1">Add a new service</h1>
      <form className="form-control p-4 shadow" onSubmit={handleSubmit}>
        {<p style={{ color: "green" }}>{success}</p>}
        {errors.map((error) => {
          return (
            <div
              className="alert alert-warning alert-dismissible fade show"
              role="alert"
              key={error}
            >
              <strong>{error}!</strong> 
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          );
        })}
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Service name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="service_name"
            placeholder="Enter the service name here"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Service description
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="description"
            required
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-12 d-grid">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ServiceForm;
