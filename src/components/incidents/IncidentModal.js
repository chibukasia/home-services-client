import React, {useState} from 'react'

function IncidentModal({id}) {
  const token  = localStorage.getItem('token')

  // const [formData, setFormData] = useState({
  //   incident_name: "",
  //   incident_location: "",
  //   incident_description: "",
  //   appointment_order_id: parseInt(id),
  //   resolved: false,
  // });
  const formData = new FormData()
  function handleChange(e) {
    // let name = e.target.name;
    // let value = e.target.value;

    // setFormData({ ...formData, [name]: value });
  }

  

  function handleSubmit(e){
    e.preventDefault()
    formData.append('incident[incident_name]', e.target.incident_name.value)
    formData.append('incident[incident_location]', e.target.incident_location.value)
    formData.append('incident[incident_description]', e.target.incident_description.value)
    formData.append('incident[appointment_order_id]', parseInt(id))
    formData.append('incident[resolved]', false)
    let newFiles = e.target.evidences.files
    for (let file of newFiles){
      formData.append('incident[evidences][]', file, file.name)
    }
    // console.log(formData.getAll('evidences'))
    fetch("http://localhost:3000/incidents",{
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: formData
    }).then(res=>{
        if(res.ok){
            res.json().then(console.log)
        }else{
            res.json().then(console.log)
        }
    })
    .catch(error=>console.log(error))
  }
  return (
    <div>
      <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Report An Incident
        </button>

        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
          style={{ color: "black" }}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Fill this form to report an incident
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form className="form-control" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="col-form-label" htmlFor="incident-name">
                      Incident title or name
                    </label>
                    <input
                      type="text"
                      name="incident_name"
                      id="incident-name"
                      placeholder="Enter the incident name or title"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="col-form-label" htmlFor="location">
                      Location of the incident
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="incident_location"
                      id="location"
                      placeholder="Enter the location where the incident happened"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="col-form-control" htmlFor="description">
                      Describe the incident
                    </label>
                    <textarea
                      className="form-control"
                      name="incident_description"
                      id="description"
                      placeholder="Describe in details what happened"
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="file"
                      name='evidences'
                      className="form-control"
                      id="file-upload"
                      multiple
                    />
                    <label className="input-group-text" htmlFor="file-upload">
                      upload
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default IncidentModal