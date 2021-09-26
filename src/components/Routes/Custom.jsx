import { useEffect, useContext } from "react";

import { Watcher } from "../../context";

const Custom = ({ link }) => {
  const { setPlaylistLink } = useContext(Watcher);
  useEffect(() => {
    setPlaylistLink(link);
    return () => setPlaylistLink("");
    // eslint-disable-next-line
  }, []);

  return null;
};
export default Custom;
