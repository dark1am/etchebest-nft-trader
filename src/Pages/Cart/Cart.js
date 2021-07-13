import {React,useContext,useEffect,useState} from 'react'
import Page from '../../Components/Page/Page'
import {CartContext} from '../../context/cartContext'

function Cart() {

    const {listaProductos,removeItem,clear} = useContext(CartContext)

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
            </ul>
            <button onClick={clear}>VACIAR EL CARRITO</button>
        </Page>
    )
}

export default Cart
