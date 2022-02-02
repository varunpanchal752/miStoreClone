import VideoCard from './VideoCard.js';
import '../styles/Videos.css';
import React from 'react'

const Videos = ({videos}) => {
    return (
        <div className="Videos">
            {
                videos.map((item,index) => (
                <VideoCard key={item.image} index={index} image={item.image} name={item.name}/>
                ))
            }
        </div>
    )
}

export default Videos
