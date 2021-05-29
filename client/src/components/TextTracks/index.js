import React from "react";

export default function TextTracks({ data }) {

  const textItems = data.filter(item => item !== '.' && item !== ',').map((item, i) => {
    item.value += " ";
    return (
      <span
        className={i.toString() + "_class_id text_transcript"}
        key={i.toString() + "_class_id"}
      >
        {item.word}&nbsp;
      </span>
    );
  });

  return <div>{textItems}</div>;
}
