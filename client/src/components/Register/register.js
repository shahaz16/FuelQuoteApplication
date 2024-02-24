import React from "react";

import "./register.css"
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

    

    return (
        <div className="form">
            <label htmlFor="Username">Username:
                <input
                    type="text"
                    placeholder="Username"
                    id="Username"
                    className="rInput"
                    maxLength="50"
                    required
                />
            </label><br />

            <label htmlFor="Password">Password:
                <input
                    type="password"
                    placeholder="Password"
                    id="Password"
                    className="rInput"
                    maxLength="100"
                    required
                />
            </label><br />

            <button className="Create"
            onClick={() => {
                navigate("/login");
              }} 
                
            >
                Register
            </button>



        </div>
    )
}

export default Register;