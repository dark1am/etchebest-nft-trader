import {React,useState} from "react";
import { NavLink } from 'react-router-dom'
import "./NavBar.css";
import Logo from "../../Static/nftrader-logo-white.svg";
import CartWidget from "../CartWidget/CartWidget";
import StoreIcon from '@material-ui/icons/Store';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import StarIcon from '@material-ui/icons/Star';
import MenuIcon from '@material-ui/icons/Menu';

function NavBar() {

  const [responsive,setResponsive] = useState('navbar__buttons')

  const showMenu = ()=>{
    if(responsive==='navbar__buttons'){
      setResponsive('navbar__buttons__responsive')
    } else {
      setResponsive('navbar__buttons')
    }
  }

  return (
      <nav className="navbar">
        <NavLink to="/"><img className="navbar__brand" src={Logo} alt=""/></NavLink>
        <div className={responsive}>
          <ul>
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
                  <li className="navbar__cart">
                    <NavLink activeClassName="link-active" className="link" to="/cart"><CartWidget /></NavLink> 
                  </li>
          </ul>
        </div>
        <div className="navbar__burgerMenu" onClick={()=>showMenu()}>
          <MenuIcon/>
        </div>
      </nav>
  );
}

export default NavBar;
