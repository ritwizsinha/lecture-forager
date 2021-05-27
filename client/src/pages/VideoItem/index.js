import axios from 'axios';
import React from 'react';
import Badge from 'react-bootstrap/Badge'
import { SERVER_HOST } from '../../constants';
import './index.css';


function Tags(props) {
    const tagList = props.tags.map((tag) => {
        return <Badge pill variant="dark">
            {tag}
        </Badge>
    });
    return (
        <div>{tagList}</div>
    )
}

export default function VideoItem({ videoMeta }) {
    const { title, description, keywords, filename } = videoMeta;
    return (
        <div className="video_box">
            <div>
                <img src={`${SERVER_HOST}/static/${filename.slice(0, filename.lastIndexOf('.'))}/tn.png`} onError={() => {this.src = './preloader.gif'}} alt="" className="image_body" />
            </div>
            <div className="video_content">
                <span className="video_heading">{title}</span>
                <span className="video_body">{description}</span>
                <span className="video_tags"><Tags tags={keywords ?? []} /> </span>
            </div>
        </div>
    )
}