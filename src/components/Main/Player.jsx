import { useContext } from "react";
import ReactJWPlayer from "react-jw-player";
import { Watcher } from "../../context";

const Player = () => {
  const local = localStorage.getItem("streaming")
  const { StreamLink } = useContext(Watcher);
  return (
    <section className="player">
      <ReactJWPlayer
        playerId="my-unique-id"
        playerScript="https://cdn.jwplayer.com/libraries/ynxSe3tf.js"
        file={StreamLink ? StreamLink : local}
        isAutoPlay={true}
      />
    </section>
  );
};

export default Player;
