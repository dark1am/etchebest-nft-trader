import React from 'react'
import './Item.css'
import {Link} from 'react-router-dom'

function Item({item}) {

    return (
            <div className="item">
                <Link to={`/item/${item.id}`}> <h3>{item.name} </h3></Link>
                <h4>{item.description} </h4>
                <div className="item__img">
                    <img src={item.pictureUrl} alt="" />
                </div>
                <h4>Stock: {item.stock} </h4>
                <h4>Price: {item.price} </h4>
                <h4>{item.description} </h4>
            </div>
    )
}

export default Item
