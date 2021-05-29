import React, { useEffect, useMemo, useState } from 'react';
import Loader from "react-loader-spinner";
import VideoItem from '../VideoItem'
import axios from 'axios';
import { NotificationManager } from 'react-notifications';
import { SERVER_HOST } from '../../constants';
import './index.css';

function Videos({ data, searchTerm }) {
  const videoItems = data.map((item) => {
    return <VideoItem key={item.id} videoMeta={item}  searchTerm={searchTerm}/>
  });

  return (
    <div className="video_list">
      {videoItems}
    </div>
  );
}

export default function VideoList({ location: { state } }) {
  const [loaded, setLoaded] = useState(false);
  const [videoList, setVideoList] = useState([]);
  useEffect(() => {
    const f = async () => {
      try {
        const response = await axios.get(`${SERVER_HOST}/video/multiple`, {
          params: {
            search: state.searchTerm
          }
        });
        setVideoList(response.data.videos);
        setLoaded(true);
      } catch (err) {
        const errorMessage = err.message ? err.message : err;
        setLoaded(true);
        return NotificationManager.error(errorMessage);
      }
    }
    f();
  }, [state]);
  return (
    <div>
      {!loaded && <div className="gif_loader">
        <Loader type="Circles" color="#00BFFF" height={100} width={100} />
      </div>}
      {loaded && <Videos data={videoList} searchTerm={state.searchTerm} />}
    </div>
  );
}
