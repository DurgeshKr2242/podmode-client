import AudioPlayer from "./AudioPlayer";
import { useGlobalPlayerContext } from "/context/PlayerContext";

const MainPlayerComponent = () => {
  const { currentTrack } = useGlobalPlayerContext();
  return (
    currentTrack &&
    (currentTrack.type === "audio" ? <AudioPlayer /> : <AudioPlayer />)
  );
};

export default MainPlayerComponent;
