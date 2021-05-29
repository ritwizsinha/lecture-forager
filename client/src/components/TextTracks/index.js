import React from "react";

export default function TextTracks(props) {
  const textItems = props.data.map((item, i) => {
    item.value += " ";
    return (
      <span
        className={i.toString() + "_class_id text_transcript"}
        key={i.toString() + "_class_id"}
      >
        {item.value}&nbsp;
      </span>
    );
  });

  return <>{textItems}</>;
}
