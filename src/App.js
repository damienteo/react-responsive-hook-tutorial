import React from "react";
import Content from "./components/Content";
import WindowDimensionsProvider from "./components/WindowsDimensionsProvider/index";
// import items from "./data.json";
import "bulma/css/bulma.css";

function App() {
  return (
    <WindowDimensionsProvider>
      <div className="App">
        <Content item={items}></Content>
      </div>
    </WindowDimensionsProvider>
  );
}

export default App;
