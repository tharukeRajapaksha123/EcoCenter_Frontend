import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBSelect,
  MDBRadio,
} from "mdb-react-ui-kit";
import { Card, Container, Row, Col } from "react-bootstrap";
import Header from "../../Common/header";
import Footer from "../../Common/footer";


export default function AddShedullesinfo() {
  const [Sctact, setSctact] = useState("");
  const [Sadres, setSadres] = useState("");
  const [Scity, setScity] = useState("");
  const [Sdate, setSdate] = useState("");

  const navigate = useNavigate();

  function senddata(e) {
    e.preventDefault();

    const newShedullesinfo = {
      Sctact,
      Sadres,
      Scity,
      Sdate,
    };

    axios
      .post("http://localhost:8070/Shedulles/add", newShedullesinfo)
      .then(() => {
        alert("Schedule Details Add");
        navigate("/all");
      });
  }

  return (
    <div>
       <Header />
      

      <div className="container">
        <br></br>
        <div class="btn-toolbar justify-content-between">
        <div>
        <h2>Add Schedule Details</h2>
        </div>
          <div>
        <a class="btn btn-primary" href="/all" role="button">My All Schedule</a>
        </div>
       
        </div>
       
        <MDBContainer  >
          <MDBRow className="justify-content-center align-items-center m-5">
            <MDBCard >
              <form onSubmit={senddata}>
                <div className="form-group">
                  <MDBCol md="6">
                    <label for="name">Schedule Contact</label>
                    <input
                      type="text"
                      className="form-control"
                      id="Sctact"
                      aria-describedby="emailHelp"
                      placeholder="Enter Schedule Contact "
                      onChange={(e) => {
                        setSctact(e.target.value);
                      }}
                    />
                    <br></br>
                  </MDBCol>
                </div>

                <div className="form-group">
                  <MDBCol md="6">
                    <label for="name">Schedule Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="Sadres"
                      aria-describedby="emailHelp"
                      placeholder="Enter Schedule Address"
                      onChange={(e) => {
                        setSadres(e.target.value);
                      }}
                    />
                    <br></br>
                  </MDBCol>
                </div>

                <div className="form-group">
                  <MDBCol md="6">
                    <label for="email">Schedule City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="Scity"
                      aria-describedby="emailHelp"
                      placeholder="Enter Schedule City"
                      onChange={(e) => {
                        setScity(e.target.value);
                      }}
                    />
                    <br></br>
                  </MDBCol>
                </div>

                <div className="form-group">
                  <MDBCol md="6">
                    <label for="nationality">Schedule Date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="Sdate"
                      aria-describedby="emailHelp"
                      placeholder="Enter Schedule Date"
                      onChange={(e) => {
                        setSdate(e.target.value);
                      }}
                    />
                    <br></br>
                  </MDBCol>
                </div>

                <button type="submit" className="btn btn-primary">
                  Proceed
                </button>
                
                
              </form>
            </MDBCard>
          </MDBRow>
        </MDBContainer>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}
