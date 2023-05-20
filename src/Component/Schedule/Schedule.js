import React from "react";

import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Header from "../../Common/header";
import Footer from "../../Common/footer";

function Schedule() {
  return (
    <div>
      
      <Header />
      

      <div className="col" >
        {/* Add the desired width to the div */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
  <div className="card">
    <img  
      src="./images/admin/Schedule.jpg"
      height="350px"
      width="100px"
      className="card-img-top"
      alt="..."
    />
    <div className="card-body">
      <h5 className="card-title align-center">Schedule Management</h5>
      <p className="card-text"></p>
    </div>
    <a type="button" className="btn btn-success" href="/add">
      Add Schedule
    </a>
  </div>
</div>
      </div>
    </div>
  );
}

export default Schedule;
