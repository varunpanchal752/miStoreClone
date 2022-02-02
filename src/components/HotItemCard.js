import '../styles/HotItemCard.css';
import React from 'react'

const HotItemCard = ({image,index,price,name}) => {
    return (
        <div className="HotItemCard">
            <img src={image} alt={`${index} product`}/>
            <p>{name}</p>
            <span>{price}</span>
        </div>
    )
}

export default HotItemCard
