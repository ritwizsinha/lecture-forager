import React, { useState, useEffect, createRef } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import VideoPlayerTab from "../../components/VideoPlayerTab/test.js";
import "./index.css";
import { SERVER_HOST } from "../../constants";

import TextTracks from "../../components/TextTracks";
export default function VideoPlayerData({ location: { state } }) {
  console.log(state);
  const [loadingOrError, setLoadingOrError] = useState(true);
  const [text, setText] = useState("");
  const [transcriptData, setTranscriptData] = useState([]);

  useEffect(() => {
    const f = async () => {
      const { filename, id } = state;
      try {
        const response = await axios.get(`${SERVER_HOST}/video`, {
          params: {
            filename,
            id,
          },
        });
        setLoadingOrError(false);
        setText(response.data.text);
        setTranscriptData(response.data.timestamps);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    f();
  }, []);

  if (!transcriptData.length) {
    return (
      <div className="gif_loader">
        <Loader type="Circles" color="#00BFFF" height={100} width={100} />
      </div>
    );
  } else {
    return <VideoPlayer transcriptData={transcriptData} text={text} title={state.title} description={state.description}  keywords={state.keywords} searchTerm={state.searchTerm} id = {state.id} filename={state.filename}/>
  }
}
function VideoPlayer({ transcriptData, text, title, description, keywords, searchTerm, id, filename }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timer, setTimer] = useState(0);
  console.log(searchTerm);
  let refToChild = createRef();

  function highlightText(currentTime) {
    transcriptData.forEach((item, i) => {
      if (item.startTime < currentTime || item.startTime > currentTime + 5) {
        document.getElementsByClassName(
          i.toString() + "_class_id"
        )[0].style.backgroundColor = "white";
      } else {
        document.getElementsByClassName(
          i.toString() + "_class_id"
        )[0].style.backgroundColor = "burlywood";
      }
    });
  }

  useEffect(() => {
    highlightText(timer);
  }, [timer]);

  setInterval(() => {
    if (refToChild.current != null) {
      const currentRef = refToChild.current.state.player.currentTime;
      highlightText(currentRef);
    }
  }, 5000);

  function changeStatus(currentTime, toChange) {
    if (toChange) {
      setIsPlaying((prevState) => {
        return !prevState;
      });
    }
    setTimer(currentTime);
  }

  return (
    <div className="video_player_box">
      <div className="video_player_tab">
         <VideoPlayerTab
          changeStatus={changeStatus}
          ref={refToChild}
          data={transcriptData}
          videoInformation={{
            title,
            body: description,
            tags: keywords.split(',')
          }}
          title={title}
          description={description}
          keyword={searchTerm.split(' ')}
          id={id}
          filename={filename}
        /> 
      </div>
      <div className="text_tab">
        {!transcriptData.length && (
          <div className="gif_loader">
            <Loader type="Circles" color="#00BFFF" height={100} width={100} />
          </div>
        )}
        {transcriptData.length && <TextTracks data={transcriptData} />}
      </div>
    </div>
  );
}
