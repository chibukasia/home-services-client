import React, { useEffect, useState } from "react";

function UserService({services}) {
  const [userService, setUserService] = useState({
    quotation: "",
    location: "",
    description: "",
    service_id: "",
  });

  const token = localStorage.getItem("token");

  function handleChange(e){
    let name = e.target.name 
    let value = e.target.value 
    if (name === "quotation"){
        value = parseInt(value)
        setUserService({...userService, [name]: value})
    }
    setUserService({...userService, [name]: value})
  } 

  function handleSubmit(e){
    e.preventDefault()
    console.log(userService)
    fetch('http://localhost:3000/user_services',{
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userService)
    }).then(res=>{
        if (res.ok){
            res.json().then(data=>console.log(data))
        }else{
            res.json().then(err=>console.log(err))
        }
    })
  }
  useEffect(()=>{
    document.title = "New service"
  })
  return (
    <div className="service-form">
      <form className="form-control p-4 shadow" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="service" className="form-label">
            Select service
          </label>
          <select className="form-select" aria-label="Default select example" name="service_id" id="service" onChange={handleChange}>
            <option defaultValue>Select Service</option>
            {services.map(service=><option key={service.id} value={service.id}>{service.service_name}</option>)}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="quotation" className="form-label">
            Quotation
          </label>
          <input
            type="number"
            className="form-control"
            id="quotation"
            name="quotation"
            placeholder="Enter the payable amount for the servcie"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            placeholder="Enter your address or location"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Service description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="3"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-12 ">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserService;
