import React from "react";
import { NavLink } from 'react-router-dom'
import "./NavBar.css";
import Logo from "../../Static/nftrader-logo-white.svg";
import CartWidget from "../CartWidget/CartWidget";
import StoreIcon from '@material-ui/icons/Store';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import StarIcon from '@material-ui/icons/Star';

function NavBar() {
  return (
      <nav className="navbar">
        <NavLink to="/"><img className="navbar__brand" src={Logo} alt=""/></NavLink>
        <ul>
          <li className="opener">
            <NavLink 
              activeClassName="link-active"  
              className="link" 
              to="/market"><p>Market</p>
            </NavLink>
          </li>
            <ul className="navbar__submenu">
                <li><NavLink 
                  to='/categories/rares'
                  className="sublink"
                  > <StoreIcon></StoreIcon><p>Rares</p> </NavLink></li>
                <li><NavLink 
                  to='/categories/offers'
                  className="sublink"
                  > <AttachMoneyIcon></AttachMoneyIcon><p>Offers</p> </NavLink></li>
                <li><NavLink 
                  to='/categories/freebies'
                  className="sublink"
                  > <ThumbsUpDownIcon></ThumbsUpDownIcon><p>Freebies</p> </NavLink></li>
                <li><NavLink 
                  to='/categories/trend'
                  className="sublink"
                  > <StarIcon></StarIcon><p>Trend</p> </NavLink></li>
            </ul>
          <li>
            <NavLink activeClassName="link-active" className="link" to="/news"><p>News</p></NavLink>
          </li>
          <li>
            <NavLink activeClassName="link-active" className="link" to="/coins"><p>Coins</p></NavLink>
          </li>
          <li>
            <NavLink activeClassName="link-active" className="link" to="/profile"><p>Profile</p></NavLink>
          </li>
          <li>
            <NavLink activeClassName="link-active" className="link" to="/cart"><CartWidget /></NavLink> 
          </li>
        </ul>
      </nav>
  );
}

export default NavBar;
