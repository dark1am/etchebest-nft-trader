import React from 'react'
import './ItemDetail.css'

function ItemDetail({item}) {
    return (
        <div className="itemdetail">
            <ul>
                <li><h2>Nombre: {item.name}</h2> </li>
                <li><h2>Descripcion: {item.description}</h2> </li>
                <li><h2>Precio: ${item.price}</h2> </li>
                <li><img src={item.pictureUrl}  alt="" /> </li>
            </ul>
        </div>
    )
}

export default ItemDetail
