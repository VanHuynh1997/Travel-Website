import React from 'react'
import CardItem from './CardItem'
import './Card.css'
function Card() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wapper">
                    <ul className="cards__items">
                        <CardItem
                        src="images/img-2.jpg"
                        text="Explore the Ha Long Bay VN"
                        label="Explore"
                        path="/services" 
                        />
                        <CardItem
                        src="images/img-9.jpg"
                        text="Explore the hidden waterfall deep Amazon jungle"
                        label="Advanture"
                        path="/services" 
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src="images/img-3.jpg"
                        text="Explore the Ha Long Bay VN"
                        label="Explore"
                        path="/services" 
                        />
                        <CardItem
                        src="images/img-4.jpg"
                        text="Explore the hidden waterfall deep Amazon jungle"
                        label="Advanture"
                        path="/services" 
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}
 
export default Card
