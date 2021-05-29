import React from 'react';
import ButtonUI from '../../components/Button';
import { CloudArrowUp } from 'react-bootstrap-icons';

import './index.css';

function UploadPage() {
        return (
                <div className="lf_file_upload">
                        <div className="lf_upload_content">
                                <div className="lf_upload_image">
                                        <CloudArrowUp />
                                </div>
                        </div>
                        <div className="lf_submit_button">
                                <ButtonUI text="Upload" backgroundColor="#000" textColor="#fff" width="200px" />
                        </div>
                        <div className="lf_upload_form">
                                <div className="lf_form_title">
                                        Enter Information: 
                                </div>
                                <div className="lf_form_content">
                                        <div className="lf_form_row">
                                        <label>Title</label>
                                        <input placeholder="Enter video title" width="300px"/>
                                        </div>
                                        <div className="lf_form_row">
                                        <label>Description</label>
                                        <input placeholder="Enter video description" width="300px"/>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default UploadPage;