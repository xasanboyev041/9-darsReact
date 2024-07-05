import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import UserCard from "../components/UserCard";

const FiredUsers = () => {
  const { state } = useContext(UserContext);

  return (
    <div className="fired-users">
      <h1>Ishdan bo'shatilgan foydalanuvchilar</h1>
      {state.firedUsers.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default FiredUsers;
