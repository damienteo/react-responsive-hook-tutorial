import React from "react";

const Tile = ({ title, content }) => {
  return (
    <div classname="tile is-parent notification box">
      <div className="title is-child">
        <p className="title">{title}</p>
        <span className="content">{content}</span>
      </div>
    </div>
  );
};

export default Tile;
