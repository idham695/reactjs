import React from 'react';
import './YoutubeComp.css';


const YoutubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <p>image thumb here</p>
            <p>{props.title}</p>
            <p>{props.desc}</p>
        </div>
    )
}

YoutubeComp.defaultProps = {
    title: 'hello',
    desc: 'belum ditonton'
}

export default YoutubeComp;