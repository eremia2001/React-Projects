import React from "react";
import trollFace from  "./TrollFace.png"

function Header ()
{
    return(
        <div className="header-container">
            <div className="header-titleContainer">
                <img src={trollFace} className="header-memeImg"/>
                <h1 className="header-title">MemeGenerator</h1>
            </div>
            
            <h4 className="header-courseName">React Course - Project 3</h4>


        </div>
    )
}

export default Header;