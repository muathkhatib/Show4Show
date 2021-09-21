import { useContext } from "react";
import { Watcher } from "../../context";
const ChannelCards = () => {
  const { playlist,setStreamLink,filterChannels } = useContext(Watcher);
  const filtedData = (array) => array.filter( e => e.channel_name.includes(filterChannels))
  return <>
    {filtedData(playlist).map((elm) =>(
        <div className="channels-card" key={elm.channel_name} onClick={_=>setStreamLink(elm.video_url)}>
      <img src={elm.img} alt={elm.channel_name}/>
      <h4>{elm.channel_name}</h4>
      <span>{elm.group}</span>
    </div>
  ))}
</>
}
export default ChannelCards