import React,{useEffect,useState} from "react";
import {useParams} from 'react-router-dom'
import ItemList from '../../Components/ItemList/ItemList'
import "./ItemListContainer.css";
import NavBar from '../../Components/NavBar/NavBar'
import {dataBase} from '../../Firebase/firebase'

function ItemListContainer() {
  const {categoryId} = useParams()
  const [items,setItems] = useState([])
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    const getItems= async () => {
      try{
        const {docs} = await dataBase.collection('items').get() 
        const itemArr = docs.map(doc=>doc.data())
        const itemsPulled = categoryId ? itemArr.filter(e=>e.category===categoryId) : itemArr
        setLoading(true)
        setItems(itemsPulled)
      }
      catch(error){
        console.log(error)
      }
    }
    getItems()
  }, [categoryId])

  return (
    <div className="listContainer">
        <NavBar />
        <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;

