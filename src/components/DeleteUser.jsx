/* import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Bounce, toast } from "react-toastify";

function DeleteUser() {
  const MySwal = withReactContent(Swal);

  const [users, setUsers] = useState([]);

  const [userData, setUserData] = useState({});
  const DeleteFromList = async () => {
    const res = await axios.delete(`http://localhost:3000/users/${id}`);
    MySwal.fire("User Deleted !");
    DeleteFromList();
  };
 */

/*   useEffect(() => {
    fetchUsers();
  }, [users]); */
