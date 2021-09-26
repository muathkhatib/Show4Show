import {useEffect, useContext } from "react";
import { Watcher } from "../../context";

const Sports = () => {
  const { setPlaylistLink } = useContext(Watcher);
  useEffect(() => {
    console.log('Sports');
    setPlaylistLink('https://iptv-org.github.io/iptv/categories/sports.m3u')
    // return () => setPlaylistLink('')
    // eslint-disable-next-line
},[]);
return null
};
export default Sports;