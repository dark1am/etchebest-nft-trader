import React from "react";
import "./NavBar.css";
import Logo from "../../Static/nftrader-logo-white.svg";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
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
          <li>
            <CartWidget />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
