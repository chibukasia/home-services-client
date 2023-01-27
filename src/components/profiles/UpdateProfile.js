import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context";

function UpdateProfile() {
  const [userProfile, setUserProfile] = useState({
    first_name: "",
    last_name: "",
    email: "",
    role: "",
    phone: "",
    address: "",
  });
  const { user } = useContext(AppContext);
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (user) {
      setUserProfile(user);
    }else{
        console.log("Finding user")
    }
  }, [user]);

  function handleChange(e) {}
  console.log(userProfile);
  if (user) {
    const fullName = `${
      user.first_name.charAt(0).toUpperCase() + user.first_name.substring(1)
    } ${user.last_name.charAt(0).toUpperCase() + user.last_name.substring(1)}`;
    return (
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
              />
              <span className="font-weight-bold">{fullName}</span>
              <span className="text-black-50">{user.email}</span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="first name"
                    value={userProfile.first_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={userProfile.last_name}
                    placeholder="surname"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Mobile Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter phone number"
                    value={userProfile.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter address line 1"
                    value={userProfile.address}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mt-5 text-center">
                <button
                  className="btn btn-primary profile-button"
                  type="button"
                >
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    <h3>Loading...</h3>;
  }
}

export default UpdateProfile;
