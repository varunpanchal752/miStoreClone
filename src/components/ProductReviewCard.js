import '../styles/ProductReviewCard.css';
import React from 'react'

const ProductReviewCard = ({index,image,review,name,price}) => {
    return (
        <div className='ProductReviewCard'>
            <img src={image} alt={`${index} review`}/>
            <h5>{review}</h5>
            <span>{name}</span>
            <b>{price}</b>
        </div>
    )
}

export default ProductReviewCard
