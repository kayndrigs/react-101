import { useState } from "react";

type User = {
  id: string;
  name: string;
  email: string;
}

const DEFAULT_USERS = [
  { id: "1", name:"Kayne", email: "kayne.rodrigo11@gmail.com"},
  { id: "2", name:"Kayne2", email: "kayne.rodrigo11@gmail.com"},
  { id: "3", name:"Kayne3", email: "kayne.rodrigo11@gmail.com"}
];


export default function App() {
  const [users] = useState<User[]>(DEFAULT_USERS);

  return (
    <div>
      <h1>Users List</h1>
      <div className="flex flex-col gap-4">
        {users.map((user) => (
          <UserCard key={user.id} id={user.id} name={user.name} email={user.email} />
        ))}
      </div>
    </div>
    );  
}

type UserCardProps = User;

const UserCard = (props: UserCardProps) => {
  return (
    <div className = "flex flex-col gap-2 p-4 bg-gray-200 rounded-md max-w-sm">
      <p>{props.id}</p>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  );
};