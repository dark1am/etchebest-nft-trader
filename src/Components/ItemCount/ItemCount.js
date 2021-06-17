import {React, useState, useEffect} from 'react'
import './ItemCount.css'

function ItemCount({item, stock, initial, onAdd ,img}) {

    const [counter,setCounter] = useState(initial)
    const [decrementButtonState,setDecrementButtonState] = useState(false)
    const [incrementButtonState,setIncrementButtonState] = useState(false)
    const [onAddButtonState,setOnAddButtonState] = useState(false)

    useEffect(() => {
        let temp = Number(counter)
        if(temp === 0){
            setDecrementButtonState(true) 
        } else {
            setDecrementButtonState(false)
        }
    }, [counter,decrementButtonState])

    useEffect(()=>{
        let temp2 =Number(counter)
        let temp = Number(stock)
        
        if(temp2===temp){
            setIncrementButtonState(true)
        } else {
            setIncrementButtonState(false)
        }
    },[counter,stock,incrementButtonState])

    useEffect(() => {
        if(stock===0){
            setOnAddButtonState(true)
        } else {
            setOnAddButtonState(false)
        }
    }, [onAdd, stock])

    const incrementItemCounter = () => {
        let temp = Number(counter)
        setCounter(temp+1)
    }
    const decrementItemCounter = () => {
        let temp = Number(counter)
        setCounter(temp-1)
    }

    return (
        <div className="itemcount">
            <h2 className="itemcount__title">{item}</h2>
            <hr />
            <h5 className="itemcount__title">Available: ({stock}) </h5>
            <img className="itemcount__img" src={img} alt="" />
            <div className="itemcount__counter">
                <button onClick={decrementItemCounter} disabled={decrementButtonState}>-</button>
                <span> {counter} </span>
                <button onClick={incrementItemCounter} disabled={incrementButtonState}>+</button>
            </div>
            <button 
                onClick={onAdd} 
                disabled={onAddButtonState} 
                className="itemcount__add"
            >Add to cart</button>
        </div>
    )
}

export default ItemCount
