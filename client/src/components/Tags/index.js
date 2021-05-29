import React from "react";
import Badge from "react-bootstrap/Badge";

export default function Tags(props) {
  const tagList = props.tags.map((tag) => {
    return (
      <Badge pill variant="dark">
        {tag}
      </Badge>
    );
  });
  return <div>{tagList}</div>;
}
