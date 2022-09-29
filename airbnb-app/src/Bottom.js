import React from 'react';
import Card from "./Card"
import HeroData from "./HeroData";

function Bottom()
{
    const heroElements = HeroData.map(stat => {
        return(
    <Card 
    id = {stat.id}
    coverImg = {stat.coverImg} 
    rating ={ stat.stats.rating}
    reviewCount = {stat.stats.reviewCount}
    country = {stat.country}
    title = {stat.title}
    price = {stat.price}
    openSpots = {stat.openSpots} /> )} )

    console.log(heroElements)
    return(
        <div className="bottom-container">

            <h2>Online Experiences</h2>
            <p> Join unique interactive activities led by  one-of-a-kind hosts—all without leaving home.</p>

            
            <div className="bottom-cards">
            
            {heroElements}
            </div>
            
        </div>
    )
}

export default Bottom