import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

function ReviewForm() {
  const [data, setData] = useState({
    user_service_id: 2,
  })

  const token = localStorage.getItem('token')
  function handleChange(e){
    let name = e.target.name 
    let value = e.target.value

    setData({...data, [name]: value})
  } 

  function handleSubmit(e){
    e.preventDefault()
    fetch("http://localhost:3000/reviews", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    .then((res)=>{
        if(res.ok){
            res.json().then(console.log)
        }else{
            res.json().then(console.log)
        }
    })
    .catch((error)=>console.log(error))
  }
  return (
    <div>
      <form className="form-control" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="col-form-label" htmlFor="rating">
            Rate the service
          </label>
          <Stack spacing={1}>
            <Rating name="rating" defaultValue={2.5} precision={0.5} onChange={handleChange}/>
            {/* <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> */}
          </Stack>
        </div>
        <div className="form-control">
          <label className="col-form-label" htmlFor="comment">
            Comment
          </label>
          <textarea 
            onChange={handleChange}
            className="form-control"
            id="comment"
            name="comment"
          ></textarea>
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReviewForm;
