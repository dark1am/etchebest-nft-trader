import {React,useState,useEffect,useContext} from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import {CartContext} from '../../context/cartContext'
import Bitcoin from '../../Static/bitcoin.svg'

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
            <div className="itemdetail__container">
                <ul>
                    <li className="itemdetail__capsule">
                        <img src={Bitcoin} alt="" />
                        {item.name}
                    </li>
                    <li>{item.description}</li>
                    <li>
                        <span className="colorMarker">
                            Price:
                        </span> 
                            U$DT {item.price}
                    </li>
                    <li>
                        <span className="colorMarker">
                            Stock:
                        </span> 
                        {item.stock}
                    </li>
                    <div className="counter_control">
                        <ItemCount 
                            initial="0" 
                            stock={item.stock} 
                            handlerOnAdd={handlerOnAdd} 
                            handlerButton={turnOff}
                        />
                    </div>
                </ul>
                <div className="itemdetail__img">
                    <img src={item.pictureUrl}  alt="" />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
