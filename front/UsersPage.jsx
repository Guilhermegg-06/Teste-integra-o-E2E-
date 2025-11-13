import { useEffect, useState } from "react";
import axios from "axios";

export default function UsersPage(){
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/users").then(r => {
      setUsers(r.data);
    });
  }, []);

  return(
    <div>
      <h1>Usuarios</h1>
      {users.map(u => (
        <p key={u.id}>{u.name}</p>
      ))}
    </div>
  );
}