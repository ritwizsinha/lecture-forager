import React from "react";
import VideoItem from "../VideoItem";

export default function VideoCards(props) {
  const videoItems = props.data.map((item) => {
    return <VideoItem key={item.id} data={item} />;
  });

  return <div className="video_list">{videoItems}</div>;
}
