import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Bounce, toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const el = useRef(null);

  const notify = () => toast ("Login Success!", { theme: "colored", transition: Bounce });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields!");
      return;
      
      }
      notify();
      navigate("/dashboard");
      
    // if (email === "m@m.com" && password === "123") {
    //   
    //   
    // } else {
    //   console.log("Login failed!!!");
    //   return;
    // }
    // send data to backend;
    el.current = email;
  };
  useEffect(() => {
    el.current = email;
  }, [email]);
  return (
    <>
      <div className="content">
        <div className="card-container">
          <div className="card mt-5 card-style">
            <h1 className="text-center">Login </h1>
            <form onSubmit={handleFormSubmit}>
              <p>{el.current}</p>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
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
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
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

export default Login;
