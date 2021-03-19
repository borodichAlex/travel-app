import useWindowDimensions from '../../hooks/useWindowDimensions';
import ReactPlayer from "react-player/youtube";

export const VideoPlayer = (props) => {
  let { height, width } = useWindowDimensions();
  const playerWidth = width > 1000 ? "1000px" : width - 50;
  const playerHeight = width < 500 ? height / 2.5 : "600px";
  return (
    <ReactPlayer
      url={props.videoUrl}
      width={playerWidth}
      height={playerHeight}
      playsinline={true}
      controls={true}
      style={{ margin: "30px auto "}}
    />
  );
};
