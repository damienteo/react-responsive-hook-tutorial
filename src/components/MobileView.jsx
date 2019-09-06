import React from "react";
import TabbedView from "./TabbedView";

const MobileView = ({ items }) => {
  return (
    <div className="container box">
      <TabbedView items={items}></TabbedView>
    </div>
  );
};

export default MobileView;
