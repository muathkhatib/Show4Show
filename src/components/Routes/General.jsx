import { useEffect, useContext } from "react";
import { Watcher } from "../../context";

const General = () => {
  const { setPlaylistLink } = useContext(Watcher);
  useEffect(() => {
    console.log('general')
    setPlaylistLink("https://iptv-org.github.io/iptv/categories/general.m3u");
    return () => setPlaylistLink("");
    // eslint-disable-next-line
  }, []);

  return null;
};

export default General;
