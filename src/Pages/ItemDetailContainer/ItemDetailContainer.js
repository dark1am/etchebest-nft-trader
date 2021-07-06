import {React,useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import './ItemDetailContainer.css'
import ItemDetail from '../../Components/ItemDetail/ItemDetail'
import NavBar from '../../Components/NavBar/NavBar'
import ITEMDATA from '../../data/items.json'

function ItemDetailContainer() {   

  const {id} = useParams()
  const [item,setItem] = useState({})

  useEffect(() => {
    const getItems = ()=>{
      return ITEMDATA[id-1]
    }
    const itemsPulled = getItems()
    setItem(itemsPulled)
  }, [id])

    return (
        <div className="itemDetail">
            <NavBar />
            <ItemDetail item={item} /> 
        </div>
    )
}

export default ItemDetailContainer
