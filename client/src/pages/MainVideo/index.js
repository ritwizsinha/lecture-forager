import React from 'react';
import ReactPlayer from 'react-player/lazy';
import Badge from 'react-bootstrap/Badge'
import './index.css';
function MainVideo({
    url,
    title,
    description,
    keywords,
    ...props }) {
    return (
        <div className="lf_main_page">
            <div className="lf_video_content">
                <div className="lf_video_container">
                    <ReactPlayer
                        url={url}
                        controls={true}
                        width={640}
                        height={300}
                        volume={0}
                    />
                </div>
                <div className="lf_video_info">
                    <div className="lf_video_title">
                        {title}
                    </div>
                    <div className="lf_video_description">
                        {description}
                    </div>
                </div>
            </div>
            <div className="lf_video_transcription_content">
                Hello
            </div>
        </div>
    )
}

export default function MainVideoWithData () {
    const url = 'https://www.youtube.com/watch?v=Oc1A-AyekOE';
    const title = 'Machine Learning Ka Placement Sach | Jobs Kahan Hai?';
    const description = `In this video, I’ve discussed how ML and AI are hyped up so much and what is the practical and feasible way of using your knowledge of ML AI in order to leverage maximum benefit.
    I’ve discussed how a project in my Resume has helped me so much in the past. Then I’ve discussed a really good roadmap and also some of the best resources to learn ML and AI.`;

    return <MainVideo url={url} title={title} description={description} />
}