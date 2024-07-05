import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserCard = ({ user }) => {
  const { dispatch } = useContext(UserContext);

  const handleFire = () => {
    dispatch({ type: "FIRE_USER", payload: user.id });
  };

  return (
    <div className="card">
      <div className="card-content">
        <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
        <div>
          <h2>
            {user.first_name} {user.last_name}
          </h2>
          <p>Email: {user.email}</p>
        </div>
      </div>
      <button className="button" onClick={handleFire}>
        Ishdan bo'shatish
      </button>
    </div>
  );
};

export default UserCard;
