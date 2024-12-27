import { User } from "../types";

export type UserCardProps = User;

export const UserCard = (props: UserCardProps) => {
  return (
    <div className = "flex flex-col gap-2 p-4 bg-gray-200 rounded-md max-w-sm">
      <p>{props.id}</p>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  );
};