import React from "react";

import ResponsiveLayout from "../ResponsiveLayout/index";
import MobileView from "../MobileView";
import DesktopView from "../DesktopView";

const Content = ({ items }) => {
  return (
    <ResponsiveLayout
      breakpoint={767}
      renderDesktop={() => <DesktopView items={items} />}
      renderMobile={() => <MobileView items={items} />}
    />
  );
};

export default Content;
