import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export const VideoPlayer = (props) => {
  let { height, width } = useWindowDimensions();
  const playerWidth =
    width > 1000 ? width / 3 : width > 700 ? width / 2 : width;
  return (
    <ReactPlayer
      url={props.videoUrl}
      width={playerWidth}
      playsinline={true}
      controls={true}
      style={{ margin: "0 auto" }}
    />
  );
};
