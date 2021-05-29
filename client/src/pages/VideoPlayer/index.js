import React, { useState, useEffect, createRef } from "react";
import Loader from "react-loader-spinner";
import VideoPlayerTab from "../../components/VideoPlayerTab/test.js";
import "./index.css";

import transcript_data from "./transcription.json";
import TextTracks from "../../components/TextTracks";

function transform(data) {
  let transformed_data = [],
    count = 0;

  for (var i = 0; i < data.length; i++) {
    if (data[i].hasOwnProperty("start_time")) {
      transformed_data.push({
        start_time: data[i].start_time,
        value: data[i].alternatives[0].content,
      });
      count++;
    } else {
      if (count !== 0) {
        transformed_data[count - 1].value += data[i].alternatives[0].content;
      }
    }
  }
  return transformed_data;
}

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [transcriptData, setTranscriptData] = useState([]);
  const [timer, setTimer] = useState(0);

  let refToChild = createRef();

  useEffect(() => {
    setTranscriptData([...transform(transcript_data.results.items)]);
  }, []);

  function highlightText(currentTime) {
    transcriptData.forEach((item, i) => {
      if (item.start_time < currentTime || item.start_time > currentTime + 5) {
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
    console.log(currentTime, toChange);
    if (toChange) {
      setIsPlaying((prevState) => {
        return !prevState;
      });
    }
    setTimer(currentTime);
  }

  const searchWords = ["the", "a", "an", "in", "at", "of"];
  const videoInformation = {
    title: "I suck",
    image: "../../public/test.jpg",
    body: "Lol lol lollolollolloolol  lolololololo",
    tags: ["anime", "shonen", "heroes"],
    id: "8",
  };

  return (
    <div className="video_player_box">
      <div className="video_player_tab">
        <VideoPlayerTab
          changeStatus={changeStatus}
          ref={refToChild}
          data={transcriptData}
          videoInformation={videoInformation}
          keyword={searchWords}
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
