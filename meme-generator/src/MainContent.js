import React from "react";
import memesData from "./memesData";
import Meme from "./Meme";

function MainContent()
{
    const [memeImg,setMemeImg] = React.useState("")
    const [topMessage,setTopMessage] = React.useState("");
    
    function onClick()
    {
        const memes = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memes.length);
        const url = memes[randomNumber].url;
        setMemeImg(url);
    }




    return(

        <div className="mainContent-container">

            <div className="mainContent-newMemeContainer">
                <div className="mainContent-inputContainer">
                    <input type="text" placeholder="Top Message" className="mainContent-input topMessage" />
                    <input type="text" placeholder="Bottom Messages" className="mainContent-input"/>
                </div>
                <button onClick={onClick} className="mainContent-button"  >Get a new meme Image</button>
            </div>

            <Meme img= {memeImg}/>

        </div>
    )
}

export default MainContent