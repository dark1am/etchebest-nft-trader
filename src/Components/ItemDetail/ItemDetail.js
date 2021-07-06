import {React,useState,useEffect} from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail({item}) {

    const [onAddValue,setOnAddValue] = useState()
    const [turnOff,setTurnOff] = useState(false)

    useEffect(() => {
        if(onAddValue > 0){
            setTurnOff(true)
        }
    }, [onAddValue])

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
                    handlerOnAdd={(handler)=>setOnAddValue(handler)} 
                    handlerButton={turnOff}
                />
            </ul>
        </div>
    )
}

export default ItemDetail
