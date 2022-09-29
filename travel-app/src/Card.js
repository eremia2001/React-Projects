import React from "react";
import map from "./map.svg"
function Card(props)
{
    return(
        <div className="card">

            <div className="card-container">
                <img src={props.spot.coverImg} className="card-img" />
                <div className="card-infos">
                    <div className="card-infos-top">
                        <img src={map} className="card-info-mapImg"/>
                        <p className="card-infos-country">{props.spot.country}</p>
                        <p className="card-infos-googleMaps">View on Google Maps</p>
                    </div>
                    <h1>{props.spot.place}</h1>
                    <p className="card-date"><strong>{props.spot.dateIntervall}</strong></p>
                    <div className="card-textContainer">
                    <p className="card-text">{props.spot.description}</p>
                    </div>
                </div>
            </div>
            <hr/>
        </div>

    )
}

//         

export default Card