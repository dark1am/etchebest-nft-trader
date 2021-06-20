import React from 'react'
import './Item.css'

function Item({name,stock,description,price,id,pictureUrl}) {

    return (
        <div className="item">
            <h2 className="item__title">{name}</h2>
            <hr />
            <h4><strong>Description:</strong>{description} </h4>
            <h4><strong>Price:</strong>{price} </h4>
            <h4>ID:{id}</h4>
            <h5 className="item__title"><strong>Available:</strong> ({stock}) </h5>
            <hr />
            <img className="item__img" src={pictureUrl} alt="" />
        </div>
    )
}

export default Item
