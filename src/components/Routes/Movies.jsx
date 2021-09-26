import {useEffect, useContext } from "react";
import { Watcher } from "../../context";

const Movies = () => {
  const { setPlaylistLink } = useContext(Watcher);
  useEffect(() => {
    console.log('Movies')
    setPlaylistLink("https://iptv-org.github.io/iptv/categories/movies.m3u");
    // return () => setPlaylistLink("");
    // eslint-disable-next-line
  }, []);

  return null
};

export default Movies;
