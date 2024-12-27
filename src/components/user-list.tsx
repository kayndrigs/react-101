import { useEffect, useState } from "react";
import { UserCard } from "./user-card";
import { User } from "../types";

const DEFAULT_USERS = [
    { id: "1", name:"Kayne", email: "kayne.rodrigo11@gmail.com"},
    { id: "2", name:"Kayne2", email: "kayne.rodrigo11@gmail.com"},
    { id: "3", name:"Kayne3", email: "kayne.rodrigo11@gmail.com"}
  ];


export function UsersList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
        setUsers(DEFAULT_USERS);
    }, 3000);

    return () => clearTimeout(timeoutId);

  },[]);

  return (
    <>
      <h1>Users List</h1>
      <div className="flex flex-col gap-4">
        {users.map((user) => (
          <UserCard key={user.id} id={user.id} name={user.name} email={user.email} />
        ))}
      </div>
    </>
    );  
}
