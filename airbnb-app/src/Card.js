import React from "react"
import ReactDOM  from "react-dom"
import star from "./star.png"




function Card(props)
{
return(


<div className="bottom-imgContainer">
                        { props.openSpots == 0 &&<div className="card-soldOut">SOLD OUT</div> }
                        <img src={props.coverImg} className="bottom-img"/>
                <div className="bottom-singleImgContainer">

                        <img src={star} className="bottom-star" />
                        <span ><p>{props.rating}</p></span>
                        <span><p> ({props.reviewCount})</p></span>
                        <span><p>.</p> </span>
                        <span> <p>{props.country}</p></span>
                </div>

                <div className="bottom-stats">

                <p>{props.title}</p>
                <p> <strong>From {props.price}€ </strong> / person</p> 
                </div>
                
            </div>
)
}
export default Card


