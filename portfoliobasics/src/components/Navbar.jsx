import React from "react";
import logo from "../assets/download.jpeg";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
        <img src={logo} alt="logo img" width={100}/>
        <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <button> Get Started</button>
    </div>
  )
}

export default Navbar;
