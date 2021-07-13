import {React,useContext,useEffect,useState} from "react";
import "./CartWidget.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {CartContext} from '../../context/cartContext'

function CartWidget() {

  const {listaProductos} = useContext(CartContext)
  const [acumulador,setAcumulador] = useState(0)

  useEffect(() => {
    if(listaProductos.length>0){
      setAcumulador(listaProductos.reduce((acum,e)=>acum+e.quantity,0))
    } else {
      setAcumulador(0)
    }
  }, [listaProductos])

  return (
    <div>
      {acumulador>0 && (
      <div>
        <h5>{acumulador}</h5>
        <ShoppingCartIcon style={{ color: "white", cursor: "pointer" }}/>
      </div>
      )}
      
    </div>
  );
}

export default CartWidget;
