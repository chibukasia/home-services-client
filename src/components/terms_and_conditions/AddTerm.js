import React, { useState } from "react";

function AddTerm() {
  const [description, setDescription] = useState('')
  const token = localStorage.getItem('token')
  function handleChange(e){
    setDescription(e.target.value)
  } 

  async function handleSubmit(e){
    e.preventDefault()
    await fetch('http://localhost:3000/terms_and_conditions', {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({description})
    })
    .then(res=>{
        if (res.ok){
            res.json().then(data=>console.log(data))
        }else{
            res.json().then(err=>console.log(err))
        }
    })
    .catch(err=>{
        console.error(`There has been an error of ${err}`)
    })
  }

  return (
    <div className="service-form">
      <h2 className="display-2"> Add Terms and Conditions</h2>
      <form className="form-control" onSubmit={handleSubmit}>
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
