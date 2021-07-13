import { createContext, useState } from 'react'

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

    return <CartContext.Provider value={{listaProductos,addItem,setListaProductos,clear,removeItem}}>
            {children}
            </CartContext.Provider>
}
