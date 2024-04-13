import React from "react";
import './homepage.css';
import background from './fuel-truck.jpeg';

const Homepage = () => {

    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <div className="homepage">
            <img src={background} alt="background" className="background"
                style={{ width: "100%", height: "100%", position: "absolute", top: "0", left: "0", zIndex: "-1" }}
            />

            <h1 className="title-hp">
                Your FuelQuote Application
            </h1>
        </div>
    )
}
export default Homepage;