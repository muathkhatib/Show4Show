import { useContext } from "react";
import ReactJWPlayer from "react-jw-player";
import { Watcher } from "../../context";

const Player = () => {
  console.log("player", localStorage.getItem("stream"));
  const { StreamLink } = useContext(Watcher);
  return (
    <section className="player">
      <ReactJWPlayer
        playerId="my-unique-id"
        playerScript="https://cdn.jwplayer.com/libraries/ynxSe3tf.js"
        file={StreamLink}
        isAutoPlay={true}
      />
    </section>
  );
};

export default Player;
