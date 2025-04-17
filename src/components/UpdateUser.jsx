import axios from "axios";
import React, { useState, useEffect } from "react";  
import { useNavigate, useParams } from "react-router";
import { Bounce, toast } from "react-toastify";


function UpdateUser() {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const { id } = useParams(); // نجيب الايدي اللي موجود في اللنك 

  useEffect(() => { //لأن البيانات تتغير كل ماتغير الايدي
    const fetchUser = async () => {
      const res = await axios.get(`http://localhost:3000/users/${id}`);
      setUserData(res.data); //  تعبي الفورم بالبيانات القديمة
    };
    fetchUser();
  }, [id]); 

  const handleUpdateUser = async (e) => { // لما اضغط سبمت نرسل طلب للباك اند فيه اليوزر داتا المعدلة
    e.preventDefault();
    await axios.put(`http://localhost:3000/users/${id}`, userData);
    toast.success("User updated successfully", {
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
    navigate("/user"); // بعد التعديل بيحولنا لصفحة اليوزر ليست 
  };

  return (
    <div className="container mt-5 mx-24">
      <div>
        <form onSubmit={handleUpdateUser}>
          <h1>Edit User</h1>
          <div className="mb-3">
            <label htmlFor="exampleInputUsername" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputUsername"
              value={userData.username || ""} // لو ماكان فيه قيمة راح يرجع لنا فاضي 
              onChange={(e) => {
                setUserData((prev) => ({
                  ...prev,
                  username: e.target.value,
                }));
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
              value={userData.name || ""}
              onChange={(e) => {
                setUserData((prev) => ({
                  ...prev,
                  name: e.target.value,
                }));
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
              value={userData.email || ""}
              onChange={(e) => {
                setUserData((prev) => ({
                  ...prev,
                  email: e.target.value,
                }));
              }}
              disabled
            />
          </div>

          <button type="submit" className="btn btn-primary my-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
