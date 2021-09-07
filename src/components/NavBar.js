import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap"
import "./NavBar.css";

function NavBar () {
        const [click, setClick] = useState(false);

        const handleClick = () => setClick(!click);
    return(
        <>
        <nav className="navbar">
            <div className="nav-container">
                <Nav activeClassName="active" className="nav-logo disabled">
                    FELIX
                </Nav>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                <NavLink exact to="/about" activeClassName="active" className="nav-links" >
                    About
                </NavLink>
                    </li>
                    <li className="nav-item">
                <NavLink exact to="/work" activeClassName="active" className="nav-links" >
                    Work
                </NavLink>
                    </li>
                    <li className="nav-item">
                <NavLink exact to="/project" activeClassName="active" className="nav-links" >
                    Project
                </NavLink>
                    </li>
                    <li className="nav-item">
                <NavLink exact to="/contact" activeClassName="active" className="nav-links" >
                    Contact
                </NavLink>
                    </li>
                </ul>
                <div className="nav-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times":"fas fa-bars"}></i> 
                </div>
            </div>
        </nav>
        </>
    )
}

export default NavBar