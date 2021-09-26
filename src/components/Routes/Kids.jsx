import {useEffect, useContext } from "react";
import { Watcher } from "../../context";

const Kids = () => {
  const { setPlaylistLink } = useContext(Watcher);
  useEffect(() => {
    console.log('kids')
    setPlaylistLink('https://iptv-org.github.io/iptv/categories/kids.m3u')
    // return () => setPlaylistLink('')
    // eslint-disable-next-line
},[]);

return null
};

export default Kids;
