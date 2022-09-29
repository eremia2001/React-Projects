import React from "react"
import logo from "./airbnb 1.png"
import photos from "./Group 77.png"

function Top()
{
    return(
        <div className="header">
            <nav className="header-navBar">
                <img src={logo} className="header-logo"/>
            </nav>
            <div className="header-groupPhotoContainer">
                <img src={photos} className="header-groupPhoto"/>
            </div>
        </div>
    );
}

export default Top

