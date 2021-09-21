import { useContext } from "react";
import { Watcher } from "../../context";
const ChannelCards = () => {
    const { playlist,setStreamLink } = useContext(Watcher);
    return <>
    {playlist.map((elm) =>(
        <div className="channels-card" key={elm.channel_name} onClick={_=>setStreamLink(elm.video_url)}>
      <img src={elm.img} alt={elm.channel_name}/>
      <h4>{elm.channel_name}</h4>
      <span>{elm.group}</span>
    </div>
  ))}
</>
}
export default ChannelCards