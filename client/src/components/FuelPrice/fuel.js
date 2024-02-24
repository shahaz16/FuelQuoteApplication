import React from "react";
import { useNavigate } from 'react-router-dom';

import "./fuel.css";


const FuelPrice = () => {

    const navigate = useNavigate();

    return (
        <div className="form">

           
            <label htmlFor="gallon_requested">Gallons Requested:
                <input
                    type="Number"
                    placeholder="Enter a number"
                    id="gallon_requested"
                    className="rInput"
                    min={0}
                    required
                />
            </label><br />
            <label htmlFor="address1">Delivery Address 1:
                <input
                    type="hidden"
                    id="address1"
                    className="rInput"
                    maxLength="100"
                    readOnly
                    required
                />
                <span className="cpm"></span>
            </label><br />

            <label htmlFor="address2">Delivery Address 2:
                <input
                    type="hidden"
                    id="address2"
                    className="rInput"
                    maxLength="100"
                    readOnly
                />
                <span className="cpm"></span>
            </label><br />

            <label htmlFor="City">City:
                <input
                    type="hidden"
                    id="city"
                    className="rInput"
                    maxLength="100"
                    readOnly
                    required
                />
                <span className="cpm"></span>
            </label><br />

            <label htmlFor="State">State:
                <input name="state"
                    required
                    className="rInput"
                    id="state"
                    type="hidden"
                    readOnly
                >
                </input>
                <span className="cpm"></span>
            </label><br />

            <label htmlFor="zipcode">Zip Code:
                <input
                    type="hidden"
                    id="zipcode"
                    className="rInput"
                    minLength="5"
                    maxLength="9"
                    readOnly
                    required
                />
                <span className="cpm"></span>
            </label><br />
            <label htmlFor="date">Select a date:
                <input
                    type="date"
                    id="date"
                    min={new Date(Date.now()).toISOString().split("T")[0]}
                    name="date"
                />
            </label><br /><br />
            <label htmlFor="suggested price">Suggested Price / Gallon: $
                <input
                    type="hidden"
                    id="suggested_price"
                    className="rInput"
                    readOnly
                    min={0}
                    required
                />
                <span className="cpm-1"></span>
            </label><br /><br />

            <label htmlFor="total price">Total Price: $
                <input
                    type="hidden"
                    id="total_price"
                    className="rInput"
                    readOnly
                    min={0}
                    required
                />
                <span className="cpm-1"></span>
            </label><br /><br />

            <button type="submit"
                className="calculate"
                
            >
                Get Quote</button>

            <button type="submit"
                className="calculate"
                onClick={() => {
                    navigate("/history");
                  }}
            >
                Submit quote</button>


        </div>
    )
}

export default FuelPrice;

