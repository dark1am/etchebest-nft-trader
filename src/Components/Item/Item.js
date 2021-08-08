import React from 'react'
import './Item.css'
import {Link} from 'react-router-dom'
import Bitcoin from '../../Static/bitcoin.svg'

function Item({item}) {

    return (
            <div className="item">
                <Link className="item__link" to={`/item/${item.id}`}> 
                    <h3 className="item__title">{item.name} </h3>
                </Link>

                <hr />

                <div className="item__description">  
                    <h4>{item.description} </h4>
                </div> 

                <Link to={`/item/${item.id}`}>
                <div className="item__img">
                    <img src={item.pictureUrl} alt="" />
                </div>
                </Link>

                <h4 className="item__description capsule">
                    <span className="item__textColor">Stock:   </span> 
                    {item.stock} 
                </h4>

                <h4 className="item__description capsule">
                    <span className="item__textColor">Price:   </span> 
                    U$DT {item.price} 
                </h4>
            </div>
    )
}

export default Item


