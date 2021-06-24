import React from 'react'
import './ItemDetail.css'

function ItemDetail({name,description,price,pictureUrl}) {
    return (
        <div className="itemdetail">
            <ul>
                <li><h2>Nombre: {name}</h2> </li>
                <li><h2>Descripcion: {description}</h2> </li>
                <li><h2>Precio: ${price}</h2> </li>
                <li><img src={pictureUrl}  alt="" /> </li>
            </ul>
        </div>
    )
}

export default ItemDetail
