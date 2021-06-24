import {React} from 'react'
import './ItemList.css'
/* import Item from '../Item/Item'
import { render } from '@testing-library/react' */

function ItemList() {
    
    /* useEffect(() => {
        const desafioPromesa = new Promise((resolve,reject)=>{
            resolve('Promesa cumplida!')
            reject('Error inesperado!')
        })
        desafioPromesa.then(
            setTimeout(() => {
                productos.map((e,index)=>{
                    return render(<Item 
                    name={e.name} 
                    pictureUrl={e.pictureUrl}
                    stock={e.stock} 
                    price={e.price} 
                    description={e.description}  
                    id={index} 
                    />)
                })
            }, 2000)
        )

    }, [productos]) */
    

    return (
        <div className="itemlist">
        </div>
    )
}

export default ItemList
