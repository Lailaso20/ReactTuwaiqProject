import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

function AddUser() {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  function AddNewUser(e) {
    e.preventDefault();
    const addUser = async () => {
      // Send the userData as post request
      await axios.post("http://localhost:3000/users", userData);
      toast.success("User added successfully");
      navigate("/user");
    };
    addUser();
  }

  return (
    <div className="container mt-5 mx-24">
      <div>
        <form onSubmit={AddNewUser}>
          <h1>Add User</h1>
          <div className="mb-3">
            <label htmlFor="exampleInputUsername" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputUsername"
              value={userData.username}
              onChange={(e) => {
                setUserData((prev) => {
                  return {
                    ...prev,
                    username: e.target.value,
                  };
                });
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              value={userData.name}
              onChange={(e) => {
                setUserData((prev) => {
                  return {
                    ...prev,
                    name: e.target.value,
                  };
                });
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail"
              value={userData.email}
              onChange={(e) => {
                setUserData((prev) => {
                  return {
                    ...prev,
                    email: e.target.value,
                  };
                });
              }}
            />
            <button type="submit" className="btn btn-primary my-4">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddUser;