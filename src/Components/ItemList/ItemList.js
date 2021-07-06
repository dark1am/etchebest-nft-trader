import {React,Fragment} from 'react'
import './ItemList.css'
import Item from '../Item/Item'

function ItemList({items}) {
    return (
        <Fragment>
            {
                items.map(item=>
                    <Item key={item.id} item={item} />
                )
            }
        </Fragment>
    )
}

export default ItemList
