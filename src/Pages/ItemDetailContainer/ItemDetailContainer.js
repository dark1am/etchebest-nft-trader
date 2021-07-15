import {React,useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import './ItemDetailContainer.css'
import ItemDetail from '../../Components/ItemDetail/ItemDetail'
import NavBar from '../../Components/NavBar/NavBar'
import {dataBase} from '../../Firebase/firebase'

function ItemDetailContainer() {   

  const {id} = useParams()
  const [item,setItem] = useState({})

  useEffect(() => {
    const getItem= async () => {
      try{
        const {docs} = await dataBase.collection('items').get() 
        const itemArr = docs.map(doc=>doc.data())
        const itemPulled = itemArr.filter(e=>e.id===Number(id))
        setItem(itemPulled[0])
      }
      catch(error){
        console.log(error)
      }
    }
    getItem(id)
  }, [id])

    return (
        <div className="itemDetail">
            <NavBar />
            <ItemDetail item={item} /> 
        </div>
    )
}

export default ItemDetailContainer
