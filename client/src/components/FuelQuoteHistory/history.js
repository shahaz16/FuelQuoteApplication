import React, {Component}  from "react";
import "./history.css"

const FuelQuoteHistory = () => {

  

  return(
    <div className="history">
      <p className="title">Fuel Quote History</p>
      <table className="table">
        <thead className="thead">
          <tr>
            <th>Gallons Requested</th>
            <th>Address 1</th>
            <th>Address 2</th>
            <th>City</th>
            <th>State</th>
            <th>Zip code</th>
            <th>Date</th>
            <th>Suggested price</th>
            <th>Total price</th>
          </tr>
        </thead>
        <tbody >
          
        </tbody>
      </table>
    </div>
  )
}

export default FuelQuoteHistory;