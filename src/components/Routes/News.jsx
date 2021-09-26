import {useEffect, useContext } from "react";
import { Watcher } from "../../context";

const News = () => {
  const { setPlaylistLink } = useContext(Watcher);
  useEffect(() => {
    console.log('News');
    setPlaylistLink('https://iptv-org.github.io/iptv/categories/news.m3u')
    // return () => setPlaylistLink('')
    // eslint-disable-next-line
},[]);

return null
};

export default News;
