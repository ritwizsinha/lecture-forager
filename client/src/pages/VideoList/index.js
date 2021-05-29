import React from 'react';
import Loader from "react-loader-spinner";
import VideoItem from '../VideoItem'
import './index.css';

function Videos({ data }) {
  const videoItems = data.map((item) => {
    return <VideoItem key={item.id} videoMeta={item} />
  });

  return (
    <div className="video_list">
      {videoItems}
    </div>
  );
}

export default function VideoList({ videoList }) {
  return (
    <div>
      {!videoList && <div className="gif_loader">
        <Loader type="Circles" color="#00BFFF" height={100} width={100} />
      </div>}
      {videoList && <Videos data={videoList} />}
    </div>
  );
}
