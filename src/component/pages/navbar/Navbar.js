import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import logo from "../../../assets/images/1.png";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light  " style={{height:"80px"}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            alt="logo"
            // style={{ width: "90px", height: "100px" }}
          />
          <b>Humayun LLC</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto px-5 mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <b>
                <a className="nav-link px-2" aria-current="page" href="/">
                  Home
                </a>
              </b>
            </li> */}
            <li className="nav-item">
              <b>
                <a className="nav-link px-2" aria-current="page" href="/baby">
                  Baby
                </a>
              </b>
            </li>
            <li className="nav-item">
              <b>
                <a className="nav-link px-2" aria-current="page" href="/health">
                  Health and Household
                </a>
              </b>
            </li>
            <li className="nav-item">
              <b>
                <a className="nav-link px-2" aria-current="page" href="/beauty">
                  Beauty and Personal Care
                </a>
              </b>
            </li>
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/baby">
                    Baby
                  </a>
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a className="dropdown-item" href="/health">
                    Health and Household
                  </a>
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a className="dropdown-item" href="/toys">
                    Toys and Games
                  </a>
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a className="dropdown-item" href="/beauty">
                    Beauty and Personal Care
                  </a>
                </li>
              </ul>
            </li> */}
            {/* <li className="nav-item px-2">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#">
                Login/Register
              </a>
            </li> */}
            {/* <li className="nav-item px-2">
              <a className="nav-link" href="#">
                <i className="bi bi-search"></i>
              </a>
            </li> */}
            {/* <li className="nav-item px-2">
              <a className="nav-link" href="#">
                <i className="bi bi-heart"></i>
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#">
                <i className="bi bi-person"></i>
              </a>
            </li> */}
            <li className="nav-item px-2">
              <a className="nav-link" href="#">
                <i
                  className="bi bi-cart"
                  style={{ fontWeight: "900", fontSize: "18px" }}
                ></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
