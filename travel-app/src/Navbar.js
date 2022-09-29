import React from "react";
import earth from "./earth.png"

function Navbar()
{

    return(

        <div className="navbar-container">
        <img src={earth} className="navbar-logo"/>
        <h2>my travel journal</h2>
        </div>
    )
    
   
}

export default Navbar