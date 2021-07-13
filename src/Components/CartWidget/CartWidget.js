import {React,useContext} from "react";
import "./CartWidget.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {CartContext} from '../../context/cartContext'

function CartWidget() {

  return (
    <div>
      <ShoppingCartIcon style={{ color: "white", cursor: "pointer" }} />
    </div>
  );
}

export default CartWidget;
