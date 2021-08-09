import { createContext, useState } from 'react'
import {dataBase} from '../../src/Firebase/firebase'

export const CartContext = createContext()

export const CartProvider = ({children})=>{
    
    const [listaProductos,setListaProductos] = useState([])

    const isInCart = (newItem)=>{
        if(listaProductos.some(e=>e.item.id===newItem.item.id)){
            return true
        } else {
            return false
        }
    }

    const removeItem = (itemId)=>{
        setListaProductos(listaProductos.filter(e=>e.item.id!==itemId))
    }

    const clear = ()=>{
        setListaProductos([])
    }

    const addItem = (item,quantity)=>{
        const nuevoItem = {
            "item": {
                    "name": item.name,
                    "price": item.price,
                    "description": item.description,
                    "id":item.id
                    },
            "quantity":quantity
        }
        
        if(!isInCart(nuevoItem)) {
            setListaProductos([...listaProductos,nuevoItem])
        } else {
            let id = listaProductos.find(e=>e.item.id===nuevoItem.item.id)
            let index = listaProductos.indexOf(id)
            listaProductos[index].quantity+=quantity
        }
    }

    const addBuy = async (buy)=>{
        try{
            const data = await dataBase.collection("items-request").add(buy)
            console.log('Compra terminada')
        }
        catch(error){
            console.log(`Ha sucedido un error durante el submit: ${error}`)
        }
    }
    

    return <CartContext.Provider value={{listaProductos,addItem,setListaProductos,clear,removeItem,addBuy}}>
            {children}
            </CartContext.Provider>
}
