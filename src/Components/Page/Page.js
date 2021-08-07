import React from 'react'
import NavBar from '../NavBar/NavBar'
import './Page.css'

function Page({children}) {
    return (
    <div className="page">
        <NavBar />
        <div className="wrapper">
        {children}
        </div>
    </div>
    )
}

export default Page
