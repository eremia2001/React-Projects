import React from "react";

function Die(props)
{
    const styles = 
    {
        backgroundColor : props.isHeld ? "#59E391": "white"
    }
    return(
        <div  className="die"  onClick={props.tenzieClick} style={styles}>
             <h2>{props.value}</h2>   
        </div>
    )
}

export default Die