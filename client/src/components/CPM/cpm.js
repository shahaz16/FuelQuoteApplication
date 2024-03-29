import React from "react";

import { useNavigate } from 'react-router-dom';

import "./cpm.css"

const CPM = () => {

    const navigate = useNavigate();


    return (

        <div className="form">

            <label htmlFor="fullname">Full Name:
                <input
                    type="text"
                    placeholder="Full Name"
                    id="name"
                    className="rInput"
                    maxLength="50"
                    required
                />
            </label><br />

            <label htmlFor="address1">Address 1:
                <input
                    type="text"
                    placeholder="Address 1"
                    id="address1"
                    className="rInput"
                    maxLength="100"
                    required
                />
            </label><br />

            <label htmlFor="address2">Address 2:
                <input
                    type="text"
                    placeholder="Address 2"
                    id="address2"
                    className="rInput"
                    maxLength="100"
                />
            </label><br />

            <label htmlFor="City">City:
                <input
                    type="text"
                    placeholder="City"
                    id="city"
                    className="rInput"
                    maxLength="100"
                    required
                />
            </label><br />

            <label htmlFor="State">State:
                <select name="state"
                    required
                    id="state"
                >
                    <option value="">Select a State</option>
                    <option value="AL">AL</option>
                    <option value="AK">AK</option>
                    <option value="AR">AR</option>
                    <option value="AZ">AZ</option>
                    <option value="CA">CA</option>
                    <option value="CO">CO</option>
                    <option value="CT">CT</option>
                    <option value="DC">DC</option>
                    <option value="DE">DE</option>
                    <option value="FL">FL</option>
                    <option value="GA">GA</option>
                    <option value="HI">HI</option>
                    <option value="IA">IA</option>
                    <option value="ID">ID</option>
                    <option value="IL">IL</option>
                    <option value="IN">IN</option>
                    <option value="KS">KS</option>
                    <option value="KY">KY</option>
                    <option value="LA">LA</option>
                    <option value="MA">MA</option>
                    <option value="MD">MD</option>
                    <option value="ME">ME</option>
                    <option value="MI">MI</option>
                    <option value="MN">MN</option>
                    <option value="MO">MO</option>
                    <option value="MS">MS</option>
                    <option value="MT">MT</option>
                    <option value="NC">NC</option>
                    <option value="NE">NE</option>
                    <option value="NH">NH</option>
                    <option value="NJ">NJ</option>
                    <option value="NM">NM</option>
                    <option value="NV">NV</option>
                    <option value="NY">NY</option>
                    <option value="ND">ND</option>
                    <option value="OH">OH</option>
                    <option value="OK">OK</option>
                    <option value="OR">OR</option>
                    <option value="PA">PA</option>
                    <option value="RI">RI</option>
                    <option value="SC">SC</option>
                    <option value="SD">SD</option>
                    <option value="TN">TN</option>
                    <option value="TX">TX</option>
                    <option value="UT">UT</option>
                    <option value="VT">VT</option>
                    <option value="VA">VA</option>
                    <option value="WA">WA</option>
                    <option value="WI">WI</option>
                    <option value="WV">WV</option>
                    <option value="WY">WY</option>
                </select>
            </label><br />

            <label htmlFor="zipcode">Zip Code:
                <input
                    type="text"
                    placeholder="zip code"
                    id="zipcode"
                    className="rInput"
                    minLength="5"
                    maxLength="9"
                    required
                />
            </label><br /><br />
            <button
                type="submit"
                className="submit"
                onClick={() => {
                    navigate("/fuelprice");
                  }}
                >
                Submit
            </button>



        </div>
    )
}

export default CPM;

