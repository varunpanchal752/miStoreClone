import ProductReviewCard from './ProductReviewCard.js';
import '../styles/ProductReviews.css';
import React from 'react'

const ProductReviews = ({productReviews}) => {
    return (
        <div className="ProductReviews">
            {productReviews.map((item,index) => (
                <ProductReviewCard image={item.image} index={index} key={item.image} name={item.name} price={item.price} review={item.review}/>
            ))}
        </div>
    )
}

export default ProductReviews
