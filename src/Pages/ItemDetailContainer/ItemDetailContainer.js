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
         const itemPulled = await dataBase.collection('items').doc(id)
          itemPulled.get().then((doc) => {
            if (doc.exists) {
                setItem(doc.data())
            } else {
                console.log("Document doesn't exists!");
            }
            }).catch((error) => {
                console.log("Error:", error);
            });
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
