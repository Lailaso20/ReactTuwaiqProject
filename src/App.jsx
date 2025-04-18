import { Route, Routes } from "react-router";

import HomePage from "./pages/Home";
import Cart from "./pages/Cart";
import DashBoard from "./pages/Dashboard.jsx";
import User from "./pages/User.jsx";
import Signup from "./pages/Signup.jsx";
import "./App.css";
import Login from "./pages/Login.jsx";
import { Bounce, ToastContainer } from "react-toastify";
import UserList from "./pages/UserList.jsx";
import UpdateUser from "./components/UpdateUser.jsx";
import AddUser from "./components/AddUser.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/dashboard" element={<DashBoard />}></Route>
        <Route path="/user" element={<User />}>
          <Route index element={<UserList />} />
          <Route path="update/:id" element={<UpdateUser />} />
          <Route path="adduser" element={<AddUser />} />
        </Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>

      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </>
  );
}

export default App;
