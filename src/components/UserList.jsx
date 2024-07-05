import React, { useContext, useEffect } from "react";
import UserCard from "./UserCard";
import { UserContext } from "../context/UserContext";

const UserList = () => {
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=1")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "SET_USERS", payload: data.data });
      });
  }, [dispatch]);

  return (
    <div className="container">
      {state.users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
