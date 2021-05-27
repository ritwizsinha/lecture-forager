import React, { useState } from 'react';
import { NotificationManager } from 'react-notifications';
import Loader from 'react-loader-spinner';
import axios from 'axios';
import { SERVER_HOST } from '../../constants';

import './index.css';

function UploadPage() {
        const [file, setFile] = useState(null);
        const [title, setTitle] = useState('');
        const [description, setDescription] = useState('');
        const [pageState, setPageState] = useState('normal');
        const getExtension = filename => {
                return filename.slice(filename.lastIndexOf('.') + 1);
        }
        const isVideo = (ext) => {
                return ['mp4'].indexOf(ext) !== -1;
        }
        const onChangeHandler = event => {
                const file = event.target.files[0];
                if (isVideo(getExtension(file.name))) {
                        setFile(file);
                } else {
                        NotificationManager.error('Please input a valid video file');
                }
        }
        const fileUploadHandler = async () => {
                const data = new FormData();
                data.append('file', file)
                data.append('title', title);
                data.append('description', description);
                data.append('fileName', file.name)
                try {
                        setPageState('submitted');
                        await axios.post(`${SERVER_HOST}/video`, data);
                        NotificationManager.success('Video uploaded successfully');
                } catch (err) {
                        NotificationManager.error(err.message ? err.message : err);
                }
                setPageState('normal');
        };

        const handleSubmit = async event => {
                event.preventDefault();
                if (!title || !description || !file) {
                        return NotificationManager.error("cannot fill with empty fields");
                }
                await fileUploadHandler()
        }
        return (
                <div className="lf_file_upload">
                        {pageState === 'submitted' && <Loader
                                type="TailSpin"
                                color="#00BFFF"
                                height={100}
                                width={100}
                                timeout={3000} //3 secs
                        />}
                        {pageState === 'normal' && <form method="post">
                                <div className="lf_upload_heading">Enter your information</div>
                                <div className="form-group files">
                                        <input type="file" name="file" className="form-control" onChange={onChangeHandler} />
                                </div>
                                <div className="form-group lf_form_row">
                                        <label>Title</label>
                                        <input placeholder="Enter video title" className="form-control" required onChange={(e) => setTitle(e.target.value)} />
                                </div>
                                <div className="form-group lf_form_row">
                                        <label>Description</label>
                                        <input placeholder="Enter video description" className="form-control" required onChange={(e) => setDescription(e.target.value)} />
                                </div>
                                <div>
                                        <button width="100%" type="button" className="btn btn-info lf_submit_btn" onClick={handleSubmit}>Upload File</button>
                                </div>
                        </form>}

                </div>
        )
}

export default UploadPage;