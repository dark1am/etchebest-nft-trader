import React from 'react'
import { useParams } from 'react-router'
import './Category.css'
import Page from '../../Components/Page/Page'
import ItemListContainer from '../../Components/ItemListContainer/ItemListContainer'

function Category() {
    const {categoryId} = useParams()

    return (
        <Page>
            <ItemListContainer category={categoryId} />
        </Page>
    )
}

export default Category
