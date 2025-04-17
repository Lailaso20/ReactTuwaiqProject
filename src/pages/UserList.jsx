import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router";
import { Link } from "react-router";



const UserList = () => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:3000/users");
    const usersData = res.data;
    setUsers(usersData);
  };

  const DeleteFromList = async (id) => {
    const res = await axios.delete(`http://localhost:3000/users/${id}`);
    MySwal.fire("User Deleted !");
    fetchUsers(); 
  };

  useEffect(() => {
    fetchUsers();
  }, [users]);

  function AddNewUser() {
    navigate("/user/adduser");
  }

  function UpdateUser() {
    navigate("/user/update");
  }

  return (
    <div className="py-5">
      <div className="container p-5 bg-white rounded">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold text-black">Users List</h2>
          <Link to="/user/adduser" className="btn btn-success">
            + Add New User
          </Link>
        </div>

        <div className="table">
          <table className="table text-center align-middle">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user) => {
                return (
                  <tr key={user.id}>
                    <th>{user.id}</th>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                      <div className="d-flex justify-content-center gap-2">
                        <button
                          onClick={() => navigate(`/user/update/${user.id}`)}
                          className="btn btn-info btn-sm"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => DeleteFromList(user.id)}
                          className="btn btn-danger btn-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;