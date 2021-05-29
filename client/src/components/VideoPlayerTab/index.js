import React, { useState, useEffect } from "react";
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  PlaybackRateMenuButton,
  BigPlayButton,
  PosterImage,
} from "video-react";

import "video-react/dist/video-react.css";
// import 'index.css';

const sources = {
  sintelTrailer: "http://media.w3.org/2010/05/sintel/trailer.mp4",
  bunnyTrailer: "http://media.w3.org/2010/05/bunny/trailer.mp4",
  bunnyMovie: "http://media.w3.org/2010/05/bunny/movie.mp4",
  test: "http://media.w3.org/2010/05/video/movie_300.webm",
};

function seek(seconds, player) {
  return () => {
    player.seek(seconds);
  };
}

export default function VideoPlayerTab(props) {
  const [playerRef, setPlayerRef] = useState({});

  function changePlayingStatus() {
    props.changeStatus();
  }

  useEffect(() => {
    if (
      !(Object.keys(playerRef).length === 0 && playerRef.constructor === Object)
    ) {
      playerRef.subscribeToStateChange((state) => {
        setPlayerRef(state);
      });
    }
    document
      .getElementsByClassName("video-react-video")[0]
      .addEventListener("click", changePlayingStatus);
    document
      .getElementsByClassName("video-react-play-control")[0]
      .addEventListener("click", changePlayingStatus);
    document
      .getElementsByClassName("video-react-big-play-button")[0]
      .addEventListener("click", changePlayingStatus);
  }, []);

  return (
    <div>
      <Player
        ref={(player) => {
          setPlayerRef(player);
        }}
      >
        <source
          src={
            props.source
              ? props.source
              : "http://media.w3.org/2010/05/bunny/movie.mp4"
          }
        />
        <BigPlayButton position="center" />
        <ControlBar autoHide={true}>
          <ReplayControl seconds={10} order={1.1} />
          <ForwardControl seconds={30} order={1.5} />
          <PlaybackRateMenuButton
            rates={[2.5, 2, 1.75, 1.5, 1.25, 1, 0.75]}
            order={7.1}
          />
        </ControlBar>
      </Player>
    </div>
  );
}
