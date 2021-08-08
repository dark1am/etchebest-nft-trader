import {React,useEffect,useState} from 'react'
import './ItemList.css'
import Item from '../Item/Item'
import Loader from '../../Components/Loader/Loader'

function ItemList({items}) {
    const [loading,setLoading] = useState(false)
    useEffect(() => {
        if(items.length>0){
            setLoading(true)
        }
    }, [items])
    return (
        <div className="listItem">
            { loading ?
                items.map(item=>
                    <Item key={item.id} item={item} />
                ) : <Loader />
            }
        </div>
    )
}

export default ItemList
