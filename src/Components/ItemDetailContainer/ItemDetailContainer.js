import {React,useState,useEffect} from 'react'
import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'

function ItemDetailContainer() {
    const [item,setItem] = useState('')

    useEffect(() => {
        const getItems = async (id)=>{
            try{
                const response = await fetch(`https://60d48ac561160900173cb77c.mockapi.io/items/${id}`)
                const items = await response.json()
                console.log(items)
                setItem(items)
            }
            catch(error){
                console.log(error.message)
            }
        }
        setTimeout(() => {
            getItems(parseInt(Math.random()*20+1))
        }, 2000);
    }, [])


    return (
        <div>
            {
                item ? (
                    <ItemDetail 
                        name={item.name} 
                        description={item.description}  
                        price={item.price}
                        pictureUrl={item.pictureUrl}
                    />
                ) : <h1>Cargando...</h1>
                
            }
        </div>
    )
}

export default ItemDetailContainer
