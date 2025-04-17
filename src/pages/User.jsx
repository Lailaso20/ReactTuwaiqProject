import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function User() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default User;
