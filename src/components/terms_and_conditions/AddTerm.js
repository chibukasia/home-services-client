import React, { useState, useContext, useRef } from "react";
import { AppContext } from "../../context";

function AddTerm() {
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState('')
  const token = localStorage.getItem("token");
  function handleChange(e) {
    setDescription(e.target.value);
  }

  const formRef = useRef()
  const {terms, setTerms} = useContext(AppContext)

  async function handleSubmit(e) {
    e.preventDefault();
    await fetch("http://localhost:3000/terms_and_conditions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description }),
    })
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            setTerms([...terms, data])
            setSuccess("Terms and Conditions added successfuly")
            formRef.current.reset()
          }
          )
            
        } else {
          res.json().then((err) => setErrors(err.errors));
        }
      })
      .catch((err) => {
        console.error(`There has been an error of ${err}`);
      });
  }

  return (
    <div className="service-form">
      <h2 className="display-2"> Add Terms and Conditions</h2>
      {success ? (
      <div
            className="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            <strong>{success}</strong> 
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
        </div>
      ):(null)}
      {errors.map((error) => {
        return (
          <div
            className="alert alert-warning alert-dismissible fade show"
            role="alert"
            key={error}
          >
            <strong>{error}</strong> 
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        );
      })}
      <form className="form-control" onSubmit={handleSubmit} ref={formRef}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Enter the terms and conditions here
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Terms and conditions"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Confirm identity
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTerm;
