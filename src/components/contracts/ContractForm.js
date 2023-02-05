import React from "react";

function ContractForm() {
  return (
    <div className="service-form">
      <h2 className="display-6">Sign Contract</h2>
      <form className="form-control">
        <div className="form-control">
          <label className="col-form-label" htmlFor="title">
            Contract Title
          </label>
          <input
            type="text"
            className="form-control"
            name="title"
            id="title"
            placeholder="Enter the title of the contract"
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
          />
        </div>
        <div className="input-group mb-3">
          <input type="file" className="form-control" id="file-upload" />
          <label className="input-group-text" htmlFor="file-upload">
            upload copy of ID 
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContractForm;
