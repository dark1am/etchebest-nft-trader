import {React,useEffect,useState} from "react";
import {useParams} from 'react-router-dom'
import ItemList from '../../Components/ItemList/ItemList'
import "./ItemListContainer.css";
import NavBar from '../../Components/NavBar/NavBar'
import ITEMDATA from '../../data/items.json'

function ItemListContainer() {
  const {categoryId} = useParams()
  const [items,setItems] = useState([])

  useEffect(() => {
    const getItems = ()=>{
      return categoryId ? ITEMDATA.filter(e=>e.category===categoryId) : ITEMDATA
    }
    const itemsPulled = getItems()
    setItems(itemsPulled)  
  }, [categoryId])

  return (
    <div className="listContainer">
        <NavBar />
        <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;

