import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <img className="navbar__brand" src="" alt="" />
        <ul className="navbar__buttonList">
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
            <p>Settings</p>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
