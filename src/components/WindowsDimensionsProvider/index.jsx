import { createContext, useContext, useState, useEffect } from "react";

const WindowsDimensionsContext = createContext(null);

const WindowDimensionsProvider = ({ children }) => {
  const [dimensions, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerheight
  });

  useEffect(() => {
    const handleResize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <WindowsDimensionsContext.Provider value={dimensions}>
      {children}
    </WindowsDimensionsContext.Provider>
  );
};

export default WindowDimensionsProvider;

export const useWindowDimensions = () => useContext(WindowsDimensionsContext);
