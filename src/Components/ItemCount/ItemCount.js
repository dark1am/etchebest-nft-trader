import {React, useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './ItemCount.css'

function ItemCount({stock, initial, handlerOnAdd,handlerButton}) {

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
    }, [stock])

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
            {handlerButton !== true &&(<div className="itemcount__counter">
                <button onClick={decrementItemCounter} disabled={decrementButtonState}>-</button>
                <span> {counter} </span>
                <button onClick={incrementItemCounter} disabled={incrementButtonState}>+</button>
            </div>)}
            {handlerButton !== true &&(<button 
                onClick={()=> handlerOnAdd(counter)}
                disabled={onAddButtonState} 
                className="itemcount__add"
                id="itemcount__add__notAdded"
            >Add to cart</button>)}
            { handlerButton &&(
            <Link to='/cart'><button 
                className="itemcount__add" 
                id="itemcount__add__added"
                >
                Terminar mi compra
            </button></Link>)}
        </div>
    )
}

export default ItemCount
