import React, { useState } from "react";

import { useNavigate } from "react-router";
import { Bounce, toast } from "react-toastify";

function Signup() {
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    status: "",
    city: "",
  });

  const navigate = useNavigate();

  const notify = () =>
    toast("Signup Success!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });

  const handleFrom = (e) => {
    e.preventDefault();
    notify();
    console.log(FormData);

    navigate("/dashboard");

    /*   if (email === "m@m.com" && password === "123") {
      notify();
      navigate("/dashboard");
    } else {
      console.log("Login failed!!!");
      return;
    } */

      
    // send data to backend;
  };

  return (
    <>
      <div className="content">
        <div className="card-container">
          <div className="card mt-5 card-style">
            <h1 className="text-center">Register </h1>
            <form onSubmit={handleFrom}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Name
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="exampleInputName"
                  aria-describedby="nameHelp"
                  value={FormData.name}
                  onChange={(e) => {
                    setFormData((prev) => ({ ...prev, name: e.target.value }));
                  }}
                />
                <div id="nameHelp" className="form-text">
                  {" "}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={FormData.email}
                  onChange={(e) => {
                    setFormData((prev) => ({ ...prev, email: e.target.value }));
                  }}
                />
                <div id="emailHelp" className="form-text">
                  {" "}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={FormData.password}
                  onChange={(e) => {
                    setFormData((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }));
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="citySelect" className="form-label">
                  City{" "}
                </label>
                <select
                  id="citySelect"
                  className="form-select"
                  value={FormData.city}
                  onChange={(e) => {
                    setFormData((prev) => ({ ...prev, city: e.target.value }));
                  }}
                >
                  <option>Select City</option>
                  <option>Riyadh</option>
                  <option>Jeddah</option>
                </select>
              </div>

              <div className="form-check ">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value={FormData.status}
                  onChange={(e) => {
                    setFormData((prev) => ({
                      ...prev,
                      status: e.target.value,
                    }));
                  }}
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  Employee
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value={FormData.status}
                  onChange={(e) => {
                    setFormData((prev) => ({
                      ...prev,
                      status: e.target.value,
                    }));
                  }}
                />
                <label className="form-check-label" htmlFor="exampleRadios2">
                  Student
                </label>
              </div>

              <br></br>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
