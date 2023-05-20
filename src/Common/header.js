import React from "react";
import axios from "axios";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom"
function Header() {
  return (
    <div
      style={{
        width: "100vw"
      }}
    >
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: "red" }}>
            Eco-Center{" "}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/Schedule">
                  Schedule
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/vehicleAdmin">
                  Driver
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/donations">
                  Donations
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/my-donation-list">
                  My Donations
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;