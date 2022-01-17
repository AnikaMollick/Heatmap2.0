import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    
    
    return (
        <div className="navbar">
                <div className="liinks">
                <Link to ="/"><button > FullHeatmap</button> </Link>
                <Link to ="/Catagories"><button>  Different Catagories </button></Link>
                </div>
            </div>
    )
}
export default Navbar