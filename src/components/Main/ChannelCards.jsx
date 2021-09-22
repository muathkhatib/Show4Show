import { useContext } from "react";
import { Watcher } from "../../context";
const ChannelCards = () => {
  const { playlist, setStreamLink, filterChannels } = useContext(Watcher);
  const filtedData = (array) =>
    array.filter((e) =>
      e.channel_name.toLowerCase().includes(filterChannels.toLowerCase())
    );
  return (
    <>
      {filtedData(playlist).map((elm) => (
        <div
          className="channel-card"
          key={elm.video_url}
          onClick={() => {
            setStreamLink(elm.video_url)
            localStorage.setItem('streaming',elm.video_url)
          }}
        >
          <div className="channel-card-image-img">
            <img
              className="channel-card-img"
              src={
                elm.img
                  ? elm.img
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png"
              }
              alt={elm.channel_name.toLowerCase()}
            />
          </div>
          <h4 className="channel-card-title">{elm.channel_name}</h4>
          <span className="channel-card-category">Category: {elm.group}</span>
        </div>
      ))}
    </>
  );
};
export default ChannelCards;
