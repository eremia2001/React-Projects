import React from "react";
import memeImg from "./memeimg.png"
import memesData from "./memesData";

function Meme(props)
{
    const topMessage = "Meow";
    const topInput = document.getElementById("topMessage");
    topInput= topMessage;

    return(

    
    <div className="mainContent-memeImg">
        <p className="topMessage">Top Message</p>
        <img src={props.img} className="memeImg" />
        <p className="botMessage">Bottom Message</p>
    </div>
    )
}

export default Meme