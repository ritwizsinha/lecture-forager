import React from "react";
import Tags from "../Tags";
import "./index.css";

export default function VideoItem(props) {
  return (
    <div className="video_box">
      <div>
        <img src="./test.jpg" alt="" className="image_body" />
      </div>
      <div className="video_content">
        <span className="video_heading">{props.data.title}</span>
        <span className="video_body">{props.data.body}</span>
        <span className="video_tags">
          <Tags tags={props.data.tags} />{" "}
        </span>
      </div>
    </div>
  );
}
