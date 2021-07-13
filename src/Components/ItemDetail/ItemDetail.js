import {React,useState,useEffect,useContext} from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import {CartContext} from '../../context/cartContext'

function ItemDetail({item}) {

    const {addItem} = useContext(CartContext) 
    const [turnOff,setTurnOff] = useState(false)

    const handlerOnAdd = (onAddValue)=>{
        if(onAddValue > 0){
            addItem(item,onAddValue)
            setTurnOff(true)
        }
    }

    return (
        <div className="itemdetail">
            <ul>
                <li><h2>Nombre: {item.name}</h2> </li>
                <li><h2>Descripcion: {item.description}</h2> </li>
                <li><h2>Precio: ${item.price}</h2> </li>
                <li><img src={item.pictureUrl}  alt="" /> </li>
                <li><h2>Stock: {item.stock} </h2></li>
                <ItemCount 
                    initial="0" 
                    stock={item.stock} 
                    handlerOnAdd={handlerOnAdd} 
                    handlerButton={turnOff}
                />
            </ul>
        </div>
    )
}

export default ItemDetail
