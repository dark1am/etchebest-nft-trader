import React from "react";
import "./Navbar.css";
import Logo from "../../Static/nftrader-logo-white.svg";

function Navbar() {
  return (
    <div className="nav">
      <nav className="navbar">
        <img className="navbar__brand" src={Logo} alt="" />
        <ul>
          <li>
            <p>Market</p>
          </li>
          <li>
            <p>Trade</p>
          </li>
          <li>
            <p>Cart</p>
          </li>
          <li>
            <p>Profile</p>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
