import React,{useEffect,useState,useContext} from "react";
import {useParams} from 'react-router-dom'
import ItemList from '../../Components/ItemList/ItemList'
import "./ItemListContainer.css";
import NavBar from '../../Components/NavBar/NavBar'
import {dataBase} from '../../Firebase/firebase'
import Art from '../../Static/fine-art.svg'

function ItemListContainer() {
  const {categoryId} = useParams()
  const [items,setItems] = useState([])
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    const getItems= async () => {
      try{
        const {docs} = await dataBase.collection('items').get() 
        const itemArr = docs.map(doc=>doc.data())
        const itemsPulled = categoryId ? itemArr.filter(e=>e.category===categoryId) : itemArr
        if(categoryId){
          setLoading(false)
        }
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
        {
          loading ? (
            <div className="listcontainer__content">
              <div className="listcontainer__content_side">
                <h1>Trade now your favs</h1>
                <h3>The best way to trade art</h3>
              </div>
              <div className="listcontainer__content_img">
                <img src={Art} alt="" />
              </div>
            </div>
          ) : <div className="listcontainer__content special"><h1> {categoryId} </h1></div>
        }
          <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;

