import React from "react";


function Joke(props)
{
    return(

    <div className="joke-container">
        <p> <strong>Setup: </strong>{props.setup}  </p>
        <p className="singleJoke"> <strong>Punchline: </strong>{props.punchline}  </p>
        <hr/>

    </div>
    )
}

export default Joke