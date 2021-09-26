import { useContext } from 'react';
import { Watcher } from '../../context';

const ChannelCards = () => {
  const {
    playlist, setStreamLink, filterChannels, setFavoriteChannels,
  } = useContext(Watcher);

  console.log('Channel Cards playlist',playlist);

  const filtedData = (array) => array.filter((e) => e.channel_name
    .toLowerCase()
    .includes(filterChannels
      .toLowerCase()));
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
                    : 'https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg'
                }
                alt={elm.channel_name.toLowerCase()}
                onClick={() => {
                  setStreamLink(elm.video_url);
                  localStorage.setItem('streaming', elm.video_url);
                }}
              />
              
            </div>
            <div className="channel-card-description">

              <h4 className="channel-card-title">{elm.channel_name}</h4>
              <span
                onClick={(event) => {
                  if (
                    event.target.className
                    === 'far fa-bookmark channel-card-favorite'
                  ) {
                    event.target.className = 'far fa-bookmark channel-card-favorite';
                    setFavoriteChannels((c) => [...c, elm]);
                    return (event.target.className = 'fas fa-bookmark channel-card-favorite');
                  }
                  event.target.className = 'far fa-bookmark channel-card-favorite';
                }}
              >
                <i className="far fa-bookmark channel-card-favorite" />
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default ChannelCards;
