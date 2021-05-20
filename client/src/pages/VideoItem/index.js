import React from 'react';
import './index.css';

export default function VideoItem(props) {


    return (
        <div className="video_box">
            <div>
                <img src="./test.jpg" alt="" className="image_body" />
            </div>
            <div className="video_content">
                <span className="video_heading"><h3>{props.data.title}</h3></span>
                <span className="video_body">{props.data.body}</span>
            </div>
        </div>
    )
}