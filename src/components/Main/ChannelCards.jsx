import { useContext } from "react";
import { Watcher } from "../../context";
const ChannelCards = () => {
  const { playlist, setStreamLink, filterChannels, setFavoriteChannels } =
    useContext(Watcher);
  const filtedData = (array) =>
    array.filter((e) =>
      e.channel_name.toLowerCase().includes(filterChannels.toLowerCase())
    );
  // const notValue = (value) => !value;

  return (
    <>
      {filtedData(playlist).map((elm, index) => {
        elm.favorited = false;
        return (
          <div className="channel-card" key={index + 1}>
            <div className="channel-card-image-img">
              <img
                className="channel-card-img"
                src={
                  elm.img
                    ? elm.img
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png"
                }
                alt={elm.channel_name.toLowerCase()}
                onClick={() => {
                  setStreamLink(elm.video_url);
                  localStorage.setItem("streaming", elm.video_url);
                }}
              />
            </div>
            <div className="channel-card-description">
              <h4 className="channel-card-title">{elm.channel_name}</h4>
              <span
                onClick={(event) => {
                  if (
                    event.target.className ===
                    "far fa-bookmark channel-card-favorite"
                  ) {
                    event.target.className =
                      "far fa-bookmark channel-card-favorite";
                    setFavoriteChannels((c) => [...c, elm]);
                    return (event.target.className =
                      "fas fa-bookmark channel-card-favorite");
                  }
                  event.target.className =
                    "far fa-bookmark channel-card-favorite";
                }}
              >
                <i className={"far fa-bookmark channel-card-favorite"}></i>
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default ChannelCards;
