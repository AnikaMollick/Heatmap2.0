import React from 'react'
import { NavLink} from 'react-router-dom'
import '../Heatmap/navbar.scss'
import logo from '../Heatmap/staige_Logo.png'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className='logo'>
            <img src={logo} />
            </div>
           <ul className="nav nav-pills">
                <li> <NavLink  activeClassName="navbar_link-active" className="navbar_link" to ='/Home' >  Home </NavLink>   </li>
			    <li> <NavLink activeClassName="navbar_link-active" className="navbar_link" to ='/Ball'> Ball </NavLink> </li> 
                <li> <NavLink activeClassName="navbar_link-active" className="navbar_link" to ='/TeamA'>   Team A   </NavLink></li>
                <li> <NavLink activeClassName="navbar_link-active" className="navbar_link" to ='/TeamB'>  Team B</NavLink></li>
                </ul>
        </div>
    )
}
export default Navbar