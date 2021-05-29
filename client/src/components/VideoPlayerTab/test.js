import React, { Component } from "react";
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  PlaybackRateMenuButton,
  BigPlayButton,
} from "video-react";
import VideoItem from "../VideoItem";

import "video-react/dist/video-react.css";
import "./index.css";

const sources = {
  sintelTrailer: "http://media.w3.org/2010/05/sintel/trailer.mp4",
  bunnyTrailer: "http://media.w3.org/2010/05/bunny/trailer.mp4",
  bunnyMovie: "http://media.w3.org/2010/05/bunny/movie.mp4",
  test: "http://media.w3.org/2010/05/video/movie_300.webm",
  aws: 'https://lecture-forager.s3.ap-south-1.amazonaws.com/videos/c5ce0567-35b7-466c-beed-987eb14c9de0SpinupanNginxDockerContainerasaLoadBalancer.mp4'
};

const moviePath = '/home/ritwiz/Desktop/github.com/lecture-forager/videos/Spin up an Nginx Docker Container as a LoadBalancer.mp4'
export default class VideoPlayerTab extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      source: sources.aws,
      keywords: this.props.data.filter(word => {
        return this.props.keyword.includes(word.word);
      }),
    };
    this.seek = this.seek.bind(this);
  }

  changePlayingStatus = (toChange) => {
    this.props.changeStatus(this.state.player.currentTime, toChange);
  };

  componentDidMount() {
    // subscribe state change
    this.player.subscribeToStateChange(this.handleStateChange.bind(this));
    document
      .getElementsByClassName("video-react-video")[0]
      .addEventListener("click", () => {
        this.changePlayingStatus(true);
      });
    document
      .getElementsByClassName("video-react-play-control")[0]
      .addEventListener("click", () => {
        this.changePlayingStatus(true);
      });
    document
      .getElementsByClassName("video-react-big-play-button")[0]
      .addEventListener("click", () => {
        this.changePlayingStatus(true);
      });
    document
      .getElementsByClassName("video-react-icon-replay-10")[0]
      .addEventListener("click", () => {
        this.changePlayingStatus(false);
      });
    document
      .getElementsByClassName("video-react-icon-forward-30")[0]
      .addEventListener("click", () => {
        this.changePlayingStatus(false);
      });
    document
      .getElementsByClassName("video-react-progress-control")[0]
      .addEventListener("click", () => {
        this.changePlayingStatus(false);
      });
  }

  handleStateChange(state) {
    // copy player state to this component's state
    this.setState({
      player: state,
    });
  }

  seek(seconds) {
    return () => {
      this.player.seek(seconds);
    };
  }

  render() {
    console.log(this.state, this.props);
    return (
      <div className="lf_video_play">
        <div className="main_video">
          <Player
            ref={(player) => {
              this.player = player;
            }}
            fluid={false}
            width={600}
          >
            <source src={this.state.source} />
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
        <div className="lf_title">
            {this.props.title}
        </div>
        <div className="lf_description">
            {this.props.description}
        </div>
        <div className="control_bar">
          {this.state.keywords.map((keyword, i) => {
            return (
              <div
                className={i.toString() + "_control_bar control_bar_item"}
                onClick={this.seek(parseInt(keyword.startTime))}
                key={i}
              >
                {keyword.word}({Math.round(100 * keyword.startTime / 60) / 100})
              </div>
            );
          })}
        </div>
        <div>
        </div>
      </div>
    );
  }
}
