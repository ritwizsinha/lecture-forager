import React from 'react';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge'
import { SERVER_HOST } from '../../constants';
import './index.css';


function Tags(props) {
    const tags = props.tags.split(',');
    const tagList = tags.slice(0, Math.min(tags.length, 40)).map((tag) => {
        return <Badge pill variant="dark">
            {tag}
        </Badge>
    });
    return (
        <div>{tagList}</div>
    )
}

export default function VideoItem({ videoMeta, searchTerm }) {
    console.log("Inside item video", searchTerm);
    const { title, description, keywords, filename } = videoMeta;
    const props = {
        title,
        description,
        keywords,
        filename
    }
    return (
        <div className="video_box" >
            <div>
                <Link to = {{
                    pathname: '/videoPlayer',
                    state: {
                        ...videoMeta,
                        searchTerm
                    }
                }}>
                    <img src={`${SERVER_HOST}/static/${filename.slice(0, filename.lastIndexOf('.'))}/tn.png`}  alt="" className="image_body" />
                </Link>
            </div>
            <div className="video_content">
                <div className="video_heading">{title}</div>
                <div className="video_body">{description}</div>
                <div className="video_tags"><Tags tags={keywords ?? []} /> </div>
            </div>
        </div>

    )
}