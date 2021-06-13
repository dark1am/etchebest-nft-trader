import React from "react";
import "./CartWidget.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function CartWidget() {
  return (
    <div>
      <ShoppingCartIcon style={{ color: "white", cursor: "pointer" }} />
    </div>
  );
}

export default CartWidget;
