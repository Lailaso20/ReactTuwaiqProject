import React from "react";

function User() {
  const [user, setUsers] = useState ([]);
  const fetchUsers = async ()=>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(res);
const userData =res.data;
setUsers(userData);
  };
  return <div>User</div>;
}

export default User;
