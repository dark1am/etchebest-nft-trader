import React from 'react'
import NavBar from '../NavBar/NavBar'
import './Page.css'

function Page({children}) {
    return (
    <div>
        <NavBar />
        <div className="wrapper">
        {children}
        </div>
    </div>
    )
}

export default Page
