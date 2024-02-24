import React from "react"
import {useNavigate} from "react-router-dom"
import "./navbar.css"

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <a href="/">
                <h1 className="title-navbar">Fuel Quote App</h1>
            </a>
            <h5 className="login-prompt">Please Login or Register to continue</h5>

            <div className="button-container">
              <button className="nav-button"
              onClick={() => {
                navigate("/login");
              }} >
                Login
              </button>
              <button
                className="nav-button"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Register
              </button>
            </div>
        </nav>
    );
};

export default Navbar