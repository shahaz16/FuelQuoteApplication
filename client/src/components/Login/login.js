import React from "react";

import { useNavigate } from 'react-router-dom';
import "./login.css";

const Login = () => {

  const navigate = useNavigate();

  return (
    <div className="form">
      <label htmlFor="Username">
        Username:
        <input
          type="text"
          placeholder="Username"
          id="Username"
          className="rInput"
          maxLength="50"
          required
        />
      </label>
      <br />
      <br />

      <label htmlFor="Password">
        Password:
        <input
          type="password"
          placeholder="Password"
          id="Password"
          className="rInput"
          maxLength="100"
          required
        />
      </label>
      <br />
      <br />

      <button className="Login" 
      onClick={() => {
        navigate("/cpm");
      }}
      >Login</button>
      <br />
      <br />Don't have an account?
      <button
        className="Register"
        onClick={() => {
          window.location.href = "/register";
        }}
      >
        Register
      </button>
    </div>
  );
};

export default Login;
