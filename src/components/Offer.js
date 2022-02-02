import React from 'react'

const Offer = ({src,index,link}) => {
    return <a href={link}><img src={src} alt={`${index} offer`}/></a>
}

export default Offer
