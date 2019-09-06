import React, { Component } from "react";

import Tile from "./Tile";

import { useWindowsDimensions } from "./WindowsDimensionsProvider";

const DesktopView = ({ items }) => {
  const { width } = useWindowsDimensions;

  return (
    <div
      className={"tile is-ancestor".concat(width < 1088 ? "is-vertical" : "")}
    >
      {items.map((item, idx) => {
        <Tile key={item.title} {...item}></Tile>;
      })}
    </div>
  );
};

export default DesktopView;
