import {useEffect, useContext } from "react";
import { Watcher } from "../../context";

const Kids = () => {
  const { setWatcherType,playlist,setStreamLink } = useContext(Watcher);
  useEffect(() => {
    setWatcherType('kids')
    return () => setWatcherType('')
},[]);

  return (
    <section>

      {playlist.map((elm) =>(
        <div style={{border: '1px solid black'}} onClick={_=>setStreamLink(elm.video_url)}>
          <img src={elm.img} alt={elm.channel_name}/>
          <h4>{elm.channel_name}</h4>
          <span>{elm.group}</span>
          <a href={elm.video_url}>{elm.channel_name}</a>
        </div>
      ))}
    </section>
  );
};

export default Kids;
