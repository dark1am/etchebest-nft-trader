import {React,useContext,useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import Page from '../../Components/Page/Page'
import {CartContext} from '../../context/cartContext'

function Cart() {

    const {listaProductos,removeItem,clear} = useContext(CartContext)
    const [acumulador,setAcumulador] = useState(0)

    useEffect(() => {
        if(listaProductos.length>0){
          setAcumulador(listaProductos.reduce((acum,e)=>acum+Number(e.item.price),0))
        } else {
          setAcumulador(0)
        }
      }, [listaProductos])

    return (
        <Page>
            <h1>Cart 🚀 </h1>
            <ul>
            {
                listaProductos && (
                    listaProductos.map(e=>
                    <li>
                        <strong>Nombre:</strong> {e.item.name} 
                        <strong>Cantidad: </strong> {e.quantity} 
                        <button onClick={()=>removeItem(e.item.id)}>BORRAR</button>
                    </li>
                    )
                )
            }
            {
                listaProductos.length===0 && (
                    <>
                        <h1>No hay items en el carrito!</h1>
                        <Link to="/">Ir al catalogo!</Link>
                    </>
                )
            }
            </ul>
            <h1>Precio final: U$D {acumulador} </h1>
            <button onClick={clear}>VACIAR EL CARRITO</button>
        </Page>
    )
}

export default Cart
