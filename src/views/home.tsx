import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <button onClick={() => navigate("/sign-up")}>Signup</button>
        <button onClick={() => navigate("/login")}>Login</button>
      </div>

      <h1>Home</h1>
    </div>
  );
};

export default Home;
