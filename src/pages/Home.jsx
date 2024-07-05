import React from "react";
import UserList from "../components/UserList";

const Home = () => {
  return (
    <div>
      <header>
        <h1>Foydalanuvchilar</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/fired-users">Ishdan bo'shatilganlar</a>
        </nav>
      </header>
      <UserList />
    </div>
  );
};

export default Home;
