import React, { useEffect, useState} from "react";
import axios from "axios";
import { Card, Container, Row, Col } from "react-bootstrap";
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
import { get } from "lodash";
import { useParams,useNavigate } from "react-router-dom";
import { createBrowserHistory } from "history";
import Header from "../../Common/header";
import Footer from "../../Common/footer";


const history = createBrowserHistory();

function EditShedulles(_userId) {
  const [Shedulles, setShedulles] = useState(["Shedulles"]);
  const [Sctact, setSctact] = useState("Sctact");
  const [Sadres, setSadres] = useState("Sadres");
  const [Scity, setScity] = useState("Scity");
  const [Sdate, setSdate] = useState("Sdate");
  const params = useParams();
 
  const navigate = useNavigate();

  useEffect(() => {
    getShedullesDetails();
  }, []);

  const getShedullesDetails = async () => {
    console.warn(params);
    let result = await fetch(`http://localhost:8070/Shedulles/get/${params.id}`);
    const { Shedulles } = await result.json();


 


    setSctact(Shedulles.Sctact);
    setSadres(Shedulles.Sadres);
    setScity(Shedulles.Scity);
    setSdate(Shedulles.Sdate);
  };

  function updateShedulles(e) {
    e.preventDefault();

    const updateShedulles= {
      Sctact,
      Sadres,
      Scity,
      Sdate,
    };

   

    axios
      .put(`http://localhost:8070/Shedulles/update/${params.id}`, updateShedulles)
      .then((res) => {
        alert("Schedule Details Updated");
        history.push('/all'); 
        navigate("/all");

        setShedulles(res.data);
        
      })
      .catch((err) => {
        alert(err.message);
        
        
      });
      
      
  }

  return (
    <div>
      <Header />

      <div class="container-xl">
        <br></br>
        <h2>Update Shedulles Details</h2>

        <MDBContainer fluid >
          <MDBRow className="justify-content-center align-items-center m-5">
            <MDBCard>
              <form onSubmit={updateShedulles}>
                <div className="form-group">
                  <MDBCol md="6">
                    <label for="name">Shedule Contact</label>
                    <input
                      type="text"
                      className="form-control"
                      id="Sctact"
                      aria-describedby="emailHelp"
                      placeholder="Enter Shedule Contact"
                      value={Sctact}
                      onChange={(e) => {
                        setSctact(e.target.value);
                      }}
                    />
                  </MDBCol>
                </div>

                <div className="form-group">
                  <MDBCol md="6">
                    <label for="vname">Shedule Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="Sadres"
                      aria-describedby="emailHelp"
                      placeholder="Enter Shedule Address"
                      value={Sadres}
                      onChange={(e) => {
                        setSadres(e.target.value);
                      }}
                    />
                  </MDBCol>
                </div>

                <div className="form-group">
                  <MDBCol md="6">
                    <label for="vname">Shedule City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="Scity"
                      aria-describedby="emailHelp"
                      placeholder="Enter Shedule City"
                      value={Scity}
                      onChange={(e) => {
                        setScity(e.target.value);
                      }}
                    />
                  </MDBCol>
                </div>

                <div className="form-group">
                  <MDBRow>
                    <MDBCol md="6">
                      <label for="vprice">Shedule Date</label>
                      <input
                        type="text"
                        className="form-control"
                        id="Sdate"
                        aria-describedby="emailHelp"
                        placeholder="Enter Shedule Date"
                        value={Sdate}
                        onChange={(e) => {
                          setSdate(e.target.value);
                        }}
                      />
                    </MDBCol>
                  </MDBRow>
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </MDBCard>
          </MDBRow>
        </MDBContainer>
      </div>
      <Footer />
    </div>
  );
}

export default EditShedulles;
