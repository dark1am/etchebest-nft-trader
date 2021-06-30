import {React} from 'react'
import './ItemDetailContainer.css'

function ItemDetailContainer({name,description,pictureUrl}) {
    
    return (
        <div className="itemDetail">
             <h1>{name} </h1>
             <h3>{description} </h3>
             <img src={pictureUrl} alt="" />
        </div>
    )
}

export default ItemDetailContainer
