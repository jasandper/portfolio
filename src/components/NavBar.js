import React from "react";
import { NavLink } from "react-router-dom";


export default function NavBar() {
    return (
        <header>
            <div>
                <nav>
                    <NavLink to="/" exact>
                      Jason Perez
                    </NavLink>
                    <NavLink to="/about" >
                      About
                    </NavLink>
                    <NavLink to="/projects" exact>
                      Projects
                    </NavLink>
                    <NavLink to="/contact" exact>
                      Contact
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}