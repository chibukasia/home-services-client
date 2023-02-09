import React, { useState } from "react";

function ContractForm() {
  const token = localStorage.getItem('token')
  // const [formData, setFormData] = useState({})
  const formData = new FormData()

  function handleChange(e){

  }

  function handleSubmit(e){
    e.preventDefault()
    formData.append('title', e.target.title.value)
    formData.append('description', e.target.description.value)
    formData.append('period', e.target.period.value)
    formData.append('monthly_pay', e.target.monthly_pay.value)
    formData.append('id_number', e.target.id_number.value)
    formData.append('id_copy', e.target.id_copy.files[0])

    console.log(formData.get('id_copy'))
    fetch("http://localhost:3000/user_contracts", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formData
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
  return (
    <div className="service-form">
      <h2 className="display-6">Sign Contract</h2>
      <form className="form-control" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="col-form-label" htmlFor="title">
            Contract Title
          </label>
          <input
            type="text"
            className="form-control"
            name="title"
            id="title"
            placeholder="Eg House Maid"
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label className="col-form-label" htmlFor="description">
            Contract details
          </label>
          <textarea
            className="form-control"
            name="description"
            id="description"
            placeholder="Describe your contract and why you want to join the workforce"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-control">
          <label className="col-form-label" htmlFor="period">
            Enter contract period
          </label>
          <input
            type="number"
            className="form-control"
            name="period"
            id="periond"
            placeholder="Enter the number of months you wish to sign for a contract"
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label className="col-form-label" htmlFor="pay">
            Enter month pay
          </label>
          <input
            type="number"
            className="form-control"
            name="monthly_pay"
            id="pay"
            placeholder="Enter the amount you expect to be paid per month"
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label className="col-form-label" htmlFor="id_number">
            Enter ID Number
          </label>
          <input
            type="number"
            className="form-control"
            name="id_number"
            id="id_number"
            placeholder="Enter your ID number"
            onChange={handleChange}
          />
        </div>
        <div className="form-control mb-3">
          <label className="col-form-label" htmlFor="file-upload">
            Upload copy of ID 
          </label>
          <input type="file" className="form-control" id="file-upload" name="id_copy"/>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContractForm;
