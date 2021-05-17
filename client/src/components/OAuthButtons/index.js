import React from 'react';
import { Github } from 'react-bootstrap-icons';
import './index.css';

function OAuthButtons({
    title,
    action = () => { }
}) {
    return (
        <button className="github_oauth_btn my-2">
            <div className="btn_content">
                <div className="btn_content_title">
                    {title}
                </div>
                <div className="btn_content_icon">
                    <Github />
                </div>
            </div>
        </button>
    )
}

export default OAuthButtons;